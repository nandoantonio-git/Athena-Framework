# FileListHeader — histórico de auditoria

Espelha o conteúdo removido de `stories/molecules/FileListHeader.mdx` em 2026-08-16. Node Figma: `molecule/FileList/Header`, `1421:19184`.

## Status

🔧 corrigido em auditoria Regra 11 (US-026) — releitura via
`get_design_context` do node, descrição verbatim: *"estrutura do header de
lista"*. A borda inferior no export fecha a linha "Nome"/"Proprietário"/
"Tamanho do Arquivo" (dentro do container de 56px), com a linha "Hoje"
aparecendo *abaixo* dela — a implementação anterior aplicava a borda no
wrapper externo (envolvendo as 2 linhas juntas), deixando "Hoje" acima da
borda em vez de abaixo. Corrigido em `file-list-header.tsx` (borda movida
para a linha 1 + `gap-4` real do Figma entre as linhas).

## Reverificado em auditoria de ponto-fixo (3ª passada, 2026-08-12)

`get_design_context` fresco no nó `1421:19184` + screenshot Storybook
(`Home`/`Storage Status`) comparados elemento-a-elemento — "Nome" (20px
bold), "Armazenamento" + seta para baixo, "Proprietário"/"Tamanho do
Arquivo" (20px bold), linha "Hoje" e borda inferior batem. Nenhuma
divergência nova.

## Eixo confirmado (Regra 11)

Component set com eixo `format` (`Home`\|`Storage Status`):

| Figma | Prop | Composição confirmada |
| --- | --- | --- |
| `format=Home` | `format="home"` (default) | 1 linha (56px, borda inferior): "Nome" (20px bold) + botão "Armazenamento" (20px bold) com `atom/Icon/ArrowDown` (`arrow_downward`) |
| `format=Storage Status` | `format="storage-status"` | 2 linhas: linha de coluna ("Nome" + "Proprietário" + "Tamanho do Arquivo", sem ícone) + linha de data (`dateLabel`, default "Hoje") |

## Checklist elemento-a-elemento (Regra 11)

| Elemento Figma | Implementado | Fonte |
| --- | --- | --- |
| "Nome", 20px bold, `var(--brand-secondary-default,#31302d)` | ✅ `text-xl font-bold text-brand-secondary` (token já existente, mesmo hex) | ✅ Figma-confirmado |
| "Armazenamento" + `atom/Icon/ArrowDown`, 20px bold | ✅ `<Icon name="ArrowDown" />` + texto | ✅ Figma-confirmado |
| "Proprietário"/"Tamanho do Arquivo", 20px bold, `var(--brand-secondary-light,#6b6b68)` | ✅ `text-xl font-bold text-brand-secondary-light` | ✅ Figma-confirmado |
| Linha de data ("Hoje"), 16px, `var(--neutral-text-secondary,#3f3f46)` | ✅ `text-base text-zinc-700` (zinc-700 = `#3f3f46` exato, mesma aproximação já usada em `DropdownSelectLabelItem`) | ✅ Figma-confirmado |
| Borda inferior `var(--neutral-border-strong,#3a3a3a)` | ✅ `border-zinc-800` (aproximação Zinc, Regra 3 — sem degrau exato, paleta neutra suspensa) | ✅ Figma-confirmado (aproximado) |
| Posição da borda em `format="storage-status"` (fecha a linha 1, "Hoje" abaixo dela) | 🔧 Corrigido nesta auditoria — antes a borda envolvia as 2 linhas juntas | ✅ Figma-confirmado |

## Estados (Regra 8)

Sem eixo de estado confirmado — cabeçalho estático, sem interação além do
botão de ordenação (`format="home"`), que não tem handler de ordenação
Figma-confirmado (sem `onSort` implementado, evita inventar comportamento).

## Material Liquid Glass

Não aplicável — fundo transparente, sem uso do material.

## Terminologia

"Nome"/"Armazenamento"/"Proprietário"/"Tamanho do Arquivo"/"Hoje" são texto
Figma-confirmado, fora da lista aprovada/proibida da Regra 5 (vocabulário
de coluna de tabela, não de storage-tier) — sem CONFLICT a registrar.
