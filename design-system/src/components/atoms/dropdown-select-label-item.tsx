import * as React from "react"

import { cn } from "@/lib/utils"

export interface DropdownSelectLabelItemProps
  extends Omit<React.ComponentProps<"button">, "onClick"> {
  label?: string
  /** `State=clicked` (Figma-confirmado). `hover` mapeado para `:hover` do browser. */
  active?: boolean
  onClick?: () => void
}

/**
 * atom/DropdownSelect/Label/Item (`1444:21704`, Figma-confirmado) —
 * "item da pilula de etiquetar, no qual você insere input o nome desejado
 * de rótulo. Contem variavel de estados". Texto verbatim confirmado:
 * "+ Nova Etiqueta". Sem molecule consumidora implementada ainda
 * (`molecule/DropdownSelect/Label` fica deferido — Regra 9, não inventar
 * composição não confirmada).
 *
 * 3 estados Figma-confirmados (`state`): `idle` (sem fundo), `hover`
 * (fundo `neutral-surface-muted`, `rgba(113,113,122,0.2)`), `clicked`
 * (fundo `effect-overlay-secondary`, `rgba(107,107,104,0.45)`) — mesmos 2
 * tons já usados em `atom/DropdownSelect/GroupBy/Item` (US-019), cores
 * literais sem token semântico (Regra 3, paleta neutra suspensa).
 */
function DropdownSelectLabelItem({
  label = "+ Nova Etiqueta",
  active,
  className,
  onClick,
  ...props
}: DropdownSelectLabelItemProps) {
  return (
    <button
      type="button"
      data-slot="dropdown-select-label-item"
      data-active={active || undefined}
      onClick={onClick}
      className={cn("flex h-[18px] w-fit min-w-20 items-center justify-center rounded-[4px]", className)}
      {...props}
    >
      <span
        className={cn(
          "flex h-full w-full items-center rounded-[4px] pl-1.5 pr-[6.5px]",
          active ? "bg-[#6b6b6873]" : "hover:bg-[#71717a33]"
        )}
      >
        <span className="flex w-fit shrink-0 items-center gap-1.5 rounded-xl py-0.5 text-[0.625rem] whitespace-nowrap text-zinc-700">
          {label}
        </span>
      </span>
    </button>
  )
}

export { DropdownSelectLabelItem }
