# NodoContextMenuItem — histórico de auditoria

Espelha o conteúdo removido de `stories/celules/NodoContextMenuItem.mdx`
em 2026-08-16. Node Figma: `celule/nodoContextMenuItem`, `1421:20528`.

## Status

✅ aligned (Figma-confirmado, US-016; 🔧 corrigido em US-026;
re-verificado 2026-08-13, pass12) — protocolo completo da Regra 11
aplicado antes de marcar como verificado. Retomada pass12:
`get_design_context` fresco no nó `1421:20528` confirmou que a matriz
Figma expõe não só pílulas fechadas, mas dropdowns abertos por tipo
(`Atributo`/`Operação`/`Intervalo`), seleções internas e estados de erro.
A cobertura foi ampliada com `kind`, `selectedOption` e story `AllStates`.

## Camada `celule`

**Camada `celule`** (AGENTS.md — Estrutura de arquivos): peça própria,
diferente de `atom`/`molecule` — não forçada em nenhuma das duas.

## Figma (Figma-confirmado)

`get_design_context` no nó `1421:20528` retorna descrição verbatim:
*"dropdown de seleção de atributos e condições do menu contextual do canva
Modo livre template. ha aba data será de acordo com o navegador ou de uma
biblioteca(seus rqueistos é escolher uma data ou um intervalo de datas."*
— a aba de calendário real citada no fim da descrição não é implementada
aqui (fora de escopo de uma pílula de catálogo; remete a um componente de
data externo, não a este nó).

O node real expõe uma combinatória grande de variantes
(`selectionDropdownConditionals1`–`14` × `type` × `property3`) — modelada
com eixos semânticos equivalentes: `kind` (`attribute`/`condition`/
`value`/`date`/`interval`), `hasChevron`, `expanded`, `selectedOption`,
`value` e `error` (`wrongInput`).

## Material Liquid Glass

Não aplicável — pílulas usam cor sólida (zinc), não o material "Liquid
Glass" (Regra 10); o painel-mãe (`molecule/nodoContextMenu`) que aplica o
material.

## Estados (Regra 8)

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Placeholder (fechado, sem valor) | ✅ `bg-zinc-500/20 text-zinc-400` | ✅ Figma-confirmado (`type=Default`) |
| Filled (fechado, com valor) | ✅ prop `value` → `bg-zinc-800 text-white` | ✅ Figma-confirmado (pílulas escuras da linha 1 do screenshot) |
| Expanded (aberto, lista de opções) | ✅ prop `expanded` + `options`; painel inline `bg-zinc-600` | ✅ Figma-confirmado (dropdowns abertos: Atributo/Operação/Intervalo) |
| Selected option | ✅ prop `selectedOption` → `bg-black/14` | ✅ Figma-confirmado |
| Error (`wrongInput`) | ✅ prop `error` → anel/borda vermelha | ✅ Figma-confirmado (`property3=wrongInput`) |
| Disabled | ✅ prop nativa `disabled` → `disabled:opacity-50` | 🧩 Inferido — sem eixo `Disabled` próprio confirmado neste nó |
| Loading | ❌ Não aplicável | Seletor síncrono, sem operação assíncrona |

## Fluid interface (Regra 8)

Chevron gira (`rotate-180`) via `transition-transform` ao abrir/fechar
(mesmo padrão de `DropdownSelectGroupBy`), interruptível por construção.
reduced-motion não documentado no Figma.

## Terminologia

Textos "Atributo"/"Operação"/"Valor..."/"Data"/"Intervalo" e as opções
("Tamanho", "Maior que", "> Maior", "Durante"/"Antes"/"Depois" etc.) são
Figma-confirmados verbatim no código-fonte retornado. Nenhum termo da lista
proibida (Regra 5) se aplica — vocabulário de construção de filtro, não de
storage-tier.

## Fidelidade code-level

Chevron via `lucide-react` (`ChevronDownIcon`), mesmo glyph direcional
confirmável do Figma e mesma escolha de `DropdownSelectGroupBy`.
