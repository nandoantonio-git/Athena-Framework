# CleanSpaceListSelection — histórico de auditoria

Espelha o conteúdo removido de `stories/celules/CleanSpaceListSelection.mdx`
em 2026-08-16. Node Figma: `celule/cleanSpaceStorage/listSelection`,
`1436:20496`.

## Status

✅ aligned (Figma-confirmado, US-021; re-verificado 2026-08-12, US-026 3ª
passada de ponto-fixo) — protocolo completo da Regra 11 aplicado antes de
marcar como verificado. 3ª passada: `get_design_context` fresco no nó
`1436:20496` re-confirma o ícone de arquivo azul (`#2b7fff`,
`bg-[rgba(43,127,255,0.1)]`) corrigido na 2ª passada permanece correto
(**não regrediu de novo** para teal) — sem divergência nova.

## Camada `celule`

**Camada `celule`** (AGENTS.md — Estrutura de arquivos): peça própria,
reutiliza `atom/StorageTierBadge` (`1457:21014`).

## Figma (Figma-confirmado)

`get_design_context` no nó `1436:20496` retorna descrição verbatim: *"lista
de seleção de arquivos grandes dentro do fluxo de libherar espaço."* 2
variantes (`property1`): `Default` (checkbox vazio) e `Variant2` (checkbox
marcado) — mapeadas para a prop `selected`.

Elemento a elemento contra o screenshot do Figma e os 2 assets SVG reais
exportados do nó (Regra 11.3, não aproximado por lógica própria):
- Checkbox vazio: fundo `var(--neutral-surface-muted,rgba(113,113,122,0.2))`,
  borda `var(--neutral-border-subtle,#ececf0)`, `rounded-[4px]`, sombra sutil
  — ✅ presente.
- Checkbox marcado: asset SVG real exportado (`fill="#007E96"` no fundo,
  `stroke="white"` no check) — ✅ presente, reproduzido com `bg-brand-teal`
  + `lucide-react` `Check` branco (não um vetor genérico assumido — a cor
  bate exata com o fill do SVG real).
- Ícone de arquivo: asset SVG real exportado (`FileText`, `stroke="#2B7FFF"`)
  dentro de um círculo `rgba(43,127,255,0.1)` — ✅ presente, `lucide-react`
  `FileText` na cor exata confirmada pelo SVG.
- Nome do arquivo (`16px`, `#09090b`) + metadados (`10px`, `#71717b`) — ✅
  presentes.
- `atom/StorageTierBadge` à direita ("Acesso rápido") — ✅ presente, mesmo
  componente já usado em `organism/cleanSpaceStorage`.

## Reconciliação: `organism/cleanSpaceStorage`

[`organism/cleanSpaceStorage`](../../../stories/organisms/CleanSpaceStorage.mdx) (US-010)
já renderizava essa linha inline (`<li>` com `<input type="checkbox">`
nativo sem estado e um quadrado placeholder sem ícone, antes deste `celule`
existir) — atualizado nesta US para compor este componente em vez de
markup duplicado. Corrige de passagem 2 gaps de fidelidade que a versão
inline tinha: ausência do ícone `FileText` (era um `<span>` de cor sólida
sem ícone) e checkbox sem check real ao marcar (era um `<input>` nativo
sem estilo do sistema).

## Material Liquid Glass

Não aplicável — linha com fundo transparente sobre o painel-mãe (que já
usa `Liquid Glass` em `organism/cleanSpaceStorage`, documentado lá).

## Estados (Regra 8)

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Não selecionado | ✅ default | ✅ Figma-confirmado (`Default`) |
| Selecionado | ✅ prop `selected` | ✅ Figma-confirmado (`Variant2`, asset SVG real) |
| Hover/Disabled/Loading | ❌ Não aplicável | Sem eixo próprio confirmado no nó |

## Fluid interface (Regra 8)

`transition-colors` no checkbox ao alternar estado. Reduced-motion não
documentado no Figma.

## Terminologia

"Acesso rápido" via `atom/StorageTierBadge` (termo aprovado, Regra 5).
Nome/metadados de arquivo são dados de amostra, não terminologia de
produto.

## Fidelidade code-level

`name`/`meta`/`tier` como props (mesma forma que `organism/cleanSpaceStorage`
já usava para `largeFiles`) — sem hardcode de dado de amostra no
componente reutilizável.
