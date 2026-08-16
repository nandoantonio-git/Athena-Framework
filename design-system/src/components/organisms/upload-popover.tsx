import * as React from "react"
import { FileIcon, X, Pause, Maximize2, MoreVertical, CheckCircle2 } from "lucide-react"

import { cn } from "@/lib/utils"

export interface UploadPopoverFile {
  name: string
  done?: boolean
}

export interface UploadPopoverProps extends React.ComponentProps<"div"> {
  fileCount: number
  percent: number
  secondsLeft?: number
  files: UploadPopoverFile[]
  onPause?: () => void
  onExpand?: () => void
  onMore?: () => void
  onClose?: () => void
}

/**
 * organism/upload-popover (`1421:19292`) — Figma-confirmado: "pop over que
 * se preenche dinamicamente conforme status de upload. usado no canto
 * inferior esquerdo." Duas variantes Figma (`Toast (The Focused Component)`
 * \| `Variant2`) — implementadas aqui como um único componente: o cabeçalho
 * (badge circular de progresso + título + subtítulo + ações) sempre visível
 * (bate com `Variant2`), e a seção "IN PROGRESS" (barra) + lista de
 * arquivos individuais só aparece quando `files` não está vazio (bate com
 * `Toast (The Focused Component)`, que é a variante que soma os dois).
 *
 * ⚠️ Corrigido em 2026-08-11 após achado do usuário — auditoria anterior
 * não seguia a Regra 11: a barra de progresso anterior usava um layout
 * inventado (badge de porcentagem como texto solto, só 2 botões de ação).
 * Repetindo `get_design_context` no node real: o badge é um anel de
 * progresso circular (SVG `stroke-dasharray`, técnica padrão — o Figma não
 * exporta um vetor por valor de `%`, já que é dinâmico) com a porcentagem
 * dentro; a fileira de ações tem 4 ícones confirmados (Pausar/Maximizar/Mais
 * opções + Fechar, com um divisor antes do Fechar), não 2; e a barra em si
 * (quando presente) usa rótulo "EM ANDAMENTO" à esquerda + porcentagem à
 * direita — o detalhe extra do Figma ("62% • 18MB OF 29MB", texto 100% em
 * inglês) não é reproduzido por não termos dado de bytes na API do
 * componente (Regra 11.4: não inventar um número que a prop não fornece).
 *
 * Corrigido em auditoria Regra 11 seguinte (US-026): a linha de cada
 * arquivo na lista tinha só 1 ícone (status, à esquerda, substituindo o
 * ícone de tipo de arquivo) — `get_design_context` real mostra 2 ícones
 * por linha: tipo de arquivo à esquerda (`imgContainer4`/`imgContainer6`,
 * assets não exportáveis 1:1 sem download nó-a-nó) + indicador de status à
 * direita (check quando concluído, ponto sólido quando em andamento — cor
 * Figma bruta `#006377` sem variável semântica associada, mapeada para o
 * token `brand-teal` já usado no resto do componente em vez de um hex novo
 * solto, Regra 2). Reordenado para bater com a estrutura real.
 *
 * ⚠️ Gap de terminologia (baixa urgência, ver docs/conflicts.md): o texto
 * Figma-confirmado deste nó está 100% em inglês ("Uploading 3 files", "6
 * seconds left", "IN PROGRESS") — inconsistente com o restante da página,
 * que é em português. Este componente usa a tradução direta ("Enviando N
 * arquivos" etc.), nunca o texto literal do Figma.
 *
 * Corrigido em 2026-08-15 (achado do usuário: "a barra de status é o
 * preenchimento do card") — releitura confirmou uma camada inteira que
 * faltava: além da barrinha fina de "Em andamento", o card tem um overlay
 * de fundo (`data-name="Overlay"`, `rgba(107,107,104,0.1)`) que preenche
 * da esquerda até a % de progresso, atrás de todo o conteúdo — não uma
 * segunda barra, é o próprio card que "se preenche dinamicamente conforme
 * status de upload" (descrição Figma verbatim). Estava totalmente ausente
 * da implementação anterior (só a barrinha existia). Adicionado como
 * `<div>` absoluto com `width: {percent}%`, atrás do conteúdo (`z-0`
 * implícito por ordem no DOM).
 */
