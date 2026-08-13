import * as React from "react"

import { cn } from "@/lib/utils"
import { SelectState } from "@/components/atoms/select-state"
import archiveIdle from "@/assets/illustrations/archive-item-idle.svg"
import archiveActive from "@/assets/illustrations/archive-item-active.svg"
import archiveHoverOverlay from "@/assets/illustrations/archive-item-hover-overlay.svg"
import archivePressedOverlay from "@/assets/illustrations/archive-item-pressed-overlay.svg"
import archiveDisabledOverlay from "@/assets/illustrations/archive-item-disabled-overlay.svg"

export type ArchiveItemState =
  | "idle"
  | "hover"
  | "pressed"
  | "disabled"
  | "selected"
  | "selected-hover"
  | "selected-pressed"

export interface ArchiveItemProps extends React.ComponentProps<"div"> {
  state?: ArchiveItemState
  /** Nome exibido abaixo do glifo — `folderName` no Figma, apesar de ser um arquivo (nome de prop mantido lá; aqui só `name`). */
  name?: string
  /** Eixo `isNameOn` do Figma. */
  showName?: boolean
}

const BASE_IMAGE: Record<ArchiveItemState, string> = {
  idle: archiveIdle,
  hover: archiveActive,
  pressed: archiveActive,
  disabled: archiveActive,
  selected: archiveIdle,
  "selected-hover": archiveIdle,
  "selected-pressed": archiveActive,
}

const OVERLAY_IMAGE: Partial<Record<ArchiveItemState, string>> = {
  hover: archiveHoverOverlay,
  "selected-hover": archiveHoverOverlay,
  pressed: archivePressedOverlay,
  "selected-pressed": archivePressedOverlay,
  disabled: archiveDisabledOverlay,
}

const SELECTED_STATES: readonly ArchiveItemState[] = [
  "selected",
  "selected-hover",
  "selected-pressed",
]

const INTERACTIVE_STATES: readonly ArchiveItemState[] = [
  "hover",
  "pressed",
  "selected-hover",
  "selected-pressed",
]

/**
 * atom/ArchiveItem (`1421:18214`, Figma-confirmado) — "Simbolo para
 * representar arquivos. Suporta seleção e badge de tier. Variantes: state e
 * tier." Glifo 3D-glass de arquivo (36.68×41) + nome abaixo. `get_metadata`/
 * `get_design_context` só retornam o eixo `state` (9 valores no Figma,
 * consolidados aqui em 7 — `Default`/`Static` eram variações internas de
 * autoria idênticas visualmente a `idle` no screenshot renderizado, dobradas
 * para não expor 2 props redundantes); nenhum eixo `tier` existe no
 * componente real (nem no screenshot) — a menção a "badge de tier" na
 * descrição Figma refere-se a compor com `atom/StorageTierBadge` (Regra 6)
 * externamente, não um prop interno; documentado como gap (Regra 9), não
 * inventado.
 *
 * Composição real (`get_design_context`): imagem base (`Rectangle13`
 * idle/selected\* ↔ `Rectangle14` hover/pressed/disabled/selected-pressed) +
 * overlay de glass por estado (`Rectangle94` hover, `Rectangle95` pressed,
 * mix-blend-multiply, `Rectangle96` disabled) + `atom/SelectState` (canto
 * inferior direito) nos 3 estados `selected*` — reutilizado como componente,
 * não reimplementado (Regra 10, mesmo princípio de spec única).
 *
 * Corrigido em auditoria US-026 (2026-08-11): a largura externa era fixa em
 * `w-[41px]` para todo `state`, mas o Figma real só fixa 41px na variante
 * `Static`/`property2=ArchiveItem` — os demais estados (`Idle` incluso) não
 * têm largura fixa (`content-stretch flex flex-col items-center`, sem
 * `w-*`), então o nome abaixo do glifo nunca é cortado lá. A largura fixa
 * causava truncamento real do nome padrão ("Arquivo 1" → "Arquiv…") no
 * screenshot renderizado. Trocado para `w-fit min-w-[36.68px]` (acompanha o
 * glifo como piso, cresce para o nome quando precisa).
 *
 * Corrigido em auditoria de ponto-fixo, 4ª passada (US-026, 2026-08-12):
 * `get_design_context` confirma 3 barras horizontais (glifo de "documento",
 * `bg-[var(--effect-glass-fill-light,rgba(250,250,250,0.6))]`, `h-[3px]`
 * `rounded-[6px]`, larguras 26/26/16px) desenhadas por cima do card base em
 * TODOS os 7 estados — os SVGs exportados usados aqui (`archive-item-idle`/
 * `-active`) são só o retângulo com gradiente, sem esse glifo bake-ado (ao
 * contrário de `FolderItem`/`ImageItem`, cujos SVGs já incluem o ícone).
 * Elemento inteiro estava ausente do componente renderizado (confirmado no
 * screenshot do Storybook — cards sólidos sem nenhuma linha visível).
 * Adicionado como 3 `<div>` absolutos, replicando a spec exata do Figma.
 */
function ArchiveItem({
  state = "idle",
  name = "Arquivo 1",
  showName = true,
  className,
  ...props
}: ArchiveItemProps) {
  const isSelected = SELECTED_STATES.includes(state)
  const isInteractive = INTERACTIVE_STATES.includes(state)
  const isDisabled = state === "disabled"
  const overlay = OVERLAY_IMAGE[state]

  return (
    <div
      data-slot="archive-item"
      data-state={state}
      className={cn(
        "relative flex w-fit min-w-[36.68px] flex-col items-center gap-1 py-0.5",
        isInteractive && "cursor-pointer",
        className
      )}
      {...props}
    >
      <div className="relative h-[41px] w-[36.68px] shrink-0">
        <img alt="" aria-hidden="true" className="absolute inset-0 size-full" src={BASE_IMAGE[state]} />
        <div
          aria-hidden="true"
          className="absolute top-[6px] left-[5.34px] h-[3px] w-[26px] rounded-[6px] bg-[var(--effect-glass-fill-light,rgba(250,250,250,0.6))]"
        />
        <div
          aria-hidden="true"
          className="absolute top-[13px] left-[5.34px] h-[3px] w-[26px] rounded-[6px] bg-[var(--effect-glass-fill-light,rgba(250,250,250,0.6))]"
        />
        <div
          aria-hidden="true"
          className="absolute top-[20px] left-[5.34px] h-[3px] w-[16px] rounded-[6px] bg-[var(--effect-glass-fill-light,rgba(250,250,250,0.6))]"
        />
        {overlay ? (
          <img
            alt=""
            aria-hidden="true"
            className={cn(
              "absolute inset-0 size-full",
              (state === "pressed" || state === "selected-pressed") && "mix-blend-multiply"
            )}
            src={overlay}
          />
        ) : null}
        {isSelected ? (
          <SelectState className="absolute right-[2px] bottom-0" />
        ) : null}
      </div>
      {showName ? (
        <span
          className={cn(
            "block h-3 w-full truncate text-center text-[0.625rem] leading-normal tracking-[0.012px]",
            isDisabled ? "text-zinc-500" : "text-zinc-700"
          )}
        >
          {name}
        </span>
      ) : null}
    </div>
  )
}

export { ArchiveItem }
