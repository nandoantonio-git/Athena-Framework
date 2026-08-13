# US-026 pass 12 audit manifest

Date: 2026-08-13

Scope: 85 current public component stories (29 atoms, 10 celules, 22 molecules, 24 organisms), 279 rendered Storybook states after pass12 coverage fixes. Tokens remain 5 doc-only pages and are not counted as component stories; component stories plus token docs total 90 documented top-level pages.

Figma file: `oFp2TLeCG4GJeCOFVhBvjg`. Active pass evidence: `design-system/.audit-artifacts/us-026-active/`. Storybook URL contract: `http://localhost:6006/iframe.html?id=<story-id>&viewMode=story`.

Result: **NON-CLEAN / active pass incomplete**.

Material finding status: pass12 is NON-CLEAN; material divergences have been found and corrected during multiple resumptions of this active pass:
- `Atoms/PushButton` destructive story used "Liberar Espaço" as a generic atom-level label. Regra 5 only approves that term in Armazenamento/Config. de Plano contexts, not as a generic atom example. The story now uses the Figma-confirmed destructive action label "Excluir"; `PushButton.mdx` documents the pass12 correction.
- `Organisms/CleanSpaceStorage.mdx` still carried a stale contradictory note about the file-icon color conflict, claiming both unresolved teal and resolved teal. It now links back to the locked decision in `docs/conflicts.md`: preserve the blue icon treatment confirmed for `celule/cleanSpaceStorage/listSelection`.
- `Atoms/ConfirmButton` rendered the exported check SVG at 20x20 via the shared wrapper, while fresh Figma context confirms a 16x16 visual icon. The invisible 32x32 touch target is preserved, but the SVG now renders at 16x16 and the default disabled state uses opacity 20%.
- `Atoms/DeleteButton` rendered the exported trash SVG at 20x20 via the shared wrapper, while fresh Figma context confirms a 10px container with a 9.333x12 vector. The invisible 32x32 touch target is preserved, but the SVG now renders at 10x12 and the default disabled state uses opacity 20%.
- `Atoms/FolderItem` documented and rendered `selected-pressed` as an inferred `selected` asset plus `brightness-90`, while fresh Figma context confirms a distinct `Union` + two-rectangle composition. The state now uses an exported Figma SVG for subnode `1440:24356`.
- `Atoms/KeepButton` inherited the shared 20px icon size, while fresh Figma context confirms a 20px component with a 16x16 glyph. The invisible 32x32 touch target is preserved, but the SVG now renders at 16x16 and default disabled opacity is 20%.
- `Atoms/PlusButton` inherited the shared 20px icon size, while fresh Figma context confirms a 16px component with a 12x12 glyph. The invisible 32x32 touch target is preserved, but the SVG now renders at 12x12 and default disabled opacity is 20%.
- `Atoms/LabelStorageAlert` rendered all four variant glyphs at 11x11. Fresh Figma context confirms per-variant sizes: default 11.08x14, variant2 11x11, variant3 13x15, and variant4 12x14. Each glyph now uses its Figma-confirmed visual size.

Fresh pass12 Figma contexts completed:
- `celule/cleanSpaceStorage/listSelection` (`1436:20496`): checkbox, blue file icon, text, metadata, and `StorageTierBadge` checklist reconfirmed.
- `celule/TagColor` (`1444:21979`): six 7px swatches, 6px gap, selected green halo, color order reconfirmed.
- `atom/PushButton` (`1421:17302`): destructive copy finding above; compact text-size exception remains locked and not reopened.
- `organism/cleanSpaceStorage` (`1439:16908`): title, sections, destructive trash icons, list rows, and duplicate rows checked; code already had trash icons.
- `molecule/SearchInput` (`1421:17845`): locked placeholder and typography exceptions preserved; loading hash difference is animated extension.
- `organism/drop/NewTag` (`1444:21624`): 153x52 panel, placeholder/cursor, and `TagColor` composition checked; `WithLabel` remains a prop demo consistent with Figma description.
- `atom/ArchiveItem` (`1421:18214`): 3-line document glyph, selected `atom/SelectState` badge, hover/pressed/disabled overlays, 10px Figtree label, and rendered story states checked.
- `atom/boxIconButton` (`1431:20102`): 40px square buttons, 10.4px radius, glass border, four toolbar icons, secondary/danger state colors, and icon-only accessible rendering checked.
- `atom/buttonAdd` (`1421:20509`): 32px bordered-neutral add button, plus icon, compact-label locked exception, hover/clicked/disabled states, and contextual label substitution checked.
- `atom/ClearButton` (`1421:17768`): clear glyph, default/red/white styles, default-only hover/filled background, and disabled opacity checked.
- `atom/CloseButton` (`1421:19008`): SM/MD exported close-button assets, idle/hover/pressed states, and ClearButton composition checked.
- `atom/ActionButton/Confirm` (`1421:17747`): check SVG, 16x16 visual size, 32x32 invisible touch target, style colors, and default disabled opacity checked; size/opacity finding corrected.
- `atom/DeleteButton` (`1421:17705`): trash SVG, 10x12 visual size, 32x32 invisible touch target, style colors, and default disabled opacity checked; size/opacity finding corrected.
- `atom/DropdownSelect/GroupBy/Item` (`1444:21587`): 104px item, 10px Figtree label, idle/hover/selected backgrounds, and label substitution checked.
- `atom/DropdownSelect/Label/Item` (`1444:21704`): 80x18 item, "+ Nova Etiqueta" label, 10px Figtree text, and idle/hover/clicked backgrounds checked.
- `atom/firstUploadSymbol` (`1454:20974`): 267px neutral circle, 85px CloudDownload icon, and colors checked.
- `atom/FolderItem` (`1440:24306`): folder glyphs by state, selected `SelectState`, 10px Figtree label, and corrected `selected-pressed` asset checked.
- `atom/Icon` section (`1421:17656`): fresh context returned sparse metadata inventory for the Icon/ section; rendered exported SVG grid checked. Exhaustive per-glyph `get_design_context` remains outside completed component coverage.
- `atom/icon/base` (`1421:17820`): 16px component, 14x11 sidebar-collapse symbol, hover-on axis, and custom reuse demo checked.
- `atom/ImageItem` (`1421:18311`): image glyphs by state, glass thumbnail overlay, selected `SelectState`, and 10px Figtree label checked.
- `atom/KeepButton` (`1421:17793`): 20px visual component, 16px keep glyph, style colors, and default disabled opacity checked; size/opacity finding corrected.
- `atom/Label/Duplicated` (`1439:16874`): warning subtle pill, 12.83x13 icon, "Duplicado" label, 16px Figtree type, and colors checked.
- `atom/Label/Storage/Alert` (`1439:16885`): four variant pills, labels, alignments, overlay fill, and per-variant glyph sizes checked; glyph-size finding corrected.
- `atom/PlusButton` (`1421:17726`): 16px visual component, 12px plus glyph, style colors, and default disabled opacity checked; size/opacity finding corrected.

Screenshot/hash notes:
- 279/279 Storybook states captured in `.audit-artifacts/us-026-active/screenshots/`.
- `screenshot-results.json`, `story-index.json`, and `coverage-summary.json` are present under `.audit-artifacts/us-026-active/`.
- Compared with pass11 screenshot IDs: 0 missing, 0 extra.
- Hash differences vs pass11 after recaptures: increased after this continuation because `FolderItem`, `KeepButton`, `PlusButton`, and `LabelStorageAlert` impacted states were recaptured after visual fixes. New material differences include `atoms-pushbutton--destructive`, all 8 `ConfirmButton`/`DeleteButton` states, the recaptured `FolderItem` aggregate/selected states, all 8 `KeepButton`/`PlusButton` states, and all 5 `LabelStorageAlert` states. Other inspected differences were either animated loading states or interactive/control state variance.

Verification gates:
- `cd design-system && npx tsc --noEmit` — passed.
- `cd design-system && npm run build-storybook` — passed.
- `bash scripts/gate.sh design-system` — passed.

Fixed-point decision: this pass is **NON-CLEAN**. Because it corrected material documentation/copy/visual/state-coverage issues, another pass is required before any clean marker can be considered. This active pass has now completed sequential coverage through `Organisms/UploadPopover`; the next Ralph invocation should archive pass12 as NON-CLEAN and initialize a new complete pass rather than continue pass12.

## Component Manifest

