import * as React from "react"

import { cn } from "@/lib/utils"
import UploadFolderGlyph from "@/assets/icons/UploadFolderGlyph.svg?react"

export interface UploadFolderProps extends React.SVGProps<SVGSVGElement> {}

/**
 * atom/UploadFolder (`1439:17053`) — glifo composto (pasta + seta de
 * upload), sem descrição própria no Figma além do nome. Sem eixo de
 * variante/estado confirmado (`get_design_context` retorna um único
 * vetor estático 16×16) — implementado só como átomo de exibição,
 * `currentColor` pra herdar cor de contexto (mesmo padrão de `atom/Icon`).
 */
function UploadFolder({ className, ...props }: UploadFolderProps) {
  return (
    <UploadFolderGlyph
      data-slot="upload-folder"
      aria-hidden="true"
      className={cn("size-4", className)}
      {...props}
    />
  )
}

export { UploadFolder }
