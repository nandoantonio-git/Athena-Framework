# Agente — kandrive-design-system

> Gerado por `init.sh` em 2026-08-09. Edite as seções marcadas com TODO.

---

## Filosofia geral

- Solução mais simples e direta. Funções em vez de classes.
- Sem Clean Architecture, DDD, Repository Pattern ou camadas de abstração desnecessárias.
- Sem logging framework ou telemetria além do básico.
- Código que um dev sênior consegue ler sem documentação.

## Estilo de código

<!-- TODO: linguagem principal, convenções, formatação -->
- Linguagem: typescript
- Componentes funcionais (React), sem classes
- Type hints (TS) apenas onde ajudam na leitura — evitar `any`
- Tailwind (utility-first) + shadcn/ui como base de primitivos (Radix + CVA) — customizar via tokens semânticos, nunca hardcode de cor/espaçamento fora do tema
- Comentários curtos — o código deve se explicar

## Domínio do projeto

Documentação Storybook local do Kandrive Design System (Kandrive = SaaS de armazenamento frio/longo-prazo sobre AWS S3 Glacier). Lê a página Figma "✏️Design Pattern" e gera stories reais (CSF3 + MDX) para cada componente, cruzando contra as decisões de design travadas abaixo. Stack: React + TypeScript + Tailwind + shadcn/ui. Entregável: Storybook pronto para deploy no Vercel.

## Fonte Figma

<!-- Sem isso, nenhuma ferramenta do Figma MCP funciona — get_metadata/get_design_context exigem fileKey, e não existe tool pra descobrir/listar arquivos da conta. Uma iteração sem este dado não tem como ler o Figma de verdade, só pode inferir a partir das Regras críticas abaixo. -->
- Arquivo: `KanDrive` — fileKey `oFp2TLeCG4GJeCOFVhBvjg`
- Página: "✏️Design Pattern" — nodeId `1421:17272`
- URL completa: https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-17272
- Estrutura de topo confirmada (7 seções): Push Button, Icon/, Search, Typography, Pallete, Material - Liquid Glass, Pages
- Conta MCP conectada: Nand00 (fernandoluiz1312@gmail.com), time "Nand00's team"
- Componente-chave do fluxo "Liberar/Gerir Espaço" (Regra 5): `organism/cleanSpaceStorage`, node `1439:16908` — título Figma-confirmado em 2026-08-10 é **"Liberar Espaço"** (já atualizado pelo usuário no Figma; a leitura anterior de "Limpar Espaço" estava desatualizada). Description Figma verbatim: *"modal que abre em overlay ao selecionar a opção de liberar espaço. nele você pode otimizar seu espaço com arquivos grande e duplicados, economizando espaço."* Botões internos "Excluir"/"Excluir cópias" usam a cor de perigo real (ver Regra 3).
- `atom/StorageTierBadge` (node `1457:21014`, variantes `tier=current`/`tier=long term` — só 2, não 3) — componente NOVO criado pelo usuário no Figma em 2026-08-10, já em uso real dentro de `organism/cleanSpaceStorage` (rótulo por arquivo). Ver Regra 6.

### Componentes atualizados no Figma em 2026-08-10 (releitura obrigatória, não confiar em `figma-inventory.md` de 2026-08-09 pra estes)

O usuário editou estes componentes diretamente no Figma depois da última leitura — buscar node/descrição de novo via MCP antes de implementar ou reconciliar qualquer um deles:
`atom/switch`, `atom/firstUploadSymbol`, `organism/CardNeedMoreHelp`, `organism/FAQ/info/cards/colapsed`, `organism/card/login`, `atom/badge/TypeLabel`, `molecule/StorageStatus/Current`, `molecule/StorageStatus`, `molecule/radiobutton`, `organism/FAQ/info/Card`

### Catálogo completo — componentes ainda não implementados (achado em 2026-08-11, node IDs já extraídos de `get_metadata`, não precisa rebuscar)

Decisão humana 2026-08-11: TODOS entram no pipeline (não ficam mais deferidos). Node IDs abaixo já confirmados via `get_metadata` — ainda assim, seguir a Regra 11 (`get_design_context` real antes de implementar cada um, node IDs podem ter sub-nós não capturados no `get_metadata`).

**Atoms**: `atom/boxIconButton` (`1431:20102`), `atom/ArchiveItem` (`1421:18214`), `atom/FolderItem` (`1440:24306`), `atom/ImageItem` (`1421:18311`), `atom/SelectState` (`1421:18292`), `atom/Tag` (`1421:17929`), `atom/TagOrgMode` (`1421:18769`), `atom/TagOrgTemplateName` (`1421:18778`), `atom/Label/Duplicated` (`1439:16874`), `atom/Label/Storage/Alert` (`1439:16885`), `atom/UploadFolder` (`1439:17053`), `atom/buttonAdd` (`1421:20509`), `atom/DropdownSelect/GroupBy/Item` (`1444:21587`), `atom/DropdownSelect/Label/Item` (`1444:21704`), `atom/Sidebar/Tags/Items` (node não capturado em `get_metadata` — buscar via `get_design_context` na área da Sidebar).

