---
tags: [moc, home]
---

# Kandrive Design System

Vault de documentação viva do **kandrive-design-system** — o design system Storybook do Kandrive, um SaaS de armazenamento frio/longo-prazo sobre AWS S3 Glacier. Gerado a partir do estado real do código, do Figma e do histórico de decisões em `2026-08-15`.

> [!info] Como usar este vault
> Cada nota tem link pra Figma (quando aplicável), pro código-fonte real e pras notas relacionadas. Comece por aqui, siga os links. Quando o código mudar, essas notas precisam ser atualizadas manualmente — não há sincronização automática (ver [[Sessão 2026-08-15]] pra saber o que motivou cada decisão registrada).

## Mapa geral

- [[Athena Framework]] — o scaffold que constrói este projeto (Ralph Loop, skills, memória)
- [[Ralph Loop]] — como as user stories viram código sozinhas
- [[Stack Técnica]] — React 19, Tailwind v4, Storybook 10, Vite
- [[Estrutura de Pastas]]
- [[Deploy (Vercel)]]

## Design System

- [[Camadas Atômicas]] — atoms → celules → molecules → organisms
- [[Fonte Figma]] — onde tudo isso vem
- [[Tokens de Cor]]
- [[Tipografia]]
- [[Liquid Glass]] — o material visual do produto

## Regras travadas (AGENTS.md)

As regras abaixo são a "constituição" do projeto — qualquer achado do Figma que contradiga uma delas é **conflito a registrar**, nunca a resolver sozinho.

- [[Regra 1 - Botão Único]]
- [[Regra 2 - Nomenclatura de Tokens]]
- [[Regra 3 - Cores da Marca]]
- [[Regra 4 - Tipografia e Acessibilidade]]
- [[Regra 5 - Terminologia]]
- [[Regra 6 - Segmentação de Armazenamento]]
- [[Regra 9 - Figma-confirmado vs Inferido]]
- [[Regra 10 - Liquid Glass]]
- [[Regra 11 - Protocolo de Verificação]]

## Componentes-chave

Ver [[Camadas Atômicas]] pro catálogo completo (84 componentes). Notas próprias só pros mais centrais/complexos:

- [[PushButton]] · [[SearchInput]] · [[Sidebar]] · [[Header]]
- [[CleanSpaceStorage]] · [[FileList]] · [[StorageStatus]]
- [[OrganizeFreeModeCanvas]] · [[PlanSelection]] · [[UploadPopover]]

## Estado do projeto

- [[Backlog (User Stories)]] — 26/26 user stories concluídas
- [[Conflitos Abertos]] — achados Figma pendentes de decisão humana
- [[Sessão 2026-08-15]] — log da sessão que fechou US-026, branding, cores e 18 ajustes finos
- [[Glossário]] — terminologia aprovada/proibida

## Números atuais

| Métrica | Valor |
| --- | --- |
| User stories concluídas | 26 / 26 |
| Componentes no catálogo | 84 (29 atoms, 10 celules, 22 molecules, 23 organisms) |
| Estados/variantes renderizáveis | 276+ |
| Conflitos registrados (histórico) | 39 linhas, maioria resolvida — ver [[Conflitos Abertos]] |
| Gate de validação | `tsc --noEmit` + `build-storybook` |