function UploadPopover({
  fileCount,
  percent,
  secondsLeft,
  files,
  onPause,
  onExpand,
  onMore,
  onClose,
  className,
  ...props
}: UploadPopoverProps) {
  const clamped = Math.min(100, Math.max(0, percent))
  const ringCircumference = 2 * Math.PI * 9
  const ringOffset = ringCircumference * (1 - clamped / 100)
  return (
    <div
      data-slot="upload-popover"
      role="status"
      className={cn(
        "relative flex w-96 flex-col gap-3 overflow-hidden rounded-xl border border-zinc-200 bg-effect-glass-white-70 p-6 shadow-lg backdrop-blur-md",
        className
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        data-slot="upload-popover-fill"
        className="absolute inset-y-0 left-0 bg-zinc-500/10 transition-[width]"
        style={{ width: `${clamped}%` }}
      />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative grid size-6 shrink-0 place-items-center text-brand-teal">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="absolute inset-0 size-6 -rotate-90">
              <circle cx="12" cy="12" r="9" strokeWidth="2.5" className="stroke-zinc-200" fill="none" />
              <circle
                cx="12"
                cy="12"
                r="9"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={ringCircumference}
                strokeDashoffset={ringOffset}
                className="transition-[stroke-dashoffset]"
              />
            </svg>
            <span className="relative text-[0.5rem] font-bold leading-none text-brand-teal">{clamped}%</span>
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-zinc-900">Enviando {fileCount} arquivos</span>
            {secondsLeft !== undefined ? (
              <span className="text-xs text-zinc-500">{secondsLeft} segundos restantes</span>
            ) : null}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Pausar envio"
            onClick={onPause}
            className="rounded-md p-1.5 text-zinc-500 hover:bg-zinc-100"
          >
            <Pause aria-hidden="true" className="size-3" />
          </button>
          <button
            type="button"
            aria-label="Maximizar"
            onClick={onExpand}
            className="rounded-md p-1.5 text-zinc-500 hover:bg-zinc-100"
          >
            <Maximize2 aria-hidden="true" className="size-3" />
          </button>
          <button
            type="button"
            aria-label="Mais opções"
            onClick={onMore}
            className="rounded-md p-1.5 text-zinc-500 hover:bg-zinc-100"
          >
            <MoreVertical aria-hidden="true" className="size-3" />
          </button>
          <span className="mx-1 h-4 w-px bg-zinc-200" aria-hidden="true" />
          <button
            type="button"
            aria-label="Fechar"
            onClick={onClose}
            className="rounded-md p-1.5 text-zinc-500 hover:bg-zinc-100"
          >
            <X aria-hidden="true" className="size-3" />
          </button>
        </div>
      </div>
      {files.length > 0 ? (
        <div className="relative flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[0.625rem] font-bold tracking-wide text-zinc-400 uppercase">
              <span>Em andamento</span>
              <span>{clamped}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
              <div className="h-full rounded-full bg-brand-teal transition-[width]" style={{ width: `${clamped}%` }} />
            </div>
          </div>
          <ul className="flex flex-col gap-1 border-t border-zinc-200 pt-2">
            {files.map((file) => (
              <li key={file.name} className="flex items-center gap-2 text-xs text-zinc-600">
                <FileIcon aria-hidden="true" className="size-2.5 shrink-0 text-zinc-400" />
                <span className="flex-1 truncate">{file.name}</span>
                {file.done ? (
                  <CheckCircle2 aria-hidden="true" className="size-2.5 shrink-0 text-brand-teal" />
                ) : (
                  <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-brand-teal" />
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export { UploadPopover }