| Component | Node ID | Primary story ID | Variants/states | Evidence | Result | Locked/open exception |
| --- | --- | --- | ---: | --- | --- | --- |
| Atoms/ArchiveItem | 1421:18214 | atoms-archiveitem--all-states | 6 | .audit-artifacts/us-026-active/screenshots/atoms-archiveitem--all-states.png sha256:2b764c7a9d93... | aligned; document glyph, overlays, selected badge, and label checked in fresh pass12 context | none |
| Atoms/BoxIconButton | 1431:20102 | atoms-boxiconbutton--danger | 4 | .audit-artifacts/us-026-active/screenshots/atoms-boxiconbutton--danger.png sha256:3c4745f6f60c... | aligned; 40px toolbar buttons, glass border, icon set, and danger state checked in fresh pass12 context | none |
| Atoms/ButtonAdd | 1421:20509 | atoms-buttonadd--adicionar-arquivos | 4 | .audit-artifacts/us-026-active/screenshots/atoms-buttonadd--adicionar-arquivos.png sha256:52219d6c78c6... | aligned with locked compact-text exception; plus icon, bordered neutral chrome, and states checked in fresh pass12 context | docs/conflicts.md#atompushbutton--instancias-com-label-abaixo-do-piso-via-classname |
| Atoms/ClearButton | 1421:17768 | atoms-clearbutton--default | 4 | .audit-artifacts/us-026-active/screenshots/atoms-clearbutton--default.png sha256:7896880886be... | aligned; clear glyph, style colors, default-only hover/filled background, and disabled opacity checked in fresh pass12 context | none |
| Atoms/CloseButton | 1421:19008 | atoms-closebutton--all-states | 3 | .audit-artifacts/us-026-active/screenshots/atoms-closebutton--all-states.png sha256:7be7e91c24cc... | aligned; SM/MD exported assets and idle/hover/pressed states checked in fresh pass12 context | none |
| Atoms/ConfirmButton | 1421:17747 | atoms-confirmbutton--default | 4 | .audit-artifacts/us-026-active/screenshots/atoms-confirmbutton--default.png sha256:1dfaec39cda9... | NON-CLEAN finding corrected: visual SVG size changed to Figma-confirmed 16x16 and disabled opacity to 20%; 32px invisible touch target preserved | none |
| Atoms/DeleteButton | 1421:17705 | atoms-deletebutton--default | 4 | .audit-artifacts/us-026-active/screenshots/atoms-deletebutton--default.png sha256:02e7dc2d9209... | NON-CLEAN finding corrected: visual SVG size changed to Figma-confirmed 10x12 and disabled opacity to 20%; 32px invisible touch target preserved | none |
| Atoms/DropdownSelectGroupByItem | 1444:21587 | atoms-dropdownselectgroupbyitem--all-states | 4 | .audit-artifacts/us-026-active/screenshots/atoms-dropdownselectgroupbyitem--all-states.png sha256:cfcbdca85a7d... | aligned; 104px item, 10px Figtree label, idle/hover/selected backgrounds checked in fresh pass12 context | none |
| Atoms/DropdownSelectLabelItem | 1444:21704 | atoms-dropdownselectlabelitem--all-states | 3 | .audit-artifacts/us-026-active/screenshots/atoms-dropdownselectlabelitem--all-states.png sha256:b7803e1d4c80... | aligned; 80x18 item, + Nova Etiqueta text, 10px Figtree label, idle/hover/clicked backgrounds checked in fresh pass12 context | none |
| Atoms/FirstUploadSymbol | 1454:20974 | atoms-firstuploadsymbol--default | 1 | .audit-artifacts/us-026-active/screenshots/atoms-firstuploadsymbol--default.png sha256:57ffac284dde... | aligned; 267px neutral circle, 85px CloudDownload icon, and colors checked in fresh pass12 context | none |
| Atoms/FolderItem | 1440:24306 | atoms-folderitem--all-states | 6 | .audit-artifacts/us-026-active/screenshots/atoms-folderitem--all-states.png sha256:a8d2c77fc9f2... | NON-CLEAN finding corrected: selected-pressed now uses exported Figma state asset instead of inferred brightness approximation; glyphs, badge, label, and states checked | none |
| Atoms/Icon | 1421:17656 | atoms-icon--all-icons | 2 | .audit-artifacts/us-026-active/screenshots/atoms-icon--all-icons.png sha256:97d505b30ed1... | sparse section context checked against rendered exported SVG grid; exhaustive per-glyph context still not complete | none |
| Atoms/IconBase | 1421:17820 | atoms-iconbase--custom-icon-reuse | 3 | .audit-artifacts/us-026-active/screenshots/atoms-iconbase--default.png sha256:5a6b650846fa... | aligned; 16px component, 14x11 sidebar-collapse symbol, hover-on axis, and custom reuse demo checked | none |
| Atoms/ImageItem | 1421:18311 | atoms-imageitem--all-states | 6 | .audit-artifacts/us-026-active/screenshots/atoms-imageitem--all-states.png sha256:e2f9b0f7062e... | aligned; exported glyphs, glass overlay, SelectState badge, 10px label, and states checked | none |
| Atoms/KeepButton | 1421:17793 | atoms-keepbutton--default | 4 | .audit-artifacts/us-026-active/screenshots/atoms-keepbutton--default.png sha256:1cb2e2b4a7f3... | NON-CLEAN finding corrected: visual SVG size changed to Figma-confirmed 16x16 and default disabled opacity to 20%; 32px invisible touch target preserved | none |
| Atoms/LabelDuplicated | 1439:16874 | atoms-labelduplicated--default | 1 | .audit-artifacts/us-026-active/screenshots/atoms-labelduplicated--default.png sha256:981e5b0ea35c... | aligned; warning subtle pill, 12.83x13 icon, 16px label, and colors checked | none |
| Atoms/LabelStorageAlert | 1439:16885 | atoms-labelstoragealert--all-variants | 5 | .audit-artifacts/us-026-active/screenshots/atoms-labelstoragealert--all-variants.png sha256:49b85f7827f3... | NON-CLEAN finding corrected: per-variant glyph sizes now match Figma-confirmed 11.08x14, 11x11, 13x15, and 12x14; labels and alignment checked | none |
| Atoms/PlusButton | 1421:17726 | atoms-plusbutton--default | 4 | .audit-artifacts/us-026-active/screenshots/atoms-plusbutton--default.png sha256:0d05a6373e31... | NON-CLEAN finding corrected: visual SVG size changed to Figma-confirmed 12x12 and default disabled opacity to 20%; 32px invisible touch target preserved | none |
| Atoms/PushButton | 1421:17302 | atoms-pushbutton--default | 7 | .audit-artifacts/us-026-active/screenshots/atoms-pushbutton--default.png sha256:4b659729cd3b... | NON-CLEAN finding corrected: destructive generic story label changed from Liberar Espaço to Excluir | docs/conflicts.md#atompushbutton--instancias-com-label-abaixo-do-piso-via-classname |
| Atoms/SelectState | 1421:18292 | atoms-selectstate--all-states | 2 | .audit-artifacts/us-026-active/screenshots/atoms-selectstate--all-states.png sha256:f8d29857bbd9... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Atoms/SidebarTagsItem | 1421:20907 | atoms-sidebartagsitem--all-states | 3 | .audit-artifacts/us-026-active/screenshots/atoms-sidebartagsitem--all-states.png sha256:790e2ef0cc50... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Atoms/StorageTierBadge | 1457:21014 | atoms-storagetierbadge--current | 2 | .audit-artifacts/us-026-active/screenshots/atoms-storagetierbadge--current.png sha256:acbdbd3c0719... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Atoms/Switch | 1454:20959 | atoms-switch--disabled | 4 | .audit-artifacts/us-026-active/screenshots/atoms-switch--disabled.png sha256:4faccad886f3... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Atoms/Tag | 1421:17929 | atoms-tag--all-variants | 6 | .audit-artifacts/us-026-active/screenshots/atoms-tag--all-variants.png sha256:b84e2bab308b... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Atoms/TagOrgMode | 1421:18769 | atoms-tagorgmode--all-modes | 5 | .audit-artifacts/us-026-active/screenshots/atoms-tagorgmode--all-modes.png sha256:bffa6cc5abd2... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Atoms/TagOrgTemplateName | 1421:18778 | atoms-tagorgtemplatename--filled | 2 | .audit-artifacts/us-026-active/screenshots/atoms-tagorgtemplatename--filled.png sha256:f15dc709fbe6... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Atoms/TypeLabel | 1421:18415 | atoms-typelabel--scope-matrix | 10 | .audit-artifacts/us-026-active/screenshots/atoms-typelabel--scope-matrix.png sha256:63539812ce29... | NON-CLEAN finding corrected: Figma-confirmed file/scope/default/alert matrix is now represented by `FileTypeMatrix`/`ScopeMatrix`; state-forced hover/pressed coverage added | docs/conflicts.md#atombadgetypelabel-pontos-kindvideo-e-kindother |
| Atoms/UploadFolder | 1439:17053 | atoms-uploadfolder--default | 1 | .audit-artifacts/us-026-active/screenshots/atoms-uploadfolder--default.png sha256:e6d61c46056f... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Atoms/VideoItem | 1442:7858 | atoms-videoitem--all-states | 6 | .audit-artifacts/us-026-active/screenshots/atoms-videoitem--all-states.png sha256:2c7ef19a83df... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Celules/Callout | 1421:20028 | celules-callout--info | 2 | .audit-artifacts/us-026-active/screenshots/celules-callout--info.png sha256:0a2a43f360eb... | aligned; warning/info icon, text, 824px composition, fills, borders, and 13px Figtree body checked in fresh pass12 context | none |
| Celules/CleanSpaceListSelection | 1436:20496 | celules-cleanspacelistselection--interactive | 3 | .audit-artifacts/us-026-active/screenshots/celules-cleanspacelistselection--interactive.png sha256:f18f01cee1e6... | aligned; hash changes are checkbox/browser rendering variance, checklist reconfirmed | docs/conflicts.md#celulecleanspacestoragelistselection-icone-de-arquivo-cor |
| Celules/DropListItem | 1440:23803 | celules-droplistitem--hover | 3 | .audit-artifacts/us-026-active/screenshots/celules-droplistitem--hover.png sha256:61f3917be9f2... | NON-CLEAN finding corrected: Figma-confirmed hover state now has static Storybook coverage; icon, label, idle/hover/clicked backgrounds checked | none |
| Celules/FreeModeButtons | 1431:20043 | celules-freemodebuttons--default | 1 | .audit-artifacts/us-026-active/screenshots/celules-freemodebuttons--default.png sha256:f7bb56254cfd... | aligned; four 40px box icon buttons, 6px gap, plus/expand/reset/trash order, and uniform secondary chrome checked in fresh pass12 context | none |
| Celules/FreeModeItemNode | 1421:20108 | celules-freemodeitemnode--resultado-collapsed | 10 | .audit-artifacts/us-026-active/screenshots/celules-freemodeitemnode--resultado-collapsed.png sha256:7c260f34a32f... | NON-CLEAN finding corrected: collapsed `resultado` now uses Figma-confirmed `Pasta "Vídeos"` and 174px composition; other node labels/icons/subtitles checked | docs/conflicts.md#celulemaincanvasorganizationfreemodeitemnode-nos-de-filtro-143916906 |
| Celules/FreeModeListItem | 1421:20757 | celules-freemodelistitem--all-operations | 4 | .audit-artifacts/us-026-active/screenshots/celules-freemodelistitem--all-operations.png sha256:b83f5e0fcd1d... | NON-CLEAN finding corrected: Figma-confirmed 7 operations × 3 states now has static `hover`/`clicked` coverage; icons, labels, and overlays checked | none |
| Celules/FreeModeOutputNode | 1421:20262 | celules-freemodeoutputnode--default | 2 | .audit-artifacts/us-026-active/screenshots/celules-freemodeoutputnode--default.png sha256:13b03cbc12b4... | aligned; default and compact output cards, teal border, icon box, stats, preview panel, and compact clipping checked in fresh pass12 context | none |
| Celules/NodoContextMenuItem | 1421:20528 | celules-nodocontextmenuitem--all-states | 7 | .audit-artifacts/us-026-active/screenshots/celules-nodocontextmenuitem--all-states.png sha256:c059b4712f4d... | NON-CLEAN finding corrected: Figma-confirmed dropdown matrix now has `kind`, `selectedOption`, inline expanded panels, error states, and `AllStates` coverage; impacted `molecule/NodoContextMenu` reverified | none |
| Celules/PagesLead | 1439:17048 | celules-pageslead--default | 2 | .audit-artifacts/us-026-active/screenshots/celules-pageslead--default.png sha256:0fa6b0a4f06c... | aligned; H1 text, caption, Figtree sizing, and colors checked in fresh pass12 context | none |
| Celules/TagColor | 1444:21979 | celules-tagcolor--default | 2 | .audit-artifacts/us-026-active/screenshots/celules-tagcolor--default.png sha256:9d0c4e3b5934... | aligned; 6 dots and selected halo reconfirmed | none |
| Molecules/ActionPill | 1421:19027 | molecules-actionpill--default | 2 | .audit-artifacts/us-026-active/screenshots/molecules-actionpill--default.png sha256:70f8c0fab938... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Molecules/ArchiveBrowserModal/ListItem | 1421:20896 | molecules-archivebrowsermodal-listitem--default | 2 | .audit-artifacts/us-026-active/screenshots/molecules-archivebrowsermodal-listitem--default.png sha256:29167af9183f... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Molecules/ArchiveBrowserModal/Search | 1485:21074 | molecules-archivebrowsermodal-search--default | 1 | .audit-artifacts/us-026-active/screenshots/molecules-archivebrowsermodal-search--default.png sha256:8a04c1df7c62... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Molecules/ContextHeader | 1421:19589 | molecules-contextheader--collapsed | 2 | .audit-artifacts/us-026-active/screenshots/molecules-contextheader--collapsed.png sha256:64ef36e43f66... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | docs/conflicts.md#moleculecontext-header-rotulo-x-itens-selecionado |
| Molecules/DropdownSelectGroupBy | 1421:18719 | molecules-dropdownselectgroupby--default | 3 | .audit-artifacts/us-026-active/screenshots/molecules-dropdownselectgroupby--default.png sha256:b3ff795d3bd6... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Molecules/DropdownSelectLabel | 1439:19650 | molecules-dropdownselectlabel--default | 3 | .audit-artifacts/us-026-active/screenshots/molecules-dropdownselectlabel--default.png sha256:348ced4ee810... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | docs/conflicts.md#moleculedropdownselectlabel-143919650 |
| Molecules/FileArchive | 1439:19655, 1439:19656 | molecules-filearchive--file-archive-1 | 2 | .audit-artifacts/us-026-active/screenshots/molecules-filearchive--file-archive-1.png sha256:3faf4342e9b5... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Molecules/FileList | 1421:19200 | molecules-filelist--default | 5 | .audit-artifacts/us-026-active/screenshots/molecules-filelist--default.png sha256:8ca605f61e91... | NON-CLEAN finding corrected: `molecule/ArchiveItem` slot now includes Figma-confirmed 64px mini item with teal glyph and internal 10px label; name/owner/size/arrow/states checked | docs/conflicts.md#moleculefilelist--organismfilelistcontainer-icone-da-linha-arquivo-2 |
| Molecules/FileListHeader | 1421:19184 | molecules-filelistheader--home | 2 | .audit-artifacts/us-026-active/screenshots/molecules-filelistheader--home.png sha256:82ac777e28cb... | aligned; 1025px header, 56px first row, 20px bold labels, arrow-down sort icon, storage-status second row/date checked | none |
| Molecules/FolderCard | 1421:18595 | molecules-foldercard--default | 4 | .audit-artifacts/us-026-active/screenshots/molecules-foldercard--default.png sha256:f05da757aadf... | NON-CLEAN finding corrected: now composes Figma-confirmed `atom/ArchiveItem` and `atom/ImageItem` thumbnails instead of partial SVG/placeholder; drag handle, pill states, collapsed state checked | none |
| Molecules/FolderTagChip | 1421:19040 | molecules-foldertagchip--default | 5 | .audit-artifacts/us-026-active/screenshots/molecules-foldertagchip--default.png sha256:528863e3716b... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | docs/conflicts.md#celulechipfolder-tag |
| Molecules/Label | 1421:18687 | molecules-label--default | 3 | .audit-artifacts/us-026-active/screenshots/molecules-label--default.png sha256:1f5f58771984... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | docs/conflicts.md#moleculelabel-142118687-vs-moleculedropdownselectlabel-143919650 |
| Molecules/NodoContextMenu | 1440:23821 | molecules-nodocontextmenu--default | 3 | .audit-artifacts/us-026-active/screenshots/molecules-nodocontextmenu--default.png sha256:f42d8d9eb19f... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | docs/conflicts.md#moleculenodocontextmenu-atombuttonadd-rotulo |
| Molecules/Notification | 1439:19748 | molecules-notification--default | 2 | .audit-artifacts/us-026-active/screenshots/molecules-notification--default.png sha256:525ced6d1af1... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Molecules/PopoverNotification | 1421:19626 | molecules-popovernotification--adition | 7 | .audit-artifacts/us-026-active/screenshots/molecules-popovernotification--adition.png sha256:13575cfb8a41... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Molecules/RadioButton | 1454:24721 | molecules-radiobutton--disabled | 4 | .audit-artifacts/us-026-active/screenshots/molecules-radiobutton--disabled.png sha256:43c2f9fcfeb7... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Molecules/SearchInput | 1421:17845 | molecules-searchinput--default | 4 | .audit-artifacts/us-026-active/screenshots/molecules-searchinput--default.png sha256:aec209ebb70a... | aligned with locked placeholder/typography exceptions; loading hash is animated engineering extension | docs/conflicts.md#moleculesearchbar-inputsearch |
| Molecules/StorageBar | 1421:17904 | molecules-storagebar--empty | 5 | .audit-artifacts/us-026-active/screenshots/molecules-storagebar--empty.png sha256:22f5dd200eb3... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | docs/conflicts.md#moleculestoragebar-styleexpanded |
| Molecules/StorageStatus | 1421:18354 | molecules-storagestatus--global | 5 | .audit-artifacts/us-026-active/screenshots/molecules-storagestatus--global.png sha256:cd08a4761670... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Molecules/StorageStatusCurrent | 1439:17044 | molecules-storagestatuscurrent--default | 2 | .audit-artifacts/us-026-active/screenshots/molecules-storagestatuscurrent--default.png sha256:68525aebaa9e... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Molecules/ThumbnailLarge | 1421:19570 | molecules-thumbnaillarge--default | 2 | .audit-artifacts/us-026-active/screenshots/molecules-thumbnaillarge--default.png sha256:5eab2a451f0e... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Molecules/ViewModeToggle | 1421:19069 | molecules-viewmodetoggle--columns | 3 | .audit-artifacts/us-026-active/screenshots/molecules-viewmodetoggle--columns.png sha256:524f670741c5... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Organisms/ArchiveBrowserModal | 1439:16909 | organisms-archivebrowsermodal--default | 1 | .audit-artifacts/us-026-active/screenshots/organisms-archivebrowsermodal--default.png sha256:6f9184c7cb98... | NON-CLEAN finding corrected: root/body/sidebar/search dimensions now match Figma context and close action uses `atom/CloseButton`; placeholder copy exception remains locked through `SearchInput` | docs/conflicts.md#moleculesearchbar-inputsearch |
| Organisms/CardLogin | 1454:22055 | organisms-cardlogin--default | 1 | .audit-artifacts/us-026-active/screenshots/organisms-cardlogin--default.png sha256:237573af99c7... | NON-CLEAN finding corrected: card root now uses Figma-confirmed 400x591 frame and glass token; residual Manrope/neutrals remain locked exceptions | docs/conflicts.md#organismcardlogin |
| Organisms/CardNeedMoreHelp | 1454:20981 | organisms-cardneedmorehelp--default | 1 | .audit-artifacts/us-026-active/screenshots/organisms-cardneedmorehelp--default.png sha256:0339cbcfff28... | NON-CLEAN finding corrected: root width now matches Figma-confirmed 927px; button label remains 16px by Regra 4 | none |
| Organisms/CleanSpaceStorage | 1439:16908 | organisms-cleanspacestorage--default | 1 | .audit-artifacts/us-026-active/screenshots/organisms-cleanspacestorage--default.png sha256:3930bcb16903... | aligned in code; stale contradictory MDX corrected; trash icons confirmed present | none |
| Organisms/DialogSaveOrganizationModal | 1421:18576 | organisms-dialogsaveorganizationmodal--default | 2 | .audit-artifacts/us-026-active/screenshots/organisms-dialogsaveorganizationmodal--default.png sha256:f10cf9dfb5e1... | NON-CLEAN finding corrected: modal/card dimensions now use Figma-confirmed 931px inner panel and 217.75px cards; selected card no longer adds invented blue fill; close action uses `atom/CloseButton`; compact PushButton text exception preserved | docs/conflicts.md#atompushbutton--instancias-com-label-abaixo-do-piso-via-classname |
| Organisms/DialogTemplateReviewModal | 1431:20397 | organisms-dialogtemplatereviewmodal--default | 1 | .audit-artifacts/us-026-active/screenshots/organisms-dialogtemplatereviewmodal--default.png sha256:31d5ccb2886a... | NON-CLEAN finding corrected: modal now uses Figma-confirmed 768x613 frame, flex content area, visible 3-row tree, and `atom/CloseButton`; compact PushButton text exception preserved | docs/conflicts.md#atompushbutton--instancias-com-label-abaixo-do-piso-via-classname |
| Organisms/DropdownMenu | 1440:23662 | organisms-dropdownmenu--sidebar | 2 | .audit-artifacts/us-026-active/screenshots/organisms-dropdownmenu--sidebar.png sha256:4b07784f9627... | aligned; two Figma-confirmed 3-item dropdown variants, widths, separators, icon order, and labels checked in fresh pass12 context | none |
| Organisms/DropNewTag | 1444:21624 | organisms-dropnewtag--default | 2 | .audit-artifacts/us-026-active/screenshots/organisms-dropnewtag--default.png sha256:b6185eb2837b... | aligned; WithLabel is prop demo consistent with Figma description | none |
| Organisms/FaqFastLinks | 1454:25006 | organisms-faqfastlinks--default | 1 | .audit-artifacts/us-026-active/screenshots/organisms-faqfastlinks--default.png sha256:13d35d352204... | aligned with locked language/font exceptions; title, three links, icons, width, gap, and order checked in fresh pass12 context | docs/conflicts.md#organismfaqfastlinks-145425006-rotulos-dos-3-links |
| Organisms/FaqInfoCard | 1454:24788 | organisms-faqinfocard--card-with-callout | 2 | .audit-artifacts/us-026-active/screenshots/organisms-faqinfocard--card-with-callout.png sha256:b6b3517986af... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | none |
| Organisms/FaqInfoCardCollapsed | 1454:22003 | organisms-faqinfocardcollapsed--duplicates | 7 | .audit-artifacts/us-026-active/screenshots/organisms-faqinfocardcollapsed--duplicates.png sha256:49411eae1ef5... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | docs/conflicts.md#organismfaqinfocardscolapsed-topico-frequentissues |
| Organisms/FileListContainer | 1421:19687 | organisms-filelistcontainer--default | 1 | .audit-artifacts/us-026-active/screenshots/organisms-filelistcontainer--default.png sha256:12982112ffd1... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | docs/conflicts.md#moleculefilelist--organismfilelistcontainer-icone-da-linha-arquivo-2 |
| Organisms/Header | 1421:19918 | organisms-header--navbar | 3 | .audit-artifacts/us-026-active/screenshots/organisms-header--navbar.png sha256:d6c6d3880347... | screenshot captured in pass12; fresh get_design_context + element checklist still required before CLEAN | docs/conflicts.md#organismheader-pagenavbar |
| Organisms/InfoPopover | 1421:18504 | organisms-infopopover--metadata | 2 | .audit-artifacts/us-026-active/screenshots/organisms-infopopover--metadata.png sha256:0b22837ecc3d... | aligned; fresh pass12 context reconfirmed balloon asset, 10px text, dividers, Metadata labels and AL→AC order | none |
| Organisms/OrganizeFreeModeCanvas | 1439:16906 | organisms-organizefreemodecanvas--default | 1 | .audit-artifacts/us-026-active/screenshots/organisms-organizefreemodecanvas--default.png sha256:24e454a0081b... | aligned with documented geometry approximation; fresh pass12 context reconfirmed filters, dashed connectors, filter panel, output node, mini-map, toolbar and footer | docs/conflicts.md#organismorganizefreemodecanvas-143916906 |
| Organisms/OrganizePanelDropZone | 1421:18781 | organisms-organizepaneldropzone--dragover | 4 | .audit-artifacts/us-026-active/screenshots/organisms-organizepaneldropzone--idle.png sha256:4b804d5439c9... | NON-CLEAN finding corrected: root changed from 320x420 to Figma-confirmed 560x772 and FolderOrganize icon restored to 184x184 at top 260px; four states recaptured | docs/conflicts.md#atompushbutton--instancias-com-label-abaixo-do-piso-via-classname |
| Organisms/PlanSelection | 1454:25057 | organisms-planselection--default | 2 | .audit-artifacts/us-026-active/screenshots/organisms-planselection--default.png sha256:aa3cd2c4acee... | NON-CLEAN finding corrected: root changed to Figma-confirmed 1089px and English/mixed literals restored (Active, Monthly/Annual, Downgrade/Upgrade, Current, footer) | docs/conflicts.md#organismplanselection-145425057 |
| Organisms/PreviewPane | 1421:19405 | organisms-previewpane--default | 2 | .audit-artifacts/us-026-active/screenshots/organisms-previewpane--default.png sha256:107c8283892a... | NON-CLEAN finding corrected: neutral tag label changed from Global to Figma-confirmed Recentes and close/bookmark/share use exported Figma assets | docs/conflicts.md#organismpreviewpane-secao-etiquetas-tag-urgente-vs-regra-811-cor-de-perigo |
| Organisms/SaveLongTermFileStorage | 1439:16907 | organisms-savelongtermfilestorage--default | 1 | .audit-artifacts/us-026-active/screenshots/organisms-savelongtermfilestorage--default.png sha256:600c23cadc5b... | NON-CLEAN finding corrected: root changed to 700px, left column to 270px, and close changed from Lucide X to atom/CloseButton; SearchInput placeholder exception preserved | docs/conflicts.md#atompushbutton--instancias-com-label-abaixo-do-piso-via-classname |
| Organisms/SearchToolbar | none confirmed | organisms-searchtoolbar--default | 4 | .audit-artifacts/us-026-active/screenshots/organisms-searchtoolbar--default.png sha256:99f67c8511a0... | checked as documented inferred exception; no Figma node is confirmed, so no get_design_context target exists | documented inferred exception: no confirmed Figma node |
| Organisms/Sidebar | 1421:17946 | organisms-sidebar--default | 2 | .audit-artifacts/us-026-active/screenshots/organisms-sidebar--default.png sha256:15126e1f25fe... | aligned with locked terminology exceptions; liquid-glass panel, collapse button, add button, six nav items, optional tags and embedded storage sidebar checked in fresh context | docs/conflicts.md#organismstorage-sidebar-tags-de-tier |
| Organisms/SidebarToggle | 1421:19118 | organisms-sidebartoggle--collapsed | 6 | .audit-artifacts/us-026-active/screenshots/organisms-sidebartoggle--expanded-hover.png sha256:3a00632dbea8... | NON-CLEAN finding corrected: Figma-confirmed Hover/Pressed states for collapsed/expanded now have static Storybook coverage; cloud icon, label, chevron direction, hover and pressed backgrounds checked | none |
| Organisms/StorageSidebar | 1421:19167 | organisms-storagesidebar--collapsed | 2 | .audit-artifacts/us-026-active/screenshots/organisms-storagesidebar--default.png sha256:70d503e031a6... | aligned with locked terminology exception; toggle, two status groups, bars, labels and two PushButtons checked in fresh context | docs/conflicts.md#organismstorage-sidebar-tags-de-tier |
| Organisms/UploadPopover | 1421:19292 | organisms-uploadpopover--in-progress | 2 | .audit-artifacts/us-026-active/screenshots/organisms-uploadpopover--with-file-list.png sha256:9d5fc747bb0... | aligned with locked language exception; circular progress, four action icons, divider, optional progress bar and two file rows checked in fresh context | docs/conflicts.md#organismupload-popover |

