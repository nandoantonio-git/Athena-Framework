---
tags: [design-system, tokens]
---

# Liquid Glass

O material visual característico do produto — usado em modais, popovers, painéis flutuantes. Especificado uma única vez em `stories/tokens/Materials.mdx`; todo componente que o usa **referencia esse doc**, nunca reimplementa a spec isolado ([[Regra 10 - Liquid Glass]]).

## Camadas do material

Tipicamente 2 camadas sobrepostas:
1. **Fill + Shadow** — cor sólida + sombra base.
2. **Glass Effect** — tint translúcido por cima, com `backdrop-blur`.

## Tokens de opacidade (branco)

| Token | Hex equivalente | Uso típico |
| --- | --- | --- |
| `--effect-glass-white-70` | `#ffffffb2` | Card/painel externo primário |
| `--effect-glass-white-36` | `#ffffff5c` | Painel aninhado dentro de outro glass (precisa se distinguir do fundo) |

Achado real na [[Sessão 2026-08-15]]: `SaveLongTermFileStorage` usava `-70` tanto no card externo quanto na coluna interna de arquivos — as duas camadas ficavam indistinguíveis. Corrigido pra `-36` + borda na coluna interna, mesmo padrão já usado em `OrganizePanelDropZone`/`CleanSpaceStorage`.

## Preenchimento dinâmico de card (achado novo)

`UploadPopover` tem uma 3ª aplicação do material: um overlay `rgba(107,107,104,0.1)` que preenche o card da esquerda até a % de progresso do upload — **atrás** de todo o conteúdo, não uma barra separada. Ver [[UploadPopover]].

## Ver também

- [[Regra 10 - Liquid Glass]]
- [[Camadas Atômicas]]
