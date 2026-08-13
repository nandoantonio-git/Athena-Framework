import * as React from "react"

import { cn } from "@/lib/utils"
import { Icon } from "@/components/atoms/icon"

export interface FirstUploadSymbolProps extends React.ComponentProps<"div"> {}

/**
 * atom/firstUploadSymbol (`1454:20974`) — Figma-confirmado: "símbolo de
 * upload para o kickoff inicial do usuário na plataforma." Ilustração
 * decorativa 267×267 (círculo de fundo + `atom/Icon/CloudDownload`
 * sobreposto) usada em estado vazio/onboarding.
 *
 * Corrigido em 2026-08-11 (achado do usuário): vetor real exportado do
 * Figma (`download_assets`) confirma círculo cinza neutro `#D9D9D9` +
 * glifo `#6B6B68` — a versão anterior usava as cores de marca
 * (`bg-brand-teal-light`/`text-brand-teal`), que não correspondem ao
 * Figma. Cores literais usadas aqui por serem específicas desta
 * ilustração, sem token semântico equivalente já definido.
 *
 * Corrigido em auditoria US-026 (2026-08-11): o glifo estava a `size-16`
 * (64px, 24% do diâmetro do círculo) — `get_design_context` confirma
 * `aspect-[12/12] left-[33.9%] right-[34.27%]`, ou seja ~85px (32% do
 * diâmetro de 267px), quase 1/3 maior que o implementado. Corrigido para
 * `size-[85px]`.
 */
function FirstUploadSymbol({ className, ...props }: FirstUploadSymbolProps) {
  return (
    <div
      data-slot="first-upload-symbol"
      className={cn(
        "relative flex size-[267px] items-center justify-center rounded-full bg-[#D9D9D9]",
        className
      )}
      {...props}
    >
      <Icon name="CloudDownload" className="size-[85px] text-[#6B6B68]" />
    </div>
  )
}

export { FirstUploadSymbol }
