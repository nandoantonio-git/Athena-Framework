# ArchiveBrowserModal/Search — histórico de auditoria

Espelha o conteúdo removido de `stories/molecules/ArchiveBrowserModalSearch.mdx` em 2026-08-16. Node Figma: `molecule/ArchiveBrowserModal/Search`, `1485:21074`.

## Status

✅ aligned — protocolo completo da Regra 11 aplicado nesta US
(US-024): `get_design_context` real no node.

## Reverificado em auditoria de ponto-fixo (12ª passada, 2026-08-13)

`get_design_context` fresco no nó `1485:21074` + screenshot Storybook
comparados elemento-a-elemento — busca (`SearchBar/Placeholder/XXL`,
texto "Search"/placeholder implementado como "Buscar arquivos, pastas ou
templates", termo da lista aprovada Regra 5), breadcrumb "Pessoal › Fotos ›
Casamento Ana & Bruno" (último item em `brand-primary-default`) e 3
`ArchiveBrowserModal/ListItem` reais batem. Achado material desta retomada:
o painel composto media 270px de altura e não preservava a área vazia grande
sob as três linhas; o Figma confirma root 452×361 e lista interna com 289px
de altura. Corrigido para altura fixa do node composto.

## Composição (Regra 10)

| Peça | Origem |
| --- | --- |
| `molecule/SearchBar/Placeholder/XXL` | Reusa `SearchInput` (`Molecules/SearchInput`) — mesma composição Liquid Glass de 2 camadas já implementada |
| `atom/Icon/ChevronRight` | Reusa `Icon` (`atom/Icon`) no breadcrumb |
| `molecule/ArchiveBrowserModal/ListItem` | Repetido dentro do painel "List" |

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| Busca (`SearchBar/Placeholder/XXL`, `w-full`) | ✅ `<SearchInput className="w-full max-w-none" />` | ✅ Figma-confirmado |
| Breadcrumb (`atom/Icon/ChevronRight` 14px, último item `brand-primary-default`) | ✅ `<Icon name="ChevronRight" className="size-3.5" />` + `text-brand-teal` no último | ✅ Figma-confirmado |
| Moldura externa: `drop-shadow(0px 8px 20px rgba(0,0,0,0.12))` + `rounded-2xl` (24px) | ✅ `shadow-[0px_8px_20px_rgba(0,0,0,0.12)] rounded-2xl` | ✅ Figma-confirmado |
| Root/painel: 452×361; lista interna 289px de altura | ✅ `h-[361px]`; painel `h-[289px]` | ✅ Figma-confirmado |
| "List" interna: `bg-effect-glass-white-70` + `rounded-xl` (16px) | ✅ `bg-effect-glass-white-70 rounded-xl` | ✅ Figma-confirmado |
| Linhas `molecule/ArchiveBrowserModal/ListItem` | ✅ componente real, não markup duplicado | ✅ Figma-confirmado |

## Estados (Regra 8)

Composição estática de exibição — os estados interativos (foco da busca,
seleção de linha) pertencem aos componentes filhos (`SearchInput`,
`ArchiveBrowserModalListItem`), não a este container.

**reduced-motion**: não documentado no Figma.

## Material Liquid Glass

2 camadas confirmadas nesta US: `SearchInput` (Fill+Shadow sólido + Glass
translúcido, já documentado em `SearchInput.mdx`) e o painel "List"
(`bg-effect-glass-white-70`) — ver `Tokens/Materials` (Regra 10).

## Terminologia

Breadcrumb e nomes de arquivo são conteúdo de exemplo/usuário. Nenhum
termo proibido (Regra 5).
