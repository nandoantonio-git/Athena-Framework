---
tags: [regra, travada]
---

# Regra 6 — Segmentação de Armazenamento

A segmentação **sistêmica** entre "guardado" (longo prazo) e "corrente" (acesso rápido) é resolvida por **organização em diretórios/pastas diferentes** dentro do sistema de arquivos — não por um badge de navegação/filtro.

## Não confundir 2 coisas diferentes

1. **Navegação/filtro sistêmico** — resolvido por diretório, não por componente de UI. A versão antiga de `StorageTierBadge` (molecule, 3 rótulos) foi **descontinuada e removida** por violar isso.
2. **Rótulo por item individual** — `atom/StorageTierBadge` (node `1457:21014`, só 2 variantes: `current`/`long term`) é um componente real, criado pelo usuário no Figma em 2026-08-10, usado dentro de `CleanSpaceStorage` como rótulo por arquivo. Escopo diferente — não invalida a decisão de segmentação por diretório.

## Ver também

- [[CleanSpaceStorage]]
- [[Regra 5 - Terminologia]]
