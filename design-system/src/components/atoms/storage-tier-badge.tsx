import * as React from "react"

import { cn } from "@/lib/utils"

const TIER_LABEL = {
  current: "Acesso rápido",
  "long term": "Longo prazo",
} as const

export type StorageTier = keyof typeof TIER_LABEL

export interface StorageTierBadgeProps
  extends Omit<React.ComponentProps<"span">, "children"> {
  tier: StorageTier
}

/**
 * atom/StorageTierBadge (`1457:21014`) — Figma-confirmado, 2 variantes
 * (`tier=current` / `tier=long term`). Escopo confirmado pelo usuário:
 * rótulo de item individual (ex.: linha de arquivo em
 * `organism/cleanSpaceStorage`), não navegação/filtro sistêmico — a
 * segmentação "guardado"/"corrente" continua resolvida por diretório
 * (Regra 6, AGENTS.md).
 *
 * `font-geist` explícito: o label deste componente é Figma-confirmado como
 * `Geist:Medium` (exceção pontual, não a fonte padrão do sistema — Regra 4
 * continua Figtree pra tudo mais; ver `--font-geist` em `index.css`).
 *
 * `w-[84px]` fixo (Figma-confirmado, ambas as 2 variantes têm exatamente a
 * mesma largura de caixa) — corrigido em 2026-08-12 (US-026, 3ª passada):
 * sem largura fixa o badge colapsava ao conteúdo (`Acesso rápido` ~87px,
 * `Longo prazo` ~79px medidos via screenshot), quebrando o alinhamento
 * confirmado no Figma quando os dois tiers aparecem lado a lado/empilhados
 * (ex.: lista de itens em `organism/cleanSpaceStorage`).
 */
function StorageTierBadge({ tier, className, ...props }: StorageTierBadgeProps) {
  return (
    <span
      data-slot="storage-tier-badge"
      className={cn(
        "inline-flex h-[21px] w-[84px] shrink-0 items-center justify-center rounded-[8.4px] border border-zinc-200 px-[9px] py-[3px] font-geist text-[0.625rem] leading-[0.9375rem] font-medium whitespace-nowrap text-zinc-950",
        className
      )}
      {...props}
    >
      {TIER_LABEL[tier]}
    </span>
  )
}

export { StorageTierBadge, TIER_LABEL }
