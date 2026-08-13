import * as React from "react"

import { cn } from "@/lib/utils"

export interface SidebarTagsItemProps
  extends Omit<React.ComponentProps<"button">, "onClick"> {
  label: string
  state?: "idle" | "hover" | "selected"
  /** `Property 1=Variant3` (Figma-confirmado). `hover` mapeado para `:hover` do browser (`Variant2`). */
  selected?: boolean
  onClick?: () => void
}

/**
 * atom/Sidebar/Tags/Items (`1421:20907`, Figma-confirmado) — "tags que
 * ficam presentes na sidebar". 3 variantes de `property1`:
 * `TypeLabel-sidebar` (idle, sem fundo), `Variant2` (hover, fundo
 * `effect-overlay-subtle`), `Variant3` (selected, fundo
 * `effect-overlay-md`, `rgba(0,0,0,0.14)` — literal, sem token semântico
 * para esse papel ainda, Regra 3). Substitui a linha de etiqueta antes
 * codificada ad hoc dentro de `organism/Sidebar` (US-006) — mesmo ponto
 * `bg-brand-teal` (`#007e96`, Figma-confirmado no asset `Ellipse 14`) +
 * texto `brand-secondary-dark`, agora como átomo próprio com node real.
 */
function SidebarTagsItem({
  label,
  state = "idle",
  selected,
  className,
  onClick,
  ...props
}: SidebarTagsItemProps) {
  const visualState = selected ? "selected" : state
  const isSelected = visualState === "selected"
  const isHover = visualState === "hover"

  return (
    <button
      type="button"
      data-slot="sidebar-tags-item"
      data-state={visualState}
      data-selected={isSelected || undefined}
      onClick={onClick}
      className={cn(
        "flex w-full items-start rounded-[6px] py-0.5",
        isSelected && "bg-[#00000024]",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "flex w-full items-center gap-1.5 px-5",
          isHover && "bg-effect-overlay-subtle",
          !isSelected && "hover:bg-effect-overlay-subtle"
        )}
      >
        <span aria-hidden="true" className="size-[7px] shrink-0 rounded-full bg-brand-teal" />
        <span className="truncate text-base text-brand-secondary-dark">{label}</span>
      </span>
    </button>
  )
}

export { SidebarTagsItem }
