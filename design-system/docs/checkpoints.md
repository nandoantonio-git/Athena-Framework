# Checkpoints

Checkpoint compacto registrado ao final da documentação de cada camada
atômica (tokens, atoms, molecules, organisms).

## US-026 pass17 — auditoria de ponto-fixo NON-CLEAN

Resultado: **NON-CLEAN** em 2026-08-13. Pass17 iniciou a nova passada
obrigatória após a pass16 e recapturou o catálogo público atual completo:
**84 component stories públicas** (`29 atoms + 10 celules + 22 molecules +
23 organisms`) e **276 states/variantes renderizáveis**. Com as 5 páginas
doc-only de tokens, o Storybook permanece com **89 páginas documentadas**.

Artefatos pass17: `docs/audits/us-026-pass17.md`,
`docs/audits/us-026-pass17-manifest.json`,
`.audit-artifacts/us-026-active/screenshot-results-pass17.json`,
`.audit-artifacts/us-026-active/coverage-summary-pass17.json` e
`.audit-artifacts/us-026-active/screenshots-pass17/`.

Comparação contra pass16: `missingVsPass16=[]`, `extraVsPass16=[]`. A
viewport da captura foi ampliada para 1440×1100, portanto diffs de hash
globais não são tratados como achados automáticos.

Achado material novo nesta passada: `Celules/FreeModeOutputNode` renderizava
a lista de `Prévia de arquivos` visível, mas Figma fresco `1421:20262`
confirma o bloco `Details` com altura fixa `34.5px` e lista cortada. Isso
também fazia `Organisms/OrganizeFreeModeCanvas` esconder/sobrepor o Mini-Map
Figma-confirmado de `1439:16906`. Corrigido em
`src/components/celules/free-mode-output-node.tsx` e
`src/components/organisms/organize-free-mode-canvas.tsx`; recapturado em
`.audit-artifacts/us-026-active/screenshots-pass17/celules-freemodeoutputnode--default.png`
sha `757a1652b90b` e
`.audit-artifacts/us-026-active/screenshots-pass17/organisms-organizefreemodecanvas--default.png`
sha `c326f58b2868`.

Como houve correção material em pass17, **uma nova passada completa é
obrigatória** antes de qualquer tentativa de emitir
`<fixed-point>CLEAN</fixed-point>`.

## US-026 pass16 — auditoria de ponto-fixo NON-CLEAN

Resultado: **NON-CLEAN** em 2026-08-13. Pass16 iniciou a nova passada
obrigatória após a pass15 e recapturou o catálogo público atual completo:
**84 component stories públicas** (`29 atoms + 10 celules + 22 molecules +
23 organisms`) e **276 states/variantes renderizáveis**. Com as 5 páginas
doc-only de tokens, o Storybook permanece com **89 páginas documentadas**.

Artefatos pass16: `docs/audits/us-026-pass16.md`,
`docs/audits/us-026-pass16-manifest.json`,
`.audit-artifacts/us-026-active/screenshot-results-pass16.json`,
`.audit-artifacts/us-026-active/coverage-summary-pass16.json` e
`.audit-artifacts/us-026-active/screenshots-pass16/`.

Comparação contra pass15: `missingVsPass15=[]`, `extraVsPass15=[]`.
Hash diffs: 3 (`PushButton` loading e `SearchInput` loading por spinner
animado; `OrganizeFreeModeCanvas` por correção material e recaptura em
viewport 1440×1100).

Achado material novo nesta passada: `Organisms/OrganizeFreeModeCanvas`
ainda renderizava uma cadeia flex simplificada e a evidência genérica
1280×900 cortava o footer do componente 1117×933. Figma fresco `1439:16906`
confirma a estrutura atual com source group, filtros empilhados, `Junção`,
`Auto-Archive` abaixo, `Resultado` expandido, painel flutuante, minimap e
footer. Corrigido em
`src/components/organisms/organize-free-mode-canvas.tsx`, recapturado em
`.audit-artifacts/us-026-active/screenshots-pass16/organisms-organizefreemodecanvas--default.png`
sha `3fe794fbbc28`.

Como houve correção material em pass16, **uma nova passada completa é
obrigatória** antes de qualquer tentativa de emitir
`<fixed-point>CLEAN</fixed-point>`.

## US-026 pass15 — auditoria de ponto-fixo NON-CLEAN

Resultado: **NON-CLEAN** em 2026-08-13. Pass15 recapturou o catálogo público
atual completo: **84 component stories públicas** (`29 atoms + 10 celules +
22 molecules + 23 organisms`) e **276 states/variantes renderizáveis**. Com
as 5 páginas doc-only de tokens, o Storybook permanece com **89 páginas
documentadas**.

Artefatos pass15: `docs/audits/us-026-pass15.md`,
`docs/audits/us-026-pass15-manifest.json`,
`.audit-artifacts/us-026-active/screenshot-results-pass15.json`,
`.audit-artifacts/us-026-active/coverage-summary-pass15.json` e
`.audit-artifacts/us-026-active/screenshots-pass15/`.

Comparação contra pass14: `missingVsPass14=[]`, `extraVsPass14=[]`.

Achado material novo nesta passada: `Organisms/OrganizeFreeModeCanvas`
renderizava em `max-w-4xl` e adicionava um `FreeModeOutputNode` compacto
extra após `Resultado`; Figma fresco `1439:16906` confirma o frame 1117×933
e não mostra esse card compacto na cadeia visível. Corrigido em
`src/components/organisms/organize-free-mode-canvas.tsx`, recapturado em
`.audit-artifacts/us-026-active/screenshots-pass15/organisms-organizefreemodecanvas--default.png`
sha `f18d33d2f396`.

Como houve correção material em pass15, **uma nova passada completa é
obrigatória** antes de qualquer tentativa de emitir
`<fixed-point>CLEAN</fixed-point>`.

## US-026 pass14 — auditoria de ponto-fixo NON-CLEAN

Resultado: **NON-CLEAN** em 2026-08-13. O CLEAN anterior da pass14 foi
invalidado pelo checklist obrigatório
`docs/audits/user-recheck-2026-08-13.md`. A retomada completou a cobertura do
catálogo público atual depois de remover `Organisms/SearchToolbar`: **84
component stories públicas** (`29 atoms + 10 celules + 22 molecules + 23
organisms`) e **276 states/variantes renderizáveis** capturados via
Playwright em `.audit-artifacts/us-026-active/screenshots/`. Com as 5 páginas
doc-only de tokens, o Storybook passa a ter **89 páginas documentadas**.

Cobertura fresca desta retomada: todas as linhas do recheck obrigatório foram
tratadas com Figma fresco quando aplicável, screenshot Storybook/Playwright
real e checklist elemento-a-elemento. `SearchToolbar` saiu do catálogo público
atual porque era inferido, sem node Figma confirmado e sem consumidores de
código; históricos foram preservados em logs/docs anteriores.

Manifesto consolidado: `docs/audits/us-026-pass14.md`. Checklist obrigatório:
`docs/audits/user-recheck-2026-08-13.md`. Artefatos ativos:
`.audit-artifacts/us-026-active/screenshot-results.json` e
`.audit-artifacts/us-026-active/coverage-summary.json`, agora com status
`NON_CLEAN_COMPLETE`. Comparação contra pass13: `missingVsPass13` contém só os
4 stories removidos de `SearchToolbar`; `extraVsPass13=[]`.

Achados materiais novos nesta retomada: **11**, todos corrigidos e
recapturados. Como houve correções materiais, uma nova passada completa é
obrigatória antes de qualquer tentativa de emitir
`<fixed-point>CLEAN</fixed-point>`.

Gates verdes nesta retomada: `cd design-system && npx tsc --noEmit`, `cd
design-system && npm run build-storybook`, e `bash scripts/gate.sh
design-system`. O build emite apenas avisos existentes de Vite/Tailwind
(`__dirname` no config nativo futuro, token CSS com `/` em custom property, e
chunks grandes), sem falhar.

## US-026 pass12 — auditoria de ponto-fixo em andamento

Resultado: **NON-CLEAN / INCOMPLETA** em 2026-08-13. Contagem real atual:
85 component stories públicas (`29 atoms + 10 celules + 22 molecules + 24
organisms`) e 5 páginas doc-only de tokens, totalizando 90 páginas
documentadas no Storybook. A captura Playwright fresca desta passada cobre
275/275 states renderizáveis em `.audit-artifacts/us-026-active/screenshots/`,
com `screenshot-results.json`, `coverage-summary.json` e manifesto em
`docs/audits/us-026-pass12.md`.

Cobertura Regra 11 fresca nesta passada: 11/84 nós Figma-confirmados com
`get_design_context` + checklist elemento-a-elemento registrados. Este resumo
inclui os 6 já existentes no manifesto (`CleanSpaceListSelection`, `TagColor`,
`PushButton`, `CleanSpaceStorage`, `SearchInput`, `DropNewTag`) mais os 5
átomos verificados nesta retomada (`ArchiveItem`, `BoxIconButton`,
`ButtonAdd`, `ClearButton`, `CloseButton`). Não houve nova correção material
nesta retomada, mas a pass12 inteira já contém 2 achados materiais corrigidos
anteriormente; por protocolo de ponto-fixo, outra passada completa ainda é
obrigatória antes de qualquer marcador CLEAN.

Retomada posterior avançou a cobertura por `Celules/FreeModeItemNode`,
`Celules/FreeModeListItem`, `Celules/FreeModeOutputNode`,
`Celules/NodoContextMenuItem` e `Celules/PagesLead`; corrigiu divergências
materiais em `FreeModeItemNode`, `FreeModeListItem` e
`NodoContextMenuItem`, recapturando também o consumidor
`Molecules/NodoContextMenu`. Artefatos ativos atuais: **275 stories
renderizáveis** (119 atoms + 36 celules + 71 molecules + 49 organisms),
0 screenshots faltantes, `hashDiffCount=52` contra pass11.

Gates verdes nesta retomada: `cd design-system && npx tsc --noEmit`, `cd
design-system && npm run build-storybook`, e `bash scripts/gate.sh
design-system`. O próximo retry deve continuar a pass12 a partir do
primeiro componente ainda marcado como "fresh get_design_context + element
checklist still required before CLEAN" após `Celules/TagColor`, começando
em `Molecules/ActionPill` (`1421:19027`). Como houve correções materiais,
uma nova passada completa continua obrigatória antes de qualquer marcador
CLEAN.

Atualização desta retomada: a pass12 avançou de `Molecules/FileList` até
`Molecules/FolderCard`. Foram corrigidas divergências materiais em
`Molecules/FileList` (slot `molecule/ArchiveItem` sem o micro-rótulo
Figma-confirmado) e `Molecules/FolderCard` (thumbnail central ainda usava
placeholder `lucide-react` em vez de `atom/ImageItem`, e as miniaturas de
documento agora compõem `atom/ArchiveItem`). `Molecules/FileListHeader` foi
conferido sem nova divergência material. Artefatos ativos atuais:
**275 stories renderizáveis**, 0 screenshots faltantes, `hashDiffCount=70`
contra pass11. A próxima retomada deve continuar pelo primeiro componente
sem checklist fresco após `Molecules/FolderCard`, começando em
`Molecules/FolderTagChip` (`1421:19040`). Como houve correções materiais,
uma nova passada completa continua obrigatória antes de qualquer marcador
CLEAN.

Atualização posterior desta retomada: a pass12 avançou de
`Organisms/InfoPopover` até `Organisms/SaveLongTermFileStorage`. Foram
lidos `get_design_context` frescos e comparados contra screenshots
Playwright reais para `InfoPopover`, `OrganizeFreeModeCanvas`,
`OrganizePanelDropZone`, `PlanSelection`, `PreviewPane` e
`SaveLongTermFileStorage`. Achados materiais corrigidos agora:
`OrganizePanelDropZone` voltou para root 560×772 e ícone FolderOrganize
184×184; `PlanSelection` voltou para root 1089px e literais Figma mistos em
inglês; `PreviewPane` trocou "Global" por "Recentes" e usa assets Figma de
clear/bookmark/share; `SaveLongTermFileStorage` voltou para root 700px,
coluna esquerda 270px e `atom/CloseButton`. `InfoPopover` e
`OrganizeFreeModeCanvas` foram conferidos sem nova divergência material,
preservando exceções já trancadas. Screenshots afetados foram recapturados
em `.audit-artifacts/us-026-active/screenshots/`. Resultado segue
**NON-CLEAN / INCOMPLETA**; como houve correções materiais, uma nova
passada completa continua obrigatória antes de qualquer marcador CLEAN. A
próxima retomada deve continuar em `Organisms/SearchToolbar` (sem node
Figma confirmado, exceção inferida documentada) e depois
`Organisms/Sidebar` (`1421:17946`).

## US-026 pass13 — auditoria de ponto-fixo em andamento

Resultado: **NON-CLEAN / INCOMPLETA** em 2026-08-13. A pass12 foi arquivada
em `.audit-artifacts/us-026-pass12/` e a pasta ativa foi reinicializada em
`.audit-artifacts/us-026-active/`. A captura Playwright fresca da pass13
cobre **280 states/variantes renderizáveis** em 85 componentes
(`120 atoms + 36 celules + 71 molecules + 53 organisms`), com
`missingVsPass12=[]` e `extraVsPass12=["atoms-buttonadd--all-states"]`.
Com as 5 páginas doc-only de tokens, o Storybook segue com 90 páginas
documentadas.

Cobertura Regra 11 fresca nesta passada: 19 componentes conferidos com
`get_design_context` real + screenshot Playwright + checklist
elemento-a-elemento: `Atoms/ArchiveItem` (`1421:18214`),
`Atoms/BoxIconButton` (`1431:20102`), `Atoms/ButtonAdd` (`1421:20509`),
`Atoms/ClearButton` (`1421:17768`), `Atoms/CloseButton` (`1421:19008`),
`Atoms/ConfirmButton` (`1421:17747`), `Atoms/DeleteButton`
(`1421:17705`), `Atoms/DropdownSelectGroupByItem` (`1444:21587`),
`Atoms/DropdownSelectLabelItem` (`1444:21704`),
`Atoms/FirstUploadSymbol` (`1454:20974`), `Atoms/FolderItem`
(`1440:24306`), `Atoms/Icon` (`1421:17656`), `Atoms/IconBase`
(`1421:17820`), `Atoms/ImageItem` (`1421:18311`), `Atoms/KeepButton`
(`1421:17793`, conferido fora da ordem alfabética estrita),
`Atoms/LabelDuplicated` (`1439:16874`), `Atoms/LabelStorageAlert`
(`1439:16885`), `Atoms/PlusButton` (`1421:17726`) e `Atoms/PushButton`
(`1421:17302`).

Achados materiais corrigidos nesta retomada:
`ButtonAdd` tinha estados Figma-confirmados `Hover` e `Clicked`, mas não
havia story estática para capturá-los; dependia só de pseudoestado CSS. O
componente ganhou prop `state` (`idle`/`hover`/`clicked`/`disabled`) e a
story `AllStates` captura a matriz Figma completa com o placeholder literal
`"Label"`. O screenshot novo é
`.audit-artifacts/us-026-active/screenshots/atoms-buttonadd--all-states.png`
sha256:`728f67eecc8...`. Nesta retomada, `FirstUploadSymbol.mdx` também foi
corrigido: a seção de fidelidade ainda dizia que o círculo usava
`bg-brand-teal-light`, mas Figma fresco e o código atual confirmam
`#D9D9D9` + glifo `#6B6B68` em 85×85.
Também foi corrigida a linha histórica de `docs/conflicts.md` sobre
`~20 átomos soltos no canvas`, que ainda apresentava componentes já
verificados nesta pass13 como se continuassem sem descrição/anatomia
individual.
Retomada posterior corrigiu mais uma divergência material em `Atoms/Icon`:
o default do componente renderizava 20×20 (`size-5`), mas o Figma fresco da
seção `Icon/` reconfirmou o padrão canônico 16×16 para `Arquivar` e a maior
parte dos glifos. `Icon` agora usa `size-4` por padrão; `Default` e
`AllIcons` foram recapturados com hashes novos em
`.audit-artifacts/us-026-active/screenshot-results.json`. Também foram
conferidos sem nova mudança `Atoms/IconBase`, `Atoms/ImageItem`,
`Atoms/LabelDuplicated`, `Atoms/LabelStorageAlert`, `Atoms/PlusButton` e
`Atoms/PushButton` (este preservando a exceção humana de tipografia
documentada em `docs/conflicts.md`).

Como houve correções materiais, a pass13 já é NON-CLEAN. O próximo retry
deve continuar a pass13 a partir de `Atoms/SelectState` (`1421:18292`), sem
recapturar a evidência fresca já registrada. `Atoms/KeepButton` já foi
conferido nesta retomada, fora da ordem alfabética estrita.

Retomada posterior da pass13 concluiu a camada **atoms**: 29/29 component
stories de átomos agora têm `get_design_context` fresco nesta pass13,
screenshot Playwright ativo e checklist elemento-a-elemento registrado em
`docs/audits/us-026-pass13.md`. Foram conferidos nesta retomada
`Atoms/SelectState`, `Atoms/SidebarTagsItem`, `Atoms/StorageTierBadge`,
`Atoms/Switch`, `Atoms/Tag`, `Atoms/TagOrgMode`,
`Atoms/TagOrgTemplateName`, `Atoms/TypeLabel`, `Atoms/UploadFolder` e
`Atoms/VideoItem`.

