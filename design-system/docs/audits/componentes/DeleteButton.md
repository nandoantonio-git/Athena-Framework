# DeleteButton — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/DeleteButton.mdx` em 2026-08-15. Node Figma: `1421:17705`.

## Status

✅ aligned (estrutura) · ⚠️ gap de documentação Figma aberto — urgência baixa (`On`/`Idle` não distinguidos). Descrição Figma verbatim: *"ícone utilizado para ações destrutivas"*.

## Corrigido em auditoria US-026 (2026-08-11, Regra 11.4)

Mesmo achado de `ConfirmButton`/`KeepButton` — círculo de fundo cinza inventado no hover/active removido.

## Corrigido na 12ª passada ativa (US-026, 2026-08-13)

`get_design_context` fresco reconfirmou o vetor Figma de 9.333×12 dentro de um contêiner de 10px; o wrapper compartilhado renderizava o SVG em 20×20. Corrigido pra 10×12, `Disabled` default usa opacidade 20%.

## Reverificado na 3ª passada de auditoria de ponto-fixo (US-026, 2026-08-12)

Nenhuma divergência nova encontrada.

## Regra 1 — não é conflito

Não é `button/primary`/`secondary`/`destructive`: é um átomo de ícone sem chrome de botão, com destino de clique independente do `PushButton` (achado #11, `figma-inventory.md`).

## Estados — detalhe Figma

`state` Figma-confirmado: `On`|`Idle`|`Clicked`|`Disabled`. `On`/`Idle` sem diferença de comportamento descrita (gap, Regra 9).

## Fluid interface (Regra 8)

Feedback no press via `motion-safe:active:scale-90`, transições CSS nativas interruptíveis, mesmo padrão de `PushButton`.

## Fidelidade code-level

Glifo `DeleteButtonGlyph.svg` exportado do Figma; não usa aproximação por `lucide-react`.
