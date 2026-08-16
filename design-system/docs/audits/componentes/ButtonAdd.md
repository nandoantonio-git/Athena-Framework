# ButtonAdd — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/ButtonAdd.mdx` em 2026-08-15. Node Figma: `atom/buttonAdd`, `1421:20509`.

## Status

✅ aligned (Figma-confirmado, US-016) — protocolo completo da Regra 11 aplicado.

## Reverificado na 3ª passada de auditoria de ponto-fixo (US-026, 2026-08-12)

Nenhuma divergência nova encontrada.

## Reverificado na pass13 de ponto-fixo (US-026, 2026-08-13)

Achado material corrigido — `get_design_context` fresco confirma 4 estados visuais estáticos (`Idle`, `Hover`, `Clicked`, `Disabled`), mas o Storybook só congelava repouso/desabilitado. `state` foi exposto para auditoria e a story `AllStates` agora captura a matriz completa com o placeholder literal Figma `"Label"`.

## Descrição Figma verbatim

*"utilizado para adicionar novos arquivos no fluxo de guardar arquivos em longo prazo e no fluxo do criar template de organização modo livre ao adicionar novas regras de filtro no menu contextual do canva/tela."*

## Reconciliação (US-016)

`organism/SaveLongTermFileStorage` já renderizava "Adicionar arquivos" com markup de `<button>` inline duplicando esta anatomia — corrigido para consumir `ButtonAdd`. `molecule/nodoContextMenu` usa o mesmo átomo para "Adicionar Regra".

## Material Liquid Glass

Fundo em repouso usa `effect-glass-white-05` — camada única, sem o material completo de 2 camadas usado em painéis maiores.

## Estados — checklist Figma-confirmado

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Idle | ✅ `border-zinc-300/70 bg-effect-glass-white-05`, texto `brand-teal` | ✅ Figma-confirmado |
| Hover | ✅ `hover:bg-zinc-500/15` | ✅ Figma-confirmado |
| Clicked | ✅ `active:bg-brand-teal active:text-white` | ✅ Figma-confirmado |
| Disabled | ✅ `disabled:opacity-60 disabled:text-zinc-300` | ✅ Figma-confirmado |

## Fidelidade code-level

Glifo `Plus` (`lucide-react`, 12px) — correspondência direta com o ícone `plus` do Figma. Rótulo compacto (`text-xs`) segue decisão humana documentada em `docs/conflicts.md` para botões `h-8` (Regra 4).