Achados materiais corrigidos nesta retomada: `Atoms/Switch` usava
`bg-zinc-300` no estado off, mas o Figma fresco confirma `#d9d9d9`; o
componente e a documentação foram corrigidos e os screenshots do switch
recapturados. `Atoms/TypeLabel` renderizava `DefaultTag Idle` com pílula
branca, mas o Figma fresco confirma estado sem fundo; corrigido e
`atoms-typelabel--scope-matrix.png` recapturado. `TypeLabel.mdx` também
tinha uma nota desatualizada dizendo que as cores dos pontos de arquivo não
eram confirmadas; atualizada para as quatro cores Figma-confirmadas.
`docs/conflicts.md` foi atualizado para marcar a pendência histórica dos
átomos soltos como resolvida para a camada atoms nesta pass13.

Resultado segue **NON-CLEAN / INCOMPLETA**; como houve novas correções
materiais, outra passada completa continuará obrigatória antes de qualquer
`<fixed-point>CLEAN</fixed-point>`. A próxima retomada deve continuar a
pass13 em `Celules/Callout` (`1421:20028`), sem recapturar evidência fresca
já registrada para os 29 átomos.

## US-026 pass9 — auditoria de ponto-fixo

Resultado: **BLOCKED** em 2026-08-13. Contagem real atual: 85 component stories
públicas (`29 atoms + 10 celules + 22 molecules + 24 organisms`) e 5 páginas
doc-only de tokens, totalizando 90 páginas documentadas no Storybook. A
captura Playwright fresca cobriu 267/267 states renderizáveis em
`.audit-artifacts/us-026-pass9/screenshots/`, com `screenshot-results.json` e
`story-index.json` no mesmo diretório. `figma-design-to-code` foi carregado e
`get_design_context` fresco funcionou para `atom/PushButton` (`1421:17302`),
confirmando que o bloqueio não é conectividade Figma.

Não houve correção material nesta passagem. Como a Regra 11 exige
`get_design_context` fresco + checklist elemento-a-elemento para todos os
componentes Figma-confirmados na mesma passada, e essa limitação estrutural já
se repetiu em pelo menos três tentativas (pass6, pass7, pass8 e novamente
pass9), a US-026 não pode ser marcada CLEAN a partir desta evidência. Gates
verdes nesta passagem: `cd design-system && npx tsc --noEmit`, `cd
design-system && npm run build-storybook`, e `bash scripts/gate.sh
design-system`.

