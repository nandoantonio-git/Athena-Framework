# BoxIconButton — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/BoxIconButton.mdx` em 2026-08-15. Node Figma: `atom/boxIconButton`, `1431:20102`.

## Status

✅ aligned (Figma-confirmado, US-016) — protocolo completo da Regra 11 aplicado antes de marcar como verificado.

## Reverificado na 3ª passada de auditoria de ponto-fixo (US-026, 2026-08-12)

Protocolo completo da Regra 11 reaplicado do zero — nenhuma divergência nova encontrada (o uso de `destructive/35` como fundo no glifo de excluir permanece Figma-confirmado especificamente para esse glifo).

## Descrição Figma verbatim

`get_design_context` no nó `1431:20102`: *"botoes do painel de ações disponíveis no modo livre com nodos"*. Sub-nó `Property 1=Variant8, state=Idle` (`1431:20103`): *"botao de adição de um novo nodo"* — único glifo com confirmação Figma explícita; os demais 3 (Expandir/Redefinir/Excluir) são inferidos por semântica de ícone (🧩 Inferido, Regra 9).

## Reconciliação (US-016)

`organism/OrganizeFreeModeCanvas` já renderizava esse exato toolbar com markup de `<button>` inline duplicando esta anatomia — corrigido para consumir `BoxIconButton` diretamente, `danger` só no glifo de excluir.

## Estados — checklist Figma-confirmado

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Idle | ✅ `bg-brand-secondary-light` | ✅ Figma-confirmado |
| Hover | ✅ `hover:bg-brand-secondary` (`hover:bg-destructive/35` se `danger`) | ✅ Figma-confirmado |
| Clicked/Active | ✅ `active:bg-brand-secondary-dark` (`active:bg-destructive/35` se `danger`) + `motion-safe:active:scale-95` | ✅ Figma-confirmado |
| Disabled | ✅ prop nativa `disabled` → `disabled:opacity-40` | 🧩 Inferido |
| Loading/Error | ❌ Não aplicável | Botão de ação de toolbar, sem operação assíncrona própria |

## Material Liquid Glass

Não aplicável — fundo é cor sólida do tema, não o material Liquid Glass.

## Fidelidade code-level

Glifos `Plus`/`Maximize`/`RotateCcw`/`Trash2` (`lucide-react`) — mesma escolha já validada em `organism/OrganizeFreeModeCanvas` antes desta US; reconciliados aqui para consumir o átomo em vez de duplicar a anatomia.
