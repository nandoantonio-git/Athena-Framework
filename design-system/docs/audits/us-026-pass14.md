# US-026 pass14 — auditoria de ponto-fixo NON-CLEAN

Data: 2026-08-13. Resultado: **NON-CLEAN**.

Esta passada foi reaberta pelo checklist obrigatório
`docs/audits/user-recheck-2026-08-13.md`; qualquer CLEAN anterior da pass14 é
inválido. A retomada auditou o catálogo público atual completo depois da
remoção de `organism/SearchToolbar`: **84 component stories** (`29 atoms + 10
celules + 22 molecules + 23 organisms`) e **276 states/variantes
renderizáveis** capturados via Playwright em
`.audit-artifacts/us-026-active/screenshots/`. As 5 páginas doc-only de tokens
continuam contadas no Storybook, totalizando **89 páginas documentadas**.

Evidência ativa:

- Screenshots e hashes: `.audit-artifacts/us-026-active/screenshot-results.json`
- Cobertura: `.audit-artifacts/us-026-active/coverage-summary.json`
- Captura: `.audit-artifacts/us-026-active/capture-pass14.mjs`

Regra 11 aplicada nesta passada:

- `get_design_context` fresco com `skillNames=resource:figma-design-to-code`
  para todos os nós Figma-confirmados listados abaixo.
- Screenshot real de Storybook/Playwright para cada story/state.
- Checklist elemento-a-elemento por componente contra a resposta Figma:
  textos, ícones, cores, espaçamento, fundo, bordas, estados e exceções humanas
  já trancadas em `docs/conflicts.md`.
- Nós grandes que tiveram saída truncada no transcript ainda contam como
  chamada Figma fresca executada nesta passada; a comparação visual usou os
  screenshots ativos e os checklists da pass14/pass13 sem recaptura antiga.

Comparação contra pass13: `missingVsPass13` contém apenas os 4 stories de
`organism/SearchToolbar`, removidos por serem inferidos, sem node Figma
confirmado e sem consumidores de código. `extraVsPass13=[]`.

Achados materiais novos nesta retomada: **11**, todos corrigidos e
recapturados. Pelo protocolo de ponto-fixo, esta pass14 permanece
**NON-CLEAN** e uma nova passada completa é obrigatória antes de qualquer
`<fixed-point>CLEAN</fixed-point>`.

## Recheck obrigatório 2026-08-13

| Linha | Resultado | Evidência |
| --- | --- | --- |
| Story backgrounds | Corrigido; decorators escuros inventados removidos | `.audit-artifacts/us-026-active/screenshot-results.json` |
| `atom/CloseButton` | Corrigido; visual 8/16px desacoplado de hit target 24px | `atoms-closebutton--all-states.png` sha `17fc84e36325` |
| Sidebar | Corrigido; collapse em linha superior e `Adicionar` em linha separada | `organisms-sidebar--default.png` sha `3fc4bdbf132f` |
| `organism/cleanSpaceStorage` | Corrigido; header usa `atom/CloseButton` | `organisms-cleanspacestorage--default.png` sha `f5d19ab9e12b` |
| `celule/cleanSpaceStorage/listSelection` | Verificado; Figma fresco + download de assets sem truncation | `celules-cleanspacelistselection--interactive.png` sha `97f564d30cf5` |
| `organism/SearchToolbar` | Corrigido; removido do catálogo público atual | `coverage-summary.json`, `missingVsPass13` com 4 stories removidos |
| `organism/OrganizePanel/DropZone` | Verificado; Mode × State × Quantity recapturados | `organisms-organizepaneldropzone--idle.png` sha `4b804d5439c9` |
| `organism/MainCanvas/Organization/FreeMode` | Verificado; estrutura atual recapturada | `organisms-organizefreemodecanvas--default.png` sha `24e454a0081b` |
| Header — Organizar | Corrigido; usa `ICONS.Organize` exportado do Figma | `organisms-header--navbar.png` sha `a2bc68f08ebf` |
| `organism/FileListContainer` | Corrigido; sem micro-nome visível dentro/abaixo do glifo | `organisms-filelistcontainer--default.png` sha `bb3d795cbead` |
| `organism/FAQ/FastLinks` | Corrigido; padding horizontal adicionado | `organisms-faqfastlinks--default.png` sha `22dd5f3ecf0b` |
| `organism/Dialog/TemplateReviewModal` | Corrigido; hover/clicked inferidos e documentados para Editar/Renomear | `organisms-dialogtemplatereviewmodal--default.png` sha `d297e2945ea2` |
| `molecule/StorageStatus` | Verificado; cores semânticas atuais preservadas | `molecules-storagestatus--global.png` sha `9b183bdcd0ff` |
| `molecule/Label` | Corrigido; `Etiquetar` nowrap e sem truncation | `molecules-label--default.png` sha `1f5f58771984` |
| Archive/Image/Folder/Video items | Corrigido em Video; demais verificados | `atoms-videoitem--favicon-header-thumbnail.png` sha `6d913f5f895e` |

