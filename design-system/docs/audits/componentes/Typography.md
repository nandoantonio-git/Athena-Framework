# Typography (Tokens) — histórico de auditoria

Espelha o conteúdo removido de `stories/tokens/Typography.mdx` em 2026-08-16. Node Figma: `1427:16951` (seção "Typography").

## Reconciliado com o Figma em 2026-08-09

Os 15 tokens de tipo foram lidos diretamente da seção "Typography" (`get_variable_defs`, nó
`1427:16951`), confirmando o inventário da US-002. Página anteriormente
escrita só a partir das decisões travadas em `AGENTS.md` — agora
substituída por valores reais onde disponíveis.

## Correção de acessibilidade em 2026-08-10 (US-011)

A Regra 4 foi
atualizada no mesmo dia com uma política de exceção explícita: piso de
16px obrigatório para texto de leitura/ação primária (body, labels de
botão/input, links); microtexto genuinamente decorativo/complementar
(badge, tag, caption, timestamp) pode ficar abaixo como exceção
documentada, nunca abaixo de ~11px, sempre em `rem`. Sob essa política,
`Type/Button/MD` deixa de ser tratado como exceção (rótulo de botão é
ação, não decoração) e `Type/Tag` sobe do valor Figma-confirmado (8px,
abaixo até do piso de exceção) para 11px.

## Família — Figma-confirmado

Todos os 15 tokens usam `Figtree`, confirmando a
decisão travada (Regra 4). (O scaffold atual da US-001 ainda carrega
`@fontsource-variable/geist` como fonte do shadcn base — trocar para Figtree
é trabalho de implementação, fora do escopo da US que introduziu esta
página, que era somente-doc.)

## Escala tipográfica — tabela completa com origem por valor

| Token Figma | Peso | Tamanho (Figma) | Tamanho (implementado) | Line-height | Tracking | Fonte |
| --- | --- | --- | --- | --- | --- | --- |
| `Type/Display` | Regular 400 | 50px | 50px | 100% | 0 | ✅ Figma-confirmado |
| `Type/H1` | Bold 700 | 40px | 40px | 100% | 0 | ✅ Figma-confirmado |
| `Type/H2` | SemiBold 600 | 32px | 32px | 100% | 0 | ✅ Figma-confirmado |
| `Type/H3` | Medium 500 | 25px | 25px | 100% | 0 | ✅ Figma-confirmado |
| `Type/Heading/MD` | Medium 500 | 20px | 20px | 28px | -0.2 | ✅ Figma-confirmado |
| `Type/Heading/SM` | SemiBold 600 | 16px | 16px | 22px | -0.1 | ✅ Figma-confirmado |
| `Type/Body/LG` | Bold 700 | 20px | 20px | 100% | 0.12 | ✅ Figma-confirmado |
| `Type/Body/MD` | Regular 400 | 16px | 16px | 100% | 0.12 | ✅ Figma-confirmado |
| `Type/Label/SM` | Medium 500 | 16px | 16px | 16px | 0.1 | ✅ Figma-confirmado |
| `Type/Button/MD` | Medium 500 | 14px | **16px** | 20px | 0.1 | 🔧 **Corrigido em 2026-08-10 (US-011)** — texto de ação primária, não é mais tratado como exceção; implementação (`atom/PushButton`, `text-base`) sobe para o piso obrigatório da Regra 4, acima do valor Figma-confirmado (14px) |
| `Type/Body/SM` | Regular 400 | 13px | 13px | 100% | 0.12 | ⚠️ Exceção documentada (Regra 4) — avaliar caso a caso se é leitura primária ou complementar; sem implementação literal encontrada no código nesta US |
| `Type/Caption/SM` | Regular 400 | 11px | 11px | 16px | 0.2 | ⚠️ Exceção documentada (Regra 4) — microtexto complementar, no piso mínimo de exceção |
| `Type/Body/XS` | Regular 400 | 10px | 10px (`0.625rem`) | 100% | 0.12 | ⚠️ Exceção documentada (Regra 4) — implementado em `rem` (ex.: rótulo "AGRUPAR" em `DropdownSelectGroupBy`) |
| `Type/Body/XS/Bold` | Bold 700 | 10px | 10px (`0.625rem`) | 100% | 0.12 | ⚠️ Exceção documentada (Regra 4) — implementado em `rem` (ex.: badge "ACTIVE" em `OrganizeFreeModeCanvas`, contador de upload) |
| `Type/Tag` | Regular 400 | 8px | **11px** | 100% | 0.12 | 🔧 **Corrigido em 2026-08-10 (US-011)** — 8px ficava abaixo até do piso mínimo de exceção (~11px); sobe para 11px. Nenhum componente implementava o valor Figma-confirmado (8px) literalmente (confirmado por busca no código) — `FolderTagChip`/`StorageTierBadge` (molecule, descontinuada em 2026-08-10 na US-012 e substituída por `atom/StorageTierBadge`, `text-[0.625rem]`/10px — ver `Atoms/StorageTierBadge.mdx`) já usavam `text-sm` (14px), acima do novo piso |

