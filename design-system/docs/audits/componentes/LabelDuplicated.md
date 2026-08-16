# LabelDuplicated — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/LabelDuplicated.mdx` em 2026-08-15. Node Figma: `atom/Label/Duplicated`, `1439:16874`.

## Status

✅ aligned (Figma-confirmado, US-018) — protocolo completo da Regra 11 aplicado: `get_design_context` real no node, glifo exportado via `download_assets`, screenshot Figma comparado elemento-a-elemento contra o Storybook renderizado via Playwright.

## Reverificado em 2026-08-12 (US-026, 3ª passada de auditoria de ponto-fixo)

`get_design_context` refeito do zero, nenhuma divergência nova encontrada.

## Figma (Figma-confirmado)

Descrição verbatim: *"badge de alerta de duplicidade"*. Pílula com glifo de alerta (triângulo com exclamação) + rótulo "Duplicado", elemento de exibição estática. Provável uso em `organism/cleanSpaceStorage` (achados de arquivo duplicado), sem instância confirmada dentro desse organism ainda.

## Glifo

Vetor exportado literalmente via `download_assets` (triângulo com "!"), normalizado para `currentColor` (mesmo padrão de `atom/Icon`) — não uma aproximação por ícone de biblioteca.

## Cor (Regra 3)

Fundo `color-feedback-warning-subtle` (`rgba(245,158,11,0.2)`) usa `amber-500/20` — `#f59e0b` (amber-500 do Tailwind) bate exatamente com o RGB do Figma. Texto/ícone `color-feedback-warning` (`#c38418`) não tem correspondência exata em nenhum degrau padrão do Tailwind — literal (`text-[#c38418]`), mesmo padrão já usado em `atom/Tag` variant `file-name` (sem token semântico dedicado, Regra 3 tema neutro/feedback não totalmente mapeado).

## Tipografia

Figtree Medium `16px` (`Type/Label/SM`), `leading-[16px]`, `tracking-[0.1px]` — no piso obrigatório da Regra 4, sem exceção necessária.

## Dimensões (Figma-confirmado)

Pílula `rounded-full`, padding `16px`/`12px`/`4px` (`pl-4 pr-3 py-1`), `gap-1` entre glifo e texto, glifo `12.83×13px`.

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| Pílula com fundo `rgba(245,158,11,.2)` | ✅ `bg-amber-500/20` | ✅ Figma-confirmado |
| Glifo de alerta (triângulo+"!") | ✅ vetor exportado, `currentColor` | ✅ Figma-confirmado |
| Texto "Duplicado" | ✅ | ✅ Figma-confirmado |
| Cor de texto/ícone `#c38418` | ✅ `text-[#c38418]` | ✅ Figma-confirmado |
| Padding `16/12/4px`, `gap-1`, `rounded-full` | ✅ | ✅ Figma-confirmado |

## Estados (Regra 8)

| Estado | Aplicável? | Nota |
| --- | --- | --- |
| Default | ✅ | Único tratamento visual — badge de exibição |
| Hover/Active/Disabled/Loading/Error | ❌ Não aplicável | Sem alvo de ponteiro, não é um controle |

## Material Liquid Glass

Não aplicável — preenchimento de cor sólida translúcida, sem uso do material "Liquid Glass" (Regra 10).

## Fidelidade code-level

Ícone reproduzido via SVG exportado real (não aproximação); resto do componente 100% reproduzível em código.
