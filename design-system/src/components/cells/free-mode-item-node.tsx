import * as React from "react"

import { cn } from "@/lib/utils"
import JuncaoGlyph from "@/assets/icons/ItemNodeJuncaoGlyph.svg?react"
import IntersseccaoGlyph from "@/assets/icons/ItemNodeIntersseccaoGlyph.svg?react"
import ExclusaoGlyph from "@/assets/icons/ItemNodeExclusaoGlyph.svg?react"
import SubtracaoGlyph from "@/assets/icons/ItemNodeSubtracaoGlyph.svg?react"
import FiltroSizeGlyph from "@/assets/icons/ItemNodeFiltroSizeGlyph.svg?react"
import FiltroTypeGlyph from "@/assets/icons/ItemNodeFiltroTypeGlyph.svg?react"
import FiltroDateGlyph from "@/assets/icons/ItemNodeFiltroDateGlyph.svg?react"
import AutoArchiveGlyph from "@/assets/icons/ItemNodeAutoArchiveGlyph.svg?react"
import ResultadoGlyph from "@/assets/icons/ItemNodeResultadoGlyph.svg?react"
import ChevronGlyph from "@/assets/icons/ItemNodeChevron.svg?react"
import PreviewChevronGlyph from "@/assets/icons/ItemNodePreviewChevron.svg?react"

export type FreeModeItemNodeVariant =
  | "juncao"
  | "intersseccao"
  | "exclusao"
  | "subtracao"
  | "filtro-size"
  | "filtro-type"
  | "filtro-date"
  | "auto-archive"
  | "resultado"

export interface FreeModeItemNodeProps extends React.ComponentProps<"div"> {
  variant: FreeModeItemNodeVariant
  /** Só `resultado`: expande estatísticas + prévia de arquivos (`Property 1=Variant8`). */
  expanded?: boolean
  /** Só `resultado`: nome da pasta de destino, ex. `Pasta "Vídeos grandes"`. */
  folderLabel?: string
  affectedFilesCount?: number
  sizeLabel?: string
  rulesCount?: number
  fileNames?: readonly string[]
  label?: string
  subtitle?: string
}

type SimpleNodeVariant = Exclude<FreeModeItemNodeVariant, "auto-archive" | "resultado">

const SIMPLE_NODE_CONFIG: Record<
  SimpleNodeVariant,
  { label: string; subtitle?: string; Glyph: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; baked: boolean }
> = {
  juncao: { label: "Junção", Glyph: JuncaoGlyph, baked: true },
  intersseccao: { label: "Interssecção", Glyph: IntersseccaoGlyph, baked: false },
  exclusao: { label: "Exclusão", Glyph: ExclusaoGlyph, baked: false },
  subtracao: { label: "Subtração", Glyph: SubtracaoGlyph, baked: false },
  "filtro-size": { label: "Filtro", subtitle: "Size ", Glyph: FiltroSizeGlyph, baked: false },
  "filtro-type": { label: "Filtro", subtitle: "Type", Glyph: FiltroTypeGlyph, baked: true },
  "filtro-date": { label: "Filtro", subtitle: "Date", Glyph: FiltroDateGlyph, baked: false },
}

const DEFAULT_FILE_NAMES = [
  "Aula-introducao.mov",
  "Treinamento-produto.mp4",
  "Workshop-clientes.mov",
  "Demo-campanha.mp4",
] as const

/**
 * celule/MainCanvas/Organization/FreeMode/ItemNode (`1421:20108`,
 * Figma-confirmado) — "nodos da aba modo livre template". 10 variantes
 * (`Property 1=Default..Variant10`) reduzidas a 9 variantes semânticas
 * (`variant`), já que `Default` é a mesma anatomia de `Variant2..4`/`9`/`10`
 * (ícone + rótulo), só trocando glifo/rótulo/subtítulo — mesma
 * simplificação de eixo já usada em `celule/nodoContextMenuItem`. `baked`
 * (Junção/Filtro Type) reflete os 2 casos onde o asset do Figma já inclui
 * o fundo `--brand-primary-default` (`#007e96`) embutido no SVG — os
 * demais recebem o glifo dentro de uma caixa `bg-brand-teal` separada.
 * `auto-archive` e `resultado` têm anatomia própria (ver Figma) e não
 * compartilham o layout ícone+rótulo simples.
 */
