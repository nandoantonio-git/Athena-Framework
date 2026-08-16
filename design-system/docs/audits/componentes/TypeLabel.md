# TypeLabel — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/TypeLabel.mdx` em 2026-08-16. Node Figma: `atom/badge/TypeLabel`, `1421:18415`.

## Status

✅ aligned (estrutura) — Figma-confirmado nesta US (US-013,
releitura pontual de 2026-08-10), nó `1421:18415`, descrição verbatim:
"bagdes de rotulagem".

## Reverificado em 2026-08-12 (US-026, 3ª passada de auditoria de ponto-fixo)

`get_design_context` refeito do zero no component set
completo; confirma `kind="video"`→`brand-pink-dark` (`#b5254a`) e
`kind="other"`→`brand-pink-light` (`#e8476a`) permanecem exatamente como
fixado na 2ª passada — ambos reusam o par de rosa reservado à categoria
"Acesso rápido" (Regra 3), sem regressão para neutro genérico.

## Reverificado em 2026-08-13 (US-026, 12ª passada ativa)

`get_design_context` fresco no nó `1421:18415` confirmou uma matriz maior do
que a cobertura anterior das stories: `FileTypeLabel` em `Dark/Light` com
`Idle`/`Selected`, `DefaultTag`, `Tag` alert, e chips `Tag_Global`/
`Tag_Corrente`/`Tag_LongoPrazo` em `Neutral Idle/Hover` e
`Selected/SelectedHover/SelectedPressed`. Divergência corrigida nesta
passada: `ScopeTypeLabel` agora aceita `state` estático para documentar os
estados Figma-confirmados e as stories `FileTypeMatrix`/`ScopeMatrix`
cobrem a grade auditável.

## Duas famílias no mesmo component set (Figma-confirmado)

O Figma expõe **um único component set** com eixos `type` (9 valores:
`Image`/`Document`/`Video`/`Other`/`DefaultTag`/`Tag`/`Tag_Corrente`/
`Tag_LongoPrazo`/`Tag_Global`) × `state` (5: `Idle`/`Hover`/`Selected`/
`SelectedHover`/`SelectedPressed`) × `style` (7: `Light`/`Dark`/`Default`/
`Alert`/`Neutral`/`Primary`/`Secondary`) — mas as combinações válidas
formam **duas famílias semanticamente distintas**, cada uma com seu próprio
componente de código (evita uma única API leaky com 9×5×7 combinações,
maioria inválida):

1. **`FileTypeLabel`** (`type=Image|Document|Video|Other`) — etiqueta de
   tipo de arquivo: ponto de cor + rótulo (`Image`/`Documentos`/`Videos`/
   `Outros`). Usada em `organism/PreviewPane` (lista de etiquetas do
   arquivo) e na legenda de `molecule/StorageStatus` (`Style=Expanded`,
   segmentação da barra por tipo de arquivo).
2. **`ScopeTypeLabel`** (`type=Tag|Tag_Corrente|Tag_LongoPrazo|Tag_Global`) —
   chip selecionável usado como seletor de escopo no cabeçalho de
   `molecule/StorageStatus` (`Global`/`Acesso Rápido`/`Longo Prazo`), com
   estado `active` preenchido pela cor da categoria. Para auditoria visual,
   a prop opcional `state` força os estados Figma-confirmados
   `idle`/`hover`/`selected`/`selected-hover`/`selected-pressed`; consumidores
   de produto continuam podendo usar apenas `active`.
3. **`DangerTypeLabel`** (`type=Tag, style=Alert`) — pílula de alerta,
   reutiliza o mesmo token `--destructive` de `atom/PushButton
   isDestructive` (Regra 3).

`DefaultTag` (`Idle`=sem fundo, `Selected`=preenchido `brand-teal`) não
tem consumidor real confirmado nesta reconciliação, mas agora é representado
por `ScopeTypeLabel kind="default"` para cobrir o component set Figma sem
criar um quarto export público.

## Relação com `atom/StorageTierBadge` (US-012) — Regra 6

**Sobreposição conceitual real, escopos diferentes.** `Tag_Corrente`/
`Tag_LongoPrazo` rotulam a mesma dupla semântica que `StorageTierBadge`
(`current`/`long term`, "Acesso rápido"/"Longo prazo"), mas:

| | `ScopeTypeLabel` (`Tag_Corrente`/`Tag_LongoPrazo`) | `StorageTierBadge` |
| --- | --- | --- |
| Escopo | Seletor de **navegação/filtro** — troca qual painel de `StorageStatus` está visível | Rótulo de **item individual** — tier de UM arquivo numa lista (`organism/cleanSpaceStorage`) |
| Interativo? | ✅ Sim — `<button>`, clicável | ❌ Não — `<span>` estático |
| Cor ativa | Rosa (`brand-pink-light`/`dark`) para Acesso Rápido, teal escuro para Longo Prazo | Outline neutro, sem cor de categoria |

