import * as React from "react"
import { FolderPlus, Upload, FolderUp, FilePen, XCircle, Trash2, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export type DropdownMenuVariant = "sidebar" | "template-options"

interface MenuEntry {
  label: string
  icon: LucideIcon
  danger?: boolean
}

const SIDEBAR_ITEMS: MenuEntry[] = [
  { label: "Nova pasta", icon: FolderPlus },
  { label: "Upload de arquivo", icon: Upload },
  { label: "Upload de pasta", icon: FolderUp },
]

const TEMPLATE_OPTIONS_ITEMS: MenuEntry[] = [
  { label: "Editar organização", icon: FilePen },
  { label: "Desfazer organização", icon: XCircle },
  { label: "Excluir organização", icon: Trash2 },
]

export interface DropdownMenuProps extends React.ComponentProps<"div"> {
  variant?: DropdownMenuVariant
  onItemSelect?: (label: string) => void
}

/**
 * organism/dropdownMenu (`1440:23662`/`1440:23768`) — Figma-confirmado:
 * "DropList com opções de açãoes contextuais". Duas variantes
 * Figma-confirmadas: `property1=Sidebar` (Nova pasta/Upload de
 * arquivo/Upload de pasta — menu de criação) e
 * `property1=templateOptopnsList` (Editar/Desfazer/Excluir organização —
 * menu de gestão de template, usado dentro de `organism/drop/NewTag`).
 *
 * **🔧 Corrigido em 2026-08-11 (Regra 11, auditoria US-026, passe 2)**:
 * releitura de `get_design_context` confirma só 1 `Separator` por
 * variante (entre o 1º e o 2º item — nenhum separador entre o 2º e o
 * 3º), não 2 como a implementação anterior renderizava (`index > 0`).
 *
 * **🔧 Corrigido em 2026-08-12 (Regra 11, auditoria US-026, passe 3)**: a
 * cor "destrutiva" do item "Excluir organização" foi removida. O passe 2
 * havia trocado o hex descontinuado `#ac3a2e` pelo token `--destructive`
 * (`#bc3426`) por analogia com `PushButton isDestructive` — mas essa era
 * uma extrapolação, não uma leitura literal do nó. A releitura fresca de
 * `get_design_context` para os nós `1440:23662`/`1440:23768` confirma que
 * o texto do item usa `var(--neutral-text-secondary, #3f3f46)`, a mesma
 * cor neutra dos outros 2 itens — sem cor de destrutivo neste menu
 * específico (diferente de `atom/PushButton isDestructive`, que usa
 * `--brand-feedback-danger-default` de fato). Corrigido para neutro.
 */
function DropdownMenu({ variant = "sidebar", onItemSelect, className, ...props }: DropdownMenuProps) {
  const items = variant === "sidebar" ? SIDEBAR_ITEMS : TEMPLATE_OPTIONS_ITEMS
  return (
    <div
      data-slot="dropdown-menu"
      role="menu"
      className={cn(
        "flex flex-col overflow-hidden rounded-md bg-effect-glass-white-70 py-1 shadow-lg backdrop-blur-md",
        variant === "sidebar" ? "w-[191px]" : "w-[217px]",
        className
      )}
      {...props}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index === 1 ? <div className="h-px w-full bg-zinc-200" /> : null}
          <button
            type="button"
            role="menuitem"
            onClick={() => onItemSelect?.(item.label)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 text-left text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-100",
              item.danger && "text-destructive"
            )}
          >
            <item.icon aria-hidden="true" className="size-4" />
            {item.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  )
}

export { DropdownMenu }
