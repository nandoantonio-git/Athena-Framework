# DropdownSelectLabel — histórico de auditoria

Espelha o conteúdo removido de `stories/molecules/DropdownSelectLabel.mdx` em 2026-08-16. Node Figma: `molecule/DropdownSelect/Label`, `1439:19650`.

## Status

✅ aligned (estado fechado) — protocolo completo da Regra 11
aplicado nesta US (US-022): `get_design_context` real no node
(`skillNames=figma-design-to-code`), screenshot Figma comparado
elemento-a-elemento contra o Storybook renderizado.

## Reverificado em auditoria de ponto-fixo (3ª passada, 2026-08-12)

Novo `get_design_context` no nó `1439:19650` retorna byte-a-byte o mesmo código
já documentado, incluindo o binding `opacity-[var(--radius-3xl,0.32)]` no
wrapper raiz (ver "Gap encontrado no Figma" abaixo) — **confirmado que o
achado ainda reproduz**, decisão de não aplicar a opacidade bruta
mantida. Screenshot Storybook (`Default`/`Expanded`/`Disabled`) sem
esmaecimento a 32%, consistente com a leitura anterior. Nenhuma divergência
nova.

## Figma (Figma-confirmado)

`get_metadata`+`get_design_context` no nó `1439:19650` confirmam: é uma
**instância única** (103.67×63px), não um component set com eixo de
estado — ao contrário de `molecule/DropdownSelect/GroupBy`, não existe
variante `Expanded`/`Disabled` própria para este node específico. Texto
verbatim confirmado: rótulo de seção **"ETIQUETAR"** (10px bold,
`neutral-text-tertiary`/`#71717a`), botão **"Etiquetar"** (10px), ícone
`atom/Icon/Label` e um chevron de 8×4.93px (aproximado por
`atom/Icon/ArrowDropDown`, mesmo glifo já usado em `molecule/FolderCard`
para "arrow_drop_down").

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| Rótulo "ETIQUETAR", 10px bold, `#71717a` | ✅ `text-[0.625rem] font-bold text-zinc-500` (zinc-500 = `#71717a` exato) | ✅ Figma-confirmado |
| Pílula Liquid Glass, `rounded-xl`, `effect-glass-light-45` | ✅ `rounded-xl bg-effect-glass-light-45 backdrop-blur-sm` (token já existente, Materials) | ✅ Figma-confirmado |
| `atom/Icon/Label` | ✅ `<Icon name="Label" />` | ✅ Figma-confirmado |
| Texto "Etiquetar", 10px | ✅ `text-[0.625rem]` | ✅ Figma-confirmado |
| Chevron 8×4.93px | ✅ `<Icon name="ArrowDropDown" className="size-2.5" />` | 🧩 Aproximado — vetor da instância não tem `data-name` próprio no `get_design_context`, tratado como o mesmo glifo `arrow_drop_down` já confirmado em outro node |

## Gap encontrado no Figma (não reproduzido)

O wrapper raiz do node retorna `opacity-[var(--radius-3xl,0.32)]` no código
gerado — um valor de opacidade (`0.32`) amarrado a uma variável cujo nome
(`radius-3xl`) não tem relação semântica com opacidade. O screenshot do
Figma não mostra o texto esmaecido (legibilidade normal), consistente com
um binding incorreto no arquivo fonte, não uma opacidade intencional do
componente — **não reproduzido** (Regra 9: não apresentar uma leitura
ambígua como fato), documentado aqui como achado, não como CONFLICT (não
diverge de nenhuma Regra travada).

## Composição (Regra 10) — lista expandida

Sem variante `Expanded` confirmada neste node, a abertura da lista
(`expanded`/`labels`/`onCreateLabel`) é **🧩 Inferida** por analogia direta a
`DropdownSelectGroupBy` (mesmo padrão de interação: pílula fechada → lista
de opções). Reusa [`atom/DropdownSelect/Label/Item`](../atoms/DropdownSelectLabelItem.mdx)
(`1444:21704`, Figma-confirmado, texto "+ Nova Etiqueta") — átomo que
ficava deferido desde a US-019 justamente à espera desta molecule. Rótulos
extras passados via prop `labels` renderizam o mesmo átomo sem o prefixo
"+", puramente inferido (sem node Figma para "item de etiqueta existente
selecionável").

## Estados (Regra 8)

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Default (fechado) | ✅ | ✅ Figma-confirmado |
| Expanded (aberto) | ✅ prop `expanded` | 🧩 Inferido (sem variante própria no node) |
| Disabled | ✅ prop `disabled` (mesmo tratamento `opacity-50`/`pointer-events-none` de `DropdownSelectGroupBy`) | 🧩 Inferido (sem eixo `Disabled` confirmado neste node) |
| Hover | ❌ Não implementado | Sem eixo próprio confirmado |

## Fluid interface (Regra 8)

Chevron gira (`rotate-180`) ao alternar `expanded`, `transition-transform`
nativo — mesma convenção de `DropdownSelectGroupBy`. **reduced-motion**:
não documentado no Figma.

## Terminologia

"ETIQUETAR"/"Etiquetar" são texto Figma-confirmado, fora da lista
proibida/aprovada da Regra 5 (vocabulário de rotulagem de arquivo, não de
storage-tier) — sem CONFLICT a registrar.

## Material Liquid Glass

Fundo usa `var(--effect-glass-light-45)` — ver spec completa em
`Tokens/Materials` (Regra 10, não reimplementada aqui).
