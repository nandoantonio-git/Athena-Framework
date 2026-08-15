---
tags: [regra, travada]
---

# Regra 5 — Terminologia

Terminologia é **sensível ao contexto** — o mesmo conceito pode ter termos diferentes aprovados dependendo de onde aparece na UI.

## Lista aprovada

"Acesso rápido" · "Longo prazo" · "Guardar" · "Arquivar" · "Pronto para guardar" · "Ver duplicados" · "Buscar arquivos, pastas ou templates" · **"Gerir Espaço"** (só na Sidebar) · **"Liberar Espaço"** (só em Armazenamento/Configurações de Plano)

## Proibida como texto visível

"freezer" · "congelado" · "frio" · "camada" (rótulo de UI) · "elegível" (rótulo de UI) · "Limpar Espaço" · "CTA"

## O caso "Liberar Espaço" vs. "Gerir Espaço"

Mesmo modal (`organism/cleanSpaceStorage`, node `1439:16908`), 2 gatilhos com termo diferente por contexto:
- Sidebar (painel persistente) → "Gerir Espaço"
- Página de Armazenamento / Config. de Plano → "Liberar Espaço"

"Limpar Espaço" (título antigo do node no Figma) está proibido — já foi corrigido no Figma pelo usuário em 2026-08-10.

## ⚠️ Premissa quebrada (achado alta urgência, US-025)

A Regra 5 presumia que a página de Configurações de Plano teria um botão "Liberar Espaço" ligando pro `cleanSpaceStorage`. `get_design_context` no node real (`organism/planSelection`) confirma que essa página é **só gestão de assinatura/cobrança** — sem nenhum botão/link de armazenamento. Decisão humana pendente: corrigir a Regra 5, ou é um gap real do Figma. Ver [[Conflitos Abertos]] e [[PlanSelection]].

## Ver também

- [[Glossário]]
- [[CleanSpaceStorage]]
- [[Conflitos Abertos]]
