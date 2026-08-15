---
tags: [regra, travada]
---

# Regra 2 — Nomenclatura de Tokens

Todo token semântico usa o formato `cor/categoria/papel/valor-semântico` — **nunca** um nome que vaza detalhe de implementação (nunca `$primaria-100`, `zinc-500-hover`).

## ⚠️ Conflito de formato ainda aberto (achado #9, urgência alta)

O nome real das variáveis no Figma é `var(--categoria-papel-valor)` (kebab-case, ex. `--brand-primary-default`), **não** `cor/categoria/papel/valor-semântico`. As 2 variáveis de rosa usam ainda um 3º formato (`Brand/Theme/Pink/Dark`). A coluna "Token semântico" da documentação é a *tradução* pro formato-alvo — não é o nome literal do Figma. Sem decisão humana ainda sobre normalizar o Figma ou aceitar a tradução como camada de abstração permanente.

## Aplicação prática

Quando um valor não tem token semântico formal ainda mas é reaproveitado de um token existente (ex. cor com o mesmo RGB de outro papel), o código usa o token existente via modificador de opacidade (`bg-brand-secondary-light/45`) em vez de introduzir um hex literal novo.

## Ver também

- [[Tokens de Cor]]
- [[Conflitos Abertos]]
