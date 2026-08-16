# FaqFastLinks — histórico de auditoria

Espelha o conteúdo removido de `stories/organisms/FaqFastLinks.mdx` em 2026-08-16. Node Figma: `1454:25006`.

## Status

✅ aligned — Figma-confirmado (US-025), nó `1454:25006`, descrição verbatim: *"estrutura de links rápidos da aba de FAQ"*.

Re-verificado em 2026-08-12 (US-026, 3ª passada de ponto-fixo): `get_design_context` refeito do zero + screenshot Playwright fresco — título, 3 itens (ícone+label traduzido), cor `#007e96`/12px Manrope Medium dos labels e sombra do container conferidos elemento a elemento contra a resposta do Figma. Nenhuma divergência nova encontrada.

## Elementos confirmados (Regra 11)

| Elemento | Figma | Implementado |
| --- | --- | --- |
| Título "Links Rápidos" | ✅ texto literal | ✅ |
| Item 1: ícone + "API Documentation" | ✅ SVG real exportado + texto | ✅ ícone `MenuBook`, texto traduzido "Documentação da API" |
| Item 2: ícone + "Community Forum" | ✅ SVG real exportado + texto | ✅ ícone `Forum`, texto traduzido "Fórum da comunidade" |
| Item 3: ícone + "Video Tutorials" | ✅ SVG real exportado + texto | ✅ ícone `Slideshow`, texto traduzido "Tutoriais em vídeo" |
| Cor dos links (`#007e96`) | ✅ Figma-confirmado | ✅ `text-brand-teal` (mesmo token, Regra 3) |
| Sombra do container | ✅ `0px 2px 4px rgba(9,9,11,0.08)` | ✅ `shadow-[0px_2px_4px_rgba(9,9,11,0.08)]` |

Verificado via `get_design_context` (nó `1454:25006`) + screenshot renderizado em `http://localhost:6006/iframe.html?id=organisms-faqfastlinks--default&viewMode=story` — cada elemento acima conferido item a item contra o render real, nenhum elemento inventado.

## Ícones — exportados de verdade (não `lucide-react`)

Os 3 ícones deste organism foram baixados via `download_assets` (SVG real do Figma, fill normalizado para `currentColor`) e adicionados a `atom/Icon` (`MenuBook`, `Forum`, `Slideshow`) — mesmo padrão real-export já usado pelos demais glifos de `ICONS` (ver `Atoms/Icon.mdx`), não a aproximação por nome via `lucide-react` usada em componentes anteriores a essa decisão.

## Terminologia — tradução, não texto literal (Regra 9)

Os 3 rótulos de link são Figma-confirmados em inglês ("API Documentation", "Community Forum", "Video Tutorials") — o restante da aba de FAQ (`FaqInfoCard`, `FaqInfoCardCollapsed`) é inteiramente em português. Implementado com tradução direta, mesmo critério já usado em `organism/upload-popover` (ver `docs/conflicts.md`, entrada "todo o texto Figma-confirmado deste nó está em inglês"). Nenhum dos 3 rótulos está na lista proibida/aprovada da Regra 5 — não é conflito de terminologia travada, é gap de idioma do próprio arquivo Figma fonte, registrado em `docs/conflicts.md`.

## Material Liquid Glass (Regra 10)

Não aplicável — o container não usa `bg-effect-glass-*` no Figma (só sombra + `rounded-3xl`), diferente de `FaqInfoCard`/`FaqInfoCardCollapsed` (que usam `bg-effect-glass-white-50`). Fundo transparente, herda o fundo da página onde é composto (ex.: ao lado de `FaqInfoCard` na aba de FAQ).

## Estados / fluid interface (Regra 8)

| Estado | Implementado |
| --- | --- |
| Hover (link) | ✅ `hover:underline` |
| Active/Disabled/Loading/Error | ❌ Não aplicável — são links de navegação estáticos, não ações assíncronas |

**reduced-motion**: não aplicável — sem animação própria.
