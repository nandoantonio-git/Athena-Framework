import * as React from "react"

import { cn } from "@/lib/utils"
import JuncaoGlyph from "@/assets/icons/ListItemJuncaoGlyph.svg?react"
import SubtracaoGlyph from "@/assets/icons/ListItemSubtracaoGlyph.svg?react"
import IntersseccaoGlyph from "@/assets/icons/ListItemIntersseccaoGlyph.svg?react"
import ExclusaoGlyph from "@/assets/icons/ListItemExclusaoGlyph.svg?react"
import FiltroTamanhoGlyph from "@/assets/icons/ListItemFiltroSizeGlyph.svg?react"
import FiltroFormatoGlyph from "@/assets/icons/ListItemFiltroFormatoGlyph.svg?react"
import FiltroDataGlyph from "@/assets/icons/ListItemFiltroDateGlyph.svg?react"

export type FreeModeListItemOperation =
  | "juncao"
  | "subtracao"
  | "intersseccao"
  | "exclusao"
  | "filtro-tamanho"
  | "filtro-formato"
  | "filtro-data"

const OPERATION_CONFIG: Record<
  FreeModeListItemOperation,
  { label: string; Glyph: React.FunctionComponent<React.SVGProps<SVGSVGElement>> }
> = {
  juncao: { label: "Junção", Glyph: JuncaoGlyph },
  subtracao: { label: "Subtração", Glyph: SubtracaoGlyph },
  intersseccao: { label: "Interssecção", Glyph: IntersseccaoGlyph },
  exclusao: { label: "Exclusão", Glyph: ExclusaoGlyph },
  "filtro-tamanho": { label: "Filtrar por tamanho", Glyph: FiltroTamanhoGlyph },
  "filtro-formato": { label: "Filtrar por formato", Glyph: FiltroFormatoGlyph },
  "filtro-data": { label: "Filtrar por data", Glyph: FiltroDataGlyph },
}

export interface FreeModeListItemProps extends Omit<React.ComponentProps<"button">, "onSelect"> {
  operation: FreeModeListItemOperation
  /** Eixo `state` do Figma. Use `hover` só para cobertura estática de Storybook/teste visual. */
  state?: "idle" | "hover" | "clicked"
  /** Eixo `state=Clicked` do Figma — linha persistida como selecionada. */
  selected?: boolean
  onSelect?: () => void
}

/**
 * celule/MainCanvas/Organization/FreeMode/ListItem (`1421:20757`,
 * Figma-confirmado) — linha da lista de tipos de nó disponíveis pra
 * adicionar ao canvas Modo Livre (7 operações: Junção/Subtração/
 * Interssecção/Exclusão + 3 filtros). Eixo `state` do Figma
 * (`idle`/`hover`/`Clicked`) mapeado para `state` para permitir captura
 * visual estática; o hover real continua disponível via CSS. A prop legada
 * `selected` ainda força `Clicked` para consumidores existentes (
 * `bg-effect-overlay-md` ≈ `bg-black/14`, mesmo tratamento de
 * `atom/Label/Storage/Alert`).
 */
function FreeModeListItem({
  operation,
  state = "idle",
  selected = false,
  onSelect,
  className,
  ...props
}: FreeModeListItemProps) {
  const { label, Glyph } = OPERATION_CONFIG[operation]
  const visualState = selected ? "clicked" : state
  return (
    <button
      type="button"
      data-slot="free-mode-list-item"
      data-operation={operation}
      data-state={visualState}
      aria-pressed={visualState === "clicked"}
      onClick={onSelect}
      className={cn(
        "flex h-8 w-full items-center gap-3 rounded-md px-4 text-left text-base font-medium tracking-[0.1px] text-zinc-700 transition-colors",
        visualState === "clicked"
          ? "bg-black/14"
          : visualState === "hover"
            ? "bg-zinc-500/45"
            : "hover:bg-zinc-500/45",
        className
      )}
      {...props}
    >
      <Glyph aria-hidden="true" className="size-5 shrink-0" />
      <span className="truncate">{label}</span>
    </button>
  )
}

export { FreeModeListItem }