function FreeModeItemNode({
  variant,
  expanded = false,
  folderLabel = variant === "resultado" && !expanded ? 'Pasta "Vídeos"' : 'Pasta "Vídeos grandes"',
  affectedFilesCount = 128,
  sizeLabel = "4.2 GB",
  rulesCount = 4,
  fileNames = DEFAULT_FILE_NAMES,
  label,
  subtitle,
  className,
  ...props
}: FreeModeItemNodeProps) {
  const isResultado = variant === "resultado"
  const isExpandedResultado = isResultado && expanded

  return (
    <div
      data-slot="free-mode-item-node"
      data-variant={variant}
      className={cn(
        "flex flex-col items-start rounded-lg border-2 border-zinc-500 bg-zinc-100 p-[18px] backdrop-blur-[6px]",
        isExpandedResultado ? "w-[241px]" : isResultado ? "w-fit min-w-[174px]" : "w-[174px]",
        className
      )}
      {...props}
    >
      {variant === "auto-archive" ? (
        <div className="flex items-center gap-3">
          <AutoArchiveGlyph aria-hidden="true" className="size-[34px] shrink-0" />
          <div className="flex flex-col">
            <p className="text-sm leading-5 font-semibold whitespace-nowrap text-zinc-700">Auto-Archive</p>
            <span className="mt-[3px] w-fit rounded-[4px] bg-brand-teal px-1.5 py-px text-[0.5rem] leading-3 font-bold text-brand-teal-light">
              ACTIVE
            </span>
          </div>
        </div>
      ) : isResultado ? (
        <>
          <div className="flex w-full items-center gap-3">
            <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[10.4px] bg-brand-teal">
              <ResultadoGlyph aria-hidden="true" className="size-5" />
            </div>
            <div>
              <p className="text-sm leading-5 font-semibold whitespace-nowrap text-zinc-700">Resultado</p>
              <p className="text-[0.625rem] leading-[15px] whitespace-nowrap text-brand-teal">{folderLabel}</p>
            </div>
            <ChevronGlyph
              aria-hidden="true"
              className={cn("size-4 shrink-0", isExpandedResultado && "rotate-180")}
            />
          </div>
          {isExpandedResultado ? (
            <div className="mt-4 flex w-full flex-col border-t border-zinc-500 pt-[13px]">
              <div className="flex items-center justify-between">
                <span className="text-[0.6875rem] leading-[16.5px] text-zinc-500">Arquivos incluídos</span>
                <span className="text-[0.6875rem] leading-[16.5px] font-semibold text-zinc-700">{affectedFilesCount}</span>
              </div>
              <div className="flex items-center justify-between pt-3">
                <span className="text-[0.6875rem] leading-[16.5px] text-zinc-500">Tamanho estimado</span>
                <span className="text-[0.6875rem] leading-[16.5px] font-semibold text-zinc-700">{sizeLabel}</span>
              </div>
              <div className="flex items-center justify-between pt-3">
                <span className="text-[0.6875rem] leading-[16.5px] text-zinc-500">Regras aplicadas</span>
                <span className="text-[0.6875rem] leading-[16.5px] font-semibold text-zinc-700">{rulesCount}</span>
              </div>
              <div className="mt-3 flex w-full flex-col rounded-[10.4px] border border-zinc-200 bg-white/60 p-[9px]">
                <div className="flex items-center justify-between">
                  <span className="text-[0.6875rem] leading-[16.5px] font-semibold text-zinc-700">Prévia de arquivos</span>
                  <PreviewChevronGlyph aria-hidden="true" className="size-3" />
                </div>
                <ul className="mt-2 flex w-full flex-col gap-1">
                  {fileNames.map((name) => (
                    <li key={name} className="text-[0.625rem] leading-[15px] text-zinc-500">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        (() => {
          const config = SIMPLE_NODE_CONFIG[variant]
          const visibleLabel = label ?? config.label
          const visibleSubtitle = subtitle ?? config.subtitle
          const { Glyph, baked } = config
          return (
            <div className="flex items-center gap-3">
              {baked ? (
                <Glyph aria-hidden="true" className="h-9 w-[37px] shrink-0" />
              ) : (
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-brand-teal p-1.5">
                  <Glyph aria-hidden="true" className="size-full" />
                </div>
              )}
              <div className="flex flex-col">
                <p className="text-sm leading-5 font-semibold whitespace-nowrap text-zinc-700">{visibleLabel}</p>
                {visibleSubtitle ? (
                  <p className="text-[0.625rem] leading-[15px] whitespace-nowrap text-zinc-500">{visibleSubtitle}</p>
                ) : null}
              </div>
            </div>
          )
        })()
      )}
    </div>
  )
}

export { FreeModeItemNode }
