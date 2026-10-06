# Athena Framework

> Transforme PRDs em ciclos autônomos de implementação, validação e aprendizado contínuo.

Athena Framework organiza agentes LLM em um loop controlado: ele lê user stories, delega a implementação, executa quality gates, registra evidências e reaproveita padrões bem-sucedidos como skills. Em vez de rodar agentes manualmente a cada tarefa, você cria um backlog verificável e deixa o Ralph Loop avançar story por story com fallback de providers.

---

## Para quem é

- Times e devs que querem automatizar implementação a partir de PRDs ou user stories.
- Projetos que precisam de validação objetiva antes de considerar uma entrega pronta.
- Workflows com múltiplos providers LLM, onde fallback e circuit breaker reduzem travamentos.
- Equipes que querem transformar sessões bem-sucedidas em conhecimento reutilizável.

## Problema → solução

| Dor no desenvolvimento com agentes | Como o Athena ajuda |
|------------------------------------|---------------------|
| Prompts soltos e difíceis de repetir | Usa `scripts/prd.json` como backlog estruturado |
| Agente entrega código sem validação | Executa `scripts/gate.sh` e acceptance criteria |
| Rate limit ou falha de provider interrompe o fluxo | Alterna entre Codex, Gemini e Claude |
| Aprendizados ficam perdidos em chats antigos | Destila sessões boas em skills reutilizáveis |
| Contexto cresce e perde foco | Compacta `AGENTS.md` quando necessário |

## Fluxo em uma frase

```text
PRD → prd.json → Ralph Loop → Agente LLM → gate.sh → audit → próxima story
```

---

## Sumário

