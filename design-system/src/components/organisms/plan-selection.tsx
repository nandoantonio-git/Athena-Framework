import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { PushButton } from "@/components/atoms/push-button"

export type PlanInterval = "monthly" | "annual"

export interface PlanSelectionPlan {
  id: string
  name: string
  storageLabel: string
  /** Preço exibido quando `interval="monthly"`. */
  monthlyPrice: string
  /** Preço exibido quando `interval="annual"` (cobrança anual, valor total do ano). */
  annualPrice: string
  isCurrent?: boolean
  actionLabel?: string
}

export interface PlanSelectionProps extends React.ComponentProps<"div"> {
  plans?: PlanSelectionPlan[]
  interval?: PlanInterval
  nextBillingLabel?: string
  onIntervalChange?: (interval: PlanInterval) => void
  onSelectPlan?: (plan: PlanSelectionPlan) => void
  onManageBilling?: () => void
}

const DEFAULT_PLANS: PlanSelectionPlan[] = [
  { id: "starter", name: "Starter", storageLabel: "1 TB", monthlyPrice: "$3", annualPrice: "$30", actionLabel: "Downgrade" },
  { id: "pro", name: "Pro", storageLabel: "5 TB", monthlyPrice: "$12", annualPrice: "$120", isCurrent: true },
  { id: "max", name: "Max", storageLabel: "10 TB", monthlyPrice: "$20", annualPrice: "$200", actionLabel: "Upgrade" },
]

/**
 * organism/planSelection (`1454:25057`) — Figma-confirmado: "card onde o
 * usuário escolhe o plano desejado". Tela de Configurações de Plano
 * mencionada na decisão de terminologia da Regra 5 (2026-08-10) — ver
 * `docs/conflicts.md` para o achado original: este nó **não contém** nenhum
 * botão "Liberar Espaço"/`isDestructive` (gestão de assinatura/plano, não de
 * arquivos), diferente do presumido ao travar a Regra 5. A ponte real entre
 * as duas telas é o botão "Comprar Espaço" de `molecule/StorageStatus`
 * (`scope="global"`), que leva daqui pra lá — não o contrário. Regra 5
 * corrigida em 2026-08-18 (decisão humana) pra refletir essa direção.
 *
 * Botão do rodapé renomeado de "Editar pagamento" pra **"Editar plano"**
 * em 2026-08-18 — Figma-confirmado (usuário atualizou o node `1454:25054`
 * ao vivo, releitura via `get_metadata` confirma o texto novo). Serve de
 * âncora pra edição de plano/forma de pagamento (`onManageBilling`).
 *
 * Botões "Downgrade"/"Upgrade"/"Editar plano" usam
 * `atom/PushButton` (`variant="neutral"`, Regra 1 — nenhum
 * `button/primary`\|`secondary` separado). Card do plano corrente reusa o
 * mesmo par de tokens `border-brand-teal`/`bg-brand-teal-light` já usado
 * pelo tom `info` de `FaqCallout` (Regra 2 — token semântico, não hex
 * literal `#e0f0f2`).
 *
 * 🔧 Corrigido em 2026-08-13 (US-026, pass12): releitura fresca confirmou
 * o root em 1089px e os literais mistos do Figma ("Active", "Next billing
 * on Jul 8, 2026", "Monthly", "Annual", "Downgrade", "Current", "Upgrade",
 * "✓ Active" e o footer começando com "Update"). A implementação estava
 * menor (`max-w-4xl`) e normalizava esses textos para PT-BR sem decisão
 * humana registrada; os defaults voltaram aos literais Figma-confirmados.
 */
function PlanSelection({
  plans = DEFAULT_PLANS,
  interval = "annual",
  nextBillingLabel = "Next billing on Jul 8, 2026",
  onIntervalChange,
  onSelectPlan,
  onManageBilling,
  className,
  ...props
}: PlanSelectionProps) {
  return (
    <div
      data-slot="plan-selection"
      className={cn(
        "flex w-[1089px] flex-col gap-4 overflow-hidden rounded-xl border border-zinc-200 bg-effect-glass-white-50 p-6",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-0.5">
          <p className="text-base font-semibold text-zinc-950">Assinatura</p>
          <p className="text-[0.8125rem] text-zinc-500">Gerencie seu plano de armazenamento</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-brand-teal px-2.5 py-0.5 text-xs font-medium text-white">
            Active
          </span>
          <p className="text-[0.8125rem] text-zinc-500">{nextBillingLabel}</p>
        </div>
        <div className="inline-flex items-start rounded-lg border border-zinc-300 p-0.5" role="tablist" aria-label="Intervalo de cobrança">
          <button
            type="button"
            role="tab"
            aria-selected={interval === "monthly"}
            onClick={() => onIntervalChange?.("monthly")}
            className={cn(
              "rounded-md px-3 py-1 text-[0.8125rem] font-medium",
              interval === "monthly" ? "bg-brand-teal text-white" : "text-zinc-500"
            )}
          >
            Monthly
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={interval === "annual"}
            onClick={() => onIntervalChange?.("annual")}
            className={cn(
              "rounded-md px-3 py-1 text-[0.8125rem] font-medium",
              interval === "annual" ? "bg-brand-teal text-white" : "text-zinc-500"
            )}
          >
            Annual
          </button>
        </div>
      </div>

      <div className="flex w-full items-start gap-3">
        {plans.map((plan) => {
          const price = interval === "monthly" ? plan.monthlyPrice : plan.annualPrice
          const priceSuffix = interval === "monthly" ? "/mo" : "/yr"
          return (
          <div
            key={plan.id}
            className={cn(
              "flex min-w-px flex-1 flex-col gap-1 rounded-lg border p-4",
              plan.isCurrent ? "border-brand-teal bg-brand-teal-light" : "border-zinc-300 bg-white"
            )}
          >
            {plan.isCurrent ? (
              <span className="mb-1 inline-flex w-fit items-center rounded-full bg-brand-teal px-2 py-0.5 text-[0.6875rem] font-medium text-white">
                Current
              </span>
            ) : null}
            <p className="text-base font-semibold text-zinc-950">{plan.name}</p>
            <p className="text-[0.8125rem] text-zinc-500">{plan.storageLabel}</p>
            <p className="flex items-baseline gap-0.5">
              <span className="text-[1.375rem] font-bold text-zinc-950">{price}</span>
              <span className="text-[0.8125rem] text-zinc-500">{priceSuffix}</span>
            </p>
            {plan.isCurrent ? (
              <span className="flex items-center gap-1 text-[0.8125rem] font-medium text-brand-teal">
                <Check className="size-3.5" aria-hidden="true" />
                Active
              </span>
            ) : (
              <PushButton
                variant="neutral"
                onClick={() => onSelectPlan?.(plan)}
                className="h-auto w-full justify-center rounded-md px-3 py-1.5 text-[0.8125rem]"
              >
                {plan.actionLabel}
              </PushButton>
            )}
          </div>
          )
        })}
      </div>

      <div className="h-px w-full bg-zinc-200" />

      <div className="flex items-center justify-between gap-4">
        <p className="text-[0.8125rem] text-zinc-500">
          Update método de pagamento, visualize ordens de pagamento, ou cancele no portal da Stripe
        </p>
        <PushButton
          variant="neutral"
          onClick={onManageBilling}
          className="h-auto shrink-0 rounded-md px-4 py-2 text-sm"
        >
          Editar plano
        </PushButton>
      </div>
    </div>
  )
}

export { PlanSelection }
