# US-026 pass 6 audit manifest

Date: 2026-08-13

Scope: 85 current public component stories (29 atoms, 10 celules, 22 molecules, 24 organisms), 267 rendered Storybook states. Tokens remain 5 doc-only pages and are not counted as component stories.

Figma file: `oFp2TLeCG4GJeCOFVhBvjg`. Storybook evidence: `design-system/.audit-artifacts/us-026-pass6/`. Generated at 2026-08-13T01:22:11.532Z. Storybook URL contract: `http://localhost:6006/iframe.html?id=<story-id>&viewMode=story`.

Result: **NON-CLEAN**.

Material finding fixed in this pass: `atom /VideoItem` (node `1442:7858`) is a formal Figma component listed in `docs/figma-inventory.md`, but it had no source component, story, or MDX. Fresh `get_design_context` with `skillNames=resource:figma-design-to-code` confirmed the component description, visible video body, constant camera overlay, selection badge, item name, and state variants. Fix added `src/components/atoms/video-item.tsx`, `stories/atoms/VideoItem.stories.tsx`, `stories/atoms/VideoItem.mdx`, and 5 Figma-exported SVG assets.

Important evidence limitation: screenshots and hashes were freshly regenerated for all 267 renderable story states in this pass. Fresh `get_design_context` was run for the new material finding (`atom /VideoItem`, `1442:7858`) and `get_metadata` was rerun on the page root to reconcile the catalog count. Because the pass found and fixed a catalog gap, and because a clean pass must repeat the complete catalog with zero new findings, this pass must not emit CLEAN.

Catalog count note: the public component story count is now 85, up from 84. Including the 5 token MDX pages, Storybook has 90 documented top-level pages, satisfying the textual expectation that the count meet or exceed 90 only at the page level. Component count remains below 90 if tokens are excluded. This pass is NON-CLEAN regardless because the VideoItem gap was a material finding.

## VideoItem Regra 11 Checklist

| Figma-visible element | Implementation check | Result |
| --- | --- | --- |
| Video item body in idle/hover/pressed/disabled states | 4 exported SVG assets: `video-item-idle`, `-hover`, `-pressed`, `-disabled` | aligned |
| Constant camera/lens overlay | `video-item-camera.svg` layered at 17x19px over the body | aligned |
| Selected state badge | Reuses `atom/SelectState` for `selected`, `selected-hover`, `selected-pressed` | aligned |
| Item name "Arquivo 2" | `name` prop default, 0.625rem Figtree-compatible microtext | aligned |
| Disabled text tone | `text-zinc-500` versus `text-zinc-700` for enabled states | aligned |
| `tier` badge | Not implemented internally; the rendered node does not show a tier badge despite the description mentioning it | documented gap, not invented |
| `favicon_header_Thumbnail` | Omitted, matching the documented treatment in sibling item components | documented gap, not invented |

## Component Manifest