## Retomada posterior da 12ª passada ativa (2026-08-13)

Esta retomada continuou a partir de `Atoms/SelectState`, sem reiniciar a
passada. Artefatos ativos recalculados após as correções: **85 componentes**,
**270 stories renderizáveis** (117 atoms + 33 celules + 71 molecules + 49
organisms), **0 screenshots faltantes**, `hashDiffCount=43` contra a
passada 11. `npx tsc --noEmit`, `npm run build-storybook` e
`bash scripts/gate.sh design-system` passaram depois das alterações.

Achados materiais desta retomada, corrigidos agora:

- `Atoms/SidebarTagsItem` (`1421:20907`): Figma confirma três variantes
  visíveis (`TypeLabel-sidebar`, `Variant2`, `Variant3`), mas o agregado
  renderizava só idle + selected. Adicionado `state="hover"`, story `Hover`
  e agregado com os três estados. Evidência principal:
  `.audit-artifacts/us-026-active/screenshots/atoms-sidebartagsitem--all-states.png`
  sha256:`52f612759cd5...`.
- `Atoms/Tag` (`1421:17929`): Figma confirma 4 estilos × 2 estados e
  `rotulo=""` como default visual, mas o hover não era capturável e o
  agregado mostrava só exemplos com labels. Adicionado `state="hover"`,
  overlay Figma-confirmado e agregado vertical com as 8 combinações.
  Evidência principal:
  `.audit-artifacts/us-026-active/screenshots/atoms-tag--all-variants.png`
  sha256:`cc0358da348d...`.
