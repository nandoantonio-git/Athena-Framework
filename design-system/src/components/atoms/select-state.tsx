import * as React from "react"

import { cn } from "@/lib/utils"
import ellipseLight from "@/assets/illustrations/select-state-ellipse.svg"
import checkLight from "@/assets/illustrations/select-state-check.svg"
import checkDark from "@/assets/illustrations/select-state-check-dark.svg"
import bgLightHover from "@/assets/illustrations/select-state-light-hover.svg"
import bgLightPressed from "@/assets/illustrations/select-state-light-pressed.svg"
import bgDarkDefault from "@/assets/illustrations/select-state-dark-default.svg"
import bgDarkHover from "@/assets/illustrations/select-state-dark-hover.svg"
import bgDarkPressed from "@/assets/illustrations/select-state-dark-pressed.svg"

export type SelectStateTheme = "light" | "dark"
export type SelectStateStateValue = "default" | "hover" | "pressed"

export interface SelectStateProps extends React.ComponentProps<"span"> {
  theme?: SelectStateTheme
  state?: SelectStateStateValue
}

const BACKGROUND: Record<SelectStateTheme, Partial<Record<SelectStateStateValue, string>>> = {
  light: { hover: bgLightHover, pressed: bgLightPressed },
  dark: { default: bgDarkDefault, hover: bgDarkHover, pressed: bgDarkPressed },
}

/**
 * atom/SelectState (`1421:18292`, Figma-confirmado) — "componente para
 * feedback de seleção". Círculo 8px + glifo de check 12px sobreposto
 * (excede a caixa do círculo por design, centralizado). Usado como
 * sub-componente dentro de `ArchiveItem`/`FolderItem`/`ImageItem` (badge de
 * canto quando `state="selected*"`).
 *
 * `theme=Light,state=Default` usa 2 assets separados (círculo + check); os
 * demais 5 pares usam um asset combinado por estado (Figma já bake-ia o
 * círculo+glow juntos). Opacidade do check em `theme=Dark` reduzida em
 * hover (0.32) e pressed (0.2) — únicos dois eixos com opacidade diferente
 * de 1 confirmados no node (os nomes das variáveis Figma de origem,
 * `--radius-3xl`/`--radius-20`, são um reaproveitamento de nome sem relação
 * com raio — só os valores numéricos 0.32/0.2 são reais).
 *
 * Corrigido em 2026-08-15 (achado do usuário, reportado como "check
 * quebrado" em `ArchiveItem`/`FolderItem`/`ImageItem`/`VideoItem`, que só
 * compõem este átomo): `select-state-check.svg` tem
 * `viewBox="0 0 4.3975 3.3525"` e `preserveAspectRatio="none"` — o glifo
 * forçado num box quadrado (`size-3`) esticava de forma não-uniforme,
 * distorcendo o check numa forma angular sem semelhança com um check.
 * Corrigido preservando a proporção real 4.3975:3.3525.
 *
 * Ajuste de tamanho em 2026-08-15 (decisão humana, não Figma-confirmado):
 * o comentário original tratava o check 12px excedendo a caixa do círculo
 * 8px como intencional ("por design"), mas visualmente ficava sem respiro
 * nenhum — check colado/estourando a borda. Reduzido pra caber dentro do
 * círculo com padding interno mínimo (`w-1.5 h-[4.57px]`, ~1px de folga
 * de cada lado), sobrepondo a leitura anterior por pedido direto do
 * usuário.
 */
function SelectState({
  theme = "light",
  state = "default",
  className,
  ...props
}: SelectStateProps) {
  const background = BACKGROUND[theme][state] ?? ellipseLight
  const check = theme === "dark" ? checkDark : checkLight
  const checkOpacity =
    theme === "dark" && state === "hover"
      ? "opacity-[0.32]"
      : theme === "dark" && state === "pressed"
        ? "opacity-[0.2]"
        : "opacity-100"

  return (
    <span
      data-slot="select-state"
      data-theme={theme}
      data-state={state}
      className={cn("relative inline-block size-2", className)}
      {...props}
    >
      <img alt="" aria-hidden="true" className="absolute inset-0 size-full" src={background} />
      <img
        alt=""
        aria-hidden="true"
        className={cn(
          "absolute top-1/2 left-1/2 h-[4.57px] w-1.5 -translate-x-1/2 -translate-y-1/2",
          checkOpacity
        )}
        src={check}
      />
    </span>
  )
}

export { SelectState }
