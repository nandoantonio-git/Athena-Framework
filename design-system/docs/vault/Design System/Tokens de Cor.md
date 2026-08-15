---
tags: [design-system, tokens]
---

# Tokens de Cor

Fonte: `stories/tokens/Colors.mdx` + `src/components/tokens/color-data.ts`. Formato semântico obrigatório (Regra 2): `cor/categoria/papel/valor-semântico` — nunca um nome que vaza implementação.

## Marca

| Token | Hex | Papel |
| --- | --- | --- |
| `cor/marca/primária/teal-base` | `#007e96` | Primária, ação — ver [[Regra 3 - Cores da Marca]] |
| `cor/marca/primária/teal-dark` | `#1a5e6e` | Hover/pressed, modo escuro |
| `cor/marca/secundária/wordmark` | `#31302d` | Cinza do wordmark |
| `cor/categoria/acesso-rápido/rosa-dark` | `#b5254a` | Categoria "Acesso rápido" (dado/estado, não só branding) |
| `cor/categoria/acesso-rápido/rosa-light` | `#e8476a` | idem |

## Feedback

| Token | Hex | Papel |
| --- | --- | --- |
| `cor/feedback/perigo/padrão` | `#bc3426` | Erro, ação destrutiva |
| `cor/feedback/sucesso/base` | `#009966` | Confirmação |
| `cor/feedback/aviso/base` | `#c38418` | Aviso |

## Neutros — só 4 de ~30 batem com a rampa Zinc do Tailwind

⚠️ A Regra 3 original presumia neutros = rampa Zinc do Tailwind. A reconciliação encontrou uma paleta neutra própria do Figma (`neutral-*`/`ui-*`, ~30 variáveis), com tons levemente azulados que **não** pertencem à família Zinc. Só texto primário/secundário/terciário e superfície média batem exato. Ver [[Conflitos Abertos]].

## Visualização

Desde a [[Sessão 2026-08-15]], `Tokens/Colors` no Storybook renderiza um `ColorPalette` real (`src/components/tokens/color-swatch.tsx`) — grade de swatches visuais por seção, com as tabelas antigas preservadas em `<details>` pra quem quiser o detalhe tabular. Antes disso era só tabela de hex em texto.

## Ver também

- [[Regra 2 - Nomenclatura de Tokens]]
- [[Regra 3 - Cores da Marca]]