- `Atoms/TagOrgTemplateName` (`1421:18778`): o `<input>` real usava largura
  intrínseca padrão do browser, maior que o hug-content Figma. Corrigido com
  `field-sizing: content`. Evidência:
  `.audit-artifacts/us-026-active/screenshots/atoms-tagorgtemplatename--placeholder.png`
  sha256:`20e9adf17a54...`.
- `Atoms/UploadFolder` (`1439:17053`): a story ampliava o glifo Figma 16×16
  para 32×32. Corrigida para renderizar a escala real. Evidência:
  `.audit-artifacts/us-026-active/screenshots/atoms-uploadfolder--default.png`
  sha256:`f762ad77e0f6...`.
- `Atoms/VideoItem` (`1442:7858`): a variante Figma
  `favicon_header_Thumbnail` estava documentada como gap e ausente do union
  de `state`. Adicionada como `state="favicon-header-thumbnail"` e incluída
  no agregado de 8 estados. Evidência:
  `.audit-artifacts/us-026-active/screenshots/atoms-videoitem--all-states.png`
  sha256:`db467ea7037c...`.

Componentes conferidos nesta retomada sem nova divergência material:
`Atoms/SelectState` (`1421:18292`), `Atoms/StorageTierBadge` (`1457:21014`),
`Atoms/Switch` (`1454:20959`) e `Atoms/TagOrgMode` (`1421:18769`).

