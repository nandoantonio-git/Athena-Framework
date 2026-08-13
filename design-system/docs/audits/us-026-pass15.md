# US-026 pass15 — auditoria de ponto-fixo NON-CLEAN

Data: 2026-08-13. Resultado: **NON-CLEAN**.

Pass15 retomou depois da pass14 NON-CLEAN e recapturou o catálogo público
atual completo: **84 component stories** e **276 states/variantes
renderizáveis** via Playwright.

Evidência ativa:

- Screenshots pass15: `.audit-artifacts/us-026-active/screenshots-pass15/`
- Resultados e hashes: `.audit-artifacts/us-026-active/screenshot-results-pass15.json`
- Cobertura: `.audit-artifacts/us-026-active/coverage-summary-pass15.json`
- Manifesto por componente/story/state: `docs/audits/us-026-pass15-manifest.json`
- Captura: `.audit-artifacts/us-026-active/capture-pass15.mjs`

Cobertura:

| Métrica | Valor |
| --- | ---: |
| Componentes | 84 |
| Stories/states | 276 |
| Atoms | 120 |
| Celules | 36 |
| Molecules | 71 |
| Organisms | 49 |
| Missing vs pass14 | 0 |
| Extra vs pass14 | 0 |

## Recheck obrigatório 2026-08-13

| Linha | Resultado pass15 | Evidência |
| --- | --- | --- |
| Story backgrounds | Verificado sem fundos pretos inventados no catálogo recapturado | `screenshot-results-pass15.json` |
| `atom/CloseButton` | Verificado com Figma fresco `1421:19008`; visual 8/16px preservado e hit target separado | `atoms-closebutton--all-states.png` sha `17fc84e36325` |
| Sidebar | Verificado com Figma fresco `1421:17946`; collapse em linha superior e `Adicionar` em linha separada | `organisms-sidebar--default.png` sha `3fc4bdbf132f` |
| `organism/cleanSpaceStorage` | Verificado com Figma fresco `1439:16908`; anatomia e close preservados | `organisms-cleanspacestorage--default.png` sha `f5d19ab9e12b` |
| `celule/cleanSpaceStorage/listSelection` | Verificado com Figma fresco `1436:20496`; idle/selected e consumer recapturados | `celules-cleanspacelistselection--interactive.png` sha `97f564d30cf5` |
| `organism/SearchToolbar` | Continua removido do catálogo público | `missingVsPass14=[]`, `extraVsPass14=[]`; `find stories -path '*SearchToolbar*'` vazio |
| `organism/OrganizePanel/DropZone` | Verificado com Figma fresco `1421:18781`; states recapturados | `organisms-organizepaneldropzone--idle.png` |
| `organism/MainCanvas/Organization/FreeMode` | **Achado material novo corrigido nesta pass15**; ver seção abaixo | `organisms-organizefreemodecanvas--default.png` sha `f18d33d2f396` |
| Header — Organizar | Verificado com Figma fresco `1421:19918`; ícone real preservado | `organisms-header--navbar.png` sha `a2bc68f08ebf` |
| `organism/FileListContainer` | Verificado com Figma fresco `1421:19687`; decisão humana preserva sem micro-nome no glyph | `organisms-filelistcontainer--default.png` sha `bb3d795cbead` |
| `organism/FAQ/FastLinks` | Verificado com Figma fresco `1454:25006`; padding preservado, textos em PT por exceção trancada | `organisms-faqfastlinks--default.png` sha `22dd5f3ecf0b` |
| `organism/Dialog/TemplateReviewModal` | Verificado com Figma fresco `1431:20397`; hover/clicked inferidos seguem documentados | `organisms-dialogtemplatereviewmodal--default.png` sha `d297e2945ea2` |
| `molecule/StorageStatus` | Verificado com Figma fresco `1421:18354`; cores semânticas preservadas | `molecules-storagestatus--global.png` sha `9b183bdcd0ff` |
| `molecule/Label` | Verificado com Figma fresco `1421:18687`; `Etiquetar` visível e nowrap | `molecules-label--default.png` sha `1f5f58771984` |
| Archive/Image/Folder/Video items | Video re-lido com Figma fresco `1442:7858`; favicon thumbnail sem seleção preservado | `atoms-videoitem--favicon-header-thumbnail.png` sha `6d913f5f895e` |

## Achado material novo

| Componente | Node | Divergência | Correção | Recheck |
| --- | --- | --- | --- | --- |
| `Organisms/OrganizeFreeModeCanvas` | `1439:16906` | O canvas renderizava em `max-w-4xl`, cortando a composição, e ainda adicionava um `FreeModeOutputNode` compacto extra após `Resultado`. O Figma fresco confirma frame 1117×933 e não mostra esse card compacto extra na cadeia visível. | `organize-free-mode-canvas.tsx` agora usa `h-[933px] w-[1117px]`, removeu o scroll horizontal interno e removeu o consumer inventado; MDX atualizado. | Recapturado em `.audit-artifacts/us-026-active/screenshots-pass15/organisms-organizefreemodecanvas--default.png`, sha `f18d33d2f396`. |

## Resultado

Pass15 tem cobertura completa, mas encontrou e corrigiu uma divergência
material nova. Pelo protocolo de ponto-fixo, esta passada permanece
**NON-CLEAN** e uma nova passada completa é obrigatória antes de qualquer
`<fixed-point>CLEAN</fixed-point>`.
