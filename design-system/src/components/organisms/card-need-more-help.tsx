import * as React from "react"

import { cn } from "@/lib/utils"

export interface CardNeedMoreHelpProps extends React.ComponentProps<"div"> {
  onContactSupport?: () => void
}

/**
 * organism/CardNeedMoreHelp (`1454:20981`) — Figma-confirmado: "Card para
 * entrar em contato com o suporte". Usa material Liquid Glass
 * (`bg-effect-glass-white-50`) — ver `Tokens/Materials` (Regra 10).
 */
function CardNeedMoreHelp({ onContactSupport, className, ...props }: CardNeedMoreHelpProps) {
  return (
    <div
      data-slot="card-need-more-help"
      className={cn(
        "flex w-[927px] max-w-none flex-col items-center gap-6 rounded-3xl bg-effect-glass-white-50 py-6",
        className
      )}
      {...props}
    >
      <p className="text-center text-lg font-semibold text-brand-secondary-dark">
        Ainda precisa de ajuda?
      </p>
      <p className="text-center text-sm text-brand-secondary">
        Se sua dúvida não está aqui, fale com o{" "}
        <a href="#suporte" className="font-medium text-brand-teal underline underline-offset-2">
          suporte
        </a>
        .
      </p>
      <button
        type="button"
        onClick={onContactSupport}
        className={cn(
          "rounded-lg border border-effect-overlay-subtle bg-effect-overlay-subtle px-[17px] py-[9px]",
          "text-base font-medium text-brand-secondary-dark shadow-sm",
          "transition-colors hover:bg-zinc-200/40 motion-safe:active:scale-[0.98]"
        )}
      >
        Falar com o suporte
      </button>
    </div>
  )
}

export { CardNeedMoreHelp }
