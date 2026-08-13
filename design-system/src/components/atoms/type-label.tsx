import * as React from "react"

import { cn } from "@/lib/utils"

export type FileTypeKind = "image" | "document" | "video" | "other"
export type ScopeKind = "quick-access" | "long-term" | "global" | "default"
export type TypeLabelState = "idle" | "hover" | "selected" | "selected-hover" | "selected-pressed"

const FILE_TYPE_LABEL: Record<FileTypeKind, string> = {
  image: "Image",
  document: "Documentos",
  video: "Videos",
  other: "Outros",
}

export interface FileTypeLabelProps
  extends Omit<React.ComponentProps<"span">, "children"> {
  kind: FileTypeKind
  /** Rótulo customizado — default é o texto Figma-confirmado por `kind`. */
  label?: string
  /**
   * `Style=Light` (Figma-confirmado): texto branco sem fundo opaco, pensado
   * para sobrepor uma miniatura/imagem escura. Default `false` (`Style=Dark`
   * — pílula neutra sobre superfície clara), único tratamento com contraste
   * suficiente em contexto de card/lista comum.
   */
  overlay?: boolean
  /** `State=Selected` (Figma-confirmado). */
  selected?: boolean
  /** Estado estático para auditoria Storybook; consumidores podem continuar usando `selected`. */
  state?: Extract<TypeLabelState, "idle" | "selected">
}

const FILE_TYPE_DOT_CLASS: Record<FileTypeKind, string> = {
  image: "bg-brand-teal",
  document: "bg-brand-teal-dark",
  video: "bg-brand-pink-dark",
  other: "bg-brand-pink-light",
}

/**
 * `atom/badge/TypeLabel` (`1421:18415`), família `Type=Image|Document|Video|Other` —
 * etiqueta de tipo de arquivo (ponto de cor + rótulo). Usada em
 * `organism/PreviewPane` (lista de etiquetas), na legenda de
 * `molecule/StorageStatus` (segmentação da barra por tipo de arquivo) e nas
 * linhas de `molecule/Label` (Regra 11, US-024).
 *
 * Cor do ponto Figma-confirmada em 2026-08-11 via `get_design_context` no
 * node `1421:18687` (`molecule/Label`, mesmo component ID `1421:18415`
 * referenciado nas hints de resposta): `image`→`#007e96` (`brand-teal`),
 * `document`→`#1a5e6e` (`brand-teal-dark`), `video`→`#b5254a`
 * (`brand-pink-dark`).
 *
 * Reconciliação em 2026-08-12 (US-026, auditoria de ponto-fixo): a instância
 * `type="Other"` também EXISTE no node real (asset `Ellipse 17`, achado
 * anterior de "sem instância observada" estava incorreto/desatualizado) —
 * `fill=#e8476a`, ou seja o mesmo token `brand-pink-light` já usado em
 * `atom/Tag` variant="secondary". Corrigido de `bg-zinc-400` (neutro
 * inventado) para `bg-brand-pink-light` (Figma-confirmado, Regra 9).
 *
 * `video`→`brand-pink-dark` e agora também `other`→`brand-pink-light`
 * reusam os mesmos hexs que a Regra 3 reserva à categoria semântica "Acesso
 * rápido" — registrado como achado em `docs/conflicts.md`, não resolvido
 * aqui (Regra 9): a cor é implementada literal porque é o que o Figma
 * mostra, a ambiguidade semântica fica para decisão humana.
 */
function FileTypeLabel({
  kind,
  label,
  overlay = false,
  selected = false,
  state,
  className,
  ...props
}: FileTypeLabelProps) {
  const isSelected = state ? state === "selected" : selected

  return (
    <span
      data-slot="type-label"
      data-kind={kind}
      data-selected={isSelected || undefined}
      className={cn(
        "inline-flex items-center gap-1.5 py-0.5 text-[0.625rem] tracking-[0.012px]",
        overlay
          ? cn("rounded-lg px-1 text-white", isSelected && "rounded-md bg-zinc-500/20 px-1")
          : "rounded-md bg-zinc-500/20 px-1 text-brand-secondary-light",
        className
      )}
      {...props}
    >
      <span aria-hidden="true" className={cn("size-[7px] shrink-0 rounded-full", FILE_TYPE_DOT_CLASS[kind])} />
      {label ?? FILE_TYPE_LABEL[kind]}
    </span>
  )
}

