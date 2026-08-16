# TagColor — histórico de auditoria

Espelha o conteúdo removido de `stories/celules/TagColor.mdx` em
2026-08-16. Node Figma: `celule/TagColor`, `1444:21979`.

## Status

✅ aligned (Figma-confirmado, US-021; re-verificado 2026-08-12, US-026 3ª
passada de ponto-fixo) — protocolo completo da Regra 11 aplicado antes de
marcar como verificado. 3ª passada: `get_design_context` fresco no nó
`1444:21979` + screenshot real confirmam ordem/cores dos 6 swatches
(verde/teal/teal-escuro/rosa/vermelho/âmbar) e anel de seleção — sem
divergência nova.

## Camada `celule`

**Camada `celule`** (AGENTS.md — Estrutura de arquivos): peça própria,
composta de `atom/Tag` (`1421:17929`) sem `label`.

## Figma (Figma-confirmado)

`get_design_context` no nó `1444:21979` retorna descrição verbatim:
*"painel onde é possivel selecionar a cor do rótulo/etiqueta. pre-selecionada
padrao é a verde."* 6 cores confirmadas no nó, na ordem exata do código-fonte:
`success` (`#096`), `primary` (`#007e96`), `primary-dark` (`#1a5e6e`),
`pink-light` (`#e8476a`), `danger` (`#bc3426`), `warning` (`#c38418`) —
todos os 6 hex batem exato com tokens já existentes em
[`stories/tokens/Colors.mdx`](../../../stories/tokens/Colors.mdx).

Elemento a elemento contra o screenshot do Figma (Regra 11.3):
- 6 dots de cor em fileira, `gap-[6px]` — ✅ presente.
- Dot `success` (1º) com anel azul (`shadow-[0_0_0_1px_rgba(0,122,255,0.25)]`)
  na variante `greePreSelected` — ✅ presente, mapeado para o estado
  `value="success"` (default).
- Tamanho do dot: `size-[7px]` (Figma-confirmado, bem pequeno — é uma
  amostra de cor, não um alvo de clique por si) — ✅ presente visualmente;
  alvo de toque real maior (`button` com `p-1` ao redor) é acessibilidade,
  não invenção visual (Regra 11.4).

## Reconciliação: `organism/drop-new-tag`

[`organism/drop-new-tag`](../../../stories/organisms/DropNewTag.mdx) (US-005) reimplementava
esses 6 swatches localmente porque este `celule` ainda não existia —
atualizado nesta US para compor `TagColor` em vez de duplicar a lista de
cores. Corrige de passagem 2 desvios que a versão local antiga tinha: cor
`danger` desatualizada (`#ac3a2e`, valor pré-Regra 3/US-010) trocada pelo
valor real Figma-confirmado `#bc3426`; anel de seleção `ring-2
ring-zinc-900 ring-offset-1` (16px, 🧩 inferido) trocado pelo anel azul
Figma-confirmado a 7px.

## Material Liquid Glass

Não aplicável — swatches de cor sólida, não o material "Liquid Glass"
(Regra 10).

## Estados (Regra 8)

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Selecionado (anel azul) | ✅ prop `value` | ✅ Figma-confirmado (`greePreSelected`) |
| Não selecionado | ✅ default | ✅ Figma-confirmado (`tagsColors`) |
| Hover/Active/Disabled/Loading | ❌ Não aplicável | Sem eixo próprio confirmado no nó — seletor simples |

## Fluid interface (Regra 8)

Troca de seleção é instantânea (`onClick` direto, sem transição
documentada no Figma). Reduced-motion não aplicável.

## Terminologia

Sem texto visível (só cor) — nenhum termo da Regra 5 se aplica. Nomes de
variante (`success`, `primary` etc.) são identificadores internos, não
texto de UI.

## Fidelidade code-level

`atom/Tag` (`tag.tsx`) já documentava esse uso antecipadamente ("usado
como amostra de paleta em `atom/TagColor`") — este componente não importa
`Tag` diretamente (a composição real do nó usa `atom/Tag` com filhos
vazios, aqui simplificada para um `<span>` de cor sólida, visualmente
idêntico) para manter a prop API mínima (`value`/`onValueChange`) sem
depender de um `label` sempre vazio.
