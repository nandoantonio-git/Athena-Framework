import * as React from "react"

import { cn } from "@/lib/utils"
import { StorageBar } from "@/components/molecules/storage-bar"
import { PushButton } from "@/components/atoms/push-button"
import { SidebarToggle } from "@/components/organisms/sidebar-toggle"

export interface StorageSidebarProps extends React.ComponentProps<"div"> {
  expanded?: boolean
  onToggle?: () => void
  quickAccessValue: number
  quickAccessLabel: string
  longTermValue: number
  longTermLabel: string
  /**
   * Rótulo do botão de gatilho para o fluxo de liberação de espaço
   * (`organism/cleanSpaceStorage`, nó `1439:16908`). Default "Liberar
   * Espaço" — termo aprovado (Regra 5) para o contexto de Armazenamento/
   * Configurações de Plano, onde este componente é usado de forma
   * standalone. `organism/Sidebar` sobrescreve para "Gerir Espaço" ao
   * embutir este componente no painel persistente (contexto diferente,
   * mesmo conceito — ver docs/conflicts.md, entrada resolvida em
   * 2026-08-10).
   */
  manageSpaceLabel?: string
  onManageSpace?: () => void
  onBuySpace?: () => void
}

/**
 * organism/storage-sidebar (`1421:19167`) — Figma-confirmado: "componente
 * da sidebar onde possibilita visualizar o status de curto prazo(corrente)
 * ou longo prazo. botoes para página de gerir espaço ou para dar upgrade no
 * plano de uso." Compõe `molecule/StorageBar` (US-005) + `PushButton`
 * (`variant="neutral"` para o botão de espaço, `variant="primary"` para
 * "Comprar Espaço") + `organism/sidebar-toggle`.
 */
function StorageSidebar({
  expanded = true,
  onToggle,
  quickAccessValue,
  quickAccessLabel,
  longTermValue,
  longTermLabel,
  manageSpaceLabel = "Liberar Espaço",
  onManageSpace,
  onBuySpace,
  className,
  ...props
}: StorageSidebarProps) {
  return (
    <div data-slot="storage-sidebar" className={cn("flex w-full flex-col gap-3", className)} {...props}>
      <SidebarToggle expanded={expanded} onToggle={onToggle} />
      {expanded ? (
        <>
          <div className="flex flex-col gap-3 px-2">
            <div className="flex flex-col gap-1">
              <span className="w-fit rounded-md bg-brand-teal px-2 py-0.5 text-xs text-brand-teal-foreground">
                Acesso rápido
              </span>
              <StorageBar tier="quick-access" value={quickAccessValue} />
              <span className="text-xs text-zinc-700">{quickAccessLabel}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="w-fit rounded-md bg-brand-teal-dark px-2 py-0.5 text-xs text-brand-teal-foreground">
                Longo prazo
              </span>
              <StorageBar tier="long-term" value={longTermValue} />
              <span className="text-xs text-zinc-700">{longTermLabel}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-2">
            <PushButton variant="neutral" className="h-8 flex-1 px-3 text-xs whitespace-nowrap" onClick={onManageSpace}>
              {manageSpaceLabel}
            </PushButton>
            <PushButton variant="primary" className="h-8 flex-1 px-3 text-xs whitespace-nowrap" onClick={onBuySpace}>
              Comprar Espaço
            </PushButton>
          </div>
        </>
      ) : null}
    </div>
  )
}

export { StorageSidebar }
