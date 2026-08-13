import * as React from "react"

import ConfirmButtonGlyph from "@/assets/icons/ConfirmButtonGlyph.svg?react"
import { cn } from "@/lib/utils"
import { IconActionButton, type IconActionButtonProps } from "./icon-action-button"

export interface ConfirmButtonProps
  extends Omit<IconActionButtonProps, "icon" | "label"> {
  /** Eixo `style` confirmado no Figma (`Default`|`Primary`|`White`). */
  style?: "default" | "primary" | "white"
  label?: string
}

const STYLE_CLASSNAME: Record<NonNullable<ConfirmButtonProps["style"]>, string> = {
  default: "text-zinc-500 hover:text-zinc-700",
  primary: "text-brand-teal",
  white: "text-white",
}

/**
 * atom/ActionButton/Confirm (`1421:17747`, Figma-confirmado) — "icone usado
 * em funções de confirmar" (ícone base "check": check/confirm/done/ok/tick).
 * Mesma ressalva de `state` On/Idle e ausência de Loading/Error dos demais
 * ícones-botão (figma-inventory.md, Seção 2.2). Glifo exportado do Figma
 * via `download_assets` (2026-08-11).
 *
 * Corrigido em auditoria US-026 (2026-08-11, Regra 11.4): releitura do
 * Figma confirma que todos os estados (`Default`/`Idle`/`Clicked`/
 * `Disabled` em `Default`/`White`/`Primary`) são só o glifo isolado com
 * troca de cor/opacidade — nenhum estado tem fundo/pílula. O código
 * anterior herdava um círculo de fundo cinza no hover/active via
 * `IconActionButton` (mesma classe compartilhada com `ClearButton`, que é o
 * único desses 4 átomos com pílula real confirmada) — elemento inventado,
 * removido.
 */
function ConfirmButton({
  style = "default",
  label = "Confirmar",
  className,
  ...props
}: ConfirmButtonProps) {
  return (
    <IconActionButton
      icon={ConfirmButtonGlyph}
      label={label}
      iconClassName="size-4"
      className={cn(STYLE_CLASSNAME[style], "disabled:opacity-20", className)}
      {...props}
    />
  )
}

export { ConfirmButton }