**Cell** (camada nunca categorizada à parte — tratar como peça própria, não forçar em atom/molecule; nomes de nó abaixo são o prefixo de layer Figma-confirmado `celule/`, preservado como citação — ver `figma-inventory.md` achado #7): `celule/Callout` (`1421:20028`), `celule/TagColor` (`1444:21979`), `celule/dropListItem` (`1440:23803`), `celule/nodoContextMenuItem` (`1421:20528`), `celule/cleanSpaceStorage/listSelection` (`1436:20496`), `celule/Pages/Lead` (`1439:17048`), `celule/MainCanvas/Organization/FreeMode/ItemNode` (`1421:20108`), `celule/MainCanvas/Organization/FreeMode/ListItem` (`1421:20757`), `celule/MainCanvas/Organization/FreeMode/OutputNode` (`1421:20262`), `celule/MainCanvas/Organization/FreeMode/Buttons` (`1431:20043`) — os 4 últimos são sub-peças do `organism/OrganizeFreeModeCanvas` já implementado; ao implementá-los, reconciliar/atualizar esse organism pra usá-los em vez de markup duplicado.

**Molecules**: `molecule/DropdownSelect/Label` (`1439:19650`), `molecule/FileList` (`1421:19200`), `molecule/FileList/Header` (`1421:19184`), `molecule/FolderCard` (`1421:18595`), `molecule/Notification` (`1439:19748`), `molecule/popover/Notification` (`1421:19626`), `molecule/context-header` (`1421:19589`), `molecule/thumbnail-large` (`1421:19570`), `molecule/FileArchive1` (`1439:19655`), `molecule/FileArchive2` (`1439:19656`), `molecule/Label` (`1421:18687`), `molecule/ArchiveBrowserModal/ListItem` (`1421:20896`), `molecule/ArchiveBrowserModal/Search` (`1485:21074`), `molecule/nodoContextMenu` (`1440:23821`).

**Organisms**: `organism/FAQ/FastLinks` (`1454:25006`), `organism/planSelection` (`1454:25057` — página de Configurações de Plano; já implementado como `PlanSelection`, ver Regra 5 corrigida em 2026-08-18).

## Estrutura de arquivos

Este repositório (`Athena-Framework`) é só o template do ralph loop — reutilizável para outros projetos. O kandrive-design-system inteiro (app Node isolado, com seu próprio `package.json`/`node_modules`/`tsconfig.json`) vive contido na subpasta `design-system/`, separado do scaffold Python/ML (`src/`, `data/`, `models/`, `notebooks/`) que fica na raiz.

```
Athena-Framework/               # raiz — scaffold ralph loop (não tocar em src/data/models/notebooks)
├── AGENTS.md, scripts/, skills/, memory/, loops/   # infraestrutura do ralph loop
└── design-system/              # kandrive-design-system — projeto Node autocontido
    ├── package.json, tsconfig.json, .storybook/, components.json (shadcn/ui)
    ├── stories/
    │   ├── atoms/        # .stories.tsx + .mdx por átomo
    │   ├── molecules/     # .stories.tsx + .mdx por molécula
    │   ├── organisms/     # .stories.tsx + .mdx por organismo
    │   └── tokens/        # Colors.mdx, Typography.mdx, Spacing.mdx, Materials.mdx (padrão "Liquid Glass"), unused.mdx (doc-only)
    ├── docs/
    │   ├── figma-inventory.md   # inventário da página Figma (US-002)
    │   ├── conflicts.md         # log de conflitos com decisões travadas
    │   ├── checkpoints.md       # checkpoint por camada atômica
    │   └── terminology-audit.md # auditoria final de terminologia (US-007)
    ├── vercel.json
    └── README.md
```

## Regras críticas

<!-- Decisões de design já travadas — qualquer componente do Figma que contradiga isso é CONFLICT a logar em docs/conflicts.md, nunca a resolver sozinho -->
- [ ] Regra 1: `atom/PushButton` é o único componente de botão do MVP. Não devem existir variantes `button/primary` / `button/secondary` / `button/destructive` — se aparecerem no Figma, logar como CONFLICT (urgência alta se em fluxo ao vivo como Guardar).
- [ ] Regra 2: Tokens de cor usam só nomes semânticos no formato `cor/categoria/papel/valor-semântico` — nunca nomes que vazam implementação (nunca `$primaria-100`).
- [ ] Regra 3 (ATUALIZADA 2026-08-10 — decisão humana, Figma é fonte de verdade para cor): primária `#007e96` (Figma `Brand/Theme/Primary/Default`, era `#2A7A8C` — valor antigo descontinuado), secundária `#31302d` (Figma `Brand/Theme/Secondary/Default`, era `#3A3C38` — descontinuado). Rosa (`Brand/Theme/Pink/Dark` `#b5254a` / `Brand/Theme/Pink/Light` `#e8476a`) deixa de ser "só branding" — é agora a cor semântica de **"Acesso rápido"** (categoria/estado de UI), usada em `StorageBar` e qualquer componente que represente essa categoria. Cor de perigo/destrutiva Figma-confirmada: `var(--brand-feedback-danger-default)` = `#bc3426` (achado em `organism/cleanSpaceStorage`, botões "Excluir"/"Excluir cópias" — tratamento é chrome neutro/glass com só o texto nessa cor, nunca fundo vermelho preenchido). Neutros seguem a rampa Zinc do Tailwind só como aproximação de fallback — a paleta neutra real do Figma (`neutral-*`, `ui-*`) diverge em ~26 de ~30 papéis (ver `docs/conflicts.md`), tema suspenso por ora.
- [ ] Regra 4 (ATUALIZADA 2026-08-10): Tipografia Figtree, escala Major Third (1.25). Piso de 16px é obrigatório pra texto de leitura/ação primária (body, labels de botão/input, links) — `Type/Button/MD` (14px, Figma-confirmado) é violação real a corrigir, não exceção. Microtexto genuinamente decorativo/complementar (badge, tag, caption, timestamp) pode ficar abaixo de 16px como exceção documentada, nunca abaixo de ~11px, sempre em `rem` (nunca `px` fixo, pra continuar escalando no zoom do navegador — é isso que o WCAG 1.4.4 realmente exige) e nunca como único portador de informação essencial.
- [ ] Regra 5 (ATUALIZADA 2026-08-18 — decisão humana, corrige a premissa de página da versão 2026-08-10): "Liberar Espaço" SAI da lista proibida — vira termo aprovado, mas só no contexto da página de Armazenamento, onde dá acesso ao componente do node Figma `1439:16908`. **Correção 2026-08-18**: a versão anterior desta regra presumia que "Configurações de Plano" também teria um botão "Liberar Espaço" — `get_design_context` no node real (`organism/planSelection`, `1454:25057`) confirmou que esse node não tem nenhum botão/link de armazenamento (achado em `docs/conflicts.md`). A ponte real entre as duas telas é `molecule/StorageStatus` (`scope="global"`): o botão "Comprar Espaço" de lá leva pra Configurações de Plano, não o contrário. Em Configurações de Plano, o botão correspondente (Figma-confirmado, node `1454:25054`, atualizado pelo usuário em 2026-08-18) é **"Editar plano"** (era "Editar pagamento"), que serve de âncora pra edição de plano/forma de pagamento. Na Sidebar (painel embutido/persistente), o termo aprovado continua sendo "Gerir Espaço" (contexto diferente, mesmo conceito). "Limpar Espaço" (título antigo do node `1439:16908` no Figma) fica PROIBIDO como texto visível — trocar pelo termo do contexto (Sidebar: "Gerir Espaço"; Armazenamento: "Liberar Espaço"). Lista permitida completa: "Acesso rápido", "Longo prazo", "Guardar", "Arquivar", "Pronto para guardar", "Ver duplicados", "Buscar arquivos, pastas ou templates", "Gerir Espaço" (Sidebar), "Liberar Espaço" (Armazenamento), "Comprar Espaço" (Armazenamento), "Editar plano" (Configurações de Plano). Proibida como texto visível: "freezer", "congelado", "frio", "camada" (rótulo de UI), "elegível" (rótulo de UI), "Limpar Espaço", "CTA".
- [ ] Regra 6 (ATUALIZADA 2026-08-10 — decisão humana, revisada após novo achado no Figma): a segmentação *sistêmica* entre o que está "guardado" (longo prazo) e "corrente" (acesso rápido) é resolvida via **organização em diretórios/pastas diferentes dentro do sistema de arquivos**, não via um badge de navegação/filtro — a versão antiga de `StorageTierBadge` (molecule, 3 rótulos incluindo "Pronto para guardar", "não aplicado a nenhuma tela") está DESCONTINUADA e deve ser removida. Porém: o usuário criou em 2026-08-10 um componente real no Figma, `atom/StorageTierBadge` (node `1457:21014`, só 2 variantes: `tier=current`/`tier=long term`), já em uso de verdade em `organism/cleanSpaceStorage` — este é escopo diferente (rótulo por item, ex.: detalhe de arquivo), não navegação/filtro sistêmico. Implementar o NOVO como átomo Figma-confirmado; a decisão de segmentação por diretório não o invalida, são coisas diferentes.
- [ ] Regra 7: Gaps abertos conhecidos (não são conflito de decisão, são polish): `input/search` com placeholder desatualizado; `chip/folder-tag` com `opacity:0` residual e sem variante `isExpanded`.
- [ ] Regra 8: Toda documentação de componente interativo aplica a lente de fluid-interface da Apple (feedback no press vs. release, interruptibilidade de transições, set completo de estados: default/hover/active/disabled/loading/error) e nota reduced-motion se visível no Figma, senão marca como não documentado.
- [ ] Regra 9: Distinguir sempre "Figma-confirmado" de "inferido" em toda a documentação — nunca apresentar inferência como fato.
- [ ] Regra 10: O material "Liquid Glass" (seção homônima do Figma) é reaplicado em vários componentes — documentar como spec única em `stories/tokens/Materials.mdx`; todo componente que o exibir referencia esse arquivo, nunca reimplementa a especificação isolado (garante consistência do padrão, não reinvenção por componente).
- [ ] Regra 11 (ATUALIZADA 2026-08-11 — decisão humana, protocolo obrigatório após auditoria rasa ter deixado passar bugs reais): antes de marcar QUALQUER componente como verificado/aligned, é obrigatório: (1) chamar `get_design_context` (com `skillNames=figma-design-to-code`) no node real do componente — nunca confiar só em `get_metadata` ou em leitura antiga; (2) tirar screenshot real do componente renderizado via Playwright (`http://localhost:6006/iframe.html?id=<story-id>&viewMode=story`), nunca assumir que "deve estar certo" pelo código; (3) listar cada elemento visível na resposta do Figma (ícones, textos, cores, espaçamento, fundo, bordas) e conferir presença/correção um a um contra o screenshot renderizado — não uma comparação geral de "parece certo"; (4) NUNCA inventar elemento (botão, barra de progresso, texto, ícone) que não esteja confirmado no Figma — se um elemento não é claramente confirmável, documentar como 🧩 Inferido ou omitir, nunca adicionar por lógica própria. Violação encontrada por auditoria rasa em 2026-08-11: `organism/file-list-item` tinha um botão inventado, `organism/upload-popover` tinha uma barra inventada, `organism/Header` não usava o SVG real do logo, `molecule/action-pill` estava faltando um ícone confirmado, `organism/Sidebar` sem o ícone de minimizar, `organism/OrganizePanel/DropZone` com cor de fundo/material errados.

## Gate de validação

### Recheck obrigatório de 2026-08-13

Antes de trabalhar ou concluir a US-026, todo provider do Ralph deve ler e cumprir `design-system/docs/audits/user-recheck-2026-08-13.md`. O checklist invalida qualquer CLEAN anterior que não o tenha auditado. Na Sidebar, o ícone de colapsar fica em uma linha superior própria e `Adicionar` em outra linha abaixo; eles não podem compartilhar a mesma linha.

<!-- TODO: o que valida que o código está correto -->
O Ralph usa `scripts/gate.sh` para validar cada story.
Gate padrão: `cd design-system && npx tsc --noEmit` (roda de dentro da subpasta — o projeto Node vive lá, não na raiz)

Critérios mínimos de aceitação:
- Código compila / passa lint sem erros
- `npm run build-storybook` sucesso

### Débito conhecido: sem teste automatizado (registrado 2026-08-18)

O gate real é só **typecheck (`tsc --noEmit`) + build do Storybook** — não existe teste unitário nem de regressão visual rodando hoje. `@storybook/addon-vitest`/Playwright estão instalados como devDependency mas não estão wired em `scripts/gate.sh` nem em nenhum script de CI. Qualquer critério de aceitação anterior que mencionasse "testes unitários passam" descrevia uma aspiração, não o gate real — corrigido acima pra bater com o que de fato roda. Handoff pra engenharia deve tratar isso como débito explícito, não como lacuna escondida.

## Contexto de execução

- Container: `.devcontainer/` (Python 3.11 + Node + Codex)
- Modo de execução: autônomo — `bash scripts/ralph.sh` roda as 8 US em loop até `<promise>COMPLETE</promise>`, sem pausa pra aprovação por camada
- Provider padrão: codex → gemini → claude (fallback triplo) — nada fixado ainda, ver docs/checkpoints.md e run.log pra acompanhar qual rodou cada story
- Estado do loop: `scripts/.current-provider`, `scripts/.last-story`

---

<!-- SEÇÃO GERADA AUTOMATICAMENTE PELO SKILL LEARNING — NÃO EDITE MANUALMENTE -->
## Skills ativas

As skills em `skills/active/` são injetadas como user message no início de cada sessão.
Para ver as skills pendentes de revisão: `ls skills/pending/`

<!-- END SEÇÃO GERADA -->
