import * as React from "react"
import { Check, FileArchive } from "lucide-react"

import { cn } from "@/lib/utils"
import { StorageTierBadge, type StorageTier } from "@/components/atoms/storage-tier-badge"
import FileGlyph from "@/assets/icons/CleanSpaceFileGlyph.svg?react"

const ARCHIVE_EXTENSIONS = ["zip", "rar", "7z", "tar", "gz"]

function isArchiveFile(name: string) {
  const extension = name.split(".").pop()?.toLowerCase()
  return !!extension && ARCHIVE_EXTENSIONS.includes(extension)
}

export interface CleanSpaceListSelectionProps
  extends Omit<React.ComponentProps<"div">, "onSelect"> {
  name: string
  meta: string
  tier: StorageTier
  selected?: boolean
  onSelectedChange?: (selected: boolean) => void
}

/**
 * celule/cleanSpaceStorage/listSelection (`1436:20496`, Figma-confirmado) —
 * "lista de seleção de arquivos grandes dentro do fluxo de libherar
 * espaço". 2 variantes (checkbox `Default`/`Variant2`) — checkbox marcado
 * usa `brand-teal`/branco (Regra 3, confirmado via `download_assets` no nó
 * real `1436:20498`, `fill="#007E96"`). Ícone do arquivo: fundo
 * `rgba(43,127,255,0.1)` + traço `#2b7fff` — RE-CONFIRMADO em 2026-08-12
 * (US-026, re-auditoria) via `get_design_context` + `download_assets` no
 * próprio nó do celule (`1436:20478`/`1436:20480`/`1436:20481`), que
 * exporta `stroke="#2B7FFF"` (bytes idênticos nos 2 nós, `Default` e
 * `Variant2`) — cor sem token equivalente no Figma (fill literal, não
 * `var(--...)`), reproduzida aqui como hex literal por não haver
 * mapeamento semântico. Um comentário anterior desta mesma auditoria
 * (US-026) tinha revertido isso para `brand-teal` citando nós diferentes
 * (`1421:20927`/`1421:20945`, fora deste celule) — não se sustenta contra
 * o nó real do componente auditado (Regra 11.1); revertido de volta ao
 * azul Figma-confirmado. O glifo também alterna por extensão (Figma usa
 * `FileArchive` pra `huge-backup.zip` e `FileText` pra PDF/TXT) — antes
 * sempre `FileText`, agora `isArchiveFile(name)` decide.
 * `atom/StorageTierBadge` reutilizado pro rótulo à direita ("Acesso
 * rápido"/"Longo prazo" — Regra 5), já era o mesmo componente usado na
 * amostra do Figma.
 *
 * Reconciliação: `organism/cleanSpaceStorage` (US-010) já renderizava essa
 * linha inline (`<li>` com `<input type="checkbox">` nativo e um quadrado
 * placeholder sem ícone, sem este celule ainda existir) — atualizado nesta
 * US para compor este componente em vez de markup duplicado, corrigindo de
 * passagem a ausência do ícone `FileText` e do checkbox com check real.
 */
function CleanSpaceListSelection({
  name,
  meta,
  tier,
  selected = false,
  onSelectedChange,
  className,
  ...props
}: CleanSpaceListSelectionProps) {
  return (
    <div
      data-slot="clean-space-list-selection"
      className={cn("flex items-center gap-3 rounded-[10.4px] p-[9px]", className)}
      {...props}
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={selected}
        aria-label={`Selecionar ${name}`}
        onClick={() => onSelectedChange?.(!selected)}
        className={cn(
          "flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-colors",
          selected ? "border-transparent bg-brand-teal" : "border-[#ececf0] bg-zinc-500/20"
        )}
      >
        {selected ? <Check aria-hidden="true" strokeWidth={2.5} className="size-3 text-white" /> : null}
      </button>
      <span className="flex size-8 shrink-0 items-center justify-center rounded-[10.4px]">
        {isArchiveFile(name) ? (
          <FileArchive aria-hidden="true" className="size-4 text-[#2b7fff]" />
        ) : (
          <FileGlyph aria-hidden="true" className="h-[23px] w-[21px]" />
        )}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-base tracking-[0.0192px] text-zinc-950">{name}</p>
        <p className="truncate text-[0.625rem] tracking-[0.012px] text-zinc-500">{meta}</p>
      </div>
      <StorageTierBadge tier={tier} />
    </div>
  )
}

export { CleanSpaceListSelection }