| Camada | Componentes documentados | Conflitos logados | Tokens flagados como não usados |
| --- | --- | --- | --- |
| tokens (reconciliado 2026-08-09) | Colors.mdx, Typography.mdx, Spacing.mdx, Materials.mdx, unused.mdx (5 arquivos, todos somente-doc) — **reabertos e reconciliados nesta US** contra o Figma real via `get_variable_defs`/`get_design_context` (MCP do Figma ativo, `fileKey` `oFp2TLeCG4GJeCOFVhBvjg` persistido em `AGENTS.md`). Colors: paleta de marca/feedback/neutro Figma-confirmada (nó `1427:16958` + amostra de `atom/PushButton`, `celule/chip/folder-tag`, `molecule/SearchBar`, `organism/Sidebar`, `molecule/StorageBar`). Typography: 15 tokens Figma-confirmados (nó `1427:16951`), escala Major Third confirmada na espinha dorsal ≥16px. Spacing: escala real de 11 degraus (`spacing-1`…`spacing-3xl`, passo de 2px) + radius, substituindo a suposição de escala Tailwind 4px. Materials: spec completa do Liquid Glass (Refraction/Dispersion/Depth/Splay/Frost por tamanho + sombras + cores de efeito), nó `1431:17276`. unused.mdx: levantamento por amostragem no lado Figma + varredura completa no lado código | 5 novos nesta reconciliação (cor primária/secundária divergem da Regra 3; nomenclatura de variável diverge da Regra 2; rosa de marca usado como estado de dado em `molecule/StorageBar`; paleta neutra diverge da rampa Zinc na maioria dos papéis; 6 tokens de tipografia abaixo do piso de 16px) — todos em `docs/conflicts.md`, 4 de urgência alta e 1 de urgência média. O bloqueio de acesso ao Figma (antiga entrada de urgência alta) está marcado resolvido | Lado Figma (amostragem, não exaustivo): ~34 variáveis de cor não observadas nos 6 componentes lidos (famílias `ui-*`, `effect-glass-*`/`effect-overlay-*` restantes, neutros de modo escuro, `brand-primary-mid/focus`, `color-brand-primary-hover`, feedback de aviso) — ver `stories/tokens/unused.mdx` para a ressalva de metodologia. Lado código (exaustivo): mesmas 14 variáveis shadcn genéricas de antes (`--card`, `--popover`, `--accent`, `--chart-1`…`--chart-5`, bloco `--sidebar-*`) seguem não referenciadas em `src/index.css` |
| atoms (reconciliado 2026-08-09) | 8 átomos — **reabertos e reconciliados** nesta US contra `docs/figma-inventory.md` (US-002, leitura real via Figma MCP), substituindo a versão anterior 100% inferida. `PushButton` (`atom/PushButton`, `1421:17302`): promovido a ✅ aligned, ganhou prop `icon` (eixo `isIconOn` Figma-confirmado), estados Loading/Error re-rotulados como extensão de engenharia (não existem no enum `State` do Figma). 5 ícones-botão novos com descrição Figma verbatim própria (Seção 2.2, achado #11): `DeleteButton` (`1421:17705`), `PlusButton` (`1421:17726`), `ConfirmButton`/`atom/ActionButton/Confirm` (`1421:17747`), `ClearButton` (`1421:17768`), `KeepButton` (`1421:17793`) — implementação compartilhada via `icon-action-button.tsx` (infra de código, não é átomo Figma próprio). `Icon` novo (`atom/Icon/*`, Seção 2.1): 1 componente genérico com `name` cobrindo as 44 instâncias de glifo, em vez de 44 componentes separados. `IconBase` novo (`atom/icon/base`, `1421:17820`): slot de glifo estático usado dentro de moléculas. Componentes reais em `src/components/atoms/` | 5 novos nesta reconciliação, todos urgência baixa exceto 1 média (ver `docs/conflicts.md`): Loading/Error de `PushButton` fora do enum Figma; `On`/`Idle`/`ClickedFilled` sem distinção descrita nos 5 ícones-botão; 44 ícones sem vetor exportado (fidelidade por nome via `lucide-react`, não pixel-a-pixel); ~20 átomos soltos no canvas sem descrição verificada (`ArchiveItem`, `ImageItem`, `VideoItem`, `FolderItem`, `Tag`, `SelectState`, `TypeLabel`, `TagOrgMode`, `TagOrgTemplateName`, `CloseButton`, `Label/Duplicated`, `buttonAdd`, `Sidebar/Tags/Items`, `boxIconButton`, `Label/Storage/Alert`, `DropdownSelect/GroupBy/Item`, `DropdownSelect/Label/Item`, `badge/TypeLabel`) deferidos nesta iteração — urgência média, decisão humana recomendada sobre reclassificação atom→organism para os 4 itens tipo linha/card. Regra 1 verificada: nenhum `button/primary`/`secondary`/`destructive` como componente separado encontrado (achado #12 confirma conformidade, não conflito) | Nenhum token novo — os 8 átomos reutilizam só `Tokens/Colors` (`--brand-teal`, `--destructive`, rampa Zinc) já em uso desde a run anterior; nenhum exibe Liquid Glass (`Tokens/Materials` não referenciado por não se aplicar a nenhum dos 8) |
| molecules (reconciliado 2026-08-09, US-005) | 7 moléculas — as 3 anteriores **reabertas e reconciliadas** contra `docs/figma-inventory.md` (leitura real via Figma MCP) + 4 novas com descrição Figma-confirmada obtida via `get_design_context` nesta US. `StorageTierBadge` (`.mdx` reconciliado): achado crítico #4 confirma que `badge/storage-tier` **não existe** como componente formal no Figma (busca textual 100% da página) — segue 🆕 undocumented-until-now (Regra 6), nunca ✅ aligned. `SearchInput` (`molecule/SearchBar`, `1421:17857`): promovido a ✅ aligned — placeholder real confirmado (`"Search"`), estados `Focused`/`wrongValue`/`writeValue`/`Disabled` mapeados 1:1 para focus/error/value/disabled. `FolderTagChip` (`celule/chip/folder-tag`, `1421:19040`): promovido a ✅ aligned — ganhou prop `isExpanded` (Figma-confirmado existir, invertendo a suposição antiga da Regra 7) e prop `selected` (eixo `State` novo); `opacity:0` residual confirmado e localizado (texto "Pessoal"). 4 moléculas novas, todas 🆕 undocumented-until-now com descrição Figma verbatim própria: `StorageBar` (`1421:17904`, tiers quick-access/long-term via `value` 0–100; variante `Style=Expanded` segmentada por pink **não implementada**, depende do CONFLICT de Regra 3 já aberto), `ViewModeToggle` (`molecule/view-mode-toggle`, `1421:19069`, Grid/List/Columns, usa Liquid Glass), `ActionPill` (`molecule/action-pill`, `1421:19027`, pílula de ações do header, usa Liquid Glass), `DropdownSelectGroupBy` (`molecule/DropdownSelect/GroupBy`, `1421:18719`, 4 opções de agrupamento confirmadas, usa Liquid Glass). Componentes reais em `src/components/molecules/`. 3 das 4 novas referenciam `Tokens/Materials` (Liquid Glass) — primeira vez que a camada `molecules` usa o material | 4 novos + 3 reconciliados (ver `docs/conflicts.md`): `badge/storage-tier` não existe formalmente no Figma (média); `isExpanded`/`State=Selected` de `chip/folder-tag` invertem suposição antiga da Regra 7 (média); placeholder de `SearchBar` confirmado verbatim como `"Search"` (baixa, já era conhecido); `opacity:0` de `chip/folder-tag` confirmado e localizado (baixa); `StorageBar Style=Expanded` reforça o CONFLICT de rosa-como-dado já aberto (alta, mesma entrada). ~15 `molecule/`-soltos adicionais deferidos (média) — sem descrição verificada, vários de escala mais próxima de `organism` (mesmo critério de fallback usado em `atoms`, US-004) | 3 tokens novos adicionados a `src/index.css`: `--brand-teal-dark` (derivado via `color-mix`, não o hex Figma-confirmado, para diferenciar tier longo-prazo em `StorageBar`) e `--effect-glass-light-45`/`--effect-glass-white-70`/`--effect-glass-surface-light` (cores de tint do Liquid Glass, valores Figma-confirmados já catalogados em `Tokens/Materials`, agora referenciados em componente real pela primeira vez) |
| organisms (reconciliado 2026-08-10, US-006) | 19 organismos — os 2 anteriores (`FileListItem`, `SearchToolbar`, 100% inferidos sem Figma) **reabertos e reconciliados** contra `docs/figma-inventory.md` + Figma MCP ao vivo (fileKey `oFp2TLeCG4GJeCOFVhBvjg` — conta ativa nesta sessão, diferente das US-002/US-005 que citavam bloqueio); nenhum encontrou correspondência exata no Figma real, mantidos 🧩 Inferido (não promovidos a ✅ aligned), com nota de reconciliação em cada `.mdx`. 17 organismos novos, todos ✅ aligned com nó Figma próprio: `Sidebar` (`1421:17946`), `StorageSidebar` (`1421:19167`), `SidebarToggle` (`1421:19118`), `InfoPopover` (`1421:18504`), `DialogSaveOrganizationModal` (`1421:18576`), `UploadPopover` (`1421:19292`), `FileListContainer` (`1421:19687`), `Header` (`1421:19918`), `DropNewTag` (`1444:21624`), `PreviewPane` (`1421:19405`), `DialogTemplateReviewModal` (`1431:20397`), `SaveLongTermFileStorage` (`1439:16907`), `ArchiveBrowserModal` (`1439:16909`), `CleanSpaceStorage` (`1439:16908`), `OrganizePanelDropZone` (`1421:18781`), `DropdownMenu` (`1440:23662`/`1440:23768`), `OrganizeFreeModeCanvas` (`1439:16906`, escopo reduzido — só `get_screenshot`, editor de nós real não reproduzido, ver `.mdx`). Componentes reais em `src/components/organisms/`. `atom/PushButton` ganhou prop `variant` (`"primary"`\|`"neutral"`) nesta US — resolve o gap "expandir tratamento visual" registrado em `PushButton.mdx`, motivado pelo par Cancelar/Continuar confirmado repetidamente em 6 organisms novos (Regra 10: reuso em vez de reimplementação ad-hoc por componente) | 6 novos nesta US (ver `docs/conflicts.md`): **"Liberar Espaço" confirmado como texto literal proibido** no painel de armazenamento embutido em `organism/Sidebar` — alta urgência, maior superfície de exposição de uma violação da Regra 5 encontrada até agora (componente persistente, visível em quase toda tela); implementações usam as variantes Figma-confirmadas não-proibidas "Gerir Espaço"/"Limpar Espaço". Tag "Corrente" vs. "Acesso rápido" (baixa). Texto 100% em inglês em `upload-popover` (baixa). "Organizar" fora da lista aprovada da Regra 5 em `Header` (baixa). `FileListItem`/`SearchToolbar` sem paralelo Figma confirmado, mantidos inferidos (média). Regra 1 verificada em todos os 19: nenhum `button/primary`/`secondary`/`destructive` como componente separado | Nenhum token novo em `src/index.css` — os organisms reutilizam só `Tokens/Colors` (rampa Zinc + `--brand-teal`) e os 3 tokens `effect-glass-*` já existentes (Materials, US-005). 10 dos 19 organisms referenciam `Tokens/Materials` (Liquid Glass) — maior concentração de uso do material até agora |

## Reconciliação de cores (US-009)

Propagação da decisão humana de 2026-08-10 (Figma como fonte de verdade
para cor, ver Regra 3 atualizada em `AGENTS.md`) para o resto da
documentação e do código, fechando os 2 CONFLICTs de cor de urgência alta
ainda abertos em `docs/conflicts.md` (`cor/marca/primária`+`secundária` e
`molecule/StorageBar Style=Expanded`).

- `stories/tokens/Colors.mdx`: primária `#007e96`/secundária `#31302d`
  marcadas como valor **ativo**; `#2A7A8C`/`#3A3C38` mantidos na página só
  como histórico `🗄️ Descontinuado 2026-08-10` (Regra 9 — nada apagado do
  histórico). Rosa (`--brand-pink-dark`/`-light`) reclassificado de
  "branding-only" para cor semântica da categoria "Acesso rápido". Cor de
  perigo corrigida de `#ac3a2e` (leitura antiga da amostra Pallete) para
  `#bc3426` (achado real em `organism/cleanSpaceStorage`, já em uso em
  `push-button.tsx`/`index.css` desde a correção manual do mesmo dia).
- `src/index.css`: `--brand-secondary`, `--brand-pink-dark`,
  `--brand-pink-light` ganharam mapeamento `@theme inline`
  (`--color-brand-*`) para uso via classe utilitária Tailwind, não só
  `var(...)` inline — nenhuma delas tinha esse mapeamento antes desta US.
- `molecule/StorageBar`: nova variante `StorageBarExpanded` (componente
  separado, prop `segments: { tier, value }[]`) implementa `Style=Expanded`
  (nó Figma `1421:17907`), antes deliberadamente não implementada por
  depender da resolução do CONFLICT de rosa. Usa `--brand-pink-dark`/
  `-light` para segmentos `tier="quick-access"`, `--brand-teal`/`-dark` para
  `tier="long-term"` — 4 cores Figma-confirmadas via `get_design_context`;
  ordem/largura exata de cada segmento e semântica do 2º tom dentro de cada
  tier ficam 🧩 inferidas (export do Figma retornou posicionamento absoluto
  inconsistente, ver nota em `StorageBar.mdx`).
- `docs/conflicts.md`: as 2 entradas de cor já estavam com status
  "resolvida" (decisão humana registrada antes desta US); atualizadas para
  remover a nota de "pendente de implementação", já que a propagação
  aconteceu nesta US.
- Sweep de verificação: nenhuma referência ativa a `#2A7A8C`/`#3A3C38`
  sobra em `src/`/`stories/` fora de notas históricas explicitamente
  marcadas como descontinuadas (comentário em `index.css`, `unused.mdx`,
  `Colors.mdx`).
- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.

## QA final (US-008)

Consolidação de fechamento do loop de auditoria da página Figma "✏️ Design
Pattern", executada **depois** da reconciliação real contra o Figma (acesso
via MCP resolvido em US-003; ver `docs/conflicts.md`, entrada "(infra)
Acesso ao Figma", `resolvida`). A seção abaixo substitui uma versão anterior
desta mesma seção que ainda descrevia o bloqueio de acesso ao Figma como
aberto e afirmava que nenhum `.mdx` usava `✅ aligned` — ambas as afirmações
ficaram desatualizadas assim que US-003/US-005/US-006 reconciliaram tokens,
atoms, molecules e organisms contra o Figma real; esta revisão (US-008)
corrige a própria seção de QA para refletir o estado atual, sem alterar
conteúdo de componente.

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso; bundle inclui
  todas as 34 stories de atoms (8), molecules (7) e organisms (19), mais as
  5 páginas somente-doc de `stories/tokens/` (`storybook-static/`).
- `docs/conflicts.md` — reordenado nesta US por urgência decrescente (5 alta
  → 6 média → 8 baixa → 1 resolvida ao final, por ser item de
  infraestrutura já fechado), sem entradas duplicadas. Conteúdo das 21
  entradas preservado, só a ordem mudou.
- Status badge de cada `.mdx` revisado contra `docs/conflicts.md` nesta US:
  nenhum arquivo declara `✅ aligned` puro quando há um conflito aberto
  contra ele — os 11 componentes com conflito aberto (`Sidebar`,
  `StorageSidebar`, `Header`, `UploadPopover`, `FolderTagChip`,
  `PushButton`, `ClearButton`, `ConfirmButton`, `DeleteButton`,
  `KeepButton`, `PlusButton`) tiveram a linha de status qualificada para
  `✅ aligned (estrutura)` + urgência/tipo do conflito, com link para a
  seção de conflito já existente no próprio arquivo e para
  `docs/conflicts.md`. Componentes sem paralelo Figma seguem `🧩 Inferido`
  (`FileListItem`, `SearchToolbar`) e nunca foram promovidos a `✅ aligned`.
  Componentes sem componente formal no Figma seguem `🆕
  undocumented-until-now` (`StorageTierBadge`, Regra 6; `StorageBar`,
  `ActionPill`, `ViewModeToggle`, `DropdownSelectGroupBy`, `Icon`).
- Todo conteúdo inferido segue marcado com `🧩 Inferido` e distinto de
  "Figma-confirmado" em todos os arquivos tocados (tokens, atoms, molecules,
  organisms) — nenhuma inferência é apresentada como confirmação do Figma.
- Deploy Vercel documentado em `README.md` (`npm run build-storybook` →
  `storybook-static/`) e replicado em `vercel.json`.

Loop de auditoria encerrado nesta US. Pendências reais remanescentes, não
resolvíveis localmente (todas já logadas em `docs/conflicts.md` com
urgência e justificativa, aguardando decisão humana): divergência de cor de
marca (Regra 3, alta), convenção de nomenclatura de token (Regra 2, alta),
rosa como dado em `StorageBar` (Regra 3, alta), 6 tokens de tipografia
abaixo do piso de 16px (Regra 4/WCAG 1.4.4, alta), e "Liberar Espaço"
confirmado no Figma para o painel de armazenamento embutido em
`organism/Sidebar` (Regra 5, alta).

## Substituição StorageTierBadge: molecule → atom (US-012)

Implementa a decisão humana de 2026-08-10 já registrada em
`docs/conflicts.md` (entrada `badge/storage-tier`, `resolvida`): remove a
contagem antiga e adiciona a nova, corrigindo as contagens da linha
`molecules`/`atoms` da tabela acima (que preservam o número vigente em
2026-08-09, US-004/US-005, e não são reescritas retroativamente — Regra 9).

- **Contagem atualizada:** `atoms` passa de 8 para **9** componentes reais
  (`src/components/atoms/`); `molecules` passa de 7 para **6**
  (`src/components/molecules/`).
- **Removido:** `Molecules/StorageTierBadge` (`.mdx` + `.stories.tsx` +
  `src/components/molecules/storage-tier-badge.tsx`) — nunca teve paralelo
  Figma confirmado (achado crítico #4, US-002/US-005), sempre `🆕
  undocumented-until-now`, nunca `✅ aligned`.
- **Adicionado:** `Atoms/StorageTierBadge` (`.mdx` + `.stories.tsx` +
  `src/components/atoms/storage-tier-badge.tsx`), Figma-confirmado via
  `get_design_context` no nó `1457:21014` (`atom/StorageTierBadge`, criado
  pelo usuário no Figma em 2026-08-10), status `✅ aligned` desde a criação
  — 2 variantes (`tier=current`/`tier=long term`), sem a terceira variante
  presumida ("Pronto para guardar") da versão antiga.
- **Consumidor real atualizado:** `organism/CleanSpaceStorage` — as pílulas
  inline de tier por arquivo (antes `<span>` duplicado) agora renderizam
  `atom/StorageTierBadge`; `CleanSpaceLargeFile.tier` mudou de união de
  strings de rótulo (`"Acesso rápido" | "Longo prazo"`) para o tipo
  `StorageTier` (`"current" | "long term"`) exportado pelo átomo.
- **Sweep de verificação:** nenhuma referência ativa a
  `molecules/storage-tier-badge`/`Molecules/StorageTierBadge` sobra em
  `src/`/`stories/` — as 2 menções restantes em prosa histórica
  (`Typography.mdx`, `FileListItem.mdx`) foram atualizadas para apontar
  para o átomo novo, sem apagar o registro histórico da decisão original
  (Regra 9).
- Nenhum token novo em `src/index.css` — o átomo reusa só `border-zinc-200`
  (aproximação de fallback da paleta neutra suspensa, Regra 3) e
  `text-zinc-950` (match exato do hex Figma `neutral-text-primary`
  `#09090b`).
- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.

## Releitura pontual: 10 componentes atualizados no Figma em 2026-08-10 (US-013)

Reconciliação sob demanda dos 10 componentes que o usuário editou
diretamente no Figma depois da última leitura completa (US-002/US-003),
listados em `AGENTS.md` ("Componentes atualizados no Figma em 2026-08-10").
`get_metadata` re-executado na página inteira (`1421:17272`) antes de
qualquer implementação para localizar os node IDs atuais — 6 dos 10
mudaram de ID desde a run anterior (ficaram no bloco de nós `1454:*`,
lançado pelo usuário na mesma sessão de edição). `get_design_context`
chamado nó a nó com `skillNames=figma-design-to-code`, sem inferir
composição só pelo nome.

- **`atom/switch`** (`1454:20959`) — ✅ aligned. Toggle controlado
  (`role="switch"`), 2 variantes (`off`/`on`), preenchimento `on` em
  `#007e96`. `src/components/atoms/switch.tsx`.
- **`atom/firstUploadSymbol`** (`1454:20974`) — ✅ aligned (estrutura).
  Ilustração decorativa (círculo + `atom/Icon/CloudDownload`); cor do
  círculo é asset de imagem sem hex confirmado, aproximada (gap
  documentado no `.mdx`). `src/components/atoms/first-upload-symbol.tsx`.
- **`atom/badge/TypeLabel`** (`1421:18415`) — ✅ aligned (estrutura). Um
  único component set Figma cobrindo 2 famílias semânticas distintas,
  implementadas como 3 exports: `FileTypeLabel` (legenda de tipo de
  arquivo), `ScopeTypeLabel` (chip seletor de escopo, usado dentro de
  `StorageStatus`), `DangerTypeLabel` (pílula de alerta). A nota da story
  ("já usado em `CleanSpaceStorage`") não se confirmou — o consumidor real
  era `organism/PreviewPane` (citado em comentário, nunca importado de
  fato); corrigido nesta US: `PreviewPane` agora consome `FileTypeLabel` de
  verdade na linha "Formato". `src/components/atoms/type-label.tsx`.
- **`organism/CardNeedMoreHelp`** (`1454:20981`) — ✅ aligned. Card de
  contato com suporte, Liquid Glass (`bg-effect-glass-white-50`, token
  novo). `src/components/organisms/card-need-more-help.tsx`.
- **`organism/FAQ/info/cards/colapsed`** (`1454:22003`) — ✅ aligned. 7
  variantes de `topic`, cada uma com título/ícone/perguntas próprias
  (conteúdo verbatim do Figma). "Colapsado" reproduzido com estado real
  (`expanded`) em vez do `overflow-clip` estático do Figma — mais
  acessível, mesmo resultado visual. Perguntas usam `<details>`/`<summary>`
  nativos. `src/components/organisms/faq-info-card-collapsed.tsx`
  (exporta `TOPIC_DATA`, reaproveitado por `FaqInfoCard`).
- **`organism/FAQ/info/Card`** (`1454:24788`) — ✅ aligned. Só 2
  combinações reais de `property1`×`isCalloutOn` confirmadas (não a matriz
  2×2 completa) — modelado como `variant: "faq" | "card-with-callout"`,
  reaproveitando `TOPIC_DATA` de `FaqInfoCardCollapsed` em vez de duplicar
  as mesmas perguntas/respostas/callouts. `src/components/organisms/
  faq-info-card.tsx`.
- **`organism/card/login`** (`1454:22055`) — ✅ aligned (estrutura), ⚠
  CONFLICT novo urgência alta (Regra 4: fonte `Manrope`, não `Figtree`;
  paleta de cor própria sem correspondência com tokens já confirmados —
  ver `docs/conflicts.md`). Implementado com `font-sans`/Zinc do projeto,
  conflito registrado, não resolvido silenciosamente.
  `src/components/organisms/card-login.tsx`.
- **`molecule/radiobutton`** (`1454:24721`) — ✅ aligned. Bug de extração
  do `get_design_context` identificado e corrigido (texto hardcoded
  "Pessoal" nas 2 variantes) — rótulo real por opção confirmado via
  `get_metadata` (nome do symbol), não a extração defeituosa.
  `src/components/molecules/radio-button.tsx`.
- **`molecule/StorageStatus/Current`** (`1439:17044`) — ✅ aligned. Widget
  "Armazenamento usado: X de Y" + botão "Comprar espaço" + barra + legenda
  "X%". Barra própria (rosa, `brand-pink-light`), não reutiliza o átomo
  `StorageBar` — achado novo: `StorageBar` (`tier="quick-access"`) ainda
  renderiza teal, divergindo da Regra 3 (rosa = Acesso rápido) já aplicada
  em `StorageBarExpanded`. `src/components/molecules/
  storage-status-current.tsx`.
- **`molecule/StorageStatus`** (`1421:18354`) — ✅ aligned. `Style=Sidebar`
  (compacto) e `Style=Expanded` (seletor de escopo Global/Acesso
  Rápido/Longo Prazo, via `ScopeTypeLabel`) — descrição do component set
  cita variantes `NearLimit`/`LimitReached`/`Empty` sem symbol formal
  confirmado, não implementadas (Regra 9). Reaproveita `StorageBarExpanded`
  (painel Global) e `FileTypeLabel` (legenda por tipo). `src/components/
  molecules/storage-status.tsx`.

**Relação `atom/StorageTierBadge` (US-012) × `ScopeTypeLabel`/
`FileTypeLabel` (US-013)**: sobreposição semântica real entre os rótulos de
tier ("Acesso rápido"/"Longo prazo"), mas escopos diferentes — documentado
em `Atoms/TypeLabel.mdx` e `Molecules/StorageStatus.mdx`. Não contradiz a
Regra 6 (segmentação sistêmica por diretório, não por badge de navegação).

**Terminologia (Regra 5)**: nenhum termo proibido como rótulo de UI nos 10
componentes. Achado de baixa urgência: "elegíveis" aparece em prosa de
resposta de FAQ (`FrequentIssues`, `organism/FAQ/info/cards/colapsed`) —
não é rótulo de UI, mantido literal (Figma-confirmado), registrado em
`docs/conflicts.md` para decisão humana sobre extensão da Regra 5 a texto
corrido.

**Tokens novos em `src/index.css`**: `--brand-teal-light` (`#c8dce3`,
Figma `--brand-primary-light`), `--brand-secondary-dark`/`-light`
(`#1a1714`/`#6b6b68`, Figma `--brand-secondary-dark`/`-light`),
`--effect-glass-white-50` (`#ffffff80`, já documentado em
`Tokens/Materials`, promovido a variável de tema), `--effect-overlay-subtle`
(`#bfc7d21a`, idem).

**Fluid-interface e reduced-motion (Regra 8)**: aplicado nos 10
`.mdx` — `atom/switch` e `molecule/radiobutton` (claramente interativos)
documentam press vs. release via `active:scale-*`; todos os 10 documentam
"reduced-motion: não documentado no Figma" onde nenhuma variante/nota foi
encontrada nos nós consultados, sem assumir suporte.

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.

## Aba "Design" via @storybook/addon-designs (US-014)

`parameters: { design: { type: 'figma', url: '...' } }` adicionado ao
`Meta` de 40 `.stories.tsx` + `parameters` no `<Meta>` de 4 `.mdx` de
tokens (Colors `1427:16958`, Typography `1427:16951`, Materials
`1431:17276`), usando em cada caso o node ID PRIMÁRIO já documentado no
comentário de topo do componente `.tsx` correspondente (nunca um
sub-componente citado de passagem).

**Resolução dos casos com múltiplos node IDs no comentário** (usado o
primeiro/próprio, não o sub-componente): `DialogSaveOrganizationModal`
(`1421:18576`, não `1421:19695` do `template-card` que compõe);
`DropNewTag` (`1444:21624`, não `1444:21979` do `celule/TagColor`);
`DropdownMenu` (`1440:23662`, primeiro dos dois estilos do próprio
component set); `OrganizePanelDropZone` (`1421:18781`, único);
`FileListContainer` (`1421:19687`, não `1421:19200` do
`molecule/FileList`); `PreviewPane` (`1421:19405`, único);
`SaveLongTermFileStorage` (`1439:16907`, único); `StorageSidebar`
(`1421:19167`, node próprio — não `1439:16908`, que é apenas uma
referência a `organism/cleanSpaceStorage` citada dentro do comentário,
achado só percebido ao ler o arquivo inteiro em vez do primeiro match).

**3 stories sem aba Design, além das 2 já esperadas** (`SearchToolbar` e
`unused.mdx`, ambas já excluídas nos critérios de aceite desta US): `Icon`
(mapeia `atom/Icon/<Nome>`, uma seção inteira de 44 instâncias soltas, sem
node único de frame — inventar um seria contradizer a Regra 9), `SearchInput`
(`molecule/SearchBar` não tem node citado no comentário de topo de
`search-input.tsx`, só o placeholder), `FileListItem` (100% inferido, sem
node Figma — já documentado assim em `FileListItem.mdx` desde a US-006).
Nenhum node foi inventado para os 3; ficam sem aba Design até um node real
ser documentado no componente.

`Tokens/Spacing` não tem seção própria no Figma — aba Design aponta para
`molecule/StorageBar` (`1421:17904`) só como amostra de referência visual,
nota explícita na própria página de que não é a fonte da escala documentada.

Verificação: `npm run storybook` sobe sem erros de build/preview (log do
Vite limpo); confirmação visual do painel "Design" carregando o iframe do
Figma em si (vs. só ausência de erro de build) não foi possível nesta
sessão — sem ferramenta de browser/screenshot disponível para o Storybook
(diferente do MCP do Figma, que só screenshota arquivos Figma, não a app
Storybook rodando localmente).

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.

## QA visual real em 2026-08-10 (fora do loop Ralph — feito diretamente na conversa, via Playwright)

Motivado por feedback direto do usuário: a documentação parecia "muito fora
das expectativas" (sem Figtree, cores não aplicadas, sem espelhar o Figma).
Investigação encontrou a causa raiz e mais 3 bugs reais, todos corrigidos e
reverificados com screenshot real (não só build sem erro):

1. **`.storybook/preview.tsx` nunca importava `src/index.css`** — o Storybook
   inteiro, desde a US-001, rodou sem nenhum CSS do Tailwind aplicado (zero
   arquivo `.css` no build final). Corrigido com uma linha de import.
2. **Fonte errada**: o projeto só importava `@fontsource-variable/geist`,
   nunca Figtree, apesar de toda a documentação (Regra 4) dizer Figtree.
   Instalado `@fontsource-variable/figtree`, `--font-sans` corrigido;
   `--font-geist` mantido à parte só para o uso pontual Figma-confirmado
   (`atom/StorageTierBadge`, label `Geist:Medium`).
3. **`molecule/StorageBar` invisível** (largura 0) e **`molecule/SearchInput`
   truncado** no preview isolado do Storybook: ambos usam `w-full`, que
   colapsa sem um ancestral de largura definida — funciona normal dentro de
   `Sidebar`/`StorageSidebar` (confirmado visualmente), mas não isolado.
   Corrigido com `decorators: [(Story) => <div className="w-96">...]` nas
   stories (não no componente — o componente está correto).
4. **`molecule/StorageStatus`**: labels dos botões em minúsculo ("Liberar
   espaço"/"Comprar espaço") — corrigido para "Liberar Espaço"/"Comprar
   Espaço" (Regra 5, capitalização exata dos termos aprovados).

44 componentes únicos verificados via screenshot real (Playwright,
`http://localhost:6006`) comparado contra screenshot do Figma
(`get_screenshot`) nos casos de maior risco (`PushButton`, `ClearButton`,
`CleanSpaceStorage`, `Sidebar`, `StorageSidebar`). Nenhum outro problema de
fidelidade visual encontrado nesta passada — cores, fonte, espaçamento e
Liquid Glass renderizam corretamente após os 4 fixes acima.

`@storybook/addon-designs` confirmado funcionando de verdade (não só
"não deu erro de build"): aba "Design" carrega o iframe do Figma real.

## Lacuna de catálogo identificada em 2026-08-11 (fora do escopo desta auditoria)

Releitura completa do Figma (`get_metadata`, node `1421:17272`) encontra **154
nomes únicos** de componente (`atom/`\|`molecule/`\|`organism/`\|`celule/`),
contra 44 implementados. Depois de descartar variantes/estados do mesmo
componente (ex.: os 5 estados de `molecule/SearchBar` = 1 `SearchInput`),
sobra uma lacuna real de **~40 componentes nunca catalogados**:

- **`organism/planSelection`** — página de Configurações de Plano, mencionada
  na decisão de terminologia "Liberar Espaço" (US-010) mas nunca implementada.
  É a peça nova mais relevante.
- **`organism/FAQ/FastLinks`** — nova.
- **~15 atoms** — os mesmos "~20 átomos soltos" já deferidos desde a US-004
  (`ArchiveItem`, `FolderItem`, `ImageItem`, `Tag`, `TagOrgMode`,
  `TagOrgTemplateName`, `Label/Duplicated`, `Label/Storage/Alert`,
  `Sidebar/Tags/Items`, `boxIconButton`, `buttonAdd`, `UploadFolder`,
  `DropdownSelect/GroupBy/Item`, `DropdownSelect/Label/Item`,
  `SelectState`) — não é achado novo, só nunca foi implementado.
- **~10 `celule/`** — camada nunca categorizada à parte: `Callout`,
  `TagColor`, `dropListItem`, `nodoContextMenuItem`,
  `cleanSpaceStorage/listSelection`, `Pages/Lead`, e 4 sub-peças do canvas
  de Organização Livre (`MainCanvas/Organization/FreeMode/ItemNode`\|
  `ListItem`\|`OutputNode`\|`Buttons`) — explicam melhor os "tipos de node"
  do Mini-Map visto em `OrganizeFreeModeCanvas`.
- **~13 molecules novas**: `DropdownSelect/Label` (segundo tipo de
  dropdown, diferente do `GroupBy` já implementado), `FileList`,
  `FileList/Header`, `FolderCard`, `Notification`, `popover/Notification`,
  `context-header`, `nodoContextMenu`, `thumbnail-large`, `FileArchive1`,
  `FileArchive2`, `Label`, `ArchiveBrowserModal/ListItem`\|`Search`.

**Decisão humana em 2026-08-11**: auditoria de fidelidade dos 44 existentes
primeiro (não resolver silenciosamente essa lacuna agora); os ~40 novos
ficam para uma rodada futura, priorizando `organism/planSelection` quando
essa rodada acontecer.

## Novos atoms — dropdown items e tags de sidebar (US-019)

Última leva de atoms da lacuna de 2026-08-11. 3 átomos novos, todos com
node Figma próprio confirmado via `get_design_context`
(`skillNames=figma-design-to-code`) e verificação visual real (Playwright,
`http://localhost:6006`) contra o screenshot do Figma, elemento a elemento
(Regra 11).

- **`atom/DropdownSelect/GroupBy/Item`** (`1444:21587`) — "item da pilula
  de agrupar, no qual você seleciona a condição de agrupamento". 3 estados
  (`Idle`/`hover`/`selected`), texto `10px` centralizado. Reconcilia
  [`molecule/DropdownSelectGroupBy`](../stories/molecules/DropdownSelectGroupBy.mdx)
  (US-005): cada opção da lista expandida passa a renderizar este átomo em
  vez do `<button>` inline anterior (aproximação 100% inferida, sem fundo
  por estado). `src/components/atoms/dropdown-select-group-by-item.tsx`.
- **`atom/DropdownSelect/Label/Item`** (`1444:21704`) — "item da pilula de
  etiquetar, no qual você insere input o nome desejado de rótulo". Texto
  verbatim "+ Nova Etiqueta". Sem molecule consumidora implementada
  (`molecule/DropdownSelect/Label` fica deferida, Regra 9 — não inventar
  composição não confirmada). `src/components/atoms/
  dropdown-select-label-item.tsx`.
- **`atom/Sidebar/Tags/Items`** (`1421:20907`) — "tags que ficam presentes
  na sidebar". Node não capturado no `get_metadata` original da página
  inteira (profundidade insuficiente do scan); localizado nesta US por
  busca textual no dump completo (`get_metadata` no node raiz da página,
  `1421:17272`, filtrado por `name` contendo "Tag"). 3 estados
  (idle/hover/selected via `Property 1`). Reconcilia
  [`organism/Sidebar`](../stories/organisms/Sidebar.mdx) (US-006): a seção
  "Etiquetas" passa a renderizar este átomo (novas props `activeTag`/
  `onTagSelect`) em vez do `<span>` ad hoc anterior, que `Sidebar.mdx` já
  documentava explicitamente como lacuna ("não há sub-componente
  atom/molecule próprio... para uma linha de nav individual"). Ponto usa
  `--brand-teal` (`#007e96`), confirmado pelo asset SVG real do Figma
  (`fill="#007E96"`), não aproximado. `src/components/atoms/
  sidebar-tags-item.tsx`.

**`atom/buttonAdd`**: não duplicado — já coberto na US-016, conforme
critério de aceite desta US.

**Cores**: nenhum token novo em `src/index.css`. Os 2 tons de overlay
usados nos 2 dropdown items (`rgba(113,113,122,0.2)`/
`rgba(107,107,104,0.45)`) e o fundo `selected` de `Sidebar/Tags/Items`
(`rgba(0,0,0,0.14)`) são literais sem token semântico correspondente
(Regra 3, paleta neutra suspensa) — mesmo tratamento já usado em
`atom/Tag`/`atom/firstUploadSymbol`. `Sidebar/Tags/Items` reusa
`--effect-overlay-subtle` (já existente, US-013) para o estado hover.

**Terminologia (Regra 5)**: nenhum termo proibido nos 3 componentes —
texto 100% Figma-confirmado ("Tipo", "+ Nova Etiqueta", "Image").

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.

## Camada `celule` completa — Callout, TagColor, dropListItem e demais (US-021)

Últimos 5 componentes da camada `celule` (fecha as 10 peças: 4 na US-020 +
1 na US-016 + 5 aqui). Todos com node Figma próprio confirmado via
`get_design_context` (`skillNames=figma-design-to-code`) e verificação
visual real (Playwright, `http://localhost:6006`) contra o screenshot do
Figma, elemento a elemento (Regra 11).

- **`celule/Callout`** (`1421:20028`) — "utilizado para dar avisos
  importantes para usuário, previsão contra erro". 2 variantes
  (`warning`/`info`). **Achado nesta US**: `--brand-teal-dark` no tema era
  uma aproximação derivada (`color-mix`) — corrigido em `src/index.css`
  para o hex Figma-confirmado `#1a5e6e` (já documentado em
  `stories/tokens/Colors.mdx` desde US-009, nunca antes ligado à variável
  CSS real; confirmado 2x nesta US, em `Callout` e `TagColor`).
  `src/components/celules/callout.tsx`.
- **`celule/TagColor`** (`1444:21979`) — "painel onde é possivel
  selecionar a cor do rótulo/etiqueta. pre-selecionada padrao é a verde."
  6 swatches de cor, todos os hex batem exato com tokens já documentados.
  Reconcilia [`organism/drop-new-tag`](../stories/organisms/DropNewTag.mdx)
  (US-005): compõe este `celule` em vez de reimplementar os swatches
  localmente, corrigindo de passagem a cor `danger` desatualizada
  (`#ac3a2e` → `#bc3426`) e o anel de seleção inferido a 16px (→ azul
  Figma-confirmado a 7px). `src/components/celules/tag-color.tsx`.
- **`celule/dropListItem`** (`1440:23803`) — "item do organism dropList".
  3 estados (idle/hover/clicked), texto verbatim "Nova pasta", ícone
  `FolderPlus` (lucide-react, mapeamento por nome/significado).
  `src/components/celules/drop-list-item.tsx`.
- **`celule/cleanSpaceStorage/listSelection`** (`1436:20496`) — "lista de
  seleção de arquivos grandes dentro do fluxo de libherar espaço". 2
  variantes (checkbox vazio/marcado), cores confirmadas via asset SVG real
  exportado do nó (checkbox marcado `fill="#007E96"`, ícone `FileText`
  `stroke="#2B7FFF"`). Reconcilia
  [`organism/cleanSpaceStorage`](../stories/organisms/CleanSpaceStorage.mdx)
  (US-010): a lista "Arquivos grandes" passa a renderizar este `celule` em
  vez do `<li>` inline anterior (checkbox nativo sem estilo, quadrado
  placeholder sem ícone) — corrige a ausência do ícone `FileText` e do
  check real ao marcar. `src/components/celules/clean-space-list-selection.tsx`.
- **`celule/Pages/Lead`** (`1439:17048`) — "Titulo e subtitulo das
  paginas, foco em melhorar SEO". H1 40px (`text-black` literal) +
  legenda 14px. Componente genérico de cabeçalho de página, `title`
  obrigatório (sem default), `caption` com default Figma-confirmado da
  amostra. `src/components/celules/pages-lead.tsx`.

**`celule/nodoContextMenuItem`**: não duplicado — já coberto na US-016,
conforme critério de aceite desta US.

**Cores**: nenhum token novo em `src/index.css` além da correção de
`--brand-teal-dark` (derivado → Figma-confirmado, ver `Callout` acima).
Demais cores usadas (`#096`/`#009966` sucesso, `#bc3426` perigo, `#c38418`
aviso, `#e8476a` rosa, `#007e96` primária) já batiam exato com tokens
existentes.

**Terminologia (Regra 5)**: nenhum termo proibido nos 5 componentes —
"Acesso rápido" (via `StorageTierBadge`) e demais textos são
Figma-confirmados verbatim ou dados de amostra (nome de arquivo).

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.

## Dropdown de Label, FileList e FolderCard (US-022)

4 molecules com protocolo completo da Regra 11 (`get_design_context` real
+ screenshot Figma comparado elemento-a-elemento contra o Storybook
renderizado via Playwright, `http://localhost:6006/iframe.html?id=...`).

- **`molecule/DropdownSelect/Label`** (`1439:19650`) — instância única
  (não component set), sem eixo `Expanded`/`Disabled` confirmado, ao
  contrário de `DropdownSelectGroupBy`. Estado fechado 100%
  Figma-confirmado; abertura da lista (`expanded`/`labels`) é 🧩 inferida
  por analogia, compõe `atom/DropdownSelect/Label/Item` (`1444:21704`,
  "+ Nova Etiqueta") — átomo que ficava deferido desde a US-019 à espera
  desta molecule. `src/components/molecules/dropdown-select-label.tsx`.
- **`molecule/FileList`** (`1421:19200`) — **relocado de
  `organisms/file-list-item.tsx` para `molecules/file-list.tsx`**: o node
  Figma se chama literalmente `molecule/FileList`, a pasta antiga refletia
  categorização inferida (US-006, pré-Figma). Ganhou os 2 formats
  adicionais confirmados no component set (`storage`/`list-sm`, antes só
  `list` existia) e a prop `showIcon`. **Achado desta US**: a coluna
  "Proprietário" tinha uma classe residual `hidden sm:block` (nunca
  aparecia nos screenshots de verificação em viewport estreito) — sem
  base no Figma, removida.
- **`molecule/FileList/Header`** (`1421:19184`) — novo, 2 formats
  (`home`/`storage-status`), Figma-confirmado.
- **`molecule/FolderCard`** (`1421:18595`) — novo, `isExpanded`×`state`.
  **Achado desta US**: o export do Figma usa o mesmo vetor estático
  `arrow_drop_down` em `True`/`Off`, sem rotação — uma primeira versão do
  componente adicionava `-rotate-90` ao colapsar (inferido por lógica
  própria, não confirmado); removida após checagem elemento-a-elemento
  contra o screenshot (exatamente o tipo de invenção que a Regra 11 existe
  para pegar).
- **`organism/file-list-container`** reconciliado para compor
  `molecule/FileList` (`format="list-sm"`) em vez de duplicar ícone+seta
  via `lucide-react` — ganhou o ícone real `atom/Icon/ArrowRight` de
  quebra. Não compõe `FileListHeader` (contextos de tela diferentes,
  documentado em `FileListContainer.mdx` em vez de presumido).

**Ícones**: alça de arrasto de `FolderCard` (`GripVertical`) e as 3
miniaturas de arquivo (`FileTextIcon`/`ImageIcon`) são placeholders
`lucide-react` — `atom/ArchiveItem`/`atom/ImageItem`/
`molecule/FileArchive1`/`FileArchive2` seguem não implementados
(catalogados em `AGENTS.md`), fora do escopo desta US.

**Cores**: nenhum token novo em `src/index.css` — `bg-brand-teal-light`,
`text-brand-teal-dark`, `text-brand-secondary`/`-light` já existentes
bateram exato com os hex Figma-confirmados nos 4 componentes.

**`docs/conflicts.md`**: entrada do catálogo de ~15 `molecule/`-soltos
atualizada (3 componentes saíram da lista de não implementados); entrada
`organism/file-list-item` promovida de "sem correspondência" para
"`FileList` reconciliado com correspondência exata".

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.

## FileArchive1/2, Label e sub-peças do ArchiveBrowserModal (US-024)

5 molecules com protocolo completo da Regra 11 (`get_design_context` real
nos 5 nodes + screenshot Figma comparado elemento-a-elemento contra o
Storybook renderizado via Playwright).

- **`molecule/FileArchive1`/`FileArchive2`** (`1439:19655`/`1439:19656`)
  — os 2 nodes retornam a mesma anatomia exata e o mesmo asset SVG
  byte-a-byte (só o `id` do gradiente muda); implementados como um único
  componente (`FileArchiveCard`, props `label`/`interactive`) em vez de
  duas cópias da marcação. Substitui os placeholders `lucide-react`
  documentados como pendência desde a US-022 (`FolderCard.mdx`) — a troca
  do placeholder dentro de `FolderCard` em si **não** foi feita nesta US
  (fora do escopo pedido, evitar mudança não solicitada num componente já
  testado), registrada como follow-up em `FileArchive.mdx`.
- **`molecule/Label`** (`1421:18687`) — **achado crítico**: quase
  idêntico a `molecule/DropdownSelect/Label` (`1439:19650`, US-022), mas
  com os 2 estados que aquele node não tinha confirmado
  (`Expanded`/`Disabled`). Implementado como componente separado
  (`label.tsx`), não consolidado com `DropdownSelectLabel` — registrado
  em `docs/conflicts.md` para decisão humana. Reusa `FileTypeLabel`
  (Atoms/TypeLabel) e `DropdownSelectLabelItem` no estado `Expanded`.
  **Achado propagado**: confirma pela 1ª vez o hex do ponto de
  `atom/badge/TypeLabel` por tipo — `type-label.tsx` atualizado
  (`FILE_TYPE_DOT_CLASS`), removendo o gap "sem hex confirmado"
  documentado desde a reconciliação de atoms (2026-08-09). Ponto de
  `video` reusa o hex de `brand-pink-dark` ("Acesso rápido", Regra 3) —
  novo conflito de baixa urgência.
- **`molecule/ArchiveBrowserModal/ListItem`** (`1421:20896`) — ícone
  reproduzido do asset SVG real exportado (`ArchiveItemGlyph.svg`), mais
  fiel que o placeholder `lucide-react` ainda usado em `molecule/FileList`
  para o mesmo conceito (`atom/ArchiveItem`, segue não implementado como
  átomo formal). Slot de badge vazio nos 2 nodes-exemplo (`1421:18290`)
  omitido — Regra 11, nunca inventar elemento não confirmável.
- **`molecule/ArchiveBrowserModal/Search`** (`1485:21074`) — compõe
  `SearchInput` (já implementado, mesma Liquid Glass) + breadcrumb
  (`Icon name="ChevronRight"`) + `ArchiveBrowserModalListItem` dentro de
  uma moldura de 2 camadas (`drop-shadow` externo + `rounded-xl` interno
  com `bg-effect-glass-white-70`) — mais elaborada que a aproximação de
  camada única usada antes em `organism/ArchiveBrowserModal`.
- **`organism/ArchiveBrowserModal`** reconciliado: coluna direita
  (busca+breadcrumb+lista) trocada de markup duplicado/aproximado
  (`FileIcon` do `lucide-react`, fundo de camada única) para compor
  `ArchiveBrowserModalSearch` real.

**Cores**: nenhum token novo em `src/index.css` — `brand-teal`,
`brand-teal-dark`, `brand-pink-dark`, `zinc-700`/`zinc-950`/`zinc-500` já
existentes bateram exato com os hex Figma-confirmados. Único valor sem
token (`#ccced6`, fundo da busca mini de `Label`) usado literal, mesmo
critério já usado em `LabelDuplicated`/`nodoContextMenu`.

**`docs/conflicts.md`**: 2 achados novos (duplicidade `Label`/
`DropdownSelectLabel`, reuso de `brand-pink-dark` no ponto "Videos").

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.

## FAQ/FastLinks e planSelection (US-025)

Os 2 organisms restantes da lacuna de catálogo identificada em 2026-08-11
(ver seção acima), com destaque para `planSelection` — a página de
Configurações de Plano que a decisão de terminologia "Liberar Espaço"
(Regra 5, 2026-08-10) presumia existir.

- **`organism/FAQ/FastLinks`** (`1454:25006`) — ✅ aligned. "estrutura de
  links rápidos da aba de FAQ". Título "Links Rápidos" + 3 links
  (ícone + texto). Os 3 rótulos são Figma-confirmados em inglês ("API
  Documentation", "Community Forum", "Video Tutorials") — traduzidos para
  PT, mesmo critério de `organism/upload-popover`. Fonte Figma dos links é
  `Manrope` (violação da Regra 4, mesmo padrão já visto em
  `molecule/context-header`) — implementado com Figtree. Os 3 ícones foram
  **baixados de verdade** via `download_assets` (não aproximação
  `lucide-react`) e adicionados a `atom/Icon` (`MenuBook`, `Forum`,
  `Slideshow`) — mesmo padrão real-export já usado pelo restante de
  `ICONS`. `src/components/organisms/faq-fast-links.tsx`.
- **`organism/planSelection`** (`1454:25057`) — ✅ aligned. "card onde o
  usuário escolhe o plano desejado". Header "Assinatura", status da
  assinatura + toggle Mensal/Anual, 3 cards de plano (Starter/Pro/Max, Pro
  marcado como atual e destacado com `border-brand-teal`/
  `bg-brand-teal-light`, mesmo par de tokens de `FaqCallout` tom `info`),
  divisor, rodapé com botão "Editar pagamento". Botões usam
  `atom/PushButton` `variant="neutral"` (Regra 1). **Achado crítico**: o nó
  real **não contém nenhum botão "Liberar Espaço"** — a premissa da Regra 5
  de que essa tela daria acesso a `organism/cleanSpaceStorage` não se
  confirma no Figma. Registrado em `docs/conflicts.md` com urgência alta,
  não resolvido/inventado (Regra 11.4). Um segundo achado: `Rectangle 20`
  (`1454:25055`, 19×12px só-borda, solto no card raiz, sem descrição) foi
  identificado via `get_metadata` e **não implementado** — mesmo padrão de
  artefato residual já visto em `celule/chip/folder-tag`. Terceiro achado:
  vários textos Figma-confirmados em inglês numa tela majoritariamente em
  português ("Active", "Monthly"/"Annual", "Downgrade"/"Upgrade", rodapé
  com idioma misto na mesma frase) — traduzidos integralmente para PT.
  `src/components/organisms/plan-selection.tsx`.

**Verificação Regra 11**: `get_design_context` real em ambos os nós (não
só `get_metadata`), screenshot Playwright de cada story renderizada
(`http://localhost:6006/iframe.html?id=organisms-faqfastlinks--default` e
`...id=organisms-planselection--default`) comparado elemento a elemento
contra a resposta do Figma — nenhum elemento inventado, 2 elementos
(botão "Liberar Espaço" e `Rectangle 20`) explicitamente confirmados como
ausentes/não implementados em vez de presumidos.

**Cores**: nenhum token novo — `brand-teal`, `brand-teal-light` (aproximação
semântica de `#e0f0f2`, mais próxima do tema que introduzir hex novo),
`zinc-950`/`zinc-500`/`zinc-200`/`zinc-300` já existentes cobriram todos os
hex Figma-confirmados.

**`docs/conflicts.md`**: 5 achados novos (ausência do botão "Liberar
Espaço" em `planSelection`, elemento residual `Rectangle 20`, idioma misto
no rodapé de `planSelection`, rótulos em inglês em `FaqFastLinks`, fonte
Manrope em `FaqFastLinks`).

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.

## Auditoria de ponto-fixo (US-026)

Auditoria Regra 11 completa e paralela em **todos os 83 componentes
existentes** (não só os novos de US-015→US-025) — 27 atoms, 10 celules, 22
molecules, 24 organisms — despachada em 8 lotes concorrentes, cada um
executando o protocolo completo (nada reaproveitado de leituras antigas):
`get_design_context` real por componente (fileKey
`oFp2TLeCG4GJeCOFVhBvjg`, `skillNames=figma-design-to-code`) + screenshot
real via Playwright (`http://localhost:6006/iframe.html?id=...`,
script novo `design-system/scripts/screenshot-story.mjs`) + checklist
elemento-a-elemento contra a resposta do Figma.

**Contagem real de componentes: 83** (27+10+22+24), não os ≥90 que o
usuário esperava em 2026-08-11 — divergência registrada aqui em vez de
inflar a contagem para bater a expectativa (Regra 9). Não há mais nenhum
componente do "Catálogo completo" listado em `AGENTS.md` pendente de
implementação — todo node ID catalogado ali já tem `.stories.tsx`/`.mdx`
correspondente. Se o usuário ainda espera ≥90, a lacuna está em nodes do
Figma nunca catalogados em `AGENTS.md` (fora do escopo desta US, que era
auditar o que já existe) ou em variantes/sub-estados que este projeto conta
como 1 componente (ex.: `FileArchive1`/`FileArchive2` → 1 story
`FileArchive`; `FileTypeLabel`/`ScopeTypeLabel`/`DangerTypeLabel` → 1 story
`TypeLabel`).

**Resultado por lote** (protocolo Regra 11 completo em cada um dos 83):

| Lote | Escopo | Corrigidos | Sem divergência | Outro |
| --- | --- | --- | --- | --- |
| 1 | Atoms — ArchiveItem→KeepButton (14) | 9 | 5 | — |
| 2 | Atoms — LabelDuplicated→UploadFolder (13) | 0 | 13 | — |
| 3 | Celules — todos (10) | 2 | 8 | — |
| 4 | Molecules — ActionPill→FolderTagChip (11) | 5 | 6 | 1 conflito novo (FolderTagChip) |
| 5 | Molecules — Label→ViewModeToggle (11) | 1 | 10 | — |
| 6 | Organisms — ArchiveBrowserModal→DropdownMenu (8) | 5 | 3 | — |
| 7 | Organisms — FaqFastLinks→OrganizePanelDropZone (8) | 4 | 4 | — |
| 8 | Organisms — PlanSelection→UploadPopover (8) | 4 | 3 | 1 pulado (SearchToolbar, sem node Figma) |
| **Total** | **83** | **30** | **52** | **1 conflito novo, 1 pulado** |

**Correções reais aplicadas (30 componentes, resumo por tipo de bug —
detalhe completo nos `.mdx` de cada componente)**:
- **Elemento inventado removido**: hover/press pill circular inexistente no
  Figma em `ConfirmButton`/`DeleteButton`/`KeepButton` (herdada de
  `icon-action-button.tsx`); borda inventada em `FolderTagChip`.
- **Elemento Figma-confirmado que faltava, adicionado**: `IconBase` usava
  um glifo genérico totalmente errado (Figma real: ícone de
  expandir/colapsar sidebar) — substituído pelo SVG real exportado; barra
  de busca + ícone de tipo de arquivo ausentes em
  `SaveLongTermFileStorage`; botão "+ Adicionar" ausente em `Sidebar`;
  ícone de nuvem ausente em `SidebarToggle` (propaga para `Sidebar` e
  `StorageSidebar`); ícone de tipo de arquivo ausente nas linhas de
  `UploadPopover`; ícones de navegação + seção "Etiquetas" ausentes em
  `ArchiveBrowserModal`; ícone/chevron/linha filha ausentes na árvore de
  `DialogTemplateReviewModal`; forma de balão Liquid Glass inteira (com
  ponta) ausente em `InfoPopover` (renderizava como retângulo simples); nó
  de filtro "Filtro: Formato" ausente em `OrganizeFreeModeCanvas`.
- **Cor/token errado corrigido para o valor Figma-confirmado**: `StorageBar`
  usava `brand-pink-dark` em vez de `brand-pink-light` (bug real de
  paridade com `StorageStatusCurrent`, que já usava o tom certo);
  `CleanSpaceStorage` usava azul inventado (`#2b7fff`) em vez de
  `brand-teal`/`brand-teal-light` no ícone de arquivo; `DropdownMenu` usava
  hex descontinuado (`#ac3a2e`) em vez do token `--destructive`
  (`#bc3426`); `FolderTagChip` usava `bg-brand-teal/10`/`text-brand-teal`
  em vez de `brand-teal-light`/`brand-teal-dark`.
- **Texto/copy errado corrigido**: `DialogSaveOrganizationModal` tinha a
  descrição do card "Cronológico" trocada pela do card 3, e a descrição de
  "Por tipo de arquivo" truncada; `DropdownSelectGroupBy` tinha a ordem das
  4 opções errada.
- **Clipping de layout corrigido**: `ArchiveItem`/`ImageItem` com largura
  fixa cortando o nome do arquivo; `DropdownSelectLabelItem` sem
  `shrink-0` cortando "+ Nova Etiqueta"; `FileListHeader` com a borda
  inferior no lugar errado (envolvendo 2 linhas em vez de 1).
- **Bug de estado/interação corrigido**: chevron de `FreeModeItemNode`/
  `FreeModeOutputNode` com rotação invertida entre colapsado/expandido;
  `ClearButton` aplicando a pill de hover a variantes que não a têm no
  Figma; `Header`'s `action-pill` não aplicando a opacidade 50% confirmada;
  `OrganizePanelDropZone` usando ícone `lucide-react` aproximado em vez do
  asset real, visível no estado errado; `InfoPopover` com labels
  "AC"/"AL" trocados de ordem + texto dinâmico inventado sem base no Figma
  + tamanho de fonte errado (12/14px em vez de 10px) + divisores ausentes;
  `FirstUploadSymbol` com o ícone em ~24% do diâmetro do círculo em vez dos
  ~32% confirmados.

**2 conflitos novos registrados em `docs/conflicts.md`** (não resolvidos
silenciosamente, aguardando decisão humana): `FolderTagChip` estado
`Default` tem composição ambígua no Figma (sem ícone/rótulo visível, ao
contrário da implementação atual — urgência média); `OrganizeFreeModeCanvas`
tem 2 elementos reais catalogados mas não implementados por
orçamento/tamanho (linhas conectoras tracejadas + painel flutuante de
edição de filtro — urgência média, pronto para uma US dedicada).

**1 entrada obsoleta em `docs/conflicts.md` corrigida para `resolvida`**:
a entrada de `atom/Icon` ainda descrevia glifos `lucide-react`
aproximados — uma US anterior já havia trocado por ~100 SVGs reais
exportados do Figma, achado só percebido nesta auditoria porque o lote
1 fez um `get_design_context`/spot-check novo em vez de confiar na nota
antiga.

**⚠️ RECOMENDAÇÃO EXPLÍCITA (critério de aceite desta US): esta passada
CORRIGIU divergências reais (30 de 83 componentes, ~36%) — pelo critério
de ponto-fixo pedido pelo usuário ("repetir até uma passada inteira não
achar divergência nova"), isto NÃO é uma passada limpa. Uma nova rodada
completa de US-026 (reset `passes:false` em `scripts/prd.json`) é
recomendada antes de considerar o catálogo de 83 componentes em fidelidade
total — o volume de bugs reais nesta passada (elementos inventados/
ausentes, cores erradas, clipping, copy trocada) sugere que uma segunda
passada pode achar mais, mesmo depois destas correções.**

- `cd design-system && npx tsc --noEmit` — sem erros (verificado após
  consolidar os 8 lotes).
- `cd design-system && npm run build-storybook` — sucesso (verificado após
  consolidar os 8 lotes).

## Auditoria de ponto-fixo, 2ª passada (US-026, 2026-08-12)

Reset de `passes:false` (US-026) motivado pela recomendação explícita da
passada anterior (2026-08-11, seção acima): aquela rodada **corrigiu** 30 de
83 componentes, o que pelo critério de ponto-fixo do usuário ("repetir até
uma passada inteira não achar divergência nova") não contava como passada
limpa. Esta é a 2ª passada completa, protocolo idêntico: 8 lotes
concorrentes, cada um com `get_design_context` real (fileKey
`oFp2TLeCG4GJeCOFVhBvjg`, `skillNames=figma-design-to-code`) + screenshot
real via Playwright (`scripts/screenshot-story.mjs`) + checklist
elemento-a-elemento — **nada reaproveitado da passada anterior**, todos os
83 componentes reabertos do zero.

**Contagem real de componentes: 83** (27 atoms + 10 celules + 22 molecules +
24 organisms) — inalterada desde a 1ª passada; nenhum componente novo
catalogado em `AGENTS.md` desde então, consistente com o achado já registrado
de que a divergência para a expectativa de "≥90" do usuário (2026-08-11)
está em nodes do Figma nunca catalogados, fora do escopo desta auditoria.

**Resultado por lote:**

| Lote | Escopo | Corrigidos | Sem divergência | Outro |
| --- | --- | --- | --- | --- |
| 1 | Atoms — ArchiveItem→KeepButton (14) | 1 (doc, `Icon.mdx` desatualizado) | 13 | — |
| 2 | Atoms — LabelDuplicated→UploadFolder (13) | 3 (PlusButton, Tag, TypeLabel) | 10 | 1 achado estendido (`TypeLabel kind="other"`) |
| 3 | Celules — todos (10) | 1 (CleanSpaceListSelection) | 9 | — |
| 4 | Molecules — ActionPill→FolderTagChip (11) | 0 | 10 | 1 conflito novo (DropdownSelectLabel), 1 reconfirmado sem alteração (FolderTagChip) |
| 5 | Molecules — Label→ViewModeToggle (11) | 3 (StorageBar, StorageStatus, ViewModeToggle) | 7 | 1 conflito novo (NodoContextMenu) |
| 6 | Organisms — ArchiveBrowserModal→DropdownMenu (8) | 4 (CardLogin, CardNeedMoreHelp, DialogSaveOrganizationModal, DialogTemplateReviewModal) | 4 | — |
| 7 | Organisms — FaqFastLinks→OrganizePanelDropZone (8) | 3 componentes / 4 correções (InfoPopover; OrganizeFreeModeCanvas; OrganizePanelDropZone×2) | 5 | 2 conflitos novos (FreeModeItemNode texto truncado, ícone `FileList` linha 2) |
| 8 | Organisms — PlanSelection→UploadPopover (8) | 2 (PreviewPane, Sidebar) | 5 | 1 evidência adicional (StorageSidebar, conflito já resolvido), 1 sem node Figma (SearchToolbar, mantido inferido) |
| **Total** | **83** | **17 componentes / 18 correções pontuais** | **63** | **4 conflitos novos, 1 achado estendido, 2 reconfirmações** |

**Correções reais aplicadas nesta passada (resumo por tipo — detalhe
completo nos `.mdx`/commits de cada componente)**:
- **Regressão pega**: `atom/Tag` tinha voltado a `text-[0.5rem]` (8px),
  abaixo do piso mínimo de exceção da Regra 4 — a correção da US-011
  ("`Type/Tag` corrigido de 8px para 11px") nunca chegou ao arquivo real ou
  regrediu depois. Corrigido de novo para `text-[0.6875rem]` (11px).
- **Elemento inventado removido**: pílula de hover/press inexistente no
  Figma em `atom/PlusButton` (mesmo padrão já corrigido em
  `ConfirmButton`/`DeleteButton`/`ClearButton`/`KeepButton` numa US
  anterior, mas que tinha ficado pendente neste átomo).
- **Elemento Figma-confirmado que faltava, adicionado**: moldura tracejada
  ausente no card "Modo livre" de `DialogSaveOrganizationModal`; conectores
  tracejados + painel flutuante de edição de filtro inteiro em
  `OrganizeFreeModeCanvas` (gap já catalogado como conhecido desde a 1ª
  passada, implementado agora com orçamento disponível); itens soltos reais
  ausentes no estado `filled` de `OrganizePanelDropZone`; `PreviewPane`
  usava um placeholder textual em vez do `molecule/thumbnail-large` real
  (já implementado, nunca consumido por este organism).
- **Cor/token errado corrigido para o valor Figma-confirmado**: ícone de
  arquivo de `celule/cleanSpaceStorage/listSelection` tinha regredido de
  azul (`#2b7fff`) Figma-confirmado para teal; `TypeLabel kind="other"`
  usava `zinc-400` genérico em vez do `brand-pink-light` real; direção do
  mapeamento tier→cor em `StorageStatus` estava invertida (image/documento
  deveriam ser teal, vídeo/outro deveriam ser rosa — estava ao contrário,
  divergindo da própria legenda `FileTypeLabel` abaixo da barra); ordem de
  tom em `StorageBar` (`quick-access`) invertida; texto do item selecionado
  de `ViewModeToggle` usava branco em vez de `brand-teal-light`.
- **Tipografia abaixo do piso corrigida**: labels "E-mail"/"Senha" em
  `CardLogin`, botão "Falar com o suporte" em `CardNeedMoreHelp`, botões
  "Renomear"/"Editar" em `DialogTemplateReviewModal` — todos a 14px
  (`text-sm`), corrigidos para 16px (`text-base`) pela mesma política já
  travada para `Type/Button/MD` no átomo `PushButton` (US-011): rótulo de
  botão/ação a 14px é violação real do piso da Regra 4, não exceção.
- **Clipping de layout corrigido**: input de nome do template em
  `OrganizePanelDropZone` cortava "Fotos do casamento" sem elipse
  (`w-40` fixo → `flex-1 min-w-0`).
- **Estilo de estado corrigido**: itens de navegação inativos em
  `organism/Sidebar` renderizavam em contraste total com `text-brand-teal`
  no ativo (cor nunca Figma-confirmada) — corrigido para `opacity-50` nos
  inativos e `bg-zinc-100`+`opacity-100` no ativo, todos com `text-zinc-900`.
- **Copy corrigida**: `InfoPopover` story `Metadata` usava `"Hoje, 15:00"`
  (com espaço) em vez do literal Figma `"Hoje,15:00"`.
- **Documentação desatualizada corrigida (sem mudança de código)**:
  `Icon.mdx` ainda descrevia fallback `lucide-react` por aproximação de
  nome como se fosse o estado atual — o código já usa ~100 SVGs reais
  exportados desde uma correção anterior; a entrada correspondente em
  `docs/conflicts.md` já estava marcada "resolvida", só a prosa do `.mdx`
  não tinha sido atualizada.

**4 conflitos novos registrados em `docs/conflicts.md`** (não resolvidos
silenciosamente, ambiguidade real do lado Figma ou da ferramenta MCP,
aguardando decisão humana): `molecule/DropdownSelect/Label` (opacidade 32%
de nome de variável trocado, radius↔opacity); `molecule/nodoContextMenu`
(texto literal do `atom/buttonAdd` é "Label" no Figma, implementado como
"Adicionar Regra" por descrição semântica); `celule/.../FreeMode/ItemNode`
(texto de filtro truncado — "Filtro" em vez de "Filtro: Grande"/"Filtro:
Formato" — achado ao auditar `OrganizeFreeModeCanvas`, fora do escopo de
edição do organism); `molecule/FileList` (código-fonte e screenshot da
mesma chamada `get_design_context` divergem sobre o ícone da 2ª linha de
exemplo — inconsistência da ferramenta, não do componente). **1 achado
estendido**: `atom/badge/TypeLabel` — o reuso do par de cor "Acesso rápido"
(Regra 3) já logado para `kind="video"` se confirma agora também em
`kind="other"`, entrada existente atualizada em vez de duplicada. **2
conflitos existentes reconfirmados sem alteração** (releitura fresca bate
com a nota já registrada): `celule/chip/folder-tag` (estado `Default`
ambíguo) e `organism/CardLogin` (2 nós residuais em Manrope).

**⚠️ RECOMENDAÇÃO EXPLÍCITA (critério de aceite desta US): esta 2ª passada
CORRIGIU divergências reais (17 de 83 componentes, ~20%, contra 30 de 83
~36% na 1ª passada) — pelo critério de ponto-fixo pedido pelo usuário
("repetir até uma passada inteira não achar divergência nova"), isto AINDA
NÃO é uma passada limpa, embora mostre convergência real (quase metade do
volume de bugs da passada anterior, incluindo pelo menos 1 regressão real
pega — `atom/Tag` — o que confirma que repetir a auditoria continua
encontrando problemas genuínos, não ruído). Uma 3ª passada completa de
US-026 (reset `passes:false` em `scripts/prd.json`) é recomendada antes de
considerar o catálogo de 83 componentes em fidelidade total.**

- `cd design-system && npx tsc --noEmit` — sem erros (verificado após
  consolidar os 8 lotes).
- `cd design-system && npm run build-storybook` — sucesso (verificado após
  consolidar os 8 lotes).

## Auditoria de ponto-fixo, 3ª passada (US-026, 2026-08-12)

Reset de `passes:false` motivado pela recomendação explícita da 2ª passada
(seção acima): aquela rodada corrigiu 17 de 83 componentes (~20%), o que
pelo critério de ponto-fixo do usuário ("repetir até uma passada inteira
não achar divergência nova") não contava como passada limpa. Esta é a 3ª
passada completa. Protocolo idêntico às 2 anteriores — 8 lotes
concorrentes, cada um com `get_design_context` real (fileKey
`oFp2TLeCG4GJeCOFVhBvjg`, `skillNames=figma-design-to-code`) + screenshot
real via Playwright (`scripts/screenshot-story.mjs`, Storybook já rodando
em `localhost:6006`) + checklist elemento-a-elemento — nada reaproveitado
da 2ª passada, todos os 83 componentes reabertos do zero. O lote 5
(molecules Label→ViewModeToggle) subdividiu seu próprio escopo em 3
subgrupos concorrentes (4+4+3 componentes) para acelerar, mesmo protocolo
aplicado em cada um.

**Contagem real de componentes: 83** (27 atoms + 10 celules + 22 molecules
+ 24 organisms) — inalterada desde a 1ª passada.

**Resultado por lote:**

| Lote | Escopo | Corrigidos | Sem divergência | Outro |
| --- | --- | --- | --- | --- |
| 1 | Atoms — ArchiveItem→KeepButton (14) | 0 (1 doc, `Icon.mdx` desatualizado) | 14 | — |
| 2 | Atoms — LabelDuplicated→UploadFolder (13) | 1 (StorageTierBadge) | 12 | — |
| 3 | Celules — todos (10) | 0 | 10 | 1 conflito existente aprofundado (FreeModeItemNode, causa raiz identificada) |
| 4 | Molecules — ActionPill→FolderTagChip (11) | 0 (1 comentário) | 11 | 3 conflitos existentes reconfirmados (FolderTagChip, DropdownSelectLabel, FileList) |
| 5 | Molecules — Label→ViewModeToggle (11, 3 subgrupos) | 8 (Notification, PopoverNotification, NodoContextMenu, RadioButton, StorageStatus, SearchInput, ThumbnailLarge, ViewModeToggle) | 3 (Label, StorageBar, StorageStatusCurrent) | 1 conflito existente reconfirmado (NodoContextMenu "Label"/"Adicionar Regra") |
| 6 | Organisms — ArchiveBrowserModal→DropdownMenu (8) | 4 (ArchiveBrowserModal, CardLogin, DialogTemplateReviewModal, DropdownMenu) | 4 | 1 inconsistência de leitura resolvida por tie-break (CleanSpaceStorage ícone azul, ver abaixo) |
| 7 | Organisms — FaqFastLinks→OrganizePanelDropZone (8) | 3 (Header, OrganizeFreeModeCanvas, OrganizePanelDropZone) | 5 | — |
| 8 | Organisms — PlanSelection→UploadPopover (8) | 1 (PreviewPane) | 7 | 1 conflito novo (PreviewPane, tag preenchida vs. regra de "perigo só texto") |
| **Total** | **83** | **17 componentes** | **66** | **1 causa raiz identificada, 4 conflitos reconfirmados, 1 conflito novo, 1 inconsistência resolvida por tie-break** |

**Correções reais aplicadas nesta passada (17 componentes — detalhe
completo nos `.mdx` de cada componente)**:
- **Bug de dimensão/alinhamento**: `atom/StorageTierBadge` sem largura fixa
  fazia "Acesso rápido" (~87px) e "Longo prazo" (~79px) desalinharem —
  corrigido para `w-[84px]` (Figma-confirmado, ambas variantes idênticas).
- **Token de radius errado**: `molecule/Notification` e
  `molecule/PopoverNotification` usavam `rounded-2xl` em vez do
  `rounded-xl` (16px) Figma-confirmado; `molecule/nodoContextMenu` usava
  `rounded-lg`/`rounded-md` no toggle "E"/"OU" em vez de
  `rounded-md`/`rounded-sm` Figma-confirmado.
- **Piso de acessibilidade tipográfico (Regra 4) regredido/nunca aplicado**:
  `molecule/RadioButton` (labels "Pessoal"/"Guardados" a 14px, corrigido
  para 16px, mesma política já travada para `PushButton`/US-011);
  `organism/Header` (botões "Organizar"/"Guardar" sobrescreviam
  `PushButton` com `text-sm` via `className`, derrotando silenciosamente o
  piso de 16px que o próprio átomo já garante por padrão — achado novo,
  `Header` não estava na lista de 8 organisms já catalogados com esse gap
  aceito); `organism/DialogTemplateReviewModal` (badges de severidade
  "Duplicado"/"Incongruente"/"OK" a 14px, corrigido para 16px).
- **Elemento Figma-confirmado ausente, adicionado**: `molecule/StorageStatus`
  faltava o item de legenda "XX em uso" (ponto teal) nos painéis
  "Corrente"/"Longo Prazo" — só "XX Livre" era renderizado; adicionada prop
  `usedLabel`. `organism/PreviewPane` faltava a distinção visual
  neutro/perigo nas tags de "Etiquetas" (Figma tem uma tag "Urgente"
  preenchida em vermelho via `atom/badge/TypeLabel,Style=Alert`) — corrigido
  usando o átomo `DangerTypeLabel` já existente mas nunca consumido aqui.
- **Elemento inventado removido/corrigido**: `organism/ArchiveBrowserModal`
  aplicava `text-brand-teal` ao item de sidebar inteiro (ícone+rótulo) do
  item ativo "Pessoal", quando o Figma confirma que só o ícone da pasta é
  teal (rótulo permanece escuro) e que itens inativos usam `opacity-50`
  (ausente antes); `organism/DropdownMenu` tinha "Excluir organização" com
  texto vermelho (`--destructive`, aplicado por analogia numa passada
  anterior) — nó real confirma texto neutro igual aos irmãos, sem token de
  perigo; revertido.
- **Bug de interação/estado invisível**: `molecule/SearchInput` calculava
  corretamente o anel de foco/erro (`box-shadow` presente no DOM) mas o
  wrapper tinha `overflow-hidden` cortando o anel inteiro, tornando os
  estados `Focused`/`wrongValue` visualmente idênticos ao `Default` — bug
  só detectável com teste interativo real (`:focus-visible`), não só
  screenshot estático; `overflow-hidden` removido.
- **Cor/token errado corrigido**: `molecule/ThumbnailLarge` usava
  `text-zinc-600` no rótulo de página em vez do `text-zinc-700`
  Figma-confirmado (mesmo token já usado no nome do arquivo, no mesmo
  cabeçalho); `organism/OrganizeFreeModeCanvas` badge "Arquivos" usava
  `bg-zinc-200 text-zinc-600` em vez de `bg-zinc-600 text-brand-teal-light`;
  `organism/OrganizePanelDropZone` badge de modo ("Data"/"Projeto"/"Tipo")
  usava branco (`text-brand-teal-foreground/80`) em vez de
  `brand-teal-light`/13px.
- **Espaçamento errado corrigido**: `molecule/ViewModeToggle` usava
  `gap-1.5` (6px) entre ícone e rótulo, Figma confirma `gap-2` (8px) em
  todas as 3 variantes.
- **Texto/copy errado corrigido**: `organism/CardLogin` divisor "OU"
  renderizava `text-xs`/`font-medium` (12px), Figma confirma `text-[16px]`;
  `organism/DialogTemplateReviewModal` rótulo "Taxonomia Sugerida:" estava
  fixo para todos os itens, mas o Figma só usa esse rótulo no 1º item
  ("Duplicado") — os outros 2 usam "Template Sugerido:" (prop
  `suggestedPathLabel` adicionada).

**1 inconsistência de leitura entre lotes, resolvida por tie-break direto**
(não um conflito real do Figma): o lote 6 (organisms) leu o ícone de
arquivo de `celule/cleanSpaceStorage/listSelection` como teal a partir de
uma instância dentro de `organism/cleanSpaceStorage`, contradizendo a
releitura do próprio lote 3 (celules) confirmando azul — um
`get_screenshot` direto no nó `1439:16908` (feito pelo orquestrador desta
consolidação) confirma visualmente ícones azuis (`#2b7fff`), consistente
com o código atual. Nenhuma mudança de código necessária; a leitura "teal"
foi um erro de leitura pontual do lote 6, documentado em
`docs/conflicts.md` como resolvido.

**2 conflitos novos registrados em `docs/conflicts.md`** (não resolvidos
silenciosamente, aguardando decisão humana): `organism/PreviewPane`
("Urgente" como tag preenchida em vermelho, tensão real com a leitura desta
mesma auditoria de que "perigo é sempre texto-only" — leitura derivada só
dos botões de `cleanSpaceStorage`, pode ser um segundo tratamento válido
por contexto); causa raiz aprofundada (não é conflito novo, é o mesmo já
existente com mais detalhe) do texto truncado em
`celule/.../FreeMode/ItemNode` — o `celule` em si está correto, o gap é
`organism/OrganizeFreeModeCanvas` não ter como sobrescrever label/subtítulo
por instância.

**4 conflitos existentes reconfirmados sem alteração** (releitura fresca
bate com a nota já registrada, nenhum resolvido por inferência):
`celule/chip/folder-tag` (estado `Default` ambíguo), `molecule/DropdownSelect/Label`
(opacidade 32%/nome de variável trocado), `molecule/FileList` (inconsistência
código/screenshot da mesma chamada MCP), `molecule/nodoContextMenu`
("Label" vs. "Adicionar Regra").

**⚠️ RECOMENDAÇÃO EXPLÍCITA (critério de aceite desta US): esta 3ª passada
CORRIGIU divergências reais (17 de 83 componentes, ~20%, mesmo volume
absoluto da 2ª passada, mas composição diferente) — pelo critério de
ponto-fixo pedido pelo usuário ("repetir até uma passada inteira não achar
divergência nova"), isto AINDA NÃO é uma passada limpa. O padrão de bugs
mudou de categoria entre passadas (1ª: elementos inventados/ausentes
grosseiros; 2ª: regressões + cores/tipografia; 3ª: tokens de radius,
espaçamento fino, um bug de estado só detectável via teste interativo real
em vez de screenshot estático, e um piso de acessibilidade derrotado
silenciosamente por `className` num organism não catalogado antes) — sinal
de que os lotes estão ficando mais rigorosos a cada rodada (checagens
interativas, pixel-scan, tie-break com `get_screenshot` dedicado), não de
que o catálogo está "quase limpo e só sobra ruído". Uma 4ª passada completa
de US-026 (reset `passes:false` em `scripts/prd.json`) é recomendada antes
de considerar o catálogo de 83 componentes em fidelidade total.**

- `cd design-system && npx tsc --noEmit` — sem erros (verificado nesta
  passada: limpo).
- `cd design-system && npm run build-storybook` — sucesso (verificado
  nesta passada: build completo sem erros).

## Auditoria de ponto-fixo, 4ª passada (US-026, 2026-08-13)

Reset de `passes:false` motivado pela recomendação explícita da 3ª passada
(seção acima). Esta 4ª passada reabriu o catálogo atual com a mesma
contagem real das passadas anteriores: **83 componentes** (27 atoms + 10
celules + 22 molecules + 24 organisms), com **258 estados/variantes
renderizáveis** capturados via Playwright a partir de
`http://localhost:6006/iframe.html?id=<story-id>&viewMode=story`.

Manifesto desta passada: `design-system/docs/audits/us-026-pass4.md`.
Artefatos regeneráveis: `design-system/.audit-artifacts/us-026-pass4/`
(258 PNGs + `story-screenshots.json` com hashes SHA-256). A chamada Figma
fresca foi refeita nos nós impactados pela correção:
`organism/MainCanvas/Organization/FreeMode` (`1439:16906`) e
`celule/MainCanvas/Organization/FreeMode/ItemNode` (`1421:20108`), sempre
com `skillNames=resource:figma-design-to-code`.

**Achado material desta passada (corrigido agora):**
`organism/OrganizeFreeModeCanvas` ainda renderizava as duas instâncias de
filtro com os defaults curtos do celule (`"Filtro"` + `"Size "`/`"Type"`)
em vez dos textos Figma-confirmados na instância composta:
**"Filtro: Grande"** / **"Size > 1.0 GB"** e **"Filtro: Formato"** /
**"Type = .mp4, .mov"**. Correção aplicada: `FreeModeItemNode` ganhou
overrides opcionais `label`/`subtitle`, e `OrganizeFreeModeCanvas` passa os
dois pares de texto específicos. Re-verificação visual pós-fix:
`.audit-artifacts/us-026-pass4/screenshots/organisms-organizefreemodecanvas--default.png`
(`sha256:24e454a0081b289109b2a6d068c965d8e23af85047690644454b784e0025a5eb`)
mostra os títulos em uma linha e os subtítulos completos; a releitura do
node base `1421:20108` confirma que os defaults curtos do celule continuam
corretos para o componente isolado.

**Resultado:** NON-CLEAN. Pelo protocolo de ponto-fixo pedido pelo usuário,
qualquer achado material novo, mesmo corrigido na hora e re-verificado,
torna a passada não limpa. Uma **5ª passada completa** de US-026 é
recomendada antes de qualquer tentativa de emitir `<fixed-point>CLEAN</fixed-point>`.

- `bash scripts/gate.sh design-system` — sucesso; executou
  `cd design-system && npx tsc --noEmit` e
  `cd design-system && npm run build-storybook`.

### Retomada de molecules da 12ª passada ativa (US-026, 2026-08-13)

Esta retomada continuou a partir de `Molecules/ActionPill`, sem reiniciar a
passagem. Artefatos ativos recalculados: **85 componentes** (29 atoms + 10
celules + 22 molecules + 24 organisms), **275 estados/variantes
renderizáveis** (119 atoms + 36 celules + 71 molecules + 49 organisms),
**0 screenshots faltantes**. Com as 5 páginas de tokens doc-only, Storybook
segue com **90 páginas documentadas** no top level.

Manifesto atualizado: `design-system/docs/audits/us-026-pass12.md`.
Artefatos ativos: `design-system/.audit-artifacts/us-026-active/`
(`story-index.json`, `screenshot-results.json`, `coverage-summary.json` e
PNGs). `coverage-summary.json` foi recalculado contra pass11 e agora marca
`hashDiffCount=62`.

**Achados materiais desta retomada (corrigidos agora):**
`Molecules/ActionPill` (`1421:19027`) media 116px no iframe apesar do Figma
confirmar 104px; corrigido para `w-[104px]`.
`Molecules/ArchiveBrowserModal/ListItem` (`1421:20896`) era capturado em
452px nos dois estados standalone; corrigidas as stories para 650px
(`ArchiveFileRow`) e 600px (`ArchiveSelectableRow`).
`Molecules/ArchiveBrowserModal/Search` (`1485:21074`) media 452x270 e não
preservava a área vazia do painel; corrigido para root 452x361 e painel
289px.
`Molecules/ContextHeader` (`1421:19589`) usava texto de exemplo na story;
corrigido para o literal Figma "X itens selecionado", preservando a exceção
travada de fonte Manrope vs. Figtree.
`Molecules/DropdownSelectGroupBy` (`1421:18719`) usava `opacity-50` e media
51px no disabled; corrigido para 54px e `opacity-[0.32]`.
`Molecules/FileArchive` (`1439:19655`, `1439:19656`) renderizava o glifo em
44x38.9px; corrigido para 45.675x40.405px.

Componente conferido sem nova divergência material nesta retomada:
`Molecules/DropdownSelectLabel` (`1439:19650`), mantendo a exceção humana já
registrada para a opacidade 0.32 do node único.

**Resultado:** NON-CLEAN e ainda incompleto para CLEAN estrito. Como houve
correções materiais, uma nova passada completa continua obrigatória antes de
qualquer `<fixed-point>CLEAN</fixed-point>`. A próxima retomada da passagem
12 deve continuar pelo primeiro componente sem checklist fresco após
`Molecules/FileArchive`, começando em `Molecules/FileList` (`1421:19200`).

### Retomada adicional da 12ª passada ativa (US-026, 2026-08-13)

Passada ativa mantida em `design-system/.audit-artifacts/us-026-active/`;
não foi iniciada uma nova passada. O catálogo atual passou a **85
componentes** e **270 stories renderizáveis** após adicionar estados de
documentação confirmados pelo Figma (`SidebarTagsItem/Hover`,
`Tag/PrimaryHover`, `VideoItem/FaviconHeaderThumbnail`). Com as 5 páginas
doc-only de tokens, Storybook segue com **90 páginas documentadas** no top
level, e os estados renderizáveis aumentaram por fidelidade de variante.

Evidência fresca desta retomada:
`get_design_context` com `skillNames=resource:figma-design-to-code` para
`Atoms/SelectState`, `Atoms/SidebarTagsItem`, `Atoms/StorageTierBadge`,
`Atoms/Switch`, `Atoms/Tag`, `Atoms/TagOrgMode`,
`Atoms/TagOrgTemplateName`, `Atoms/TypeLabel`, `Atoms/UploadFolder` e
`Atoms/VideoItem`; screenshots Playwright recapturados para todos os
stories impactados. `screenshot-results.json`, `story-index.json` e
`coverage-summary.json` foram recalculados: **270 stories**, **0 faltantes**,
`hashDiffCount=43`.

Achados materiais corrigidos nesta retomada: `SidebarTagsItem` não tinha
evidência capturável da variante `Hover`; `Tag` não cobria a matriz Figma
4×2 nem o hover Figma-confirmado; `TagOrgTemplateName` tinha largura de
input maior que o hug-content do Figma; `UploadFolder` era ampliado para
32×32 na story apesar do glifo Figma ser 16×16; `VideoItem` faltava a
variante `favicon_header_Thumbnail`.

Achado material ainda pendente dentro da mesma passada ativa: `Atoms/TypeLabel`
(`1421:18415`) retorna uma matriz Figma maior (`type/style/state`, incluindo
`Hover`, `SelectedHover`, `SelectedPressed`) do que as stories/componentes
atuais representam. O conflito de cor `video`/`other` segue como exceção
travada em `docs/conflicts.md`; a lacuna de cobertura da matriz de estados
não está travada. A próxima execução deve retomar **em `Atoms/TypeLabel`**,
sem recapturar tudo, e só avançar para `Celules/Callout` depois de fechar
essa divergência.

**Resultado:** NON-CLEAN e incompleto para CLEAN estrito. A passagem 12
teve novas correções materiais e ainda não completou todos os checklists
elemento-a-elemento do catálogo completo; pelo protocolo de ponto-fixo,
outra passada completa será obrigatória depois que a passada ativa fechar.

- `cd design-system && npx tsc --noEmit` — sem erros após as correções desta
  retomada.
- `cd design-system && npm run build-storybook` — sucesso após as correções
  desta retomada (warnings existentes de CSS/chunk size, sem falha).
- `bash scripts/gate.sh design-system` — sucesso; executou TypeScript e
  build Storybook no estado atual.

## Auditoria de ponto-fixo, 5ª passada (US-026, 2026-08-13)

Reset de `passes:false` motivado pela 4ª passada NON-CLEAN. Esta 5ª
passada encontrou um gap material de catálogo: `atom/CloseButton`
(`1421:19008`) já existia no código e era Figma-confirmado/consumido por
`Notification` e `PopoverNotification`, mas não tinha story/MDX própria e
ficou fora dos 83 componentes do pass4. `get_design_context` fresco no nó
real confirmou 2 tamanhos (`SM`/`MD`) e 3 estados (`Idle`/`Hover`/`Pressed`);
o código anterior só expunha o asset `SM`/`Idle`.

Correção aplicada nesta passada: `CloseButton` ganhou props `size`/`state`,
6 SVGs reais exportados do Figma e documentação `Atoms/CloseButton` com
checklist elemento-a-elemento. O catálogo público agora tem **84 componentes**
(28 atoms + 10 celules + 22 molecules + 24 organisms) e **261 estados/
variantes renderizáveis** capturados via Playwright em
`design-system/.audit-artifacts/us-026-pass5/`.

Manifesto desta passada: `design-system/docs/audits/us-026-pass5.md`.
Artefatos regeneráveis: `design-system/.audit-artifacts/us-026-pass5/`
(261 PNGs + `story-screenshots.json` com hashes SHA-256).

**Resultado:** NON-CLEAN. Pelo protocolo de ponto-fixo, a correção material
de catálogo obriga uma **6ª passada completa** antes de qualquer tentativa
de emitir `<fixed-point>CLEAN</fixed-point>`. Observação adicional: 84
componentes públicos + 5 páginas de tokens = 89 páginas documentadas, ainda
abaixo da expectativa textual da US ("bater ou superar 90"); a próxima
passada deve reconciliar essa contagem contra o catálogo Figma e decidir se
helpers internos como `FaqCallout`, `icon-action-button` e `ui/button`
devem continuar fora do catálogo público.

## Auditoria de ponto-fixo, 6ª passada (US-026, 2026-08-13)

Reset de `passes:false` motivado pela 5ª passada NON-CLEAN. Esta 6ª
passada reabriu o catálogo público e reconciliou a contagem contra
`get_metadata` fresco da página Figma `✏️Design Pattern` (`1421:17272`).

**Achado material desta passada (corrigido agora):** `atom /VideoItem`
(`1442:7858`) estava listado no inventário Figma formal, mas não tinha
componente em `src/components`, story CSF3 nem MDX. `get_design_context`
fresco com `skillNames=resource:figma-design-to-code` confirmou a descrição
verbatim ("Simbolo para representar arquivos de formatos vídeos. Suporta
seleção e badge de tier. Variantes: state e tier.") e a anatomia visual:
corpo de vídeo por estado, câmera sobreposta, `atom/SelectState` nos
estados selecionados e nome do item abaixo.

Correção aplicada nesta passada: `VideoItem` foi implementado como átomo
novo (`src/components/atoms/video-item.tsx`), com 5 SVGs reais exportados
do Figma em `src/assets/illustrations/`, story pública
`Atoms/VideoItem` e documentação `stories/atoms/VideoItem.mdx` com
checklist elemento-a-elemento. A entrada histórica de `docs/conflicts.md`
sobre átomos soltos foi atualizada para remover `VideoItem` da pendência.

O catálogo público agora tem **85 componentes** (29 atoms + 10 celules + 22
molecules + 24 organisms) e **267 estados/variantes renderizáveis**. Com as
5 páginas de tokens, Storybook passa a ter **90 páginas documentadas** no
top level; a contagem de componentes isolada ainda é 85, mas a expectativa
textual da US ("bater ou superar 90") fica satisfeita quando os tokens
doc-only entram na contagem de páginas documentadas.

Manifesto desta passada: `design-system/docs/audits/us-026-pass6.md`.
Artefatos regeneráveis: `design-system/.audit-artifacts/us-026-pass6/`
(267 PNGs + `story-screenshots.json` com hashes SHA-256).

**Resultado:** NON-CLEAN. Pelo protocolo de ponto-fixo, a descoberta e
correção de um gap material de catálogo obriga uma **7ª passada completa**
antes de qualquer tentativa de emitir `<fixed-point>CLEAN</fixed-point>`.

## Auditoria de ponto-fixo, 7ª passada (US-026, 2026-08-13)

Reset de `passes:false` motivado pela 6ª passada NON-CLEAN. Esta 7ª
passada reabriu o catálogo público atual: **85 componentes** (29 atoms + 10
celules + 22 molecules + 24 organisms) e **267 estados/variantes
renderizáveis**. Com as 5 páginas doc-only de tokens, Storybook segue com
**90 páginas documentadas** no top level.

Manifesto desta passada: `design-system/docs/audits/us-026-pass7.md`.
Artefatos regeneráveis: `design-system/.audit-artifacts/us-026-pass7/`
(267 PNGs + `screenshots.json` com hashes SHA-256 + `catalog.json`). A
comparação de hashes com pass6 encontrou diferenças só em 4 estados de
loading com spinner animado (`PushButton`, `SearchInput`, `SearchToolbar`);
tratado como variação temporal de animação, não divergência material.

Evidência Figma fresca nesta passada:
`get_metadata` foi rerodado na página raiz `1421:17272`;
`search_design_system` para `search toolbar ver duplicados` voltou vazio
novamente; `get_design_context` fresco foi executado nos 4 nós de maior
risco desta rodada (`atom /VideoItem` `1442:7858`, `atom/PushButton`
`1421:17302`, `organism/cleanSpaceStorage` `1439:16908`,
`organism/planSelection` `1454:25057`). Nenhum desses 4 revelou divergência
nova de código. `Organisms/SearchToolbar` permanece como exceção
documentada/inferida, sem node Figma confirmado, linkada em
`docs/conflicts.md`.

**Resultado:** NON-CLEAN. Não houve correção material nesta passada, mas a
evidência ainda não satisfaz o protocolo estrito da US-026: uma passada
limpa exige `get_design_context` fresco para todos os 84 componentes com
node Figma confirmado, além dos screenshots Playwright. Esta passada
recapturou todos os screenshots, mas só renovou 4 contextos Figma. Uma
**8ª passada completa** é recomendada antes de qualquer tentativa de emitir
`<fixed-point>CLEAN</fixed-point>`, priorizando automatizar ou repartir a
coleta dos 80 `get_design_context` restantes.

- `cd design-system && npx tsc --noEmit` — sem erros.
- `bash scripts/gate.sh design-system` — sucesso; executou
  `cd design-system && npx tsc --noEmit` e
  `cd design-system && npm run build-storybook`.

## Auditoria de ponto-fixo, 8ª passada (US-026, 2026-08-13)

Reset motivado pela 7ª passada NON-CLEAN. Esta 8ª passada recapturou a
árvore pública atual completa do Storybook: **85 componentes** (29 atoms +
10 celules + 22 molecules + 24 organisms) e **267 estados/variantes
renderizáveis**. Com as 5 páginas doc-only de tokens, Storybook segue com
**90 páginas documentadas** no top level.

Manifesto desta passada: `design-system/docs/audits/us-026-pass8.md`.
Artefatos regeneráveis: `design-system/.audit-artifacts/us-026-pass8/`
(267 PNGs). A lista de screenshot IDs bate exatamente com a 7ª passada:
0 faltantes e 0 extras.

**Resultado:** BLOCKED. A mesma limitação estrutural se repetiu por pelo
menos três tentativas completas de verificação: pass6 recapturou todos os
screenshots mas só renovou o contexto Figma do achado `VideoItem`; pass7
recapturou todos os screenshots mas só renovou 4 contextos Figma de alto
risco; pass8 recapturou novamente todos os screenshots, mas ainda não tem
como processar de forma honesta os ~80 `get_design_context` restantes com
checklist elemento-a-elemento dentro de uma única execução Codex sem
exceder o orçamento prático de ferramenta/contexto. Nenhum código foi
alterado nesta passada e nenhuma exceção humana trancada em
`docs/conflicts.md` foi reaberta.

Não emitir `<fixed-point>CLEAN</fixed-point>` a partir desta evidência. O
próximo avanço precisa de uma estratégia de batching/armazenamento externo
para coletar e resumir `get_design_context` por node antes da comparação
elemento-a-elemento.

## Auditoria de ponto-fixo, 10ª passada (US-026, 2026-08-13)

Esta 10ª passada recapturou o catálogo público atual completo do Storybook:
**85 componentes** (29 atoms + 10 celules + 22 molecules + 24 organisms) e
**267 estados/variantes renderizáveis**. Com as 5 páginas doc-only de
tokens, Storybook segue com **90 páginas documentadas** no top level.

Manifesto desta passada: `design-system/docs/audits/us-026-pass10.md`.
Artefatos regeneráveis: `design-system/.audit-artifacts/us-026-pass10/`
(267 PNGs + `screenshot-results.json` + `story-index.json`). A lista de
IDs de screenshot bate com a 9ª passada: 0 faltantes e 0 extras. Houve 5
hashes diferentes (`PushButton` loading, `SearchInput` loading,
`SearchToolbar` loading x2 e `DropNewTag` default), não tratados como
achado visual nesta rodada.

**Achado material desta passada (corrigido agora):**
`stories/atoms/StorageTierBadge.mdx` ainda dizia que a largura fixa
Figma-confirmada (`w-[84px]`) não havia sido copiada e que a implementação
usava hug-content. Isso estava desatualizado: `storage-tier-badge.tsx` já
usa `w-[84px]`. `get_design_context` fresco no nó `1457:21014`
(`skillNames=resource:figma-design-to-code`) reconfirmou `w-[84px]`,
`h-[21px]`, rótulos "Acesso rápido"/"Longo prazo", borda neutra e texto
compacto Geist. A seção Dimensões do MDX foi corrigida para declarar a
largura fixa como reprodução literal.

**Resultado:** NON-CLEAN. Pelo protocolo de ponto-fixo, a correção material
de documentação obriga uma **11ª passada completa** antes de qualquer
tentativa de emitir `<fixed-point>CLEAN</fixed-point>`. A limitação
estrutural das passagens 8/9 também permanece: esta passada provou
conectividade Figma com 1 `get_design_context` fresco e recapturou todos os
screenshots, mas ainda não completou `get_design_context` + checklist
elemento-a-elemento para todos os nós Figma-confirmados.

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.
- `bash scripts/gate.sh design-system` — sucesso; executou
  `cd design-system && npx tsc --noEmit` e
  `cd design-system && npm run build-storybook`.

### Retomada inicial de organisms da 12ª passada ativa (US-026, 2026-08-13)

Esta retomada continuou de `Organisms/ArchiveBrowserModal` até
`Organisms/FaqFastLinks`, sem reiniciar a passagem ativa. Foram usados
`get_design_context` frescos com `resource:figma-design-to-code` e
screenshots Storybook reais para `ArchiveBrowserModal`, `CardLogin`,
`CardNeedMoreHelp`, `DialogSaveOrganizationModal`,
`DialogTemplateReviewModal`, `DropdownMenu` e `FaqFastLinks`.

Artefatos ativos continuam em `design-system/.audit-artifacts/us-026-active/`.
O catálogo permanece em **85 componentes** (29 atoms + 10 celules + 22
molecules + 24 organisms), **275 estados/variantes renderizáveis** e **90
páginas documentadas** incluindo os 5 tokens doc-only.

**Achados materiais desta retomada (corrigidos agora):**
`ArchiveBrowserModal` corrigiu dimensões root/body/sidebar/search e trocou X
Lucide por `atom/CloseButton`; `CardLogin` corrigiu a moldura para
`400x591`; `CardNeedMoreHelp` corrigiu largura para `927px`;
`DialogSaveOrganizationModal` corrigiu largura do painel, largura dos cards,
estado selecionado sem preenchimento azul inventado e close real;
`DialogTemplateReviewModal` corrigiu frame `768x613`, área de conteúdo para
mostrar os três blocos e close real. `DropdownMenu` e `FaqFastLinks` foram
conferidos sem nova divergência material, preservando as exceções já
trancadas em `docs/conflicts.md`.

**Resultado:** NON-CLEAN e ainda incompleto para CLEAN estrito. Como houve
correções materiais, uma nova passada completa continua obrigatória antes de
qualquer `<fixed-point>CLEAN</fixed-point>`. A próxima retomada da passagem
12 deve continuar em `Organisms/FaqInfoCard` (`1454:24788`).

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.
- `bash scripts/gate.sh design-system` — passou; executou TypeScript e
  Storybook build.

### Retomada final de molecules da 12ª passada ativa (US-026, 2026-08-13)

Esta retomada continuou de `Molecules/FolderTagChip` até o fim da camada de
molecules, sem reiniciar a passagem. Artefatos ativos recalculados:
**85 componentes** (29 atoms + 10 celules + 22 molecules + 24 organisms),
**275 estados/variantes renderizáveis**, **0 screenshots faltantes** e
`hashDiffCount=81` contra a passada 11. Com as 5 páginas de tokens
doc-only, Storybook segue com **90 páginas documentadas** no top level.

Manifesto atualizado: `design-system/docs/audits/us-026-pass12.md`.
Artefatos ativos: `design-system/.audit-artifacts/us-026-active/`.

**Achados materiais desta retomada (corrigidos agora):**
`Molecules/NodoContextMenu` trocou o ícone de filtro Lucide cinza pelo SVG
real teal do Figma; `Molecules/StorageStatus` corrigiu a largura expandida
de 768px para 1036px; `Molecules/StorageStatusCurrent` corrigiu a largura
de 448px para 468px; `Molecules/ViewModeToggle` trocou os ícones Lucide
pelos 6 SVGs exportados do Figma; `Molecules/ThumbnailLarge` removeu do
header o texto visível `Arquivo 1/2`, que no Figma existe só como subcamada
recortada do favicon.

Componentes conferidos sem nova divergência material nesta retomada:
`FolderTagChip` (ambiguidade colapsada já em `docs/conflicts.md`), `Label`,
`Notification`, `PopoverNotification`, `RadioButton` e `StorageBar`.

**Resultado:** NON-CLEAN e ainda incompleto para CLEAN estrito. Como houve
correções materiais, uma nova passada completa continua obrigatória antes de
qualquer `<fixed-point>CLEAN</fixed-point>`. A próxima retomada da passagem
12 deve continuar pelo primeiro organism sem checklist fresco, começando em
`Organisms/ArchiveBrowserModal` (`1439:16909`).

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.
- `bash scripts/gate.sh design-system` — sucesso; executou os gates
  TypeScript + Storybook.

## Auditoria de ponto-fixo, 11ª passada (US-026, 2026-08-13)

Passada ativa retomada de `design-system/.audit-artifacts/us-026-pass11/`.
O catálogo público atual permanece em **85 componentes** (29 atoms + 10
celules + 22 molecules + 24 organisms) e **267 estados/variantes
renderizáveis**. Com as 5 páginas doc-only de tokens, Storybook segue com
**90 páginas documentadas** no top level.

Manifesto desta passada: `design-system/docs/audits/us-026-pass11.md`.
Artefatos regeneráveis: `design-system/.audit-artifacts/us-026-pass11/`
(267 PNGs + `screenshot-results.json` + `story-index.json`). A lista de
IDs de screenshot bate com a 10ª passada: 0 faltantes e 0 extras.

**Achado material desta passada (corrigido agora):**
`atom/StorageTierBadge` (`1457:21014`) quebrava "Acesso rápido" em duas
linhas no story `atoms-storagetierbadge--current`, apesar do
`get_design_context` fresco confirmar `whitespace-nowrap` junto com
`w-[84px]`, `h-[21px]`, borda neutra e texto Geist compacto. Correção:
`src/components/atoms/storage-tier-badge.tsx` agora aplica
`whitespace-nowrap`; `stories/atoms/StorageTierBadge.mdx` registra a
reverificação; os screenshots `Current` e `LongTerm` foram recapturados na
pasta da 11ª passada e os hashes foram atualizados.

**Resultado:** NON-CLEAN. Pelo protocolo de ponto-fixo, a descoberta e
correção de uma divergência material obriga uma **12ª passada completa**
antes de qualquer tentativa de emitir `<fixed-point>CLEAN</fixed-point>`.
A limitação estrutural das passagens 8/9/10 também permanece: a 11ª
passada recapturou todos os screenshots e completou a checklist
elemento-a-elemento do componente corrigido, mas ainda não completou
`get_design_context` + checklist para todos os nós Figma-confirmados.

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.
- `bash scripts/gate.sh design-system` — sucesso; executou
  `cd design-system && npx tsc --noEmit` e
  `cd design-system && npm run build-storybook`.

## Auditoria de ponto-fixo, 12ª passada ativa (US-026, 2026-08-13)

Passada ativa inicializada em `design-system/.audit-artifacts/us-026-active/`
após a 11ª passada NON-CLEAN. Catálogo público atual: **85 componentes**
(29 atoms + 10 celules + 22 molecules + 24 organisms) e **267 estados/
variantes renderizáveis**. Com as 5 páginas doc-only de tokens, Storybook
segue com **90 páginas documentadas** no top level.

Manifesto desta passada: `design-system/docs/audits/us-026-pass12.md`.
Artefatos regeneráveis: `design-system/.audit-artifacts/us-026-active/`
(267 PNGs + `screenshot-results.json` + `story-index.json` +
`coverage-summary.json`). A lista de IDs de screenshot bate com a 11ª
passada: 0 faltantes e 0 extras.

**Achados materiais desta passada (corrigidos agora):**
`Atoms/PushButton` usava "Liberar Espaço" como label genérico da story
destrutiva, fora dos contextos onde a Regra 5 aprova esse termo; corrigido
para "Excluir" e documentado no MDX. `Organisms/CleanSpaceStorage.mdx`
mantinha uma nota contraditória/desatualizada sobre a cor do ícone de
arquivo; corrigido para preservar a exceção travada em `docs/conflicts.md`
sem reabrir a decisão. Retomada posterior da mesma passada encontrou mais
2 divergências visuais em `Atoms/ConfirmButton` e `Atoms/DeleteButton`: o
wrapper compartilhado renderizava os SVGs exportados em 20×20, mas o Figma
fresco confirma 16×16 para `ConfirmButton` e 10×12 para `DeleteButton`;
ambos foram corrigidos preservando o alvo invisível de 32×32 e os estados
default disabled passaram para opacidade 20%. Nova retomada da mesma
passada encontrou mais 4 divergências materiais: `Atoms/FolderItem`
renderizava `selected-pressed` por aproximação (`selected` +
`brightness-90`) em vez do asset próprio Figma-confirmado; `Atoms/KeepButton`
e `Atoms/PlusButton` herdavam tamanho visual 20×20 do wrapper compartilhado
em vez de 16×16 e 12×12, respectivamente; `Atoms/LabelStorageAlert`
renderizava todos os glifos como 11×11, mas o Figma confirma tamanhos
próprios por variante. Todos foram corrigidos e os screenshots afetados
foram recapturados em `design-system/.audit-artifacts/us-026-active/`.

Evidência Figma fresca nesta passada: `get_metadata` da página raiz e
`get_design_context` com `resource:figma-design-to-code` para componentes
afetados/alto risco e átomos sequenciais auditados até `Atoms/PlusButton`
(mais contexto esparso da seção `Atoms/Icon`). Esses checklists foram
comparados contra os screenshots renderizados e os componentes impactados
foram recapturados depois das correções.

**Resultado:** NON-CLEAN e ainda incompleto para CLEAN estrito. Pelo
protocolo de ponto-fixo, as correções materiais exigem outra passada antes
de qualquer `<fixed-point>CLEAN</fixed-point>`. Além disso, a passada 12
ainda não completou `get_design_context` + checklist elemento-a-elemento
para todos os 84 componentes com node Figma confirmado. A próxima execução
deve retomar de `design-system/.audit-artifacts/us-026-active/` e continuar
pelos componentes sem contexto fresco a partir de `Atoms/SelectState`, sem
recapturar os 267 screenshots já frescos salvo se houver nova alteração.

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.
- `bash scripts/gate.sh design-system` — sucesso; executou
  `cd design-system && npx tsc --noEmit` e
  `cd design-system && npm run build-storybook`.

### Retomada posterior da 12ª passada ativa (US-026, 2026-08-13)

Esta retomada continuou a partir do achado aberto em `Atoms/TypeLabel`, sem
reiniciar a passagem. Artefatos ativos recalculados:
**85 componentes** (29 atoms + 10 celules + 22 molecules + 24 organisms),
**273 estados/variantes renderizáveis** (119 atoms + 34 celules + 71
molecules + 49 organisms), **0 screenshots faltantes**. Com as 5 páginas de
tokens doc-only, Storybook segue com **90 páginas documentadas** no top
level.

Manifesto atualizado: `design-system/docs/audits/us-026-pass12.md`.
Artefatos ativos: `design-system/.audit-artifacts/us-026-active/`
(`story-index.json`, `screenshot-results.json`, `coverage-summary.json` e
PNGs).

**Achados materiais desta retomada (corrigidos agora):**
`Atoms/TypeLabel` (`1421:18415`) tinha cobertura insuficiente da matriz
Figma (`FileTypeLabel` em `Dark/Light` com `Idle`/`Selected`, `DefaultTag`,
`Alert`, e chips de escopo com `Neutral Idle/Hover` e
`Selected/SelectedHover/SelectedPressed`). Corrigido com `state` opcional em
`ScopeTypeLabel` e stories `FileTypeMatrix`/`ScopeMatrix`.
`Celules/DropListItem` (`1440:23803`) tinha o estado `hover` só como CSS,
sem story/screenshot estático; corrigido com `state="hover"` e story
`Hover`.

Componentes conferidos sem nova divergência material nesta retomada:
`Celules/Callout` (`1421:20028`) e `Celules/FreeModeButtons`
(`1431:20043`).

**Resultado:** NON-CLEAN e ainda incompleto para CLEAN estrito. Como houve
correções materiais, uma nova passada completa continua obrigatória antes de
qualquer `<fixed-point>CLEAN</fixed-point>`. A próxima retomada da passagem
12 deve continuar pelo primeiro componente sem checklist fresco após
`Celules/FreeModeButtons`, começando em `Celules/FreeModeItemNode`
(`1421:20108`).

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.
- `bash scripts/gate.sh design-system` — sucesso; executou
  `cd design-system && npx tsc --noEmit` e
  `cd design-system && npm run build-storybook`.

### Retomada FAQ/Header da 12ª passada ativa (US-026, 2026-08-13)

Esta retomada continuou de `Organisms/FaqInfoCard` até `Organisms/Header`,
sem reiniciar a passagem ativa. Foram usados `get_design_context` frescos
com `resource:figma-design-to-code` e screenshots Playwright reais para
`FaqInfoCard`, `FaqInfoCardCollapsed`, `FileListContainer` e `Header`.
Artefatos ativos: `design-system/.audit-artifacts/us-026-active/`.
Manifesto atualizado: `design-system/docs/audits/us-026-pass12.md`.

Catálogo atual: **85 componentes** (29 atoms + 10 celules + 22 molecules +
24 organisms), **275 estados/variantes renderizáveis**, **0 screenshots
faltantes**, `hashDiffCount=100` contra a passada 11. Com as 5 páginas de
tokens doc-only, Storybook segue com **90 páginas documentadas** no top
level.

**Achados materiais desta retomada (corrigidos agora):** `FaqInfoCard`
corrigiu largura `927px`, assets SVG próprios e todos os painéis abertos;
`FaqInfoCardCollapsed` corrigiu o estado inicial para todos os tópicos
recolhidos, largura `927px` e ícones exportados; `FileListContainer`
corrigiu largura `544px` e borda `neutral-border-default`; `Header`
corrigiu altura 96px, logo `173x44`, busca 560px, borda confirmada e
`action-pill` alinhada à direita nas variantes sem botões.

**Resultado:** NON-CLEAN e ainda incompleto para CLEAN estrito. Como houve
correções materiais, uma nova passada completa continua obrigatória antes
de qualquer `<fixed-point>CLEAN</fixed-point>`. A próxima retomada da
passagem 12 deve continuar pelo primeiro organism sem checklist fresco após
`Header`, começando em `Organisms/InfoPopover` (`1421:18504`).

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.
- `bash scripts/gate.sh design-system` — passou em execução isolada.

### Retomada final SearchToolbar→UploadPopover da 12ª passada ativa (US-026, 2026-08-13)

Esta retomada completou a cobertura sequencial restante da passagem 12,
de `Organisms/SearchToolbar` até `Organisms/UploadPopover`, sem reiniciar
evidência já fresca. `SearchToolbar` segue como exceção inferida, sem node
Figma confirmado. Foram usados `get_design_context` frescos com
`resource:figma-design-to-code` para `Sidebar`, `SidebarToggle`,
`StorageSidebar` e `UploadPopover`.

Artefatos ativos recalculados: **85 componentes** (29 atoms + 10 celules +
22 molecules + 24 organisms), **279 estados/variantes renderizáveis**,
**0 screenshots faltantes**, `hashDiffCount=109` contra a passada 11. Com
as 5 páginas de tokens doc-only, Storybook segue com **90 páginas
documentadas** no top level.

**Achado material desta retomada (corrigido agora):** `SidebarToggle`
confirmou matriz Figma de 6 estados (`Idle`/`Hover`/`Pressed` ×
collapsed/expanded), mas as stories só tinham `Expanded`/`Collapsed`.
Adicionados `state="hover"`/`state="pressed"` e as stories estáticas
`ExpandedHover`, `ExpandedPressed`, `CollapsedHover` e `CollapsedPressed`;
screenshots recapturados em `.audit-artifacts/us-026-active/screenshots/`.

Componentes conferidos sem nova divergência material nesta retomada:
`Sidebar`, `StorageSidebar` e `UploadPopover`, preservando apenas exceções
humanas já trancadas em `docs/conflicts.md`.

**Resultado da passagem 12:** NON-CLEAN com cobertura completa. Como houve
correção material de cobertura visual, uma nova passada completa continua
obrigatória antes de qualquer `<fixed-point>CLEAN</fixed-point>`.

## Auditoria de ponto-fixo, 13ª passada ativa (US-026, 2026-08-13)

Passada ativa em `design-system/.audit-artifacts/us-026-active/` após a
12ª passada NON-CLEAN. Catálogo público atual: **85 componentes** (29 atoms
+ 10 celules + 22 molecules + 24 organisms), **280 estados/variantes
renderizáveis** (`120 atoms + 36 celules + 71 molecules + 53 organisms`) e
**90 páginas documentadas** no Storybook ao incluir as 5 páginas doc-only de
tokens.

Manifesto desta passada: `design-system/docs/audits/us-026-pass13.md`.
Artefatos regeneráveis: `design-system/.audit-artifacts/us-026-active/`
(`screenshot-results.json`, `coverage-summary.json` e PNGs).

**Achados materiais desta passada (corrigidos em retomadas anteriores):**
`Atoms/ButtonAdd` ganhou estado estático `AllStates`; `Atoms/FirstUploadSymbol.mdx`
corrigiu a documentação de cor/tamanho; `Atoms/Icon` reduziu o default para
16px; `Atoms/Switch` corrigiu o off-track para `#d9d9d9`; `Atoms/TypeLabel`
corrigiu `DefaultTag Idle` sem fundo e a documentação das cores dos pontos;
`docs/conflicts.md` atualizou a linha histórica de átomos soltos para não
manter componentes já verificados como pendentes.

**Retomada atual:** completou `get_design_context` fresco com
`resource:figma-design-to-code` e checklist elemento-a-elemento para todos
os 10 celules, todos os 22 molecules e `Organisms/ArchiveBrowserModal`,
comparando contra os screenshots Playwright já frescos da pass13. Não houve
achado material novo nesta retomada.

Cobertura Regra 11 fresca nesta pass13: **62/85 componentes**. Camadas
completas: atoms, celules e molecules. Organisms cobertos: apenas
`Organisms/ArchiveBrowserModal`. Próxima retomada deve continuar pelo
primeiro componente sem checklist fresco: `Organisms/CardLogin`
(`1454:22055`). Como houve achados materiais anteriores, esta passada já é
**NON-CLEAN** e uma nova passada completa será obrigatória após fechar a
cobertura restante.

### Retomada final organisms da 13ª passada ativa (US-026, 2026-08-13)

Esta retomada completou a cobertura restante da pass13, de
`Organisms/CardLogin` até `Organisms/UploadPopover`. Foram usados
`get_design_context` frescos com `resource:figma-design-to-code` para todos
os organisms restantes com node Figma confirmado; `Organisms/SearchToolbar`
permanece como exceção inferida documentada, sem node Figma confirmado.

Cobertura final da pass13: **85/85 componentes públicos** (29 atoms + 10
celules + 22 molecules + 24 organisms), **280 estados/variantes
renderizáveis** e **90 páginas documentadas** ao incluir as 5 páginas
doc-only de tokens. Manifesto completo:
`design-system/docs/audits/us-026-pass13.md`.
Archive regenerável criado em `design-system/.audit-artifacts/us-026-pass13/`;
`us-026-active` permanece com os mesmos PNGs/hashes para preservar os
caminhos registrados no manifesto, mas `coverage-summary.json` marca
`NON_CLEAN_COMPLETE_REQUIRES_PASS14`.

**Achado material desta retomada (corrigido agora):** `UploadPopover`
confirmou no Figma a porcentagem dentro do anel circular de progresso, mas
o screenshot Playwright inicial da pass13 mostrava só o anel. O componente
agora renderiza `{percent}%` no centro do badge circular e os estados
`InProgress`/`WithFileList` foram recapturados em
`.audit-artifacts/us-026-active/screenshots/`.

**Resultado da passagem 13:** NON-CLEAN com cobertura completa. Como houve
correção material nesta passada, uma **14ª passada completa** é obrigatória
antes de qualquer `<fixed-point>CLEAN</fixed-point>`.

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.
- `bash scripts/gate.sh design-system` — passou em execução isolada
  (a primeira tentativa em paralelo com `build-storybook` direto falhou por
  colisão de escrita em `storybook-static/sb-common-assets`, não por erro de
  código).

## Reabertura humana após a 13ª passagem (US-026, 2026-08-13)

O CLEAN subsequente foi invalidado por inspeção visual humana com novos achados. O checklist obrigatório está em `docs/audits/user-recheck-2026-08-13.md` e deve ser compartilhado por todos os providers. A US-026 voltou para `passes:false`. Nenhuma passagem pode ser considerada limpa até todas as linhas estarem `verified-clean`, incluindo screenshots isolados e dos consumidores. Sem commit.
