import * as React from "react"

import { cn } from "@/lib/utils"

export interface TagOrgTemplateNameProps
  extends Omit<React.ComponentProps<"input">, "type" | "size"> {}

/**
 * atom/TagOrgTemplateName (`1421:18778`) — Figma-confirmado: "badge presente
 * no sandbox de organização, tem a possibilidade de input do nome desejado
 * da organização." Implementado como `<input>` real (não só texto estático)
 * porque a descrição confirma a capacidade de edição — visual idêntico ao
 * único estado exportado pelo Figma (placeholder "Adicionar Nome").
 *
 * Fundo (`effect-overlay-secondary`, `rgba(107,107,104,0.45)`) reusa o token
 * já existente `--brand-secondary-light` (`#6b6b68`, mesmo RGB) via
 * modificador de opacidade Tailwind (`/45`) em vez de introduzir um literal
 * novo. Texto (`neutral-text-primary`, `#09090b`) bate exatamente com
 * `zinc-950` (mesmo precedente de `atom/StorageTierBadge`).
 *
 * `focus-visible:ring` é affordance de acessibilidade padrão do projeto
 * (mesmo tratamento de `molecule/SearchInput`), não um estado Figma-
 * confirmado — o Figma só expõe o estado de repouso.
 */
function TagOrgTemplateName({
  className,
  placeholder = "Adicionar Nome",
  ...props
}: TagOrgTemplateNameProps) {
  return (
    <input
      data-slot="tag-org-template-name"
      type="text"
      placeholder={placeholder}
      className={cn(
        "h-9 min-w-0 rounded-md bg-brand-secondary-light/45 px-3 py-1.5 text-base text-zinc-950 placeholder:text-zinc-950 [field-sizing:content]",
        "transition-colors focus-visible:ring-2 focus-visible:ring-brand-teal/50 focus-visible:outline-none",
        className
      )}
      {...props}
    />
  )
}

export { TagOrgTemplateName }
