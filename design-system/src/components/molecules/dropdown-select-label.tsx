import * as React from "react"

import { cn } from "@/lib/utils"
import { Icon } from "@/components/atoms/icon"
import { DropdownSelectLabelItem } from "@/components/atoms/dropdown-select-label-item"

export interface DropdownSelectLabelProps extends React.ComponentProps<"div"> {
  /** Rótulos já existentes, listados acima da ação "+ Nova Etiqueta". */
  labels?: string[]
  value?: string
  onValueChange?: (label: string) => void
  onCreateLabel?: () => void
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  disabled?: boolean
}

/**
 * molecule/DropdownSelect/Label (`1439:19650`) — instância única no Figma
 * (não um component set com eixo de estado, ao contrário de
 * `molecule/DropdownSelect/GroupBy`), 103.67×63, sem variante
 * `Expanded`/`Disabled` própria confirmada. Composição Figma-confirmada do
 * estado fechado: rótulo "ETIQUETAR" (10px bold) + pílula Liquid Glass
 * (`effect-glass-light-45`) com `atom/Icon/Label` + texto "Etiquetar" (10px)
 * + `atom/Icon/ArrowDropDown` (8×4.93px).
 *
 * A abertura da lista (prop `expanded`) e a composição com
 * `atom/DropdownSelect/Label/Item` (`1444:21704`, "+ Nova Etiqueta") são
 * 🧩 Inferidas por analogia a `DropdownSelectGroupBy` — sem variante
 * `Expanded` confirmada neste node específico (Regra 9). O átomo em si é
 * Figma-confirmado; só a composição de lista ao redor dele não tem node
 * próprio.
 */
function DropdownSelectLabel({
  labels = [],
  value,
  onValueChange,
  onCreateLabel,
  expanded = false,
  onExpandedChange,
  disabled,
  className,
  ...props
}: DropdownSelectLabelProps) {
  return (
    <div
      data-slot="dropdown-select-label"
      data-disabled={disabled || undefined}
      className={cn(
        "flex w-[104px] flex-col items-start gap-1",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="px-1 text-[0.625rem] font-bold tracking-wide text-zinc-500">
        ETIQUETAR
      </span>
      <div className="flex w-full flex-col items-start gap-1 rounded-xl bg-effect-glass-light-45 py-2 backdrop-blur-sm">
        <button
          type="button"
          data-slot="dropdown-select-label-trigger"
          aria-expanded={expanded}
          disabled={disabled}
          onClick={() => onExpandedChange?.(!expanded)}
          className="flex w-full items-center gap-2 px-3 text-[0.625rem] text-zinc-700"
        >
          <Icon name="Label" className="size-3 shrink-0" />
          <span className="min-w-0 flex-1 truncate text-left">{value ?? "Etiquetar"}</span>
          <Icon
            name="ArrowDropDown"
            className={cn("size-2.5 shrink-0 transition-transform", expanded && "rotate-180")}
          />
        </button>
        {expanded ? (
          <ul data-slot="dropdown-select-label-list" className="flex w-full flex-col items-center">
            {labels.map((label) => (
              <li key={label} className="w-full">
                <DropdownSelectLabelItem
                  label={label}
                  aria-current={label === value}
                  active={label === value}
                  onClick={() => onValueChange?.(label)}
                  className="mx-auto"
                />
              </li>
            ))}
            <li className="w-full">
              <DropdownSelectLabelItem onClick={onCreateLabel} className="mx-auto" />
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export { DropdownSelectLabel }
