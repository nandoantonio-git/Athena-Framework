import * as React from "react"

import KeepButtonGlyph from "@/assets/icons/KeepButtonGlyph.svg?react"
import { cn } from "@/lib/utils"
import { IconActionButton, type IconActionButtonProps } from "./icon-action-button"

export interface KeepButtonProps
  extends Omit<IconActionButtonProps, "icon" | "label"> {
  /** Eixo `style` confirmado no Figma (`Default`|`Primary`|`White`). */
  style?: "default" | "primary" | "white"
  label?: string
}

const STYLE_CLASSNAME: Record<NonNullable<KeepButtonProps["style"]>, string> = {
  default: "text-zinc-500 hover:text-zinc-700",
  primary: "text-brand-teal",
  white: "text-white",
}

/**
 * atom/KeepButton (`1421:17793`, Figma-confirmado) — "icone usado em
 * funções de guardar em longo prazo" (Regra 5: "Guardar"/"Arquivar" são os
 * termos aprovados para essa ação — não há termo proibido em jogo aqui, o
 * componente não renderiza texto). Glifo exportado do Figma via
 * `download_assets` (2026-08-11).
 *
 * Corrigido em auditoria US-026 (2026-08-11, Regra 11.4): mesmo achado de
 * `ConfirmButton`/`DeleteButton` — nenhum estado Figma-confirmado
 * (`Default`/`Idle`/`Clicked`/`Disabled` em `Default`/`White`/`Primary`)
 * tem fundo/pílula, só o glifo (container 20×20, glifo 16×16) com
 * opacidade/cor variando. Removido o círculo de fundo cinza herdado via
 * `IconActionButton` no hover/active.
 */
function KeepButton({
  style = "default",
  label = "Guardar em longo prazo",
  className,
  ...props
}: KeepButtonProps) {
  return (
    <IconActionButton
      icon={KeepButtonGlyph}
      label={label}
      iconClassName="size-4"
      className={cn(STYLE_CLASSNAME[style], "disabled:opacity-20", className)}
      {...props}
    />
  )
}

export { KeepButton }
