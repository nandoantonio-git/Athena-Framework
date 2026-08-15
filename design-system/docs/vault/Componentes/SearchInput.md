---
tags: [componente, molecule]
---

# SearchInput

`molecule/SearchBar` (`1421:17857`) — campo de busca com ícone de lupa.

- **Código:** `src/components/molecules/search-input.tsx`

## Estados

| Estado | Como |
| --- | --- |
| Loading | prop `loading`, spinner no lugar do ícone |
| Danger/Success | prop `state="danger"\|"success"` — anel persistente, independente de foco |
| Erro (legado) | `aria-invalid` |

## `state="success"\|"danger"` — decisão humana, 2026-08-15

Componente novo criado pelo usuário no Figma, `molecule/InputStates` (`1518:7924`) — o usuário percebeu a carência de um input com feedback de validação. **Não virou componente separado**: arquitetura de extensão do `SearchInput` existente, mesma anatomia (pílula + lupa + Liquid Glass). Escopo restrito às 2 variantes reais desse node (`writeValue`/sucesso, `wrongValue`/erro) — os eixos `Focused`/`Typing`/`ValueIdle` do `SearchBar` vizinho ficaram de fora por decisão humana.

Anel de sucesso reaproveita `var(--brand-feedback-success-default,#096)` (mesmo token de `TagColor`); anel de erro reaproveita `--destructive` (`#bc3426`, já usado no projeto todo).

⚠️ O node `SearchBar` também expõe estados `Focused`/`Typing` (cursor piscando) usando fonte SF Pro e azul `rgba(0,122,255,*)` — padrão macOS/iOS, não Figtree/`brand-teal`. Registrado em [[Conflitos Abertos]], não implementado.

## Ver também

- [[Regra 4 - Tipografia e Acessibilidade]]
- [[Conflitos Abertos]]
