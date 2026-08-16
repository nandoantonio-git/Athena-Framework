# CloseButton — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/CloseButton.mdx` em 2026-08-15. Node Figma: `1421:19008`.

## Status

✅ aligned (Figma-confirmado, US-026 pass 5) — componente já existia no código e era consumido por `Notification`/`PopoverNotification`, mas não tinha story/MDX própria e ficou fora do manifesto de 83 componentes do pass4. Corrigido nesta passada.

## Descrição Figma verbatim

*"botao utilizado para fechar janelas ou componentes"*. Anatomia confirmada: círculo escuro com glifo `clear`/`x` branco, 2 tamanhos (`SM` 8px, `MD` 16px) e 3 estados (`Idle`, `Hover`, `Pressed`). Todos os 6 estados usam SVGs exportados do Figma.

## Correções posteriores (ver `src/components/atoms/close-button.tsx`)

Duas correções de código relevantes não estavam refletidas neste `.mdx` até a separação de 2026-08-15: (1) pass19 — o glifo "×" era um elemento separado no Figma nunca bake-ado no SVG de fundo, o botão renderizava como ponto sólido sem glifo; corrigido com overlay `ClearButtonGlyph`. (2) 2026-08-15 — hover/pressed só mudavam via prop `state` controlada, nunca respondiam a interação real do mouse; corrigido com overlay de opacidade CSS real (`group-hover`/`group-active`).

## Estados — checklist Figma-confirmado

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Idle | ✅ `state="idle"` | ✅ Figma-confirmado |
| Hover | ✅ `state="hover"` | ✅ Figma-confirmado |
| Pressed | ✅ `state="pressed"` | ✅ Figma-confirmado |
| Disabled/Loading/Error | ❌ Não aplicável | Sem eixo confirmado no node consultado |
