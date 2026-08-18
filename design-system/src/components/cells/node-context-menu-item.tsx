import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface NodeContextMenuItemProps
  extends Omit<React.ComponentProps<"div">, "onChange"> {
  /** Placeholder mostrado quando não há `value` selecionado (ex.: "Atributo", "Valor..."). */
  label: string
  kind?: "attribute" | "condition" | "value" | "date" | "interval"
  /** Eixo `type` do Figma: pílulas `Atribute`\|`Conditional` abrem lista (chevron); `Value`\|`Date` são estáticas. */
  hasChevron?: boolean
  value?: string
  onValueChange?: (value: string) => void
  /** Eixo `property3=wrongInput` do Figma — anel/borda de erro. */
  error?: boolean
  expanded?: boolean
  selectedOption?: string
  onExpandedChange?: (expanded: boolean) => void
  options?: readonly string[]
  disabled?: boolean
}

const WIDTH_BY_KIND = {
  attribute: "w-[98.5px]",
  condition: "w-[116px]",
  value: "w-[72px]",
  date: "w-[72px]",
  interval: "w-[116px]",
} as const

function inferKind(label: string, hasChevron: boolean): NonNullable<NodeContextMenuItemProps["kind"]> {
  if (label === "Operação") return "condition"
  if (label === "Intervalo") return "interval"
  if (label === "Data") return "date"
  if (!hasChevron || label.startsWith("Valor")) return "value"
  return "attribute"
}

/**
 * celule/nodoContextMenuItem (`1421:20528`, Figma-confirmado) — "dropdown de
 * seleção de atributos e condições do menu contextual do canva Modo livre
 * template. ha aba data será de acordo com o navegador ou de uma
 * biblioteca(seus rqueistos é escolher uma data ou um intervalo de datas."
 * Camada `celule` (AGENTS.md — Estrutura de arquivos): peça própria, não
 * forçada em atom nem molecule. Mesmo padrão de trigger+lista já usado em
 * `molecule/DropdownSelectGroupBy` (chevron + `<ul>` condicional), aplicado
 * aqui às pílulas do construtor de filtro/condição:
 * "Atributo"/"Operação"/"Intervalo" (com chevron, abrem lista de opções) e
 * "Valor..."/"Data"/valor literal (pílula estática, sem chevron).
 * `filled` (cor sólida escura + texto branco) vs placeholder (fundo mudo +
 * texto zinc) reflete o Figma-confirmado `Default` (vazio) vs valor
 * selecionado. Aba "Data" (agenda real de calendário) não é implementada —
 * fora de escopo de uma pílula de catálogo (a description do Figma já
 * remete a um componente de calendário externo, não a este nó).
 */
function NodeContextMenuItem({
  label,
  kind,
  hasChevron = true,
  value,
  onValueChange,
  error = false,
  expanded = false,
  selectedOption,
  onExpandedChange,
  options,
  disabled,
  className,
  ...props
}: NodeContextMenuItemProps) {
  const visualKind = kind ?? inferKind(label, hasChevron)
  const filled = value !== undefined
  const widthClassName = WIDTH_BY_KIND[visualKind]
  const surfaceClassName = filled || visualKind === "date" ? "bg-zinc-800 text-zinc-200" : "bg-zinc-500/20 text-zinc-400"
  const expandedSurfaceClassName = "border-zinc-500 bg-zinc-600 text-zinc-300"
  return (
    <div
      data-slot="node-context-menu-item"
      data-kind={visualKind}
      data-expanded={expanded || undefined}
      className={cn(
        "relative flex flex-col items-start rounded-[var(--radius-md)]",
        widthClassName,
        expanded && hasChevron && "overflow-hidden border bg-zinc-600",
        expanded && hasChevron ? expandedSurfaceClassName : "",
        className
      )}
      {...props}
    >
      <button
        type="button"
        data-slot="node-context-menu-item-trigger"
        aria-expanded={hasChevron ? expanded : undefined}
        disabled={disabled}
        onClick={() => hasChevron && onExpandedChange?.(!expanded)}
        className={cn(
          "flex h-6 w-full items-center justify-center gap-1 whitespace-nowrap px-2 text-[0.6875rem] leading-4 transition-colors",
          expanded && hasChevron
            ? "rounded-none border-0 border-b border-black/10 bg-transparent"
            : cn("rounded-[var(--radius-md)] border", surfaceClassName),
          error && "border-destructive shadow-[0_0_0_2px_rgba(188,52,38,0.35)]",
          !error && !expanded && (filled ? "border-zinc-700" : "border-zinc-500"),
          "disabled:pointer-events-none disabled:opacity-50"
        )}
      >
        <span className="truncate">{value ?? label}</span>
        {hasChevron ? (
          <ChevronDownIcon
            className={cn("size-3 shrink-0 transition-transform", expanded && "rotate-180")}
            aria-hidden="true"
          />
        ) : null}
      </button>
      {hasChevron && expanded && options && options.length > 0 ? (
        <ul
          data-slot="node-context-menu-item-list"
          className="flex w-full flex-col py-1"
        >
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                data-slot="node-context-menu-item-option"
                aria-current={option === selectedOption || option === value}
                onClick={() => onValueChange?.(option)}
                className={cn(
                  "block h-[22px] w-full px-3 text-left text-[0.8125rem] leading-none whitespace-nowrap text-zinc-300 hover:bg-black/14",
                  (option === selectedOption || option === value) && "bg-black/14"
                )}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export { NodeContextMenuItem }
