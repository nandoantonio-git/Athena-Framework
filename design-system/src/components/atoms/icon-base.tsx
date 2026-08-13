import * as React from "react"
import type { LucideIcon } from "lucide-react"
import type { FunctionComponent, SVGProps } from "react"

import IconBaseGlyph from "@/assets/icons/IconBaseGlyph.svg?react"
import { cn } from "@/lib/utils"

export interface IconBaseProps extends Omit<React.ComponentProps<"span">, "children"> {
  /** Glifo a renderizar. Default é o vetor real do Figma (ícone de expandir/colapsar a sidebar). */
  icon?: LucideIcon | FunctionComponent<SVGProps<SVGSVGElement>>
  /** Eixo `isHoverOn` confirmado no Figma — tinta o glifo mais escuro quando ativo. */
  isHoverOn?: boolean
}

/**
 * atom/icon/base (`1421:17820`) — releitura via `get_design_context` em
 * 2026-08-11 (auditoria US-026) corrige a descrição verbatim: **"icone
 * utilizado para expandir e colapsar a sidebar"** — não "sub-componente de
 * `celule/chip/folder-tag`" como a doc anterior registrava (leitura
 * desatualizada). O nó tem um glifo FIXO (`Symbol`, 14×11, exportado via
 * `download_assets`) — um ícone de painel/sidebar com divisor, não um slot
 * genérico. Corrigido aqui: glifo real do Figma usado como default; a prop
 * `icon` permanece para permitir reuso em outros contextos (ex.: chip de
 * pasta), mas não é mais o único uso documentado. Não é um botão (sem
 * semântica interativa própria, sem `aria-label`). `state`
 * Figma-confirmado: Idle|Default — sem diferença de comportamento descrita
 * entre os dois (gap, Regra 9); `isHoverOn` é o único eixo com efeito
 * visível confirmado.
 */
function IconBase({ icon: Icon = IconBaseGlyph, isHoverOn = false, className, ...props }: IconBaseProps) {
  return (
    <span
      data-slot="icon-base"
      data-hover-on={isHoverOn || undefined}
      className={cn(
        "inline-flex shrink-0 items-center justify-center text-zinc-500 transition-colors",
        isHoverOn && "text-zinc-800",
        className
      )}
      {...props}
    >
      <Icon className="size-4" aria-hidden="true" />
    </span>
  )
}

export { IconBase }
