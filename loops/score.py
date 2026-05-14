#!/usr/bin/env python3
"""
score.py — quality gate híbrido para skills candidatas
Regras determinísticas primeiro. LLM só se as regras passarem.

Uso:
  python3 loops/score.py skills/pending/minha-skill.md
  python3 loops/score.py skills/pending/minha-skill.md --existing skills/active/

Exit 0 = passa. Exit 1 = falha. Imprime motivo no stdout.
"""

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path


# ── Regras determinísticas ────────────────────────────────────────────────────

def check_has_trigger_condition(content: str) -> tuple[bool, str]:
    """A skill precisa dizer quando deve ser usada."""
    trigger_patterns = [
        r"use (this skill |when |sempre que)",
        r"trigger",
        r"quando",
        r"acione",
        r"applies? (when|to)",
        r"use for",
    ]
    for pat in trigger_patterns:
        if re.search(pat, content, re.IGNORECASE):
            return True, "trigger condition presente"
    return False, "trigger condition ausente — skill precisa dizer quando usar"


def check_has_instructions(content: str) -> tuple[bool, str]:
    """A skill precisa ter instruções acionáveis, não só observações."""
    instruction_verbs = [
        r"\b(faça|use|evite|sempre|nunca|prefira|garanta|verifique)\b",
        r"\b(do|use|avoid|always|never|prefer|ensure|check|return|call)\b",
    ]
    for pat in instruction_verbs:
        if re.search(pat, content, re.IGNORECASE):
            return True, "instruções acionáveis presentes"
    return False, "sem instruções acionáveis — skill descreve mas não instrui"


def check_bounded_scope(content: str) -> tuple[bool, str]:
    """Skill não deve ter mais de 500 palavras — escopo bounded."""
    word_count = len(content.split())
    if word_count <= 500:
        return True, f"escopo ok ({word_count} palavras)"
    return False, f"skill muito longa ({word_count} palavras, máx 500) — divida em skills menores"


def check_not_duplicate(content: str, existing_dir: Path) -> tuple[bool, str]:
    """Não duplica skill existente por similaridade de hash de conteúdo."""
    if not existing_dir.exists():
        return True, "nenhuma skill existente para comparar"

    candidate_hash = hashlib.md5(content.strip().lower().encode()).hexdigest()

    for skill_file in existing_dir.glob("*.md"):
        existing_content = skill_file.read_text()
        existing_hash = hashlib.md5(existing_content.strip().lower().encode()).hexdigest()

        # hash exato
        if candidate_hash == existing_hash:
            return False, f"duplicata exata de {skill_file.name}"

        # similaridade por palavras-chave (overlap > 70%)
        candidate_words = set(re.findall(r'\w{5,}', content.lower()))
        existing_words = set(re.findall(r'\w{5,}', existing_content.lower()))
        if candidate_words and existing_words:
            overlap = len(candidate_words & existing_words) / max(len(candidate_words), len(existing_words))
            if overlap > 0.70:
                return False, f"muito similar a {skill_file.name} (overlap {overlap:.0%}) — considere refinar a existente"

    return True, "não duplica skills existentes"


# ── Gate LLM (só chamado se regras passaram) ──────────────────────────────────

def check_with_llm(skill_content: str, skill_name: str) -> tuple[bool, str]:
    """
    Avaliação semântica via API Anthropic.
    Só executada se todas as regras determinísticas passaram.
    """
    try:
        import urllib.request

        prompt = f"""Você é um avaliador de skills para sistemas de agentes LLM.

Avalie esta skill candidata em 4 critérios. Responda APENAS com JSON:

{{
  "trigger_clear": true/false,       // agente sabe inequivocamente quando usar?
  "no_duplicate_concept": true/false, // cobre conceito não coberto por skills genéricas?
  "instructions_actionable": true/false, // instrui O QUÊ fazer, não só O QUÊ evitar?
  "bounded_scope": true/false,       // faz UMA coisa bem, não 5 coisas mal?
  "overall": "pass"/"fail",
  "reason": "uma linha explicando"
}}

Skill candidata ({skill_name}):
---
{skill_content[:1500]}
---"""

        payload = json.dumps({
            "model": "claude-haiku-4-5-20251001",
            "max_tokens": 300,
            "messages": [{"role": "user", "content": prompt}]
        }).encode()

        req = urllib.request.Request(
            "https://api.anthropic.com/v1/messages",
            data=payload,
            headers={
                "Content-Type": "application/json",
                "anthropic-version": "2023-06-01",
            }
        )

        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())

        text = data["content"][0]["text"]
        # extrai JSON da resposta
        match = re.search(r'\{.*\}', text, re.DOTALL)
        if not match:
            return True, "LLM não retornou JSON — dando benefício da dúvida"

        result = json.loads(match.group())
        passed = result.get("overall") == "pass"
        reason = result.get("reason", "sem motivo")
        return passed, f"LLM: {reason}"

    except Exception as e:
        # se LLM falha, não bloqueia — regras determinísticas já validaram
        return True, f"LLM indisponível ({e}) — passou pelas regras deterministicas"


# ── Orquestrador ──────────────────────────────────────────────────────────────

def score_skill(skill_path: Path, existing_dir: Path | None = None) -> dict:
    if not skill_path.exists():
        return {"passed": False, "reason": f"arquivo não encontrado: {skill_path}"}

    content = skill_path.read_text()
    skill_name = skill_path.stem
    results = {}

    # ── Fase 1: regras determinísticas ────────────────────────────────────────
    rules = [
        ("trigger_condition", check_has_trigger_condition(content)),
        ("has_instructions", check_has_instructions(content)),
        ("bounded_scope", check_bounded_scope(content)),
    ]

    if existing_dir:
        rules.append(("not_duplicate", check_not_duplicate(content, existing_dir)))

    failed_rules = []
    for rule_name, (passed, msg) in rules:
        results[rule_name] = {"passed": passed, "msg": msg}
        if not passed:
            failed_rules.append(msg)

    if failed_rules:
        return {
            "passed": False,
            "phase": "rules",
            "reason": " | ".join(failed_rules),
            "details": results,
        }

    # ── Fase 2: LLM (só se regras passaram) ───────────────────────────────────
    llm_passed, llm_reason = check_with_llm(content, skill_name)
    results["llm"] = {"passed": llm_passed, "msg": llm_reason}

    return {
        "passed": llm_passed,
        "phase": "llm" if not llm_passed else "all",
        "reason": llm_reason if not llm_passed else "todas as validações passaram",
        "details": results,
    }


# ── CLI ───────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Loom skill quality gate")
    parser.add_argument("skill", help="caminho para a skill candidata (.md)")
    parser.add_argument("--existing", help="diretório com skills ativas para comparação",
                        default="skills/active")
    parser.add_argument("--json", action="store_true", help="saída em JSON")
    args = parser.parse_args()

    skill_path = Path(args.skill)
    existing_dir = Path(args.existing) if args.existing else None

    result = score_skill(skill_path, existing_dir)

    if args.json:
        print(json.dumps(result, indent=2, ensure_ascii=False))
    else:
        icon = "✓" if result["passed"] else "✗"
        phase = result.get("phase", "?")
        print(f"{icon} [{phase}] {skill_path.name}: {result['reason']}")

    sys.exit(0 if result["passed"] else 1)


if __name__ == "__main__":
    main()
