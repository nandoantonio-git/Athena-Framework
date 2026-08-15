---
tags: [componente, molecule]
---

# StorageStatus

`molecule/StorageStatus` (`1421:18354`) — widget de status de armazenamento, totais por tier.

- **Código:** `src/components/molecules/storage-status.tsx`

## 2 variantes

- `variant="sidebar"` — compacto, embutido na [[Sidebar]]
- `variant="expanded"` — página cheia, com abas Global/Acesso Rápido/Longo Prazo (via `ScopeTypeLabel`, `atom/badge/TypeLabel`)

## Bug corrigido em 2026-08-15 — tag "selecionada" indevida

Na variante `sidebar`, a tag "Longo Prazo" usava `bg-brand-teal` (fundo sólido teal) — o mesmo tratamento visual do estado **selecionado** de um tab real, mas aqui é só um rótulo estático, sem interação nenhuma. Corrigido pra o tratamento neutro/idle (`border-zinc-200 bg-zinc-100`), consistente com como um label não-selecionável deveria parecer.

## `usedLabel`/`freeLabel` — achado da 3ª auditoria (2026-08-12)

Legenda de 2 itens abaixo da barra ("XX em uso" + "XX Livre") que a implementação original omitia — confirmado via `get_design_context` nos nós de `Corrente`/`Longo Prazo`.

## Ver também

- [[Sidebar]]
- [[Regra 3 - Cores da Marca]]
