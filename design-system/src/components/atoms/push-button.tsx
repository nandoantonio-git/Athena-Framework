import * as React from "react"
import { Loader2Icon, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface PushButtonProps extends React.ComponentProps<"button"> {
  /** Estado de carregamento — desabilita o botão e mostra um spinner no lugar do ícone. */
  loading?: boolean
  /**
   * Ícone opcional à esquerda do label — corresponde ao eixo `isIconOn`
   * (Figma-confirmado, `atom/PushButton`, nó `1421:17302`). Some junto ao
   * spinner quando `loading` estiver ativo.
   */
  icon?: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>
  /**
   * Corresponde ao eixo `Style` do Figma: `"primary"` = `Bordered Colored`
   * (ênfase, preenchido em teal), `"neutral"` = `Bordered Neutral` (ação
   * secundária/"Cancelar", contorno + fundo glass). Confirmado em uso real
   * repetido nos organisms desta US (modais Guardar/Arquivar/Organizar) —
   * ver docs/checkpoints.md, camada organisms.
   */
  variant?: "primary" | "neutral"
  /**
   * Eixo `isDestructive` do Figma (Figma-confirmado, `atom/PushButton`, nó
   * `1421:17302`) — combinado com `variant="neutral"` (`Style=Bordered
   * Neutral`), descrição verbatim: "Botao de funcao destrutiva". Discrimina
   * a função do botão dentro do MESMO component set (Regra 1) — não cria um
   * `button/destructive` separado.
   *
   * Tratamento visual Figma-confirmado em 2026-08-10 (organism/
   * cleanSpaceStorage, nó 1439:16908, botões "Excluir"/"Excluir cópias"):
   * mantém o CHROME neutro/glass (mesmo `variant="neutral"`), só troca a cor
   * do label para `var(--destructive, #bc3426)` — não é um botão preenchido
   * de vermelho.
   */
  isDestructive?: boolean
}

/**
 * atom/PushButton — único componente de botão do MVP (Regra 1, AGENTS.md).
 * Não existem variantes button/primary/secondary/destructive como
 * componentes separados: `variant` expõe o eixo `Style` (Colored/Neutral) de
 * UM component set só — confirma conformidade com a Regra 1, não a viola
 * (achado #12, figma-inventory.md). `Destructive`/`Borderless` do Figma
 * seguem não implementados — decisão de produto fora do escopo atual.
 */
function PushButton({
  className,
  loading = false,
  disabled,
  icon: Icon,
  variant = "primary",
  isDestructive = false,
  children,
  ...props
}: PushButtonProps) {
  return (
    <button
      data-slot="push-button"
      data-variant={variant}
      data-destructive={isDestructive || undefined}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={cn(
        "inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border px-4 text-base font-medium",
        "transition-all motion-safe:active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50",
        "disabled:pointer-events-none disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        variant === "primary" && !isDestructive
          ? "border-transparent bg-brand-teal text-brand-teal-foreground hover:bg-brand-teal/90 active:bg-brand-teal/80"
          : cn(
              "border-zinc-200 bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-200",
              isDestructive ? "text-destructive" : "text-zinc-700"
            ),
        className
      )}
      {...props}
    >
      {loading ? (
        <Loader2Icon className="size-4 animate-spin" aria-hidden="true" />
      ) : Icon ? (
        <Icon className="size-4" aria-hidden="true" />
      ) : null}
      {children}
    </button>
  )
}

export { PushButton }
