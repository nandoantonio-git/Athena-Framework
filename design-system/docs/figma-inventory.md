# Inventário Figma — página "✏️Design Pattern"

**Arquivo:** KanDrive — fileKey `oFp2TLeCG4GJeCOFVhBvjg`
**Página:** "✏️Design Pattern" — nodeId `1421:17272`
**URL:** https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-17272
**Lido em:** 2026-08-09, via Figma MCP (conta `Nand00`), ferramentas `get_metadata`, `get_design_context`, `get_variable_defs`.
**Cobertura estrutural:** 100% dos nodes retornados por `get_metadata` na página (2347 nodes: 1072 frames, 490 symbols, 479 texts, 276 instances, 12 vectors, 11 ellipses, 7 sections). Descrição verbatim do Figma foi coletada individualmente (via `get_design_context`) para os componentes listados como "Figma-confirmado: descrição". Os demais itens têm nome/id/dimensão Figma-confirmados, mas a **descrição própria não foi consultada nó-a-nó nesta iteração** (custo de ~150 chamadas adicionais) — esses itens estão marcados `sem descrição verificada` e recebem uma intenção **inferida** a partir do nome, nunca apresentada como fato (Regra 9).

## Legenda

- **Figma-confirmado** = valor lido diretamente do Figma nesta iteração (nome, id, descrição, variável, texto de layer).
- **🧩 Inferido** = intenção/propósito deduzido pelo pesquisador a partir do nome do node, não confirmado por descrição Figma.
- **Formal** = node do tipo `symbol` (variante de component set) ou `frame` que envolve `symbol`s (component set), ou `instance` (instância de um componente) — corresponde a um componente real da biblioteca Figma.
- **Node-canvas solto** = elemento solto no canvas sem ser parte formal de um component set (frame/texto/vetor avulso, ex.: anotações, grupos de layout genéricos "Frame 58").

---

## ⚠️ Achados críticos (Figma-confirmado)

Estes achados cruzam o conteúdo real do Figma contra as Regras travadas em `AGENTS.md`. Não foram resolvidos aqui — apenas registrados, conforme a filosofia do projeto ("nunca resolver sozinho"). Recomenda-se transcrever os de urgência alta/média para `docs/conflicts.md` na próxima US que tratar do tema.

