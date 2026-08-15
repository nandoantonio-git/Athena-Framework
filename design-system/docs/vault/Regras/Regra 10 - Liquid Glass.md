---
tags: [regra, travada]
---

# Regra 10 — Liquid Glass e Reuso de Componentes

A seção "Material - Liquid Glass" do Figma é reaplicada em vários componentes — documentada como **spec única** em `Tokens/Materials`; todo componente que a exibe **referencia** esse doc, nunca reimplementa a especificação isolado.

Essa regra também se estende, na prática, a qualquer sub-componente reutilizável: `ArchiveItem` reusa `SelectState` (não recria o badge de check); `CleanSpaceStorage` reusa `CleanSpaceListSelection` (não duplica a linha de seleção); `FreeModeButtons` reusa o mesmo sub-nó de `BoxIconButton`. Achado consistente na [[Sessão 2026-08-15]]: quando um bug aparecia em `SelectState`, corrigir ali cascateou automaticamente pros 5 componentes que o reusam — prova de que o padrão de reuso está sendo seguido de verdade.

## Ver também

- [[Liquid Glass]]
- [[Camadas Atômicas]]
