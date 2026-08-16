# UploadFolder — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/UploadFolder.mdx` em 2026-08-16. Node Figma: `atom/UploadFolder`, `1439:17053`.

## Status

✅ aligned (Figma-confirmado, US-018) — protocolo completo da
Regra 11 aplicado: `get_design_context` real no node, os 2 vetores
exportados via `download_assets`, screenshot Figma comparado
elemento-a-elemento contra o Storybook renderizado via Playwright.

## Reverificado em 2026-08-12 (US-026, 3ª passada de auditoria de ponto-fixo)

`get_design_context` refeito do zero, nenhuma divergência
nova encontrada.

## Reverificado em 2026-08-13 (US-026, 12ª passada ativa)

`get_design_context` fresco reconfirmou quadro 16×16. Divergência
corrigida: a story ampliava o glifo para 32×32 (`size-8`) apesar do
componente e do Figma serem 16×16; a story agora renderiza a escala real.

## Descrição adicionada pelo usuário em 2026-08-14

`get_design_context` fresco no mesmo node (`1439:17053`) retorna agora uma
descrição de uso que antes não existia: verbatim *"icone de upload de uma
pasta"*.

## Figma (Figma-confirmado)

Descrição verbatim: *"icone de upload de uma pasta"* — glifo composto de
2 vetores sobrepostos: contorno de pasta (`Vector`, `1421:17836`) + seta
de upload pequena (`Vector`, `1421:17837`), 16×16px, `overflow-clip`.
Nenhum eixo de variante/estado confirmado (um único vetor estático).

## Glifo

2 vetores exportados literalmente via `download_assets`, combinados em um
único SVG (`UploadFolderGlyph.svg`) preservando a posição relativa exata
do Figma (contorno de pasta deslocado `top:2.67px left:1.33px`, seta
deslocada `top:7px left:6px` dentro do quadro 16×16) e normalizados para
`currentColor` (mesmo padrão de `atom/Icon`) — não aproximação por ícone
de biblioteca.

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| Contorno de pasta | ✅ vetor exportado, `currentColor` | ✅ Figma-confirmado |
| Seta de upload sobreposta | ✅ vetor exportado, posição relativa preservada | ✅ Figma-confirmado |
| Quadro 16×16, sem overflow | ✅ `viewBox 0 0 16 16` | ✅ Figma-confirmado |

## Estados (Regra 8)

Elemento de exibição estática — o Figma não expõe eixo `state` para este
glifo.

| Estado | Aplicável? | Nota |
| --- | --- | --- |
| Default | ✅ | Único tratamento visual |
| Hover/Active/Disabled/Loading/Error | ❌ Não aplicável | Glifo puro, sem chrome interativo próprio |

## Material Liquid Glass

Não aplicável — glifo vetorial puro, sem uso do material "Liquid Glass"
(Regra 10).

## Fidelidade code-level

Ícone reproduzido via SVGs exportados reais (não aproximação), combinados
preservando a geometria relativa confirmada no Figma.
