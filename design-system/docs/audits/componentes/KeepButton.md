# KeepButton — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/KeepButton.mdx` em 2026-08-15. Node Figma: `1421:17793`.

## Status

✅ aligned (estrutura) · ⚠️ gap de documentação Figma aberto — urgência baixa (`On`/`Idle` não distinguidos, ver `docs/conflicts.md`). Descrição Figma verbatim: *"icone usado em funções de guardar em longo prazo"*.

## Corrigido em auditoria US-026 (2026-08-11, Regra 11.4)

Mesmo achado de `ConfirmButton`/`DeleteButton` — círculo de fundo cinza inventado no hover/active removido (nenhum estado Figma-confirmado tem fundo, só o glifo 16×16 dentro do container 20×20 variando cor/opacidade).

## Corrigido em auditoria US-026 pass12 (2026-08-13, Regra 11)

`get_design_context` fresco confirma glifo visual de 16×16 dentro do container 20×20. A implementação herdava `size-5` do wrapper compartilhado; agora passa `iconClassName="size-4"` e mantém o alvo invisível de 32×32.

## Regra 1 — não é conflito

Mesma justificativa de `Atoms/DeleteButton` — achado #11, `figma-inventory.md`.

## Estados — detalhe Figma

`style` Figma-confirmado: `Default`|`Primary`|`White` — implementado 1:1. `state` Figma-confirmado: `On`|`Idle`|`Clicked`|`Disabled`, mesma ressalva de `On`/`Idle` não distinguidos (gap, Regra 9). Loading/Error: ausentes no enum `State` do Figma — não inventados.

## Fluid interface (Regra 8)

Mesmo padrão de `DeleteButton`: feedback de press via `motion-safe:active:scale-90`, transições CSS nativas interruptíveis. reduced-motion não documentado no Figma.

## Fidelidade code-level

Glifo `KeepButtonGlyph.svg` — vetor real exportado do Figma. Tamanho visual 16×16 dentro do container 20×20 Figma-confirmado; alvo de toque 32×32 é extensão de acessibilidade do código.