| # | Achado | Regra afetada | Evidência Figma-confirmada | Urgência |
|---|---|---|---|---|
| 1 | O placeholder real de `molecule/SearchBar/Placeholder/XXL` é **"Search"** (inglês, genérico) — não "Buscar arquivos, pastas ou templates" | Regra 5, Regra 7 (gap já conhecido) | `get_design_context` no nó `1421:17845` retorna `placeholder = "Search"` como default da prop | média |
| 2 | Texto visível "**Liberar espaço**" aparece 4x como cópia de FAQ real (`"Liberar espaço" apaga meus arquivos?`, `"Liberar espaço" está desabilitado, isso é um erro`) nas telas `FAQ - Expanded` (`1439:19898`) e `FAQ - Collapsed` (`1439:20755`) | Regra 5 (termo proibido: "Liberar Espaço") | Nodes de texto `1439:20121`, `1439:20174`, `1439:20978`, `1439:21031` | **alta** — texto vivo em tela de produto (FAQ), não meta-discussão |
| 3 | Texto visível "**elegíveis**" (para "guardar no longo prazo") aparece 2x nas mesmas telas de FAQ | Regra 5 (termo proibido: "elegível") | Nodes de texto `1439:20179`, `1439:21036` | média |
| 4 | Nenhum componente chamado `badge/storage-tier` existe na página inteira (busca textual por "badge" retorna só `atom/badge/TypeLabel` — um componente de rótulo de tipo de arquivo/tag, não de tier de armazenamento). O conceito de tier ("Acesso rápido"/"Longo prazo") na tela `Settings-Subscription` é implementado como texto solto + barra de progresso dentro do card "Tiers", e nas telas `Function Storage Status - *` via `molecule/StorageStatus/StatusSection`/`Current`/`LongTerm` — nunca via um badge dedicado | Regra 6 (presume que `badge/storage-tier` "existe mas não está aplicado") | Busca textual completa no XML de metadata; frames `1439:21095` ("Tiers"), `1439:19749/19763/19777` (telas Function Storage Status) | média — a premissa da Regra 6 pode estar desatualizada |
| 5 | `celule/chip/folder-tag` (nó `1421:19040`) **já tem** a prop `isExpanded` (boolean) implementada no Figma, com estados Default/Idle/Hover/Pressed × expandido/não-expandido — contrariando a nota da Regra 7 de que a variante estaria ausente | Regra 7 (gap "isExpanded ausente") | `get_design_context` no nó `1421:19040`, descrição: *"Chip de tag de pasta com estado expansível. Props: isExpanded (bool), State (Default/Hover/Selected). Usa tokens Spacing/SM, Radius/Pill."* | média — gap pode já estar resolvido no Figma |
| 6 | Confirma-se o `opacity-0` residual: no estado `Default`/não-expandido de `celule/chip/folder-tag`, um texto `"Pessoal"` fica renderizado com `opacity-0` (leftover) | Regra 7 (gap conhecido) | Código gerado por `get_design_context` no nó `1421:19040` | baixa (já sabido) |
| 7 | O prefixo de camada usado em ~15 component sets soltos no canvas é **`celule/`** (não `molecule/`) — ex.: `celule/chip/folder-tag`, `celule/Callout`, `celule/MainCanvas/Organization/FreeMode/*`, `celule/nodoContextMenuItem`, `celule/dropListItem`, `celule/TagColor`, `celule/cleanSpaceStorage/listSelection` | Regra 2 (nomenclatura) | Nomes de layer Figma-confirmados (ver tabela de node-canvas solto) | baixa — inconsistência de nomenclatura no arquivo fonte, não decisão de design |
| 8 | A cor primária de marca Figma-confirmada é `var(--brand-primary-default) = #007e96`, não `#2A7A8C` como declarado na Regra 3. A cor secundária Figma-confirmada é `var(--brand-secondary-default) = #31302d`, não `#3A3C38` | Regra 3 | `get_variable_defs` no nó da seção Pallete (`1427:16958`) | alta — decisão travada diverge do Figma real |
| 9 | Os nomes reais das variáveis de cor no Figma seguem o padrão `var(--categoria-papel-valor)` (ex.: `var(--brand-primary-default)`, `var(--neutral-text-primary)`) — não o formato `cor/categoria/papel/valor-semântico` prescrito pela Regra 2. Duas variáveis de marca (`Brand/Theme/Pink/Dark`, `Brand/Theme/Pink/Light`) usam um terceiro formato (`Categoria/Grupo/Papel`) | Regra 2 | `get_variable_defs` no nó da seção Pallete | alta |
| 10 | 4 dos 15 tokens de tipografia confirmados ficam abaixo do piso de 16px declarado pela Regra 4: `Type/Tag` (8px), `Type/Body/XS` (10px), `Type/Caption/SM` (11px), `Type/Body/SM` (13px) | Regra 4 (piso WCAG 1.4.4) | `get_variable_defs` no nó da seção Typography (`1427:16951`) | alta — acessibilidade |
| 11 | Além de `atom/PushButton`, existem 5 outros átomos de botão/ícone-interativo com variantes de `Style`/`State` próprias: `atom/DeleteButton`, `atom/PlusButton`, `atom/ActionButton/Confirm`, `atom/ClearButton`, `atom/KeepButton` (todos ícones 12–28px com estados On/Idle/Clicked/Disabled, sem chrome de botão/borda como o PushButton) | Regra 1 | `get_design_context` em cada um dos 5 nós (ver seção Icon/) | média — não são `button/primary`\|`secondary`\|`destructive` literalmente, mas são alvos de clique independentes do PushButton |
| 12 | O `Style` de `atom/PushButton` inclui variantes internamente equivalentes a primary/secondary/destructive (`Bordered Colored` = *"botão padrão positivo/ênfase"*, `Bordered Neutral` = *"botão padrão neutro"*, `Bordered Destructive`/`isDestructive=True` = *"Botao de funcao destrutiva"*) — mas **como uma única prop `Style` de um único componente**, não como componentes `button/primary` etc. separados | Regra 1 | `get_design_context` no nó `1421:17302`, descrições verbatim | ✅ confirma conformidade, não é conflito |

---

## Seção 1 — Push Button (`1421:17301`, 740×753)

Contém **um único** component set formal: `atom/PushButton` (`1421:17302`, 738×743, **Figma-confirmado**: 84 variantes/symbols).

**Descrição do componente (Figma-confirmado):** *"lista de botoes utilizaveis"*

Props de variante (Figma-confirmado, deduzidas dos nomes das 84 variantes): `Style` (`Borderless` | `Borderless (Bezel shows On)` | `Default` | `Bordered Secondary` | `Bordered Colored` | `Bordered Destructive` | `Bordered Neutral`) × `On` (`True`|`False`) × `State` (`Disabled`|`Clicked`|`Idle`|`Hover`) × `Active Window` (`True`|`False`) × `isIconOn` (`True`|`False`) × `isDestructive` (`True`|`False`).

Descrições por `Style` (Figma-confirmado, coletadas via `get_design_context`; nem todo `Style` tem descrição própria):

