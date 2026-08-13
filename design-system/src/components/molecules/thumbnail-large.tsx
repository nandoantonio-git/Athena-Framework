import * as React from "react"

import { cn } from "@/lib/utils"
import FaviconImageGlyph from "@/assets/icons/ThumbnailFaviconImage.svg?react"
import FaviconDocumentGlyph from "@/assets/icons/ThumbnailFaviconDocument.svg?react"
import previewImage from "@/assets/illustrations/thumbnail-large-preview.png"

export type ThumbnailLargeFileType = "image" | "document"

export interface ThumbnailLargeProps extends React.ComponentProps<"div"> {
  /** Eixo `fileTypeIcon` Figma-confirmado. */
  fileType?: ThumbnailLargeFileType
  /** Nome interno do favicon no Figma; não é visível no header renderizado. */
  fileName?: string
  /** `"Page 1 of 12"` no Figma (texto literal em inglês, não traduzido). */
  pageLabel?: string
}

/**
 * molecule/thumbnail-large (`1421:19570`, Figma-confirmado) — "thumbnail/
 * pre-visualização do arquivo selecionado no painel detalhes presente no
 * formato de visualização coluna." Header (favicon de tipo + nome de
 * arquivo, para `fileType="image"` \| favicon + `pageLabel`, para
 * `fileType="document"`) sobre um fundo `neutral-surface-background`, mais
 * a pré-visualização em si com um degradê sutil por cima.
 *
 * Favicon (`favincon/ArchiveFormats`, `1444:21914`, Figma-confirmado: "dá
 * feedback visual no header do card para o usuário acerca do tipo de
 * documento") — glifo vidro/gradiente exportado do Figma via
 * `download_assets` (2026-08-11), não um ícone genérico inventado.
 *
 * Usa o material **Liquid Glass** — ver spec completa em `Tokens/Materials`
 * (Regra 10) — para o fundo da pré-visualização
 * (`bg-effect-glass-white-36`, Figma-confirmado idêntico ao token do tema).
 */
function ThumbnailLarge({
  fileType = "image",
  fileName: _fileName,
  pageLabel = "Page 1 of 12",
  className,
  ...props
}: ThumbnailLargeProps) {
  const isDocument = fileType === "document"
  const FaviconGlyph = isDocument ? FaviconDocumentGlyph : FaviconImageGlyph

  return (
    <div
      data-slot="thumbnail-large"
      data-file-type={fileType}
      className={cn(
        "flex w-[277px] flex-col items-center overflow-clip rounded-xl border border-brand-teal-light bg-effect-glass-white-36 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]",
        className
      )}
      {...props}
    >
      <div className="w-full border-b border-brand-teal-light bg-zinc-100">
        <div className="flex items-center justify-between pt-3 pr-[11.99px] pb-[13px] pl-3">
          <div className="flex h-[23px] items-start justify-center">
            <FaviconGlyph aria-hidden="true" className={isDocument ? "h-[23px] w-[21px]" : "h-[19px] w-4"} />
          </div>
          <span className="text-[0.625rem] tracking-[0.012px] text-zinc-700">{pageLabel}</span>
        </div>
      </div>
      <div className="relative h-[210px] w-full bg-effect-glass-white-36">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
          src={previewImage}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/20"
        />
      </div>
    </div>
  )
}

export { ThumbnailLarge }
