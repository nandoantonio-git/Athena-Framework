import * as React from "react"

import { cn } from "@/lib/utils"
import FolderArchiveGlyph from "@/assets/icons/FolderArchiveGlyph.svg?react"

export interface FileArchiveCardProps
  extends Omit<React.ComponentProps<"div">, "children"> {
  /** Nome exibido sob o ícone de pasta. */
  label?: string
  /** `molecule/FileArchive2` (`cursor-pointer` no ícone, Figma-confirmado) vs. `FileArchive1` (estático). */
  interactive?: boolean
}

/**
 * molecule/FileArchive1 (`1439:19655`) e molecule/FileArchive2 (`1439:19656`)
 * — Figma-confirmado: dois componentes-instância idênticos na anatomia
 * (ícone de pasta + rótulo 10px), usados lado a lado como miniaturas de
 * `molecule/FolderCard` (Home-Grid) e da grade "Organização". A única
 * diferença real entre os dois nodes é conteúdo de instância — rótulo
 * ("Arquivo 1" vs. "Arquivo 3") e `cursor-pointer` no ícone do segundo —
 * não uma variação estrutural, então implementados aqui como um único
 * componente reutilizável em vez de duas cópias da mesma marcação.
 *
 * Ícone de pasta usa o asset SVG exportado do Figma (gradiente teal),
 * idêntico byte-a-byte entre os dois nodes (só o `id` interno do gradiente
 * muda, ruído de export).
 */
function FileArchiveCard({
  label = "Arquivo 1",
  interactive = false,
  className,
  ...props
}: FileArchiveCardProps) {
  return (
    <div
      data-slot="file-archive-card"
      className={cn("flex w-[45.675px] flex-col items-start gap-1 py-0.5", className)}
      {...props}
    >
      <FolderArchiveGlyph
        data-slot="file-archive-card-icon"
        aria-hidden="true"
        className={cn("h-[40.405px] w-full shrink-0", interactive && "cursor-pointer")}
      />
      <span className="flex h-3 w-full items-start justify-center overflow-hidden text-[0.625rem] whitespace-nowrap text-zinc-700 tracking-[0.012px]">
        {label}
      </span>
    </div>
  )
}

export { FileArchiveCard }
