import * as React from "react"

import { cn } from "@/lib/utils"
import closeButtonMdHover from "@/assets/icons/CloseButtonMdHover.svg"
import closeButtonMdIdle from "@/assets/icons/CloseButtonMdIdle.svg"
import closeButtonMdPressed from "@/assets/icons/CloseButtonMdPressed.svg"
import closeButtonSmHover from "@/assets/icons/CloseButtonSmHover.svg"
import closeButtonSmIdle from "@/assets/icons/CloseButtonSmIdle.svg"
import closeButtonSmPressed from "@/assets/icons/CloseButtonSmPressed.svg"

export type CloseButtonSize = "sm" | "md"
export type CloseButtonState = "idle" | "hover" | "pressed"

export interface CloseButtonProps extends React.ComponentProps<"button"> {
  label?: string
  size?: CloseButtonSize
  state?: CloseButtonState
}

/**
 * atom/CloseButton (`1421:19008`, Figma-confirmado) — botão usado para
 * fechar janelas ou componentes. O Figma expõe 2 tamanhos (`SM`/`MD`) e
 * 3 estados (`Idle`/`Hover`/`Pressed`), todos como SVGs exportados.
 */
function CloseButton({ label = "Fechar", size = "sm", state = "idle", className, ...props }: CloseButtonProps) {
  const assetByState: Record<CloseButtonSize, Record<CloseButtonState, string>> = {
    sm: {
      idle: closeButtonSmIdle,
      hover: closeButtonSmHover,
      pressed: closeButtonSmPressed,
    },
    md: {
      idle: closeButtonMdIdle,
      hover: closeButtonMdHover,
      pressed: closeButtonMdPressed,
    },
  }

  return (
    <button
      type="button"
      data-slot="close-button"
      data-size={size}
      data-state={state}
      aria-label={label}
      className={cn(
        "relative flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50",
        className
      )}
      {...props}
    >
      <img
        alt=""
        aria-hidden="true"
        className={cn("block", size === "md" ? "size-4" : "size-2")}
        src={assetByState[size][state]}
      />
    </button>
  )
}

export { CloseButton }
