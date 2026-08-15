---
tags: [componente, organism]
---

# Header

`organism/Header` (`1421:19918`) — cabeçalho fixo do topo, 3 variantes por página (`Navbar`/`settings`/`storage`).

- **Código:** `src/components/organisms/header.tsx`

## Fluxo ao vivo (só `page="navbar"`)

2 ações reais: **"Organizar"** (ícone `ICONS.Organize`) e **"Guardar"** (ícone `ICONS.Keep`, corrigido em 2026-08-15 — usava `Bookmark` por engano; o real, confirmado via `get_design_context` no node do botão, é um glifo "keep" — bandeja com seta pra baixo, `src/assets/icons/Keep.svg`).

## Logo

`src/assets/logo/kandrive-logo.svg` — vetor real exportado do Figma (`Kandrive_logo_principal 1`), não texto estilizado. Achado de auditoria antigo (2026-08-11): a versão anterior usava "Kandrive" em texto `text-brand-teal` em vez do vetor real.

## Terminologia

"Guardar" é termo aprovado (Regra 5). "Organizar" não está na lista travada nem é proibido — gap de cobertura baixo, registrado em [[Conflitos Abertos]].

## Ver também

- [[PushButton]]
- [[Regra 5 - Terminologia]]