| Style | Descrição Figma verbatim | Status |
|---|---|---|
| `Bordered Colored` | "botão padrão positivo/enfase" | Figma-confirmado |
| `Bordered Neutral` (isDestructive=False) | "botão padrão neutro" | Figma-confirmado |
| `Bordered Neutral` (isDestructive=True) | "Botao de funcao destrutiva" | Figma-confirmado |
| `Borderless` | sem descrição — intenção inferida abaixo | 🧩 Inferido: botão sem borda/fundo, provável uso em toolbar/ícone secundário |
| `Borderless (Bezel shows On)` | sem descrição — intenção inferida abaixo | 🧩 Inferido: variante borderless que mostra um "bezel" (fundo sutil) quando ativo/selecionado |
| `Default` | sem descrição — intenção inferida abaixo | 🧩 Inferido: estilo base/neutro sem ênfase de cor |
| `Bordered Secondary` | sem descrição — intenção inferida abaixo | 🧩 Inferido: ação secundária com borda, menor ênfase que `Bordered Colored` |
| `Bordered Destructive` | sem descrição própria — sobreposto pelo comportamento de `isDestructive=True` nas variantes `Bordered Neutral` acima | 🧩 Inferido: possível variante legada/duplicada de destrutivo |

**Lente fluid-interface (Regra 8):** estados presentes nas variantes — Idle, Hover, Clicked, Disabled. Não há estado `Loading` nem `Error` em nenhuma das 84 variantes (Figma-confirmado por ausência no enum `State`). `Active Window` (True/False) sugere depender de foco de janela (padrão macOS/desktop), não documentado como tal em nenhuma descrição — 🧩 inferido. Nenhuma nota de `reduced-motion` encontrada — **não documentado no Figma** (Regra 8, "senão marca como não documentado").

**Formal/informal:** formal — único component set, tipo `frame` contendo 84 `symbol`s.

---

## Seção 2 — Icon/ (`1421:17656`, 729×537)

Section com 44 instâncias de ícones soltos + 6 component sets de "ícone interativo" (botões pequenos sem chrome de borda) + 1 component set genérico `atom/icon/base`.

### 2.1 — Ícones simples (Figma-confirmado, todos `instance`, formal — instâncias de componentes de ícone definidos em outro arquivo/biblioteca, sem descrição própria neste nó)

`atom/Icon/Attachment`, `CloudCircle`, `CloudDone`, `CloudDownload`, `CloudOff`, `CloudQueue`, `CloudSync` (×2 instâncias), `CloudUpload`, `FolderNew`, `Download`, `DownloadDone`, `DownloadOffline`, `Downloading`, `FileMoveRight`, `FileMoveLeft`, `FileRename`, `Arquivar`, `FileDownload`, `FileDownloadOff`, `FileUpload`, `Folder`, `FolderOrganize`, `FolderCopy`, `FolderOff`, `FolderOpen`, `FolderShared`, `FolderZip`, `Upload`, `UploadFile`, `Settings` (×2, tamanhos distintos 24px/20px), `Favorite`, `FavoriteBorder`, `Filter`, `Copy`, `ArrowBack`, `ArrowBackIos`, `ArrowDown`, `ArrowDropDown`, `ArrowDropUp`, `ArrowForward`, `ArrowForwardIos`, `ArrowLeft`, `ArrowRight`, `ArrowUp`, `ChevronLeft`, `ChevronRight`, `Fullscreen`, `SpatialAudioOff`, `Organize`, `TagSet`, `Group`, `Label`, `ShareFile`, `Settings2`, `Share`, `Bookmark`, `BookmarkBorder`. Total: **44 instâncias únicas de ícone** (Figma-confirmado por contagem).

🧩 Inferido: `atom/Icon/Arquivar` é o único nome de ícone em português explícito na lista — sugere relação direta com a ação "Arquivar" (Regra 5, termo aprovado).

Também presente: `vector` solto `Union` (`1421:17815`, 10×10) — node-canvas solto, sem nome semântico, provável artefato de composição de ícone.

### 2.2 — Ícones-botão interativos (component sets formais, Figma-confirmado com descrição)

| Componente | Node ID | Descrição Figma verbatim | Props (Figma-confirmado) |
|---|---|---|---|
| `atom/DeleteButton` | `1421:17705` | "ícone utilizado para ações destrutivas" | `style`: Default\|Red\|White · `state`: On\|Idle\|Clicked\|Disabled |
| `atom/PlusButton` | `1421:17726` | "ícone utilizado para ações aditivas" | `style`: Default\|Primary\|White · `state`: On\|Idle\|Clicked\|Disabled |
| `atom/ActionButton/Confirm` | `1421:17747` | "icone usado em funções de confirmar" (ícone base "check": *"check, confirm, correct, disable_ios, done, enter, mark, ok, okay, select, tick, yes"*) | `style`: Default\|Primary\|White · `state`: On\|Idle\|Clicked\|Disabled |
| `atom/ClearButton` | `1421:17768` | "icone usado em funções de cancelar" (ícone base "clear": *"back, cancel, clear, correct, delete, erase, exit, x"*) | `style`: Default\|Red\|White · `state`: Idle\|Hover\|Clicked\|ClickedFIlled\|Disabled\|On |
| `atom/KeepButton` | `1421:17793` | "icone usado em funções de guardar em longo prazo" | `style`: Default\|Primary\|White · `state`: On\|Idle\|Clicked\|Disabled |
| `atom/icon/base` | `1421:17820` | sem descrição própria consultada — usado como sub-componente de `celule/chip/folder-tag` | `state`: Idle\|Default · `isHoverOn`: bool |

