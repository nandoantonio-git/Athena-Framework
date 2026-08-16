# FreeModeButtons — histórico de auditoria

Espelha o conteúdo removido de `stories/celules/FreeModeButtons.mdx` em
2026-08-16. Node Figma:
`celule/MainCanvas/Organization/FreeMode/Buttons`, `1431:20043`.

## Status

✅ aligned (Figma-confirmado, US-020; re-verificado 2026-08-12, US-026 3ª
passada de ponto-fixo) — protocolo completo da Regra 11 aplicado. 3ª
passada: `get_design_context` fresco no nó `1431:20043` + screenshot real
confirmam os 4 ícones (adicionar/expandir/redefinir/excluir), ordem e cor
uniforme `#6b6b68` (sem destaque vermelho no botão de excluir) — sem
divergência nova.

## Figma (Figma-confirmado)

Descrição verbatim: *"painel de ações disponíveis no modo livre com
nodos"*. Composição de 4 instâncias de `atom/boxIconButton` (`1431:20102`,
já Figma-confirmado desde a US-016) — `gap-[6px]`
(`Property 1=Variant8, state=Idle` — descrição verbatim *"botao de adição
de um novo nodo"* — /`Variant7`/`Variant6`/`Variant5`, na ordem Adicionar
nodo/Expandir/Redefinir/Excluir). Este celule só extrai essa composição
pra fora do organism (antes duplicada inline) — nenhuma mudança visual em
relação ao já corrigido na US-016.

## Composição (Regra 10)

`atom/boxIconButton` × 4, mesmos glifos `lucide-react` (Plus/Maximize/
RotateCcw/Trash2) já validados como aproximação semântica aceitável desde
a US-016 (sem asset exportado nó-a-nó pra estes 4 glifos).

## Estados e fluid interface (Regra 8)

Herda de `atom/boxIconButton` (hover/active/disabled/focus-visible já
documentados nesse átomo). reduced-motion: `motion-safe:active:scale-95`
(já no átomo).

## Terminologia

Rótulos acessíveis ("Adicionar nodo"/"Expandir"/"Redefinir"/"Excluir")
Figma-confirmados via descrição do node. Nenhum termo da lista proibida
(Regra 5) se aplica.
