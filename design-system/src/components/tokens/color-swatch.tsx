import * as React from "react"

import { cn } from "@/lib/utils"

export type ColorConfirmation = "figma" | "locked" | "inferred" | "conflict"

export interface ColorEntry {
  /** Token semântico (Regra 2), ex. `cor/marca/primária/teal-base`. */
  token: string
  /** Nome real da variável no Figma/CSS, ex. `var(--brand-primary-default)`. */
  variable: string
  /** Valor hex/rgba renderizável em CSS `background`. */
  value: string
  /** Papel/uso descrito na tabela original. */
  role: string
  confirmation: ColorConfirmation
  /** Nota curta opcional (ex. valor descontinuado, ressalva de nomenclatura). */
  note?: string
}

const CONFIRMATION_LABEL: Record<ColorConfirmation, string> = {
  figma: "✅ Figma-confirmado",
  locked: "🔒 Decisão travada",
  inferred: "🧩 Inferido",
  conflict: "⚠️ CONFLICT",
}

const CONFIRMATION_CLASS: Record<ColorConfirmation, string> = {
  figma: "bg-[color:var(--brand-feedback-success-default,#096)]/10 text-[color:var(--brand-feedback-success-default,#096)]",
  locked: "bg-brand-teal/10 text-brand-teal-dark",
  inferred: "bg-zinc-100 text-zinc-600",
  conflict: "bg-destructive/10 text-destructive",
}

/**
 * Swatch de token de cor — usado em `Tokens/Colors` (decisão humana
 * 2026-08-14: paleta deve ter visualização real, não só tabela de hex).
 * Puramente apresentacional: os dados (token/valor/papel/status) vêm de
 * `ColorPalette` abaixo, que espelha as tabelas já existentes no `.mdx`,
 * nenhum valor novo inventado aqui.
 */
function ColorSwatch({ token, variable, value, role, confirmation, note, className }: ColorEntry & { className?: string }) {
  return (
    <div
      data-slot="color-swatch"
      className={cn(
        "flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-3",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="h-14 w-full rounded-lg border border-black/5"
        style={{ background: value }}
      />
      <div className="flex flex-col gap-1.5">
        <code className="text-[0.6875rem] leading-tight break-all text-zinc-500">{token}</code>
        <code className="text-xs font-semibold text-zinc-900">{value}</code>
        <span
          className={cn(
            "w-fit rounded-full px-1.5 py-0.5 text-[0.625rem] font-medium whitespace-nowrap",
            CONFIRMATION_CLASS[confirmation]
          )}
        >
          {CONFIRMATION_LABEL[confirmation]}
        </span>
        <p className="text-xs text-zinc-600">{role}</p>
        <code className="text-[0.625rem] text-zinc-400">{variable}</code>
        {note ? <p className="text-[0.6875rem] text-zinc-400 italic">{note}</p> : null}
      </div>
    </div>
  )
}

export interface ColorPaletteProps {
  /** Opcional — a página de tokens já usa `##` do MDX como título da seção. */
  title?: string
  entries: ColorEntry[]
  className?: string
}

/** Grade de `ColorSwatch` agrupada por seção (Marca/Feedback/Neutros). */
function ColorPalette({ title, entries, className }: ColorPaletteProps) {
  return (
    <div data-slot="color-palette" className={cn("flex flex-col gap-3", className)}>
      {title ? <h3 className="text-sm font-semibold text-zinc-900">{title}</h3> : null}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {entries.map((entry) => (
          <ColorSwatch key={entry.token} {...entry} />
        ))}
      </div>
    </div>
  )
}

export { ColorSwatch, ColorPalette }
