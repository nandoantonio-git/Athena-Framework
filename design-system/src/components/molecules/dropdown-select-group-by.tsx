import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Icon } from "@/components/atoms/icon"
import { DropdownSelectGroupByItem } from "@/components/atoms/dropdown-select-group-by-item"

/**
 * Opções confirmadas no Figma (`1421:18719`, estado Expanded) — ordem
 * exata da árvore (`get_design_context`, 2026-08-11, Regra 11): "Data de
 * modificação", "Tipo", "Tamanho", "Data de adição". Corrigido nesta
 * auditoria — a versão anterior listava "Tipo" primeiro, invertendo a
 * ordem real do Figma.
 */
const DEFAULT_OPTIONS = ["Data de modificação", "Tipo", "Tamanho", "Data de adição"] as const

export interface DropdownSelectGroupByProps
  extends Omit<React.ComponentProps<"div">, "onChange"> {
  options?: readonly string[]
  value?: string
  onValueChange?: (value: string) => void
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  disabled?: boolean
}

/**
 * molecule/DropdownSelect/GroupBy (`1421:18719`) — Figma-confirmado:
 * "item da pilula de agrupar, no qual você seleciona a condição de
 * agrupamento". Estados Figma-confirmados: Default\|Expanded\|Disabled.
 * Rótulo de seção "AGRUPAR" e botão "Agrupar" são texto Figma-confirmado.
 * Fundo usa o material Liquid Glass (`effect-glass-light-45`) — ver
 * Tokens/Materials (Regra 10).
 *
 * Corrigido em 2026-08-11 (achado do usuário): `w-[105px]` é fiel ao Figma
 * (`get_metadata` confirma 105px no estado `Expanded` também), mas opções
 * longas ("Data de modificação") quebravam linha sem truncamento — texto
 * agora corta com reticências (`truncate`) em vez de quebrar.
 *
 * Reconciliado em 2026-08-11 (US-019): cada opção da lista agora renderiza
 * `atom/DropdownSelect/GroupBy/Item` (`1444:21587`, node Figma próprio
 * achado nesta US) em vez do `<button>` inline anterior — item ganha o
 * tratamento visual real (fundo por estado, texto centralizado 10px) em
 * vez da aproximação anterior (texto colorido sem fundo).
 */
function DropdownSelectGroupBy({
  options = DEFAULT_OPTIONS,
  value,
  onValueChange,
  expanded = false,
  onExpandedChange,
  disabled,
  className,
  ...props
}: DropdownSelectGroupByProps) {
  return (
    <div
      data-slot="dropdown-select-group-by"
      data-disabled={disabled || undefined}
      data-expanded={expanded || undefined}
      className={cn(
        "flex w-[105px] flex-col items-start gap-1 data-[expanded]:h-auto",
        !expanded && "h-[54px]",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-[0.32]",
        className
      )}
      {...props}
    >
      <span className="px-1 text-[0.625rem] font-bold tracking-wide text-zinc-500">AGRUPAR</span>
      <div className="flex w-full flex-col items-start gap-1 rounded-xl bg-effect-glass-light-45 py-2 backdrop-blur-sm">
        <button
          type="button"
          data-slot="dropdown-select-group-by-trigger"
          aria-expanded={expanded}
          disabled={disabled}
          onClick={() => onExpandedChange?.(!expanded)}
          className="flex w-full items-center gap-2 px-3 text-xs text-zinc-700"
        >
          <Icon name="Group" className="size-3.5 shrink-0" />
          <span className="min-w-0 flex-1 truncate">{value ?? "Agrupar"}</span>
          <ChevronDownIcon
            className={cn("size-3 shrink-0 transition-transform", expanded && "rotate-180")}
            aria-hidden="true"
          />
        </button>
        {expanded ? (
          <ul data-slot="dropdown-select-group-by-list" className="flex w-full flex-col items-center">
            {options.map((option) => (
              <li key={option} className="w-full">
                <DropdownSelectGroupByItem
                  label={option}
                  aria-current={option === value}
                  selected={option === value}
                  onClick={() => onValueChange?.(option)}
                  className="mx-auto"
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export { DropdownSelectGroupBy, DEFAULT_OPTIONS }
