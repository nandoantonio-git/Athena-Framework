import * as React from "react"
import { GripVertical } from "lucide-react"

import { cn } from "@/lib/utils"
import { ArchiveItem } from "@/components/atoms/archive-item"
import { Icon } from "@/components/atoms/icon"
import { ImageItem } from "@/components/atoms/image-item"

export interface FolderCardProps extends React.ComponentProps<"div"> {
  label?: string
  /** Eixo `isExpanded` Figma-confirmado — `true` mostra as 3 miniaturas de arquivo. */
  expanded?: boolean
  /** Eixo `State` Figma-confirmado. */
  state?: "idle" | "hover" | "selected"
  /** Nomes das 3 miniaturas (Figma-confirmado: sempre 3 slots — doc/imagem/doc). */
  fileNames?: readonly [string, string, string]
  onToggleExpanded?: () => void
}

const DEFAULT_FILE_NAMES = ["Arquivo 1", "Arquivo 2", "Arquivo 3"] as const

/**
 * molecule/FolderCard (`1421:18595`, Figma-confirmado, descrição verbatim:
 * "Utilizado ao criar um template, estado expandido. 3 bolinhas
 * possibilitam acessar as configurações possiveis.") — card de pasta com
 * alça de arrasto ("3 bolinhas"), pílula "Pasta" expansível e 3 miniaturas
 * de arquivo (`molecule/FileArchive1` doc, `atom/ImageItem` imagem,
 * `molecule/FileArchive2` doc).
 *
 * A pílula "Pasta" usa sempre `text-brand-primary-dark`
 * (`var(--brand-primary-dark)`); só o fundo muda por `state`
 * (idle: transparente, hover: `neutral-surface-muted`
 * `rgba(113,113,122,0.2)`, selected: `brand-teal-light`
 * `var(--brand-primary-light)`) — Figma-confirmado idêntico
 * independentemente de `expanded`.
 *
 * Largura do card variava por ~3% entre estados no export bruto do Figma
 * (936px vs. 972px) — normalizada para uma única largura (`max-w-[972px]`),
 * diferença tratada como ruído de auto-layout, não sinal de design
 * (documentado, não Figma-confirmado como intencional).
 *
 * Alça de arrasto (`Group2`, ícone solto sem node `atom/Icon/*` próprio)
 * usa placeholder `lucide-react` (`GripVertical`).
 *
 * Corrigido nesta retomada da auditoria de ponto-fixo (Regra 11, US-026):
 * `atom/ArchiveItem` e `atom/ImageItem` já existem como átomos
 * Figma-confirmados; o card agora os compõe diretamente em vez de manter
 * thumbnails parciais ou placeholder `lucide-react`.
 */
function FolderCard({
  label = "Pasta",
  expanded = true,
  state = "idle",
  fileNames = DEFAULT_FILE_NAMES,
  onToggleExpanded,
  className,
  ...props
}: FolderCardProps) {
  return (
    <div
      data-slot="folder-card"
      data-state={state}
      data-expanded={expanded || undefined}
      className={cn(
        "flex w-full max-w-[972px] flex-col items-start gap-6 overflow-hidden rounded-md pb-6 pr-4",
        className
      )}
      {...props}
    >
      <div className="flex h-[33px] w-full items-center gap-1">
        <GripVertical aria-hidden="true" className="size-4 shrink-0 text-zinc-400" />
        <button
          type="button"
          data-slot="folder-card-toggle"
          onClick={onToggleExpanded}
          className={cn(
            "flex items-center gap-2 rounded-md px-2 py-1 text-base text-brand-teal-dark",
            state === "hover" && "bg-[#71717a33]",
            state === "selected" && "bg-brand-teal-light"
          )}
        >
          <Icon name="ArrowDropDown" className="size-4 shrink-0" />
          {label}
        </button>
      </div>
      {expanded ? (
        <div className="flex w-full items-start gap-8">
          <ArchiveItem name={fileNames[0]} />
          <ImageItem name={fileNames[1]} />
          <ArchiveItem name={fileNames[2]} />
        </div>
      ) : null}
    </div>
  )
}

export { FolderCard }
