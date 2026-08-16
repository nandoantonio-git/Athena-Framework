import * as React from "react"
import { FolderIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface FolderTagChipProps extends React.ComponentProps<"span"> {
  /** Nome da pasta exibido no chip. */
  label: string
  /** Chamado ao clicar no botão de remover. Quando omitido, o botão não é renderizado. */
  onRemove?: () => void
  disabled?: boolean
  /**
   * Eixo `isExpanded` (Figma-confirmado em `celule/chip/folder-tag`,
   * `1421:19040`: "Chip de tag de pasta com estado expansível. Props:
   * isExpanded (bool)..."). O comportamento exato de "expandido" não tem
   * descrição própria além do booleano — implementado aqui como 🧩 inferido:
   * remove o truncamento do rótulo e mantém o botão de remover sempre
   * visível/focável.
   */
  isExpanded?: boolean
  /**
   * Eixo `State=Selected` (Figma-confirmado: "State (Default/Hover/Selected)").
   * Estilo visual 🧩 inferido (realce com a cor de marca travada, Regra 3) —
   * não extraído variante-a-variante do Figma.
   */
  selected?: boolean
}

/**
 * molecule/chip-folder-tag (Figma: `celule/chip/folder-tag`, `1421:19040`) —
 * reconciliado em 2026-08-09 contra `docs/figma-inventory.md` (achados
 * críticos #5/#6). `isExpanded` e `State=Selected` são Figma-confirmados
 * como props existentes (contrariam a suposição antiga de "isExpanded
 * ausente" em `AGENTS.md` Regra 7 — ver `docs/conflicts.md`). O `opacity:0`
 * residual (texto "Pessoal" no estado Default/não-expandido, Figma-
 * confirmado) segue **não reproduzido** — leftover de edição do arquivo
 * fonte, não um dado a exibir.
 *
 * Corrigido em auditoria Regra 11 (US-026): `get_design_context` não retorna
 * nenhuma borda (`border`) em nenhum dos 4 estados (`Default`/`Idle`/
 * `Hover`/`Pressed`) — só variação de `background`. A borda
 * (`border-zinc-200`/`hover:border-zinc-300`/`data-[selected]:border-brand-teal`)
 * era um elemento inventado, removida. Cores de fundo/texto trocadas pelos
 * tokens Figma-confirmados exatos: `Idle` → `bg-zinc-100` (aprox. de
 * `neutral-surface-background` `#f3f3f3`), `Hover` → `bg-zinc-200` (aprox.
 * de `neutral-surface-subtle` `#eaeaea`), `Selected`/`Pressed` →
 * `bg-brand-teal-light` (`var(--brand-primary-light,#c8dce3)`, hex exato) +
 * `text-brand-teal-dark` (`var(--brand-primary-dark,#1a5e6e)`, hex exato) —
 * antes usava `bg-brand-teal/10`/`text-brand-teal` (`#007e96`), que não
 * corresponde ao token de "selecionado" real do Figma.
 *
 * ⚠️ Achado novo (não corrigido, área ambígua): no estado `Default`
 * (`isExpanded=false`), o export Figma mostra o chip **sem** o ícone de
 * pasta nem o rótulo visível (só um ícone utilitário à direita,
 * `atom/icon/base`, sem nome semântico) — layout bem diferente do estado
 * `isExpanded=true` (ícone de pasta + rótulo + ícone final). A implementação
 * atual usa a MESMA composição (ícone de pasta + rótulo) em ambos os
 * estados, variando só o truncamento (`max-w-none`) — mantido assim porque
 * o significado exato do estado "colapsado" (chip funcionalmente vazio?)
 * não é claramente confirmável a partir do Figma sozinho (Regra 9); mudar
 * o comportamento por inferência arriscaria inventar uma UX pior (chip sem
 * nenhum conteúdo visível por padrão). Registrado para decisão humana.
 */
function FolderTagChip({
  label,
  onRemove,
  disabled,
  isExpanded,
  selected,
  className,
  ...props
}: FolderTagChipProps) {
  return (
    <span
      data-slot="folder-tag-chip"
      data-disabled={disabled || undefined}
      data-expanded={isExpanded || undefined}
      data-selected={selected || undefined}
      className={cn(
        "inline-flex h-7 shrink-0 items-center gap-1.5 rounded-full bg-zinc-100 pr-2 pl-2.5 text-sm font-medium text-zinc-700",
        "transition-colors",
        "hover:bg-zinc-200",
        "data-[selected]:bg-brand-teal-light data-[selected]:text-brand-teal-dark",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <FolderIcon className="size-3.5 shrink-0 text-zinc-500" aria-hidden="true" />
      <span className={cn("truncate", isExpanded && "max-w-none")}>{label}</span>
      {onRemove ? (
        <button
          type="button"
          data-slot="folder-tag-chip-remove"
          aria-label={`Remover ${label}`}
          disabled={disabled}
          onClick={onRemove}
          className={cn(
            "inline-flex size-5 shrink-0 items-center justify-center rounded-full text-zinc-500",
            "transition-colors motion-safe:active:scale-95",
            "hover:bg-zinc-200 hover:text-zinc-700",
            "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50"
          )}
        >
          <XIcon className="size-3.5" aria-hidden="true" />
        </button>
      ) : null}
    </span>
  )
}

export { FolderTagChip }
