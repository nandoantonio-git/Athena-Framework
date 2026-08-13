import * as React from "react"

import { cn } from "@/lib/utils"
import { Icon } from "@/components/atoms/icon"
import ClearGlyph from "@/assets/icons/ClearButtonGlyph.svg?react"
import DeleteGlyph from "@/assets/icons/DeleteButtonGlyph.svg?react"

export interface ContextHeaderProps extends React.ComponentProps<"div"> {
  /** `"X itens selecionado"` no Figma — literal, com placeholder textual (não interpolado). */
  itemsSelected?: string
  /** Eixo `state` Figma-confirmado. */
  state?: "expanded" | "collapsed"
  onClear?: () => void
  onShare?: () => void
  onDownload?: () => void
  onMove?: () => void
  onDelete?: () => void
  onMoreOptions?: () => void
}

/**
 * molecule/context-header (`1421:19589`, Figma-confirmado) — "header de
 * contexto para dar feedback de quantos itens estão sendo selecionados".
 * Botão limpar seleção (glifo `clear`) + contador + divisor + ações
 * (`atom/Icon/ShareFile`, baixar, `atom/Icon/FileMoveRight`,
 * `atom/DeleteButton`, `atom/Icon/Settings2`).
 *
 * `state="collapsed"` (Figma-confirmado) zera altura/opacidade do
 * container inteiro — 🧩 inferido como estado de saída/recolhimento
 * (Regra 8), não uma variante visível em repouso; conteúdo interno omitido
 * enquanto colapsado (mesmo padrão de `molecule/popover/Notification`).
 *
 * Usa o material **Liquid Glass** — ver spec completa em `Tokens/Materials`
 * (Regra 10), aproximado por `bg-effect-glass-white-36` + sombra
 * `Effect/Shadow/SM` (`0px 2px 16px rgba(9,9,11,0.08)`, Figma-confirmado).
 *
 * ⚠️ CONFLICT (Regra 4, ver `docs/conflicts.md`): o rótulo do contador usa
 * `Manrope:Medium` no Figma — Figtree é a tipografia travada do design
 * system inteiro. Implementado com Figtree (`font-sans`), não Manrope.
 *
 * Cor de texto/ícones (`#001f27`, sem token semântico Figma) aproximada por
 * `zinc-800` (Regra 3, fallback de rampa Zinc para neutros sem
 * correspondência exata).
 */
function ContextHeader({
  itemsSelected = "X itens selecionado",
  state = "expanded",
  onClear,
  onShare,
  onDownload,
  onMove,
  onDelete,
  onMoreOptions,
  className,
  ...props
}: ContextHeaderProps) {
  const isCollapsed = state === "collapsed"

  return (
    <div
      data-slot="context-header"
      data-state={state}
      className={cn(
        "relative flex w-[403px] flex-col items-start rounded-3xl drop-shadow-[0px_2px_16px_rgba(9,9,11,0.08)]",
        isCollapsed ? "h-0 overflow-clip opacity-0" : "h-[52px]",
        className
      )}
      {...props}
    >
      {isCollapsed ? null : (
        <>
          <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-effect-glass-white-36" />
          <div className="relative flex h-[52px] w-full items-center gap-5 py-3 pr-6 pl-[21px]">
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                aria-label="Limpar seleção"
                onClick={onClear}
                className="inline-flex size-4 shrink-0 items-center justify-center text-zinc-800"
              >
                <ClearGlyph aria-hidden="true" className="size-4" />
              </button>
              <span className="w-[9.0625rem] text-sm font-medium tracking-[0.14px] text-zinc-800">
                {itemsSelected}
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-6">
              <div aria-hidden="true" className="h-6 w-px bg-zinc-800/20" />
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  aria-label="Compartilhar"
                  onClick={onShare}
                  className="inline-flex items-center justify-center py-1.5 text-zinc-800"
                >
                  <Icon name="ShareFile" className="size-6" />
                </button>
                <button
                  type="button"
                  aria-label="Baixar"
                  onClick={onDownload}
                  className="inline-flex items-center justify-center py-1.5 text-zinc-800"
                >
                  <Icon name="Download" className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Mover"
                  onClick={onMove}
                  className="inline-flex items-center justify-center text-zinc-800"
                >
                  <Icon name="FileMoveRight" className="size-6" />
                </button>
                <button
                  type="button"
                  aria-label="Excluir"
                  onClick={onDelete}
                  className="inline-flex size-4 shrink-0 items-center justify-center text-zinc-800"
                >
                  <DeleteGlyph aria-hidden="true" className="size-3" />
                </button>
                <button
                  type="button"
                  aria-label="Mais opções"
                  onClick={onMoreOptions}
                  className="inline-flex items-center justify-center py-1.5 text-zinc-800"
                >
                  <Icon name="Settings2" className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export { ContextHeader }
