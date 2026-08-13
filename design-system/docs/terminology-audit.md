# Auditoria final de terminologia (US-007)

Varredura de todo texto visível em `stories/**/*.mdx` e
`stories/**/*.stories.tsx` (tokens, atoms, molecules, organisms) contra a
lista de terminologia travada em `AGENTS.md` (Regra 5), como rede de
segurança final depois da documentação por camada e da reconciliação contra
o Figma real (US-004/005/006). Nenhuma correção de copy é aplicada nesta
US — apenas o log, conforme critério de aceitação.

Esta é uma **re-auditoria** — a versão anterior deste relatório (escrita
antes do RESET de 2026-08-09) cobria só 17 arquivos, de quando `tokens`,
`atoms` e as 3 primeiras `molecules` ainda eram 100% inferidas (sem leitura
real do Figma). Depois da reconciliação de US-004/005/006, o conteúdo de
praticamente todo arquivo mudou (novos componentes, novos achados,
`Sidebar`/`StorageSidebar`/`CleanSpaceStorage` em particular), então a
varredura foi refeita do zero contra o estado atual do diretório.

## Escopo revisado

| Camada | Componentes | Arquivos `.mdx` | Arquivos `.stories.tsx` |
| --- | --- | --- | --- |
| tokens | Colors, Materials, Spacing, Typography, unused | 5 | 0 (somente-doc) |
| atoms | ClearButton, ConfirmButton, DeleteButton, Icon, IconBase, KeepButton, PlusButton, PushButton | 8 | 8 |
| molecules | ActionPill, DropdownSelectGroupBy, FolderTagChip, SearchInput, StorageBar, StorageTierBadge, ViewModeToggle | 7 | 7 |
| organisms | ArchiveBrowserModal, CleanSpaceStorage, DialogSaveOrganizationModal, DialogTemplateReviewModal, DropNewTag, DropdownMenu, FileListContainer, FileListItem, Header, InfoPopover, OrganizeFreeModeCanvas, OrganizePanelDropZone, PreviewPane, SaveLongTermFileStorage, SearchToolbar, Sidebar, SidebarToggle, StorageSidebar, UploadPopover | 19 | 19 |
| **Total** | **39 componentes** | **39** | **34** |

**73 arquivos revisados no total** (39 `.mdx` + 34 `.stories.tsx`) — todos os
arquivos existentes em `stories/` no momento desta US, sem amostragem.

## Metodologia

1. Varredura textual exaustiva (`grep -rniI`, case-insensitive) de cada
   termo da lista proibida (Regra 5) — `freezer`, `congelado`/`congelada`,
   `frio`/`fria`, `camada`, `elegível`/`elegivel`, `Liberar Espaço`, `CTA`
   — sobre todo o diretório `stories/` (recursivo, `.mdx` e
   `.stories.tsx`), mais os equivalentes em inglês `frozen`/`cold`/
   `eligible` como checagem extra de segurança.
2. Extração automatizada de **todo literal de string** presente nos 34
   `.stories.tsx` (`args`/`argTypes` — `children`, `label`, `placeholder`,
   valores de `select`/`radio`, texto de exemplo) via varredura por regex,
   revisando cada string única encontrada contra a lista permitida.
3. Leitura manual dos trechos com qualquer ocorrência bruta de um termo da
   lista proibida (todos os 73 arquivos foram cobertos pelo passo 1; os
   trechos com hit foram lidos em contexto completo) para diferenciar
   **texto visível/renderizado** de **menção de meta-discussão** (termo
   citado entre crases/aspas só para dizer "isto não aparece como texto
   visível" ou para documentar um CONFLICT já registrado).
4. Verificação adicional (fora do escopo formal da US, checagem de
   segurança extra) em `src/components/**` — o código-fonte real por trás
   das stories — para confirmar que nenhum termo proibido está hardcoded
   como texto renderizado, mesmo que a story não o exponha via `args`.

## Resultado

**0 violações novas encontradas.** Nenhum termo da lista proibida (Regra 5)
aparece como texto visível/renderizado em nenhum dos 73 arquivos revisados,
nem no código-fonte dos componentes em `src/components/`.

Todas as ocorrências textuais brutas localizadas pelo grep são
meta-discussão, não texto visível:

- **Termos citados entre crases só para atestar ausência** — frases do tipo
  "nenhum termo proibido (`freezer`, `congelado`, `frio`, `camada`,
  `elegível`, `Liberar Espaço`, `CTA`) aparece como texto visível", em
  `StorageTierBadge.mdx:43`, `PushButton.mdx:115-116` e
  `FileListItem.mdx:98-99`.
