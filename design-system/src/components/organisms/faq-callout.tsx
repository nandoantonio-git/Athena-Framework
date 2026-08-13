import * as React from "react"

import { cn } from "@/lib/utils"

export interface FaqCalloutProps extends React.ComponentProps<"div"> {
  /**
   * `info` = `var(--brand-primary-light,#c8dce3)`/`var(--brand-primary-default,#007e96)`
   * (ℹ️, Figma-confirmado). `warning` = `#fff8e6`/`#fad98c` (⚠, Figma-
   * confirmado, hex literal — sem token semântico próprio ainda, uso único
   * em `LongTermStorage`, 🧩 não promovido a variável de tema).
   */
  tone?: "info" | "warning"
}

/**
 * Callout interno compartilhado por `organism/FAQ/info/cards/colapsed` e
 * `organism/FAQ/info/Card` (mesmo bloco de destaque reaparece em ambos,
 * Figma-confirmado nó a nó em cada painel de tópico) — não é um dos 10
 * componentes desta US, é um detalhe de implementação para não duplicar a
 * mesma marcação 5+ vezes entre os dois organisms.
 */
function FaqCallout({ tone = "info", className, children, ...props }: FaqCalloutProps) {
  return (
    <div
      data-slot="faq-callout"
      data-tone={tone}
      className={cn(
        "flex w-full items-start gap-2 rounded-lg border p-3 text-[0.8125rem] tracking-[0.0156px]",
        tone === "info"
          ? "border-brand-teal bg-brand-teal-light text-brand-teal-dark"
          : "border-[#fad98c] bg-[#fff8e6] text-brand-secondary-light",
        className
      )}
      {...props}
    >
      <span aria-hidden="true" className="shrink-0 text-sm">
        {tone === "info" ? "ℹ️" : "⚠"}
      </span>
      <p className="min-w-px flex-1">{children}</p>
    </div>
  )
}

export { FaqCallout }
