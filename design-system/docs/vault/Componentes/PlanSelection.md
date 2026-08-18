---
tags: [componente, organism]
---

# PlanSelection

`organism/planSelection` (`1454:25057`) — descrição verbatim: *"card onde o usuário escolhe o plano desejado"*. Página de Configurações de Plano.

- **Código:** `src/components/organisms/plan-selection.tsx`

## ✅ Premissa da Regra 5 corrigida (2026-08-18)

Achado original de urgência alta (US-025): a [[Regra 5 - Terminologia|Regra 5]] presumia que essa tela teria um botão "Liberar Espaço" ligando pro [[CleanSpaceStorage]]. O node real confirmou que é **só** gestão de assinatura/cobrança — sem nenhuma referência a armazenamento. Decisão humana (2026-08-18): a ponte real é o botão "Comprar Espaço" de [[StorageStatus]] (`scope="global"`), que leva de Armazenamento pra cá — não o contrário. O botão do rodapé foi renomeado no Figma pelo usuário, ao vivo, de "Editar pagamento" pra **"Editar plano"** (node `1454:25054`, Figma-confirmado) e serve de âncora pra edição de plano/pagamento. Ver [[Conflitos Abertos]].

## Toggle Mensal/Anual — corrigido em 2026-08-15

O toggle já existia estruturalmente (2 tabs, `interval` prop), mas trocar o intervalo **não mudava nenhum preço** — cada plano tinha só um `price` fixo com sufixo `/yr` estático. Corrigido: cada plano agora tem `monthlyPrice`/`annualPrice` distintos (placeholder realista — mensal com um pequeno prêmio sobre o equivalente anual/12, padrão comum de SaaS, não é preço real de produto). A story `Default` também ganhou wrapper de estado local (`useState`) — antes não tinha nenhum jeito de testar o clique interativamente no Storybook.

## Ver também

- [[Regra 5 - Terminologia]]
- [[Conflitos Abertos]]
