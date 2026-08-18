# Agente — {{PROJECT_NAME}}

> Gerado por `init.sh` em {{INIT_DATE}}. Edite as seções marcadas com TODO.

---

## Filosofia geral

- Solução mais simples e direta. Funções em vez de classes.
- Sem Clean Architecture, DDD, Repository Pattern ou camadas de abstração desnecessárias.
- Sem logging framework ou telemetria além do básico.
- Código que um dev sênior consegue ler sem documentação.

## Estilo de código

<!-- TODO: linguagem principal, convenções, formatação -->
- Linguagem: {{LANGUAGE}}
- Funções simples e executáveis
- Type hints apenas onde ajudam na leitura
- Comentários curtos — o código deve se explicar

## Domínio do projeto

<!-- TODO: descreva o problema que este projeto resolve em 2-3 frases -->
{{PROJECT_DESCRIPTION}}

## Estrutura de arquivos

<!-- TODO: mapeie os módulos principais -->
```
{{PROJECT_NAME}}/
├── src/          # código principal
├── data/         # dados brutos e processados
├── models/       # artefatos treinados (se ML)
├── scripts/      # ralph.sh, implement.sh, prd.json
└── tests/        # testes de validação
```

## Regras críticas

<!-- TODO: as regras invioláveis do domínio (regras invioláveis do domínio) -->
- [ ] Regra 1: ...
- [ ] Regra 2: ...
- [ ] Regra 3: ...

## Gate de validação

<!-- TODO: o que valida que o código está correto -->
O Ralph usa `scripts/gate.sh` para validar cada story.
Gate padrão: `{{GATE_COMMAND}}`

Critérios mínimos de aceitação:
- Código compila / passa lint sem erros
- Testes unitários da story passam
- Sem regressão nos testes existentes

## Contexto de execução

- Container: `.devcontainer/` (Python 3.11 + Node + Codex)
- Provider padrão: codex → gemini → claude (fallback triplo)
- Estado do loop: `scripts/.current-provider`, `scripts/.last-story`

---

<!-- SEÇÃO GERADA AUTOMATICAMENTE PELO SKILL LEARNING — NÃO EDITE MANUALMENTE -->
## Skills ativas

As skills em `skills/active/` são injetadas como user message no início de cada sessão.
Para ver as skills pendentes de revisão: `ls skills/pending/`

<!-- END SEÇÃO GERADA -->
