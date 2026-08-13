import * as React from "react"

import { cn } from "@/lib/utils"

export interface SwitchProps
  extends Omit<React.ComponentProps<"button">, "onChange" | "children"> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

/**
 * atom/switch (`1454:20959`) — Figma-confirmado: "botao de switch(liga e
 * desliga funções)". 2 variantes (`State=off`/`State=on`), track 36×20,
 * thumb 16×16 deslizando 18px. Implementado como `<button role="switch">`
 * (controle real, não `<input type="checkbox">` estilizado) para expor
 * `aria-checked` diretamente, igual convenção já usada em `PushButton`
 * (`data-slot`, `aria-*` nativos em vez de wrapper).
 */
function Switch({
  className,
  checked = false,
  disabled,
  onCheckedChange,
  ...props
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      data-slot="switch"
      data-state={checked ? "on" : "off"}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-transparent p-0.5",
        "transition-colors motion-safe:duration-150",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50",
        "disabled:pointer-events-none disabled:opacity-50",
        checked ? "bg-brand-teal" : "bg-[#d9d9d9]",
        className
      )}
      {...props}
    >
      <span
        data-slot="switch-thumb"
        aria-hidden="true"
        className={cn(
          "block size-4 rounded-full bg-white shadow-sm",
          "transition-transform motion-safe:duration-150 motion-safe:active:scale-90",
          checked ? "translate-x-4" : "translate-x-0"
        )}
      />
    </button>
  )
}

export { Switch }
