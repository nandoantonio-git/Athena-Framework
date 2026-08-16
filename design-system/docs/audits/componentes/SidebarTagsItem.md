# SidebarTagsItem — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/SidebarTagsItem.mdx` em 2026-08-16. Node Figma: `atom/Sidebar/Tags/Items`, `1421:20907`.

## Status

✅ aligned — protocolo completo da Regra 11 aplicado nesta US
(US-019): node não capturado no `get_metadata` original da página inteira
(profundidade insuficiente do scan), localizado por busca textual no dump
completo (`get_metadata` no node raiz da página, `1421:17272`) e confirmado
via `get_design_context` (`skillNames=figma-design-to-code`), screenshot
Figma comparado elemento-a-elemento contra o Storybook renderizado.

## Reverificado em 2026-08-12 (US-026, 3ª passada de auditoria de ponto-fixo)

`get_design_context` refeito do zero no node `1421:20907`,
nenhuma divergência nova encontrada.

## Reverificado em 2026-08-13 (US-026, 12ª passada ativa)

`get_design_context` fresco confirmou três variantes visíveis
(`TypeLabel-sidebar`, `Variant2`, `Variant3`). Divergência encontrada e
corrigida: o story agregado renderizava só idle + selected; `state="hover"`
agora documenta a variante `Variant2` de forma capturável por screenshot,
sem depender apenas de pseudo-classe.

## Figma (Figma-confirmado)

Descrição verbatim: *"tags que ficam presentes na sidebar"*. 3 variantes de
`property1`: `TypeLabel-sidebar` (idle), `Variant2` (hover), `Variant3`
(selected).

## Substitui markup ad hoc em `organism/Sidebar` (Regra 11)

A seção "Etiquetas" de [`organism/Sidebar`](../organisms/Sidebar.mdx)
(US-006) renderizava cada tag com um `<span>` inline (`bg-brand-teal`
`size-1.5` + `text-base text-zinc-900`) — nunca teve node Figma confirmado
até esta US. `Sidebar.mdx` já documentava essa lacuna explicitamente
("não há sub-componente atom/molecule próprio documentado para uma linha
de nav individual"). Reconciliado nesta US: `organism/Sidebar` agora
consome este átomo diretamente.

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| Ponto `7px`, cor `#007e96` (asset `Ellipse 14`) | ✅ `size-[7px] bg-brand-teal` (`--brand-teal`=`#007e96`, match exato) | ✅ Figma-confirmado |
| Texto `16px` Figtree Regular, `brand-secondary-dark` (`#1a1714`) | ✅ `text-base text-brand-secondary-dark` | ✅ Figma-confirmado |
| Padding horizontal `20px`, gap `6px` | ✅ `px-5 gap-1.5` | ✅ Figma-confirmado |
| Estado hover — fundo `effect-overlay-subtle` (`rgba(191,199,210,0.1)`) | ✅ `hover:bg-effect-overlay-subtle` (token já existente, `--effect-overlay-subtle`) | ✅ Figma-confirmado |
| Estado selected — fundo `rgba(0,0,0,0.14)`, `rounded-[6px]` | ✅ `bg-[#00000024] rounded-[6px]` (prop `selected`) | ✅ Figma-confirmado |

## Cor (Regra 3)

Ponto usa `--brand-teal` (`#007e96`) — mesmo token já em uso no resto do
projeto, valor confirmado pelo asset SVG real do Figma (`fill="#007E96"`),
não aproximado. Texto usa `--brand-secondary-dark`, já existente no tema.
Fundo `selected` é cor literal sem token semântico (Regra 3, paleta neutra
suspensa).

## Estados (Regra 8)

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Idle | ✅ Sem fundo | ✅ Figma-confirmado |
| Hover | ✅ `state="hover"` para documentação visual + `:hover` do browser em uso real | ✅ Figma-confirmado |
| Selected | ✅ `state="selected"` ou prop legada `selected` | ✅ Figma-confirmado |
| Disabled/Loading/Error | ❌ Não aplicável | Sem eixo confirmado no node consultado |

**reduced-motion**: não documentado no Figma; sem animação própria.

## Material Liquid Glass

Não aplicável — preenchimento de cor sólida, sem uso do material (Regra 10).

## Fidelidade code-level

Ponto reproduzido como `<span>` com `bg-brand-teal` em vez do asset SVG
(`Ellipse 14`) — círculo sólido de cor única, sem detalhe visual perdido.
