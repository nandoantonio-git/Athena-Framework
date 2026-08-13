import * as React from "react"

import { cn } from "@/lib/utils"

const MODE_LABEL = {
  free: "Modo Livre",
  date: "Data",
  project: "Projeto",
  type: "Tipo",
} as const

export type TagOrgMode = keyof typeof MODE_LABEL

export interface TagOrgModeProps
  extends Omit<React.ComponentProps<"span">, "children"> {
  mode?: TagOrgMode
}

/**
 * atom/TagOrgMode (`1421:18769`) — Figma-confirmado: "badge presente no
 * sandbox de organização, tem o rótulo do modo de template selecionado".
 * 4 variantes de `mode` (`Modo Livre`/`Data`/`Projeto`/`Tipo`), pílula
 * estática (sem estado interativo confirmado no Figma).
 *
 * Cor de fundo (`neutral-surface-medium`, `#52525b`) bate exatamente com
 * `zinc-600` do Tailwind (docs/conflicts.md, tabela "Paleta neutra") — sem
 * aproximação. Texto (`brand-primary-light`, `#c8dce3`) reusa o token já
 * existente `--brand-teal-light` (mesmo valor, achado em US-013).
 */
function TagOrgMode({ mode = "free", className, ...props }: TagOrgModeProps) {
  return (
    <span
      data-slot="tag-org-mode"
      data-mode={mode}
      className={cn(
        "inline-flex h-9 w-fit items-center rounded-md bg-zinc-600 px-3 py-1.5 font-medium text-[1.5625rem] text-brand-teal-light whitespace-nowrap",
        className
      )}
      {...props}
    >
      {MODE_LABEL[mode]}
    </span>
  )
}

export { TagOrgMode, MODE_LABEL }
