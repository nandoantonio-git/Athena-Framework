import * as React from "react"

import { cn } from "@/lib/utils"
import ResultadoGlyph from "@/assets/icons/ItemNodeResultadoGlyph.svg?react"
import ChevronGlyph from "@/assets/icons/ItemNodeChevron.svg?react"
import PreviewChevronGlyph from "@/assets/icons/ItemNodePreviewChevron.svg?react"

const DEFAULT_FILE_NAMES = [
  "Aula-introducao.mov",
  "Treinamento-produto.mp4",
  "Workshop-clientes.mov",
  "Demo-campanha.mp4",
] as const

export interface FreeModeOutputNodeProps extends React.ComponentProps<"div"> {
  /** `Property 1=Variant2` do Figma — placeholder vazio, altura fixa 68px com conteúdo cortado (ainda sem pasta de destino conectada). */
  variant?: "default" | "compact"
  folderLabel?: string
  affectedFilesCount?: number
  sizeLabel?: string
  rulesCount?: number
  fileNames?: readonly string[]
}

/**
 * celule/MainCanvas/Organization/FreeMode/OutputNode (`1421:20262`,
 * Figma-confirmado) — "Nodo de visualização do output final do modo livre
 * de template". Reusa os mesmos glifos de `celule/FreeModeItemNode`
 * (`resultado`, bytes idênticos confirmados via `download_assets`) — só a
 * caixa do ícone diverge: `#176a78` (hex literal Figma-confirmado, não o
 * token `--brand-primary-default`/`#007e96` usado no resto do canvas).
 * `compact` (`Variant2`) é o placeholder vazio: mesmo markup interno do
 * Figma, mas `h-[68px] overflow-hidden` corta as linhas de estatística —
 * reproduzido aqui literal (não é um variant "sem estatísticas", é um
 * corte visual, conforme o node real).
 *
 * "Prévia de arquivos" ganhou interação real em 2026-08-15 (decisão
 * humana, feature nova — não Figma-confirmada, Regra 9): o Figma só
 * confirma o corte estático em 34.5px (linha do cabeçalho + chevron,
 * lista sempre invisível); o usuário pediu uma mini dropdown list de
 * verdade pra visualizar a prévia. Inferido a partir do mesmo padrão de
 * expand/collapse já usado em `celule/DropListItem`/
 * `celule/nodoContextMenuItem` (clique no cabeçalho alterna estado local,
 * chevron gira 180°, altura passa de fixa pra `fit-content`).
 */
function FreeModeOutputNode({
  variant = "default",
  folderLabel = variant === "compact" ? "Nome pasta output" : 'Pasta "Vídeos grandes"',
  affectedFilesCount = 128,
  sizeLabel = "4.2 GB",
  rulesCount = 4,
  fileNames = DEFAULT_FILE_NAMES,
  className,
  ...props
}: FreeModeOutputNodeProps) {
  const isCompact = variant === "compact"
  const [previewExpanded, setPreviewExpanded] = React.useState(false)
  return (
    <div
      data-slot="free-mode-output-node"
      data-variant={variant}
      className={cn(
        "flex w-[238px] flex-col items-start rounded-[14.4px] border border-brand-teal bg-zinc-100 p-[17px]",
        isCompact ? "h-[68px] overflow-hidden shadow-[0px_8px_20px_0px_rgba(0,126,150,0.12)]" : "shadow-[0px_8px_10px_0px_rgba(0,126,150,0.12)]",
        className
      )}
      {...props}
    >
      <div className="flex w-full items-center gap-3">
        <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[10.4px] bg-[#176a78]">
          <ResultadoGlyph aria-hidden="true" className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm leading-5 font-semibold text-zinc-700">Resultado</p>
          <p className="truncate text-[0.625rem] leading-[15px] text-brand-teal">{folderLabel}</p>
        </div>
        <ChevronGlyph aria-hidden="true" className={cn("size-4 shrink-0", !isCompact && "rotate-180")} />
      </div>
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
        <div
          className={cn(
            "mt-3 flex w-full flex-col overflow-hidden rounded-[10.4px] border border-zinc-200 bg-white/60 p-[9px] transition-[height]",
            previewExpanded ? "h-fit" : "h-[34.5px]"
          )}
        >
          <button
            type="button"
            onClick={() => setPreviewExpanded((expanded) => !expanded)}
            aria-expanded={previewExpanded}
            className="flex w-full cursor-pointer items-center justify-between"
          >
            <span className="text-[0.6875rem] leading-[16.5px] font-semibold text-zinc-700">Prévia de arquivos</span>
            <PreviewChevronGlyph
              aria-hidden="true"
              className={cn("size-3 shrink-0 transition-transform", previewExpanded && "rotate-180")}
            />
          </button>
          <ul className="mt-2 flex w-full flex-col gap-1">
            {fileNames.map((name) => (
              <li key={name} className="text-[0.625rem] leading-[15px] text-zinc-500">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export { FreeModeOutputNode }
