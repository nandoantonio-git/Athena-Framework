import * as React from "react"

import { cn } from "@/lib/utils"

export type CalloutVariant = "warning" | "info"

export interface CalloutProps extends React.ComponentProps<"div"> {
  variant?: CalloutVariant
}

/**
 * celule/Callout (`1421:20028`, Figma-confirmado) — "utilizado para dar
 * avisos importantes para usuário, previsão contra erro". 2 variantes
 * (`property1`): `Default` (aviso, âmbar) e `Variant2` (informativo,
 * primária/teal). O glifo do ícone usa a MESMA classe de cor (`#80590d`)
 * nos dois casos no código-fonte do Figma — não é erro: `⚠` (glifo
 * monocromático) herda essa cor, `ℹ️` (emoji colorido nativo) ignora `color`
 * no browser, então o resultado visual bate com o screenshot mesmo com uma
 * única classe.
 */
function Callout({ variant = "warning", className, children, ...props }: CalloutProps) {
  const isInfo = variant === "info"
  return (
    <div
      data-slot="callout"
      data-variant={variant}
      className={cn(
        "flex w-full items-start gap-2 rounded-lg border p-3",
        isInfo
          ? "border-brand-teal bg-brand-teal-light"
          : "border-[#fad98c] bg-[var(--color-feedback-warning-subtle,#f59e0b33)]",
        className
      )}
      {...props}
    >
      <span aria-hidden="true" className="shrink-0 text-sm text-[#80590d]">
        {isInfo ? "ℹ️" : "⚠"}
      </span>
      <p
        className={cn(
          "min-w-px flex-1 text-[0.8125rem] tracking-[0.0156px]",
          isInfo ? "text-brand-teal-dark" : "text-[var(--color-feedback-warning,#c38418)]"
        )}
      >
        {children}
      </p>
    </div>
  )
}

export { Callout }
