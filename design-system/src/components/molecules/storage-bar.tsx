import * as React from "react"

import { cn } from "@/lib/utils"

export type StorageTier = "quick-access" | "long-term"

export interface StorageBarProps extends Omit<React.ComponentProps<"div">, "children"> {
  /** Tier de armazenamento — controla a cor de preenchimento (Figma-confirmado: Style=Primary\|Primary Dark). */
  tier: StorageTier
  /** Percentual de uso, 0–100 (Figma-confirmado: "Variantes: type e value (0–100)"). */
  value: number
}

/**
 * molecule/StorageBar (`1421:17904`) — Figma-confirmado: "Barra de progresso
 * do armazenamento. Mostra uso por tier (acesso rápido / longo prazo)."
 *
 * Cor corrigida em 2026-08-10: releitura do Figma (nó `1421:17907`, o único
 * `style` confirmado no component set é `Expanded`) mostra os mesmos tokens
 * de marca usados em `StorageBarExpanded` — rosa (`Brand/Theme/Pink`) para
 * "Acesso rápido", teal (`brand-primary`) para "Longo prazo". Corrigido pra
 * consistência entre as duas variantes (antes usava teal pros dois tiers).
 *
 * Tom corrigido em 2026-08-11 (auditoria Regra 11, US-026): `get_design_context`
 * real no nó `1421:17904` (todos os estados `Style=Primary`/`Empty`,
 * `HalfFull`, `Full`) confirma o preenchimento como
 * `var(--brand/theme/pink/light,#e8476a)` (`brand-pink-light`) — a
 * implementação anterior usava `brand-pink-dark` (`#b5254a`, tom escuro
 * demais, só usado num dos 4 segmentos de `Style=Expanded`, não na barra
 * única `tier="quick-access"`). Corrigido para bater com o hex Figma real.
 */
function StorageBar({ tier, value, className, ...props }: StorageBarProps) {
  const clamped = Math.min(100, Math.max(0, value))
  return (
    <div
      data-slot="storage-bar"
      data-tier={tier}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "h-1 w-full max-w-sm overflow-hidden rounded-full bg-zinc-500/20",
        className
      )}
      {...props}
    >
      <div
        data-slot="storage-bar-fill"
        className={cn(
          "h-full rounded-full transition-[width]",
          tier === "quick-access" ? "bg-brand-pink-light" : "bg-brand-teal-dark"
        )}
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
}

export interface StorageBarSegment {
  /** Tier do segmento — controla a família de cor (teal para "long-term", rosa para "quick-access"). */
  tier: StorageTier
  /** Percentual do segmento, 0–100. */
  value: number
}

export interface StorageBarExpandedProps extends Omit<React.ComponentProps<"div">, "children"> {
  /**
   * Segmentos por tipo de arquivo (Figma-confirmado: `Style=Expanded`, nó
   * `1421:17907`, "barras de armazenamento global, segmentada por tipos de
   * arquivos" — 4 segmentos na amostra real do Figma, 2 tons de teal e 2 de
   * rosa). Múltiplos segmentos podem compartilhar o mesmo `tier`; cada
   * ocorrência usa um tom diferente dessa família (base, depois escuro).
   */
  segments: StorageBarSegment[]
}

/**
 * Ordem de tom por ocorrência dentro da mesma família. `quick-access` usa
 * escuro→claro (não claro→escuro como `long-term`) para bater com
 * `FILE_TYPE_DOT_CLASS` (`type-label.tsx`, Figma-confirmado em `1421:18687`):
 * `video`→`brand-pink-dark` aparece antes de `other`→`brand-pink-light` na
 * ordem real de segmentos de `molecule/StorageStatus` (Regra 11, US-026 —
 * achado: a ordem simétrica anterior (claro→escuro nas 2 famílias) invertia
 * a cor da barra em relação ao ponto da legenda logo abaixo dela).
 */
const TIER_SHADES: Record<StorageTier, readonly [string, string]> = {
  "quick-access": ["bg-brand-pink-dark", "bg-brand-pink-light"],
  "long-term": ["bg-brand-teal", "bg-brand-teal-dark"],
}

/**
 * `Style=Expanded` de `molecule/StorageBar` — Figma-confirmado
 * (`get_design_context`, nó `1421:17907`): 4 segmentos coloridos lado a
 * lado, `Brand/Theme/Pink/Dark`+`/Light` para os segmentos de "Acesso
 * rápido" (decisão humana 2026-08-10, Regra 3 atualizada — rosa deixa de
 * ser "só branding") e `--brand-primary-default`/`--brand-primary-dark`
 * (teal) para os de "Longo prazo".
 */
function StorageBarExpanded({ segments, className, ...props }: StorageBarExpandedProps) {
  const shadeIndex: Partial<Record<StorageTier, number>> = {}
  return (
    <div
      data-slot="storage-bar-expanded"
      role="img"
      aria-label="Uso de armazenamento por tipo de arquivo"
      className={cn(
        "flex h-1 w-full max-w-sm overflow-hidden rounded-full bg-zinc-500/20",
        className
      )}
      {...props}
    >
      {segments.map((segment, index) => {
        const occurrence = shadeIndex[segment.tier] ?? 0
        shadeIndex[segment.tier] = occurrence + 1
        const clamped = Math.min(100, Math.max(0, segment.value))
        return (
          <div
            key={index}
            data-slot="storage-bar-expanded-segment"
            data-tier={segment.tier}
            className={cn("h-full transition-[width]", TIER_SHADES[segment.tier][Math.min(occurrence, 1)])}
            style={{ width: `${clamped}%` }}
          />
        )
      })}
    </div>
  )
}

export { StorageBar, StorageBarExpanded }
