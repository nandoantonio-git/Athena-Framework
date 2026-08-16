# Label — histórico de auditoria

Espelha o conteúdo removido de `stories/molecules/Label.mdx` em 2026-08-16. Node Figma: `molecule/Label`, `1421:18687`.

## Descrição Figma verbatim

*"pilula de dropdown de etiquetas"*.

## Status

✅ aligned — protocolo completo da Regra 11 aplicado nesta US
(US-024): `get_design_context` real no node, 3 estados (`Default`\|
`Expanded`\|`Disabled`) confirmados.

## Releitura de 2026-08-12 (pass 3, 3ª auditoria de ponto-fixo)

`get_design_context` reexecutado no nó `1421:18687`, screenshot renderizado
reconferido elemento a elemento contra a resposta do Figma (legenda
"ETIQUETAR", pílula Liquid Glass, `atom/Icon/Label`, chevron caret, busca
mini, 3 badges de tipo, "+ Nova Etiqueta", opacidade `Disabled`). Nenhuma
divergência nova encontrada — permanece ✅ aligned.

## Achado: possível duplicidade no Figma fonte (Regra 9)

Este node é estruturalmente quase idêntico a `molecule/DropdownSelect/Label`
(`1439:19650`, já implementado em `dropdown-select-label.tsx`/
`DropdownSelectLabel.stories.tsx`): mesma legenda "ETIQUETAR", mesma
pílula `atom/Icon/Label` + "Etiquetar" + chevron, mesmo
`atom/DropdownSelect/Label/Item` ("+ Nova Etiqueta") no rodapé. Ver
`docs/conflicts.md` — registrado, **não resolvido/consolidado
silenciosamente** nesta US: são 2 node IDs Figma distintos e
`DropdownSelectLabel` já está em uso real. Diferenças confirmadas entre os
dois:

| | `molecule/Label` (este) | `molecule/DropdownSelect/Label` |
| --- | --- | --- |
| Node | `1421:18687` | `1439:19650` |
| Chevron | Glifo caret próprio (`LabelChevronGlyph`) | `atom/Icon/ArrowDropDown` (triângulo) |
| Estado `Expanded` confirmado | ✅ sim (busca + 3 badges de tipo + criar) | 🧩 inferido por analogia (sem variante própria) |
| Estado `Disabled` confirmado | ✅ sim | Não confirmado |

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| Legenda "ETIQUETAR" (10px bold) | ✅ sempre visível nos 3 estados | ✅ Figma-confirmado |
| Pílula Liquid Glass (`effect-glass-light-45`) | ✅ `bg-effect-glass-light-45` | ✅ Figma-confirmado |
| `atom/Icon/Label` | ✅ `<Icon name="Label" />` (asset já existente, byte-a-byte igual ao exportado) | ✅ Figma-confirmado |
| Chevron caret | ✅ `LabelChevronGlyph.svg`, asset real exportado | ✅ Figma-confirmado |
| Busca mini (`Search/Placeholder/SM`) | ✅ `LabelSearchGlyph.svg`, asset real exportado, fundo `#ccced6` | ✅ Figma-confirmado |
| 3 linhas `atom/badge/TypeLabel` (Documentos/Image/Videos) | ✅ reusa `FileTypeLabel` (`Atoms/TypeLabel`) | ✅ Figma-confirmado |
| "+ Nova Etiqueta" (`atom/DropdownSelect/Label/Item`) | ✅ reusa `DropdownSelectLabelItem` (mesmo component ID `1444:21704`) | ✅ Figma-confirmado |
| `Disabled`: opacidade 0.32 | ✅ `opacity-[0.32]` | ✅ Figma-confirmado |

## Cores de ponto de `atom/badge/TypeLabel` — achado propagado

Este node confirma pela primeira vez o hex real do ponto por tipo
(`FILE_TYPE_DOT_CLASS` em `type-label.tsx`): `document`→`brand-teal-dark`
(`#1a5e6e`), `image`→`brand-teal` (`#007e96`), `video`→`brand-pink-dark`
(`#b5254a`). Substitui o ponto neutro (`bg-zinc-400`) documentado como gap
em `TypeLabel.mdx` antes desta US. `video`→`brand-pink-dark` reusa o hex
que a Regra 3 reserva à categoria "Acesso rápido" — ver entrada em
`docs/conflicts.md`.

## Estados (Regra 8)

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Default (fechado) | ✅ `state="default"`, `<button>` clicável | ✅ Figma-confirmado |
| Expanded (aberto) | ✅ `state="expanded"` | ✅ Figma-confirmado |
| Disabled | ✅ `state="disabled"`, `<button disabled>` | ✅ Figma-confirmado |
| Hover/Loading/Error | Não documentado no Figma | — |

**Fluid interface**: `<button>` nativo garante foco/hover/disabled do
browser sem estado próprio adicional.
**reduced-motion**: não documentado no Figma.

## Material Liquid Glass

Pílula usa `bg-effect-glass-light-45` — ver `Tokens/Materials` (Regra 10).

## Terminologia

"Etiquetar"/"ETIQUETAR" não constam na lista aprovada nem proibida da
Regra 5 — vocabulário de ação de UI (rotular arquivo), fora do escopo dos
termos de storage tratados na regra.
