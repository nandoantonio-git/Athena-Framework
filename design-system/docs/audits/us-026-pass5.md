# US-026 pass 5 audit manifest

Date: 2026-08-13

Scope: 84 current public component stories (28 atoms, 10 celules, 22 molecules, 24 organisms), 261 rendered Storybook states. Tokens remain 5 doc-only pages and are not counted as component stories.

Figma file: `oFp2TLeCG4GJeCOFVhBvjg`. Storybook evidence: `design-system/.audit-artifacts/us-026-pass5/`. Generated at 2026-08-13. Storybook URL contract: `http://localhost:6006/iframe.html?id=<story-id>&viewMode=story`.

Result: **NON-CLEAN**.

Material finding fixed in this pass: `atom/CloseButton` (`1421:19008`) existed in `src/components/atoms/close-button.tsx`, was Figma-confirmed, and was consumed by `molecule/Notification` + `molecule/popover/Notification`, but had no public story/MDX and therefore was absent from the pass4 manifest. Fresh `get_design_context` confirmed 2 sizes (`SM`/`MD`) and 3 states (`Idle`/`Hover`/`Pressed`); the previous code exposed only the 8px idle asset. Fix added Figma-exported SVGs for all 6 combinations, `size`/`state` props, and `Atoms/CloseButton` docs/stories.

Important evidence limitation: screenshots and hashes were freshly regenerated for all 261 renderable story states in this pass. Fresh `get_design_context` was run for the new material finding (`atom/CloseButton`, `1421:19008`). Because the pass found and fixed a catalog gap, and because a clean pass must repeat the complete catalog with zero new findings, this pass must not emit CLEAN.

Catalog count note: the public component story count is now 84, up from 83. Including the 5 token MDX pages, Storybook has 89 documented top-level pages, still below the acceptance note that expected the real count to meet or exceed 90. This mismatch is itself part of the NON-CLEAN result and should be rechecked in the next full pass against the Figma catalog and any internal helpers that intentionally do not have public stories (`FaqCallout`, `icon-action-button`, `ui/button`).

## CloseButton Regra 11 Checklist

| Figma-visible element | Implementation check | Result |
| --- | --- | --- |
| `SM` idle close button, 8px | `CloseButton size="sm" state="idle"` uses `CloseButtonSmIdle.svg` | aligned |
| `SM` hover close button, 8px, dimmed clear glyph | `CloseButton size="sm" state="hover"` uses `CloseButtonSmHover.svg` | aligned |
| `SM` pressed close button, 8px, stronger dimmed clear glyph | `CloseButton size="sm" state="pressed"` uses `CloseButtonSmPressed.svg` | aligned |
| `MD` idle close button, 16px | `CloseButton size="md" state="idle"` uses `CloseButtonMdIdle.svg` | aligned |
| `MD` hover close button, 16px, dimmed clear glyph | `CloseButton size="md" state="hover"` uses `CloseButtonMdHover.svg` | aligned |
| `MD` pressed close button, 16px, stronger dimmed clear glyph | `CloseButton size="md" state="pressed"` uses `CloseButtonMdPressed.svg` | aligned |
| Visible text | none; `label="Fechar"` only for accessibility | aligned |
| Disabled/loading/error | no axes returned by Figma | omitted, not invented |

## Component Manifest

