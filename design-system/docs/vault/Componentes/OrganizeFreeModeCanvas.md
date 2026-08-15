---
tags: [componente, organism]
---

# OrganizeFreeModeCanvas

`organism/MainCanvas/Organization/FreeMode` (`1439:16906`) — a peça mais complexa do catálogo: canvas interativo do fluxo de organização "Modo Livre".

- **Código:** `src/components/organisms/organize-free-mode-canvas.tsx`

## Composição (várias celules)

Nós de filtro/operação/resultado arrastáveis (`FreeModeItemNode`), toolbar inferior (`FreeModeButtons`), lista de tipos de nó (`FreeModeListItem`), nó de destino final (`FreeModeOutputNode`), menu contextual do nó selecionado (`molecule/nodoContextMenu` + `celule/nodoContextMenuItem`).

## FreeModeOutputNode — dropdown de preview real (feature nova, 2026-08-15)

O bloco "Prévia de arquivos" já existia no código (cabeçalho + chevron + `<ul>` de nomes), mas o container era fixo em `h-[34.5px] overflow-hidden` — um crop Figma-confirmado que deixava a lista **sempre invisível**. Decisão humana: virou uma mini dropdown de verdade — clique no cabeçalho alterna `previewExpanded` (estado local), chevron gira 180°, altura passa pra `h-fit`. Inferido a partir do mesmo padrão de expand/collapse já usado em `NodoContextMenuItem`/`DropListItem` — **não é Figma-confirmado**, é decisão humana registrada como tal (Regra 9).

## Achado histórico (pass16, US-026)

A implementação usava uma cadeia flex simplificada; o Figma real confirma composição absoluta 1117×933 com source group, filtros empilhados, `Junção`, `Auto-Archive`, `Resultado` expandido, painel, minimap e footer. Corrigido nessa passada.

## Ver também

- [[Camadas Atômicas]]
- [[Regra 9 - Figma-confirmado vs Inferido]]
