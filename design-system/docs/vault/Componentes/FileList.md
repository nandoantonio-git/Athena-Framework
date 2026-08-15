---
tags: [componente, molecule]
---

# FileList

`molecule/FileList` (`1421:19200`) — descrição verbatim: *"estrutura de lista de aqurivo de todos os tipos"* (sic). Linha de lista de arquivo/pasta.

- **Código:** `src/components/molecules/file-list.tsx`

## 3 formatos (`format`)

- `list` — ícone + nome + proprietário + tamanho (1025px)
- `storage` — igual, sem coluna Proprietário
- `list-sm` — termina com seta (`atom/Icon/ArrowRight`) em vez de tamanho (560px)

## Bug corrigido em 2026-08-15 — nome duplicado

O glifo de pasta/arquivo (`FileListArchiveItem`) tem um micro-nome embutido sob o ícone — pensado pra contextos de **grid**, onde não há texto ao lado. Em `FileList` (uma lista, não grid) esse micro-nome ficava ligado nos formatos `list`/`storage`, duplicando visualmente o `<span>{fileName}</span>` da própria linha. Desligado sempre — `showName={false}` incondicional.

## Reusa `atom/ArchiveItem` internamente

Não implementa o ícone do zero — `FileListArchiveItem` interno usa o mesmo glifo gradiente teal (`FolderArchiveGlyph.svg`) já visto em [[CleanSpaceStorage]].

## Relocado de `organisms/` (US-022)

Node real se chama `molecule/FileList`, não `organism/*` — a categorização antiga (`organism/file-list-item`) era 100% inferida, sem acesso ao Figma.

## Ver também

- [[Camadas Atômicas]]
- [[Regra 10 - Liquid Glass]]
