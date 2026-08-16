# DropdownSelectLabelItem — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/DropdownSelectLabelItem.mdx` em 2026-08-15. Node Figma: `1444:21704`.

## Status

✅ aligned (US-019) — protocolo completo da Regra 11 aplicado. Reverificado na 3ª passada de ponto-fixo (2026-08-12), nenhuma divergência nova.

## Corrigido em auditoria US-026 (2026-08-11)

Faltava `shrink-0` na pílula interna de texto (presente no Figma real: `shrink-0 w-[78px]`) — sem ele, o flex pai encolhia a pílula abaixo do necessário e o texto "+ Nova Etiqueta" era cortado (renderizava "+ Nova Etiquet"). Corrigido adicionando `shrink-0` na classe.

## Descrição Figma verbatim

*"item da pilula de etiquetar, no qual você insere input o nome desejado de rótulo. Contem variavel de estados"*. Texto verbatim confirmado: "+ Nova Etiqueta".

## Sem molecule consumidora (Regra 9)

`molecule/DropdownSelect/Label` (segundo tipo de dropdown, mencionado na lacuna de catálogo de 2026-08-11 em `AGENTS.md`) não estava implementada na época — ficou deferida, não inventada.

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| Wrapper `80px`×`18px`, `rounded-[4px]`, sem fundo próprio | ✅ | ✅ Figma-confirmado |
| Miolo `pl-[6px] pr-[6.5px]`, `rounded-[4px]` | ✅ | ✅ Figma-confirmado |
| Texto "+ Nova Etiqueta", `10px` Figtree Regular, `#3f3f46` | ✅ `text-[0.625rem] text-zinc-700` | ✅ Figma-confirmado |
| Estado `hover` — fundo `rgba(113,113,122,0.2)` | ✅ `hover:bg-[#71717a33]` | ✅ Figma-confirmado |
| Estado `clicked` — fundo `rgba(107,107,104,0.45)` | ✅ `bg-[#6b6b6873]` (prop `active`) | ✅ Figma-confirmado |

Nota: em 2026-08-15 o wrapper foi alterado de largura fixa `w-20` pra `w-fit min-w-20` (ver `Componentes/histórico`, achado do usuário sobre padding lateral) — o checklist acima reflete a leitura Figma original, não a decisão humana posterior.

## Cor (Regra 3)

Mesmos 2 tons de overlay já usados em `DropdownSelectGroupByItem` — cores literais do Figma sem token semântico no tema.

## Estados — checklist Figma-confirmado

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Idle | ✅ Sem fundo | ✅ Figma-confirmado |
| Hover | ✅ `:hover` nativo | ✅ Figma-confirmado |
| Clicked | ✅ prop `active` | ✅ Figma-confirmado |
| Disabled/Loading/Error | ❌ Não aplicável | Sem eixo confirmado |