Achado material ainda não fechado nesta retomada:
`Atoms/TypeLabel` (`1421:18415`) teve `get_design_context` fresco e revelou
uma matriz Figma mais ampla (`type/style/state`, incluindo estados
`Hover`, `SelectedHover` e `SelectedPressed`) do que as stories atuais
cobrem. O conflito de cor `video`/`other` em `docs/conflicts.md` permanece
travado, mas a cobertura reduzida da matriz de variantes não está travada
como exceção humana. A próxima retomada da mesma passada deve continuar por
`Atoms/TypeLabel`, corrigindo/representando essa matriz antes de avançar
para `Celules/Callout`.

## Nova retomada da 12ª passada ativa (2026-08-13)

Esta retomada continuou a mesma passada a partir de `Atoms/TypeLabel`, sem
reiniciar evidência já fresca. Artefatos ativos recalculados após as
correções: **85 componentes**, **273 stories renderizáveis** (119 atoms + 34
celules + 71 molecules + 49 organisms), **0 screenshots faltantes**,
`hashDiffCount=41` contra a passada 11. `npx tsc --noEmit`,
`npm run build-storybook` e `bash scripts/gate.sh design-system` passaram.

Achados materiais desta retomada, corrigidos agora:

- `Atoms/TypeLabel` (`1421:18415`): o Figma fresco confirma matriz maior do
  que a story cobria: file labels em `Dark/Light` com `Idle`/`Selected`,
  `DefaultTag`, `Tag` alert, e chips `Tag_Global`/`Tag_Corrente`/
  `Tag_LongoPrazo` em `Neutral Idle/Hover` e
  `Selected/SelectedHover/SelectedPressed`. `ScopeTypeLabel` recebeu prop
  opcional `state`, `FileTypeMatrix`/`ScopeMatrix` foram adicionadas e os
  screenshots foram recapturados. Evidências principais:
  `.audit-artifacts/us-026-active/screenshots/atoms-typelabel--file-type-matrix.png`
  sha256:`12b9b243dbb8...` e
  `.audit-artifacts/us-026-active/screenshots/atoms-typelabel--scope-matrix.png`
  sha256:`63539812ce29...`.
- `Celules/DropListItem` (`1440:23803`): o Figma confirma três estados
  (`idle`/`hover`/`clicked`), mas `hover` estava só como pseudoestado CSS e
  não tinha story estática auditável. Adicionado `state="hover"`, story
  `Hover`, recaptura Playwright e MDX atualizado. Evidência principal:
  `.audit-artifacts/us-026-active/screenshots/celules-droplistitem--hover.png`
  sha256:`61f3917be9f2...`.

Componentes conferidos nesta retomada sem nova divergência material:
`Celules/Callout` (`1421:20028`) e `Celules/FreeModeButtons` (`1431:20043`).

Resultado desta retomada: **NON-CLEAN**. Como houve correções materiais de
cobertura visual/documentação, outra passada completa será obrigatória antes
de qualquer marcador CLEAN. Esta anotação foi superada pela retomada
seguinte, que continuou a partir de `Celules/FreeModeItemNode`.

## Retomada de celules da 12ª passada ativa (2026-08-13)

Esta retomada continuou a mesma passagem a partir de
`Celules/FreeModeItemNode`, sem recapturar evidência já fresca fora dos
componentes impactados. Artefatos ativos recalculados após as correções:
**85 componentes**, **275 stories renderizáveis** (119 atoms + 36 celules +
71 molecules + 49 organisms), **0 screenshots faltantes**,
`hashDiffCount=52` contra a passada 11.

Achados materiais desta retomada, corrigidos agora:

- `Celules/FreeModeItemNode` (`1421:20108`): `Variant7`/resultado
  colapsado confirma subtítulo `Pasta "Vídeos"` e largura 174px; o
  componente usava o default expandido `Pasta "Vídeos grandes"`, alargando
  o node. Corrigido mantendo `Variant8` expandido com
  `Pasta "Vídeos grandes"`. Evidência principal:
  `.audit-artifacts/us-026-active/screenshots/celules-freemodeitemnode--resultado-collapsed.png`
  sha256:`7c260f34a32f...`.
- `Celules/FreeModeListItem` (`1421:20757`): o Figma confirma matriz 7
  operações × 3 estados (`idle`/`hover`/`Clicked`), mas `hover` era só CSS e
  o agregado não capturava a matriz. Adicionado `state`, story `Hover` e
  agregado com os três blocos. Evidência principal:
  `.audit-artifacts/us-026-active/screenshots/celules-freemodelistitem--all-operations.png`
  sha256:`b83f5e0fcd1d...`.
- `Celules/NodoContextMenuItem` (`1421:20528`): a story reduzia a matriz
  Figma a pílulas genéricas e renderizava dropdown aberto como lista
  absoluta escura, divergindo dos painéis inline Figma-confirmados.
  Corrigido com `kind`, `selectedOption`, painéis expandidos inline e story
  `AllStates`; `Molecules/NodoContextMenu` foi recapturado como consumidor
  impactado. Evidência principal:
  `.audit-artifacts/us-026-active/screenshots/celules-nodocontextmenuitem--all-states.png`
  sha256:`c059b4712f4d...`.

