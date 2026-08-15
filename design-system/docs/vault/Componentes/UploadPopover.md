---
tags: [componente, organism]
---

# UploadPopover

`organism/upload-popover` (`1421:19292`) — descrição verbatim: *"pop over que se preenche dinamicamente conforme status de upload. usado no canto inferior esquerdo."*

- **Código:** `src/components/organisms/upload-popover.tsx`

## O achado de 2026-08-15 — a descrição era literal

"Se preenche dinamicamente" não é metáfora: releitura do Figma revelou uma camada de fundo inteira que faltava — um overlay `rgba(107,107,104,0.1)` que cresce da esquerda até a % de progresso, **atrás de todo o conteúdo do card**. Isso é separado da barrinha fina "Em andamento" que já existia (essa continua existindo também). A implementação anterior só tinha a barrinha — a camada de preenchimento do card em si nunca tinha sido implementada.

Detalhe técnico: como CSS empilha elementos posicionados sempre acima de não-posicionados (independente da ordem no DOM), tanto o header quanto a seção de progresso/lista precisaram de `position: relative` explícito pra ficarem visíveis por cima do overlay absoluto.

## 2 variantes viram 1 componente

`Toast (The Focused Component)` (com barra + lista de arquivos) e `Variant2` (só cabeçalho) — implementadas como 1 componente: cabeçalho sempre visível, seção de progresso condicionada a `files` não estar vazio.

## Gap de terminologia conhecido

Texto Figma-confirmado 100% em inglês ("Uploading 3 files", "IN PROGRESS") — traduzido direto pro português na implementação, nunca literal.

## Ver também

- [[Liquid Glass]]
- [[Regra 9 - Figma-confirmado vs Inferido]]
