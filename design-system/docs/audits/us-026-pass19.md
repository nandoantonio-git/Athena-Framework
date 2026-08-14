# US-026 pass19 — auditoria de ponto-fixo NON-CLEAN

Data: 2026-08-13. Resultado: **NON-CLEAN**.

Pass19 retomou a passada 18 (fechada NON-CLEAN por cobertura parcial — 69/84
frescos, 15 carregando evidência da passada 17) pelos 15 componentes que
ainda não tinham `get_design_context` fresco *dentro* da passada 18:
`atom/CloseButton`, `atom/ArchiveItem`, `atom/FolderItem`, `atom/ImageItem`,
`atom/VideoItem`, `celule/CleanSpaceListSelection`, `celule/FreeModeOutputNode`,
`organism/CleanSpaceStorage`, `organism/DialogTemplateReviewModal`,
`organism/FileListContainer`, `organism/Header`,
`organism/OrganizeFreeModeCanvas`, `organism/OrganizePanelDropZone`,
`organism/Sidebar`, `organism/SidebarToggle`.

Todos os 15 receberam `get_design_context` fresco nesta própria passada
(`skillNames=resource:figma-design-to-code`), cada um conferido
elemento-a-elemento contra `src/components/` atual.

## Achado material novo (encontrado e corrigido nesta passada)

`atom/CloseButton` (`1421:19008`) — o `get_design_context` fresco confirma
que o glifo "×" (ícone `clear`, node `172:3689` — mesma base de
`atom/ClearButton`) é um elemento **separado**, sobreposto ao círculo de
fundo, nunca bake-ado nos SVGs exportados. `close-button.tsx` só renderizava
o círculo de fundo (`CloseButton{Sm,Md}{Idle,Hover,Pressed}.svg`) — o botão
inteiro renderizava como um ponto sólido sem NENHUM glifo visível, em todo
tamanho e estado. Confirmado no screenshot Storybook
(`atoms-closebutton--all-states.png`, capturado antes da correção) e em
todo consumer com modal (`organism/cleanSpaceStorage`,
`organism/Dialog/TemplateReviewModal`, `organism/ArchiveBrowserModal`,
`molecule/Notification`, `molecule/popover/Notification`,
`organism/SaveLongTermFileStorage`, `organism/Dialog/SaveOrganizationModal`).

**Corrigido**: adicionado overlay `ClearButtonGlyph` (mesmo node Figma já
usado por `atom/ClearButton`) absoluto/centralizado, `currentColor` branco,
tamanho Figma-confirmado (SM 6px / MD 12px) e opacidade por estado
Figma-confirmada (idle 100% / hover 32% / pressed 20% — o fundo já escurece
via overlay preto nos SVGs de círculo existentes, então o glifo mais
transparente no hover/pressed reflete o Figma real, não um bug adicional).

Evidência pós-correção (fresca, esta passada):
- `atoms-closebutton--all-states.png` sha `d4d9882d9fce`
- `atoms-closebutton--default.png` sha `2c1d52af0129`
- `atoms-closebutton--medium.png` sha `2752a0d6924d`
- Consumers recapturados: `organisms-cleanspacestorage--default.png` sha
  `bcf8c93e84d3`, `organisms-dialogtemplatereviewmodal--default.png` sha
  `3668557b5eb8`, `organisms-sidebar--default.png` sha `5d1dda078830`
  (Sidebar não consome CloseButton diretamente, recapturado para confirmar
  ausência de regressão de layout na mesma leva),
  `organisms-archivebrowsermodal--default.png` sha `c5e84d8f421f`, e os
  demais consumers (`molecule/Notification`,
  `molecule/popover/Notification`, `organism/SaveLongTermFileStorage`,
  `organism/Dialog/SaveOrganizationModal`) recapturados sem divergência
  visual nova além do glifo agora visível.

## Demais 14 componentes desta passada — sem divergência nova

`atom/ArchiveItem`, `atom/FolderItem`, `atom/ImageItem`, `atom/VideoItem`,
`celule/CleanSpaceListSelection`, `celule/FreeModeOutputNode`,
`organism/CleanSpaceStorage`, `organism/DialogTemplateReviewModal`,
`organism/FileListContainer`, `organism/Header`,
`organism/OrganizeFreeModeCanvas`, `organism/OrganizePanelDropZone`,
`organism/Sidebar`, `organism/SidebarToggle` — leitura fresca conferida
elemento-a-elemento contra o código atual, nenhuma divergência material
encontrada. Requisito específico do checklist do usuário (Sidebar: ícone de
colapsar em linha própria acima, `Adicionar` em linha separada abaixo,
sem compartilhar linha) confirmado visualmente em
`organisms-sidebar--default.png` — `sidebar-collapse-row` e
`sidebar-add-row` são `<div>`s irmãos distintos em `sidebar.tsx`.

## Gates

- `cd design-system && npx tsc --noEmit` — verde (antes e depois da correção).
- `cd design-system && npm run build-storybook` — verde (antes e depois da correção).

## Resultado

Pass19 completou a cobertura fresca dos 15 componentes pendentes da pass18,
encontrou e corrigiu um achado material real (`atom/CloseButton` sem glifo
visível em nenhum estado) e reverificou todos os consumers afetados. Pelo
protocolo de ponto-fixo, esta passada é **NON-CLEAN**: achado material novo
(mesmo corrigido) sempre encerra a passada como NON-CLEAN. Uma nova passada
completa (pass20) é obrigatória, cobrindo o catálogo inteiro do zero (não
reaproveitando esta passada como evidência prévia).