export interface ScopeTypeLabelProps
  extends Omit<React.ComponentProps<"button">, "children"> {
  kind: ScopeKind
  label: string
  /** `State=Selected*` (Figma-confirmado) — chip ativo do seletor de escopo. */
  active?: boolean
  /** Estado estático Figma-confirmado para documentação/auditoria visual. */
  state?: TypeLabelState
}

const SCOPE_SELECTED_CLASSES: Record<ScopeKind, Record<Extract<TypeLabelState, "selected" | "selected-hover" | "selected-pressed">, string>> = {
  "quick-access": {
    selected: "bg-brand-pink-light text-white active:bg-brand-pink-dark",
    "selected-hover": "bg-brand-pink-dark text-white",
    "selected-pressed": "bg-[color-mix(in_srgb,var(--brand-pink-dark),black_45%)] text-white",
  },
  "long-term": {
    selected: "bg-brand-teal-dark text-white",
    "selected-hover": "bg-[color-mix(in_srgb,var(--brand-teal-dark),black_14%)] text-white",
    "selected-pressed": "bg-[color-mix(in_srgb,var(--brand-teal-dark),black_50%)] text-white",
  },
  global: {
    selected: "bg-brand-teal-light text-zinc-700",
    "selected-hover": "bg-[color-mix(in_srgb,var(--brand-teal-light),var(--color-zinc-500)_20%)] text-zinc-700",
    "selected-pressed": "bg-[color-mix(in_srgb,var(--brand-teal-light),black_14%)] text-zinc-700",
  },
  default: {
    selected: "bg-brand-teal text-white",
    "selected-hover": "bg-[color-mix(in_srgb,var(--brand-teal),black_14%)] text-white",
    "selected-pressed": "bg-[color-mix(in_srgb,var(--brand-teal),black_45%)] text-white",
  },
}

/**
 * `atom/badge/TypeLabel`, família `Type=Tag|Tag_Corrente|Tag_LongoPrazo|Tag_Global|DefaultTag` —
 * chip selecionável usado como seletor de escopo no cabeçalho de
 * `molecule/StorageStatus` (`Global`/`Acesso rápido`/`Longo prazo`). Estado
 * `active` preenche com a cor da categoria (Regra 3: rosa = "Acesso
 * rápido"); inativo fica outline neutro e clicável para trocar de escopo.
 */
function ScopeTypeLabel({ kind, label, active = false, state, className, ...props }: ScopeTypeLabelProps) {
  const resolvedState: TypeLabelState = state ?? (active ? "selected" : "idle")
  const selectedState =
    resolvedState === "selected" || resolvedState === "selected-hover" || resolvedState === "selected-pressed"
      ? resolvedState
      : null
  const isDefaultIdle = kind === "default" && !selectedState

  return (
    <button
      type="button"
      data-slot="type-label"
      data-kind={kind}
      data-state={resolvedState}
      data-active={Boolean(selectedState) || undefined}
      className={cn(
        "inline-flex items-center justify-center px-2 py-0.5 text-[0.625rem] transition-colors",
        selectedState
          ? cn("rounded-md", SCOPE_SELECTED_CLASSES[kind][selectedState])
          : isDefaultIdle
            ? "rounded-xl text-zinc-700"
            : cn(
                "cursor-pointer rounded-md border border-zinc-200 text-zinc-900",
                resolvedState === "hover" ? "bg-zinc-500/20" : "bg-zinc-100 hover:bg-zinc-200"
              ),
        className
      )}
      {...props}
    >
      {label}
    </button>
  )
}

/**
 * `Type=Tag, Style=Alert` (Figma-confirmado) — pílula de alerta, cor
 * `var(--brand-feedback-danger-default,#bc3426)` (mesmo token de
 * `atom/PushButton isDestructive`, Regra 3).
 */
function DangerTypeLabel({
  label,
  className,
  ...props
}: Omit<React.ComponentProps<"span">, "children"> & { label: string }) {
  return (
    <span
      data-slot="type-label"
      data-kind="danger"
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-destructive px-2 py-0.5 text-[0.625rem] text-white",
        className
      )}
      {...props}
    >
      {label}
    </span>
  )
}

export { FileTypeLabel, ScopeTypeLabel, DangerTypeLabel, FILE_TYPE_LABEL }
