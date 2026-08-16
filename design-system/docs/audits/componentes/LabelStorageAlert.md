# LabelStorageAlert — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/LabelStorageAlert.mdx` em 2026-08-15. Node Figma: `atom/Label/Storage/Alert`, `1439:16885`.

## Status

✅ aligned (Figma-confirmado, US-018) — protocolo completo da Regra 11 aplicado: `get_design_context` real no node, 4 glifos exportados via `download_assets`, screenshot Figma comparado elemento-a-elemento contra o Storybook renderizado via Playwright.

## Corrigido em auditoria US-026 pass12 (2026-08-13, Regra 11)

`get_design_context` fresco confirmou tamanhos diferentes por glifo (`Default` 11.08×14, `Variant2` 11×11, `Variant3` 13×15, `Variant4` 12×14). A implementação anterior renderizava todos como 11×11; agora cada variante usa o tamanho visual do SVG exportado.

## Figma (Figma-confirmado)

Descrição verbatim: *"badge de alertas presente na etapa de confirmar o template sugerido pelo sistema"*. Usado no fluxo de revisão de template sugerido (`organism/DialogTemplateReviewModal` ou similar).

## Eixo `property1` (4 variantes Figma-confirmadas)

| Valor da prop | Rótulo exibido | Glifo | Alinhamento |
| --- | --- | --- | --- |
| `default` | Incongruente | vetor 1 (11×14) | `items-end` |
| `variant2` | Incongruente | vetor 2 (11×11) | `items-center` |
| `variant3` | Incongruente | vetor 3 (13×15, círculo+check) | `items-end` |
| `variant4` | OK | vetor 4 (12×14, círculo+check) | `items-end` |

**Gap de documentação do próprio Figma (Regra 9):** 3 das 4 variantes usam glifos visualmente diferentes mas compartilham o mesmo rótulo "Incongruente", sem nenhuma descrição que diferencie o significado de cada ícone entre si. Preservado literal — nenhuma distinção semântica foi inventada entre `default`/`variant2`/`variant3`.

## Glifos

4 vetores exportados literalmente via `download_assets`, normalizados para `currentColor` (mesmo padrão de `atom/Icon`) — não aproximação por ícone de biblioteca.

## Cor (Regra 3)

Fundo `effect-overlay-md` (`rgba(0,0,0,0.14)`) — literal `bg-black/14` (Tailwind opacity modifier), mesmo overlay documentado em `atom/Tag`/`atom/ArchiveItem` sem token CSS dedicado ainda no projeto. Texto/ícone `neutral-text-secondary` (`#3f3f46`) bate exatamente com `zinc-700` (ver tabela "Paleta neutra" em `docs/conflicts.md`).

## Tipografia

Figtree Medium `16px` (`Type/Label/SM`), `leading-[16px]`, `tracking-[0.1px]` — no piso obrigatório da Regra 4, sem exceção necessária.

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| Pílula com fundo `rgba(0,0,0,.14)` | ✅ `bg-black/14` | ✅ Figma-confirmado |
| 4 glifos distintos por variante | ✅ vetores exportados, `currentColor`, tamanhos próprios | ✅ Figma-confirmado |
| Rótulos "Incongruente"×3 / "OK"×1 | ✅ `ALERT_LABEL` | ✅ Figma-confirmado |
| Cor de texto/ícone `#3f3f46` | ✅ `text-zinc-700` | ✅ Figma-confirmado |
| Alinhamento `items-center` só em `variant2` | ✅ | ✅ Figma-confirmado |

## Estados (Regra 8)

| Estado | Aplicável? | Nota |
| --- | --- | --- |
| Default | ✅ | Único tratamento visual por variante — badge de exibição |
| Hover/Active/Disabled/Loading/Error | ❌ Não aplicável | Sem alvo de ponteiro, não é um controle |

## Material Liquid Glass

Não aplicável — preenchimento de cor sólida translúcida, sem uso do material "Liquid Glass" (Regra 10).

## Fidelidade code-level

4 ícones reproduzidos via SVG exportado real (não aproximação); resto do componente 100% reproduzível em código.
