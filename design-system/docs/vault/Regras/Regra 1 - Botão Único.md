---
tags: [regra, travada]
---

# Regra 1 — Botão Único

`atom/PushButton` é o **único** componente de botão do MVP. Não existem `button/primary`/`button/secondary`/`button/destructive` como componentes separados — variações são props (`variant`, `isDestructive`), nunca componentes distintos.

Qualquer achado do Figma sugerindo um componente de botão separado é **CONFLICT**, nunca implementado silenciosamente.

## Como funciona na prática

- `variant="primary"` — ação principal da tela (ex. "Guardar")
- `variant="neutral"` — ação secundária
- `isDestructive` — sinaliza impacto (ex. "Excluir") sem trocar de componente; estilo real Figma-confirmado é chrome neutro/glass com só o **texto** na cor de perigo, nunca fundo vermelho preenchido (achado em `organism/cleanSpaceStorage`, botões "Excluir")

## Achado aberto (baixa urgência)

O Figma confirma um enum `Style` de 7 valores (`Bordered Colored`, `Bordered Destructive`, `Bordered Neutral`, `Bordered Secondary`, `Borderless`, `Borderless (Bezel)`, `Default`) — só 2 implementados (`primary`=Bordered Colored, `neutral`=Bordered Neutral). Não é violação da regra (continua sendo 1 componente), é cobertura parcial do enum de estilo. Ver [[Conflitos Abertos]].

## Ver também

- [[PushButton]]
- [[Conflitos Abertos]]
