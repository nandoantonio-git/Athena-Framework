import * as React from "react"

import { cn } from "@/lib/utils"
import { CloseButton } from "@/components/atoms/close-button"
import notificationThumbnail from "@/assets/illustrations/notification-thumbnail.png"

export type PopoverNotificationVariant =
  | "notification"
  | "adition"
  | "entering"
  | "collapsed"
  | "deep-archive"
  | "variant-6"

export interface PopoverNotificationProps extends React.ComponentProps<"div"> {
  /**
   * Eixo `variant` Figma-confirmado (`Notification`\|`Adition`\|`Variant3`\|
   * `collapsed`\|`deeparchive`\|`Variant6`) — sem descrição própria
   * distinguindo o significado de cada um além do texto/altura observados
   * (Regra 9). `entering`/`collapsed` (`Variant3`/`collapsed` no Figma) têm
   * altura/opacidade zeradas — 🧩 inferido como estados de
   * entrada/saída de uma animação de popover (Regra 8), não uma variante
   * visível em repouso.
   */
  variant?: PopoverNotificationVariant
  title?: string
  timestamp?: string
  showImage?: boolean
  onClose?: () => void
}

const TALL_VARIANTS: readonly PopoverNotificationVariant[] = ["adition", "deep-archive"]
const TRANSIENT_VARIANTS: readonly PopoverNotificationVariant[] = ["entering", "collapsed"]

const DEFAULT_TITLE: Record<PopoverNotificationVariant, string> = {
  notification: "Arquivo adicionado",
  adition: "Arquivo adicionado",
  entering: "Arquivo adicionado",
  collapsed: "Arquivo adicionado",
  "deep-archive": "Arquivos guardados com sucesso.",
  "variant-6": "Arquivo adicionado",
}

/**
 * molecule/popover/Notification (`1421:19626`, Figma-confirmado) —
 * "popover para notificar mudanças de estado, exemplo: uma organização
 * criada." Composto pelas mesmas peças de `molecule/Notification`
 * (`1439:19748`) — `atom/CloseButton` + título + timestamp — mas com 6
 * variantes confirmadas no Figma via eixo `variant`.
 *
 * Usa o material **Liquid Glass** — ver spec completa em `Tokens/Materials`
 * (Regra 10), aproximado por `bg-effect-glass-white-36` + sombra
 * `Effect/Shadow/LG` (`0px 8px 40px rgba(0,0,0,0.12)`, Figma-confirmado),
 * mesma simplificação de camada única usada em `molecule/Notification`/
 * `molecule/nodoContextMenu`.
 */
function PopoverNotification({
  variant = "notification",
  title,
  timestamp = "now",
  showImage = false,
  onClose,
  className,
  ...props
}: PopoverNotificationProps) {
  const isTransient = TRANSIENT_VARIANTS.includes(variant)
  const isTall = TALL_VARIANTS.includes(variant)
  const resolvedTitle = title ?? DEFAULT_TITLE[variant]

  return (
    <div
      data-slot="popover-notification"
      data-variant={variant}
      className={cn(
        "relative flex w-[344px] flex-col gap-0.5 rounded-xl pt-0.5 pr-2 pb-3 pl-3",
        isTransient ? "h-0 overflow-clip opacity-0" : isTall ? "h-[66px]" : "h-[59px]",
        !isTransient && "shadow-[0px_8px_40px_rgba(0,0,0,0.12)]",
        className
      )}
      {...props}
    >
      {isTransient ? null : (
        <>
          <div aria-hidden="true" className="absolute inset-0 rounded-xl bg-effect-glass-white-36" />
          <div className="relative flex h-5 w-full items-center justify-end gap-2 overflow-clip px-px">
            <CloseButton onClick={onClose} />
          </div>
          <div className="relative h-3.5 w-[322px]">
            <p className="absolute top-0 left-0 w-[287px] text-base text-zinc-700">{resolvedTitle}</p>
            <div className="absolute top-0 left-[300px] flex flex-col items-end gap-2">
              <span className="text-[0.6875rem] leading-[14px] whitespace-nowrap text-zinc-300">{timestamp}</span>
              {showImage ? (
                <img
                  alt=""
                  aria-hidden="true"
                  className="size-8 shrink-0 rounded-sm object-cover"
                  src={notificationThumbnail}
                />
              ) : null}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export { PopoverNotification }
