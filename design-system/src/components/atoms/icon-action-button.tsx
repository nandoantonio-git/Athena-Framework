import * as React from "react"
import type { FunctionComponent, SVGProps } from "react"

import { cn } from "@/lib/utils"

export type IconGlyph = FunctionComponent<SVGProps<SVGSVGElement>>

export interface IconActionButtonProps
  extends Omit<React.ComponentProps<"button">, "children"> {
  icon: IconGlyph
  /** Texto acessível — obrigatório porque o botão só renderiza um ícone. */
  label: string
  /** Tamanho visual do SVG; o alvo de toque permanece 32px. */
  iconClassName?: string
}

/**
 * Anatomia compartilhada dos "ícones-botão" confirmados no Figma
 * (`atom/DeleteButton`, `atom/PlusButton`, `atom/ActionButton/Confirm`,
 * `atom/ClearButton`, `atom/KeepButton` — figma-inventory.md, Seção 2.2):
 * glifo centralizado, sem chrome de borda, círculo de toque de 32px (piso
 * de acessibilidade — nenhum dos 5 tem essa medida confirmada no Figma,
 * mantido por ser área de toque, não elemento visual), feedback de press
 * via escala. Não é, em si, um átomo do Figma — é a base de código
 * compartilhada, evitando duplicar a mesma anatomia 5 vezes.
 *
 * Corrigido em auditoria US-026 (2026-08-11, Regra 11.4): este componente
 * NÃO define fundo/pílula de hover — isso é opt-in via `className` de cada
 * átomo consumidor, porque só `atom/ClearButton` (e só em `style="default"`)
 * tem essa pílula confirmada no Figma; `ConfirmButton`/`DeleteButton`/
 * `KeepButton` não têm fundo em nenhum estado real (só o glifo muda de
 * cor/opacidade) — antes, os 4 herdavam a mesma pílula cinza inventada.
 */
function IconActionButton({
  icon: Icon,
  label,
  iconClassName,
  className,
  disabled,
  ...props
}: IconActionButtonProps) {
  return (
    <button
      type="button"
      data-slot="icon-action-button"
      aria-label={label}
      disabled={disabled}
      className={cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-all",
        "motion-safe:active:scale-90",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50",
        "disabled:pointer-events-none disabled:opacity-40",
        className
      )}
      {...props}
    >
      <Icon className={cn("size-5", iconClassName)} aria-hidden="true" />
    </button>
  )
}

export { IconActionButton }
