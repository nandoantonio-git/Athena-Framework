# PlusButton — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/PlusButton.mdx` em 2026-08-15. Node Figma: `1421:17726`.

## Status

✅ aligned (estrutura) · ⚠️ gap de documentação Figma aberto — urgência baixa (`On`/`Idle` não distinguidos, ver `docs/conflicts.md`). Descrição Figma verbatim: *"ícone utilizado para ações aditivas"*.

## Corrigido em auditoria US-026 pass12 (2026-08-13, Regra 11)

`get_design_context` fresco confirma o componente visual de 16×16 com glifo interno de 12×12. A implementação herdava `size-5` do wrapper compartilhado; agora passa `iconClassName="size-3"` e mantém o alvo invisível de 32×32.

## Regra 1 — não é conflito

Mesma justificativa de `Atoms/DeleteButton` — achado #11, `figma-inventory.md`.

## Estados — detalhe Figma

`style` Figma-confirmado: `Default`|`Primary`|`White` — implementado 1:1. `state` Figma-confirmado: `On`|`Idle`|`Clicked`|`Disabled`, mesma ressalva de `On`/`Idle` não distinguidos (gap, Regra 9) de `DeleteButton`. Loading/Error: ausentes no enum `State` do Figma — não inventados.

## Fluid interface (Regra 8)

Mesmo padrão de `DeleteButton`: feedback de press via `motion-safe:active:scale-90`, transições CSS nativas interruptíveis. reduced-motion não documentado no Figma.

## Fidelidade code-level

Glifo `PlusButtonGlyph.svg` — vetor real exportado do Figma. Tamanho visual 12×12 dentro do componente 16×16 Figma-confirmado; alvo de toque 32×32 é extensão de acessibilidade do código.
