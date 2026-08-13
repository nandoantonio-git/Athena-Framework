import * as React from "react"

import { cn } from "@/lib/utils"
import { SelectState } from "@/components/atoms/select-state"
import folderIdle from "@/assets/illustrations/folder-item-idle.svg"
import folderHover from "@/assets/illustrations/folder-item-hover.svg"
import folderPressed from "@/assets/illustrations/folder-item-pressed.svg"
import folderDisabled from "@/assets/illustrations/folder-item-disabled.svg"
import folderSelected from "@/assets/illustrations/folder-item-selected.svg"
import folderSelectedHover from "@/assets/illustrations/folder-item-selected-hover.svg"
import folderSelectedPressed from "@/assets/illustrations/folder-item-selected-pressed.svg"

export type FolderItemState =
  | "idle"
  | "hover"
  | "pressed"
  | "disabled"
  | "selected"
  | "selected-hover"
  | "selected-pressed"

export interface FolderItemProps extends React.ComponentProps<"div"> {
  state?: FolderItemState
  name?: string
  showName?: boolean
}

const IMAGE: Record<FolderItemState, string> = {
  idle: folderIdle,
  hover: folderHover,
  pressed: folderPressed,
  disabled: folderDisabled,
  selected: folderSelected,
  "selected-hover": folderSelectedHover,
  "selected-pressed": folderSelectedPressed,
}

const SELECTED_STATES: readonly FolderItemState[] = [
  "selected",
  "selected-hover",
  "selected-pressed",
]

const INTERACTIVE_STATES: readonly FolderItemState[] = [
  "hover",
  "pressed",
  "selected-hover",
  "selected-pressed",
]

/**
 * atom/FolderItem (`1440:24306`, Figma-confirmado) — "Simbolo para
 * representar pastas. Suporta seleção e badge de tier. Variantes: state e
 * tier." Mesma família visual/composicional de `ArchiveItem` (ver notas lá
 * sobre a menção a "tier" ser gap, não prop real), mas aqui cada estado é
 * uma imagem própria já com o glass bake-ado (sem par base+overlay
 * separado como em Archive) — `Group8..12/15` (idle/hover/pressed/
 * disabled/default/static, os 2 últimos dobrados em `idle`) e
 * `Group13/14` (selected/selected-hover).
 */
function FolderItem({
  state = "idle",
  name = "Arquivo 1",
  showName = true,
  className,
  ...props
}: FolderItemProps) {
  const isSelected = SELECTED_STATES.includes(state)
  const isInteractive = INTERACTIVE_STATES.includes(state)
  const isDisabled = state === "disabled"

  return (
    <div
      data-slot="folder-item"
      data-state={state}
      className={cn(
        "relative flex w-[47px] flex-col items-center gap-1 py-0.5",
        isInteractive && "cursor-pointer",
        className
      )}
      {...props}
    >
      <div className="relative h-[41px] w-[46.35px] shrink-0">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full"
          src={IMAGE[state]}
        />
        {isSelected ? (
          <SelectState className="absolute right-[3px] bottom-[3px]" />
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

export { FolderItem }
