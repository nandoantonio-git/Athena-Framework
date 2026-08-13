import * as React from "react"

import { cn } from "@/lib/utils"
import ViewModeColumnsActive from "@/assets/icons/ViewModeColumnsActive.svg?react"
import ViewModeColumnsIdle from "@/assets/icons/ViewModeColumnsIdle.svg?react"
import ViewModeGridActive from "@/assets/icons/ViewModeGridActive.svg?react"
import ViewModeGridIdle from "@/assets/icons/ViewModeGridIdle.svg?react"
import ViewModeListActive from "@/assets/icons/ViewModeListActive.svg?react"
import ViewModeListIdle from "@/assets/icons/ViewModeListIdle.svg?react"

export type ViewMode = "grid" | "list" | "columns"

const MODES = [
  {
    value: "grid",
    label: "Grid",
    ActiveIcon: ViewModeGridActive,
    IdleIcon: ViewModeGridIdle,
    iconClassName: "size-[10.5px]",
  },
  {
    value: "list",
    label: "List",
    ActiveIcon: ViewModeListActive,
    IdleIcon: ViewModeListIdle,
    iconClassName: "h-[5.833px] w-[10.5px]",
  },
  {
    value: "columns",
    label: "Columns",
    ActiveIcon: ViewModeColumnsActive,
    IdleIcon: ViewModeColumnsIdle,
    iconClassName: "h-[8.167px] w-[10.485px]",
  },
]

export interface ViewModeToggleProps
  extends Omit<React.ComponentProps<"div">, "onChange"> {
  mode: ViewMode
  onModeChange?: (mode: ViewMode) => void
}

/**
 * molecule/view-mode-toggle (`1421:19069`) — Figma-confirmado: "pilula de
 * seleção do modo de vizualização do grid de arquivos". 3 modos (Grid/List/
 * Columns), fundo usa o material Liquid Glass (`effect-glass-light-45`) —
 * ver Tokens/Materials (Regra 10), não reimplementado aqui além da cor de
 * tint. Rótulo de seção "VISUALIZAR" é texto Figma-confirmado.
 *
 * Cor de texto do botão selecionado corrigida em 2026-08-12 (Regra 11,
 * US-026): `get_design_context` real no nó confirma
 * `var(--brand-primary-light,#c8dce3)` para o texto ativo (mesmo token já
 * mapeado como `brand-teal-light` neste projeto, achado US-013) — a
 * implementação anterior usava `text-white` puro, mais claro que o Figma.
 */
function ViewModeToggle({ mode, onModeChange, className, ...props }: ViewModeToggleProps) {
  return (
    <div
      data-slot="view-mode-toggle"
      className={cn("flex w-fit flex-col items-start gap-1", className)}
      {...props}
    >
      <span className="px-1 text-[0.625rem] font-bold tracking-wide text-zinc-500">
        VISUALIZAR
      </span>
      <div className="flex items-center gap-1 rounded-xl bg-effect-glass-light-45 p-1 backdrop-blur-sm">
        {MODES.map(({ value, label, ActiveIcon, IdleIcon, iconClassName }) => {
          const selected = value === mode
          const ModeIcon = selected ? ActiveIcon : IdleIcon
          return (
            <button
              key={value}
              type="button"
              data-slot="view-mode-toggle-button"
              aria-pressed={selected}
              aria-label={label}
              onClick={() => onModeChange?.(value)}
              className={cn(
                "flex items-center gap-2 rounded-md px-1 py-1.5 text-xs font-semibold transition-colors",
                selected
                  ? "bg-zinc-600 px-3 text-brand-teal-light"
                  : "text-zinc-700 hover:bg-zinc-600/10"
              )}
            >
              <ModeIcon className={iconClassName} aria-hidden="true" />
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { ViewModeToggle, MODES }
