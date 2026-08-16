# ConfirmButton — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/ConfirmButton.mdx` em 2026-08-15. Node Figma: `1421:17747`.

## Status

✅ aligned (estrutura) · ⚠️ gap de documentação Figma aberto — urgência baixa (`On`/`Idle` não distinguidos, ver `docs/conflicts.md`). Descrição Figma verbatim: *"icone usado em funções de confirmar"* (ícone base "check": check, confirm, correct, disable_ios, done, enter, mark, ok, okay, select, tick, yes).

## Reverificado na 3ª passada de auditoria de ponto-fixo (US-026, 2026-08-12)

Nenhuma divergência nova encontrada.

## Corrigido na 12ª passada ativa (US-026, 2026-08-13)

`get_design_context` fresco reconfirmou o contêiner Figma de 16×16 para o glifo `check`; o wrapper compartilhado renderizava o SVG em 20×20. O alvo de toque invisível continua 32×32 por acessibilidade, mas o glifo visual agora usa 16×16 e `Disabled` default usa opacidade 20%, como no component set.

## Corrigido em auditoria US-026 (2026-08-11, Regra 11.4)

O botão herdava um círculo de fundo cinza no hover/active via `IconActionButton` — nenhum estado Figma-confirmado tem fundo, só o glifo isolado com cor/opacidade variando. Elemento inventado removido.

## Regra 1 — não é conflito

Mesma justificativa de `Atoms/DeleteButton` — achado #11, `figma-inventory.md`.

## Estados — detalhe Figma

`state` Figma-confirmado: `On`|`Idle`|`Clicked`|`Disabled`, mesma ressalva de `On`/`Idle` não distinguidos (gap, Regra 9).

## Fluid interface (Regra 8)

Mesmo padrão de `DeleteButton`: feedback de press via `motion-safe:active:scale-90`, transições CSS nativas interruptíveis.

## Fidelidade code-level

Glifo `ConfirmButtonGlyph.svg` exportado do Figma; não usa aproximação por `lucide-react`.
