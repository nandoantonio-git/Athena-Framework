import * as React from "react"

import { cn } from "@/lib/utils"
import { Icon, type IconName } from "@/components/atoms/icon"

export interface ActionPillAction {
  name: IconName
  label: string
  onClick?: () => void
}

export interface ActionPillProps extends Omit<React.ComponentProps<"div">, "children"> {
  actions: ActionPillAction[]
  disabled?: boolean
}

/**
 * molecule/action-pill (`1421:19027`) — Figma-confirmado: "pilula de botoes
 * de ação principais, presente no header". Estados Figma-confirmados:
 * Default\|Disabled. Fundo usa o material Liquid Glass
 * (`effect-glass-white-70` + `effect-glass-surface-light`) — ver
 * Tokens/Materials (Regra 10).
 *
 * Reconfirmado em auditoria Regra 11 (US-026, 3ª passada): os 3 ícones
 * (Help/"?", Settings/gear, SpatialAudioOff/conta) são reais e distintos,
 * não um artefato de export — nomes de layer enganosos no Figma (drift de
 * instância trocada sem renomear), não duplicata. A API continua genérica
 * (`actions: { name, label, onClick }[]`, reutilizando `atom/Icon`) porque
 * não há eixo Figma que trave esse conjunto de 3 ações como fixo, mas a
 * composição-exemplo (story `Default`) usa exatamente os 3 ícones
 * confirmados.
 *
 * Reconfirmado em auditoria Regra 11 (US-026, 4ª passada, 2026-08-12):
 * `get_design_context` mostra o grupo de ícones com `gap-[var(--spacing-sm,6px)]`
 * (não `spacing-xl`, que só se aplica ao padding horizontal do pill) — o
 * código usava `gap-4` (16px), quase 3x o valor Figma-confirmado.
 *
 * Reconfirmado em auditoria Regra 11 (US-026, 12ª passada, 2026-08-13):
 * o node Figma fixa o container em 104px. A implementação ainda estava em
 * `w-fit` e media 116px no iframe Playwright. Corrigido para largura fixa,
 * mantendo o grupo de ícones centralizado.
 */
function ActionPill({ actions, disabled, className, ...props }: ActionPillProps) {
  return (
    <div
      data-slot="action-pill"
      data-disabled={disabled || undefined}
      className={cn(
        "relative flex w-[104px] items-center justify-center gap-1.5 rounded-full bg-effect-glass-white-70 py-1 shadow-md backdrop-blur-md",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-full bg-effect-glass-surface-light" aria-hidden="true" />
      {actions.map(({ name, label, onClick }) => (
        <button
          key={name + label}
          type="button"
          data-slot="action-pill-button"
          aria-label={label}
          disabled={disabled}
          onClick={onClick}
          className="relative flex items-center justify-center rounded-full p-0.5 text-zinc-700 transition-colors hover:text-brand-teal focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50"
        >
          <Icon name={name} className="size-5" />
        </button>
      ))}
    </div>
  )
}

export { ActionPill }
