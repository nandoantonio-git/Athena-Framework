import * as React from "react"

import { cn } from "@/lib/utils"
import ArchiveItemGlyph from "@/assets/icons/ArchiveItemGlyph.svg?react"

export interface ArchiveBrowserModalListItemProps
  extends Omit<React.ComponentProps<"div">, "children"> {
  /** Nome do arquivo — `Meta` linha 1, 16px. */
  fileName: string
  /** `Meta` linha 2, 11px — formato Figma-confirmado "TIPO · TAMANHO · DATA". */
  meta: string
  /** `Property 1=ArchiveSelectableRow` (Figma-confirmado) — realce sutil de linha selecionável. */
  selected?: boolean
}

/**
 * molecule/ArchiveBrowserModal/ListItem (`1421:20896`, eixo `Property 1`:
 * `ArchiveFileRow`\|`ArchiveSelectableRow`) — linha de arquivo dentro do
 * modal "Adicionar arquivos" (`organism/ArchiveBrowserModal`). Ícone
 * (instância de `atom/ArchiveItem`, `1421:18214`, ainda não implementado
 * como átomo próprio nesta US) + coluna `Meta` (nome 16px `#09090b` +
 * legenda 11px `#71717a`, tracking 0.2px).
 *
 * Ícone reproduzido a partir do asset real exportado do Figma
 * (`ArchiveItemGlyph.svg`, cartão com gradiente teal + 3 linhas), não um
 * placeholder `lucide-react` — mais fiel que a convenção usada em
 * `molecule/FileList` (que ainda usa `FileIcon` até `atom/ArchiveItem`
 * existir como átomo formal), pois este node específico já embute o
 * export pixel-a-pixel do glifo.
 *
 * `selected` mapeia o eixo `ArchiveSelectableRow` — fundo
 * `effect-overlay-subtle` (`rgba(191,199,210,0.1)`) + `rounded-md`. A
 * badge de tier vazia (`I...;1421:18290`) presente nos dois nodes Figma
 * não tem conteúdo confirmado em nenhum dos dois — omitida (Regra 11,
 * nunca inventar elemento não confirmável).
 */
function ArchiveBrowserModalListItem({
  fileName,
  meta,
  selected = false,
  className,
  ...props
}: ArchiveBrowserModalListItemProps) {
  return (
    <div
      data-slot="archive-browser-modal-list-item"
      data-selected={selected || undefined}
      className={cn(
        "flex w-full items-center gap-3 px-2 py-1.5",
        selected && "rounded-md bg-[rgba(191,199,210,0.1)]",
        className
      )}
      {...props}
    >
      <ArchiveItemGlyph aria-hidden="true" className="h-[41px] w-[36.68px] shrink-0" />
      <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5 overflow-hidden">
        <p className="w-full truncate text-base tracking-[0.0192px] text-zinc-950">{fileName}</p>
        <p className="w-full truncate text-[0.6875rem] leading-4 tracking-[0.2px] text-zinc-500">{meta}</p>
      </div>
    </div>
  )
}

export { ArchiveBrowserModalListItem }
