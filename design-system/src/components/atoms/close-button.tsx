import * as React from "react"

import { cn } from "@/lib/utils"
import closeButtonMdHover from "@/assets/icons/CloseButtonMdHover.svg"
import closeButtonMdIdle from "@/assets/icons/CloseButtonMdIdle.svg"
import closeButtonMdPressed from "@/assets/icons/CloseButtonMdPressed.svg"
import closeButtonSmHover from "@/assets/icons/CloseButtonSmHover.svg"
import closeButtonSmIdle from "@/assets/icons/CloseButtonSmIdle.svg"
import closeButtonSmPressed from "@/assets/icons/CloseButtonSmPressed.svg"
import ClearGlyph from "@/assets/icons/ClearButtonGlyph.svg?react"

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
 *
 * Corrigido em auditoria de ponto-fixo (US-026, pass19): `get_design_context`
 * fresco no nó real mostra o glifo "×" (`clear`, node `172:3689` — mesmo
 * ícone-base de `atom/ClearButton`) como um elemento SEPARADO sobreposto ao
 * círculo de fundo, nunca bake-ado no SVG exportado — o círculo sozinho
 * (`CloseButton{Sm,Md}{Idle,Hover,Pressed}.svg`, únicos assets consumidos
 * antes desta correção) não contém o "×", então o botão renderizava como um
 * ponto sólido sem glifo em todo estado (achado material, confirmado no
 * screenshot Storybook: `atoms-closebutton--all-states`). Corrigido
 * reaproveitando `ClearButtonGlyph` (mesmo node Figma) como overlay
 * `currentColor` branco, absoluto e centralizado, com o tamanho
 * (SM 6px / MD 12px) e a opacidade por estado (idle 100% / hover 32% /
 * pressed 20%) Figma-confirmados — o fundo já escurece via os SVGs de
 * círculo existentes (overlay preto 14%/45% SM, 14%/20% MD), então o glifo
 * mais transparente no hover/pressed é o comportamento real, não um bug.
 *
 * Corrigido em 2026-08-15 (achado do usuário: hover/pressed não ativavam
 * na interação real do mouse) — a versão anterior só mudava de aparência
 * via a prop `state` controlada externamente, sem nenhuma classe
 * `hover:`/`active:` real; um botão consumido sem controle explícito de
 * `state` nunca reagia ao mouse de verdade. Como os SVGs de hover/pressed
 * já são só o idle com um overlay preto bake-ado (mesma opacidade
 * documentada acima), trocado pra: sempre renderizar o asset `idle` +
 * um `<div>` de overlay preto cuja opacidade é controlada por classes
 * `hover:`/`active:` reais (interação de mouse funciona sem prop nenhuma)
 * — a prop `state` continua funcionando pra fixar um estado estático nas
 * stories (aplica a mesma opacidade via classe explícita, sem depender de
 * interação real).
 */
function CloseButton({ label = "Fechar", size = "sm", state = "idle", className, ...props }: CloseButtonProps) {
  const idleAsset: Record<CloseButtonSize, string> = {
    sm: closeButtonSmIdle,
    md: closeButtonMdIdle,
  }

  const overlayOpacity: Record<CloseButtonSize, Record<CloseButtonState, string>> = {
    sm: { idle: "opacity-0", hover: "opacity-[0.14]", pressed: "opacity-[0.45]" },
    md: { idle: "opacity-0", hover: "opacity-[0.14]", pressed: "opacity-[0.2]" },
  }

  const glyphOpacity: Record<CloseButtonState, string> = {
    idle: "opacity-100",
    hover: "opacity-[0.32]",
    pressed: "opacity-20",
  }

  return (
    <button
      type="button"
      data-slot="close-button"
      data-size={size}
      data-state={state}
      aria-label={label}
      className={cn(
        "group relative flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50",
        className
      )}
      {...props}
    >
      <img
        alt=""
        aria-hidden="true"
        className={cn("block", size === "md" ? "size-4" : "size-2")}
        src={idleAsset[size]}
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 rounded-full bg-black transition-opacity",
          "group-hover:opacity-[0.14]",
          size === "md" ? "group-active:opacity-[0.2]" : "group-active:opacity-[0.45]",
          overlayOpacity[size][state]
        )}
      />
      <ClearGlyph
        aria-hidden="true"
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-opacity",
          size === "md" ? "size-3" : "size-1.5",
          "group-hover:opacity-[0.32] group-active:opacity-20",
          glyphOpacity[state]
        )}
      />
    </button>
  )
}

export { CloseButton }
