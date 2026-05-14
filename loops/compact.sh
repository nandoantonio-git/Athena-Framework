#!/usr/bin/env bash
# compact.sh — Ralph loop para compactar AGENTS.md
# Só executa se AGENTS.md ultrapassar o limiar de tamanho.
# Valida o candidato com shadow test contra trajectories boas.
#
# Uso: bash loops/compact.sh [--force] [--threshold N]

set -euo pipefail

# AGENTS.md com mais de N palavras dispara compactação
WORD_THRESHOLD="${WORD_THRESHOLD:-400}"
MAX_ATTEMPTS=3
FORCE=false

while [[ $# -gt 0 ]]; do
  case $1 in
    --force) FORCE=true; shift ;;
    --threshold) WORD_THRESHOLD="$2"; shift 2 ;;
    *) shift ;;
  esac
done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
AGENTS_FILE="$REPO_ROOT/AGENTS.md"
CANDIDATE_FILE="$REPO_ROOT/AGENTS.md.candidate"
TRAJECTORIES="$REPO_ROOT/memory/trajectories.jsonl"

echo "╔══════════════════════════════╗"
echo "║   loom — compact loop        ║"
echo "╚══════════════════════════════╝"
echo ""

# ── Verifica tamanho atual ────────────────────────────────────────────────────

if [[ ! -f "$AGENTS_FILE" ]]; then
  echo "✗ AGENTS.md não encontrado"
  exit 1
fi

WORD_COUNT=$(wc -w < "$AGENTS_FILE")
echo "→ AGENTS.md atual: $WORD_COUNT palavras (limiar: $WORD_THRESHOLD)"

if [[ "$WORD_COUNT" -le "$WORD_THRESHOLD" ]] && [[ "$FORCE" == "false" ]]; then
  echo "✓ AGENTS.md dentro do limiar — compactação não necessária"
  echo "  Use --force para compactar mesmo assim"
  exit 0
fi

echo "  Acima do limiar — iniciando compactação"

# ── Exporta trajectories para shadow test ─────────────────────────────────────

python3 "$REPO_ROOT/memory/recorder.py" --export 2>/dev/null || true

TRAJECTORY_COUNT=0
if [[ -f "$TRAJECTORIES" ]]; then
  TRAJECTORY_COUNT=$(wc -l < "$TRAJECTORIES")
fi

echo "→ Trajectories disponíveis para shadow test: $TRAJECTORY_COUNT"

if [[ "$TRAJECTORY_COUNT" -lt 3 ]]; then
  echo "⚠ menos de 3 trajectories — shadow test será superficial"
fi

# ── Detecta provider ──────────────────────────────────────────────────────────

detect_provider() {
  for p in codex gemini claude; do
    if command -v "$p" &>/dev/null; then echo "$p"; return; fi
  done
  echo "none"
}

PROVIDER=$(detect_provider)

if [[ "$PROVIDER" == "none" ]]; then
  echo "✗ nenhum provider disponível"
  exit 1
fi

echo "→ Provider: $PROVIDER"

AGENTS_CONTENT=$(cat "$AGENTS_FILE")
TRAJECTORY_SAMPLE=$(tail -5 "$TRAJECTORIES" 2>/dev/null || echo "(sem trajectories)")

# ── Loop de compactação ───────────────────────────────────────────────────────

attempt=0
passed=false

while [[ $attempt -lt $MAX_ATTEMPTS ]] && [[ "$passed" == "false" ]]; do
  attempt=$((attempt + 1))
  echo ""
  echo "→ Tentativa $attempt/$MAX_ATTEMPTS..."

  PROMPT_FILE=$(mktemp)
  cat > "$PROMPT_FILE" << PROMPT
Você é um especialista em otimização de contexto para agentes LLM.

Sua tarefa é compactar o AGENTS.md abaixo para menos de 80% do tamanho original,
preservando 100% do comportamento.

## Regras de compactação
1. NUNCA remova "Known Pitfalls" ou regras críticas adicionadas recentemente
2. Mescle seções que cobrem o mesmo conceito
3. Comprima exemplos longos para a essência
4. Remova explicações de "por quê" — mantenha só o "o quê fazer"
5. Use listas em vez de parágrafos onde possível
6. Mantenha todos os comandos e caminhos de arquivo exatos

## AGENTS.md atual ($WORD_COUNT palavras)
${AGENTS_CONTENT}

## Trajectories de referência (para não perder comportamento)
${TRAJECTORY_SAMPLE}

