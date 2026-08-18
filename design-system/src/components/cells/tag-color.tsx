import * as React from "react"

import { cn } from "@/lib/utils"

const TAG_COLORS = [
  { name: "success", className: "bg-[var(--brand-feedback-success-default,#096)]" },
  { name: "primary", className: "bg-brand-teal" },
  { name: "primary-dark", className: "bg-brand-teal-dark" },
  { name: "pink-light", className: "bg-brand-pink-light" },
  { name: "danger", className: "bg-[var(--brand-feedback-danger-default,#bc3426)]" },
  { name: "warning", className: "bg-[var(--color-feedback-warning,#c38418)]" },
] as const

export type TagColorName = (typeof TAG_COLORS)[number]["name"]

export interface TagColorProps
  extends Omit<React.ComponentProps<"div">, "onChange"> {
  value?: TagColorName
  onValueChange?: (color: TagColorName) => void
}

/**
 * celule/TagColor (`1444:21979`, Figma-confirmado) — "painel onde é
 * possivel selecionar a cor do rótulo/etiqueta. pre-selecionada padrao é a
 * verde." Composição de 6 `atom/Tag` sem `label` (chip só de cor — o
 * comentário do próprio `Tag.tsx` já antecipava esse uso). Anel de seleção
 * confirmado no nó real (`shadow` azul `rgba(0,122,255,0.25)` no swatch
 * `success`, único pré-selecionado por padrão).
 *
 * Reconciliação: `organism/drop-new-tag` (US-005) reimplementava esses 6
 * swatches localmente porque este `celule` ainda não existia — atualizado
 * nesta US para compor este componente em vez de duplicar a lista de
 * cores, corrigindo de passagem 2 desvios que a versão local tinha: cor
 * `danger` desatualizada (`#ac3a2e`, valor pré-Regra 3/US-010, em vez do
 * real `#bc3426`) e anel de seleção `ring-2 ring-zinc-900` inferido a 16px
 * em vez do azul confirmado a 7px.
 *
 * O alvo de toque usa pseudo-elemento fora do fluxo para não alterar o gap
 * visual Figma-confirmado entre os dots.
 */
function TagColor({ value = "success", onValueChange, className, ...props }: TagColorProps) {
  return (
    <div
      data-slot="tag-color"
      role="radiogroup"
      aria-label="Cor da etiqueta"
      className={cn("flex items-center gap-[6px]", className)}
      {...props}
    >
      {TAG_COLORS.map((color) => {
        const selected = value === color.name
        return (
          <button
            key={color.name}
            type="button"
            data-slot="tag-color-swatch"
            role="radio"
            aria-checked={selected}
            aria-label={color.name}
            onClick={() => onValueChange?.(color.name)}
            className="relative flex size-[7px] items-center justify-center rounded-full before:absolute before:-inset-1 before:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/50"
          >
            <span
              className={cn(
                "size-[7px] rounded-full",
                color.className,
                selected && "shadow-[0_0_0_1px_rgba(0,122,255,0.25)]"
              )}
            />
          </button>
        )
      })}
    </div>
  )
}

export { TagColor, TAG_COLORS }
