import * as React from "react"
import { User, Users, Clock, Star, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { CloseButton } from "@/components/atoms/close-button"
import { PushButton } from "@/components/atoms/push-button"
import { FileTypeLabel } from "@/components/atoms/type-label"
import { ArchiveBrowserModalSearch } from "@/components/molecules/archive-browser-modal-search"
import type { SidebarPage } from "@/components/organisms/sidebar"

const MINI_NAV: { page: SidebarPage; icon: LucideIcon }[] = [
  { page: "Pessoal", icon: User },
  { page: "Compartilhados", icon: Users },
  { page: "Recentes", icon: Clock },
  { page: "Favoritos", icon: Star },
]

export interface ArchiveBrowserModalFile {
  name: string
  meta: string
}

export interface ArchiveBrowserModalProps extends React.ComponentProps<"div"> {
  breadcrumb: string[]
  files: ArchiveBrowserModalFile[]
  selectedCount: number
  savingsLabel: string
  onCancel?: () => void
  onAdd?: () => void
}

/**
 * organism/ArchiveBrowserModal (`1439:16909`) — Figma-confirmado: "janela
 * de seleção de arquivos que será guardados(glacier/long term archive)".
 * Título verbatim "Adicionar arquivos", ação primária "Adicionar N
 * arquivos" (`PushButton variant="primary"`). Reusa uma versão compacta dos
 * itens de navegação de `organism/Sidebar` (mesmos 4 primeiros rótulos
 * Figma-confirmados) — não a `Sidebar` completa, pois esta instância não
 * inclui o painel de armazenamento (composição menor, confirmada no nó
 * `1421:20073`). Fluxo ao vivo real de "Guardar" — verificado sem termo
 * proibido. Fundo usa Liquid Glass — ver Tokens/Materials (Regra 10).
 *
 * Reconciliado em 2026-08-11 (US-024, Regra 11): a coluna direita
 * (busca + breadcrumb + painel de arquivos) usava markup aproximado
 * (`lucide-react` `FileIcon`, camada única de fundo). Substituída por
 * `molecule/ArchiveBrowserModal/Search` (`1485:21074`), que já compõe
 * `molecule/ArchiveBrowserModal/ListItem` (`1421:20896`) — anatomia real
 * confirmada via `get_design_context`, incluindo a moldura de 2 camadas
 * (`drop-shadow` externo + `rounded-xl` interno) que a aproximação
 * anterior não tinha.
 */
function ArchiveBrowserModal({
  breadcrumb,
  files,
  selectedCount,
  savingsLabel,
  onCancel,
  onAdd,
  className,
  ...props
}: ArchiveBrowserModalProps) {
  return (
    <div
      data-slot="archive-browser-modal"
      role="dialog"
      aria-label="Adicionar arquivos"
      className={cn(
        "flex h-[544px] w-[760px] flex-col gap-4 overflow-hidden rounded-[32px] bg-effect-glass-white-70 px-6 pt-6 pb-5 shadow-[0px_8px_20px_rgba(0,0,0,0.12)]",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-medium text-zinc-900">Adicionar arquivos</h2>
          <p className="text-base text-zinc-700">Adicione os arquivos que deseja guardar em longo prazo</p>
        </div>
        <CloseButton size="md" onClick={onCancel} />
      </div>
      <div className="flex h-[361px] gap-5">
        <nav className="h-full w-60 shrink-0 rounded-2xl bg-effect-glass-white-70 px-4 pt-8 pb-6 shadow-[0px_8px_20px_rgba(0,0,0,0.12)]">
          <ul className="flex flex-col gap-1">
            {MINI_NAV.map(({ page, icon: ItemIcon }) => (
              <li
                key={page}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-2 py-1 text-base font-medium text-zinc-800",
                  page === "Pessoal" ? "bg-zinc-100" : "opacity-50"
                )}
              >
                <ItemIcon aria-hidden="true" className={cn("size-4", page === "Pessoal" && "text-brand-teal")} />
                {page}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-1 border-t border-zinc-200 pt-3">
            <span className="text-xs font-medium text-zinc-500">Etiquetas</span>
            <FileTypeLabel kind="image" className="px-2" />
          </div>
        </nav>
        <ArchiveBrowserModalSearch
          className="w-[452px] shrink-0"
          breadcrumb={breadcrumb}
          files={files.map((file) => ({ fileName: file.name, meta: file.meta }))}
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-800">
          {selectedCount} selecionados · economia de {savingsLabel}
        </p>
        <div className="flex gap-3">
          <PushButton variant="neutral" className="h-8 px-4 text-xs" onClick={onCancel}>
            Cancelar
          </PushButton>
          <PushButton variant="primary" className="h-8 px-4 text-xs" onClick={onAdd}>
            Adicionar {selectedCount} arquivos
          </PushButton>
        </div>
      </div>
    </div>
  )
}

export { ArchiveBrowserModal }
