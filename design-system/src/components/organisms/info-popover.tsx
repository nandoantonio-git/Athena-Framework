import * as React from "react"

import { cn } from "@/lib/utils"
import metadataBg from "@/assets/illustrations/info-popover-metadata-bg.svg"
import storageBg from "@/assets/illustrations/info-popover-storage-bg.svg"

export interface InfoPopoverMetadataProps {
  variant?: "metadata"
  createdAt: string
  modifiedAt: string
  dimensions: string
  tagsLabel?: string
}

export interface InfoPopoverStorageInfoProps {
  variant: "storage-info"
}

export type InfoPopoverProps = React.ComponentProps<"div"> &
  (InfoPopoverMetadataProps | InfoPopoverStorageInfoProps)

/**
 * organism/info/Popover (`1421:18504`) — Figma-confirmado: "Popover de
 * informação, aparece ao usuário ficar com o mouse em cima de X por
 * determinado tempo." Duas variantes Figma-confirmadas: `content=Metadata`
 * (Criado/Modificado/Dimensões/Etiquetas) e `content=StorageInfo`
 * ("AL: Armazenamento de longo prazo" / "AC: Armazenamento corrente").
 *
 * 🔧 Corrigido em 2026-08-11 (auditoria fixed-point, Regra 11) — achados
 * novos, este componente nunca tinha passado pelo protocolo real:
 * 1. O fundo é o material **Liquid Glass** com um recorte de "balão de
 *    fala" (rabicho apontando para a esquerda) — `get_design_context`
 *    retornou esse shape como um asset SVG próprio (`Fill`, branco 70% +
 *    duas sombras), não um retângulo sólido com borda como a implementação
 *    anterior. Exportado via `download_assets` para
 *    `src/assets/illustrations/info-popover-{metadata,storage}-bg.svg` e
 *    usado como imagem de fundo (Regra 10 — mesma spec de `Tokens/Materials`).
 * 2. Faltavam as 2 linhas divisórias (Figma-confirmado, `Vector 5`,
 *    `opacity:0.35`, `#6b6b68`) entre Criado/Modificado/Dimensões.
 * 3. Tamanho de texto era `text-xs`/`text-sm` (12px/14px) — Figma confirma
 *    `Type/Body/XS` (10px) em todo o conteúdo, exceção documentada da
 *    Regra 4 (mesmo padrão já usado em outros componentes, convertido para
 *    `text-[0.625rem]`, nunca `px` fixo).
 * 4. A variante `storage-info` tinha 2 problemas: (a) a ordem estava
 *    invertida — Figma mostra "AL" primeiro, "AC" depois, o código tinha
 *    "AC" primeiro; (b) cada linha tinha um valor dinâmico **inventado**
 *    anexado (`— {quickAccessLabel}`/`— {longTermLabel}`), sem
 *    correspondência nenhuma no Figma — o nó real tem só os 2 rótulos
 *    estáticos, nada mais (Regra 11.4, nunca inventar conteúdo). Removido;
 *    a variante agora não recebe props de conteúdo.
 */
function InfoPopover({ className, ...props }: InfoPopoverProps) {
  const isStorageInfo = props.variant === "storage-info"

  return (
    <div
      data-slot="info-popover"
      role="tooltip"
      className={cn("relative w-[253px]", isStorageInfo ? "h-[67px]" : "h-[160px]", className)}
    >
      <img
        src={isStorageInfo ? storageBg : metadataBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute block max-w-none"
        style={
          isStorageInfo
            ? { width: "303.5px", height: "107px", top: "-16px", left: "-30.5px" }
            : { width: "303.5px", height: "200px", top: "-16px", left: "-30.5px" }
        }
      />
      {isStorageInfo ? (
        <div className="absolute left-[13px] top-[10px] flex w-[228px] flex-col gap-1 p-2 text-[0.625rem] tracking-[0.012px] text-black/20">
          <p>AL: Armazenamento de longo prazo</p>
          <div className="h-0 w-full border-t border-brand-secondary-light opacity-35" />
          <p>AC: Armazenamento corrente</p>
        </div>
      ) : (
        <div className="absolute left-[13px] top-[8px] flex w-[198px] flex-col gap-1 p-2">
          <p className="text-[0.625rem] font-bold tracking-[0.012px] text-black">Informações</p>
          <div className="flex items-center justify-between text-[0.625rem] tracking-[0.012px] text-brand-secondary-light">
            <span>Criado</span>
            <span>{props.createdAt}</span>
          </div>
          <div className="h-0 w-full border-t border-brand-secondary-light opacity-35" />
          <div className="flex items-center justify-between text-[0.625rem] tracking-[0.012px] text-brand-secondary-light">
            <span>Modificado</span>
            <span>{props.modifiedAt}</span>
          </div>
          <div className="h-0 w-full border-t border-brand-secondary-light opacity-35" />
          <div className="flex items-center justify-between text-[0.625rem] tracking-[0.012px] text-brand-secondary-light">
            <span>Dimensões</span>
            <span>{props.dimensions}</span>
          </div>
          {props.tagsLabel ? (
            <div className="flex flex-col gap-1">
              <span className="text-[0.625rem] font-bold tracking-[0.012px] text-black">Etiquetas</span>
              <span className="text-[0.625rem] tracking-[0.012px] text-brand-secondary-light">
                {props.tagsLabel}
              </span>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

export { InfoPopover }