| Component | Node ID | Primary story ID | Rendered states | Evidence | Result |
| --- | --- | --- | ---: | --- | --- |
| Atoms/ArchiveItem | 1421:18214 | atoms-archiveitem--all-states | 6 | .audit-artifacts/us-026-pass5/screenshots/atoms-archiveitem--all-states.png sha256:2b764c7a9d93... | screenshot recaptured; no new code change in pass5 |
| Atoms/BoxIconButton | 1431:20102 | atoms-boxiconbutton--danger | 4 | .audit-artifacts/us-026-pass5/screenshots/atoms-boxiconbutton--danger.png sha256:3c4745f6f60c... | screenshot recaptured; no new code change in pass5 |
| Atoms/ButtonAdd | 1421:20509 | atoms-buttonadd--adicionar-arquivos | 4 | .audit-artifacts/us-026-pass5/screenshots/atoms-buttonadd--adicionar-arquivos.png sha256:52219d6c78c6... | screenshot recaptured; no new code change in pass5 |
| Atoms/ClearButton | 1421:17768 | atoms-clearbutton--default | 4 | .audit-artifacts/us-026-pass5/screenshots/atoms-clearbutton--default.png sha256:7896880886be... | screenshot recaptured; no new code change in pass5 |
| Atoms/CloseButton | 1421:19008 | atoms-closebutton--all-states | 3 | .audit-artifacts/us-026-pass5/screenshots/atoms-closebutton--all-states.png sha256:7be7e91c24cc... | FIXED: was missing public story/docs and only exposed SM idle; now covers SM/MD x Idle/Hover/Pressed |
| Atoms/ConfirmButton | 1421:17747 | atoms-confirmbutton--default | 4 | .audit-artifacts/us-026-pass5/screenshots/atoms-confirmbutton--default.png sha256:ee9aea88c39d... | screenshot recaptured; no new code change in pass5 |
| Atoms/DeleteButton | 1421:17705 | atoms-deletebutton--default | 4 | .audit-artifacts/us-026-pass5/screenshots/atoms-deletebutton--default.png sha256:7b0eff39ad0a... | screenshot recaptured; no new code change in pass5 |
| Atoms/DropdownSelectGroupByItem | 1444:21587 | atoms-dropdownselectgroupbyitem--all-states | 4 | .audit-artifacts/us-026-pass5/screenshots/atoms-dropdownselectgroupbyitem--all-states.png sha256:cfcbdca85a7d... | screenshot recaptured; no new code change in pass5 |
| Atoms/DropdownSelectLabelItem | 1444:21704 | atoms-dropdownselectlabelitem--all-states | 3 | .audit-artifacts/us-026-pass5/screenshots/atoms-dropdownselectlabelitem--all-states.png sha256:b7803e1d4c80... | screenshot recaptured; no new code change in pass5 |
| Atoms/FirstUploadSymbol | 1454:20974 | atoms-firstuploadsymbol--default | 1 | .audit-artifacts/us-026-pass5/screenshots/atoms-firstuploadsymbol--default.png sha256:57ffac284dde... | screenshot recaptured; no new code change in pass5 |
| Atoms/FolderItem | 1440:24306 | atoms-folderitem--all-states | 6 | .audit-artifacts/us-026-pass5/screenshots/atoms-folderitem--all-states.png sha256:dbcb8c397176... | screenshot recaptured; no new code change in pass5 |
| Atoms/Icon | 1421:17656 | atoms-icon--all-icons | 2 | .audit-artifacts/us-026-pass5/screenshots/atoms-icon--all-icons.png sha256:97d505b30ed1... | screenshot recaptured; no new code change in pass5 |
| Atoms/IconBase | 1421:17820 | atoms-iconbase--custom-icon-reuse | 3 | .audit-artifacts/us-026-pass5/screenshots/atoms-iconbase--custom-icon-reuse.png sha256:11edfe1ffeb2... | screenshot recaptured; no new code change in pass5 |
| Atoms/ImageItem | 1421:18311 | atoms-imageitem--all-states | 6 | .audit-artifacts/us-026-pass5/screenshots/atoms-imageitem--all-states.png sha256:e2f9b0f7062e... | screenshot recaptured; no new code change in pass5 |
| Atoms/KeepButton | 1421:17793 | atoms-keepbutton--default | 4 | .audit-artifacts/us-026-pass5/screenshots/atoms-keepbutton--default.png sha256:9ec15364e9f6... | screenshot recaptured; no new code change in pass5 |
| Atoms/LabelDuplicated | 1439:16874 | atoms-labelduplicated--default | 1 | .audit-artifacts/us-026-pass5/screenshots/atoms-labelduplicated--default.png sha256:981e5b0ea35c... | screenshot recaptured; no new code change in pass5 |
| Atoms/LabelStorageAlert | 1439:16885 | atoms-labelstoragealert--all-variants | 5 | .audit-artifacts/us-026-pass5/screenshots/atoms-labelstoragealert--all-variants.png sha256:bf0587ff2106... | screenshot recaptured; no new code change in pass5 |
| Atoms/PlusButton | 1421:17726 | atoms-plusbutton--default | 4 | .audit-artifacts/us-026-pass5/screenshots/atoms-plusbutton--default.png sha256:5f53de8c2edd... | screenshot recaptured; no new code change in pass5 |
| Atoms/PushButton | 1421:17302 | atoms-pushbutton--default | 7 | .audit-artifacts/us-026-pass5/screenshots/atoms-pushbutton--default.png sha256:4b659729cd3b... | screenshot recaptured; no new code change in pass5 |
| Atoms/SelectState | 1421:18292 | atoms-selectstate--all-states | 2 | .audit-artifacts/us-026-pass5/screenshots/atoms-selectstate--all-states.png sha256:f8d29857bbd9... | screenshot recaptured; no new code change in pass5 |
| Atoms/SidebarTagsItem | 1421:20907 | atoms-sidebartagsitem--all-states | 3 | .audit-artifacts/us-026-pass5/screenshots/atoms-sidebartagsitem--all-states.png sha256:790e2ef0cc50... | screenshot recaptured; no new code change in pass5 |
| Atoms/StorageTierBadge | 1457:21014 | atoms-storagetierbadge--current | 2 | .audit-artifacts/us-026-pass5/screenshots/atoms-storagetierbadge--current.png sha256:165a89a7351d... | screenshot recaptured; no new code change in pass5 |
| Atoms/Switch | 1454:20959 | atoms-switch--disabled | 4 | .audit-artifacts/us-026-pass5/screenshots/atoms-switch--disabled.png sha256:4faccad886f3... | screenshot recaptured; no new code change in pass5 |
| Atoms/Tag | 1421:17929 | atoms-tag--all-variants | 6 | .audit-artifacts/us-026-pass5/screenshots/atoms-tag--all-variants.png sha256:b84e2bab308b... | screenshot recaptured; no new code change in pass5 |
| Atoms/TagOrgMode | 1421:18769 | atoms-tagorgmode--all-modes | 5 | .audit-artifacts/us-026-pass5/screenshots/atoms-tagorgmode--all-modes.png sha256:bffa6cc5abd2... | screenshot recaptured; no new code change in pass5 |
| Atoms/TagOrgTemplateName | 1421:18778 | atoms-tagorgtemplatename--filled | 2 | .audit-artifacts/us-026-pass5/screenshots/atoms-tagorgtemplatename--filled.png sha256:f15dc709fbe6... | screenshot recaptured; no new code change in pass5 |
| Atoms/TypeLabel | 1421:18415 | atoms-typelabel--danger | 8 | .audit-artifacts/us-026-pass5/screenshots/atoms-typelabel--danger.png sha256:f378533967d8... | screenshot recaptured; no new code change in pass5 |
| Atoms/UploadFolder | 1439:17053 | atoms-uploadfolder--default | 1 | .audit-artifacts/us-026-pass5/screenshots/atoms-uploadfolder--default.png sha256:e6d61c46056f... | screenshot recaptured; no new code change in pass5 |
| Celules/Callout | 1421:20028 | celules-callout--info | 2 | .audit-artifacts/us-026-pass5/screenshots/celules-callout--info.png sha256:0a2a43f360eb... | screenshot recaptured; no new code change in pass5 |
| Celules/CleanSpaceListSelection | 1436:20496 | celules-cleanspacelistselection--interactive | 3 | .audit-artifacts/us-026-pass5/screenshots/celules-cleanspacelistselection--interactive.png sha256:6e7e627abdbb... | screenshot recaptured; no new code change in pass5 |
| Celules/DropListItem | 1440:23803 | celules-droplistitem--active | 2 | .audit-artifacts/us-026-pass5/screenshots/celules-droplistitem--active.png sha256:d56891343038... | screenshot recaptured; no new code change in pass5 |
| Celules/FreeModeButtons | 1431:20043 | celules-freemodebuttons--default | 1 | .audit-artifacts/us-026-pass5/screenshots/celules-freemodebuttons--default.png sha256:f7bb56254cfd... | screenshot recaptured; no new code change in pass5 |
| Celules/FreeModeItemNode | 1421:20108 | celules-freemodeitemnode--auto-archive | 10 | .audit-artifacts/us-026-pass5/screenshots/celules-freemodeitemnode--auto-archive.png sha256:4ceb1157f88c... | screenshot recaptured; no new code change in pass5 |
| Celules/FreeModeListItem | 1421:20757 | celules-freemodelistitem--all-operations | 3 | .audit-artifacts/us-026-pass5/screenshots/celules-freemodelistitem--all-operations.png sha256:165728f63ccc... | screenshot recaptured; no new code change in pass5 |
| Celules/FreeModeOutputNode | 1421:20262 | celules-freemodeoutputnode--compact | 2 | .audit-artifacts/us-026-pass5/screenshots/celules-freemodeoutputnode--compact.png sha256:05f05c596e2e... | screenshot recaptured; no new code change in pass5 |
| Celules/NodoContextMenuItem | 1421:20528 | celules-nodocontextmenuitem--disabled | 6 | .audit-artifacts/us-026-pass5/screenshots/celules-nodocontextmenuitem--disabled.png sha256:4d3829c4ac69... | screenshot recaptured; no new code change in pass5 |
| Celules/PagesLead | 1439:17048 | celules-pageslead--default | 2 | .audit-artifacts/us-026-pass5/screenshots/celules-pageslead--default.png sha256:0fa6b0a4f06c... | screenshot recaptured; no new code change in pass5 |
| Celules/TagColor | 1444:21979 | celules-tagcolor--default | 2 | .audit-artifacts/us-026-pass5/screenshots/celules-tagcolor--default.png sha256:0de5376562be... | screenshot recaptured; no new code change in pass5 |
| Molecules/ActionPill | 1421:19027 | molecules-actionpill--default | 2 | .audit-artifacts/us-026-pass5/screenshots/molecules-actionpill--default.png sha256:70f8c0fab938... | screenshot recaptured; no new code change in pass5 |
| Molecules/ArchiveBrowserModal/ListItem | 1421:20896 | molecules-archivebrowsermodal-listitem--default | 2 | .audit-artifacts/us-026-pass5/screenshots/molecules-archivebrowsermodal-listitem--default.png sha256:29167af9183f... | screenshot recaptured; no new code change in pass5 |
| Molecules/ArchiveBrowserModal/Search | 1485:21074 | molecules-archivebrowsermodal-search--default | 1 | .audit-artifacts/us-026-pass5/screenshots/molecules-archivebrowsermodal-search--default.png sha256:8a04c1df7c62... | screenshot recaptured; no new code change in pass5 |
| Molecules/ContextHeader | 1421:19589 | molecules-contextheader--collapsed | 2 | .audit-artifacts/us-026-pass5/screenshots/molecules-contextheader--collapsed.png sha256:64ef36e43f66... | screenshot recaptured; no new code change in pass5 |
| Molecules/DropdownSelectGroupBy | 1421:18719 | molecules-dropdownselectgroupby--default | 3 | .audit-artifacts/us-026-pass5/screenshots/molecules-dropdownselectgroupby--default.png sha256:b3ff795d3bd6... | screenshot recaptured; no new code change in pass5 |
| Molecules/DropdownSelectLabel | 1439:19650 | molecules-dropdownselectlabel--default | 3 | .audit-artifacts/us-026-pass5/screenshots/molecules-dropdownselectlabel--default.png sha256:348ced4ee810... | screenshot recaptured; no new code change in pass5 |
| Molecules/FileArchive | 1439:19655 | molecules-filearchive--file-archive-1 | 2 | .audit-artifacts/us-026-pass5/screenshots/molecules-filearchive--file-archive-1.png sha256:3faf4342e9b5... | screenshot recaptured; no new code change in pass5 |
| Molecules/FileList | 1421:19200 | molecules-filelist--default | 5 | .audit-artifacts/us-026-pass5/screenshots/molecules-filelist--default.png sha256:db71ff36aaaa... | screenshot recaptured; no new code change in pass5 |
| Molecules/FileListHeader | 1421:19184 | molecules-filelistheader--home | 2 | .audit-artifacts/us-026-pass5/screenshots/molecules-filelistheader--home.png sha256:82ac777e28cb... | screenshot recaptured; no new code change in pass5 |
| Molecules/FolderCard | 1421:18595 | molecules-foldercard--collapsed | 4 | .audit-artifacts/us-026-pass5/screenshots/molecules-foldercard--collapsed.png sha256:840b4cf7378a... | screenshot recaptured; no new code change in pass5 |
| Molecules/FolderTagChip | 1421:19040 | molecules-foldertagchip--default | 5 | .audit-artifacts/us-026-pass5/screenshots/molecules-foldertagchip--default.png sha256:528863e3716b... | screenshot recaptured; no new code change in pass5 |
| Molecules/Label | 1421:18687 | molecules-label--default | 3 | .audit-artifacts/us-026-pass5/screenshots/molecules-label--default.png sha256:1f5f58771984... | screenshot recaptured; no new code change in pass5 |
| Molecules/NodoContextMenu | 1440:23821 | molecules-nodocontextmenu--default | 3 | .audit-artifacts/us-026-pass5/screenshots/molecules-nodocontextmenu--default.png sha256:f42d8d9eb19f... | screenshot recaptured; no new code change in pass5 |
| Molecules/Notification | 1439:19748 | molecules-notification--default | 2 | .audit-artifacts/us-026-pass5/screenshots/molecules-notification--default.png sha256:525ced6d1af1... | screenshot recaptured; no new code change in pass5 |
| Molecules/PopoverNotification | 1421:19626 | molecules-popovernotification--adition | 7 | .audit-artifacts/us-026-pass5/screenshots/molecules-popovernotification--adition.png sha256:13575cfb8a41... | screenshot recaptured; no new code change in pass5 |
| Molecules/RadioButton | 1454:24721 | molecules-radiobutton--disabled | 4 | .audit-artifacts/us-026-pass5/screenshots/molecules-radiobutton--disabled.png sha256:43c2f9fcfeb7... | screenshot recaptured; no new code change in pass5 |
| Molecules/SearchInput | 1421:17845 | molecules-searchinput--default | 4 | .audit-artifacts/us-026-pass5/screenshots/molecules-searchinput--default.png sha256:aec209ebb70a... | screenshot recaptured; no new code change in pass5 |
| Molecules/StorageBar | 1421:17904 | molecules-storagebar--empty | 5 | .audit-artifacts/us-026-pass5/screenshots/molecules-storagebar--empty.png sha256:22f5dd200eb3... | screenshot recaptured; no new code change in pass5 |
| Molecules/StorageStatus | 1421:18354 | molecules-storagestatus--global | 5 | .audit-artifacts/us-026-pass5/screenshots/molecules-storagestatus--global.png sha256:cd08a4761670... | screenshot recaptured; no new code change in pass5 |
| Molecules/StorageStatusCurrent | 1439:17044 | molecules-storagestatuscurrent--default | 2 | .audit-artifacts/us-026-pass5/screenshots/molecules-storagestatuscurrent--default.png sha256:68525aebaa9e... | screenshot recaptured; no new code change in pass5 |
| Molecules/ThumbnailLarge | 1421:19570 | molecules-thumbnaillarge--default | 2 | .audit-artifacts/us-026-pass5/screenshots/molecules-thumbnaillarge--default.png sha256:5eab2a451f0e... | screenshot recaptured; no new code change in pass5 |
| Molecules/ViewModeToggle | 1421:19069 | molecules-viewmodetoggle--columns | 3 | .audit-artifacts/us-026-pass5/screenshots/molecules-viewmodetoggle--columns.png sha256:524f670741c5... | screenshot recaptured; no new code change in pass5 |
| Organisms/ArchiveBrowserModal | 1439:16909 | organisms-archivebrowsermodal--default | 1 | .audit-artifacts/us-026-pass5/screenshots/organisms-archivebrowsermodal--default.png sha256:13f764a56e2b... | screenshot recaptured; no new code change in pass5 |
| Organisms/CardLogin | 1454:22055 | organisms-cardlogin--default | 1 | .audit-artifacts/us-026-pass5/screenshots/organisms-cardlogin--default.png sha256:d20fa8ba980b... | screenshot recaptured; no new code change in pass5 |
| Organisms/CardNeedMoreHelp | 1454:20981 | organisms-cardneedmorehelp--default | 1 | .audit-artifacts/us-026-pass5/screenshots/organisms-cardneedmorehelp--default.png sha256:be9ebc23e9f6... | screenshot recaptured; no new code change in pass5 |
| Organisms/CleanSpaceStorage | 1439:16908 | organisms-cleanspacestorage--default | 1 | .audit-artifacts/us-026-pass5/screenshots/organisms-cleanspacestorage--default.png sha256:ab55c7ceb42f... | screenshot recaptured; no new code change in pass5 |
| Organisms/DialogSaveOrganizationModal | 1421:18576 | organisms-dialogsaveorganizationmodal--default | 2 | .audit-artifacts/us-026-pass5/screenshots/organisms-dialogsaveorganizationmodal--default.png sha256:05daa272e0a1... | screenshot recaptured; no new code change in pass5 |
| Organisms/DialogTemplateReviewModal | 1431:20397 | organisms-dialogtemplatereviewmodal--default | 1 | .audit-artifacts/us-026-pass5/screenshots/organisms-dialogtemplatereviewmodal--default.png sha256:92cc15a02ae0... | screenshot recaptured; no new code change in pass5 |
| Organisms/DropNewTag | 1444:21624 | organisms-dropnewtag--default | 2 | .audit-artifacts/us-026-pass5/screenshots/organisms-dropnewtag--default.png sha256:2385993c907c... | screenshot recaptured; no new code change in pass5 |
| Organisms/DropdownMenu | 1440:23662 | organisms-dropdownmenu--sidebar | 2 | .audit-artifacts/us-026-pass5/screenshots/organisms-dropdownmenu--sidebar.png sha256:4b07784f9627... | screenshot recaptured; no new code change in pass5 |
| Organisms/FaqFastLinks | 1454:25006 | organisms-faqfastlinks--default | 1 | .audit-artifacts/us-026-pass5/screenshots/organisms-faqfastlinks--default.png sha256:13d35d352204... | screenshot recaptured; no new code change in pass5 |
| Organisms/FaqInfoCard | 1454:24788 | organisms-faqinfocard--card-with-callout | 2 | .audit-artifacts/us-026-pass5/screenshots/organisms-faqinfocard--card-with-callout.png sha256:b6b3517986af... | screenshot recaptured; no new code change in pass5 |
| Organisms/FaqInfoCardCollapsed | 1454:22003 | organisms-faqinfocardcollapsed--duplicates | 7 | .audit-artifacts/us-026-pass5/screenshots/organisms-faqinfocardcollapsed--duplicates.png sha256:49411eae1ef5... | screenshot recaptured; no new code change in pass5 |
| Organisms/FileListContainer | 1421:19687 | organisms-filelistcontainer--default | 1 | .audit-artifacts/us-026-pass5/screenshots/organisms-filelistcontainer--default.png sha256:12982112ffd1... | screenshot recaptured; no new code change in pass5 |
| Organisms/Header | 1421:19918 | organisms-header--navbar | 3 | .audit-artifacts/us-026-pass5/screenshots/organisms-header--navbar.png sha256:d6c6d3880347... | screenshot recaptured; no new code change in pass5 |
| Organisms/InfoPopover | 1421:18504 | organisms-infopopover--metadata | 2 | .audit-artifacts/us-026-pass5/screenshots/organisms-infopopover--metadata.png sha256:0b22837ecc3d... | screenshot recaptured; no new code change in pass5 |
| Organisms/OrganizeFreeModeCanvas | 1439:16906 | organisms-organizefreemodecanvas--default | 1 | .audit-artifacts/us-026-pass5/screenshots/organisms-organizefreemodecanvas--default.png sha256:24e454a0081b... | screenshot recaptured; no new code change in pass5 |
| Organisms/OrganizePanelDropZone | 1421:18781 | organisms-organizepaneldropzone--dragover | 4 | .audit-artifacts/us-026-pass5/screenshots/organisms-organizepaneldropzone--dragover.png sha256:efe3c64c75ff... | screenshot recaptured; no new code change in pass5 |
| Organisms/PlanSelection | 1454:25057 | organisms-planselection--default | 2 | .audit-artifacts/us-026-pass5/screenshots/organisms-planselection--default.png sha256:e31ce57680a7... | screenshot recaptured; no new code change in pass5 |
| Organisms/PreviewPane | 1421:19405 | organisms-previewpane--default | 2 | .audit-artifacts/us-026-pass5/screenshots/organisms-previewpane--default.png sha256:85031867d757... | screenshot recaptured; no new code change in pass5 |
| Organisms/SaveLongTermFileStorage | 1439:16907 | organisms-savelongtermfilestorage--default | 1 | .audit-artifacts/us-026-pass5/screenshots/organisms-savelongtermfilestorage--default.png sha256:c44b305e6b37... | screenshot recaptured; no new code change in pass5 |
| Organisms/SearchToolbar | none confirmed | organisms-searchtoolbar--default | 4 | .audit-artifacts/us-026-pass5/screenshots/organisms-searchtoolbar--default.png sha256:99f67c8511a0... | screenshot recaptured; no new code change in pass5 |
| Organisms/Sidebar | 1421:17946 | organisms-sidebar--default | 2 | .audit-artifacts/us-026-pass5/screenshots/organisms-sidebar--default.png sha256:15126e1f25fe... | screenshot recaptured; no new code change in pass5 |
| Organisms/SidebarToggle | 1421:19118 | organisms-sidebartoggle--collapsed | 2 | .audit-artifacts/us-026-pass5/screenshots/organisms-sidebartoggle--collapsed.png sha256:d57902582838... | screenshot recaptured; no new code change in pass5 |
| Organisms/StorageSidebar | 1421:19167 | organisms-storagesidebar--collapsed | 2 | .audit-artifacts/us-026-pass5/screenshots/organisms-storagesidebar--collapsed.png sha256:d57902582838... | screenshot recaptured; no new code change in pass5 |
| Organisms/UploadPopover | 1421:19292 | organisms-uploadpopover--in-progress | 2 | .audit-artifacts/us-026-pass5/screenshots/organisms-uploadpopover--in-progress.png sha256:672a26480d45... | screenshot recaptured; no new code change in pass5 |
