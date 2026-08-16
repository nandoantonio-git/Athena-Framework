# ArchiveBrowserModal/ListItem — histórico de auditoria

Espelha o conteúdo removido de `stories/molecules/ArchiveBrowserModalListItem.mdx` em 2026-08-16. Node Figma: `molecule/ArchiveBrowserModal/ListItem`, `1421:20896`.

## Status

✅ aligned — protocolo completo da Regra 11 aplicado nesta US
(US-024): `get_design_context` real no node, eixo `Property 1`
(`ArchiveFileRow`\|`ArchiveSelectableRow`) confirmado.

## Reverificado em auditoria de ponto-fixo (12ª passada, 2026-08-13)

`get_design_context` fresco no nó `1421:20896` + screenshot Storybook
(`Default`/`Selected`) comparados elemento-a-elemento — ícone
`ArchiveItemGlyph.svg`, nome (16px `#09090b`), metadados (11px `#71717a`,
tracking 0.2px) e fundo `ArchiveSelectableRow` batem. Achado material desta
retomada: as stories estavam renderizando os dois estados em 452px (contexto
do modal composto), mas o component set standalone Figma confirma
`ArchiveFileRow` em 650px e `ArchiveSelectableRow` em 600px. Corrigidas as
decorators das stories standalone; o consumidor `ArchiveBrowserModal/Search`
continua compondo a linha em 452px como no node composto.

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| Ícone (instância `atom/ArchiveItem`) | ✅ `ArchiveItemGlyph.svg`, asset real exportado (cartão gradiente teal + 3 linhas) | ✅ Figma-confirmado |
| Nome, 16px, `#09090b` | ✅ `text-base text-zinc-950` (zinc-950 = `#09090b` exato) | ✅ Figma-confirmado |
| Metadados, 11px, `#71717a`, tracking 0.2px | ✅ `text-[11px] text-zinc-500 tracking-[0.2px]` (zinc-500 = `#71717a` exato) | ✅ Figma-confirmado |
| Largura standalone | ✅ `Default` em 650px; `Selected` em 600px nas stories | ✅ Figma-confirmado |
| Fundo `ArchiveSelectableRow`: `effect-overlay-subtle` (`rgba(191,199,210,0.1)`) | ✅ `bg-[rgba(191,199,210,0.1)]` (sem token semântico existente para este valor) | ✅ Figma-confirmado |

**Gap não reproduzido**: os dois nodes trazem um slot de badge vazio
(`I...;1421:18290`, 12px, sem conteúdo) abaixo do ícone — provavelmente o
lugar de uma `atom/StorageTierBadge` quando aplicável, mas nenhum dos dois
nodes-exemplo mostra instância preenchida. Omitido (Regra 11 ponto 4 —
nunca inventar elemento não confirmável).

## Ícone real vs. placeholder

Diferente de `molecule/FileList` (que ainda usa `FileIcon` do
`lucide-react` como placeholder documentado até `atom/ArchiveItem` existir
como átomo formal), este componente já usa o asset SVG real exportado do
próprio node — mais fiel, embora `atom/ArchiveItem` (`1421:18214`) em si
siga não implementado como átomo reutilizável isolado (fora do escopo
desta US).

## Estados (Regra 8)

| Estado | Implementado | Fonte |
| --- | --- | --- |
| `ArchiveFileRow` (não selecionável) | ✅ default | ✅ Figma-confirmado |
| `ArchiveSelectableRow` (selecionada) | ✅ prop `selected` | ✅ Figma-confirmado |
| Hover/Disabled/Loading/Error | Não documentado no Figma | — |

**reduced-motion**: não documentado no Figma; sem transição própria.

## Material Liquid Glass

Não aplicável neste elemento — o material aparece na moldura de
`ArchiveBrowserModal/Search` que o compõe.

## Terminologia

Não renderiza texto fixo de produto — `fileName`/`meta` são conteúdo de
usuário. Nenhum termo proibido (Regra 5).
