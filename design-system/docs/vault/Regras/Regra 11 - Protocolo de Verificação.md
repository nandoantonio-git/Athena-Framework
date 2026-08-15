---
tags: [regra, travada]
---

# Regra 11 — Protocolo de Verificação

A regra mais importante do projeto operacionalmente — existe porque uma auditoria rasa (2026-08-11) deixou passar bugs reais: botões inventados, barras inventadas, ícone errado no logo do Header, ícone de minimizar faltando na Sidebar, cor/material errados no `OrganizePanel/DropZone`.

## Protocolo obrigatório, sem exceção

Antes de marcar **qualquer** componente como verificado/alinhado:

1. `get_design_context` real no node — nunca só `get_metadata` ou leitura antiga.
2. Screenshot real via Playwright — nunca assumir que "deve estar certo" pelo código.
3. Checklist elemento-a-elemento (ícones, textos, cores, espaçamento, fundo, bordas) contra o screenshot — não uma comparação geral de "parece certo".
4. **Nunca inventar** elemento (botão, barra, texto, ícone) não confirmado — marcar 🧩 Inferido ou omitir.

## A auditoria de ponto-fixo (US-026)

O protocolo mais extremo desse conceito: repetir a auditoria completa do catálogo até uma passada inteira não achar nenhuma divergência nova. Rodou **19 passadas autônomas** via Ralph (cada uma reiniciando contexto), depois **1 passada final (20) em sessão interativa** que fechou tudo. Ver [[Sessão 2026-08-15]] pro racional de por que sair do Ralph nesse ponto.

Regra do protocolo de ponto-fixo: qualquer achado material, **mesmo corrigido na hora**, invalida a passada inteira — precisa de uma nova passada completa pra declarar `<fixed-point>CLEAN</fixed-point>`.

## Ver também

- [[Fonte Figma]]
- [[Sessão 2026-08-15]]
- [[Regra 9 - Figma-confirmado vs Inferido]]
