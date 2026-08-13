import * as React from "react"

import DeleteButtonGlyph from "@/assets/icons/DeleteButtonGlyph.svg?react"
import { cn } from "@/lib/utils"
import { IconActionButton, type IconActionButtonProps } from "./icon-action-button"

export interface DeleteButtonProps
  extends Omit<IconActionButtonProps, "icon" | "label"> {
  /** Eixo `style` confirmado no Figma (`Default`|`Red`|`White`). */
  style?: "default" | "red" | "white"
  label?: string
}

const STYLE_CLASSNAME: Record<NonNullable<DeleteButtonProps["style"]>, string> = {
  default: "text-zinc-500 hover:text-zinc-700",
  red: "text-destructive",
  white: "text-white",
}

/**
 * atom/DeleteButton (`1421:17705`, Figma-confirmado) — "ícone utilizado
 * para ações destrutivas". `state` Figma-confirmado: On|Idle|Clicked|
 * Disabled — On/Idle não têm diferença de comportamento descrita no Figma
 * (Regra 9: não inventada), então ambos mapeiam para o mesmo repouso visual
 * aqui; Clicked é o `:active` nativo. Sem Loading/Error no Figma (gap, não
 * implementado). Glifo exportado do Figma via `download_assets` (2026-08-11,
 * decisão humana: fidelidade real, não aproximação por nome).
 *
 * Corrigido em auditoria US-026 (2026-08-11, Regra 11.4): mesmo achado de
 * `ConfirmButton`/`KeepButton` — nenhum estado Figma-confirmado tem
 * fundo/pílula (só o glifo com opacidade/cor variando). Removido o círculo
 * de fundo cinza herdado via `IconActionButton` no hover/active.
 */
function DeleteButton({
  style = "default",
  label = "Excluir",
  className,
  ...props
}: DeleteButtonProps) {
  return (
    <IconActionButton
      icon={DeleteButtonGlyph}
      label={label}
      iconClassName="h-3 w-[10px]"
      className={cn(STYLE_CLASSNAME[style], "disabled:opacity-20", className)}
      {...props}
    />
  )
}

export { DeleteButton }
