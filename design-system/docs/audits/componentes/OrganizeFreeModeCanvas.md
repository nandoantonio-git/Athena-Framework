# OrganizeFreeModeCanvas — histórico de auditoria

Espelha o conteúdo removido de `stories/organisms/OrganizeFreeModeCanvas.mdx` em 2026-08-15 (separação log/documentação). Node Figma: `organism/MainCanvas/Organization/FreeMode`, `1439:16906`.

## Status

🔧 corrigido novamente em 2026-08-13 (US-026, pass15 de ponto-fixo) — Figma-confirmado agora via `get_design_context` **completo** (nó `1439:16906`, 1117×933) — a nota anterior de que o nó era "grande demais" para a ferramenta estava desatualizada/incorreta, corrigida nesta releitura.

## Achado novo na pass15

A story renderizava o canvas em `max-w-4xl` e ainda compunha um `FreeModeOutputNode` compacto extra após o card "Resultado". O Figma fresco do node `1439:16906` confirma o frame 1117×933 e não mostra esse card compacto extra na composição visível. Corrigido para o tamanho Figma-confirmado e removido o consumidor inventado; `FreeModeOutputNode` permanece documentado só como celule isolado.

## Achado novo na 3ª passada

O badge "Arquivos" (dentro do markup inline de "Pasta 1") usava `bg-zinc-200 text-zinc-600` — a resposta fresca e completa de `get_design_context` confirma o "Node Grouping Frame" real com badge `bg-[var(--neutral-surface-medium,#52525b)]` (`bg-zinc-600`) e texto `var(--brand-primary-light,#c8dce3)` (`brand-teal-light`), não um badge claro. Corrigida só a cor; a posição real (pill flutuando acima da moldura do grupo, não embutida no topo do card) permanece como aproximação já documentada — reconciliar exigiria extrair o "Node Grouping Frame" como peça própria, fora do escopo desta correção pontual.

## Corrigido na 4ª passada (2026-08-13)

O organism agora repassa para `FreeModeItemNode` os overrides de instância Figma-confirmados: "Filtro: Grande"/"Size > 1.0 GB" e "Filtro: Formato"/"Type = .mp4, .mov". O celule mantém os defaults curtos do seu próprio node base; a composição do canvas usa os textos completos do node `1439:16906`. Textos confirmados: badge "Modo Livre", painel flutuante "Filtro" (Tamanho/Maior que/1.0 GB, alternador E/OU, "Adicionar regra", "Descartar Mudanças"/"Salvar Mudanças" — implementado nesta passada), nós de exemplo "Pasta 1" (4.2 GB · 128 Files), "Filtro: Grande" (Size > 1.0 GB), "Filtro: Formato" (Type = .mp4, .mov), "Junção", "Auto-Archive" (badge "ACTIVE"), "Resultado" (métricas + "Prévia de arquivos" — dropdown não implementado na época, ver [[FreeModeOutputNode]] pra estado atual), sem card compacto extra depois de "Resultado", rodapé com resumo e "Descartar"/"Salvar Template". As linhas conectoras tracejadas entre os nós também foram implementadas nesta passada (SVG, geometria aproximada à cadeia linear do layout — ver seção de escopo reduzido no `.mdx` público).

## Corrigido em 2026-08-11 após achado do usuário — auditoria anterior não seguia a Regra 11

Os botões da toolbar inferior tinham espaçamento e tamanho aproximados (`gap-2`/`size-8`). `get_design_context` na sub-peça real `celule/MainCanvas/Organization/FreeMode/Buttons` (`1431:20043`, catalogada em AGENTS.md) confirma `gap-[6px]` e botões `size-[40px]` (`bg-brand-secondary-light`, borda `effect-glass-white-05`) — corrigido para `gap-1.5`/`size-10` com os tokens confirmados. Também reconfirmado (screenshot Playwright fresco, não assumido): o fundo de pontos e o Mini-Map adicionados em 2026-08-10 renderizam corretamente — nenhuma regressão de build/cache encontrada.

## Conflito de variantes (Regra 1)

Nenhum componente `button/primary`/`secondary`/`destructive` separado.

## Terminologia

Nenhum termo proibido nos textos confirmados pelo screenshot.