Componentes conferidos nesta retomada sem nova divergência material:
`Celules/FreeModeOutputNode` (`1421:20262`) e `Celules/PagesLead`
(`1439:17048`).

Resultado desta retomada: **NON-CLEAN**. Como houve correções materiais de
cobertura visual, outra passada completa será obrigatória antes de qualquer
marcador CLEAN. A mesma passagem 12 ainda está incompleta para o critério
estrito de CLEAN; a próxima retomada deve continuar pelo primeiro componente
sem checklist fresco após `Celules/TagColor`, começando em
`Molecules/ActionPill` (`1421:19027`).

## Retomada de molecules da 12ª passada ativa (2026-08-13)

Esta retomada continuou a mesma passagem a partir de
`Molecules/ActionPill`, sem reiniciar evidência já fresca fora dos
componentes impactados. Artefatos ativos recalculados após as correções:
**85 componentes**, **275 stories renderizáveis** (119 atoms + 36 celules +
71 molecules + 49 organisms), **0 screenshots faltantes**,
`hashDiffCount=62` contra a passada 11.

Achados materiais desta retomada, corrigidos agora:

- `Molecules/ActionPill` (`1421:19027`): o Figma fresco confirma o container
  de 104px, mas o iframe Playwright media 116px por causa de `w-fit`.
  Corrigido para `w-[104px]` com o grupo de três ícones centralizado.
  Evidência principal:
  `.audit-artifacts/us-026-active/screenshots/molecules-actionpill--default.png`
  sha256:`efbe52e83768...`.
- `Molecules/ArchiveBrowserModal/ListItem` (`1421:20896`): as stories
  standalone renderizavam os dois estados em 452px (contexto do modal
  composto), mas o component set Figma confirma `ArchiveFileRow` em 650px e
  `ArchiveSelectableRow` em 600px. Corrigidas as decorators das stories
  standalone; o consumidor composto continua usando largura de 452px.
  Evidências:
  `.audit-artifacts/us-026-active/screenshots/molecules-archivebrowsermodal-listitem--default.png`
  sha256:`6484a2425be6...` e
  `.audit-artifacts/us-026-active/screenshots/molecules-archivebrowsermodal-listitem--selected.png`
  sha256:`424c6e3b7aad...`.
- `Molecules/ArchiveBrowserModal/Search` (`1485:21074`): o Figma confirma
  root 452x361 e lista interna com 289px de altura, mas a renderização media
  452x270 e não preservava a área vazia abaixo dos três itens. Corrigido
  para `h-[361px]` no root e `h-[289px]` no painel. Evidência:
  `.audit-artifacts/us-026-active/screenshots/molecules-archivebrowsermodal-search--default.png`
  sha256:`3d3f6de53e32...`.
- `Molecules/ContextHeader` (`1421:19589`): a story default usava o exemplo
  "3 itens selecionados", enquanto o Figma fresco confirma o literal
  "X itens selecionado". Corrigida a story para o literal Figma. A exceção
  travada de fonte Manrope vs. Figtree em `docs/conflicts.md` foi preservada
  e não reaberta. Evidência:
  `.audit-artifacts/us-026-active/screenshots/molecules-contextheader--default.png`
  sha256:`534fac4f590d...`.
- `Molecules/DropdownSelectGroupBy` (`1421:18719`): a variante `Disabled`
  Figma-confirmada tem altura 54px e opacidade 0.32, mas a implementação
  media 51px e usava `opacity-50`. Corrigido para altura fixa nos estados
  fechados e `opacity-[0.32]` no estado disabled. Evidência:
  `.audit-artifacts/us-026-active/screenshots/molecules-dropdownselectgroupby--disabled.png`
  sha256:`f2136d6421d0...`.
- `Molecules/FileArchive` (`1439:19655`, `1439:19656`): o glifo renderizado
  media 44x38.9px, enquanto o Figma fresco confirma 45.675x40.405px.
  Corrigido para o tamanho literal e adicionado `data-slot` ao ícone para
  próximas auditorias. Evidências:
  `.audit-artifacts/us-026-active/screenshots/molecules-filearchive--file-archive-1.png`
  sha256:`5116541e59b0...` e
  `.audit-artifacts/us-026-active/screenshots/molecules-filearchive--file-archive-2.png`
  sha256:`eec29ce4bc0b...`.

Componentes conferidos nesta retomada sem nova divergência material:
`Molecules/DropdownSelectLabel` (`1439:19650`) foi rechecado contra Figma
fresco; a opacidade 0.32 do node único continua tratada pela exceção humana
já registrada em `docs/conflicts.md#moleculedropdownselectlabel-143919650`.

Resultado desta retomada: **NON-CLEAN**. Como houve correções materiais de
largura, altura, texto e opacidade/tamanho visual, outra passada completa
será obrigatória antes de qualquer marcador CLEAN. A mesma passagem 12 ainda
está incompleta para o critério estrito de CLEAN; a próxima retomada deve
continuar pelo primeiro componente sem checklist fresco após
`Molecules/FileArchive`, começando em `Molecules/FileList` (`1421:19200`).

## Retomada adicional de molecules da 12ª passada ativa (2026-08-13)

Esta retomada continuou a mesma passagem a partir de `Molecules/FileList`,
sem reiniciar evidência já fresca. Artefatos ativos recalculados após as
correções: **85 componentes**, **275 stories renderizáveis** (119 atoms + 36
celules + 71 molecules + 49 organisms), **0 screenshots faltantes**,
`hashDiffCount=70` contra a passada 11.

Achados materiais desta retomada, corrigidos agora:

- `Molecules/FileList` (`1421:19200`): `get_design_context` fresco confirma
  que o slot `molecule/ArchiveItem` dentro da linha é um mini item 64px com
  glifo teal e micro-rótulo "Arquivo 1"; o código renderizava só o glifo,
  sem o rótulo interno confirmado. Corrigido com `FileListArchiveItem` local
  e recaptura dos 5 estados. Evidência principal:
  `.audit-artifacts/us-026-active/screenshots/molecules-filelist--default.png`
  sha256:`8ca605f61e91...`.
- `Molecules/FolderCard` (`1421:18595`): o Figma fresco confirma
  `atom/ArchiveItem` nas miniaturas 1/3 e `atom/ImageItem` na miniatura
  central. A implementação ainda mantinha thumbnails parciais e placeholder
  `lucide-react` para a imagem. Corrigido para compor os átomos reais e
  recapturar os 4 estados. Evidência principal:
  `.audit-artifacts/us-026-active/screenshots/molecules-foldercard--default.png`
  sha256:`f05da757aadf...`.

Componente conferido nesta retomada sem nova divergência material:
`Molecules/FileListHeader` (`1421:19184`) — 1025px de largura, primeira linha
de 56px, labels 20px bold, ícone `ArrowDown`, variante `Storage Status` com
segunda linha "Hoje" abaixo da borda e `gap` de 16px conferidos contra
screenshot Storybook existente.

Resultado desta retomada: **NON-CLEAN**. Como houve correções materiais de
anatomia/composição, outra passada completa será obrigatória antes de
qualquer marcador CLEAN. A mesma passagem 12 ainda está incompleta para o
critério estrito de CLEAN; a próxima retomada deve continuar pelo primeiro
componente sem checklist fresco após `Molecules/FolderCard`, começando em
`Molecules/FolderTagChip` (`1421:19040`).

## Retomada final de molecules da 12ª passada ativa (2026-08-13)

Esta retomada continuou a mesma passagem a partir de
`Molecules/FolderTagChip`, sem reiniciar evidência já fresca. Artefatos
ativos recalculados após as correções: **85 componentes**, **275 stories
renderizáveis** (119 atoms + 36 celules + 71 molecules + 49 organisms),
**0 screenshots faltantes**, `hashDiffCount=81` contra a passada 11.

Achados materiais desta retomada, corrigidos agora:

- `Molecules/NodoContextMenu` (`1440:23821`): o ícone do título "Filtro"
  renderizava `lucide-react` em cinza, enquanto o Figma fresco confirma o
  SVG exportado em teal (`#007e96`) com 15.111×15.193px. Corrigido com
  `NodoContextMenuFilter.svg` e recaptura dos 3 estados. Evidência:
  `.audit-artifacts/us-026-active/screenshots/molecules-nodocontextmenu--default.png`
  sha256:`309475ed52b9...`.
- `Molecules/StorageStatus` (`1421:18354`): o card expandido Figma confirma
  1036px de largura e barra interna de 988px; o código usava `max-w-3xl`
  (768px), comprimindo painel e barra. Corrigido para
  `w-[1036px] max-w-full` e recapturado nos 5 estados. Evidência:
  `.audit-artifacts/us-026-active/screenshots/molecules-storagestatus--global.png`
  sha256:`9b183bdcd0ff...`.
