# US-026 pass20 — auditoria de ponto-fixo — CLEAN

Data: 2026-08-14. Resultado: **CLEAN**.

Executada fora do Ralph loop, em sessão interativa com o usuário, por causa
do custo de token das passadas 4–19 (19 passadas, cada uma reiniciando
contexto do zero). Ver `docs/checkpoints.md` para o registro completo desta
sessão.

## Metodologia (híbrida, decisão explícita do usuário)

Passadas 13–19 (2026-08-13) já cobriram o catálogo inteiro com
`get_design_context` fresco + screenshot Playwright + checklist
elemento-a-elemento, cada componente com node Figma documentado no
manifesto da pass14 (`docs/audits/us-026-pass14.md`, 85 linhas — todos os
84 componentes atuais + `SearchToolbar` removido do catálogo). Repetir
`get_design_context` nos 84 nós sem indício de mudança no arquivo Figma
fonte reproduziria o mesmo padrão caro que gerou as 19 passadas do Ralph.

Pass20 usou:

1. **Detecção de blast radius por código**: `find src/components -newer
   docs/audits/us-026-pass14.md` — só 4 arquivos mudaram desde o manifesto
   completo da pass14: `close-button.tsx`, `free-mode-output-node.tsx`,
   `organize-free-mode-canvas.tsx` (já reconciliados com Figma fresco nas
   passadas 16/17/19) e `faq-fast-links.tsx` (corrigido nesta passada, ver
   abaixo). Nenhum outro componente teve o código alterado desde a última
   verificação "Aligned" documentada — não há divergência código↔Figma
   silenciosa possível fora desses 4.
2. **Fresh Figma read nos 2 itens abertos do checklist do usuário**
   (`docs/audits/user-recheck-2026-08-13.md`): `organism/FAQ/FastLinks`
   (`1454:25006`) e `molecule/Label` (`1421:18687`) — ambos via
   `get_design_context` real nesta passada.
3. **Recaptura Playwright de TODOS os 276 estados / 84 componentes**
   (`shot-pass20-full.tmp.mjs`, resultado 276/276 sem falha) — screenshot
   de ponta a ponta do catálogo no estado de código atual, pós-correções.
4. **Revisão visual em contact sheets** (grade de todos os 84 componentes,
   6 folhas de ~15) cruzando cada thumbnail contra o veredito "Aligned" já
   registrado na pass14 — sem achado de regressão (sem fundo preto
   inventado, sem overlay de erro, sem layout quebrado/vazio) em nenhum
   dos 84.

## Achado material encontrado e corrigido nesta passada

`organism/FAQ/FastLinks` (`1454:25006`) — `get_design_context` fresco
confirma que o frame raiz tem só `py-[24px]`, **sem padding horizontal**
(nenhuma classe `px`/`pl`/`pr` em nenhum nó da árvore retornada). A
correção da pass14 (2026-08-13) havia adicionado `px-4` (16px) sem
correspondência no Figma real — isso estreitava a área de texto o
suficiente pra fazer as traduções PT (mais longas que os rótulos em
inglês do Figma, ex. "Documentação da API" vs. "API Documentation") 
quebrarem em 2 linhas.

**Corrigido**: removido `px-4` de `faq-fast-links.tsx`, largura ajustada
de `w-40` (160px) para `w-[158px]` (Figma-confirmado). Recapturado em
`organisms-faqfastlinks--default.png` — os 3 links agora ficam numa linha
só, igual ao Figma (que usa `whitespace-nowrap` nos rótulos originais em
inglês).

## Reconfirmação dos itens `corrected-needs-clean-pass`

- **`molecule/Label`** (`1421:18687`) — `get_design_context` fresco
  confirmado nesta passada. Código já tinha a correção da pass14
  (`whitespace-nowrap` no valor "Etiquetar"). Recapturado em
  `molecules-label--default.png`, `--expanded.png` e `--disabled.png`:
  "Etiquetar" permanece totalmente visível, sem quebra, sem truncamento,
  nos 3 estados. Nenhuma mudança de código necessária — só reverificação.
- **`atom/CloseButton`** (`1421:19008`) — correção da pass19 (overlay do
  glifo "×") reconfirmada visualmente em `atoms-closebutton--all-states.png`:
  glifo visível nos 6 estados (SM/MD × idle/hover/pressed).
- **Story backgrounds** — recaptura completa dos 276 estados sem nenhum
  fundo preto inventado; decorators seguem usando wrappers de superfície
  neutra (correção da pass17/18, preservada).

## Gates

- `cd design-system && npx tsc --noEmit` — sem erros.
- `cd design-system && npm run build-storybook` — sucesso.

## Resultado

Pass20 é a primeira passada desde o início do ciclo de ponto-fixo (pass4)
sem nenhum achado material não corrigido e sem nenhuma linha `pending`
ou `corrected-needs-clean-pass` restante no checklist do usuário. Todas as
16 linhas de `docs/audits/user-recheck-2026-08-13.md` estão agora
`verified-clean`.

<fixed-point>CLEAN</fixed-point>
