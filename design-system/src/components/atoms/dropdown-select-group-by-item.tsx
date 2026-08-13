import * as React from "react"

import { cn } from "@/lib/utils"

export interface DropdownSelectGroupByItemProps
  extends Omit<React.ComponentProps<"button">, "onClick"> {
  label: string
  /** `State=selected` (Figma-confirmado). `hover` mapeado para `:hover` do browser. */
  selected?: boolean
  onClick?: () => void
}

/**
 * atom/DropdownSelect/GroupBy/Item (`1444:21587`, Figma-confirmado) —
 * "item da pilula de agrupar, no qual você seleciona a condição de
 * agrupamento. Contem variavel de estados". Linha individual dentro da
 * lista expandida de `molecule/DropdownSelectGroupBy` (US-005), extraída
 * como átomo próprio nesta US (US-019) por ter node Figma dedicado.
 *
 * 3 estados Figma-confirmados (`state`): `Idle` (sem fundo), `hover` (fundo
 * `neutral-surface-muted`, `rgba(113,113,122,0.2)`), `selected` (fundo
 * `effect-overlay-secondary`, `rgba(107,107,104,0.45)`) — cores exatas do
 * Figma, sem token semântico definido no tema (Regra 3, paleta neutra
 * suspensa), literal como em `atom/Tag`/`atom/firstUploadSymbol`.
 */
function DropdownSelectGroupByItem({
  label,
  selected,
  className,
  onClick,
  ...props
}: DropdownSelectGroupByItemProps) {
  return (
    <button
      type="button"
      data-slot="dropdown-select-group-by-item"
      data-selected={selected || undefined}
      onClick={onClick}
      className={cn(
        "flex w-[104px] flex-col items-center gap-1 rounded-[4px] px-1.5 py-1",
        selected ? "bg-[#6b6b6873]" : "hover:bg-[#71717a33]",
        className
      )}
      {...props}
    >
      <span className="flex w-full items-center justify-center gap-1.5 rounded-xl py-0.5">
        <span className="truncate text-[0.625rem] text-zinc-700">{label}</span>
      </span>
    </button>
  )
}

export { DropdownSelectGroupByItem }
