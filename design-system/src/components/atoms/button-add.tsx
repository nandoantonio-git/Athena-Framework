import * as React from "react"
import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"

export type ButtonAddState = "idle" | "hover" | "clicked" | "disabled"

export interface ButtonAddProps extends React.ComponentProps<"button"> {
  label?: string
  /** Congela o estado visual Figma para auditoria/Storybook; consumidores reais podem omitir. */
  state?: ButtonAddState
}

/**
 * atom/buttonAdd (`1421:20509`, Figma-confirmado) — "utilizado para
 * adicionar novos arquivos no fluxo de guardar arquivos em longo prazo e no
 * fluxo do criar template de organização modo livre ao adicionar novas
 * regras de filtro no menu contextual do canva/tela." `style="Bordered
 * Neutral"` único estilo confirmado; `state` Idle\|Hover\|Clicked\|Disabled
 * mapeado para pseudo-classes nativas (mesmo padrão dos demais átomos de
 * botão do catálogo). Label Figma é o placeholder genérico "Label" — cada
 * uso passa um label real (`children`/`label`), sem inventar cópia.
 * Compact (`h-8`) — label a `text-xs` segue a mesma decisão humana já
 * documentada em `docs/conflicts.md` para botões compactos (Regra 4).
 * Reconciliado em uso real dentro de `organism/SaveLongTermFileStorage`
 * (US-016) — antes o botão "Adicionar arquivos" duplicava essa mesma
 * anatomia inline.
 */
function ButtonAdd({
  label = "Adicionar",
  state = "idle",
  className,
  disabled,
  children,
  ...props
}: ButtonAddProps) {
  const isDisabled = disabled || state === "disabled"

  return (
    <button
      type="button"
      data-slot="button-add"
      data-state={state}
      disabled={isDisabled}
      className={cn(
        "inline-flex h-8 shrink-0 items-center justify-center gap-2 rounded-md border border-zinc-300/70 bg-effect-glass-white-05 px-4 text-xs text-brand-teal transition-colors",
        state === "idle" && "hover:bg-zinc-500/15 active:bg-brand-teal active:text-white",
        state === "hover" && "bg-zinc-500/15",
        state === "clicked" && "bg-brand-teal text-white",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50",
        "disabled:pointer-events-none disabled:text-zinc-300 disabled:opacity-60",
        className
      )}
      {...props}
    >
      <Plus aria-hidden="true" className="size-3" />
      {children ?? label}
    </button>
  )
}

export { ButtonAdd }
