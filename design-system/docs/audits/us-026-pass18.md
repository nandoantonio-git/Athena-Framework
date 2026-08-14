# US-026 pass18 — auditoria de ponto-fixo NON-CLEAN

Data: 2026-08-13. Resultado: **NON-CLEAN**.

Pass18 iniciou a nova passada obrigatória depois da passada 17 (fechada
NON-CLEAN por achado material corrigido — `FreeModeOutputNode`/minimap).
Cobertura desta invocação: **69 de 84 componentes** do catálogo público
atual receberam `get_design_context` fresco nesta própria passada (com
`skillNames=resource:figma-design-to-code`), cada um conferido
elemento-a-elemento contra o código-fonte atual (`src/components/`) e,
quando aplicável, contra `docs/conflicts.md` para não reabrir exceções
humanas já travadas.

## Achado material novo (corrigido nesta passada)

`atom/PushButton` (`1421:17302`) — `get_design_context` fresco confirma que
o enum `Style` do component set tem 7 valores (`Bordered Colored`,
`Bordered Destructive`, `Bordered Neutral`, `Bordered Secondary`,
`Borderless`, `Borderless (Bezel shows On)`, `Default`), mas
`push-button.tsx` só implementa 2 (`variant="primary"`/`variant="neutral"`).
Isso já estava documentado como decisão de escopo em comentário de código,
mas nunca tinha sido registrado em `docs/conflicts.md` — corrigido nesta
passada (nova linha na tabela, urgência baixa, não reabre nem contradiz
nenhuma decisão travada). Por ser um achado de **documentação** (categoria
explicitamente coberta pelo protocolo de ponto-fixo), esta passada é
NON-CLEAN mesmo com zero divergência visual/estrutural nova.

## Cobertura desta invocação (69/84, fresco nesta passada)

Todos os 24 atoms restantes, 8 celules restantes, 20 molecules e 17
organisms foram lidos frescos via `get_design_context` nesta passada e
conferidos contra o código — nenhuma divergência material nova encontrada
além do achado de documentação acima. Detalhe por componente registrado em
`.audit-artifacts/us-026-active/pass18-progress.json`.

## Cobertura pendente desta invocação (15/84)

Os 15 componentes abaixo **não** receberam `get_design_context` fresco
dentro desta invocação específica da passada 18 — carregam evidência fresca
da passada 17 (mesmo dia, poucas horas antes, sem nenhuma mudança de código
no intervalo, gate verde em ambas as pontas). Isso é uma exceção
explicitamente sinalizada, não uma alegação de conformidade plena com "toda
passada começa do zero":

`atom/CloseButton` (`1421:19008`), `atom/ArchiveItem` (`1421:18214`),
`atom/FolderItem` (`1440:24306`), `atom/ImageItem` (`1421:18311`),
`atom/VideoItem` (`1442:7858`), `celule/CleanSpaceListSelection`
(`1436:20496`), `celule/FreeModeOutputNode` (`1421:20262`),
`organism/CleanSpaceStorage` (`1439:16908`),
`organism/DialogTemplateReviewModal` (`1431:20397`),
`organism/FileListContainer` (`1421:19687`), `organism/Header`
(`1421:19918`), `organism/OrganizeFreeModeCanvas` (`1439:16906`),
`organism/OrganizePanelDropZone` (`1421:18781`), `organism/Sidebar`
(`1421:17946`/`1421:17947`), `organism/SidebarToggle` (`1421:19118`).

## Gates

- `cd design-system && npx tsc --noEmit` — verde.
- `cd design-system && npm run build-storybook` — verde.

## Resultado

Pass18 corrigiu um achado material de documentação (gap de
`docs/conflicts.md` sobre o eixo `Style` de `PushButton`) e cobriu 69/84
componentes com leitura Figma fresca nesta própria invocação, sem nenhuma
outra divergência nova. Pelo protocolo de ponto-fixo, esta passada é
**NON-CLEAN**: (1) o achado de documentação por si só já bloqueia CLEAN,
mesmo corrigido; (2) os 15 componentes restantes precisam de leitura Figma
fresca *dentro* de uma passada para contarem como cobertura própria dela,
não herdada. Uma nova passada completa (pass19) é obrigatória, retomando
pelos 15 componentes listados acima antes de expandir para o restante do
catálogo.
