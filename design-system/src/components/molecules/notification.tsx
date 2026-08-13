import * as React from "react"

import { cn } from "@/lib/utils"
import { CloseButton } from "@/components/atoms/close-button"
import notificationThumbnail from "@/assets/illustrations/notification-thumbnail.png"

export interface NotificationProps extends React.ComponentProps<"div"> {
  /** Título/mensagem — `"Arquivo adicionado"` no Figma. */
  title?: string
  /** Timestamp relativo — `"now"` no Figma (texto literal, não traduzido). */
  timestamp?: string
  /** Eixo `showImage` Figma-confirmado — miniatura 32×32 à direita do timestamp. */
  showImage?: boolean
  onClose?: () => void
}

/**
 * molecule/Notification (`1439:19748`, Figma-confirmado) — toast de
 * notificação avulso (distinto de `molecule/popover/Notification`,
 * `1421:19626`, que é a versão com as 6 variantes de popover). Usa o
 * material **Liquid Glass** — ver spec completa em `Tokens/Materials`
 * (Regra 10), aproximado aqui por `bg-effect-glass-white-36` + sombra
 * `Effect/Shadow/LG` (`0px 8px 40px rgba(0,0,0,0.12)`, Figma-confirmado),
 * mesma simplificação de camada única já usada em `molecule/nodoContextMenu`.
 *
 * Texto (`neutral-text-secondary`, `#3f3f46`) bate exatamente com `zinc-700`
 * (docs/conflicts.md, tabela "Paleta neutra"). Timestamp
 * (`neutral-text-disabled`, `#ccced6`) não tem correspondência exata na
 * rampa Zinc — aproximado por `zinc-300`, mesmo gap geral já registrado na
 * tabela.
 */
function Notification({
  title = "Arquivo adicionado",
  timestamp = "now",
  showImage = false,
  onClose,
  className,
  ...props
}: NotificationProps) {
  return (
    <div
      data-slot="notification"
      className={cn(
        "relative flex h-[59px] w-[344px] flex-col gap-0.5 rounded-xl pt-0.5 pr-2 pb-3 pl-3",
        "shadow-[0px_8px_40px_rgba(0,0,0,0.12)]",
        className
      )}
      {...props}
    >
      <div aria-hidden="true" className="absolute inset-0 rounded-xl bg-effect-glass-white-36" />
      <div className="relative flex h-5 w-full items-center justify-end gap-2 overflow-clip px-px">
        <CloseButton onClick={onClose} />
      </div>
      <div className="relative h-3.5 w-[322px]">
        <p className="absolute top-0 left-0 w-[287px] text-base text-zinc-700">{title}</p>
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
    </div>
  )
}

export { Notification }
