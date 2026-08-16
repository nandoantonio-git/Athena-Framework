# Callout — histórico de auditoria

Espelha o conteúdo removido de `stories/celules/Callout.mdx` em 2026-08-16.
Node Figma: `celule/Callout`, `1421:20028`.

## Status

✅ aligned (Figma-confirmado, US-021; re-verificado 2026-08-12, US-026 3ª
passada de ponto-fixo) — protocolo completo da Regra 11 aplicado antes de
marcar como verificado. 3ª passada: `get_design_context` fresco no nó
`1421:20028` + screenshot real confirmam ambas variantes (`Warning`/`Info`)
pixel-a-pixel batendo com o Figma — sem divergência nova.

## Camada `celule`

**Camada `celule`** (AGENTS.md — Estrutura de arquivos): peça própria,
diferente de `atom`/`molecule`.

## Figma (Figma-confirmado)

`get_design_context` no nó `1421:20028` retorna descrição verbatim:
*"utilizado para dar avisos importantes para usuário, previsão contra
erro."* 2 variantes (`property1`): `Default` (aviso, âmbar) e `Variant2`
(informativo, primária/teal) — mapeadas para a prop `variant`
(`warning`/`info`).

Texto de amostra Figma-confirmado verbatim (idêntico nas duas variantes no
nó real): *"Excluir sua conta é permanente e não pode ser desfeito. Isso
também remove os arquivos guardados no longo prazo — eles não poderão ser
recuperados depois."*

Elemento a elemento contra o screenshot do Figma (Regra 11.3):
- Ícone `⚠`/`ℹ️` à esquerda — ✅ presente, mesma cor de classe (`#80590d`)
  nos dois casos no código-fonte real (não é bug: o emoji `ℹ️` ignora
  `color` no browser, só o glifo monocromático `⚠` é afetado).
- Fundo âmbar sutil (`var(--color-feedback-warning-subtle,#f59e0b33)`) +
  borda `#fad98c` (warning) — ✅ presente.
- Fundo `var(--brand-primary-light,#c8dce3)` (`bg-brand-teal-light`) +
  borda `var(--brand-primary-default,#007e96)` (`border-brand-teal`) (info)
  — ✅ presente, tokens já existentes no tema batem exato com os valores
  Figma.
- Texto `var(--color-feedback-warning,#c38418)` (warning) /
  `var(--brand-primary-dark,#1a5e6e)` (`text-brand-teal-dark`, info) — ✅
  presente. **Achado nesta US**: `--brand-teal-dark` no tema era uma
  aproximação derivada (`color-mix`) — corrigido em `src/index.css` para o
  hex Figma-confirmado `#1a5e6e` (mesmo valor já documentado em
  `stories/tokens/Colors.mdx` desde a varredura `get_variable_defs` de
  US-009, mas nunca antes ligado à variável CSS real; confirmado 2x nesta
  US, aqui e em `TagColor`).

## Material Liquid Glass

Não aplicável — Callout usa cor sólida (âmbar/teal), não o material
"Liquid Glass" (Regra 10).

## Estados (Regra 8)

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Warning (`Default`) | ✅ `variant="warning"` | ✅ Figma-confirmado |
| Info (`Variant2`) | ✅ `variant="info"` | ✅ Figma-confirmado |
| Hover/Active/Disabled/Loading | ❌ Não aplicável | Elemento estático (texto de aviso), sem interação |

## Fluid interface (Regra 8)

Não aplicável — sem transição/interação, componente estático.
Reduced-motion não documentado no Figma (não há motion neste nó).

## Terminologia

Texto de amostra ("Excluir sua conta é permanente...") é Figma-confirmado
verbatim. Nenhum termo da lista proibida (Regra 5) se aplica.

## Fidelidade code-level

Corpo do texto usa `Body/SM` (13px, Figma-confirmado) — mantido conforme o
Figma, consistente com o mesmo tratamento já aceito em
[`organism/FAQ/info/Card`](../../../stories/organisms/FaqInfoCard.mdx) (`FaqCallout`,
também 13px) e com a exceção documentada de `Type/Body/SM` no
`docs/conflicts.md` (US-011, "microtexto complementar") — não promovido ao
piso de 16px da Regra 4 para manter consistência com o outro componente de
callout já existente no sistema, que usa o mesmo padrão de texto.
