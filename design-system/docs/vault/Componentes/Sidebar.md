---
tags: [componente, organism]
---

# Sidebar

`organism/Sidebar` (`1421:17946`) — navegação lateral persistente.

- **Código:** `src/components/organisms/sidebar.tsx`

## Composição

Linha de colapsar (própria, acima) + botão "Adicionar" (linha separada abaixo, nunca compartilhando linha — requisito explícito do usuário) + páginas (Pessoal/Compartilhados/Recentes/Favoritos/Guardados/Lixeira) + Etiquetas + `StorageSidebar` embutido.

## Largura — `w-72` (288px)

Ajustada de `w-60` (240px) em 2026-08-15: os botões de CTA de armazenamento ("Gerir Espaço"/"Comprar Espaço") não têm `whitespace-nowrap`, então em espaço apertado quebravam pra 2 linhas (o texto encolhia até a palavra mais longa, não a frase inteira, por padrão de flexbox). Corrigido com largura maior + `whitespace-nowrap` nos 2 botões, como cinto e suspensório.

## Terminologia — "Gerir Espaço", nunca "Liberar Espaço" aqui

Mesmo modal ([[CleanSpaceStorage]]), termo diferente por ser painel persistente vs. página de Armazenamento. Ver [[Regra 5 - Terminologia]].

## Ver também

- [[Header]]
- [[Regra 5 - Terminologia]]
