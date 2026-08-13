import * as React from "react"

import { cn } from "@/lib/utils"
import AlertDefaultGlyph from "@/assets/icons/LabelStorageAlertDefault.svg?react"
import AlertVariant2Glyph from "@/assets/icons/LabelStorageAlertVariant2.svg?react"
import AlertVariant3Glyph from "@/assets/icons/LabelStorageAlertVariant3.svg?react"
import AlertVariant4Glyph from "@/assets/icons/LabelStorageAlertVariant4.svg?react"

const ALERT_LABEL = {
  default: "Incongruente",
  variant2: "Incongruente",
  variant3: "Incongruente",
  variant4: "OK",
} as const

export type LabelStorageAlertVariant = keyof typeof ALERT_LABEL

const ALERT_GLYPH: Record<LabelStorageAlertVariant, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  default: AlertDefaultGlyph,
  variant2: AlertVariant2Glyph,
  variant3: AlertVariant3Glyph,
  variant4: AlertVariant4Glyph,
}

const GLYPH_CLASSNAME: Record<LabelStorageAlertVariant, string> = {
  default: "h-3.5 w-[11.08px]",
  variant2: "size-[11px]",
  variant3: "h-[15px] w-[13px]",
  variant4: "h-3.5 w-3",
}

export interface LabelStorageAlertProps
  extends Omit<React.ComponentProps<"span">, "children"> {
  variant?: LabelStorageAlertVariant
}

/**
 * atom/Label/Storage/Alert (`1439:16885`) — Figma-confirmado: "badge de
 * alertas presente na etapa de confirmar o template sugerido pelo
 * sistema". Eixo `property1` do Figma (4 valores): `Default`/`Variant2`/
 * `Variant3` usam glifos diferentes mas o mesmo rótulo "Incongruente"
 * (sem descrição que diferencie o significado de cada ícone — Regra 9,
 * preservado literal, não inventada uma distinção semântica);
 * `Variant4` é o único com rótulo "OK". `Default`/`Variant3`/`Variant4`
 * alinham `items-end`; `Variant2` alinha `items-center` (Figma-confirmado).
 *
 * Fundo (`effect-overlay-md`, `rgba(0,0,0,0.14)`) — literal `black/14`
 * (Tailwind opacity modifier), mesmo overlay documentado em `atom/Tag`/
 * `atom/ArchiveItem` sem token CSS dedicado ainda. Texto/ícone
 * (`neutral-text-secondary`, `#3f3f46`) bate exatamente com `zinc-700`
 * (docs/conflicts.md, tabela "Paleta neutra").
 */
function LabelStorageAlert({ variant = "default", className, ...props }: LabelStorageAlertProps) {
  const Glyph = ALERT_GLYPH[variant]
  return (
    <span
      data-slot="label-storage-alert"
      data-variant={variant}
      className={cn(
        "inline-flex gap-1 rounded-full bg-black/14 py-1 pr-3 pl-4 text-zinc-700",
        variant === "variant2" ? "items-center" : "items-end",
        className
      )}
      {...props}
    >
      <Glyph aria-hidden="true" className={cn(GLYPH_CLASSNAME[variant], "shrink-0")} />
      <span className="text-base leading-4 font-medium tracking-[0.1px]">{ALERT_LABEL[variant]}</span>
    </span>
  )
}

export { LabelStorageAlert, ALERT_LABEL }
