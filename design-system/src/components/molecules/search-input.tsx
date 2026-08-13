import * as React from "react"
import { Loader2Icon, SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface SearchInputProps
  extends Omit<React.ComponentProps<"input">, "type"> {
  /** Estado de carregamento — mostra spinner no lugar do ícone de busca. */
  loading?: boolean
}

/**
 * molecule/input-search (`molecule/SearchBar/Placeholder/XXL`, `1421:17845`)
 * — placeholder usa o termo aprovado em AGENTS.md (Regra 5), não o texto
 * atual do Figma (gap de polish, ver docs/conflicts.md).
 *
 * Corrigido em 2026-08-11 (achado do usuário): `get_design_context` real
 * confirma `border-radius: var(--radius-pill, 9999px)` (totalmente
 * arredondado) e o material Liquid Glass de 2 camadas (Fill+Shadow sólido +
 * Glass Effect translúcido, Regra 10) — a versão anterior usava
 * `rounded-lg` (canto ~8px) e nenhuma camada de vidro, divergindo bastante
 * do Figma. Tamanho de fonte do Figma (13px) mantido em `text-base` (16px)
 * por decisão travada (Regra 4, piso de acessibilidade pra texto primário).
 */
function SearchInput({
  className,
  loading = false,
  disabled,
  placeholder = "Buscar arquivos, pastas ou templates",
  ...props
}: SearchInputProps) {
  return (
    <div
      data-slot="search-input-wrapper"
      className={cn(
        "group relative flex h-9 w-full max-w-sm items-center rounded-full",
        "shadow-[0px_2px_16px_0px_rgba(9,9,11,0.08)]",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-zinc-50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-effect-glass-surface-light shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)] backdrop-blur-md"
      />
      {loading ? (
        <Loader2Icon
          className="pointer-events-none absolute left-3 size-4 animate-spin text-zinc-500"
          aria-hidden="true"
        />
      ) : (
        <SearchIcon
          className="pointer-events-none absolute left-3 size-4 text-zinc-500"
          aria-hidden="true"
        />
      )}
      <input
        data-slot="search-input"
        type="search"
        disabled={disabled || loading}
        placeholder={placeholder}
        className={cn(
          "relative h-9 w-full rounded-full bg-transparent pr-3 pl-9 text-base text-zinc-900 placeholder:text-zinc-500",
          "transition-colors",
          "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50",
          "disabled:pointer-events-none disabled:opacity-50",
          "aria-invalid:ring-3 aria-invalid:ring-destructive/20"
        )}
        {...props}
      />
    </div>
  )
}

export { SearchInput }