- **"camada" em sentido arquitetural/técnico**, nunca como rótulo de UI:
  `ActionPill.mdx:35` ("duas camadas" de fundo visual, CSS), `Materials.mdx`
  (5 ocorrências — "camada de backdrop/vidro/tint/borda/conteúdo", a
  composição em pilha do material Liquid Glass), `StorageBar.mdx:76`
  ("outros componentes desta camada" = camada atômica do design system),
  `SidebarToggle.mdx:21` (idem), `StorageTierBadge.mdx:8` ("rótulo de
  **camada** de armazenamento", prosa descritiva sobre o propósito do
  componente, não texto renderizado por ele).
- **"Liberar Espaço" — já é um CONFLICT logado**, não uma violação nova:
  aparece em `Sidebar.mdx`, `StorageSidebar.mdx` e `CleanSpaceStorage.mdx`
  exclusivamente como prosa documentando o achado da US-006 (texto
  confirmado no *Figma*, nunca implementado no componente — ver
  `docs/conflicts.md`, entrada "`organism/Sidebar` (painel de armazenamento
  embutido)", urgência alta). Confirmado nesta US que a string literal
  `"Liberar Espaço"` **não** aparece em nenhum `.stories.tsx` nem em
  `src/components/organisms/{sidebar,storage-sidebar,clean-space-storage}.tsx`
  fora de comentários de código — os componentes reais usam só as variantes
  não-proibidas "Gerir Espaço"/"Limpar Espaço". Nenhuma entrada nova
  adicionada a `docs/conflicts.md` por este achado — já coberto pela
  entrada existente.

Nenhuma ocorrência de `frozen`, `cold` ou `eligible` (equivalentes em
inglês, checagem extra) foi encontrada em nenhum arquivo.

## Texto visível revisado (whitelist, Regra 5)

Toda string literal extraída dos 34 `.stories.tsx` (args, argTypes,
children) foi revisada. As que correspondem a texto fixo de produto batem
com a lista permitida; as demais são conteúdo de exemplo (nome de
arquivo/pasta/pessoa do usuário) ou valores técnicos de controle do
Storybook (`"boolean"`, `"select"`, `"centered"`, nomes de variante como
`"primary"`/`"long-term"`), fora do escopo da Regra 5:

| Termo/string visível | Componente(s) | Classificação |
| --- | --- | --- |
| "Guardar" | `PushButton`, `FileListItem` | ✅ termo travado (Regra 5) |
| "Arquivar" | `PushButton`, `Icon`, `FileListItem` | ✅ termo travado (Regra 5) |
| "Acesso rápido" | `CleanSpaceStorage` | ✅ termo travado (Regra 5) |
| "Longo prazo" | `CleanSpaceStorage` | ✅ termo travado (Regra 5) |
| "Ver duplicados" | `SearchToolbar` | ✅ termo travado (Regra 5) |
| "quick-access" / "long-term" / "ready-to-store" | `StorageBar`, `StorageTierBadge` | valor interno de `args` (não é texto renderizado — os `.mdx` confirmam que o label exibido é "Acesso rápido"/"Longo prazo"/"Pronto para guardar") |
| "Cancelar" | `PushButton` | não listado na Regra 5, não proibido — ação padrão de diálogo, consistente com o domínio |
| "Contratos 2026", "Contratos", "Pessoal", "Fotos", "Casamento Ana & Bruno", nomes de arquivo (`Ceremonia-001.jpg`, `Relatório-2026.pdf`, `huge-backup.zip`, etc.) | `FolderTagChip`, `Sidebar`, `ArchiveBrowserModal`, `FileListItem`, `SaveLongTermFileStorage`, `UploadPopover`, `DialogTemplateReviewModal` | conteúdo de exemplo (dado do usuário), fora da lista por não ser texto fixo de produto |
| "Configurações"/"Settings", "Silenciar", "Etiquetar...", "Proprietário", "Armazenamento", "Data", "Tipo", "Projeto" | `ActionPill`, `InfoPopover`, `FileListContainer`, `SidebarToggle`, `OrganizePanelDropZone`, `DialogSaveOrganizationModal` | rótulos funcionais fora do escopo da Regra 5 (não são os fluxos "Guardar/Arquivar/Buscar" que a regra trava) — nenhum é termo proibido |