- `Molecules/StorageStatusCurrent` (`1439:17044`): o Figma confirma largura
  de 468px; o código usava `max-w-md` (448px). Corrigido para
  `w-[468px] max-w-full` e recapturado nos 2 estados. Evidência:
  `.audit-artifacts/us-026-active/screenshots/molecules-storagestatuscurrent--default.png`
  sha256:`f515c3b65bfe...`.
- `Molecules/ViewModeToggle` (`1421:19069`): os glifos Grid/List/Columns
  estavam em `lucide-react`, embora o Figma retorne SVGs próprios para
  ativo/inativo. Corrigido para os 6 SVGs exportados e recapturado nas
  3 variantes. Evidência:
  `.audit-artifacts/us-026-active/screenshots/molecules-viewmodetoggle--grid.png`
  sha256:`f22d865e9325...`.
- `Molecules/ThumbnailLarge` (`1421:19570`): o nome interno do favicon
  (`Arquivo 1`/`Arquivo 2`) fica recortado e não visível no screenshot
  Figma, mas o código o renderizava visível no header. Corrigido para
  mostrar só favicon + `Page 1 of 12` e recapturado nas 2 variantes.
  Evidência:
  `.audit-artifacts/us-026-active/screenshots/molecules-thumbnaillarge--default.png`
  sha256:`e67ce1e46492...`.

Componentes conferidos nesta retomada sem nova divergência material:
`Molecules/FolderTagChip` (`1421:19040`, ambiguidade do estado colapsado
continua documentada em `docs/conflicts.md`), `Molecules/Label`
(`1421:18687`), `Molecules/Notification` (`1439:19748`),
`Molecules/PopoverNotification` (`1421:19626`), `Molecules/RadioButton`
(`1454:24721`, bug de extração do rótulo "Guardados" preservado conforme
documentação existente) e `Molecules/StorageBar` (`1421:17904`).

Resultado desta retomada: **NON-CLEAN**. Como houve correções materiais de
asset, largura e anatomia visível, outra passada completa será obrigatória
antes de qualquer marcador CLEAN. A mesma passagem 12 ainda está incompleta
para o critério estrito de CLEAN; a próxima retomada deve continuar pelo
primeiro organism sem checklist fresco, começando em
`Organisms/ArchiveBrowserModal` (`1439:16909`).

Verificação após esta retomada:
- `cd design-system && npx tsc --noEmit` — passou.
- `cd design-system && npm run build-storybook` — passou.
- `bash scripts/gate.sh design-system` — passou.

## Retomada inicial de organisms da 12ª passada ativa (2026-08-13)

Esta retomada continuou a mesma passagem a partir de
`Organisms/ArchiveBrowserModal`, sem reiniciar a evidência já fresca das
camadas anteriores. Foram lidos `get_design_context` frescos com
`resource:figma-design-to-code` para `ArchiveBrowserModal` (`1439:16909`),
`CardLogin` (`1454:22055`), `CardNeedMoreHelp` (`1454:20981`),
`DialogSaveOrganizationModal` (`1421:18576`),
`DialogTemplateReviewModal` (`1431:20397`), `DropdownMenu` (`1440:23662`) e
`FaqFastLinks` (`1454:25006`). Screenshots impactados foram recapturados
em `.audit-artifacts/us-026-active/screenshots/` e
`.audit-artifacts/us-026-active/screenshot-results.json` teve os hashes dos
PNGs recapturados atualizados.

Achados materiais desta retomada, corrigidos agora:

- `Organisms/ArchiveBrowserModal` (`1439:16909`): o modal renderizava com
  largura fluida/comprimida e X Lucide cinza. O Figma fresco confirma root
  `760x544`, body `361px`, sidebar `240px`, coluna de busca/lista `452px` e
  `atom/CloseButton`. Corrigido para dimensões fixas do node e close real.
  Evidência:
  `.audit-artifacts/us-026-active/screenshots/organisms-archivebrowsermodal--default.png`
  sha256:`6f9184c7cb98...`.
- `Organisms/CardLogin` (`1454:22055`): o card usava `max-w-sm` e altura
  hug-content, menor que o node Figma `400x591`. Corrigido para
  `w-[400px] h-[591px]`, padding `36px/16px` e material glass. As exceções
  já travadas de Manrope residual e neutros aproximados foram preservadas.
  Evidência:
  `.audit-artifacts/us-026-active/screenshots/organisms-cardlogin--default.png`
  sha256:`237573af99c7...`.
- `Organisms/CardNeedMoreHelp` (`1454:20981`): o card usava `max-w-3xl`
  (768px), mas o Figma fresco confirma `w-[927px]`. Corrigido para largura
  fixa do node; o label do botão permanece 16px por Regra 4. Evidência:
  `.audit-artifacts/us-026-active/screenshots/organisms-cardneedmorehelp--default.png`
  sha256:`0339cbcfff28...`.
- `Organisms/DialogSaveOrganizationModal` (`1421:18576`): a implementação
  usava painel `max-w-5xl`, grid responsivo com cards largos, destaque azul
  inventado no card selecionado e X Lucide. O Figma fresco confirma painel
  visual de 931px, cards `217.75x384`, estado selecionado sem preenchimento
  azul e `atom/CloseButton`. Corrigido e recapturado nos dois estados.
  Evidências:
  `.audit-artifacts/us-026-active/screenshots/organisms-dialogsaveorganizationmodal--default.png`
  sha256:`f10cf9dfb5e1...` e
  `.audit-artifacts/us-026-active/screenshots/organisms-dialogsaveorganizationmodal--none-selected.png`
  sha256:`d301d5a66bfd...`.
- `Organisms/DialogTemplateReviewModal` (`1431:20397`): o modal estava
  comprimido por `max-w-3xl`, com área interna `max-h-96` que cortava a
  árvore, e usava X Lucide. O Figma fresco confirma container `768x613`,
  três blocos visíveis, footer de 69px e `atom/CloseButton`. Corrigido para
  frame fixo e conteúdo flexível. Evidência:
  `.audit-artifacts/us-026-active/screenshots/organisms-dialogtemplatereviewmodal--default.png`
  sha256:`31d5ccb2886a...`.

Componentes conferidos nesta retomada sem nova divergência material:
`Organisms/DropdownMenu` (`1440:23662`) e `Organisms/FaqFastLinks`
(`1454:25006`). Em `FaqFastLinks`, as exceções de idioma e fonte já
registradas em `docs/conflicts.md` foram preservadas.

Resultado desta retomada: **NON-CLEAN**. Como houve correções materiais de
dimensão, anatomia e assets de fechamento, outra passada completa continuará
obrigatória antes de qualquer marcador CLEAN. A mesma passagem 12 ainda está
incompleta para o critério estrito de CLEAN; a próxima retomada deve
continuar pelo primeiro organism sem checklist fresco após
`Organisms/FaqFastLinks`, começando em `Organisms/FaqInfoCard`
(`1454:24788`).

Verificação após esta retomada:
- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.
- `bash scripts/gate.sh design-system` — passou; executou TypeScript e
  Storybook build.

## Retomada de organisms FAQ/Header da 12ª passada ativa (2026-08-13)

Esta retomada continuou a mesma passagem a partir de
`Organisms/FaqInfoCard` (`1454:24788`), sem reiniciar evidência já fresca.
Foram lidos `get_design_context` frescos com `resource:figma-design-to-code`
para `FaqInfoCard` (`1454:24788`), `FaqInfoCardCollapsed` (`1454:22003`),
`FileListContainer` (`1421:19687`) e `Header` (`1421:19918`). Screenshots
impactados foram recapturados em `.audit-artifacts/us-026-active/screenshots/`;
`screenshot-results.json` e `coverage-summary.json` foram recalculados.
Estado atual dos artefatos: **85 componentes**, **275 estados/variantes
renderizáveis**, **0 screenshots faltantes**, `hashDiffCount=100` contra a
passada 11.

Achados materiais desta retomada, corrigidos agora:

- `Organisms/FaqInfoCard` (`1454:24788`): o Figma fresco confirma largura
  `927px`, SVGs próprios de header/chevron e todos os painéis de pergunta
  abertos nas duas variantes (`FAQ/off` e `Card/isCalloutOn`). O código
  usava `max-w-3xl`, ícones Lucide e abria só a primeira pergunta.
  Corrigido para `max-w-[927px]`, SVGs exportados e todos os `<details>`
  abertos. Evidências:
  `.audit-artifacts/us-026-active/screenshots/organisms-faqinfocard--faq.png`
  sha256:`4d59806cfe1b...` e
  `.audit-artifacts/us-026-active/screenshots/organisms-faqinfocard--card-with-callout.png`
  sha256:`b879770dc276...`.
- `Organisms/FaqInfoCardCollapsed` (`1454:22003`): o Figma fresco confirma
  todas as 7 variantes recolhidas; `FirstSteps` mostra só header + descrição
  em 92px, e as demais só header em 72px. O código abria `FirstSteps` por
  padrão, usava `max-w-3xl` e ícones Lucide inferidos. Corrigido para estado
  inicial recolhido, `max-w-[927px]` e SVGs exportados para os 7 tópicos.
  Evidências principais:
  `.audit-artifacts/us-026-active/screenshots/organisms-faqinfocardcollapsed--first-steps.png`
  sha256:`7d6fc70c9c23...` e
  `.audit-artifacts/us-026-active/screenshots/organisms-faqinfocardcollapsed--storage.png`
  sha256:`d5a93809505e...`.
