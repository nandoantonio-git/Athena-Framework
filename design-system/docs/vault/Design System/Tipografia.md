---
tags: [design-system, tokens]
---

# Tipografia

Fonte: `stories/tokens/Typography.mdx`. Ver [[Regra 4 - Tipografia e Acessibilidade]] pra política completa.

- **Família única:** Figtree, todos os 15 tokens confirmados no Figma.
- **Escala:** Major Third (1.25).
- **Piso de 16px obrigatório** pra texto de leitura/ação primária (body, labels de botão/input, links).
- Microtexto genuinamente decorativo/complementar (badge, tag, caption, timestamp) pode ficar abaixo, como exceção documentada — nunca abaixo de ~11px, sempre em `rem`.

## Escala confirmada

| Token Figma | Peso | Tamanho |
| --- | --- | --- |
| `Type/Display` | Regular 400 | 50px |
| `Type/H1` | Bold 700 | 40px |
| `Type/H2` | SemiBold 600 | 32px |
| `Type/H3` | Medium 500 | 25px |
| `Type/Heading/MD` | Medium 500 | 20px |
| `Type/Heading/SM` | SemiBold 600 | 16px |

## Correção de acessibilidade (US-011)

`Type/Button/MD` (14px no Figma) foi corrigido pra 16px — rótulo de botão é ação, não decoração, então não conta como exceção. `Type/Tag` subiu de 8px (abaixo até do piso de exceção) pra 11px.

## Ver também

- [[Regra 4 - Tipografia e Acessibilidade]]
- [[Tokens de Cor]]
