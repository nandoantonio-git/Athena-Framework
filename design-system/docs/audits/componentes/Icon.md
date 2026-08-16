# Icon — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/Icon.mdx` em 2026-08-15. Node Figma: seção "Icon/", `1421:17656`.

## Status

✅ aligned (Figma-confirmado). Status "🆕 undocumented-until-now" era resquício da primeira versão desta doc e ficou obsoleto já na 2ª passada de auditoria (2026-08-12); corrigido na 3ª passada (Regra 9 — não deixar status desatualizado apresentando um componente já maduro como recém-criado).

## Reverificado na 3ª passada de auditoria de ponto-fixo (US-026, 2026-08-12)

Protocolo completo da Regra 11 reaplicado (`get_design_context` no nó `1421:17656` + screenshot Playwright de `AllIcons` com os ~64 glifos renderizados como vetores reais, não fallback) — nenhuma divergência nova.

## Corrigido na pass13 (2026-08-13)

`get_design_context` fresco da seção `Icon/` reconfirmou `atom/Icon/Arquivar` e a maioria dos glifos canônicos em 16×16, enquanto o default do componente renderizava `size-5` (20×20). O default agora é `size-4`; consumidores que precisam de tamanho próprio continuam passando `className` explícito.

## Fidelidade code-level — histórico da troca de fallback

Esta seção descrevia até uma auditoria anterior um fallback `lucide-react` (glifo mais próximo por nome/significado). Uma reconciliação anterior (decisão humana de 2026-08-11, registrada no comentário de `icon.tsx`) substituiu todo o mapa `ICONS` por vetores reais exportados do Figma via `download_assets` — `src/components/atoms/icon.tsx` importa hoje ~64+ SVGs reais de `src/assets/icons/<Nome>.svg`. A tabela de aproximação `lucide-react` que existia aqui ficou desatualizada por essa troca e foi removida na auditoria de 2026-08-12.

Nomes como `MenuBook`, `Forum`, `Slideshow` (adicionados em 2026-08-11, US-025, a partir de `organism/FAQ/FastLinks`, `1454:25006`) seguem o mesmo critério. Verificação exaustiva pixel-a-pixel de todos os glifos individualmente está fora do orçamento de uma única passada de auditoria (mesma lógica de amostragem de `docs/figma-inventory.md`); a auditoria de ponto-fixo spot-checou `Arquivar`/`Folder`/`ArrowBack` contra os SVGs exportados e confirmou o match (ver `docs/conflicts.md`).
