---
tags: [regra, travada]
---

# Regra 4 — Tipografia e Acessibilidade

Figtree, escala Major Third (1.25). Política de exceção de 16px (atualizada 2026-08-10):

- **Piso de 16px obrigatório** — body, labels de botão/input, links (texto de leitura/ação primária).
- **Exceção só pra microtexto genuinamente decorativo/complementar** — badge, tag, caption, timestamp. Nunca abaixo de ~11px, sempre em `rem` (não `px` fixo — é isso que o WCAG 1.4.4 realmente exige: escalar com o zoom do navegador).
- Nunca abaixo do piso como único portador de informação essencial.

## Correções já aplicadas (US-011)

`Type/Button/MD` (14px Figma) → 16px, código. `Type/Tag` (8px Figma) → 11px, código — ambos porque não se qualificam como exceção (ação/rótulo funcional, não decoração pura).

## Ver também

- [[Tipografia]]
- [[Conflitos Abertos]]
