# ClearButton — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/ClearButton.mdx` em 2026-08-15. Node Figma: `1421:17768`.

## Status

✅ aligned (estrutura) · ⚠️ gap de documentação Figma aberto — urgência baixa (`On`/`Idle`/`ClickedFilled` não distinguidos, ver `docs/conflicts.md`). Descrição Figma verbatim: *"icone usado em funções de cancelar"* (ícone base "clear": back, cancel, clear, correct, delete, erase, exit, x).

## Reverificado na 3ª passada de auditoria de ponto-fixo (US-026, 2026-08-12)

Nenhuma divergência nova encontrada.

## Corrigido em auditoria US-026 (2026-08-11, Regra 11.4)

A pílula de fundo no hover/active era aplicada com cores genéricas (`zinc-100`/`zinc-200`) a todos os `style`, mas o Figma só confirma essa pílula para `style="default"` (`Hover`/`ClickedFIlled`, `rgba(107,107,104,0.18)`/`#c8dce3`) — `Red`/`White` não têm estado `Hover` no Figma. Corrigido: pílula restrita a `default` com as cores literais do Figma; `red`/`white` ficam só com troca de cor do glifo.

## Regra 1 — não é conflito

Mesma justificativa de `Atoms/DeleteButton` — achado #11, `figma-inventory.md`.

## Estados — detalhe Figma

`state` Figma-confirmado tem 2 valores a mais que os outros ícones-botão: `Idle`|`Hover`|`Clicked`|`ClickedFilled`|`Disabled`|`On`. `ClickedFilled` não tem descrição própria distinguindo-o de `Clicked` — gap (Regra 9: não inventado), ambos mapeiam para `:active` até confirmação futura.

## Fluid interface (Regra 8)

Mesmo padrão de `DeleteButton`: feedback de press via `motion-safe:active:scale-90`, transições CSS nativas interruptíveis. reduced-motion não documentado no Figma.

## Fidelidade code-level

Glifo `X` (`lucide-react`) — corresponde ao ícone base "clear"/"x" citado na descrição Figma verbatim.
