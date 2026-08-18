---
tags: [regra, travada]
---

# Regra 9 — Figma-confirmado vs. Inferido

Distinguir **sempre** "Figma-confirmado" de "inferido" em toda a documentação — nunca apresentar uma inferência como fato.

## Como isso aparece no código

Toda descrição de componente que vem literalmente do Figma é citada **verbatim** entre aspas, nunca parafraseada:

```ts
/**
 * atom/UploadFolder (`1439:17053`, Figma-confirmado, descrição verbatim
 * adicionada pelo usuário em 2026-08-14: *"icone de upload de uma
 * pasta"*) — ...
 */
```

Quando o Figma não confirma algo (ex. um valor exato, um comportamento), o código diz isso explicitamente (🧩 Inferido) em vez de inventar — e quando genuinamente não dá pra confirmar, o elemento é **omitido**, nunca inventado (ver [[Regra 11 - Protocolo de Verificação]]).

## Exemplo de "current Figma supersede prior aligned claims"

Achado real: uma correção anterior (pass14) tinha adicionado `px-4` ao `FaqFastLinks` por engano. Uma releitura fresca (pass20) mostrou que o Figma real **não tem** padding horizontal nenhum — a leitura mais recente sempre vence sobre um "aligned" anterior, mesmo que pareça contraintuitivo. Ver [[Sessão 2026-08-15]].

## Auditoria de cobertura (Sessão 2026-08-15, contagem refeita em 2026-08-16)

85 dos 87 arquivos de componente citam "Figma-confirmado" (`grep -rl "Figma-confirmado" src/components --include="*.tsx"`, denominador exclui `tokens/color-swatch.tsx`, utilitário de doc sem node Figma próprio) — as 2 exceções reais são `ui/button.tsx` e `atom/IconActionButton`, primitivos internos sem node Figma próprio.

## Ver também

- [[Fonte Figma]]
- [[Regra 11 - Protocolo de Verificação]]
