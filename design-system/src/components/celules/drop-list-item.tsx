import * as React from "react"
import { FolderPlus } from "lucide-react"

import { cn } from "@/lib/utils"

export interface DropListItemProps
  extends Omit<React.ComponentProps<"button">, "onClick"> {
  label?: string
  /** `state=clicked` (Figma-confirmado, fundo `effect-overlay-md`). */
  active?: boolean
  /** Estado estático Figma-confirmado para auditoria visual. */
  state?: "idle" | "hover" | "clicked"
  onClick?: () => void
}

/**
 * celule/dropListItem (`1440:23803`, Figma-confirmado) — "item do organism
 * dropList". Ícone `Container` (pasta com "+", `fill="#6B6B68"`
 * `fill-opacity="0.45"`) substituído por `lucide-react` `FolderPlus` (mesmo
 * critério de mapeamento por nome/significado já usado em
 * `stories/atoms/Icon.mdx`, não vetor pixel-a-pixel). Texto verbatim
 * confirmado: "Nova pasta". Largura fixa do nó (`191px`) trocada por
 * `w-full` — 🧩 inferido, item de lista deve esticar para a largura do
 * `organism/dropList` que o contém, não ficar travado num valor de
 * amostra do canvas.
 */
function DropListItem({
  label = "Nova pasta",
  active,
  state,
  className,
  onClick,
  ...props
}: DropListItemProps) {
  const resolvedState = state ?? (active ? "clicked" : "idle")

  return (
    <button
      type="button"
      data-slot="drop-list-item"
      data-state={resolvedState}
      data-active={resolvedState === "clicked" || undefined}
      onClick={onClick}
      className={cn(
        "flex h-8 w-full items-center gap-3 px-4 py-3 text-left transition-colors",
        resolvedState === "clicked"
          ? "bg-black/14"
          : resolvedState === "hover"
            ? "bg-[#ececf0]"
            : "hover:bg-[#ececf0]",
        className
      )}
      {...props}
    >
      <FolderPlus aria-hidden="true" className="h-4 w-5 shrink-0 text-[#6b6b68] opacity-45" />
      <span className="truncate font-medium text-[16px] tracking-[0.1px] text-zinc-700">
        {label}
      </span>
    </button>
  )
}

export { DropListItem }