| Component | Node ID | Primary story ID | Rendered states | Evidence | Result |
| --- | --- | --- | ---: | --- | --- |
| Atoms/ArchiveItem | 1421:18214 | atoms-archiveitem--idle | 6 | .audit-artifacts/us-026-pass6/screenshots/atoms-archiveitem--idle.png sha256:3b780f600bc8... | screenshot recaptured; no new code change in pass6 |
| Atoms/BoxIconButton | 1431:20102 | atoms-boxiconbutton--default | 4 | .audit-artifacts/us-026-pass6/screenshots/atoms-boxiconbutton--default.png sha256:aef3b5262710... | screenshot recaptured; no new code change in pass6 |
| Atoms/ButtonAdd | 1421:20509 | atoms-buttonadd--default | 4 | .audit-artifacts/us-026-pass6/screenshots/atoms-buttonadd--default.png sha256:660bdd1404d1... | screenshot recaptured; no new code change in pass6 |
| Atoms/ClearButton | 1421:17768 | atoms-clearbutton--default | 4 | .audit-artifacts/us-026-pass6/screenshots/atoms-clearbutton--default.png sha256:7896880886be... | screenshot recaptured; no new code change in pass6 |
| Atoms/CloseButton | 1421:19008 | atoms-closebutton--default | 3 | .audit-artifacts/us-026-pass6/screenshots/atoms-closebutton--default.png sha256:3811d4965f2b... | screenshot recaptured; no new code change in pass6 |
| Atoms/ConfirmButton | 1421:17747 | atoms-confirmbutton--default | 4 | .audit-artifacts/us-026-pass6/screenshots/atoms-confirmbutton--default.png sha256:ee9aea88c39d... | screenshot recaptured; no new code change in pass6 |
| Atoms/DeleteButton | 1421:17705 | atoms-deletebutton--default | 4 | .audit-artifacts/us-026-pass6/screenshots/atoms-deletebutton--default.png sha256:7b0eff39ad0a... | screenshot recaptured; no new code change in pass6 |
| Atoms/DropdownSelectGroupByItem | 1444:21587 | atoms-dropdownselectgroupbyitem--idle | 4 | .audit-artifacts/us-026-pass6/screenshots/atoms-dropdownselectgroupbyitem--idle.png sha256:2996635229fb... | screenshot recaptured; no new code change in pass6 |
| Atoms/DropdownSelectLabelItem | 1444:21704 | atoms-dropdownselectlabelitem--idle | 3 | .audit-artifacts/us-026-pass6/screenshots/atoms-dropdownselectlabelitem--idle.png sha256:7c536453fc9b... | screenshot recaptured; no new code change in pass6 |
| Atoms/FirstUploadSymbol | 1454:20974 | atoms-firstuploadsymbol--default | 1 | .audit-artifacts/us-026-pass6/screenshots/atoms-firstuploadsymbol--default.png sha256:57ffac284dde... | screenshot recaptured; no new code change in pass6 |
| Atoms/FolderItem | 1440:24306 | atoms-folderitem--idle | 6 | .audit-artifacts/us-026-pass6/screenshots/atoms-folderitem--idle.png sha256:606906c36b47... | screenshot recaptured; no new code change in pass6 |
| Atoms/Icon | 1421:17656 | atoms-icon--default | 2 | .audit-artifacts/us-026-pass6/screenshots/atoms-icon--default.png sha256:e24081eb1eff... | screenshot recaptured; no new code change in pass6 |
| Atoms/IconBase | 1421:17820 | atoms-iconbase--default | 3 | .audit-artifacts/us-026-pass6/screenshots/atoms-iconbase--default.png sha256:5a6b650846fa... | screenshot recaptured; no new code change in pass6 |
| Atoms/ImageItem | 1421:18311 | atoms-imageitem--idle | 6 | .audit-artifacts/us-026-pass6/screenshots/atoms-imageitem--idle.png sha256:9b5cc4451075... | screenshot recaptured; no new code change in pass6 |
| Atoms/KeepButton | 1421:17793 | atoms-keepbutton--default | 4 | .audit-artifacts/us-026-pass6/screenshots/atoms-keepbutton--default.png sha256:9ec15364e9f6... | screenshot recaptured; no new code change in pass6 |
| Atoms/LabelDuplicated | 1439:16874 | atoms-labelduplicated--default | 1 | .audit-artifacts/us-026-pass6/screenshots/atoms-labelduplicated--default.png sha256:981e5b0ea35c... | screenshot recaptured; no new code change in pass6 |
| Atoms/LabelStorageAlert | 1439:16885 | atoms-labelstoragealert--default | 5 | .audit-artifacts/us-026-pass6/screenshots/atoms-labelstoragealert--default.png sha256:e60cec365bed... | screenshot recaptured; no new code change in pass6 |
| Atoms/PlusButton | 1421:17726 | atoms-plusbutton--default | 4 | .audit-artifacts/us-026-pass6/screenshots/atoms-plusbutton--default.png sha256:5f53de8c2edd... | screenshot recaptured; no new code change in pass6 |
| Atoms/PushButton | 1421:17302 | atoms-pushbutton--default | 7 | .audit-artifacts/us-026-pass6/screenshots/atoms-pushbutton--default.png sha256:4b659729cd3b... | screenshot recaptured; no new code change in pass6 |
| Atoms/SelectState | 1421:18292 | atoms-selectstate--default | 2 | .audit-artifacts/us-026-pass6/screenshots/atoms-selectstate--default.png sha256:f498865c4613... | screenshot recaptured; no new code change in pass6 |
| Atoms/SidebarTagsItem | 1421:20907 | atoms-sidebartagsitem--idle | 3 | .audit-artifacts/us-026-pass6/screenshots/atoms-sidebartagsitem--idle.png sha256:4cac8121f856... | screenshot recaptured; no new code change in pass6 |
| Atoms/StorageTierBadge | 1457:21014 | atoms-storagetierbadge--current | 2 | .audit-artifacts/us-026-pass6/screenshots/atoms-storagetierbadge--current.png sha256:165a89a7351d... | screenshot recaptured; no new code change in pass6 |
| Atoms/Switch | 1454:20959 | atoms-switch--disabled | 4 | .audit-artifacts/us-026-pass6/screenshots/atoms-switch--disabled.png sha256:4faccad886f3... | screenshot recaptured; no new code change in pass6 |
| Atoms/Tag | 1421:17929 | atoms-tag--all-variants | 6 | .audit-artifacts/us-026-pass6/screenshots/atoms-tag--all-variants.png sha256:b84e2bab308b... | screenshot recaptured; no new code change in pass6 |
| Atoms/TagOrgMode | 1421:18769 | atoms-tagorgmode--all-modes | 5 | .audit-artifacts/us-026-pass6/screenshots/atoms-tagorgmode--all-modes.png sha256:bffa6cc5abd2... | screenshot recaptured; no new code change in pass6 |
| Atoms/TagOrgTemplateName | 1421:18778 | atoms-tagorgtemplatename--filled | 2 | .audit-artifacts/us-026-pass6/screenshots/atoms-tagorgtemplatename--filled.png sha256:f15dc709fbe6... | screenshot recaptured; no new code change in pass6 |
| Atoms/TypeLabel | 1421:18415 | atoms-typelabel--danger | 8 | .audit-artifacts/us-026-pass6/screenshots/atoms-typelabel--danger.png sha256:f378533967d8... | screenshot recaptured; no new code change in pass6 |
| Atoms/UploadFolder | 1439:17053 | atoms-uploadfolder--default | 1 | .audit-artifacts/us-026-pass6/screenshots/atoms-uploadfolder--default.png sha256:e6d61c46056f... | screenshot recaptured; no new code change in pass6 |
| Atoms/VideoItem | 1442:7858 | atoms-videoitem--idle | 6 | .audit-artifacts/us-026-pass6/screenshots/atoms-videoitem--idle.png sha256:4897142b6ffd... | FIXED: catalog gap closed in pass6 after fresh get_design_context confirmed atom /VideoItem |
| Celules/Callout | 1421:20028 | celules-callout--info | 2 | .audit-artifacts/us-026-pass6/screenshots/celules-callout--info.png sha256:0a2a43f360eb... | screenshot recaptured; no new code change in pass6 |
| Celules/CleanSpaceListSelection | 1436:20496 | celules-cleanspacelistselection--interactive | 3 | .audit-artifacts/us-026-pass6/screenshots/celules-cleanspacelistselection--interactive.png sha256:6e7e627abdbb... | screenshot recaptured; no new code change in pass6 |
| Celules/DropListItem | 1440:23803 | celules-droplistitem--idle | 2 | .audit-artifacts/us-026-pass6/screenshots/celules-droplistitem--idle.png sha256:f754746752c9... | screenshot recaptured; no new code change in pass6 |
| Celules/FreeModeButtons | 1431:20043 | celules-freemodebuttons--default | 1 | .audit-artifacts/us-026-pass6/screenshots/celules-freemodebuttons--default.png sha256:f7bb56254cfd... | screenshot recaptured; no new code change in pass6 |
| Celules/FreeModeItemNode | 1421:20108 | celules-freemodeitemnode--auto-archive | 10 | .audit-artifacts/us-026-pass6/screenshots/celules-freemodeitemnode--auto-archive.png sha256:4ceb1157f88c... | screenshot recaptured; no new code change in pass6 |
| Celules/FreeModeListItem | 1421:20757 | celules-freemodelistitem--idle | 3 | .audit-artifacts/us-026-pass6/screenshots/celules-freemodelistitem--idle.png sha256:eb65913732d1... | screenshot recaptured; no new code change in pass6 |
| Celules/FreeModeOutputNode | 1421:20262 | celules-freemodeoutputnode--default | 2 | .audit-artifacts/us-026-pass6/screenshots/celules-freemodeoutputnode--default.png sha256:13b03cbc12b4... | screenshot recaptured; no new code change in pass6 |
| Celules/NodoContextMenuItem | 1421:20528 | celules-nodocontextmenuitem--disabled | 6 | .audit-artifacts/us-026-pass6/screenshots/celules-nodocontextmenuitem--disabled.png sha256:4d3829c4ac69... | screenshot recaptured; no new code change in pass6 |
| Celules/PagesLead | 1439:17048 | celules-pageslead--default | 2 | .audit-artifacts/us-026-pass6/screenshots/celules-pageslead--default.png sha256:0fa6b0a4f06c... | screenshot recaptured; no new code change in pass6 |
| Celules/TagColor | 1444:21979 | celules-tagcolor--default | 2 | .audit-artifacts/us-026-pass6/screenshots/celules-tagcolor--default.png sha256:0de5376562be... | screenshot recaptured; no new code change in pass6 |
| Molecules/ActionPill | 1421:19027 | molecules-actionpill--default | 2 | .audit-artifacts/us-026-pass6/screenshots/molecules-actionpill--default.png sha256:70f8c0fab938... | screenshot recaptured; no new code change in pass6 |
| Molecules/ArchiveBrowserModal/ListItem | 1421:20896 | molecules-archivebrowsermodal-listitem--default | 2 | .audit-artifacts/us-026-pass6/screenshots/molecules-archivebrowsermodal-listitem--default.png sha256:29167af9183f... | screenshot recaptured; no new code change in pass6 |
| Molecules/ArchiveBrowserModal/Search | 1485:21074 | molecules-archivebrowsermodal-search--default | 1 | .audit-artifacts/us-026-pass6/screenshots/molecules-archivebrowsermodal-search--default.png sha256:8a04c1df7c62... | screenshot recaptured; no new code change in pass6 |
| Molecules/ContextHeader | 1421:19589 | molecules-contextheader--default | 2 | .audit-artifacts/us-026-pass6/screenshots/molecules-contextheader--default.png sha256:9739ada102d8... | screenshot recaptured; no new code change in pass6 |
| Molecules/DropdownSelectGroupBy | 1421:18719 | molecules-dropdownselectgroupby--default | 3 | .audit-artifacts/us-026-pass6/screenshots/molecules-dropdownselectgroupby--default.png sha256:b3ff795d3bd6... | screenshot recaptured; no new code change in pass6 |
| Molecules/DropdownSelectLabel | 1439:19650 | molecules-dropdownselectlabel--default | 3 | .audit-artifacts/us-026-pass6/screenshots/molecules-dropdownselectlabel--default.png sha256:348ced4ee810... | screenshot recaptured; no new code change in pass6 |
| Molecules/FileArchive | 1439:19655, 1439:19656 | molecules-filearchive--file-archive-1 | 2 | .audit-artifacts/us-026-pass6/screenshots/molecules-filearchive--file-archive-1.png sha256:3faf4342e9b5... | screenshot recaptured; no new code change in pass6 |
| Molecules/FileList | 1421:19200 | molecules-filelist--default | 5 | .audit-artifacts/us-026-pass6/screenshots/molecules-filelist--default.png sha256:db71ff36aaaa... | screenshot recaptured; no new code change in pass6 |
| Molecules/FileListHeader | 1421:19184 | molecules-filelistheader--home | 2 | .audit-artifacts/us-026-pass6/screenshots/molecules-filelistheader--home.png sha256:82ac777e28cb... | screenshot recaptured; no new code change in pass6 |
| Molecules/FolderCard | 1421:18595 | molecules-foldercard--default | 4 | .audit-artifacts/us-026-pass6/screenshots/molecules-foldercard--default.png sha256:abda7c2b861f... | screenshot recaptured; no new code change in pass6 |
| Molecules/FolderTagChip | 1421:19040 | molecules-foldertagchip--default | 5 | .audit-artifacts/us-026-pass6/screenshots/molecules-foldertagchip--default.png sha256:528863e3716b... | screenshot recaptured; no new code change in pass6 |
| Molecules/Label | 1421:18687 | molecules-label--default | 3 | .audit-artifacts/us-026-pass6/screenshots/molecules-label--default.png sha256:1f5f58771984... | screenshot recaptured; no new code change in pass6 |
| Molecules/NodoContextMenu | 1440:23821 | molecules-nodocontextmenu--default | 3 | .audit-artifacts/us-026-pass6/screenshots/molecules-nodocontextmenu--default.png sha256:f42d8d9eb19f... | screenshot recaptured; no new code change in pass6 |
| Molecules/Notification | 1439:19748 | molecules-notification--default | 2 | .audit-artifacts/us-026-pass6/screenshots/molecules-notification--default.png sha256:525ced6d1af1... | screenshot recaptured; no new code change in pass6 |
| Molecules/PopoverNotification | 1421:19626 | molecules-popovernotification--default | 7 | .audit-artifacts/us-026-pass6/screenshots/molecules-popovernotification--default.png sha256:525ced6d1af1... | screenshot recaptured; no new code change in pass6 |
| Molecules/RadioButton | 1454:24721 | molecules-radiobutton--disabled | 4 | .audit-artifacts/us-026-pass6/screenshots/molecules-radiobutton--disabled.png sha256:43c2f9fcfeb7... | screenshot recaptured; no new code change in pass6 |
| Molecules/SearchInput | 1421:17845 | molecules-searchinput--default | 4 | .audit-artifacts/us-026-pass6/screenshots/molecules-searchinput--default.png sha256:aec209ebb70a... | screenshot recaptured; no new code change in pass6 |
| Molecules/StorageBar | 1421:17904 | molecules-storagebar--empty | 5 | .audit-artifacts/us-026-pass6/screenshots/molecules-storagebar--empty.png sha256:22f5dd200eb3... | screenshot recaptured; no new code change in pass6 |
| Molecules/StorageStatus | 1421:18354 | molecules-storagestatus--global | 5 | .audit-artifacts/us-026-pass6/screenshots/molecules-storagestatus--global.png sha256:cd08a4761670... | screenshot recaptured; no new code change in pass6 |
| Molecules/StorageStatusCurrent | 1439:17044 | molecules-storagestatuscurrent--default | 2 | .audit-artifacts/us-026-pass6/screenshots/molecules-storagestatuscurrent--default.png sha256:68525aebaa9e... | screenshot recaptured; no new code change in pass6 |
| Molecules/ThumbnailLarge | 1421:19570 | molecules-thumbnaillarge--default | 2 | .audit-artifacts/us-026-pass6/screenshots/molecules-thumbnaillarge--default.png sha256:5eab2a451f0e... | screenshot recaptured; no new code change in pass6 |
| Molecules/ViewModeToggle | 1421:19069 | molecules-viewmodetoggle--columns | 3 | .audit-artifacts/us-026-pass6/screenshots/molecules-viewmodetoggle--columns.png sha256:524f670741c5... | screenshot recaptured; no new code change in pass6 |
| Organisms/ArchiveBrowserModal | 1439:16909 | organisms-archivebrowsermodal--default | 1 | .audit-artifacts/us-026-pass6/screenshots/organisms-archivebrowsermodal--default.png sha256:13f764a56e2b... | screenshot recaptured; no new code change in pass6 |
| Organisms/CardLogin | 1454:22055 | organisms-cardlogin--default | 1 | .audit-artifacts/us-026-pass6/screenshots/organisms-cardlogin--default.png sha256:d20fa8ba980b... | screenshot recaptured; no new code change in pass6 |
| Organisms/CardNeedMoreHelp | 1454:20981 | organisms-cardneedmorehelp--default | 1 | .audit-artifacts/us-026-pass6/screenshots/organisms-cardneedmorehelp--default.png sha256:be9ebc23e9f6... | screenshot recaptured; no new code change in pass6 |
| Organisms/CleanSpaceStorage | 1439:16908 | organisms-cleanspacestorage--default | 1 | .audit-artifacts/us-026-pass6/screenshots/organisms-cleanspacestorage--default.png sha256:ab55c7ceb42f... | screenshot recaptured; no new code change in pass6 |
| Organisms/DialogSaveOrganizationModal | 1421:18576 | organisms-dialogsaveorganizationmodal--default | 2 | .audit-artifacts/us-026-pass6/screenshots/organisms-dialogsaveorganizationmodal--default.png sha256:05daa272e0a1... | screenshot recaptured; no new code change in pass6 |
| Organisms/DialogTemplateReviewModal | 1431:20397 | organisms-dialogtemplatereviewmodal--default | 1 | .audit-artifacts/us-026-pass6/screenshots/organisms-dialogtemplatereviewmodal--default.png sha256:92cc15a02ae0... | screenshot recaptured; no new code change in pass6 |
| Organisms/DropNewTag | 1444:21624 | organisms-dropnewtag--default | 2 | .audit-artifacts/us-026-pass6/screenshots/organisms-dropnewtag--default.png sha256:2385993c907c... | screenshot recaptured; no new code change in pass6 |
| Organisms/DropdownMenu | 1440:23662 | organisms-dropdownmenu--sidebar | 2 | .audit-artifacts/us-026-pass6/screenshots/organisms-dropdownmenu--sidebar.png sha256:4b07784f9627... | screenshot recaptured; no new code change in pass6 |
| Organisms/FaqFastLinks | 1454:25006 | organisms-faqfastlinks--default | 1 | .audit-artifacts/us-026-pass6/screenshots/organisms-faqfastlinks--default.png sha256:13d35d352204... | screenshot recaptured; no new code change in pass6 |
| Organisms/FaqInfoCard | 1454:24788 | organisms-faqinfocard--card-with-callout | 2 | .audit-artifacts/us-026-pass6/screenshots/organisms-faqinfocard--card-with-callout.png sha256:b6b3517986af... | screenshot recaptured; no new code change in pass6 |
| Organisms/FaqInfoCardCollapsed | 1454:22003 | organisms-faqinfocardcollapsed--duplicates | 7 | .audit-artifacts/us-026-pass6/screenshots/organisms-faqinfocardcollapsed--duplicates.png sha256:49411eae1ef5... | screenshot recaptured; no new code change in pass6 |
| Organisms/FileListContainer | 1421:19687 | organisms-filelistcontainer--default | 1 | .audit-artifacts/us-026-pass6/screenshots/organisms-filelistcontainer--default.png sha256:12982112ffd1... | screenshot recaptured; no new code change in pass6 |
| Organisms/Header | 1421:19918 | organisms-header--navbar | 3 | .audit-artifacts/us-026-pass6/screenshots/organisms-header--navbar.png sha256:d6c6d3880347... | screenshot recaptured; no new code change in pass6 |
| Organisms/InfoPopover | 1421:18504 | organisms-infopopover--metadata | 2 | .audit-artifacts/us-026-pass6/screenshots/organisms-infopopover--metadata.png sha256:0b22837ecc3d... | screenshot recaptured; no new code change in pass6 |
| Organisms/OrganizeFreeModeCanvas | 1439:16906 | organisms-organizefreemodecanvas--default | 1 | .audit-artifacts/us-026-pass6/screenshots/organisms-organizefreemodecanvas--default.png sha256:24e454a0081b... | screenshot recaptured; no new code change in pass6 |
| Organisms/OrganizePanelDropZone | 1421:18781 | organisms-organizepaneldropzone--idle | 4 | .audit-artifacts/us-026-pass6/screenshots/organisms-organizepaneldropzone--idle.png sha256:7e3454f2fd77... | screenshot recaptured; no new code change in pass6 |
| Organisms/PlanSelection | 1454:25057 | organisms-planselection--default | 2 | .audit-artifacts/us-026-pass6/screenshots/organisms-planselection--default.png sha256:e31ce57680a7... | screenshot recaptured; no new code change in pass6 |
| Organisms/PreviewPane | 1421:19405 | organisms-previewpane--default | 2 | .audit-artifacts/us-026-pass6/screenshots/organisms-previewpane--default.png sha256:85031867d757... | screenshot recaptured; no new code change in pass6 |
| Organisms/SaveLongTermFileStorage | 1439:16907 | organisms-savelongtermfilestorage--default | 1 | .audit-artifacts/us-026-pass6/screenshots/organisms-savelongtermfilestorage--default.png sha256:c44b305e6b37... | screenshot recaptured; no new code change in pass6 |
| Organisms/SearchToolbar | none confirmed | organisms-searchtoolbar--default | 4 | .audit-artifacts/us-026-pass6/screenshots/organisms-searchtoolbar--default.png sha256:99f67c8511a0... | inferred component; no confirmed Figma node, screenshot recaptured |
| Organisms/Sidebar | 1421:17946 | organisms-sidebar--default | 2 | .audit-artifacts/us-026-pass6/screenshots/organisms-sidebar--default.png sha256:15126e1f25fe... | screenshot recaptured; no new code change in pass6 |
| Organisms/SidebarToggle | 1421:19118 | organisms-sidebartoggle--collapsed | 2 | .audit-artifacts/us-026-pass6/screenshots/organisms-sidebartoggle--collapsed.png sha256:d57902582838... | screenshot recaptured; no new code change in pass6 |
| Organisms/StorageSidebar | 1421:19167 | organisms-storagesidebar--default | 2 | .audit-artifacts/us-026-pass6/screenshots/organisms-storagesidebar--default.png sha256:70d503e031a6... | screenshot recaptured; no new code change in pass6 |
| Organisms/UploadPopover | 1421:19292 | organisms-uploadpopover--in-progress | 2 | .audit-artifacts/us-026-pass6/screenshots/organisms-uploadpopover--in-progress.png sha256:672a26480d45... | screenshot recaptured; no new code change in pass6 |
