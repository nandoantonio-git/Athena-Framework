# CleanSpaceStorage — histórico de auditoria

Espelha o conteúdo removido de `stories/organisms/CleanSpaceStorage.mdx` em 2026-08-16. Node Figma: `1439:16908`.

## Status

✅ aligned — Figma-confirmado, nó `1439:16908`, descrição verbatim: *"modal que abre em overlay ao selecionar a opção de liberar espaço. nele você pode otimizar seu espaço com arquivos grande e duplicados, economizando espaço."* Título visível Figma-confirmado em 2026-08-10: "Liberar Espaço". Re-verificado 2026-08-12 (passe 3, ponto-fixo): título, botões "Excluir"/"Excluir cópias" (texto-apenas em `--brand-feedback-danger-default`, nunca fundo vermelho) e `atom/StorageTierBadge` (2 variantes, `w-[84px]` fixo) seguem Figma-confirmados. Reverificado na US-026 pass12: `get_design_context` fresco neste nó também confirma os ícones de lixeira nos botões destrutivos; a implementação já usa `Trash2` antes de "Excluir"/"Excluir cópias".

## Regra 5 — resolvida em 2026-08-10 (ver `docs/conflicts.md`)

Este é o modal aberto pelo botão "Liberar Espaço" (termo aprovado no contexto de Armazenamento/Config. de Plano, ver `Sidebar.mdx`/`StorageSidebar.mdx`). O título deste modal foi atualizado pelo usuário diretamente no Figma para "Liberar Espaço" — o título anterior (verbo "Limpar" em vez de "Liberar") fica proibido como texto visível (Regra 5).

## Composição (Regra 10)

Tags de tier reusam `atom/StorageTierBadge` (`1457:21014`, ver `Atoms/StorageTierBadge.mdx`) em vez de markup duplicado — rótulos aprovados "Acesso rápido"/"Longo prazo" (Regra 5), Figma-confirmados neste componente (`Tag_Corrente` internamente no Figma, mas o texto renderizado nas linhas de exemplo é "Acesso rápido"). Botões "Excluir"/"Excluir cópias" usam `atom/PushButton` (`variant="neutral"`, `isDestructive`) — chrome neutro/glass, só o texto na cor `--destructive`. "Selecionar todos" usa `variant="primary"`; "Desfazer seleção" fica `disabled` (estado lido/neutro).

**Nota de cor do ícone de arquivo:** a auditoria anterior registrou uma leitura conflitante entre este organism e o celule `cleanSpaceStorage/listSelection`. A decisão travada em [`docs/conflicts.md`](../../conflicts.md) é preservar o azul Figma-confirmado no nó real do celule (`#2b7fff` sobre `rgba(43,127,255,0.1)`) e tratar a leitura teal como erro pontual de lote. US-026 pass12 não reabre essa exceção.

## Conflito de variantes (Regra 1)

Nenhum `button/primary`|`secondary`|`destructive` como componente separado.

## Estados e fluid interface (Regra 8)

| Estado | Implementado |
| --- | --- |
| Seleção de arquivos | ✅ checkboxes + "Selecionar todos"/"Desfazer seleção" |
| Prévia de duplicados | ✅ badge "Prévia" + aviso de que a detecção é ilustrativa (Figma-confirmado: *"Detecção de duplicados ainda não existe de verdade, os grupos abaixo são exemplos ilustrativos."*) |
| Disabled/Loading/Error | Não documentado no Figma |

**reduced-motion**: não documentado no Figma; sem animação própria além de scroll nativo.

## Material Liquid Glass

Container e seções usam `bg-effect-glass-white-70` — ver `Tokens/Materials` (Regra 10).

## Terminologia

"Acesso rápido"/"Longo prazo" ✅ aprovados. "Liberar Espaço" ✅ aprovado (Regra 5, contexto de Armazenamento/Config. de Plano). O título anterior deste nó (verbo "Limpar" em vez de "Liberar") está proibido como texto visível.
