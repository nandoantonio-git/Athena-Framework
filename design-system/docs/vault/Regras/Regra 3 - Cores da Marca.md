---
tags: [regra, travada]
---

# Regra 3 — Cores da Marca

Figma é a fonte de verdade pra cor (decisão humana, 2026-08-10) — os valores abaixo **substituíram** valores antigos que nunca bateram com o Figma real.

| Papel | Valor ativo | Valor antigo (descontinuado) |
| --- | --- | --- |
| Primária | `#007e96` | ~~`#2A7A8C`~~ |
| Secundária | `#31302d` | ~~`#3A3C38`~~ |
| Perigo/destrutivo | `var(--brand-feedback-danger-default)` = `#bc3426` | — |

## Rosa como cor semântica (não só branding)

`Brand/Theme/Pink/Dark` (`#b5254a`) / `Pink/Light` (`#e8476a`) — decisão humana inverteu a regra em vez do Figma: rosa deixou de ser "só branding" e virou a cor semântica oficial da categoria **"Acesso rápido"**, usada em `StorageBar` (variante `Expanded`, segmentação por tipo de arquivo).

## Tratamento de perigo — 2 leituras válidas, contexto decide

- **Botão de ação destrutiva** (ex. "Excluir" em `cleanSpaceStorage`): chrome neutro/glass, só o **texto** em `#bc3426`, nunca fundo vermelho preenchido.
- **Badge/tag de status** (ex. tag "Urgente" em `PreviewPane`): badge **preenchido** em vermelho, texto branco.

Não é inconsistência do Figma — parece intencional por contexto (ação vs. rótulo). Ver [[Conflitos Abertos]].

## Ver também

- [[Tokens de Cor]]
- [[Regra 2 - Nomenclatura de Tokens]]
