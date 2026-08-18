import * as React from "react"
import { Plus, Maximize, RotateCcw, Trash2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { BoxIconButton } from "@/components/atoms/box-icon-button"

export interface FreeModeButtonsProps extends React.ComponentProps<"div"> {
  onAddNode?: () => void
  onExpand?: () => void
  onReset?: () => void
  onDelete?: () => void
}

/**
 * celule/MainCanvas/Organization/FreeMode/Buttons (`1431:20043`,
 * Figma-confirmado) — "painel de ações disponíveis no modo livre com
 * nodos". Composição de 4 `atom/boxIconButton` (`1431:20102`,
 * Figma-confirmado) — `gap-[6px]` (`gap-1.5`), mesmos glifos/ordem já
 * corrigidos em `organism/OrganizeFreeModeCanvas` na US-016 (Adicionar
 * nodo/Expandir/Redefinir/Excluir). Extraído aqui como peça própria
 * (Regra 11) em vez de markup duplicado dentro do organism.
 */
function FreeModeButtons({ onAddNode, onExpand, onReset, onDelete, className, ...props }: FreeModeButtonsProps) {
  return (
    <div data-slot="free-mode-buttons" className={cn("flex items-center gap-1.5", className)} {...props}>
      <BoxIconButton icon={Plus} label="Adicionar nodo" onClick={onAddNode} />
      <BoxIconButton icon={Maximize} label="Expandir" onClick={onExpand} />
      <BoxIconButton icon={RotateCcw} label="Redefinir" onClick={onReset} />
      <BoxIconButton icon={Trash2} label="Excluir" danger onClick={onDelete} />
    </div>
  )
}

export { FreeModeButtons }
