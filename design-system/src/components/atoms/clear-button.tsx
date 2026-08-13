import * as React from "react"

import ClearButtonGlyph from "@/assets/icons/ClearButtonGlyph.svg?react"
import { cn } from "@/lib/utils"
import { IconActionButton, type IconActionButtonProps } from "./icon-action-button"

export interface ClearButtonProps
  extends Omit<IconActionButtonProps, "icon" | "label"> {
  /** Eixo `style` confirmado no Figma (`Default`|`Red`|`White`). */
  style?: "default" | "red" | "white"
  label?: string
}

const STYLE_CLASSNAME: Record<NonNullable<ClearButtonProps["style"]>, string> = {
  // Único dos 4 ícones-botão com pílula de fundo Figma-confirmada, e só
  // neste style (`Style=Default, State=Hover`/`ClickedFIlled` — Red/White
  // não têm estado Hover no Figma). Cores literais do Figma (Regra 3,
  // sem token semântico definido para `neutral-surface-ghost-map`).
  default: "text-zinc-500 hover:bg-[rgba(107,107,104,0.18)] hover:text-zinc-700 active:bg-[#c8dce3]",
  red: "text-destructive",
  white: "text-white",
}

/**
 * atom/ClearButton (`1421:17768`, Figma-confirmado) — "icone usado em
 * funções de cancelar" (ícone base "clear": cancel/delete/erase/exit/x).
 * `state` Figma-confirmado tem 2 valores a mais que os outros ícones-botão:
 * `Hover` nomeado à parte (aqui é o `:hover` nativo, sem prop dedicada) e
 * `ClickedFilled` — sem descrição própria no Figma sobre em que difere de
 * `Clicked` (gap, Regra 9: não inventado — ambos mapeiam para `:active`
 * aqui até confirmação). Glifo exportado do Figma via `download_assets`
 * (2026-08-11).
 *
 * Corrigido em auditoria US-026 (2026-08-11, Regra 11.4): a pílula de fundo
 * circular no hover/active (herdada de `IconActionButton`) era aplicada a
 * TODOS os `style` (`default`/`red`/`white`) com cores genéricas
 * (`zinc-100`/`zinc-200`) — mas o Figma só confirma essa pílula para
 * `style="default"` (`Hover`/`ClickedFIlled`, 28×28,
 * `rgba(107,107,104,0.18)`/`#c8dce3`); `Red` e `White` não têm estado
 * `Hover` no component set Figma. Corrigido: pílula restrita a `default`,
 * cor alinhada ao token literal do Figma; `red`/`white` ficam só com troca
 * de cor do glifo (sem fundo inventado).
 */
function ClearButton({
  style = "default",
  label = "Cancelar",
  className,
  ...props
}: ClearButtonProps) {
  return (
    <IconActionButton
      icon={ClearButtonGlyph}
      label={label}
      className={cn(STYLE_CLASSNAME[style], className)}
      {...props}
    />
  )
}

export { ClearButton }
