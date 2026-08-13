import * as React from "react"

import { cn } from "@/lib/utils"
import { Icon, type IconName } from "@/components/atoms/icon"

export interface FaqFastLink {
  label: string
  href: string
  icon: IconName
}

const DEFAULT_LINKS: FaqFastLink[] = [
  { label: "Documentação da API", href: "#", icon: "MenuBook" },
  { label: "Fórum da comunidade", href: "#", icon: "Forum" },
  { label: "Tutoriais em vídeo", href: "#", icon: "Slideshow" },
]

export interface FaqFastLinksProps extends React.ComponentProps<"div"> {
  links?: FaqFastLink[]
}

/**
 * organism/FAQ/FastLinks (`1454:25006`) — Figma-confirmado: "estrutura de
 * links rápidos da aba de FAQ". 3 itens Figma-confirmados: "API
 * Documentation", "Community Forum", "Video Tutorials" — traduzidos para PT
 * (Regra 9: mantidos como tradução direta, não literais, já que o resto da
 * aba de FAQ é inteiramente em português; mesmo critério já usado em
 * `organism/upload-popover`, ver `docs/conflicts.md`).
 *
 * Ícones exportados de verdade do Figma via `download_assets` (não
 * aproximação `lucide-react`) — `MenuBook`/`Forum`/`Slideshow` em
 * `atom/Icon`, ver `Atoms/Icon.mdx`.
 */
function FaqFastLinks({ links = DEFAULT_LINKS, className, ...props }: FaqFastLinksProps) {
  return (
    <div
      data-slot="faq-fast-links"
      className={cn(
        "flex w-40 flex-col items-start gap-4 rounded-3xl px-4 py-6 shadow-[0px_2px_4px_rgba(9,9,11,0.08)]",
        className
      )}
      {...props}
    >
      <p className="text-base text-zinc-950">Links Rápidos</p>
      <ul className="flex w-full flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="flex items-start gap-2 text-xs font-medium text-brand-teal hover:underline"
            >
              <Icon name={link.icon} className="mt-0.5 size-3.5 shrink-0" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { FaqFastLinks }