Isso **não contradiz** a Regra 6 (decisão humana 2026-08-10): a segmentação
*sistêmica* "guardado"/"corrente" continua resolvida por diretório, não por
badge de navegação global do app. `ScopeTypeLabel` é um seletor local
**dentro de** `molecule/StorageStatus` (alternar qual painel de status ver),
não um filtro de arquivos do file browser — escopo diferente do que a Regra
6 restringe. Documentado aqui para não perder o paralelo semântico entre os
dois componentes.

## Reconciliação com a nota de US-012 ("já usado em código")

A descrição desta story (US-013) presumia que `atom/badge/TypeLabel` já
estava em uso em `organism/CleanSpaceStorage` — **checado nesta US e não
confirmado**: `clean-space-storage.tsx` usa `StorageTierBadge` (US-012), não
`TypeLabel`. O consumidor real já existente no código é
`organism/PreviewPane` (`preview-pane.tsx`), cujo comentário já citava
`atom/badge/TypeLabel` para a lista de etiquetas, mas a implementação
anterior usava um `<span>` inline — **corrigido nesta US** para consumir
`FileTypeLabel` de fato (ver `Organisms/PreviewPane.mdx`).

## Cor do ponto (Figma-confirmado)

O `get_design_context` fresco do component set confirma quatro assets de
ponto 7px: `Image` usa `#007e96`, `Document` usa `#1a5e6e`, `Video` usa
`#b5254a` e `Other` usa `#e8476a`. `Video` e `Other` reusam o par rosa que
a Regra 3 reserva para "Acesso rápido"; isso segue implementado literalmente
e ligado ao conflito aberto em `docs/conflicts.md`.

## Cor dos chips de escopo (Figma-confirmado)

| `kind` | Fundo ativo | Fonte |
| --- | --- | --- |
| `quick-access` (`Tag_Corrente`) | `var(--brand/theme/pink/light,#e8476a)` em `selected`; `#b5254a` em hover/pressed selecionado | ✅ Figma-confirmado — Regra 3 (rosa = categoria "Acesso rápido") |
| `long-term` (`Tag_LongoPrazo`) | `var(--brand-primary-dark,#1a5e6e)` com overlays escuros em hover/pressed selecionado | ✅ Figma-confirmado |
| `global` (`Tag_Global`) | `var(--brand-primary-light,#c8dce3)` com overlays em hover/pressed selecionado | ✅ Figma-confirmado (`brand-teal-light`) |
| `default` (`DefaultTag`) | branco em `idle`; `brand-teal` em `selected` | ✅ Figma-confirmado |
| inativo (`Tag_Global`/`Tag_Corrente`/`Tag_LongoPrazo`) | `var(--neutral-surface-subtle,#eaeaea)` (aprox. `zinc-100`) com overlay em `hover` | ✅ estrutura confirmada, cor neutra aproximada (Regra 3, paleta neutra suspensa) |

## Terminologia (Regra 5)

Rótulos `"Global"`, `"Acesso Rápido"`, `"Longo Prazo"` — nenhum termo
proibido (`freezer`, `congelado`, `frio`, `camada`, `elegível`) aparece como
texto visível.

## Tipografia (Regra 4 — exceção documentada)

Todos os rótulos em `10px` (`text-[0.625rem]`) — mesma categoria de exceção
já documentada em `Tokens/Typography.mdx` e `StorageTierBadge.mdx`
(microtexto complementar de badge/tag, sempre em `rem`, nunca único
portador de informação essencial: o tipo de arquivo/escopo é redundante com
o contexto visual do item/painel ao redor).

## Estados (Regra 8)

| Estado | Aplicável? | Nota |
| --- | --- | --- |
| Default/Idle | ✅ | `FileTypeLabel` estático; `ScopeTypeLabel state="idle"` |
| Selected/Active | ✅ | `selected`/`state="selected"` (`FileTypeLabel`) / `active` ou `state="selected"` (`ScopeTypeLabel`) |
| Hover | ✅ | `ScopeTypeLabel state="hover"` para neutros; file labels não têm hover confirmado |
| Pressed | ✅ | `ScopeTypeLabel state="selected-pressed"` para estados selecionados Figma-confirmados — feedback real no press |
| Disabled | ❌ Não aplicável | Nenhuma variante `Disabled` confirmada no Figma |
| Loading/Error | ❌ Não aplicável | Etiqueta estática, sem estado assíncrono/validação |

## Fluid interface (Regra 8)

`ScopeTypeLabel` usa `transition-colors` (interruptível, sem bloqueio) e
distingue press (`active:`) de release (cor final do estado `active` via
prop). **reduced-motion: não documentado no Figma** — nenhuma variante
encontrada nos nós consultados.

## Material Liquid Glass

Não aplicável — pílulas sólidas, sem efeito de vidro (Regra 10).
