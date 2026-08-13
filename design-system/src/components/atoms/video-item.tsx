import * as React from "react"

import { cn } from "@/lib/utils"
import { SelectState } from "@/components/atoms/select-state"
import videoIdle from "@/assets/illustrations/video-item-idle.svg"
import videoHover from "@/assets/illustrations/video-item-hover.svg"
import videoPressed from "@/assets/illustrations/video-item-pressed.svg"
import videoDisabled from "@/assets/illustrations/video-item-disabled.svg"
import videoCamera from "@/assets/illustrations/video-item-camera.svg"

export type VideoItemState =
  | "idle"
  | "hover"
  | "pressed"
  | "disabled"
  | "selected"
  | "selected-hover"
  | "selected-pressed"
  | "favicon-header-thumbnail"

export interface VideoItemProps extends React.ComponentProps<"div"> {
  state?: VideoItemState
  /** `itemName` no Figma. */
  name?: string
  /** Eixo `isNameOn` do Figma. */
  showName?: boolean
}

const IMAGE: Record<VideoItemState, string> = {
  idle: videoIdle,
  hover: videoHover,
  pressed: videoPressed,
  disabled: videoDisabled,
  selected: videoIdle,
  "selected-hover": videoHover,
  "selected-pressed": videoPressed,
  "favicon-header-thumbnail": videoIdle,
}

const SELECTED_STATES: readonly VideoItemState[] = [
  "selected",
  "selected-hover",
  "selected-pressed",
]

const INTERACTIVE_STATES: readonly VideoItemState[] = [
  "hover",
  "pressed",
  "selected-hover",
  "selected-pressed",
]

/**
 * atom /VideoItem (`1442:7858`, Figma-confirmado) — "Simbolo para
 * representar arquivos de formatos vídeos. Suporta seleção e badge de
 * tier. Variantes: state e tier." A exportação real mostra o corpo do
 * arquivo de vídeo por estado + uma lente/câmera sobreposta constante;
 * `tier` não aparece como elemento visível no node, então segue como gap
 * documentado em vez de prop inventada.
 */
function VideoItem({
  state = "idle",
  name = "Arquivo 2",
  showName = true,
  className,
  ...props
}: VideoItemProps) {
  const isSelected = SELECTED_STATES.includes(state)
  const isInteractive = INTERACTIVE_STATES.includes(state)
  const isDisabled = state === "disabled"

  return (
    <div
      data-slot="video-item"
      data-state={state}
      className={cn(
        "relative flex w-fit min-w-[45px] flex-col items-center gap-1 px-1 py-0.5",
        isInteractive && "cursor-pointer",
        className
      )}
      {...props}
    >
      <div className="relative h-[43px] w-[45px] shrink-0">
        <img
          alt=""
          aria-hidden="true"
          className="absolute top-[5px] right-0 h-8 w-[42px]"
          src={IMAGE[state]}
        />
        <img
          alt=""
          aria-hidden="true"
          className="absolute top-[12px] right-0 h-[19px] w-[17px] mix-blend-hard-light"
          src={videoCamera}
        />
        {isSelected ? (
          <SelectState className="absolute right-[11px] bottom-[7px]" />
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

export { VideoItem }
