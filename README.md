# Athena Framework

Framework de desenvolvimento autônomo com skill learning contínuo. Agentes LLM implementam user stories automaticamente enquanto acumulam padrões de sessões bem-sucedidas em skills reutilizáveis.

---

## Início rápido

```bash
# 1. Clone ou faça fork deste repositório
# 2. Inicializa o projeto (configura nome, linguagem, gate)
bash init.sh

# 3. Gere o backlog com a skill /prd no Claude Code
# 4. Converta para prd.json com a skill /ralph
# 5. Execute o loop autônomo
bash scripts/ralph.sh
```

---

## Como funciona

O Ralph Loop lê `scripts/prd.json`, pega a primeira user story com `passes: false`, monta um prompt com o contexto do `AGENTS.md` e delega a implementação para um agente LLM. Após a implementação, roda `scripts/gate.sh` e os acceptance criteria. Se tudo passar, marca a story como `passes: true` e avança para a próxima.

```text
prd.json → Ralph Loop → Agente LLM → gate.sh → passes: true → próxima story
```

---

## Arquitetura

```text
athena-framework/
│
├── AGENTS.md              # constituição do agente — contexto injetado em cada sessão
├── init.sh                # bootstrap do projeto (preenche AGENTS.md)
├── requirements.txt           # dependências do projeto
├── requirements-dev.txt       # dependências de desenvolvimento
├── requirements-example-ml.txt  # exemplo de deps para projetos ML
│
├── scripts/
│   ├── ralph.sh           # loop principal com fallback triplo de providers
│   ├── implement.sh       # execução por provider
│   ├── gate.sh            # quality gate configurável
│   ├── prd.json           # backlog de user stories
│   └── audit/             # relatórios de implementação por story (gerado em runtime)
│
├── memory/
│   ├── recorder.py        # grava trajectories de sessão em SQLite
│   └── sessions.db        # banco local (gitignored)
│
├── skills/
│   ├── active/            # skills injetadas como contexto em toda sessão
│   ├── pending/           # candidatas aguardando revisão humana
│   ├── archive/           # skills com TTL expirado
│   ├── prd/               # skill /prd do Claude Code (gera PRDs)
│   └── ralph/             # skill /ralph do Claude Code (converte PRD → prd.json)
│
└── loops/
    ├── distill.sh         # trajectory → SKILL.md candidata
    ├── compact.sh         # AGENTS.md → versão enxuta quando crescer demais
    └── score.py           # quality gate híbrido para skills (regras + LLM)
```

---

## Providers suportados

O loop faz um **preflight check** no início, testando cada provider na ordem abaixo. O primeiro que responder com sucesso é usado. Se durante a execução um provider atingir rate limit ou falhar 3 vezes consecutivas na mesma story, o loop troca automaticamente para o próximo.

| Provider | Comando  | Modelo   | Notas                      |
|----------|----------|----------|----------------------------|
| Codex    | `codex`  | gpt-5.5  | padrão, danger-full-access |
| Gemini   | `gemini` | —        | fallback 1, --yolo         |
| Claude   | `claude` | —        | fallback 2                 |

Provider ativo salvo em `scripts/.current-provider`.

**Circuit breaker:** uma story que falhar `MAX_ATTEMPTS_PER_STORY` vezes consecutivas é marcada com `passes: true` + `skipped: true` e o loop avança para a próxima.

---

## Skill Learning

O sistema aprende com sessões bem-sucedidas e gera skills reutilizáveis automaticamente.

### 1. Grave suas sessões

```bash
python3 memory/recorder.py --start    # inicia gravação
# ... trabalhe normalmente ...
python3 memory/recorder.py --end      # finaliza
python3 memory/recorder.py --signal good   # marca como boa
# ou
python3 memory/recorder.py --signal bad    # marca como ruim
```

### 2. Destile padrões (acumule 3+ sessões boas primeiro)

