import * as React from "react"
import { Loader2Icon, SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface SearchInputProps
  extends Omit<React.ComponentProps<"input">, "type"> {
  /** Estado de carregamento — mostra spinner no lugar do ícone de busca. */
  loading?: boolean
  /**
   * Estado de feedback de validação — anel persistente verde (sucesso) ou
   * vermelho (erro), independente do foco. Figma: `molecule/InputStates`
   * (`1518:7924`, decisão humana 2026-08-14: peça nova, escopo restrito a
   * estes 2 estados — variantes `writeValue`/`wrongValue`).
   */
  state?: "success" | "danger"
}

/**
 * molecule/SearchBar (`1421:17857`, Figma-confirmado, descrição verbatim
 * adicionada pelo usuário em 2026-08-14: *"searchbar usada para pesquisar
 * valores"*) — placeholder usa o termo aprovado em AGENTS.md (Regra 5),
 * não o texto atual do Figma (gap de polish, ver docs/conflicts.md).
 *
 * Corrigido em 2026-08-11 (achado do usuário): `get_design_context` real
 * confirma `border-radius: var(--radius-pill, 9999px)` (totalmente
 * arredondado) e o material Liquid Glass de 2 camadas (Fill+Shadow sólido +
 * Glass Effect translúcido, Regra 10) — a versão anterior usava
 * `rounded-lg` (canto ~8px) e nenhuma camada de vidro, divergindo bastante
 * do Figma. Tamanho de fonte do Figma (13px) mantido em `text-base` (16px)
 * por decisão travada (Regra 4, piso de acessibilidade pra texto primário).
 *
 * Estados `success`/`danger` adicionados em 2026-08-14 (decisão humana) a
 * partir de `molecule/InputStates` (`1518:7924`) — peça nova, criada pelo
 * usuário no Figma por perceber a carência de um input com feedback de
 * validação. Anel de sucesso reaproveita o token já usado em
 * `celule/TagColor` (`var(--brand-feedback-success-default,#096)`); anel
 * de erro reaproveita `--destructive` (`#bc3426`, já usado em todo o
 * projeto) em vez do vermelho ligeiramente diferente lido nesse node
 * específico (`#c0392b`) — mesma pequena divergência de variável já
 * documentada em `docs/conflicts.md` para outros nós de "perigo", tratada
 * como ruído de autoria, não reimplementada por nó. Por decisão humana,
 * só a fonte do placeholder foi adaptada pra Figtree (já é o padrão deste
 * componente) — o resto (glifo de lupa, geometria do anel) segue o padrão
 * já estabelecido no restante do projeto, não a fonte SF Pro/glifo SF
 * Symbol literais do node (mesmo critério de reuso de ícone já usado em
 * outros átomos deste arquivo).
 */
function SearchInput({
  className,
  loading = false,
  disabled,
  state,
  placeholder = "Buscar arquivos, pastas ou templates",
  ...props
}: SearchInputProps) {
  return (
    <div
      data-slot="search-input-wrapper"
      data-state={state}
      className={cn(
        "group relative flex h-9 w-full max-w-sm items-center rounded-full",
        "shadow-[0px_2px_16px_0px_rgba(9,9,11,0.08)]",
        state === "success" &&
          "ring-3 ring-[color:var(--brand-feedback-success-default,#096)]/35",
        state === "danger" && "ring-3 ring-destructive/35",
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
