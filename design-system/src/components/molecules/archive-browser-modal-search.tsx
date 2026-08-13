import * as React from "react"

import { cn } from "@/lib/utils"
import { Icon } from "@/components/atoms/icon"
import { SearchInput } from "@/components/molecules/search-input"
import {
  ArchiveBrowserModalListItem,
  type ArchiveBrowserModalListItemProps,
} from "@/components/molecules/archive-browser-modal-list-item"

export interface ArchiveBrowserModalSearchFile
  extends Pick<ArchiveBrowserModalListItemProps, "fileName" | "meta"> {}

export interface ArchiveBrowserModalSearchProps
  extends Omit<React.ComponentProps<"div">, "children"> {
  /** Trilha de navegação — Figma-confirmado: "Pessoal › Fotos › <pasta atual>". */
  breadcrumb: string[]
  files: ArchiveBrowserModalSearchFile[]
  searchProps?: React.ComponentProps<typeof SearchInput>
}

/**
 * molecule/ArchiveBrowserModal/Search (`1485:21074`) — coluna direita de
 * `organism/ArchiveBrowserModal`: `molecule/SearchBar/Placeholder/XXL`
 * (reusa o `SearchInput` já implementado, mesma composição Liquid Glass de
 * 2 camadas) + breadcrumb (`atom/Icon/ChevronRight`, último item em
 * `brand-teal`) + painel "List" com `molecule/ArchiveBrowserModal/ListItem`
 * repetidos.
 *
 * O painel usa 2 camadas Figma-confirmadas: moldura externa com
 * `drop-shadow` (`0px 8px 20px rgba(0,0,0,0.12)`) + `rounded-2xl` (24px), e
 * "List" interna `bg-effect-glass-white-70` `rounded-xl` (16px) — mais
 * elaborado que a aproximação de camada única usada antes em
 * `organism/ArchiveBrowserModal` (reconciliado nesta US, ver
 * `ArchiveBrowserModal.mdx`).
 */
function ArchiveBrowserModalSearch({
  breadcrumb,
  files,
  searchProps,
  className,
  ...props
}: ArchiveBrowserModalSearchProps) {
  return (
    <div
      data-slot="archive-browser-modal-search"
      className={cn("flex h-[361px] w-full flex-col items-start gap-2.5", className)}
      {...props}
    >
      <SearchInput {...searchProps} className={cn("w-full max-w-none", searchProps?.className)} />
      <div className="flex items-center gap-1 overflow-hidden">
        {breadcrumb.map((crumb, index) => (
          <React.Fragment key={crumb}>
            {index > 0 ? (
              <Icon name="ChevronRight" aria-hidden="true" className="size-3.5 shrink-0 text-zinc-500" />
            ) : null}
            <span
              className={cn(
                "shrink-0 text-[0.6875rem] leading-4 tracking-[0.2px] whitespace-nowrap text-zinc-500",
                index === breadcrumb.length - 1 && "text-brand-teal"
              )}
            >
              {crumb}
            </span>
          </React.Fragment>
        ))}
      </div>
      <div className="h-[289px] w-full rounded-2xl shadow-[0px_8px_20px_rgba(0,0,0,0.12)]">
        <div className="flex h-full w-full flex-col items-start gap-0.5 rounded-xl bg-effect-glass-white-70 px-2 py-4">
          {files.map((file) => (
            <ArchiveBrowserModalListItem key={file.fileName} fileName={file.fileName} meta={file.meta} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { ArchiveBrowserModalSearch }