**Política de exceção de 16px (Regra 4, atualizada 2026-08-10):** piso
obrigatório de 16px para texto de leitura/ação primária (body, labels de
botão/input, links) — dá suporte ao critério WCAG 1.4.4 (Resize Text).
Microtexto genuinamente decorativo/complementar (badge, tag, caption,
timestamp) pode ficar abaixo do piso como **exceção documentada**, desde
que: (a) nunca abaixo de ~11px, (b) sempre expresso em `rem` (nunca `px`
fixo), e (c) nunca seja o único portador de informação essencial. Sob essa
política, `Type/Button/MD` é uma **violação real** (rótulo de botão é ação,
não decoração) — corrigido nesta US. `Type/Tag` estava abaixo até do piso
de exceção — corrigido nesta US para 11px. Os demais 4 tokens abaixo de
16px (`Type/Body/SM`, `Type/Caption/SM`, `Type/Body/XS`,
`Type/Body/XS/Bold`) permanecem como exceção documentada — são microtexto
complementar, não ação/leitura primária. Ver `docs/conflicts.md` para o
histórico da decisão.

## Escala — Major Third (1.25), verificação passo a passo

🔒 A Regra 4 declara razão **Major Third (1.25)**. Verificando os 15 valores
Figma-confirmados acima passo a passo:

| Degrau → degrau | Razão real | Bate 1.25? |
| --- | --- | --- |
| Display 50 → H1 40 | 1.25 | ✅ exato |
| H1 40 → H2 32 | 1.25 | ✅ exato |
| H2 32 → H3 25 | 1.28 | 🧩 aproximado (ideal seria 25.6, arredondado para 25) |
| H3 25 → Heading/MD 20 | 1.25 | ✅ exato |
| Heading/MD 20 → Heading/SM 16 | 1.25 | ✅ exato |
| Heading/SM 16 → Button/MD 14 | 1.14 | ❌ não segue a razão (tamanho de UI dedicado, não degrau de escala) |
| Body/XS 10 → Tag 8 | 1.25 | ✅ exato |

A escala Major Third é **Figma-confirmada** para a espinha dorsal
Display→H1→H2→H3→Heading/MD→Heading/SM (32px→16px) e para o par
Body/XS→Tag (10px→8px). Os tamanhos de UI dedicados abaixo de 16px
(`Button/MD` 14, `Body/SM` 13, `Caption/SM` 11) não seguem a progressão
geométrica estrita — são valores de legibilidade de componente específico,
não degraus derivados da escala. Isso não é um CONFLICT à parte: é a mesma
característica já coberta pelo achado do piso de 16px acima (esses três
tokens só existem porque ficam fora tanto da escala quanto do piso).

## Pesos (Figma-confirmado)

| Peso | Tokens que usam |
| --- | --- |
| Regular 400 | Display, Body/LG–XS, Caption/SM, Tag |
| Medium 500 | H3, Heading/MD, Label/SM, Button/MD |
| SemiBold 600 | H2, Heading/SM |
| Bold 700 | H1, Body/LG, Body/XS/Bold |

## Line-height (Figma-confirmado)

A maioria dos tokens ≥20px usa `line-height: 100%` (sem folga extra); os
tokens de UI menores usam um line-height explícito em px, maior que o
tamanho da fonte (folga de leitura): `Heading/MD` 20px/28px, `Heading/SM`
16px/22px, `Button/MD` 14px/20px, `Label/SM` 16px/16px, `Caption/SM` 11px/16px.

## Conformidade WCAG 1.4.4 (Resize Text)

O piso de 16px (Regra 4) existe para suportar o critério WCAG 1.4.4 — texto
deve poder ser redimensionado até 200% pelo usuário sem perda de conteúdo ou
funcionalidade. Com a política de exceção definida em 2026-08-10 e aplicada
nesta US:

- `Type/Button/MD` e `Type/Tag` eram violações reais (texto de ação/rótulo
  abaixo do piso obrigatório, sem justificativa de exceção) — **corrigidos
  nesta US** (16px e 11px respectivamente, ver tabela acima).
- `Type/Body/SM`, `Type/Caption/SM`, `Type/Body/XS` e `Type/Body/XS/Bold`
  seguem abaixo de 16px como **exceção documentada** — são microtexto
  decorativo/complementar (badge, tag, caption, timestamp), nunca abaixo de
  ~11px e nunca o único portador de informação essencial.
- Todos os tamanhos devem ser expressos em `rem` (relativos à raiz), nunca em
  `px` fixo — herdam o zoom/preferência de tamanho de fonte do
  navegador/SO. Os valores Figma-confirmados na tabela acima estão em px
  (como o Figma reporta); a implementação usa as classes utilitárias `text-*`
  do Tailwind (já `rem`-based, ex.: `text-base` = `1rem`/16px) ou valores
  arbitrários explícitos em `rem` (ex.: `text-[0.625rem]` para 10px) — nunca
  `text-[Npx]`. Confirmado nesta US: os 6 usos de `text-[10px]` encontrados
  no código (`DropdownSelectGroupBy`, `ViewModeToggle`, `UploadPopover`,
  `DialogSaveOrganizationModal`, `OrganizeFreeModeCanvas`) foram corrigidos
  para `text-[0.625rem]`.
- Nenhum componente deve sobrescrever esses tokens com `font-size` fixo em
  `px` diferente do documentado aqui.
- Componentes que usarem qualquer um dos 4 tokens de exceção acima devem
  citar essa exceção em seu próprio `.mdx`, nunca tratar o uso como livre de
  risco de acessibilidade.
