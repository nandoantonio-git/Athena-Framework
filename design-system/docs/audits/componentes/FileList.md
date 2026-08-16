# FileList — histórico de auditoria

Espelha o conteúdo removido de `stories/molecules/FileList.mdx` em 2026-08-16. Node Figma: `molecule/FileList`, `1421:19200`.

## Status

✅ aligned — protocolo completo da Regra 11 aplicado nesta US
(US-022): `get_design_context` real no node (`skillNames=figma-design-to-code`),
descrição verbatim: *"estrutura de lista de aqurivo de todos os tipos"*.

## Reverificado em auditoria de ponto-fixo (3ª passada, 2026-08-12)

`get_screenshot` dedicado (`maxDimension=2048`) no nó `1421:19200` **ainda
reproduz** a inconsistência já registrada: a coluna "Idle" (`FileList`,
`StorageList`, `FileList-SM`) renderiza o ícone como um retângulo teal
sólido sem o glifo de pasta, enquanto as colunas "Hover"/"Pressed" (mesmo
node, mesmo asset `imgGroup8` no código-fonte retornado) renderizam a pasta
corretamente. Como o código-fonte usa o mesmo asset em todas as 3 colunas,
isso é consistente com um artefato de renderização do screenshot da
ferramenta MCP, não uma diferença real de design — confirmado, não
corrigido (Regra 9). Storybook (`Default`/`Hover`/`Pressed`/`Storage`/`Small
With Arrow`) mostra a pasta corretamente em todos os estados. Nenhuma
divergência de código encontrada.

## Reverificado em auditoria de ponto-fixo (12ª passada, 2026-08-13)

`get_design_context` fresco no nó `1421:19200` + screenshot Storybook
confirmaram uma divergência material: o slot `molecule/ArchiveItem` dentro
da linha tem container 64×40 com glifo teal e micro-rótulo "Arquivo 1"; a
implementação renderizava só o glifo, sem o rótulo interno confirmado.
Corrigido em `file-list.tsx` com `FileListArchiveItem` local e screenshots
recapturados.

## Relocado de `organism/file-list-item` (US-022)

Este componente **já existia**, mas sob o nome `organism/file-list-item`
(criado na US-006, 100% inferido antes do acesso ao Figma). Uma correção
de 2026-08-11 (auditoria da Regra 11) já tinha reescrito sua composição
para bater com este node real (removendo um `atom/PushButton` e um
`molecule/chip-folder-tag` **inventados**), mas manteve o arquivo em
`organisms/`. Nesta US, o componente é **relocado para `molecules/`** — o
node Figma se chama literalmente `molecule/FileList`, não `organism/*`; a
pasta antiga refletia uma categorização inferida, agora corrigida para
bater com a taxonomia real do arquivo fonte (Regra 9). Nenhum comportamento
visual muda nesta relocação além dos formats novos abaixo.

## Eixos confirmados (Regra 11)

`get_design_context` retorna um component set com 3 eixos: `format`
(`FileList`\|`StorageList`\|`FileList-SM`) × `style`
(`Idle`\|`Hover`\|`Pressed`) × `isIconOn` (bool). Mapeados 1:1:

| Figma | Prop | Composição confirmada |
| --- | --- | --- |
| `format=FileList` | `format="list"` (default) | ícone + nome + **Proprietário** + **Tamanho_File** ("100MB") |
| `format=StorageList` | `format="storage"` | ícone + nome + **Tamanho_File**, sem coluna Proprietário |
| `format=FileList-SM` | `format="list-sm"` | ícone + nome + `atom/Icon/ArrowRight`, sem Proprietário/Tamanho |
| `isIconOn` | `showIcon` | mostra/esconde o ícone de arquivo |

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| Ícone de arquivo (`molecule/ArchiveItem`) | 🔧 **Corrigido em auditoria Regra 11 (US-026)** — `get_design_context` no nó `1421:19200` confirma container 64×40 com pasta teal (`FolderArchiveGlyph.svg`) + micro-rótulo "Arquivo 1" abaixo. A versão anterior renderizava só o glifo. | ✅ Figma-confirmado |
| Nome, 16px, `var(--brand-secondary-light,#6b6b68)` | ✅ `text-base text-brand-secondary-light` (token já existente) | ✅ Figma-confirmado |
| Proprietário (format `list`), mesma cor/tamanho | ✅ | ✅ Figma-confirmado |
| Tamanho_File (formats `list`/`storage`) | ✅ | ✅ Figma-confirmado |
| Seta `atom/Icon/ArrowRight` (format `list-sm`) | ✅ `<Icon name="ArrowRight" />` — asset real, corrige a aproximação anterior via `lucide-react` usada em `organism/file-list-container` | ✅ Figma-confirmado |
| Fundo `Pressed`: `var(--brand-primary-light,#c8dce3)` | ✅ `bg-brand-teal-light` (mesmo hex, token já existente) | ✅ Figma-confirmado |
| Fundo `Hover`: `var(--neutral-surface-background,#f3f3f3)` | ✅ `bg-zinc-100` (aproximação Zinc, Regra 3 — paleta neutra suspensa) | ✅ Figma-confirmado (aproximado) |
| Largura `list`/`storage`: 1025px, `list-sm`: 560px | ✅ `max-w-[1025px]`/`max-w-[560px]` | ✅ Figma-confirmado |

**Gap não reproduzido**: o export do Figma inclui `mix-blend-multiply` no
estado `Hover` — tratado como artefato de autoria (blend mode do editor,
não uma intenção de UI visível em contexto de fundo sólido) e não
reproduzido, mesmo critério já usado para simplificar ruído de export em
outros componentes desta US.

## Estados (Regra 8)

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Idle | ✅ fundo transparente | ✅ Figma-confirmado |
| Hover | ✅ `state="hover"` | ✅ Figma-confirmado |
| Pressed | ✅ `state="pressed"` | ✅ Figma-confirmado |
| Disabled/Loading/Error | Não documentado no Figma — não implementado | — |

**Fluid interface**: `transition-colors` nativo entre os 3 fundos.
**reduced-motion**: não documentado no Figma; única transição é de cor.

## Material Liquid Glass

Não aplicável — fundo sólido/transparente, sem uso do material.

## Terminologia

Não renderiza texto fixo de produto — `fileName`/`owner`/`size` são
conteúdo de usuário. Nenhum termo proibido (Regra 5).