- [Início rápido](#início-rápido)
- [Pré-requisitos](#pré-requisitos)
- [Exemplo rápido](#exemplo-rápido)
- [Como funciona](#como-funciona)
- [Arquitetura](#arquitetura)
- [Providers suportados](#providers-suportados)
- [Skill Learning](#skill-learning)
- [Gate de validação](#gate-de-validação)
- [Escrevendo user stories](#escrevendo-user-stories-prdjson)
- [Devcontainer](#devcontainer)
- [Comandos úteis](#comandos-úteis)

---

## Início rápido

```bash
# 1. Clone ou faça fork deste repositório

# 2. Inicialize o projeto
bash init.sh

# 3. Gere o backlog com a skill /prd no Claude Code

# 4. Converta o PRD para scripts/prd.json com a skill /ralph

# 5. Execute o loop autônomo
bash scripts/ralph.sh
```

Se você ainda não conhece `/prd` e `/ralph`: use `/prd` para transformar uma ideia em PRD e `/ralph` para converter esse PRD em user stories verificáveis dentro de `scripts/prd.json`.

---

## Pré-requisitos

| Item | Uso |
|------|-----|
| Bash | Executar scripts do framework |
| Python 3.11+ | Recorder, gates Python e utilitários internos |
| Node.js | Gates JavaScript/TypeScript e CLIs de agentes |
| `jq` | Leitura rápida do progresso em `prd.json` |
| Codex, Gemini ou Claude CLI | Provider que implementa cada story |

Recomendado: abrir o projeto no Dev Container para obter Python, Node e Codex já configurados.

---

## Exemplo rápido

Imagine este pedido:

> “Quero uma API FastAPI com endpoint `/health` retornando status `ok`.”

O fluxo esperado é:

1. `/prd` transforma o pedido em uma especificação curta.
2. `/ralph` gera uma story em `scripts/prd.json`.
3. `bash scripts/ralph.sh` seleciona a primeira story com `passes: false`.
4. O agente implementa o endpoint.
5. `scripts/gate.sh` roda typecheck/testes.
6. A story é marcada como `passes: true` se todos os critérios passarem.
7. Um relatório de execução é salvo em `scripts/audit/`.

Exemplo de story:

```json
{
  "id": "US-001",
  "title": "Health check da API",
  "description": "Como operador, quero consultar /health para verificar se a API está online.",
  "acceptanceCriteria": [
    "GET /health retorna HTTP 200",
    "Resposta JSON contém {\"status\": \"ok\"}",
    "Typecheck passes"
  ],
  "priority": 1,
  "passes": false
}
```

---

## Como funciona

O Ralph Loop lê `scripts/prd.json`, encontra a primeira user story pendente e monta um prompt com:

- contexto do projeto em `AGENTS.md`;
- descrição da story;
- acceptance criteria;
- instruções de validação;
- provider ativo.

Depois ele delega a implementação para um agente LLM. Ao final, executa `scripts/gate.sh` e verifica os critérios de aceite. Se tudo passar, marca a story como concluída e avança para a próxima.

```text
┌──────────────┐
│ scripts/     │
│ prd.json     │
└──────┬───────┘
       │ seleciona primeira story pendente
       ▼
┌──────────────┐
│ Ralph Loop   │
│ ralph.sh     │
└──────┬───────┘
       │ delega implementação
       ▼
┌──────────────┐
│ Agente LLM   │
│ Codex/Gemini │
│ Claude       │
└──────┬───────┘
       │ valida entrega
       ▼
┌──────────────┐
│ gate.sh      │
│ tests/lint   │
└──────┬───────┘
       │ registra evidência
       ▼
┌──────────────┐
│ audit/       │
│ passes:true  │
└──────────────┘
```

---

## Arquitetura

```text
athena-framework/
│
├── AGENTS.md                 # constituição do agente; contexto injetado em cada sessão
├── init.sh                   # bootstrap do projeto; preenche AGENTS.md
├── requirements.txt          # dependências do projeto
├── requirements-dev.txt      # dependências de desenvolvimento
├── requirements-example-ml.txt
│
├── scripts/
│   ├── ralph.sh              # loop principal com fallback de providers
│   ├── implement.sh          # execução por provider
│   ├── gate.sh               # quality gate configurável
│   ├── prd.json              # backlog de user stories
│   └── audit/                # relatórios de implementação por story
│
├── memory/
│   ├── recorder.py           # grava trajectories de sessão em SQLite
│   └── sessions.db           # banco local, ignorado pelo Git
│
├── skills/
│   ├── active/               # skills injetadas como contexto em toda sessão
│   ├── pending/              # candidatas aguardando revisão humana
│   ├── archive/              # skills com TTL expirado
│   ├── prd/                  # skill /prd do Claude Code
│   └── ralph/                # skill /ralph do Claude Code
│
└── loops/
    ├── distill.sh            # trajectory → SKILL.md candidata
    ├── compact.sh            # AGENTS.md → versão enxuta
    └── score.py              # quality gate híbrido para skills
```

---

## Providers suportados

O loop faz um preflight check no início, testando cada provider na ordem abaixo. O primeiro que responder com sucesso é usado. Se um provider atingir rate limit ou falhar 3 vezes consecutivas na mesma story, o loop troca automaticamente para o próximo.

| Provider | Comando | Modelo | Papel |
|----------|---------|--------|-------|
| Codex | `codex` | gpt-5.5 | Provider padrão |
| Gemini | `gemini` | configurado na CLI | Fallback 1 |
| Claude | `claude` | configurado na CLI | Fallback 2 |

Provider ativo: `scripts/.current-provider`.

Circuit breaker: uma story que falhar `MAX_ATTEMPTS_PER_STORY` vezes consecutivas é marcada com `passes: true` e `skipped: true`, permitindo que o loop avance sem travar todo o backlog.

---

## Skill Learning

Athena aprende com sessões bem-sucedidas e transforma padrões repetíveis em skills.

### 1. Grave uma sessão

```bash
python3 memory/recorder.py --start
# trabalhe normalmente
python3 memory/recorder.py --end
python3 memory/recorder.py --signal good
```

Para sinalizar uma sessão ruim:

```bash
python3 memory/recorder.py --signal bad
```

### 2. Destile padrões

Acumule pelo menos 3 sessões boas antes de destilar:

```bash
bash loops/distill.sh
# gera skills/pending/skill_TIMESTAMP.md
```

### 3. Revise e promova

```bash
cat skills/pending/skill_*.md
cp skills/pending/skill_X.md skills/active/
rm skills/pending/skill_X.md
```

### 4. Compacte contexto quando necessário

```bash
bash loops/compact.sh
# gera AGENTS.md.candidate

diff AGENTS.md AGENTS.md.candidate
mv AGENTS.md AGENTS.md.backup
mv AGENTS.md.candidate AGENTS.md
```

---

## Gate de validação

O `gate.sh` auto-detecta o tipo de projeto ou lê `scripts/.gate-config`.

```bash
# Forçar tipo de gate
echo "python"     > scripts/.gate-config
echo "typescript" > scripts/.gate-config
echo "bash"       > scripts/.gate-config
echo "go"         > scripts/.gate-config

# Gate customizado
echo "custom" > scripts/.gate-config
# Crie scripts/.gate-custom com sua lógica de validação
```

Gates disponíveis:

| Gate | Validação padrão |
|------|------------------|
| `python` | `py_compile` + `pytest` |
| `typescript` | `tsc` |
| `javascript` | `node --check` |
| `bash` | `bash -n` |
| `go` | `go build` |
| `custom` | `scripts/.gate-custom` |

---

## Escrevendo user stories (`prd.json`)

Use a skill `/ralph` no Claude Code para converter um PRD em `scripts/prd.json`.

Cada story deve ser:

- pequena o bastante para uma única iteração;
- verificável por teste, typecheck, lint ou comando objetivo;
- ordenada por dependência;
- acompanhada de `"Typecheck passes"` como critério final.

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

O campo `fix` aceita um patch ou instrução específica para a próxima tentativa. Use esse campo para corrigir regressões conhecidas sem alterar o enunciado original da story.

---

## Variáveis de ambiente

| Variável | Padrão | Descrição |
|----------|--------|-----------|
| `MAX_ATTEMPTS_PER_STORY` | `5` | Tentativas por story antes do circuit breaker |
| `WORD_THRESHOLD` | `400` | Palavras no `AGENTS.md` para disparar compactação |
| `MIN_SESSIONS` | `3` | Sessões boas mínimas para rodar distill |
| `TAIL_N` | `200` | Linhas de log exibidas por iteração |

---

## Opções do `ralph.sh`

```bash
bash scripts/ralph.sh [max_iterations] [opções]

  --provider codex|gemini|claude   força um provider específico
  --skip-security-check            pula verificação de credenciais expostas em variáveis de ambiente
```

---

## Devcontainer

O projeto inclui `.devcontainer/` com Python 3.11, Node.js e Codex pré-instalados. Abra no VS Code com a extensão Dev Containers para ter o ambiente completo sem configuração local.

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

---

## Próximo passo recomendado

Depois de configurar o projeto, comece com uma única feature pequena. Gere o PRD, converta para `prd.json`, rode o Ralph Loop e avalie o relatório em `scripts/audit/`. Quando esse ciclo estiver confiável, aumente o backlog gradualmente.