- `Organisms/FileListContainer` (`1421:19687`): o Figma fresco confirma
  `w-[544px]` e borda direita `neutral-border-default`; a implementação
  estava hug-content/estreita no layout `centered` e usava borda Zinc.
  Corrigido para `w-[544px]` e
  `border-[var(--neutral-border-default,#707070)]`. A exceção já trancada
  sobre o ícone visual diferente da 2ª linha foi preservada. Evidência:
  `.audit-artifacts/us-026-active/screenshots/organisms-filelistcontainer--default.png`
  sha256:`14f34a988544...`.
- `Organisms/Header` (`1421:19918`): o Figma fresco confirma frame de 96px,
  logo `173x44`, busca `560px`, borda inferior `neutral-border-default` e
  `action-pill` alinhada à direita também nas variantes sem botões. O
  screenshot local mostrava header ~72px, logo menor e pílula próxima à
  busca em `settings`/`storage`. Corrigido com `h-24`, `py-6`, logo
  `h-11 w-[173px]`, busca `w-[560px]` e `ml-auto` na pílula. Evidências:
  `.audit-artifacts/us-026-active/screenshots/organisms-header--navbar.png`
  sha256:`a27c705bda6d...` e
  `.audit-artifacts/us-026-active/screenshots/organisms-header--settings.png`
  sha256:`936a55875eda...`.

Resultado desta retomada: **NON-CLEAN**. Como houve correções materiais de
dimensão, estado inicial e assets, outra passada completa continuará
obrigatória antes de qualquer marcador CLEAN. A mesma passagem 12 ainda está
incompleta para o critério estrito de CLEAN; a próxima retomada deve
continuar pelo primeiro organism sem checklist fresco após `Header`,
começando em `Organisms/InfoPopover` (`1421:18504`).

Verificação após esta retomada:
- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.
- `bash scripts/gate.sh design-system` — passou após reexecução isolada. A
  primeira tentativa em paralelo com `npm run build-storybook` falhou por
  colisão de limpeza/criação de `storybook-static`, não por erro de código.

## Retomada InfoPopover→SaveLongTerm da 12ª passada ativa (2026-08-13)

Esta retomada continuou a mesma passagem a partir de `Organisms/InfoPopover`
(`1421:18504`), sem reiniciar evidência já fresca. Foram lidos
`get_design_context` frescos com `resource:figma-design-to-code` para
`InfoPopover`, `OrganizeFreeModeCanvas`, `OrganizePanelDropZone`,
`PlanSelection`, `PreviewPane` e `SaveLongTermFileStorage`. Screenshots dos
componentes impactados foram recapturados em
`.audit-artifacts/us-026-active/screenshots/`.

Achados materiais desta retomada, corrigidos agora:

- `Organisms/OrganizePanelDropZone` (`1421:18781`): o Figma fresco confirma
  cada variante em `560x772` e o `atom/Icon/FolderOrganize` central em
  `184x184` a `top:260px`; a story renderizava `320x420` e reduzia o ícone
  para `64x64`. Corrigido e recapturado em `Idle`, `Dragover`, `Filled` e
  `NamedTemplate`. Evidências:
  `.audit-artifacts/us-026-active/screenshots/organisms-organizepaneldropzone--idle.png`
  sha256:`4b804d5439c9...` e
  `.audit-artifacts/us-026-active/screenshots/organisms-organizepaneldropzone--filled.png`
  sha256:`fbae4456a4a2...`.
- `Organisms/PlanSelection` (`1454:25057`): o Figma fresco confirma root
  `1089px` e literais mistos/ingleses (`Active`, `Next billing on Jul 8,
  2026`, `Monthly`, `Annual`, `Downgrade`, `Current`, `Upgrade`, `✓ Active`,
  footer começando com `Update`). A implementação estava menor e traduzia
  esses textos sem decisão humana registrada. Corrigido e recapturado nas
  duas stories. Evidência:
  `.audit-artifacts/us-026-active/screenshots/organisms-planselection--default.png`
  sha256:`aa3cd2c4acee...`.
- `Organisms/PreviewPane` (`1421:19405`): o Figma fresco confirma tag neutra
  literal `Recentes` e ícones exportados `clear`, `bookmark_border` e
  `atom/Icon/Share`; a story usava `Global` e ícones Lucide. Corrigido e
  recapturado em `Default` e `WithoutTags`. Evidência:
  `.audit-artifacts/us-026-active/screenshots/organisms-previewpane--default.png`
  sha256:`107c8283892a...`.
- `Organisms/SaveLongTermFileStorage` (`1439:16907`): o Figma fresco confirma
  root `700px`, coluna esquerda `270px` e close como `atom/CloseButton`; a
  implementação usava `max-w-2xl`, `w-64` e Lucide `X`. Corrigido e
  recapturado. A exceção trancada de `SearchInput` placeholder aprovado foi
  preservada. Evidência:
  `.audit-artifacts/us-026-active/screenshots/organisms-savelongtermfilestorage--default.png`
  sha256:`600c23cadc5b...`.

Componentes conferidos nesta retomada sem nova divergência material:
`Organisms/InfoPopover` (`1421:18504`) e
`Organisms/OrganizeFreeModeCanvas` (`1439:16906`). Em
`OrganizeFreeModeCanvas`, a aproximação de geometria do canvas permanece
documentada em `docs/conflicts.md` e não foi reaberta.

Resultado desta retomada: **NON-CLEAN**. Como houve correções materiais de
dimensão, texto literal e assets, outra passada completa continuará
obrigatória antes de qualquer marcador CLEAN. A mesma passagem 12 ainda está
incompleta para o critério estrito de CLEAN; a próxima retomada deve
continuar pelo primeiro organism após `SaveLongTermFileStorage`, começando
em `Organisms/SearchToolbar` (sem node Figma confirmado, exceção inferida
documentada) e depois `Organisms/Sidebar` (`1421:17946`).

Verificação após esta retomada:
- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.
- `bash scripts/gate.sh design-system` — passou; executou TypeScript e
  Storybook build.

## Retomada final SearchToolbar→UploadPopover da 12ª passada ativa (2026-08-13)

Esta retomada continuou a mesma passagem a partir de `Organisms/SearchToolbar`
e completou a cobertura sequencial até `Organisms/UploadPopover`, sem
reiniciar evidência já fresca. `SearchToolbar` permanece exceção inferida:
não há node Figma confirmado no catálogo, então não existe alvo válido para
`get_design_context`; os 4 screenshots já capturados foram preservados.

Foram lidos `get_design_context` frescos com
`resource:figma-design-to-code` para `Sidebar` (`1421:17946`),
`SidebarToggle` (`1421:19118`), `StorageSidebar` (`1421:19167`) e
`UploadPopover` (`1421:19292`). Artefatos ativos recalculados:
**85 componentes** (29 atoms + 10 celules + 22 molecules + 24 organisms),
**279 estados/variantes renderizáveis** (119 atoms + 36 celules + 71
molecules + 53 organisms), **0 screenshots faltantes**, `hashDiffCount=109`
contra a passada 11. Com as 5 páginas de tokens doc-only, Storybook segue
com **90 páginas documentadas** no top level.

Achado material desta retomada, corrigido agora:

- `Organisms/SidebarToggle` (`1421:19118`): o Figma fresco confirma matriz
  completa `Idle`/`Hover`/`Pressed` × `isExpanded=false/true`, mas as
  stories só congelavam `Expanded` e `Collapsed`; `Hover`/`Pressed`
  existiam apenas como pseudoestados CSS, sem evidência Playwright estática.
  Adicionada prop `state` (`idle`/`hover`/`pressed`) e stories
  `ExpandedHover`, `ExpandedPressed`, `CollapsedHover` e
  `CollapsedPressed`. Evidências:
  `.audit-artifacts/us-026-active/screenshots/organisms-sidebartoggle--expanded-hover.png`
  sha256:`3a00632dbea8...` e
  `.audit-artifacts/us-026-active/screenshots/organisms-sidebartoggle--collapsed-pressed.png`
  sha256:`e0b65875f808...`.

Componentes conferidos nesta retomada sem nova divergência material:
`Organisms/Sidebar` preserva as exceções humanas de terminologia já
registradas para `Gerir Espaço`/tags de tier; `Organisms/StorageSidebar`
preserva a exceção travada de `Corrente` vs. `Acesso rápido`; e
`Organisms/UploadPopover` preserva a exceção travada de idioma inglês no
Figma vs. português no código.

Resultado da passagem 12: **NON-CLEAN / cobertura completa**. Como houve
correção material de cobertura visual nesta retomada, o protocolo de
ponto-fixo exige arquivar esta passagem como NON-CLEAN e iniciar uma nova
passagem completa antes de qualquer marcador CLEAN.
