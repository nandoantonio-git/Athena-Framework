# PopoverNotification — histórico de auditoria

Espelha o conteúdo removido de `stories/molecules/PopoverNotification.mdx` em 2026-08-16. Node Figma: `molecule/popover/Notification`, `1421:19626`.

## Descrição Figma verbatim

*"popover para notificar mudanças de estado, exemplo: uma
organização criada."*

## Status

✅ aligned (Figma-confirmado, US-023) — protocolo completo da
Regra 11 aplicado antes de marcar como verificado.

## Releitura de 2026-08-12 (pass 3, 3ª auditoria de ponto-fixo)

`get_design_context` reexecutado no nó `1421:19626` para as 6 variantes —
mesmo achado do `molecule/Notification`: wrapper usava `rounded-2xl`
(`--radius-2xl`) mas o Figma especifica `var(--radius-xl,16px)`. Corrigido
para `rounded-xl` em `popover-notification.tsx` (wrapper + camada de
glass). Alturas (`59px`\|`66px`), textos por variante e o eixo `showImage`
reconferidos via screenshot renderizado de todas as 7 stories, sem novas
divergências.

## Variantes (Figma-confirmado)

`get_design_context` no nó `1421:19626` retorna 6 variantes no eixo
`variant`: `Notification`, `Adition`, `Variant3`, `collapsed`, `deeparchive`,
`Variant6`. Nenhuma tem descrição própria distinguindo seu propósito além do
texto/altura observados no screenshot renderizado (Regra 9):

| Variante Figma | Prop | Altura | Texto |
| --- | --- | --- | --- |
| `Notification` | `variant="notification"` (default) | 59px | "Arquivo adicionado" |
| `Variant6` | `variant="variant-6"` | 59px | "Arquivo adicionado" (idêntico a `Notification`) |
| `Adition` | `variant="adition"` | 66px | "Arquivo adicionado" |
| `deeparchive` | `variant="deep-archive"` | 66px | "Arquivos guardados com sucesso." |
| `Variant3` | `variant="entering"` | 0 (opacity 0) | — |
| `collapsed` | `variant="collapsed"` | 0 (overflow clip) | — |

## 🧩 Inferido (Regra 9)

`Variant3`/`collapsed` renderizam com altura 0 (e `Variant3` também
`opacity:0`) no Figma — sem nenhuma outra variante do arquivo fonte definindo
o que os diferencia de `Notification` além disso. Inferido como os estados
de **entrada** (`entering`, opacity 0 → 1) e **saída/recolhimento**
(`collapsed`, height auto → 0) de uma animação de popover (Regra 8) — não
uma variante visível de repouso. Documentado, não confirmado pixel-a-pixel.
`Variant6`/`Adition`/`deeparchive` também não têm descrição própria: mapeados
literalmente pela altura/texto confirmados no `get_design_context`, sem
inventar diferença semântica além disso.

## Material Liquid Glass

Ver spec completa em `Tokens/Materials` (Regra 10) — mesma aproximação de
`molecule/Notification`: `bg-effect-glass-white-36` + sombra
`Effect/Shadow/LG`. Não renderizada nas variantes `entering`/`collapsed`
(altura zero).

## Estados (Regra 8)

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Fechar (`X`) | ✅ prop `onClose` | ✅ Figma-confirmado (`atom/CloseButton`, ausente nas variantes transientes) |
| Miniatura opcional | ✅ prop `showImage` | ✅ Figma-confirmado (eixo `showImage`) |
| Entrada/saída (`entering`/`collapsed`) | ✅ props `variant` | 🧩 Inferido (Regra 9 — ver acima) |

reduced-motion não documentado no Figma para as transições
`entering`/`collapsed` — nota exigida pela Regra 8 repetida aqui (ver também
`Tokens/Materials`).

## Terminologia

"Arquivo adicionado"/"Arquivos guardados com sucesso."/"now" são texto
Figma-confirmado. Nenhum termo da lista proibida (Regra 5) se aplica.

## Fidelidade code-level

Reusa `atom/CloseButton` (`1421:19008`) — mesmo átomo de
`molecule/Notification`, sem markup duplicado.
