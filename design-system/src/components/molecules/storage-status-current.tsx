import * as React from "react"

import { cn } from "@/lib/utils"

export interface StorageStatusCurrentProps extends React.ComponentProps<"div"> {
  /** Ex.: `"40GB"` (Figma-confirmado, literal no nó). */
  usedAmount: string
  /** Ex.: `"100GB"` — renderizado como "de 100GB". */
  totalAmount: string
  /** Percentual usado, 0–100 — controla a barra e a legenda "X%". */
  percent: number
  /** Abreviação de escopo ao lado do total — Figma-confirmado como `"AC"` (Acesso rápido). */
  scopeAbbr?: string
  onBuySpace?: () => void
}

/**
 * molecule/StorageStatus/Current (`1439:17044`) — Figma-confirmado:
 * "componente que possibilita o usuário visualizar espaço utilizado em
 * curto prazo. há também botão comprar espaço- abre página de pagamento."
 *
 * Barra de progresso local em rosa (`brand-pink-light`) — o Figma confirma
 * preenchimento `var(--brand/theme/pink/light,#e8476a)` para este widget
 * (categoria "Acesso rápido", Regra 3). Corrigido em 2026-08-11 (auditoria
 * Regra 11, US-026): o átomo compartilhado `StorageBar` (`storage-bar.tsx`,
 * `tier="quick-access"`) tinha o mesmo tom errado (`brand-pink-dark`) e foi
 * corrigido para `brand-pink-light` — a barra local aqui já usava o tom
 * certo e permanece por composição própria (widget "irmão" autônomo, não
 * reutiliza `<StorageBar>` por design, ver `StorageStatusCurrent.mdx`).
 */
function StorageStatusCurrent({
  usedAmount,
  totalAmount,
  percent,
  scopeAbbr = "AC",
  onBuySpace,
  className,
  ...props
}: StorageStatusCurrentProps) {
  const clamped = Math.min(100, Math.max(0, percent))
  return (
    <div
      data-slot="storage-status-current"
      className={cn("flex w-[468px] max-w-full flex-col items-start gap-1 py-4", className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className="text-base text-zinc-950">Armazenamento usado:</span>
        <span className="text-[1.5625rem] font-medium text-zinc-950">{usedAmount}</span>
        <span className="text-xl text-zinc-950">de {totalAmount}</span>
        <span className="text-[0.625rem] font-bold text-zinc-500">{scopeAbbr}</span>
      </div>

      <button
        type="button"
        onClick={onBuySpace}
        className="rounded-md bg-brand-teal px-4 py-1 text-[0.625rem] text-white transition-colors hover:bg-brand-teal/90 motion-safe:active:scale-95"
      >
        Comprar espaço
      </button>

      <div
        role="progressbar"
        aria-label="Armazenamento usado"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-1 w-full overflow-hidden rounded-full bg-zinc-500/20"
      >
        <div className="h-full rounded-full bg-brand-pink-light transition-[width]" style={{ width: `${clamped}%` }} />
      </div>

      <div className="flex items-center gap-1.5 py-1">
        <span aria-hidden="true" className="size-[7px] shrink-0 rounded-full bg-brand-pink-light" />
        <span className="text-[0.625rem] text-brand-secondary-light">{clamped}%</span>
      </div>
    </div>
  )
}

export { StorageStatusCurrent }
