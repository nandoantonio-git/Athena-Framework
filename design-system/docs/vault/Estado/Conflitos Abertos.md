---
tags: [estado]
---

# Conflitos Abertos

Fonte completa: `design-system/docs/conflicts.md` (39 linhas registradas, maioria já resolvida). Aqui, só os que ainda esperam **decisão humana** — ordenados por urgência.

## 🔴 Alta urgência

**Formato de nome dos tokens ([[Regra 2 - Nomenclatura de Tokens|Regra 2]])** — Figma usa `var(--categoria-papel-valor)` (kebab-case), não `cor/categoria/papel/valor-semântico`. A tradução na documentação é uma camada de abstração, não o nome literal.

## 🟡 Média urgência

**Paleta neutra** — só 4 de ~30 papéis neutros batem exato com a rampa Zinc do Tailwind. A maioria (incluindo toda a família `ui-*`) usa tons levemente azulados fora da família Zinc. Ver [[Tokens de Cor]].

**Tratamento de "perigo" — 2 leituras válidas** — botão de ação destrutiva = chrome neutro + texto vermelho; badge de status = preenchido vermelho. Parece intencional por contexto, não inconsistência — mas nunca formalizado como 2 casos válidos na Regra 3.

**`FolderTagChip` — `isExpanded`** — comportamento visual exato do estado expandido é 🧩 inferido, não confirmado pixel-a-pixel.

## 🟢 Baixa urgência (gaps de polish, não de decisão)

- Placeholder do `SearchInput` diverge do Figma ("Search" vs. termo aprovado) — decisão deliberada, não bug.
- Vários textos em inglês no Figma fonte (`upload-popover`, `FaqFastLinks`, `planSelection`) — traduzidos direto na implementação, nunca literal.
- `PushButton` cobre só 2 dos 7 valores do enum `Style` do Figma.
- `atom/Icon/SpatialAudioOff` é visualmente um ícone de pessoa/avatar, não de mudo — nome de camada não bate com o conteúdo no próprio Figma.
- `organism/Header` — "Organizar" não está na lista aprovada nem proibida da Regra 5 (gap de cobertura, não violação).
- Estados `Focused`/`Typing` do `SearchBar` (SF Pro, azul Apple) — ver [[SearchInput]].
- **Sem teste automatizado** — gate real é só `tsc --noEmit` + `build-storybook`; `addon-vitest`/Playwright instalados, nunca usados. Registrado 2026-08-18 como débito explícito de handoff, não lacuna escondida.

## Ver também

- [[Regra 5 - Terminologia]]
- [[Regra 2 - Nomenclatura de Tokens]]
- [[Regra 3 - Cores da Marca]]
