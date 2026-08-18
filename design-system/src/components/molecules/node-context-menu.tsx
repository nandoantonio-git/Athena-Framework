import * as React from "react"
import { X, Info } from "lucide-react"

import { cn } from "@/lib/utils"
import { PushButton } from "@/components/atoms/push-button"
import { AddButton } from "@/components/atoms/add-button"
import { NodeContextMenuItem } from "@/components/cells/node-context-menu-item"
import NodeContextMenuFilter from "@/assets/icons/NodeContextMenuFilter.svg?react"

export type NodeContextMenuLogicalOperator = "and" | "or"

export interface NodeContextMenuProps extends React.ComponentProps<"div"> {
  /** Eixo `state` do Figma: `FloatingInfoPanel` (linha de condição preenchida, sem erro) \| `State3` (linha nova em `wrongInput` + aviso). */
  state?: "floating-info-panel" | "state-3"
  logicalOperator?: NodeContextMenuLogicalOperator
  onLogicalOperatorChange?: (operator: NodeContextMenuLogicalOperator) => void
  onRemoveCondition?: () => void
  onAddRule?: () => void
  onDiscard?: () => void
  onSave?: () => void
}

/**
 * molecule/nodoContextMenu (`1440:23821`, Figma-confirmado) — "menu
 * contextual do nodo selecionado presente no canva/tela de modo livre de
 * templates. possibilita criar filtro e operações condicionais." Composto
 * por `celule/nodoContextMenuItem` (pílulas de condição), `atom/buttonAdd`
 * ("+ Adicionar Regra") e `atom/PushButton` (rodapé "Descartar
 * Mudanças"/"Salvar Mudanças", mesmo par de texto já Figma-confirmado em
 * `organism/OrganizeFreeModeCanvas`). Material Liquid Glass de 2 camadas
 * (Regra 10, ver `Tokens/Materials`): "Fill + Shadow" (sombra) + "Glass
 * Effect" (`effect-glass-white-50`, `mix-blend-screen`).
 *
 * `state="state-3"` (Figma-confirmado) mostra uma 2ª linha de condição em
 * `wrongInput` (pílulas com anel vermelho) + aviso "Preencha todas as
 * informações antes de adicionar a nova regra" (texto Figma-confirmado,
 * `Type/Caption/SM` 11px — exceção documentada de piso, Regra 4, microtexto
 * complementar) e um 2º `atom/buttonAdd` extra.
 *
 * 🧩 Inferido (Regra 9 — sem token Figma correspondente): o toggle "E/OU" no
 * Figma usa um hex bruto (`#92ccff`) sem variável semântica — aproximado
 * aqui por `brand-teal` (mesmo tratamento de "selecionado" já usado em
 * `DropdownSelectGroupBy`/`ViewModeToggle`); registrado em
 * `docs/conflicts.md`.
 */
function NodeContextMenu({
  state = "floating-info-panel",
  logicalOperator = "and",
  onLogicalOperatorChange,
  onRemoveCondition,
  onAddRule,
  onDiscard,
  onSave,
  className,
  ...props
}: NodeContextMenuProps) {
  const isError = state === "state-3"
  return (
    <div
      data-slot="node-context-menu"
      data-state={state}
      className={cn("relative w-[393px] overflow-hidden rounded-[2.375rem] shadow-[0_8px_20px_rgba(0,0,0,0.12)]", className)}
      {...props}
    >
      <div aria-hidden="true" className="absolute inset-0 rounded-[2.375rem] bg-effect-glass-white-50 mix-blend-screen" />
      <div className="relative flex flex-col gap-3 px-6 py-2.5">
        <div className="flex items-center gap-2">
          <NodeContextMenuFilter aria-hidden="true" className="h-[15.193px] w-[15.111px]" />
          <span className="text-sm font-bold text-zinc-700">Filtro</span>
        </div>

        <div className="flex items-center gap-2">
          <NodeContextMenuItem label="Atributo" value="Tamanho" />
          <NodeContextMenuItem label="Operação" value="Maior que" />
          <NodeContextMenuItem label="Valor..." value="1.0 GB" hasChevron={false} />
          <button
            type="button"
            aria-label="Remover condição"
            onClick={onRemoveCondition}
            className="ml-auto text-zinc-400 hover:text-zinc-600"
          >
            <X aria-hidden="true" className="size-4" />
          </button>
        </div>

        <div className="flex items-center gap-1 self-start rounded-md border border-zinc-800 bg-zinc-900 p-0.5">
          <button
            type="button"
            aria-pressed={logicalOperator === "and"}
            onClick={() => onLogicalOperatorChange?.("and")}
            className={cn(
              "rounded-sm px-3 py-1 text-[0.5625rem] font-bold",
              logicalOperator === "and" ? "bg-brand-teal text-white" : "text-zinc-400"
            )}
          >
            E
          </button>
          <button
            type="button"
            aria-pressed={logicalOperator === "or"}
            onClick={() => onLogicalOperatorChange?.("or")}
            className={cn(
              "rounded-sm px-3 py-1 text-[0.5625rem] font-bold",
              logicalOperator === "or" ? "bg-brand-teal text-white" : "text-zinc-400"
            )}
          >
            OU
          </button>
        </div>

        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex items-center gap-2">
            <NodeContextMenuItem label="Atributo" error={isError} options={["Tamanho", "Data", "Tipo"]} />
            <NodeContextMenuItem
              label="Operação"
              error={isError}
              options={["> Maior", "< Menor", ">= Maior igual", "<= Menor igual", "=Igual", "!=Diferente"]}
            />
            <NodeContextMenuItem label="Valor..." error={isError} hasChevron={false} />
          </div>
          {isError ? (
            <p className="flex items-center gap-1 text-[0.6875rem] text-destructive">
              <Info aria-hidden="true" className="size-3 shrink-0" />
              Preencha todas as informações antes de adicionar a nova regra
            </p>
          ) : null}
        </div>

        <AddButton label="Adicionar Regra" onClick={onAddRule} className="w-full" />
        {isError ? <AddButton label="Adicionar Regra" onClick={onAddRule} className="w-full" /> : null}

        <div className="flex items-center justify-end gap-4 border-t border-zinc-300 py-3">
          <PushButton variant="neutral" className="h-8 px-4 text-xs" onClick={onDiscard}>
            Descartar Mudanças
          </PushButton>
          <PushButton variant="primary" className="h-8 px-4 text-xs" onClick={onSave}>
            Salvar Mudanças
          </PushButton>
        </div>
      </div>
    </div>
  )
}

export { NodeContextMenu }