Nenhum dos 6 tem estado `Loading` nem `Error` explícito (Regra 8) — apenas `Disabled`. `ClearButton` é o único com `Hover` como estado nomeado à parte.

**Lente fluid-interface:** todos pequenos (12–28px), sem chrome de botão — mais próximos de "ícone com feedback de toque" que de "botão". Ver achado crítico #11.

### 2.3 — outros no Icon/ (loose dentro da section, Figma-confirmado nome/id apenas)

`symbol` `atom/UploadFolder` (`1439:17053`, 16×16), `symbol` `atom/ClearButton` (`1439:17052`, 16×16 — nome duplicado do component set 2.2, provável variante solta/duplicada fora do set original). 🧩 Inferido: duplicação acidental, não confirmado.

---

## Seção 3 — Search (`1421:17839`, 647×511)

| Componente | Node ID | Tipo | Descrição/observação |
|---|---|---|---|
| `molecule/SearchBar/Disabled/XXL` | `1421:17842` | instance | sem descrição verificada — 🧩 inferido: barra de busca em estado desabilitado |
| `molecule/SearchBar/Placeholder/XXL` | `1421:17845` | instance | **Figma-confirmado**: placeholder default = `"Search"` (ver achado crítico #1) |
| `molecule/SearchBar/ValueDisabled/XXL` | `1421:17848` | instance | 🧩 inferido: valor preenchido em estado desabilitado |
| `molecule/SearchBar/Value/XXL` | `1421:17853` | instance | 🧩 inferido: barra com valor digitado |
| `molecule/SearchBar/Typing/XXL` | `1421:17855` | instance | 🧩 inferido: estado "digitando" (com cursor/foco) |
| `molecule/SearchBar` | `1421:17857` | frame (component set, 3 symbols) | Variantes Figma-confirmadas: `Property 2=Focused\|wrongValue\|writeValue`, todas `Property 3=XXL` |

Nota: as 5 `instance`s acima parecem ser specimens/instâncias fixas de tamanho `XXL` do mesmo componente base representado pelo component set `molecule/SearchBar` (`1421:17857`) com variantes de estado (`Focused`, `wrongValue`, `writeValue`). 🧩 Inferido — não confirmado se são o mesmo componente subjacente ou componentes irmãos distintos.

Há também um `molecule/SearchBar` solto fora desta seção (`1421:18758`, 129×86, ver tabela de node-canvas solto) — 🧩 inferido: pode ser um specimen redundante ou uma variante de tamanho menor.

---

## Seção 4 — Typography (`1427:16951`, 456×651)

15 tokens de tipo, todos `Figtree` (Figma-confirmado via `get_variable_defs`):

| Token | Fonte / peso / tamanho / line-height / tracking (Figma-confirmado) |
|---|---|
| `Type/Display` | Regular 400, 50px, LH 100%, tracking 0 |
| `Type/H1` | Bold 700, 40px, LH 100%, tracking 0 |
| `Type/H2` | SemiBold 600, 32px, LH 100%, tracking 0 |
| `Type/H3` | Medium 500, 25px, LH 100%, tracking 0 |
| `Type/Heading/MD` | Medium 500, 20px, LH 28, tracking -0.2 |
| `Type/Heading/SM` | SemiBold 600, 16px, LH 22, tracking -0.1 |
| `Type/Body/LG` | Bold 700, 20px, LH 100%, tracking 0.12 |
| `Type/Body/MD` | Regular 400, 16px, LH 100%, tracking 0.12 |
| `Type/Body/SM` | Regular 400, 13px, LH 100%, tracking 0.12 |
| `Type/Body/XS` | Regular 400, 10px, LH 100%, tracking 0.12 |
| `Type/Label/SM` | Medium 500, 16px, LH 16, tracking 0.1 |
| `Type/Button/MD` | Medium 500, 14px, LH 20, tracking 0.1 |
| `Type/Caption/SM` | Regular 400, 11px, LH 16, tracking 0.2 |
| `Type/Tag` | Regular 400, 8px, LH 100%, tracking 0.12 |
| `Type/Body/XS/Bold` | Bold 700, 10px, LH 100%, tracking 0.12 |

Escala **Major Third (1.25) Figma-confirmada** entre a maioria dos degraus consecutivos (Display 50 → H1 40 = ×1.25; H3 25 → Body/LG 20 = ×1.25; Body/LG 20 → Body/MD 16 = ×1.25). Ver achado crítico #10 sobre piso de 16px não respeitado por 4 tokens.

Formal/informal: os 15 nodes são `text` soltos (specimens de estilo aplicado), não component sets — node-canvas solto por tipo de node, mas representam tokens formais de tipografia (estilos de texto Figma nomeados).

---

## Seção 5 — Pallete (`1427:16958`, 3468×3455)

78 variáveis Figma-confirmadas via `get_variable_defs` (cores + 2 estilos de tipo residuais). Resumo por categoria:

- **Marca primária (teal):** `--brand-primary-default` #007e96, `-dark` #1a5e6e, `-mid` #337084, `-light` #c8dce3, `-hover` #006b80, `-focus` #92ccff, `-disabled` #ecfbfde5 (ver achado crítico #8).
- **Marca secundária (wordmark):** `--brand-secondary-default` #31302d, `-dark` #1a1714, `-light` #6b6b68 (ver achado crítico #8).
- **Marca rosa (branding, Regra 3):** `Brand/Theme/Pink/Dark` #b5254a, `Brand/Theme/Pink/Light` #e8476a — formato de nome distinto das demais (ver achado crítico #9).
- **Feedback:** danger `#ac3a2e` (subtle `#c0392b59`), success `#009966` (subtle `#00996659`), warning `#c38418` (subtle `#f59e0b33`).
- **Neutros (texto/superfície/borda):** ~35 variáveis na família `neutral-*`, incluindo modo dark (`neutral-surface-dark*`, `neutral-text-ondark*`) — Figma-confirmado, não amostrado contra a rampa Zinc do Tailwind nesta US (fora do escopo de cataloging; recomenda-se comparação numérica em US de cores).
- **Efeitos de vidro (Liquid Glass):** `effect-glass-*` (white/dark/light em várias opacidades), `effect-overlay-*` — usados junto ao material da Seção 6.
- Nenhuma variável usa o formato `cor/categoria/papel/valor-semântico` da Regra 2 (ver achado crítico #9).

---

## Seção 6 — Material - Liquid Glass (`1431:17276`, 2631×1595)

Component sets: `Liquid Glass - Large` (`1431:17246`, Mode=Dark/Light), `Liquid Glass - Medium` (`1431:17253`, Mode=Dark/Light), `Liquid Glass - Small` (`1431:17260`, Mode=Dark/Light × State=Primary/Default). Symbol solto `BG - Large UI` (`1439:16862`) — 🧩 inferido: plano de fundo de demonstração, não parte do componente.

Variáveis de efeito Figma-confirmadas (`get_variable_defs`):

| Token | Valor |
|---|---|
| `Liquid Glass` | `Effect(type: GLASS, radius: 10)` |
| `Liquid Glass/Refraction` | 100 |
| `Liquid Glass/Dispersion` | 0 |
| `Liquid Glass/Light Angle` | -45 |
| `Liquid Glass/Depth - Regular` | 16 |
| `Liquid Glass/Depth - Medium and Large` | 16 |
| `Liquid Glass/Splay - Regular` | 6 |
| `Liquid Glass/Splay - Medium and Large` | 6 |
| `Liquid Glass/Frost - Regular` | 7 |
| `Liquid Glass/Frost - Medium` | 12 |
| `Liquid Glass/Frost - Large` | 14 |
| `Effect/Shadow/MD` | drop-shadow #0000001F, offset (0,4), radius 8 |
| `Effect/Shadow/LG` | drop-shadow #0000001F, offset (0,8), radius 40 |

Confirma Regra 10 — uma spec única e reutilizável de material, com sub-tokens de tamanho (Regular/Medium/Large) e modo (Dark/Light). Sem conflito encontrado.

---

## Seção 7 — Pages (`1439:25740`, 32808×10580)

23 telas completas (frames 1440×1024 ou variantes), cada uma composta por instâncias dos componentes já catalogados acima. **Node-canvas solto por natureza** (telas de aplicação, não component sets reutilizáveis) — catalogadas aqui por composição, não célula-a-célula (cada tela contém dezenas de frames de layout genéricos como "Frame 58"/"Frame 14"/"Group 17", não listados individualmente por não carregarem nome semântico).

| Tela | Node ID | Componentes referenciados (Figma-confirmado, únicos) |
|---|---|---|
| Home-Grid Mode | `1439:19639` | organism (header), organism/Sidebar, Navigation-Breadcrumb, lead, molecule/DropdownSelect/GroupBy, molecule/DropdownSelect/Label, molecule/view-mode-toggle, molecule/context-header (hidden), molecule/FileArchive1, molecule/FileArchive2, molecule/ImageItem |
| Home-First Upload | `1439:19658` | idem acima + atom/Icon/CloudDownload + 2 `text` soltos ("Arraste os arquivos que deseja armazenar", "ou use o botão "Adicionar"") + `ellipse` solta |
| Organização | `1439:19678` | organism/Sidebar, DropdownSelect×2, view-mode-toggle, context-header, FileArchive×2, ImageItem, organism/DialogSave |
| Organização - Modo Data-1/4 | `1439:19696` | + molecule/ArchiveItem, organism/OrganizePanel/DropZone |
| Organização - Modo Data-Organização salva | `1439:19717` | organism/OrganizePanel/DropZone, molecule/Notification |
| Function Storage Status - Global | `1439:19749` | molecule/StorageStatus/StatusSection, organism/DialogSave |
| Function Storage Status - Corrente | `1439:19763` | idem (mesma composição — variante de StatusSection não distinguível via metadata) |
| Function Storage Status - Longo Prazo | `1439:19777` | idem |
| Home-List Mode | `1439:19791` | molecule/FileList/Header, molecule/FileList |
| Home-List Mode-Selected | `1439:19810` | idem, modo selecionado |
| Home-Columns Mode_Item1 | `1439:19829` | composição padrão Home |
| Settings- Acount | `1439:19849` | composição padrão Settings (sem StorageStatus) |
| FAQ - Expanded | `1439:19898` | molecule/SearchBar/ValueDisabled/XXL + **texto "Liberar espaço" / "elegíveis" (achados críticos #2, #3)** |
| Payment - expanded | `1439:20215` | composição padrão Settings |
| Payment - colapsed | `1439:20485` | idem, colapsada |
| FAQ - Collapsed | `1439:20755` | idem FAQ Expanded + achados #2/#3 (ocorrências duplicadas) |
| Settings-Subscription | `1439:21072` | **card "Tiers" com texto "Acesso rápido"/"Longo prazo" (Regra 5 ✅) + texto "tier" em nota de debug ("uso por tier ainda não disponível no backend") + Active/Current Badge de plano (Starter/Pro/Max, não relacionado a storage-tier — ver achado #4)** |
| Settings-Notifications | `1439:21165` | composição padrão Settings |
| Settings-Themes & Customization | `1439:21211` | idem |
| Settings - Privacy | `1439:21268` | idem |
| Settings - Delete Account | `1439:21297` | idem |
| Settings - Languages | `1439:21327` | idem |
| Kandrive Login - Glassmorphism Edition | `1439:21362` | 0 instâncias de componente catalogado — tela provavelmente construída com elementos nativos/soltos (não verificado em profundidade nesta US) |

Nota sobre "Camada 1": um frame chamado literalmente `Camada 1` existe em `1439:21368` (dentro de uma tela não detalhada acima) — **Figma-confirmado como nome de layer genérico do Figma** (equivalente a "Layer 1"), não texto de UI visível; não constitui violação da Regra 5 (o termo proibido "camada" se refere a rótulo de UI, não a nome interno de layer).

---

## Elementos soltos no canvas, fora das 7 seções (75 nodes, Figma-confirmado nome/id/dimensão)

Todos classificados **formais** (component sets/instances reais — cada `frame` abaixo envolve `symbol`s de variante; ver metodologia). Nenhum teve descrição verificada individualmente nesta iteração, exceto os 3 já cobertos nos achados críticos (`celule/chip/folder-tag`, `atom/badge/TypeLabel`). Intenção de cada um é 🧩 inferida a partir do nome — não apresentar como fato.

| Componente | Node ID | Dimensão | 🧩 Intenção inferida |
|---|---|---|---|
| `molecule/StorageBar` | `1421:17904` | 463×242 | Barra de progresso de uso de armazenamento (Style Primary/Primary Dark × Empty/HalfFull/Expanded) |
| `atom/Tag` | `1421:17929` | 145×275 | Tag genérica reutilizável |
| `organism/Sidebar` | `1421:17946` | 2294×652 | Barra lateral de navegação principal |
| `atom/ArchiveItem` | `1421:18214` | 473×101 | Linha/card de item arquivado |
| `atom/FolderItem` | `1440:24306` | 503×101 | Linha/card de pasta |
| `atom/SelectState` | `1421:18292` | 128×48 | Indicador de seleção (checkbox/radio) |
| `atom/ImageItem` | `1421:18311` | 650×101 | Linha/card de item de imagem |
| `atom /VideoItem` | `1442:7858` | 665×103 | Linha/card de item de vídeo — nome com espaço antes da barra (inconsistência de nomenclatura Figma-confirmada) |
| `molecule/StorageStatus` | `1421:18354` | 1061×722 | Container do painel de status de armazenamento |
| `molecule/StorageStatus/HeaderSelector` (symbol) | `1439:17054` | 1004×40 | Seletor de cabeçalho dentro do StorageStatus |
| `molecule/StorageStatus/LongTerm` (symbol) | `1439:17045` | 469×132 | Sub-view "Longo prazo" do StorageStatus |
| `molecule/StorageStatus/Current` (symbol) | `1439:17044` | 468×132 | Sub-view "Acesso rápido/corrente" do StorageStatus |
| `molecule/StorageStatus/StatusSection` (symbol) | `1439:17043` | 1061×484 | Seção completa usada nas 3 telas "Function Storage Status" |
| `molecule/StorageStatus/SectionSearch` (symbol) | `1439:17046` | 1025×374 | Busca dentro da seção de status |
| `atom/TypeLabel` (instance) | `1421:18500` | 59×16 | Instância solta de rótulo de tipo — possível duplicata/specimen de `atom/badge/TypeLabel` |
| `organism/info/Popover` | `1421:18504` | 319×380 | Popover informativo |
| `organism/DialogSave/OrganizationModal` (symbol) | `1421:18576` | 1014×617 | Modal de salvar organização |
| `molecule/FolderCard` | `1421:18595` | 988×1165 | Card de pasta |
| ` ` (sem nome) | `1421:18687` | 563×193 | **Sem nome no Figma** — 3 states (Default/Expanded/Disabled); propósito não identificável sem inspeção visual |
| `molecule/DropdownSelect/GroupBy` | `1421:18719` | 205×328 | Dropdown de agrupamento |
| `molecule/SearchBar` (duplicata fora da Seção 3) | `1421:18758` | 129×86 | Ver nota na Seção 3 |
| `atom/TagOrgMode` | `1421:18769` | 157×172 | Tag de modo de organização |
| `atom/TagOrgTemplateName` | `1421:18778` | 235×68 | Tag de nome de template de organização |
| `organism/OrganizePanel/DropZone` | `1421:18781` | 9952×804 | Painel de organização com drop zone (canvas livre) |
| `atom/CloseButton` | `1421:19008` | 142×48 | Botão de fechar |
| `molecule/action-pill` | `1421:19027` | 128×120 | Pill de ação |
| `celule/chip/folder-tag` | `1421:19040` | 154×183 | Ver achados críticos #5, #6 |
| `molecule/view-mode-toggle` | `1421:19069` | 246×220 | Alternador de modo de visualização (grid/list/columns) |
| `organism/sidebar-toggle` | `1421:19118` | 245×250 | Botão de colapsar/expandir sidebar |
| `organism/storage-sidebar` | `1421:19167` | 273×342 | Sidebar de armazenamento |
| `molecule/FileList/Header` | `1421:19184` | 1057×213 | Cabeçalho de lista de arquivos |
| `molecule/FileList` | `1421:19200` | 3804×448 | Lista de arquivos |
| `organism/upload-popover` | `1421:19292` | 404×374 | Popover de upload |
| `organism/preview-pane` | `1421:19405` | 416×2280 | Painel de pré-visualização |
| `molecule/thumbnail-large` | `1421:19570` | 317×578 | Thumbnail grande |
| `molecule/context-header` | `1421:19589` | 443×164 | Cabeçalho contextual (usado hidden em várias telas) |
| `molecule/popover/Notification` | `1421:19626` | 360×327 | Popover de notificação |
| `organism/file-list-container` | `1421:19687` | 576×279 | Container de lista de arquivos |
| `molecule/template-card` | `1421:19695` | 3927×424 | Card de template |
| `celule/Pages/Lead` (symbol) | `1439:17048` | 616×63 | Componente "lead" referenciado como `instance` `lead` em várias telas |
| `Navigation - Breadcrumb` | `1421:19875` | 1128×260 | Breadcrumb de navegação — nome não segue convenção atom/molecule/organism |
| `organism/Header` | `1421:19918` | 1480×368 | Cabeçalho principal (referenciado como `instance` "organism" nas telas) |
| `organism/Dialog/TemplateReviewModal` (symbol) | `1431:20397` | 856×661 | Modal de revisão de template |
| `atom/Label/Duplicated` (symbol) | `1439:16874` | 119×24 | Rótulo "duplicado" |
| `celule/Callout` | `1421:20028` | 856×160 | Callout/alerta |
| `organism/Save/LongTermFileStorage` (symbol) | `1439:16907` | 700×584 | Fluxo de salvar em longo prazo |
| `organism/ArchiveBrowserModal` (symbol) | `1439:16909` | 760×544 | Modal navegador de arquivo |
| `celule/MainCanvas/Organization/FreeMode/ItemNode` | `1421:20108` | 778×896 | Nó de item no canvas livre de organização |
| `celule/MainCanvas/Organization/FreeMode/OutputNode` | `1421:20262` | 278×499 | Nó de saída no canvas livre |
| `atom/buttonAdd` | `1421:20509` | 122×185 | Botão de adicionar |
| `celule/nodoContextMenuItem` | `1421:20528` | 852×737 | Item de menu de contexto |
| `celule/MainCanvas/Organization/FreeMode/ListItem` | `1421:20757` | 374×784 | Item de lista no canvas livre |
| `molecule` (sem sufixo) | `1421:20896` | 682×201 | Variantes `ArchiveFileRow`/`ArchiveSelectableRow` — **nome incompleto no Figma** |
| `atom/Sidebar/Tags/Items ` | `1421:20907` | 272×129 | Itens de tags na sidebar — nome com espaço residual no final |
| `organism/cleanSpaceStorage` (symbol) | `1439:16908` | 672×700 | Fluxo de liberar espaço |
| `organism/MainCanvas/Organization/FreeMode` (symbol) | `1439:16906` | 1117×933 | Canvas livre de organização completo |
| `Footer` | `1431:17284` | 1520×222 | Rodapé — nome não segue convenção |
| `Menuitem - freemodeOrganization` (symbol) | `1431:20042` | 228×250 | Item de menu do modo livre |
| `celule/MainCanvas/Organization/FreeMode/Buttons` (symbol) | `1431:20043` | 178×40 | Botões do canvas livre |
| `atom/boxIconButton` | `1431:20102` | 764×82 | Botão com ícone em caixa |
| `celule/cleanSpaceStorage/listSelection` | `1436:20496` | 618×172 | Seleção de lista no fluxo de liberar espaço |
| `atom/Label/Storage/Alert` | `1439:16885` | 185×196 | Rótulo de alerta de armazenamento |
| `organism/dropdownMenu` (frame + instance duplicados) | `1440:23662` / `1440:23768` | 248×278 / 217×109 | Menu dropdown |
| `celule/dropListItem` | `1440:23803` | 231×176 | Item de lista de dropdown |
| `molecule/nodoContextMenu` | `1440:23821` | 435×855 | Menu de contexto de nó |
| `atom/DropdownSelect/GroupBy/Item` | `1444:21587` | 144×152 | Item do dropdown "agrupar por" |
| `organism/drop/NewTag` (symbol) | `1444:21624` | 153×52 | Criar nova tag via drop |
| `atom/DropdownSelect/Label/Item` | `1444:21704` | 120×136 | Item do dropdown "rótulo" |
| `favincon/ArchiveFormats` | `1444:21914` | 111×105 | **Prefixo "favincon" (não "atom"/"favicon") — typo Figma-confirmado** |
| `celule/TagColor` | `1444:21979` | 112×74 | Seletor de cor de tag |

Adicionais soltos sem prefixo de camada semântica (Figma-confirmado, não catalogados como componente de design system): `icon-Kandrive` (symbol, logo), `fav-icon` (symbol), `logo-vertical Kandrive` (symbol) — ativos de marca, não componentes de UI.

---

## Metodologia e limitações desta iteração

1. `get_metadata` foi usado para obter a árvore completa da página (2347 nodes) — cobre 100% da estrutura (nome/id/tipo/posição/dimensão) exigida pelo critério de aceitação.
2. `get_design_context` foi usado node-a-node (não em nível de seção, que sempre retorna resposta esparsa sem descrições) para os componentes de maior relevância às Regras travadas: `atom/PushButton` e suas 19 variantes com descrição própria, os 6 ícones-botão do Icon/, `celule/chip/folder-tag`, `atom/badge/TypeLabel`, e o placeholder real de `molecule/SearchBar/Placeholder/XXL`. Isso perfaz ~10 chamadas de descrição, priorizadas pelas Regras 1, 5, 6, 7.
3. `get_variable_defs` foi usado para as 3 seções de token (Pallete, Typography, Material) — cobertura completa das variáveis vinculadas a esses nós.
4. Os demais ~140 component sets/instances (Icon/ ícones simples, os 75 soltos no canvas, os componentes dentro das 23 telas) **não tiveram descrição verificada individualmente** — nome, id, tipo, dimensão e classificação formal/informal são Figma-confirmados; propósito é 🧩 inferido. Se uma US futura precisar da descrição verbatim de um desses itens, o node ID está listado acima para consulta pontual — evita reler a árvore inteira novamente.
5. Buscas textuais completas (`grep`) foram feitas na árvore de metadata para: `badge`, e a lista de termos proibidos da Regra 5 (`freezer`, `congelad*`, `frio`/`fria`, `camada`, `elegí*`, `Liberar Espaço`, `CTA`) — cobertura de 100% dos 479 nodes de texto da página.
