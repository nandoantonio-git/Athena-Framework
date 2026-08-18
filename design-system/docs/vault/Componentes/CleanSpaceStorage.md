---
tags: [componente, organism]
---

# CleanSpaceStorage

`organism/cleanSpaceStorage` (`1439:16908`) — descrição verbatim: *"modal que abre em overlay ao selecionar a opção de liberar espaço. nele você pode otimizar seu espaço com arquivos grande e duplicados, economizando espaço."*

- **Código:** `src/components/organisms/clean-space-storage.tsx`
- **Título visível:** "Liberar Espaço" (Figma-confirmado 2026-08-10)

## Composição

Duas seções: "Arquivos grandes" (lista via `CleanSpaceListSelection` (cell) — sem nota própria no vault, ver [[Camadas Atômicas]] e `stories/cells/CleanSpaceListSelection.mdx`, reusada — Regra 10) e "Arquivos duplicados" (prévia ilustrativa, com badge "Prévia" indicando que a detecção de fato ainda não existe).

## Ícones de arquivo — atualizados em 2026-08-15

Trocados de aproximação `lucide-react` pro glifo real exportado do Figma (`favincon/ArchiveFormats`, node `1444:21914`) — cartão gradiente teal com 3 linhas brancas. A cell `CleanSpaceListSelection` recebeu o fix; `cleanSpaceStorage` cascateou automaticamente por reusar a mesma peça.

## Gatilhos — 2 termos, 1 modal

- Sidebar → "Gerir Espaço"
- Armazenamento / Configurações de Plano → "Liberar Espaço"

Ver [[Regra 5 - Terminologia]].

## Botões destrutivos

"Excluir"/"Excluir cópias" — chrome neutro/glass, só o texto em `#bc3426`. Fonte real das leituras da [[Regra 3 - Cores da Marca|Regra 3]] sobre tratamento de perigo.

## Ver também

- [[Regra 5 - Terminologia]]
- [[Regra 6 - Segmentação de Armazenamento]]
- [[Regra 11 - Protocolo de Verificação]]
