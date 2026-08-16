# FolderItem — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/FolderItem.mdx` em 2026-08-15. Node Figma: `1440:24306`.

## Status

✅ aligned (Figma-confirmado, US-017) — protocolo completo da Regra 11 aplicado. Reverificado na 3ª passada de ponto-fixo (2026-08-12), nenhuma divergência nova.

## Descrição Figma verbatim

*"Simbolo para representar pastas. Suporta seleção e badge de tier. Variantes: state e tier."* Mesma família visual/API de `atom/ArchiveItem` — o eixo `tier` mencionado na descrição é um gap documentado (Regra 9), não uma prop real (ver `ArchiveItem.md`).

## Composição (diferente de ArchiveItem)

Ao contrário de `ArchiveItem` (base + overlay separados), cada estado de `FolderItem` no Figma já é uma imagem própria com o efeito de glass bake-ado (`Group8`=idle, `Group9`=hover, `Group10`=pressed, `Group11`=disabled, `Group12`/`Group15`=default/static — dobrados em `idle`, mesma duplicação interna de autoria já documentada em `ArchiveItem`, e `Group13`/`Group14`=selected/selected-hover).

## Correção US-026 pass12: `selected-pressed`

Releitura fresca via `get_design_context` em 2026-08-13 confirmou que `selected-pressed` tem composição própria (`Union` + 2 `Rectangle`s). Correção: a aproximação anterior com `selected` + `brightness-90` foi substituída por um SVG real exportado do subnó `1440:24356`, removendo apenas artefatos de canvas do export.

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| Glifo idle/hover/pressed/disabled | ✅ 4 assets reais próprios | ✅ Figma-confirmado |
| Glifo selected/selected-hover | ✅ 2 assets reais próprios | ✅ Figma-confirmado |
| Glifo selected-pressed | ✅ asset real próprio | ✅ Figma-confirmado |
| Badge de seleção | ✅ `<SelectState />` composto | ✅ Figma-confirmado (reuso) |
| Nome abaixo do glifo | ✅ `text-[0.625rem]` | ✅ Figma-confirmado |

## Estados — checklist Figma-confirmado

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Idle/Hover/Pressed/Disabled/Selected/Selected-Hover/Selected-Pressed | ✅ | ✅ Figma-confirmado |
| Loading/Error | ❌ Não aplicável | Glifo de item estático |

## Material Liquid Glass

Bevel/glow já bake-ado nos assets exportados — sem composição CSS própria.