```bash
bash loops/distill.sh
# → gera skills/pending/skill_TIMESTAMP.md
```

### 3. Revise e promova

```bash
cat skills/pending/skill_*.md         # revisa o conteúdo
cp skills/pending/skill_X.md skills/active/   # promove
rm skills/pending/skill_X.md          # limpa pending
```

### 4. Compacte o AGENTS.md quando crescer

```bash
bash loops/compact.sh
# → gera AGENTS.md.candidate
diff AGENTS.md AGENTS.md.candidate    # compara antes de substituir
mv AGENTS.md AGENTS.md.backup
mv AGENTS.md.candidate AGENTS.md
```

---

## Gate de validação

O `gate.sh` auto-detecta o tipo de arquivo ou lê `scripts/.gate-config`:

```bash
# Forçar tipo de gate
echo "python"     > scripts/.gate-config
echo "typescript" > scripts/.gate-config
echo "bash"       > scripts/.gate-config
echo "go"         > scripts/.gate-config

# Gate completamente customizado
echo "custom" > scripts/.gate-config
# Crie scripts/.gate-custom com sua lógica de validação
```

Gates disponíveis: `python` (py_compile + pytest), `typescript` (tsc), `javascript` (node --check), `bash` (bash -n), `go` (go build), `custom`.

---

## Escrevendo user stories (prd.json)

Use a skill `/ralph` no Claude Code para converter um PRD em `scripts/prd.json`. Cada story deve:

- Ser implementável em **uma única iteração** (uma janela de contexto)
- Ter acceptance criteria **verificáveis** (não vagos)
- Estar ordenada por **dependência** (schema → backend → UI)
- Sempre incluir `"Typecheck passes"` como critério final

```json
{
  "project": "meu-projeto",
  "branchName": "ralph/feature-name",
  "description": "Descrição da feature",
  "userStories": [
    {
      "id": "US-001",
      "title": "Título da story",
      "description": "Como usuário, quero X para que Y",
      "acceptanceCriteria": [
        "Critério específico e verificável",
        "Typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "fix": "",
      "notes": ""
    }
  ]
}
```

O campo `fix` aceita um patch ou instrução específica a aplicar na próxima tentativa — útil para corrigir regressões conhecidas sem alterar o enunciado da story.

---

## Variáveis de ambiente

| Variável                  | Padrão | Descrição                                        |
|---------------------------|--------|--------------------------------------------------|
| `MAX_ATTEMPTS_PER_STORY`  | `5`    | Tentativas por story antes do circuit breaker    |
| `WORD_THRESHOLD`          | `400`  | Palavras no AGENTS.md para disparar compact      |
| `MIN_SESSIONS`            | `3`    | Sessões boas mínimas para rodar distill          |
| `TAIL_N`                  | `200`  | Linhas de log exibidas por iteração              |

---

## Opções do ralph.sh

```bash
bash scripts/ralph.sh [max_iterations] [opções]

  --provider codex|gemini|claude   força um provider específico (pula preflight dos outros)
  --skip-security-check            pula verificação de credenciais expostas em variáveis de ambiente
```

---

## Devcontainer

O projeto inclui `.devcontainer/` com Python 3.11, Node.js e Codex pré-instalados. Abra no VS Code com a extensão **Dev Containers** para ter o ambiente completo sem configuração local.

Portas encaminhadas por padrão: `8000`, `8888`, `5000`.

---

## Comandos úteis

```bash
# Acompanhar execução em tempo real
tail -f scripts/run.log
tail -f scripts/events.log

# Ver progresso do backlog
jq '.userStories[] | {id, title, passes}' scripts/prd.json

# Listar sessões gravadas
python3 memory/recorder.py --list

# Exportar sessões boas para JSONL
python3 memory/recorder.py --export

# Ver skills ativas
ls skills/active/

# Ver relatórios de implementação por story
ls scripts/audit/
```
