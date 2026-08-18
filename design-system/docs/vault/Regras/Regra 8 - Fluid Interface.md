---
tags: [regra, travada]
---

# Regra 8 — Fluid Interface

> Fonte: `AGENTS.md:88`.

Texto verbatim de `AGENTS.md`: *"Toda documentação de componente interativo aplica a lente de fluid-interface da Apple (feedback no press vs. release, interruptibilidade de transições, set completo de estados: default/hover/active/disabled/loading/error) e nota reduced-motion se visível no Figma, senão marca como não documentado."*

## O que a lente exige, por componente interativo

1. **Feedback no press, não só no release** — ex. `active:scale-90`/`active:scale-[0.98]` no `:active`, não só um estado `hover`.
2. **Transições interruptíveis** — usar transições CSS nativas reagindo a pseudo-classe (não animação por keyframes com estado próprio), pra que soltar o clique no meio reverta a partir do valor atual na tela.
3. **Set completo de estados** verificado: `default`/`hover`/`active`/`disabled`/`loading`/`error` — quando algum não existe no Figma (`loading`/`error` frequentemente não existem), isso é documentado como gap de engenharia, não inventado como se fosse Figma-confirmado.
4. **Nota de `reduced-motion`** — se o Figma não documenta nada sobre `prefers-reduced-motion`, isso é declarado explicitamente ("não documentado no Figma"), nunca omitido silenciosamente.

## Onde isso aparece

Aplicada em praticamente todo componente interativo do catálogo — a seção `## Fluid interface (Regra 8)` (ou `## Estados e fluid interface (Regra 8)`) existe hoje em 52 arquivos de auditoria (`grep -rl "fluid interface (Regra 8)" design-system/docs/audits/componentes/*.md`, contado em 2026-08-16), o repositório que herdou esse conteúdo quando os `.mdx` de story foram enxugados em 2026-08-15/16 (ver [[Sessão 2026-08-15]]).

## Ver também

- [[Regra 9 - Figma-confirmado vs Inferido]]
- [[Regra 7 - Gaps Conhecidos]]
- [[Camadas Atômicas]]