Nenhuma string revisada nos 34 `.stories.tsx` corresponde a um termo da
lista proibida.

## Log em `docs/conflicts.md`

**Nenhuma entrada nova adicionada.** Esta auditoria não encontrou nenhuma
violação de terminologia que já não estivesse registrada. A única menção
a um termo proibido em qualquer arquivo (`"Liberar Espaço"`) já está
logada desde a US-006 (urgência alta) como achado confirmado no Figma —
tratado aqui só como confirmação de que o termo não vazou para nenhum
componente implementado. `docs/conflicts.md` permanece com o mesmo
conteúdo de antes desta US.

## Ressalva (Regra 9)

Este resultado confirma ausência de **termos proibidos em texto visível
implementado** nos 73 arquivos de `stories/` no estado atual do
repositório (pós-reconciliação US-004/005/006). Não é uma auditoria
contínua — qualquer alteração futura de copy nos componentes ou novas
stories precisa ser revarrida contra a Regra 5. Também não substitui uma
comparação campo-a-campo contra o texto literal da página Figma "✏️ Design
Pattern" além do que já foi lido nas reconciliações anteriores — onde o
Figma real diverge da lista aprovada (achados de baixa urgência como
"Corrente" vs. "Acesso rápido", "Organizar" fora da lista, texto em inglês
em `UploadPopover`), isso já está registrado em `docs/conflicts.md`, não
repetido aqui.

## Addendum: 10 componentes da releitura pontual de 2026-08-10 (US-013)

Os 10 componentes atualizados no Figma em 2026-08-10 (ver
`docs/checkpoints.md`, seção "Releitura pontual") foram conferidos contra a
Regra 5 no momento da implementação, não como uma nova varredura completa
do diretório (a auditoria formal acima permanece a de US-007, 73 arquivos,
não reexecutada por inteiro nesta US). Resultado:

- **Nenhum termo proibido como rótulo de UI** nos 10 componentes
  (`atom/switch`, `atom/firstUploadSymbol`, `atom/badge/TypeLabel`,
  `organism/CardNeedMoreHelp`, `organism/FAQ/info/cards/colapsed`,
  `organism/FAQ/info/Card`, `organism/card/login`, `molecule/radiobutton`,
  `molecule/StorageStatus/Current`, `molecule/StorageStatus`).
- **"Liberar espaço"** aparece 2× em `organism/FAQ/info/cards/colapsed`
  (tópicos `Storage`/`FrequentIssues`, dentro de perguntas de FAQ) e 1× em
  `molecule/StorageStatus` (botão, painel `Global`) — todos dentro do
  contexto aprovado pela Regra 5 (Armazenamento), sem conflito.
- **1 achado novo de baixa urgência**: "elegíveis" em prosa de resposta de
  FAQ (`FrequentIssues`) — não é rótulo de UI, registrado em
  `docs/conflicts.md` (não corrigido, Regra 9: texto Figma-confirmado
  literal).
- **`organism/card/login`** não usa nenhum termo do domínio de armazenamento
  regulado pela Regra 5 (é um card de autenticação genérico) — fora do
  escopo desta regra; o conflito de tipografia/cor desse componente está
  em `docs/conflicts.md`, não é uma questão de terminologia.

Nenhuma entrada nova de terminologia (além da já citada) adicionada a
`docs/conflicts.md` por este addendum.
