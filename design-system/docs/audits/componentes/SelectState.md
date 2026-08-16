# SelectState — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/SelectState.mdx` em 2026-08-16. Node Figma: `atom/SelectState`, `1421:18292`.

## Status

✅ aligned (Figma-confirmado, US-017) — protocolo completo da
Regra 11 (`get_design_context` real + assets reais via `download_assets` +
checklist elemento-a-elemento) aplicado antes de marcar como verificado.

## Reverificado em 2026-08-12 (US-026, 3ª passada de auditoria de ponto-fixo)

`get_design_context` refeito do zero, nenhuma divergência
nova encontrada.

## Figma (Figma-confirmado)

Descrição verbatim (`get_design_context`, nó `1421:18292`): *"componente
para feedback de seleção"*. Círculo de 8px com um glifo de check de 12px
centralizado por cima (excede a caixa do círculo por design — decisão
visual do Figma, não erro de posicionamento).

Eixos confirmados: `theme` (Light/Dark) × `state` (Default/Hover/Pressed) —
6 combinações, mas só 5 assets distintos de fundo (`theme=Light,
state=Default` não tem asset combinado próprio: usa o círculo base +
check separados, diferente das outras 5 combinações que já têm o
fundo+glow bake-ados num único asset exportado).

## Ajuste de tamanho do check em 2026-08-15 (decisão humana, sobrepõe a leitura Figma-literal acima)

O comentário original tratava o check 12px excedendo a caixa do círculo
8px como intencional ("por design"), mas visualmente ficava sem respiro
nenhum — check colado/estourando a borda. Reduzido para caber dentro do
círculo com padding interno mínimo (`w-1.5 h-[4.57px]`, ~1px de folga
de cada lado), sobrepondo a leitura Figma-literal acima por pedido direto
do usuário. O parágrafo "Figma (Figma-confirmado)" acima permanece como
registro histórico da leitura original, mas não reflete mais o
comportamento implementado.

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| Círculo base (Light/Default) | ✅ `select-state-ellipse.svg` | ✅ Figma-confirmado (asset real, `download_assets`) |
| Fundo combinado Light/Hover, Light/Pressed | ✅ `select-state-light-hover.svg`, `select-state-light-pressed.svg` | ✅ Figma-confirmado |
| Fundo combinado Dark/Default, Dark/Hover, Dark/Pressed | ✅ `select-state-dark-*.svg` | ✅ Figma-confirmado |
| Check glifo (Light) | ✅ `select-state-check.svg` | ✅ Figma-confirmado |
| Check glifo (Dark) | ✅ `select-state-check-dark.svg` | ✅ Figma-confirmado |
| Opacidade do check em Dark/Hover (0.32) e Dark/Pressed (0.2) | ✅ `opacity-[0.32]`/`opacity-[0.2]` | ✅ Figma-confirmado (valores numéricos; nomes das variáveis Figma de origem, `--radius-3xl`/`--radius-20`, são reaproveitamento sem relação semântica com raio) |

Nenhum elemento foi adicionado além do confirmado — sem borda, sombra ou
texto extra inventados.

## Uso (composição)

Composto como sub-componente dentro de `ArchiveItem`, `FolderItem` e
`ImageItem` (canto inferior direito do glifo, exibido só nos estados
`selected`/`selected-hover`/`selected-pressed`) — reutilizado como
componente, nunca reimplementado inline (mesmo princípio de spec única da
Regra 10).

## Estados (Regra 8)

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Default | ✅ | ✅ Figma-confirmado |
| Hover | ✅ | ✅ Figma-confirmado |
| Pressed | ✅ | ✅ Figma-confirmado |
| Disabled | ❌ Não aplicável | Sub-componente de exibição, sem estado próprio desabilitado no Figma |
| Loading/Error | ❌ Não aplicável | Badge de seleção síncrono, sem operação assíncrona |

## Fluid interface (Regra 8)

Sem nota de `reduced-motion` visível no Figma — não documentado (Regra 8).
Sem transição própria (troca de estado é instantânea, controlada pelo
componente pai via prop).

## Material Liquid Glass

Não aplicável — os assets combinados (`*-hover.svg`/`*-pressed.svg`) já
embutem o efeito de glow/glass no próprio vetor exportado, não uma
composição CSS separada referenciando `stories/tokens/Materials.mdx`.
