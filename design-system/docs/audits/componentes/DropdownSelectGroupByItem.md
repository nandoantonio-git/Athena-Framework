# DropdownSelectGroupByItem — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/DropdownSelectGroupByItem.mdx` em 2026-08-15. Node Figma: `1444:21587`.

## Status

✅ aligned (US-019) — protocolo completo da Regra 11 aplicado. Reverificado na 3ª passada de ponto-fixo (2026-08-12), nenhuma divergência nova.

## Descrição Figma verbatim

*"item da pilula de agrupar, no qual você seleciona a condição de agrupamento. Contem variavel de estados"*. Linha individual usada dentro da lista expandida de `molecule/DropdownSelectGroupBy` (`1421:18719`) — não existia como node próprio no `get_metadata` anterior (US-005), achado nesta US como componente dedicado.

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| Container `104px`, `rounded-[4px]`, `px-[6px] py-[4px]` | ✅ `w-[104px] rounded-[4px] px-1.5 py-1` | ✅ Figma-confirmado |
| Texto `10px` Figtree Regular, centralizado, `#3f3f46` | ✅ `text-[0.625rem] text-zinc-700` | ✅ Figma-confirmado |
| Estado `hover` — fundo `rgba(113,113,122,0.2)` | ✅ `hover:bg-[#71717a33]` | ✅ Figma-confirmado |
| Estado `selected` — fundo `rgba(107,107,104,0.45)` | ✅ `bg-[#6b6b6873]` | ✅ Figma-confirmado |

## Cor (Regra 3)

`zinc-700` bate exato com `neutral-text-secondary` (`#3f3f46`). Os 2 fundos de estado são cores literais do Figma sem token semântico correspondente (paleta neutra suspensa, Regra 3) — mesmo tratamento de `atom/Tag`/`atom/firstUploadSymbol`.

## Estados — checklist Figma-confirmado

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Idle | ✅ Sem fundo | ✅ Figma-confirmado |
| Hover | ✅ `:hover` nativo | ✅ Figma-confirmado |
| Selected | ✅ prop `selected` | ✅ Figma-confirmado |
| Disabled/Loading/Error | ❌ Não aplicável | Sem eixo confirmado |
