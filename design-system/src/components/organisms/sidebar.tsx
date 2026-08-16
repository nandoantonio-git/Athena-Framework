import * as React from "react"
import {
  User,
  Users,
  Clock,
  Star,
  Archive,
  Trash2,
  PanelLeft,
  Plus,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { PushButton } from "@/components/atoms/push-button"
import { StorageSidebar, type StorageSidebarProps } from "@/components/organisms/storage-sidebar"
import { SidebarTagsItem } from "@/components/atoms/sidebar-tags-item"

export type SidebarPage =
  | "Pessoal"
  | "Compartilhados"
  | "Recentes"
  | "Favoritos"
  | "Guardados"
  | "Lixeira"

const NAV_ITEMS: { page: SidebarPage; icon: LucideIcon }[] = [
  { page: "Pessoal", icon: User },
  { page: "Compartilhados", icon: Users },
  { page: "Recentes", icon: Clock },
  { page: "Favoritos", icon: Star },
  { page: "Guardados", icon: Archive },
  { page: "Lixeira", icon: Trash2 },
]

export interface SidebarProps extends React.ComponentProps<"nav"> {
  activePage?: SidebarPage
  onNavigate?: (page: SidebarPage) => void
  tags?: string[]
  activeTag?: string
  onTagSelect?: (tag: string) => void
  storageProps: Omit<StorageSidebarProps, "className" | "manageSpaceLabel">
  onCollapse?: () => void
  onAdd?: () => void
}

/**
 * organism/Sidebar (`1421:17946`) — Figma-confirmado: "sidebar contextual...
 * possibilita navegar entra as paginas: pessoal, compartilhado, recente,
 * favorito, guardados(longo prazo) e lixeira. contem a aba armazenamento,
 * que possibilita gerir armazenamento." Composta por itens de navegação
 * fixos (nomes Figma-confirmados) + `organism/storage-sidebar` (US-006).
 *
 * Regra 5 (decisão humana, resolvida em 2026-08-10 — ver docs/conflicts.md):
 * o painel embutido/persistente da Sidebar usa sempre "Gerir Espaço",
 * independentemente do rótulo default de `organism/storage-sidebar`
 * (que é "Liberar Espaço", termo do contexto de Armazenamento/Config. de
 * Plano) — por isso `manageSpaceLabel` é forçado aqui e excluído de
 * `storageProps`, nunca configurável por quem compõe este componente.
 *
 * ⚠️ Corrigido em 2026-08-11 após achado do usuário — auditoria anterior
 * não seguia a Regra 11: faltava o ícone superior de minimizar/colapsar a
 * sidebar. Um `get_screenshot` fresco do node real `Size=MD, Pages=Default`
 * (`1421:17947`) confirma um botão no canto superior direito do painel —
 * a árvore de referência de `get_design_context` nomeia esse elemento
 * "Button" com SFSymbol `sidebar.left` (ícone nativo de colapsar sidebar,
 * sem glifo próprio exportável do Figma). Implementado com
 * `lucide-react`'s `PanelLeft` (mesmo glifo — retângulo com coluna
 * lateral), seguindo a convenção já usada no restante deste componente
 * (ícones de navegação via `lucide-react`, não `atom/Icon`).
 *
 * Reconciliado em 2026-08-11 (US-019): a seção "Etiquetas" agora renderiza
 * `atom/Sidebar/Tags/Items` (`1421:20907`, node Figma achado nesta US) em
 * vez do `<span>` ad hoc anterior — ganha estados `hover`/`selected` reais
 * (prop `activeTag`/`onTagSelect`) em vez de texto estático.
 *
 * Corrigido em auditoria Regra 11 (US-026): `get_design_context` real no nó
 * `Size=MD, Pages=Default` (`1421:17947`) confirma um botão "+ Adicionar"
 * (`atom/PushButton`, `variant="primary"`, ícone `plus`) entre o header e a
 * lista de navegação — ausente por completo na implementação anterior.
 * Adicionado com `PushButton`/`icon={Plus}` (Regra 1 — mesmo componente
 * único, sem `button/primary` separado).
 *
 * Corrigido em nova auditoria Regra 11 (US-026): `get_screenshot` fresco do
 * nó `1421:17947` mostra os 5 itens de navegação inativos (todos exceto o
 * ativo) com opacidade reduzida (~50%, mesmo token de cor
 * `--brand-secondary-dark` do item ativo, só que dessaturado por opacidade)
 * — a implementação anterior renderizava todos os itens com o mesmo
 * contraste total, diferenciando o ativo só pela cor do texto
 * (`text-brand-teal`, nunca confirmado no Figma: o item ativo usa a MESMA
 * cor de texto escura dos inativos, só ganha o fundo `bg-zinc-100` cheio).
 * Corrigido para `opacity-50` no item inativo (`opacity-100` no
 * hover/ativo) e texto sempre `text-zinc-900` (sem `text-brand-teal`
 * inventado).
 */
function Sidebar({
  activePage = "Pessoal",
  onNavigate,
  tags = [],
  activeTag,
  onTagSelect,
  storageProps,
  onCollapse,
  onAdd,
  className,
  ...props
}: SidebarProps) {
  return (
    <nav
      data-slot="sidebar"
      className={cn(
        "relative flex w-72 flex-col gap-4 rounded-2xl border border-zinc-200 bg-effect-glass-surface-light px-4 pt-1 pb-4 backdrop-blur-md",
        className
      )}
      {...props}
    >
      <div data-slot="sidebar-collapse-row" className="flex h-7 w-full items-start justify-end pt-3 pr-0">
        <button
          type="button"
          data-slot="sidebar-collapse"
          aria-label="Colapsar sidebar"
          onClick={onCollapse}
          className="flex size-6 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50"
        >
          <PanelLeft aria-hidden="true" className="size-3.5" />
        </button>
      </div>
      <div data-slot="sidebar-add-row" className="flex w-full pt-1 pb-4">
        <PushButton icon={Plus} onClick={onAdd} className="h-9 w-[121px] self-start rounded-md px-4 text-sm">
          Adicionar
        </PushButton>
      </div>
      <ul className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ page, icon: ItemIcon }) => (
          <li key={page}>
            <button
              type="button"
              aria-current={activePage === page ? "page" : undefined}
              onClick={() => onNavigate?.(page)}
              className={cn(
                "flex w-full items-center gap-1.5 rounded-md px-2 py-1 text-base font-medium text-zinc-900",
                "transition-[opacity,background-color] hover:bg-zinc-100 hover:opacity-100 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50",
                activePage === page ? "bg-zinc-100" : "opacity-50"
              )}
            >
              <ItemIcon aria-hidden="true" className="size-4" />
              {page}
            </button>
          </li>
        ))}
      </ul>
      {tags.length > 0 ? (
        <div className="flex flex-col gap-1 border-t border-zinc-200 pt-3">
          <span className="text-xs font-medium text-zinc-500">Etiquetas</span>
          {tags.map((tag) => (
            <SidebarTagsItem
              key={tag}
              label={tag}
              selected={tag === activeTag}
              onClick={() => onTagSelect?.(tag)}
            />
          ))}
        </div>
      ) : null}
      <div className="border-t border-zinc-200 pt-3">
        <StorageSidebar {...storageProps} manageSpaceLabel="Gerir Espaço" />
      </div>
    </nav>
  )
}

export { Sidebar }
