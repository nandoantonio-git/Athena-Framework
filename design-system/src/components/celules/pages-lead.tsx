import * as React from "react"

import { cn } from "@/lib/utils"

export interface PagesLeadProps extends React.ComponentProps<"div"> {
  title: string
  caption?: string
}

/**
 * celule/Pages/Lead (`1439:17048`, Figma-confirmado) — "Titulo e subtitulo
 * das paginas, foco em melhorar SEO". H1 (Figtree Bold, `40px`, `text-black`
 * literal — não `neutral-text-primary`, valores diferentes no Figma) +
 * legenda (`14px`, `#71717a`, bate exato com `zinc-500`). `title` sem
 * default — cada página injeta seu próprio H1 real; `caption` default é o
 * valor Figma-confirmado da instância amostrada ("Armazenamento").
 */
function PagesLead({ title, caption = "Gerencie seu armazenamento", className, ...props }: PagesLeadProps) {
  return (
    <div data-slot="pages-lead" className={cn("flex flex-col justify-between gap-1", className)} {...props}>
      <h1 className="text-[2.5rem] leading-none font-bold text-black">{title}</h1>
      <p className="text-sm text-zinc-500">{caption}</p>
    </div>
  )
}

export { PagesLead }
