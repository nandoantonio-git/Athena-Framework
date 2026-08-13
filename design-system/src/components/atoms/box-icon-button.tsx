import * as React from "react"

import { cn } from "@/lib/utils"
import type { IconGlyph } from "./icon-action-button"

export interface BoxIconButtonProps
  extends Omit<React.ComponentProps<"button">, "children"> {
  icon: IconGlyph
  /** Texto acessível — obrigatório porque o botão só renderiza um ícone. */
  label: string
  /** Eixo `Property 1` do Figma para o glifo "excluir" do toolbar — troca o par hover/clicked para a cor de perigo (Regra 3). */
  danger?: boolean
}

/**
 * atom/boxIconButton (`1431:20102`, Figma-confirmado) — "botoes do painel de
 * ações disponíveis no modo livre com nodos". 40px, cantos 10.4px, borda
 * glass (`effect-glass-white-05`), fundo `brand-secondary-light` em repouso.
 * `Property 1=Variant8, state=Idle` (`1431:20103`) tem descrição própria:
 * "botao de adição de um novo nodo" — o glifo de adição do toolbar.
 * `danger` cobre o par hover/clicked em `brand-feedback-danger-subtle`
 * (`#bc3426` a 35%, mapeado para `--destructive`) confirmado no glifo de
 * excluir; os demais glifos (expandir/redefinir) usam
 * `brand-secondary`/`brand-secondary-dark`. Reconciliado em uso real dentro
 * de `organism/OrganizeFreeModeCanvas` (US-016) — antes o toolbar duplicava
 * essa mesma anatomia inline.
 */
function BoxIconButton({
  icon: Icon,
  label,
  danger = false,
  className,
  disabled,
  ...props
}: BoxIconButtonProps) {
  return (
    <button
      type="button"
      data-slot="box-icon-button"
      aria-label={label}
      disabled={disabled}
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-[10.4px] border border-effect-glass-white-05 bg-brand-secondary-light text-white transition-colors",
        "motion-safe:active:scale-95",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50",
        "disabled:pointer-events-none disabled:opacity-40",
        danger
          ? "hover:bg-destructive/35 active:bg-destructive/35"
          : "hover:bg-brand-secondary active:bg-brand-secondary-dark",
        className
      )}
      {...props}
    >
      <Icon className="size-4" aria-hidden="true" />
    </button>
  )
}

export { BoxIconButton }
