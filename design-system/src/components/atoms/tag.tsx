import * as React from "react"

import { cn } from "@/lib/utils"

export type TagVariant = "primary" | "primary-dark" | "secondary" | "file-name"
export type TagState = "default" | "hover"

export interface TagProps extends React.ComponentProps<"span"> {
  variant?: TagVariant
  state?: TagState
  label?: string
}

const VARIANT_STYLES: Record<TagVariant, string> = {
  primary: "bg-brand-teal text-white",
  "primary-dark": "bg-brand-teal-dark text-white",
  // cor/categoria/acesso-rápido (Regra 3) — mesmo par claro/escuro do rosa
  // já usado em molecule/StorageBar para a categoria "Acesso rápido".
  secondary: "bg-brand-pink-light text-white",
  // neutral-surface-subtle (#eaeaea) — sem token semântico definido (Regra
  // 3, tema neutro suspenso); literal como em atom/firstUploadSymbol.
  "file-name": "bg-[#eaeaea] text-zinc-700",
}

const HOVER_BACKGROUND: Partial<Record<TagVariant, React.CSSProperties>> = {
  primary: {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.14), rgba(0,0,0,0.14)), linear-gradient(#007e96, #007e96)",
  },
  "primary-dark": {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.14), rgba(0,0,0,0.14)), linear-gradient(#1a5e6e, #1a5e6e)",
  },
  "file-name": {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.14), rgba(0,0,0,0.14)), linear-gradient(#eaeaea, #eaeaea)",
  },
}

/**
 * atom/Tag (`1421:17929`, Figma-confirmado) — "ponto que de acordo com sua
 * cor demonstra a qual rótulo faz parte. no kandrive a segmentação é feita
 * por cor+label". Pílula compacta cor+texto. Sem `label`, colapsa para um
 * chip só de cor (é o estado default do Figma, `rotulo=""` — usado como
 * amostra de paleta em `atom/TagColor`/seletores de cor).
 *
 * Tipografia: `Type/Tag` do Figma é 8px (`get_design_context`,
 * `text-[8px]`, 2026-08-12 US-026), abaixo do piso de ~11px que a Regra 4
 * exige mesmo para microtexto decorativo. Reconciliado nesta auditoria para
 * `0.6875rem` (11px) — mesma correção já registrada em `docs/conflicts.md`
 * ("Type/Tag corrigido de 8px para 11px") que havia regredido para 8px no
 * código; corrigido de novo aqui.
 *
 * 4 variantes de cor Figma-confirmadas (`style`) × 2 estados
 * (`Default`/`Hover`). `state="hover"` existe para documentação visual
 * capturável por screenshot; em uso real, o mesmo tratamento é aplicado em
 * `:hover`.
 */
function Tag({
  variant = "primary",
  state = "default",
  label,
  className,
  style,
  ...props
}: TagProps) {
  const isHover = state === "hover"
  const hoverStyle = isHover ? HOVER_BACKGROUND[variant] : undefined

  return (
    <span
      data-slot="tag"
      data-variant={variant}
      data-state={state}
      className={cn(
        "inline-flex items-center gap-2 rounded-md px-2 py-1 text-[0.6875rem] leading-none tracking-[0.006px] whitespace-nowrap transition-colors",
        VARIANT_STYLES[variant],
        isHover && variant === "secondary" && "bg-brand-pink-dark",
        state === "default" && variant === "primary" && "hover:bg-brand-teal-dark",
        state === "default" && variant === "secondary" && "hover:bg-brand-pink-dark",
        state === "default" && (variant === "primary-dark" || variant === "file-name") && "hover:brightness-90",
        className
      )}
      style={hoverStyle ? { ...hoverStyle, ...style } : style}
      {...props}
    >
      {label}
    </span>
  )
}

export { Tag }
