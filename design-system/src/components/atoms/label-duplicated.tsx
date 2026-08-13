import * as React from "react"

import { cn } from "@/lib/utils"
import LabelDuplicatedGlyph from "@/assets/icons/LabelDuplicatedGlyph.svg?react"

export interface LabelDuplicatedProps
  extends Omit<React.ComponentProps<"span">, "children"> {
  label?: string
}

/**
 * atom/Label/Duplicated (`1439:16874`) — Figma-confirmado: "badge de alerta
 * de duplicidade". Pílula com glifo de alerta + rótulo "Duplicado", sem
 * estado interativo (elemento de exibição estática).
 *
 * Fundo (`color-feedback-warning-subtle`, `rgba(245,158,11,0.2)`) usa
 * `amber-500/20` — `#f59e0b` (amber-500) bate exatamente com o RGB do
 * Figma. Texto/ícone (`color-feedback-warning`, `#c38418`) não tem
 * correspondência exata em nenhum degrau padrão do Tailwind — literal,
 * sem token semântico definido ainda (mesmo padrão de `atom/Tag`
 * variant="file-name").
 */
function LabelDuplicated({ label = "Duplicado", className, ...props }: LabelDuplicatedProps) {
  return (
    <span
      data-slot="label-duplicated"
      className={cn(
        "inline-flex items-end gap-1 rounded-full bg-amber-500/20 py-1 pr-3 pl-4 text-[#c38418]",
        className
      )}
      {...props}
    >
      <LabelDuplicatedGlyph aria-hidden="true" className="h-[13px] w-[12.83px] shrink-0" />
      <span className="text-base leading-4 font-medium tracking-[0.1px]">{label}</span>
    </span>
  )
}

export { LabelDuplicated }
