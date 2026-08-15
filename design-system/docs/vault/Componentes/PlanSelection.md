---
tags: [componente, organism]
---

# PlanSelection

`organism/planSelection` (`1454:25057`) — descrição verbatim: *"card onde o usuário escolhe o plano desejado"*. Página de Configurações de Plano.

- **Código:** `src/components/organisms/plan-selection.tsx`

## ⚠️ Quebra a premissa da Regra 5

Achado de urgência alta (US-025): a [[Regra 5 - Terminologia|Regra 5]] presumia que essa tela teria um botão "Liberar Espaço" ligando pro [[CleanSpaceStorage]]. O node real confirma que é **só** gestão de assinatura/cobrança — sem nenhuma referência a armazenamento. Decisão humana pendente. Ver [[Conflitos Abertos]].

## Toggle Mensal/Anual — corrigido em 2026-08-15

O toggle já existia estruturalmente (2 tabs, `interval` prop), mas trocar o intervalo **não mudava nenhum preço** — cada plano tinha só um `price` fixo com sufixo `/yr` estático. Corrigido: cada plano agora tem `monthlyPrice`/`annualPrice` distintos (placeholder realista — mensal com um pequeno prêmio sobre o equivalente anual/12, padrão comum de SaaS, não é preço real de produto). A story `Default` também ganhou wrapper de estado local (`useState`) — antes não tinha nenhum jeito de testar o clique interativamente no Storybook.

## Ver também

- [[Regra 5 - Terminologia]]
- [[Conflitos Abertos]]