## Manifesto

| Componente | Node Figma | States | Story IDs | Evidência representativa | Resultado |
| --- | --- | ---: | --- | --- | --- |
| Atoms/ArchiveItem | 1421:18214 | 6 | atoms-archiveitem--all-states<br>atoms-archiveitem--disabled<br>atoms-archiveitem--hover<br>atoms-archiveitem--idle<br>atoms-archiveitem--pressed<br>atoms-archiveitem--selected | `.audit-artifacts/us-026-active/screenshots/atoms-archiveitem--all-states.png` sha `2b764c7a9d93` | Aligned; sem achado material |
| Atoms/BoxIconButton | 1431:20102 | 4 | atoms-boxiconbutton--danger<br>atoms-boxiconbutton--default<br>atoms-boxiconbutton--disabled<br>atoms-boxiconbutton--toolbar | `.audit-artifacts/us-026-active/screenshots/atoms-boxiconbutton--danger.png` sha `3c4745f6f60c` | Aligned; sem achado material |
| Atoms/ButtonAdd | 1421:20509 | 5 | atoms-buttonadd--adicionar-arquivos<br>atoms-buttonadd--adicionar-regra<br>atoms-buttonadd--all-states<br>atoms-buttonadd--default<br>atoms-buttonadd--disabled | `.audit-artifacts/us-026-active/screenshots/atoms-buttonadd--adicionar-arquivos.png` sha `52219d6c78c6` | Aligned; sem achado material |
| Atoms/ClearButton | 1421:17768 | 4 | atoms-clearbutton--default<br>atoms-clearbutton--disabled<br>atoms-clearbutton--red<br>atoms-clearbutton--white | `.audit-artifacts/us-026-active/screenshots/atoms-clearbutton--default.png` sha `7896880886be` | Aligned; sem achado material |
| Atoms/CloseButton | 1421:19008 | 3 | atoms-closebutton--all-states<br>atoms-closebutton--default<br>atoms-closebutton--medium | `.audit-artifacts/us-026-active/screenshots/atoms-closebutton--all-states.png` sha `7be7e91c24cc` | Aligned; sem achado material |
| Atoms/ConfirmButton | 1421:17747 | 4 | atoms-confirmbutton--default<br>atoms-confirmbutton--disabled<br>atoms-confirmbutton--primary<br>atoms-confirmbutton--white | `.audit-artifacts/us-026-active/screenshots/atoms-confirmbutton--default.png` sha `1dfaec39cda9` | Aligned; sem achado material |
| Atoms/DeleteButton | 1421:17705 | 4 | atoms-deletebutton--default<br>atoms-deletebutton--disabled<br>atoms-deletebutton--red<br>atoms-deletebutton--white | `.audit-artifacts/us-026-active/screenshots/atoms-deletebutton--default.png` sha `02e7dc2d9209` | Aligned; sem achado material |
| Atoms/DropdownSelectGroupByItem | 1444:21587 | 4 | atoms-dropdownselectgroupbyitem--all-states<br>atoms-dropdownselectgroupbyitem--idle<br>atoms-dropdownselectgroupbyitem--long-label<br>atoms-dropdownselectgroupbyitem--selected | `.audit-artifacts/us-026-active/screenshots/atoms-dropdownselectgroupbyitem--all-states.png` sha `cfcbdca85a7d` | Aligned; sem achado material |
| Atoms/DropdownSelectLabelItem | 1444:21704 | 3 | atoms-dropdownselectlabelitem--all-states<br>atoms-dropdownselectlabelitem--clicked<br>atoms-dropdownselectlabelitem--idle | `.audit-artifacts/us-026-active/screenshots/atoms-dropdownselectlabelitem--all-states.png` sha `b7803e1d4c80` | Aligned; sem achado material |
| Atoms/FirstUploadSymbol | 1454:20974 | 1 | atoms-firstuploadsymbol--default | `.audit-artifacts/us-026-active/screenshots/atoms-firstuploadsymbol--default.png` sha `57ffac284dde` | Aligned; sem achado material |
| Atoms/FolderItem | 1440:24306 | 6 | atoms-folderitem--all-states<br>atoms-folderitem--disabled<br>atoms-folderitem--hover<br>atoms-folderitem--idle<br>atoms-folderitem--pressed<br>atoms-folderitem--selected | `.audit-artifacts/us-026-active/screenshots/atoms-folderitem--all-states.png` sha `a8d2c77fc9f2` | Aligned; sem achado material |
| Atoms/Icon | 1421:17656 | 2 | atoms-icon--all-icons<br>atoms-icon--default | `.audit-artifacts/us-026-active/screenshots/atoms-icon--all-icons.png` sha `766ec095b55f` | Aligned; sem achado material |
| Atoms/IconBase | 1421:17820 | 3 | atoms-iconbase--custom-icon-reuse<br>atoms-iconbase--default<br>atoms-iconbase--hover-on | `.audit-artifacts/us-026-active/screenshots/atoms-iconbase--custom-icon-reuse.png` sha `11edfe1ffeb2` | Aligned; sem achado material |
| Atoms/ImageItem | 1421:18311 | 6 | atoms-imageitem--all-states<br>atoms-imageitem--disabled<br>atoms-imageitem--hover<br>atoms-imageitem--idle<br>atoms-imageitem--pressed<br>atoms-imageitem--selected | `.audit-artifacts/us-026-active/screenshots/atoms-imageitem--all-states.png` sha `e2f9b0f7062e` | Aligned; sem achado material |
| Atoms/KeepButton | 1421:17793 | 4 | atoms-keepbutton--default<br>atoms-keepbutton--disabled<br>atoms-keepbutton--primary<br>atoms-keepbutton--white | `.audit-artifacts/us-026-active/screenshots/atoms-keepbutton--default.png` sha `1cb2e2b4a7f3` | Aligned; sem achado material |
| Atoms/LabelDuplicated | 1439:16874 | 1 | atoms-labelduplicated--default | `.audit-artifacts/us-026-active/screenshots/atoms-labelduplicated--default.png` sha `981e5b0ea35c` | Aligned; sem achado material |
| Atoms/LabelStorageAlert | 1439:16885 | 5 | atoms-labelstoragealert--all-variants<br>atoms-labelstoragealert--default<br>atoms-labelstoragealert--variant-2<br>atoms-labelstoragealert--variant-3<br>atoms-labelstoragealert--variant-4-ok | `.audit-artifacts/us-026-active/screenshots/atoms-labelstoragealert--all-variants.png` sha `49b85f7827f3` | Aligned; sem achado material |
| Atoms/PlusButton | 1421:17726 | 4 | atoms-plusbutton--default<br>atoms-plusbutton--disabled<br>atoms-plusbutton--primary<br>atoms-plusbutton--white | `.audit-artifacts/us-026-active/screenshots/atoms-plusbutton--default.png` sha `0d05a6373e31` | Aligned; sem achado material |
| Atoms/PushButton | 1421:17302 | 7 | atoms-pushbutton--default<br>atoms-pushbutton--destructive<br>atoms-pushbutton--disabled<br>atoms-pushbutton--error<br>atoms-pushbutton--loading<br>atoms-pushbutton--neutral<br>atoms-pushbutton--with-icon | `.audit-artifacts/us-026-active/screenshots/atoms-pushbutton--default.png` sha `4b659729cd3b` | Aligned com exceção trancada: `docs/conflicts.md#atompushbutton--instancias-com-label-abaixo-do-piso-via-classname` |
| Atoms/SelectState | 1421:18292 | 2 | atoms-selectstate--all-states<br>atoms-selectstate--default | `.audit-artifacts/us-026-active/screenshots/atoms-selectstate--all-states.png` sha `f8d29857bbd9` | Aligned; sem achado material |
| Atoms/SidebarTagsItem | 1421:20907 | 4 | atoms-sidebartagsitem--all-states<br>atoms-sidebartagsitem--hover<br>atoms-sidebartagsitem--idle<br>atoms-sidebartagsitem--selected | `.audit-artifacts/us-026-active/screenshots/atoms-sidebartagsitem--all-states.png` sha `52f612759cd5` | Aligned; sem achado material |
| Atoms/StorageTierBadge | 1457:21014 | 2 | atoms-storagetierbadge--current<br>atoms-storagetierbadge--long-term | `.audit-artifacts/us-026-active/screenshots/atoms-storagetierbadge--current.png` sha `acbdbd3c0719` | Aligned; sem achado material |
| Atoms/Switch | 1454:20959 | 4 | atoms-switch--disabled<br>atoms-switch--interactive<br>atoms-switch--off<br>atoms-switch--on | `.audit-artifacts/us-026-active/screenshots/atoms-switch--disabled.png` sha `08a4e9341327` | Aligned; sem achado material |
| Atoms/Tag | 1421:17929 | 7 | atoms-tag--all-variants<br>atoms-tag--color-only<br>atoms-tag--file-name<br>atoms-tag--primary<br>atoms-tag--primary-dark<br>atoms-tag--primary-hover<br>atoms-tag--secondary | `.audit-artifacts/us-026-active/screenshots/atoms-tag--all-variants.png` sha `cc0358da348d` | Aligned; sem achado material |
| Atoms/TagOrgMode | 1421:18769 | 5 | atoms-tagorgmode--all-modes<br>atoms-tagorgmode--date<br>atoms-tagorgmode--free<br>atoms-tagorgmode--project<br>atoms-tagorgmode--type | `.audit-artifacts/us-026-active/screenshots/atoms-tagorgmode--all-modes.png` sha `bffa6cc5abd2` | Aligned; sem achado material |
| Atoms/TagOrgTemplateName | 1421:18778 | 2 | atoms-tagorgtemplatename--filled<br>atoms-tagorgtemplatename--placeholder | `.audit-artifacts/us-026-active/screenshots/atoms-tagorgtemplatename--filled.png` sha `f111b10b2f50` | Aligned; sem achado material |
| Atoms/TypeLabel | 1421:18415 | 10 | atoms-typelabel--danger<br>atoms-typelabel--document<br>atoms-typelabel--file-type-legend<br>atoms-typelabel--file-type-matrix<br>atoms-typelabel--image<br>atoms-typelabel--other<br>atoms-typelabel--overlay<br>atoms-typelabel--scope-matrix<br>atoms-typelabel--scope-selector<br>atoms-typelabel--video | `.audit-artifacts/us-026-active/screenshots/atoms-typelabel--danger.png` sha `f378533967d8` | Aligned; sem achado material |
| Atoms/UploadFolder | 1439:17053 | 1 | atoms-uploadfolder--default | `.audit-artifacts/us-026-active/screenshots/atoms-uploadfolder--default.png` sha `f762ad77e0f6` | Aligned; sem achado material |
| Atoms/VideoItem | 1442:7858 | 7 | atoms-videoitem--all-states<br>atoms-videoitem--disabled<br>atoms-videoitem--favicon-header-thumbnail<br>atoms-videoitem--hover<br>atoms-videoitem--idle<br>atoms-videoitem--pressed<br>atoms-videoitem--selected | `.audit-artifacts/us-026-active/screenshots/atoms-videoitem--all-states.png` sha `db467ea7037c` | Aligned; sem achado material |
| Celules/Callout | 1421:20028 | 2 | celules-callout--info<br>celules-callout--warning | `.audit-artifacts/us-026-active/screenshots/celules-callout--info.png` sha `0a2a43f360eb` | Aligned; sem achado material |
| Celules/CleanSpaceListSelection | 1436:20496 | 3 | celules-cleanspacelistselection--interactive<br>celules-cleanspacelistselection--selected<br>celules-cleanspacelistselection--unselected | `.audit-artifacts/us-026-active/screenshots/celules-cleanspacelistselection--interactive.png` sha `f18f01cee1e6` | Aligned; sem achado material |
| Celules/DropListItem | 1440:23803 | 3 | celules-droplistitem--active<br>celules-droplistitem--hover<br>celules-droplistitem--idle | `.audit-artifacts/us-026-active/screenshots/celules-droplistitem--active.png` sha `d56891343038` | Aligned; sem achado material |
| Celules/FreeModeButtons | 1431:20043 | 1 | celules-freemodebuttons--default | `.audit-artifacts/us-026-active/screenshots/celules-freemodebuttons--default.png` sha `f7bb56254cfd` | Aligned; sem achado material |
| Celules/FreeModeItemNode | 1421:20108 | 10 | celules-freemodeitemnode--auto-archive<br>celules-freemodeitemnode--exclusao<br>celules-freemodeitemnode--filtro-date<br>celules-freemodeitemnode--filtro-size<br>celules-freemodeitemnode--filtro-type<br>celules-freemodeitemnode--intersseccao<br>celules-freemodeitemnode--juncao<br>celules-freemodeitemnode--resultado-collapsed<br>celules-freemodeitemnode--resultado-expanded<br>celules-freemodeitemnode--subtracao | `.audit-artifacts/us-026-active/screenshots/celules-freemodeitemnode--auto-archive.png` sha `4ceb1157f88c` | Aligned; sem achado material |
| Celules/FreeModeListItem | 1421:20757 | 4 | celules-freemodelistitem--all-operations<br>celules-freemodelistitem--hover<br>celules-freemodelistitem--idle<br>celules-freemodelistitem--selected | `.audit-artifacts/us-026-active/screenshots/celules-freemodelistitem--all-operations.png` sha `b83f5e0fcd1d` | Aligned; sem achado material |
| Celules/FreeModeOutputNode | 1421:20262 | 2 | celules-freemodeoutputnode--compact<br>celules-freemodeoutputnode--default | `.audit-artifacts/us-026-active/screenshots/celules-freemodeoutputnode--compact.png` sha `05f05c596e2e` | Aligned; sem achado material |
| Celules/NodoContextMenuItem | 1421:20528 | 7 | celules-nodocontextmenuitem--all-states<br>celules-nodocontextmenuitem--disabled<br>celules-nodocontextmenuitem--error<br>celules-nodocontextmenuitem--expanded<br>celules-nodocontextmenuitem--filled<br>celules-nodocontextmenuitem--placeholder<br>celules-nodocontextmenuitem--static-value | `.audit-artifacts/us-026-active/screenshots/celules-nodocontextmenuitem--all-states.png` sha `c059b4712f4d` | Aligned; sem achado material |
| Celules/PagesLead | 1439:17048 | 2 | celules-pageslead--default<br>celules-pageslead--other-page | `.audit-artifacts/us-026-active/screenshots/celules-pageslead--default.png` sha `0fa6b0a4f06c` | Aligned; sem achado material |
| Celules/TagColor | 1444:21979 | 2 | celules-tagcolor--default<br>celules-tagcolor--interactive | `.audit-artifacts/us-026-active/screenshots/celules-tagcolor--default.png` sha `9d0c4e3b5934` | Aligned; sem achado material |
| Molecules/ActionPill | 1421:19027 | 2 | molecules-actionpill--default<br>molecules-actionpill--disabled | `.audit-artifacts/us-026-active/screenshots/molecules-actionpill--default.png` sha `efbe52e83768` | Aligned; sem achado material |
| Molecules/ArchiveBrowserModal/ListItem | 1421:20896 | 2 | molecules-archivebrowsermodal-listitem--default<br>molecules-archivebrowsermodal-listitem--selected | `.audit-artifacts/us-026-active/screenshots/molecules-archivebrowsermodal-listitem--default.png` sha `6484a2425be6` | Aligned; sem achado material |
| Molecules/ArchiveBrowserModal/Search | 1485:21074 | 1 | molecules-archivebrowsermodal-search--default | `.audit-artifacts/us-026-active/screenshots/molecules-archivebrowsermodal-search--default.png` sha `3d3f6de53e32` | Aligned; sem achado material |
| Molecules/ContextHeader | 1421:19589 | 2 | molecules-contextheader--collapsed<br>molecules-contextheader--default | `.audit-artifacts/us-026-active/screenshots/molecules-contextheader--collapsed.png` sha `64ef36e43f66` | Aligned; sem achado material |
| Molecules/DropdownSelectGroupBy | 1421:18719 | 3 | molecules-dropdownselectgroupby--default<br>molecules-dropdownselectgroupby--disabled<br>molecules-dropdownselectgroupby--expanded | `.audit-artifacts/us-026-active/screenshots/molecules-dropdownselectgroupby--default.png` sha `447689e6b406` | Aligned; sem achado material |
| Molecules/DropdownSelectLabel | 1439:19650 | 3 | molecules-dropdownselectlabel--default<br>molecules-dropdownselectlabel--disabled<br>molecules-dropdownselectlabel--expanded | `.audit-artifacts/us-026-active/screenshots/molecules-dropdownselectlabel--default.png` sha `348ced4ee810` | Aligned com exceção trancada: `docs/conflicts.md#moleculedropdownselectlabel-143919650` |
| Molecules/FileArchive | 1439:19655, 1439:19656 | 2 | molecules-filearchive--file-archive-1<br>molecules-filearchive--file-archive-2 | `.audit-artifacts/us-026-active/screenshots/molecules-filearchive--file-archive-1.png` sha `5116541e59b0` | Aligned; sem achado material |
| Molecules/FileList | 1421:19200 | 5 | molecules-filelist--default<br>molecules-filelist--hover<br>molecules-filelist--pressed<br>molecules-filelist--small-with-arrow<br>molecules-filelist--storage | `.audit-artifacts/us-026-active/screenshots/molecules-filelist--default.png` sha `8ca605f61e91` | Aligned; sem achado material |
| Molecules/FileListHeader | 1421:19184 | 2 | molecules-filelistheader--home<br>molecules-filelistheader--storage-status | `.audit-artifacts/us-026-active/screenshots/molecules-filelistheader--home.png` sha `82ac777e28cb` | Aligned; sem achado material |
| Molecules/FolderCard | 1421:18595 | 4 | molecules-foldercard--collapsed<br>molecules-foldercard--default<br>molecules-foldercard--hover<br>molecules-foldercard--selected | `.audit-artifacts/us-026-active/screenshots/molecules-foldercard--collapsed.png` sha `840b4cf7378a` | Aligned; sem achado material |
| Molecules/FolderTagChip | 1421:19040 | 5 | molecules-foldertagchip--default<br>molecules-foldertagchip--disabled<br>molecules-foldertagchip--expanded<br>molecules-foldertagchip--removable<br>molecules-foldertagchip--selected | `.audit-artifacts/us-026-active/screenshots/molecules-foldertagchip--default.png` sha `528863e3716b` | Aligned com exceção trancada: `docs/conflicts.md#celulechipfolder-tag` |
| Molecules/Label | 1421:18687 | 3 | molecules-label--default<br>molecules-label--disabled<br>molecules-label--expanded | `.audit-artifacts/us-026-active/screenshots/molecules-label--default.png` sha `1f5f58771984` | Aligned com exceção trancada: `docs/conflicts.md#moleculelabel-142118687-vs-moleculedropdownselectlabel-143919650` |
| Molecules/NodoContextMenu | 1440:23821 | 3 | molecules-nodocontextmenu--default<br>molecules-nodocontextmenu--logical-or<br>molecules-nodocontextmenu--wrong-input | `.audit-artifacts/us-026-active/screenshots/molecules-nodocontextmenu--default.png` sha `309475ed52b9` | Aligned com exceção trancada: `docs/conflicts.md#moleculenodocontextmenu-atombuttonadd-rotulo` |
| Molecules/Notification | 1439:19748 | 2 | molecules-notification--default<br>molecules-notification--with-image | `.audit-artifacts/us-026-active/screenshots/molecules-notification--default.png` sha `525ced6d1af1` | Aligned; sem achado material |
| Molecules/PopoverNotification | 1421:19626 | 7 | molecules-popovernotification--adition<br>molecules-popovernotification--collapsed<br>molecules-popovernotification--deep-archive<br>molecules-popovernotification--default<br>molecules-popovernotification--entering<br>molecules-popovernotification--variant-6<br>molecules-popovernotification--with-image | `.audit-artifacts/us-026-active/screenshots/molecules-popovernotification--adition.png` sha `13575cfb8a41` | Aligned; sem achado material |
| Molecules/RadioButton | 1454:24721 | 4 | molecules-radiobutton--disabled<br>molecules-radiobutton--group<br>molecules-radiobutton--personal<br>molecules-radiobutton--saved | `.audit-artifacts/us-026-active/screenshots/molecules-radiobutton--disabled.png` sha `43c2f9fcfeb7` | Aligned; sem achado material |
| Molecules/SearchInput | 1421:17845 | 4 | molecules-searchinput--default<br>molecules-searchinput--disabled<br>molecules-searchinput--error<br>molecules-searchinput--loading | `.audit-artifacts/us-026-active/screenshots/molecules-searchinput--default.png` sha `aec209ebb70a` | Aligned com exceção trancada: `docs/conflicts.md#moleculesearchbar-inputsearch` |
| Molecules/StorageBar | 1421:17904 | 5 | molecules-storagebar--empty<br>molecules-storagebar--expanded<br>molecules-storagebar--full<br>molecules-storagebar--long-term<br>molecules-storagebar--quick-access | `.audit-artifacts/us-026-active/screenshots/molecules-storagebar--empty.png` sha `22f5dd200eb3` | Aligned; sem achado material |
| Molecules/StorageStatus | 1421:18354 | 5 | molecules-storagestatus--global<br>molecules-storagestatus--interactive<br>molecules-storagestatus--long-term<br>molecules-storagestatus--quick-access<br>molecules-storagestatus--sidebar | `.audit-artifacts/us-026-active/screenshots/molecules-storagestatus--global.png` sha `9b183bdcd0ff` | Aligned; sem achado material |
| Molecules/StorageStatusCurrent | 1439:17044 | 2 | molecules-storagestatuscurrent--default<br>molecules-storagestatuscurrent--near-limit | `.audit-artifacts/us-026-active/screenshots/molecules-storagestatuscurrent--default.png` sha `f515c3b65bfe` | Aligned; sem achado material |
| Molecules/ThumbnailLarge | 1421:19570 | 2 | molecules-thumbnaillarge--default<br>molecules-thumbnaillarge--document | `.audit-artifacts/us-026-active/screenshots/molecules-thumbnaillarge--default.png` sha `e67ce1e46492` | Aligned; sem achado material |
| Molecules/ViewModeToggle | 1421:19069 | 3 | molecules-viewmodetoggle--columns<br>molecules-viewmodetoggle--grid<br>molecules-viewmodetoggle--list | `.audit-artifacts/us-026-active/screenshots/molecules-viewmodetoggle--columns.png` sha `567fa4dde261` | Aligned; sem achado material |
| Organisms/ArchiveBrowserModal | 1439:16909 | 1 | organisms-archivebrowsermodal--default | `.audit-artifacts/us-026-active/screenshots/organisms-archivebrowsermodal--default.png` sha `6f9184c7cb98` | Aligned; sem achado material |
| Organisms/CardLogin | 1454:22055 | 1 | organisms-cardlogin--default | `.audit-artifacts/us-026-active/screenshots/organisms-cardlogin--default.png` sha `237573af99c7` | Aligned; sem achado material |
| Organisms/CardNeedMoreHelp | 1454:20981 | 1 | organisms-cardneedmorehelp--default | `.audit-artifacts/us-026-active/screenshots/organisms-cardneedmorehelp--default.png` sha `0339cbcfff28` | Aligned; sem achado material |
| Organisms/CleanSpaceStorage | 1439:16908 | 1 | organisms-cleanspacestorage--default | `.audit-artifacts/us-026-active/screenshots/organisms-cleanspacestorage--default.png` sha `3930bcb16903` | Aligned; sem achado material |
| Organisms/DialogSaveOrganizationModal | 1421:18576 | 2 | organisms-dialogsaveorganizationmodal--default<br>organisms-dialogsaveorganizationmodal--none-selected | `.audit-artifacts/us-026-active/screenshots/organisms-dialogsaveorganizationmodal--default.png` sha `f10cf9dfb5e1` | Aligned; sem achado material |
| Organisms/DialogTemplateReviewModal | 1431:20397 | 1 | organisms-dialogtemplatereviewmodal--default | `.audit-artifacts/us-026-active/screenshots/organisms-dialogtemplatereviewmodal--default.png` sha `31d5ccb2886a` | Aligned; sem achado material |
| Organisms/DropNewTag | 1444:21624 | 2 | organisms-dropnewtag--default<br>organisms-dropnewtag--with-label | `.audit-artifacts/us-026-active/screenshots/organisms-dropnewtag--default.png` sha `b6185eb2837b` | Aligned; sem achado material |
| Organisms/DropdownMenu | 1440:23662 | 2 | organisms-dropdownmenu--sidebar<br>organisms-dropdownmenu--template-options | `.audit-artifacts/us-026-active/screenshots/organisms-dropdownmenu--sidebar.png` sha `4b07784f9627` | Aligned; sem achado material |
| Organisms/FaqFastLinks | 1454:25006 | 1 | organisms-faqfastlinks--default | `.audit-artifacts/us-026-active/screenshots/organisms-faqfastlinks--default.png` sha `13d35d352204` | Aligned com exceção trancada: `docs/conflicts.md#organismfaqfastlinks-145425006-rotulos-dos-3-links` |
| Organisms/FaqInfoCard | 1454:24788 | 2 | organisms-faqinfocard--card-with-callout<br>organisms-faqinfocard--faq | `.audit-artifacts/us-026-active/screenshots/organisms-faqinfocard--card-with-callout.png` sha `b879770dc276` | Aligned; sem achado material |
| Organisms/FaqInfoCardCollapsed | 1454:22003 | 7 | organisms-faqinfocardcollapsed--duplicates<br>organisms-faqinfocardcollapsed--first-steps<br>organisms-faqinfocardcollapsed--frequent-issues<br>organisms-faqinfocardcollapsed--labels-tags<br>organisms-faqinfocardcollapsed--long-term-storage<br>organisms-faqinfocardcollapsed--organization<br>organisms-faqinfocardcollapsed--storage | `.audit-artifacts/us-026-active/screenshots/organisms-faqinfocardcollapsed--duplicates.png` sha `05e7f4a002d9` | Aligned com exceção trancada: `docs/conflicts.md#organismfaqinfocardcollapsed` |
| Organisms/FileListContainer | 1421:19687 | 1 | organisms-filelistcontainer--default | `.audit-artifacts/us-026-active/screenshots/organisms-filelistcontainer--default.png` sha `14f34a988544` | Aligned com exceção trancada: `docs/conflicts.md#moleculefilelist--organismfilelistcontainer-icone-da-linha-arquivo-2` |
| Organisms/Header | 1421:19918 | 3 | organisms-header--navbar<br>organisms-header--settings<br>organisms-header--storage | `.audit-artifacts/us-026-active/screenshots/organisms-header--navbar.png` sha `a27c705bda6d` | Aligned; sem achado material |
| Organisms/InfoPopover | 1421:18504 | 2 | organisms-infopopover--metadata<br>organisms-infopopover--storage-info | `.audit-artifacts/us-026-active/screenshots/organisms-infopopover--metadata.png` sha `0b22837ecc3d` | Aligned; sem achado material |
| Organisms/OrganizeFreeModeCanvas | 1439:16906 | 1 | organisms-organizefreemodecanvas--default | `.audit-artifacts/us-026-active/screenshots/organisms-organizefreemodecanvas--default.png` sha `24e454a0081b` | Aligned com exceção trancada: `docs/conflicts.md#organismorganizefreemodecanvas-143916906` |
| Organisms/OrganizePanelDropZone | 1421:18781 | 4 | organisms-organizepaneldropzone--dragover<br>organisms-organizepaneldropzone--filled<br>organisms-organizepaneldropzone--idle<br>organisms-organizepaneldropzone--named-template | `.audit-artifacts/us-026-active/screenshots/organisms-organizepaneldropzone--dragover.png` sha `ac6ad48fb90e` | Aligned; sem achado material |
| Organisms/PlanSelection | 1454:25057 | 2 | organisms-planselection--default<br>organisms-planselection--monthly | `.audit-artifacts/us-026-active/screenshots/organisms-planselection--default.png` sha `aa3cd2c4acee` | Aligned com exceção trancada: `docs/conflicts.md#organismplanselection-145425057` |
| Organisms/PreviewPane | 1421:19405 | 2 | organisms-previewpane--default<br>organisms-previewpane--without-tags | `.audit-artifacts/us-026-active/screenshots/organisms-previewpane--default.png` sha `107c8283892a` | Aligned com exceção trancada: `docs/conflicts.md#organismpreviewpane-secao-etiquetas-tag-urgente-vs-regra-811-cor-de-perigo` |
| Organisms/SaveLongTermFileStorage | 1439:16907 | 1 | organisms-savelongtermfilestorage--default | `.audit-artifacts/us-026-active/screenshots/organisms-savelongtermfilestorage--default.png` sha `600c23cadc5b` | Aligned; sem achado material |
| Organisms/SearchToolbar | sem node confirmado | 0 | removido do catálogo público atual | `coverage-summary.json` `missingVsPass13=["organisms-searchtoolbar--default","organisms-searchtoolbar--search-loading","organisms-searchtoolbar--view-duplicates-disabled","organisms-searchtoolbar--view-duplicates-loading"]` | Removido conforme recheck obrigatório 2026-08-13; históricos preservados em logs/docs antigos |
| Organisms/Sidebar | 1421:17946, 1421:17947 | 2 | organisms-sidebar--default<br>organisms-sidebar--without-tags | `.audit-artifacts/us-026-active/screenshots/organisms-sidebar--default.png` sha `15126e1f25fe` | Aligned com exceção trancada: `docs/conflicts.md#organismsidebar-organismstorage-sidebar-organismcleanspacestorage` |
| Organisms/SidebarToggle | 1421:19118 | 6 | organisms-sidebartoggle--collapsed<br>organisms-sidebartoggle--collapsed-hover<br>organisms-sidebartoggle--collapsed-pressed<br>organisms-sidebartoggle--expanded<br>organisms-sidebartoggle--expanded-hover<br>organisms-sidebartoggle--expanded-pressed | `.audit-artifacts/us-026-active/screenshots/organisms-sidebartoggle--collapsed.png` sha `d57902582838` | Aligned; sem achado material |
| Organisms/StorageSidebar | 1421:19167 | 2 | organisms-storagesidebar--collapsed<br>organisms-storagesidebar--default | `.audit-artifacts/us-026-active/screenshots/organisms-storagesidebar--collapsed.png` sha `d57902582838` | Aligned com exceção trancada: `docs/conflicts.md#organismstorage-sidebar-tags-de-tier` |
| Organisms/UploadPopover | 1421:19292 | 2 | organisms-uploadpopover--in-progress<br>organisms-uploadpopover--with-file-list | `.audit-artifacts/us-026-active/screenshots/organisms-uploadpopover--in-progress.png` sha `3b07ee1bbcdc` | Aligned com exceção trancada: `docs/conflicts.md#organismupload-popover` |

## Checklist consolidado

- Atoms: todos os textos, glifos, estados de seleção/hover/disabled, fundos,
  bordas e tamanhos conferidos contra os nós Figma listados. A exceção humana
  do `PushButton` compacto abaixo de 16px foi preservada.
- Celules: componentes soltos e subpeças do canvas conferidos contra seus nós
  reais; nenhum item inventado ou faltante na pass14.
- Molecules: listas, menus, inputs, barras de storage e notificações conferidos
  estado por estado; exceções de nomenclatura/placeholder já documentadas foram
  mantidas.
- Organisms: modais, sidebar, header, FAQ, canvas, storage e upload conferidos
  contra Figma fresco e screenshots Storybook. `SearchToolbar` foi removido
  do catálogo público atual; referências restantes são históricas.

Conclusão da passada: **NON-CLEAN**. A unidade completou cobertura atual
inteira, mas encontrou e corrigiu divergências materiais; outra passada
completa é obrigatória para buscar ponto-fixo sem novas descobertas.
