import * as React from "react"

import PlusButtonGlyph from "@/assets/icons/PlusButtonGlyph.svg?react"
import { cn } from "@/lib/utils"
import { IconActionButton, type IconActionButtonProps } from "./icon-action-button"

export interface PlusButtonProps
  extends Omit<IconActionButtonProps, "icon" | "label"> {
  /** Eixo `style` confirmado no Figma (`Default`|`Primary`|`White`). */
  style?: "default" | "primary" | "white"
  label?: string
}

const STYLE_CLASSNAME: Record<NonNullable<PlusButtonProps["style"]>, string> = {
  default: "text-zinc-500 hover:text-zinc-800 active:opacity-60",
  primary: "text-brand-teal hover:opacity-80 active:opacity-60",
  white: "text-white hover:opacity-80 active:opacity-60",
}

/**
 * atom/PlusButton (`1421:17726`, Figma-confirmado) — "ícone utilizado para
 * ações aditivas". Mesma ressalva de `state` On/Idle e ausência de
 * Loading/Error do `DeleteButton` (figma-inventory.md, Seção 2.2). Glifo
 * exportado do Figma via `download_assets` (2026-08-11).
 *
 * Reconciliação em 2026-08-12 (US-026, auditoria de ponto-fixo, Regra 11.4):
 * `get_design_context` no nó real mostra TODAS as combinações de
 * `style`×`state` (Default/Primary/White × Idle/On/Clicked/Disabled) sem
 * nenhum elemento de fundo/pílula — só o glifo muda de cor/opacidade em
 * cada estado, nunca ganha um círculo/fundo atrás. A versão anterior deste
 * átomo tinha `hover:bg-*`/`active:bg-*` (pílula cinza/teal/branca
 * inventada, sem confirmação Figma) — removida. Feedback de hover/press
 * agora só por cor/opacidade (🧩 inferido — Figma não define um eixo
 * `Hover` para este componente, só `Idle|On|Clicked|Disabled`; mantido por
 * necessidade real de affordance interativa, Regra 8, nunca apresentado
 * como Figma-confirmado, Regra 9).
 */
function PlusButton({
  style = "default",
  label = "Adicionar",
  className,
  ...props
}: PlusButtonProps) {
  return (
    <IconActionButton
      icon={PlusButtonGlyph}
      label={label}
      iconClassName="size-3"
      className={cn(STYLE_CLASSNAME[style], "disabled:opacity-20", className)}
      {...props}
    />
  )
}

export { PlusButton }
