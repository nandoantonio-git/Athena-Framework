---
tags: [componente, atom]
---

# PushButton

`atom/PushButton` (`1421:17302`) — [[Regra 1 - Botão Único|o único componente de botão do MVP]].

- **Código:** `src/components/atoms/push-button.tsx`
- **Story:** `stories/atoms/PushButton.stories.tsx`

## Props principais

- `variant`: `"primary"` (ação principal) \| `"neutral"` (secundária)
- `isDestructive`: chrome neutro + texto na cor de perigo (`#bc3426`), nunca fundo vermelho
- `icon`: qualquer `React.ComponentType<SVGProps>` — não restrito ao registry `ICONS`, pode importar um SVG direto (usado por [[Header]] pro ícone "keep" do botão Guardar)

## Onde é usado

Fluxos ao vivo reais: "Guardar"/"Organizar" ([[Header]]), "Excluir"/"Excluir cópias" ([[CleanSpaceStorage]]), "Continuar"/"Cancelar" em quase todo modal.

## Ver também

- [[Regra 1 - Botão Único]]
- [[Header]]