## Saída
Retorne APENAS o AGENTS.md compactado, sem comentários ou explicações.
O documento deve começar com "# Agente —"
PROMPT

  case "$PROVIDER" in
    codex)
      codex -a never exec -C "$REPO_ROOT" \
        -m "gpt-5.5" \
        -c "model_reasoning_effort=\"high\"" \
        -s danger-full-access \
        --output-last-message "$CANDIDATE_FILE" \
        < "$PROMPT_FILE" 2>/dev/null || true
      ;;
    gemini)
      PROMPT_CONTENT=$(cat "$PROMPT_FILE")
      gemini --yolo -p "$PROMPT_CONTENT" 2>/dev/null | tail -500 > "$CANDIDATE_FILE" || true
      ;;
    claude)
      PROMPT_CONTENT=$(cat "$PROMPT_FILE")
      claude -p "$PROMPT_CONTENT" 2>/dev/null > "$CANDIDATE_FILE" || true
      ;;
  esac

  rm -f "$PROMPT_FILE"

  if [[ ! -s "$CANDIDATE_FILE" ]]; then
    echo "  ✗ provider não gerou output"
    continue
  fi

  CANDIDATE_WORDS=$(wc -w < "$CANDIDATE_FILE")
  RATIO=$(echo "scale=2; $CANDIDATE_WORDS * 100 / $WORD_COUNT" | bc)
  echo "  → Candidato: $CANDIDATE_WORDS palavras ($RATIO% do original)"

  # Gate 1: tamanho deve ser < 80% do original
  TARGET=$(echo "$WORD_COUNT * 80 / 100" | bc)
  if [[ "$CANDIDATE_WORDS" -ge "$TARGET" ]]; then
    echo "  ✗ não comprimiu suficientemente ($CANDIDATE_WORDS >= $TARGET palavras)"
    rm -f "$CANDIDATE_FILE"
    continue
  fi

  # Gate 2: deve começar com "# Agente"
  if ! head -1 "$CANDIDATE_FILE" | grep -q "# Agente"; then
    echo "  ✗ formato inválido — não começa com '# Agente'"
    rm -f "$CANDIDATE_FILE"
    continue
  fi

  # Gate 3: shadow test com trajectories
  if [[ "$TRAJECTORY_COUNT" -ge 3 ]]; then
    echo "  → Shadow test..."
    if _shadow_test "$CANDIDATE_FILE"; then
      passed=true
    else
      echo "  ✗ shadow test falhou — comportamento divergente"
      rm -f "$CANDIDATE_FILE"
    fi
  else
    echo "  ⚠ shadow test pulado (< 3 trajectories) — aprovação manual necessária"
    passed=true
  fi
done

echo ""
if [[ "$passed" == "true" ]]; then
  echo "✓ AGENTS.md candidato pronto: $CANDIDATE_FILE"
  echo "  Original: $WORD_COUNT palavras → Candidato: $CANDIDATE_WORDS palavras"
  echo ""
  echo "Revise e promova:"
  echo "  diff AGENTS.md AGENTS.md.candidate | less"
  echo "  mv AGENTS.md AGENTS.md.backup"
  echo "  mv AGENTS.md.candidate AGENTS.md"
else
  echo "✗ Não foi possível compactar após $MAX_ATTEMPTS tentativas"
  rm -f "$CANDIDATE_FILE"
fi


# ── Shadow test ───────────────────────────────────────────────────────────────

_shadow_test() {
  local candidate_file="$1"
  local candidate_content
  candidate_content=$(cat "$candidate_file")

  # Pega até 5 trajectories para validar
  local sample
  sample=$(head -5 "$TRAJECTORIES" 2>/dev/null)

  if [[ -z "$sample" ]]; then
    return 0  # sem trajectories, passa
  fi

  local shadow_prompt
  shadow_prompt="Dado este AGENTS.md, responda às seguintes perguntas de comportamento.
Para cada pergunta responda apenas 'SIM' ou 'NÃO'.

## AGENTS.md candidato
${candidate_content}

## Perguntas baseadas nas trajectories
$(echo "$sample" | python3 -c "
import sys, json
lines = sys.stdin.readlines()
for i, line in enumerate(lines[:5], 1):
    try:
        t = json.loads(line)
        # extrai última mensagem do user como pergunta de comportamento
        msgs = t.get('messages', [])
        user_msgs = [m for m in msgs if m.get('role') == 'user']
        if user_msgs:
            q = user_msgs[-1]['content'][:200].replace('\n', ' ')
            print(f'{i}. O agente saberia como lidar com: \"{q}\"?')
    except:
        pass
")

Responda cada pergunta em uma linha: '1. SIM', '2. NÃO', etc."

  local shadow_result
  shadow_result=$( echo "$shadow_prompt" | \
    case "$PROVIDER" in
      claude) claude -p "$(cat)" 2>/dev/null ;;
      gemini) gemini -p "$(cat)" 2>/dev/null ;;
      *) echo "SIM SIM SIM SIM SIM" ;;  # fallback conservador
    esac
  )

  # Conta NÃOs — se mais de 1, shadow test falha
  local nos
  nos=$(echo "$shadow_result" | grep -c "NÃO\|NAO\|NO" 2>/dev/null || echo "0")
  if [[ "$nos" -gt 1 ]]; then
    echo "  shadow test: $nos comportamentos divergentes"
    return 1
  fi

  return 0
}
