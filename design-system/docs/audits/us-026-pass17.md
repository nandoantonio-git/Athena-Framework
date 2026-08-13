# US-026 pass17 — auditoria de ponto-fixo NON-CLEAN

Data: 2026-08-13. Resultado: **NON-CLEAN**.

Pass17 iniciou a nova passada obrigatória depois da correção material da
pass16 e recapturou o catálogo público atual completo via Playwright:
**84 component stories** e **276 states/variantes renderizáveis**.

Evidência:

- Screenshots pass17: `.audit-artifacts/us-026-active/screenshots-pass17/`
- Resultados e hashes: `.audit-artifacts/us-026-active/screenshot-results-pass17.json`
- Cobertura: `.audit-artifacts/us-026-active/coverage-summary-pass17.json`
- Manifesto: `docs/audits/us-026-pass17-manifest.json`
- Captura: `.audit-artifacts/us-026-active/capture-pass17.mjs`

Cobertura:

| Métrica | Valor |
| --- | ---: |
| Componentes | 84 |
| Stories/states | 276 |
| Atoms | 120 |
| Celules | 36 |
| Molecules | 71 |
| Organisms | 49 |
| Missing vs pass16 | 0 |
| Extra vs pass16 | 0 |
| Fresh `get_design_context` nesta invocação | 17 componentes |

## Recheck obrigatório 2026-08-13

Linhas re-lidas com Figma fresco e screenshot Playwright pass17: `atom/CloseButton`,
`organism/Sidebar`, `organism/cleanSpaceStorage`,
`celule/cleanSpaceStorage/listSelection`, `organism/OrganizePanel/DropZone`,
`organism/MainCanvas/Organization/FreeMode`, `organism/Header`,
`organism/FileListContainer`, `organism/FAQ/FastLinks`,
`organism/Dialog/TemplateReviewModal`, `molecule/StorageStatus`,
`molecule/Label`, `atom/ArchiveItem`, `atom/ImageItem`, `atom/FolderItem` e
`atom/VideoItem`.

## Achado material novo

| Componente | Node | Divergência | Correção | Recheck |
| --- | --- | --- | --- | --- |
| `Celules/FreeModeOutputNode` + `Organisms/OrganizeFreeModeCanvas` | `1421:20262`, `1439:16906` | Figma fresco confirmou que `Details`/`Prévia de arquivos` tem altura fixa `34.5px` com a lista cortada. A implementação deixava a lista visível, aumentando o card `Resultado` e escondendo/sobrepondo o Mini-Map Figma-confirmado no canvas. | `src/components/celules/free-mode-output-node.tsx` trava `Details` em `h-[34.5px] overflow-hidden`; `src/components/organisms/organize-free-mode-canvas.tsx` reposiciona o Mini-Map em `bottom-[158px]`. | Recapturado em `.audit-artifacts/us-026-active/screenshots-pass17/celules-freemodeoutputnode--default.png` sha `757a1652b90b` e `.audit-artifacts/us-026-active/screenshots-pass17/organisms-organizefreemodecanvas--default.png` sha `c326f58b2868`. |

## Resultado

Pass17 tem cobertura Playwright completa, mas encontrou e corrigiu uma
divergência material nova. Pelo protocolo de ponto-fixo, esta passada é
**NON-CLEAN** e uma nova passada completa é obrigatória antes de qualquer
`<fixed-point>CLEAN</fixed-point>`.
