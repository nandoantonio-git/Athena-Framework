---
tags: [regra, travada]
---

# Regra 7 — Gaps Conhecidos

> Fonte: `AGENTS.md:87`. Existe desde a redação original das regras — não é uma lacuna de numeração, só nunca tinha ganhado nota própria no vault.

Texto verbatim de `AGENTS.md`: *"Gaps abertos conhecidos (não são conflito de decisão, são polish): `input/search` com placeholder desatualizado; `chip/folder-tag` com `opacity:0` residual e sem variante `isExpanded`."*

Diferente das Regras 1–6/9–11 (decisões travadas), a Regra 7 é uma **lista de itens de polish conhecidos** — não uma regra normativa. Os 2 itens originais já foram parcialmente reconciliados:

## Status atual dos 2 itens originais

- **`chip/folder-tag` sem `isExpanded`** — premissa **invertida** em 2026-08-09 (US-005). `get_design_context` no nó `1421:19040` mostrou que a prop `isExpanded` **existe de fato** no Figma (`"Chip de tag de pasta com estado expansível. Props: isExpanded (bool), State (Default/Hover/Selected)."`) — implementada. O `opacity:0` residual (texto "Pessoal") também foi confirmado e localizado. Fonte: `design-system/docs/conflicts.md:27`, `design-system/docs/figma-inventory.md:28-29`.
- **`input/search` com placeholder desatualizado** — ainda em aberto. O placeholder real do Figma é `"Search"` (inglês genérico), divergindo do termo aprovado — tratado como decisão deliberada de tradução, não bug. Fonte: `design-system/docs/figma-inventory.md:24`. Ver [[Conflitos Abertos]] (baixa urgência).

## Ver também

- [[Regra 9 - Figma-confirmado vs Inferido]]
- [[FolderTagChip]]
- [[SearchInput]]
- [[Conflitos Abertos]]
