# US-026 pass16 — auditoria de ponto-fixo NON-CLEAN

Data: 2026-08-13. Resultado: **NON-CLEAN**.

Pass16 iniciou a nova passada obrigatória depois da correção material da
pass15 e recapturou o catálogo público atual completo via Playwright:
**84 component stories** e **276 states/variantes renderizáveis**.

Evidência:

- Screenshots pass16: `.audit-artifacts/us-026-active/screenshots-pass16/`
- Resultados e hashes: `.audit-artifacts/us-026-active/screenshot-results-pass16.json`
- Cobertura: `.audit-artifacts/us-026-active/coverage-summary-pass16.json`
- Manifesto: `docs/audits/us-026-pass16-manifest.json`
- Captura: `.audit-artifacts/us-026-active/capture-pass16.mjs`

Cobertura:

| Métrica | Valor |
| --- | ---: |
| Componentes | 84 |
| Stories/states | 276 |
| Atoms | 120 |
| Celules | 36 |
| Molecules | 71 |
| Organisms | 49 |
| Missing vs pass15 | 0 |
| Extra vs pass15 | 0 |
| Fresh `get_design_context` antes do achado material | 6 componentes |

## Recheck obrigatório 2026-08-13

| Linha | Resultado pass16 | Evidência |
| --- | --- | --- |
| `atom/CloseButton` | Re-lido com Figma fresco `1421:19008`; SM 8px/MD 16px e estados Idle/Hover/Pressed preservados | `atoms-closebutton--all-states.png` |
| Sidebar | Re-lida com Figma fresco `1421:17946`; collapse e `Adicionar` continuam em linhas separadas | `organisms-sidebar--default.png` |
| `organism/cleanSpaceStorage` | Re-lido com Figma fresco `1439:16908`; anatomia, close, badges e botões destrutivos preservados | `organisms-cleanspacestorage--default.png` |
| `celule/cleanSpaceStorage/listSelection` | Re-lido com Figma fresco `1436:20496`; idle/selected, checkbox, favicon e badge conferidos | `celules-cleanspacelistselection--interactive.png` |
| `organism/OrganizePanel/DropZone` | Re-lido com Figma fresco `1421:18781`; 560×772, Mode × State × Quantity e botões preservados | `organisms-organizepaneldropzone--idle.png` |
| `organism/MainCanvas/Organization/FreeMode` | **Achado material novo corrigido nesta pass16**; ver seção abaixo | `organisms-organizefreemodecanvas--default.png` sha `3fe794fbbc28` |

## Achado material novo

| Componente | Node | Divergência | Correção | Recheck |
| --- | --- | --- | --- | --- |
| `Organisms/OrganizeFreeModeCanvas` | `1439:16906` | O Figma fresco confirmou o canvas atual 1117×933 com posicionamento absoluto, grupo `Arquivos`, filtros empilhados, `Junção`, `Auto-Archive` abaixo, `Resultado` expandido, painel de filtro, minimap e footer. A story ainda usava uma cadeia flex simplificada; a captura genérica 1280×900 também cortava o footer. | `src/components/organisms/organize-free-mode-canvas.tsx` foi refeito como composição absoluta 1117×933 usando as celules existentes, com output expandido e footer visível. | Recapturado em `.audit-artifacts/us-026-active/screenshots-pass16/organisms-organizefreemodecanvas--default.png`, sha `3fe794fbbc282c5abc12df64ebbe8f978fcd8640619eb4e8816f818f76575c7e`. |

## Hash diffs

`atoms-pushbutton--loading` e `molecules-searchinput--loading` diferem por
spinner animado em estados de engenharia já documentados como não
Figma-confirmados. `organisms-organizefreemodecanvas--default` difere por
correção material e recaptura em viewport 1440×1100 para não cortar o
componente 1117×933.

## Resultado

Pass16 tem cobertura Playwright completa, mas encontrou e corrigiu uma
divergência material nova. Pelo protocolo de ponto-fixo, esta passada é
**NON-CLEAN** e uma nova passada completa é obrigatória antes de qualquer
`<fixed-point>CLEAN</fixed-point>`.
