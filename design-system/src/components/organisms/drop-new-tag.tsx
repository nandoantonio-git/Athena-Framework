import * as React from "react"

import { cn } from "@/lib/utils"
import { TagColor, type TagColorName } from "@/components/celules/tag-color"

export type { TagColorName }

export interface DropNewTagProps extends React.ComponentProps<"div"> {
  label?: string
  onLabelChange?: (label: string) => void
  color?: TagColorName
  onColorChange?: (color: TagColorName) => void
}

/**
 * organism/drop/NewTag (`1444:21624`) — Figma-confirmado: "ao clicar em
 * nova etiqueta abre essa área de output onde você pode inserir o rotulo
 * desejado e a respectiva cor." Compõe `celule/TagColor` (`1444:21979`,
 * implementado na US-021) em vez de reimplementar os 6 swatches de cor
 * localmente — ver `tag-color.tsx` para o histórico da reconciliação
 * (corrige de passagem a cor `danger` desatualizada e o anel de seleção
 * inferido que a versão local antiga tinha).
 */
function DropNewTag({
  label = "",
  onLabelChange,
  color = "success",
  onColorChange,
  className,
  ...props
}: DropNewTagProps) {
  return (
    <div
      data-slot="drop-new-tag"
      className={cn(
        "relative h-[52px] w-[153px] overflow-clip rounded-br-md rounded-bl-md rounded-tr-md",
        className
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-11 w-[100px] rounded-br-md rounded-bl-md rounded-tr-md bg-effect-glass-white-70 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05),0px_16px_32px_rgba(0,0,0,0.1)] backdrop-blur-md"
      />
      <div className="absolute top-2.5 left-2.5 h-[25px] w-20 overflow-hidden">
      <input
        type="text"
          aria-label="Nome da etiqueta"
        value={label}
        onChange={(event) => onLabelChange?.(event.target.value)}
        placeholder="Nome da etiqueta"
          className="absolute top-px left-0 h-3 w-20 rounded-md border-0 bg-[var(--neutral-text-disabled,#ccced6)] px-1 text-[0.625rem] leading-3 text-zinc-700 placeholder:text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/50"
      />
        {!label ? (
          <span
            aria-hidden="true"
            className="absolute top-[3px] left-[9px] h-2 w-px rounded-full bg-[var(--accents-blue,#08f)]"
          />
        ) : null}
      </div>
      <TagColor
        value={color}
        onValueChange={onColorChange}
        className="absolute top-[26px] left-3.5"
      />
    </div>
  )
}

export { DropNewTag }
