import * as React from "react"

import { cn } from "@/lib/utils"
import { type FileTypeKind, DangerTypeLabel } from "@/components/atoms/type-label"
import { ClearButton } from "@/components/atoms/clear-button"
import { ThumbnailLarge } from "@/components/molecules/thumbnail-large"
import BookmarkBorderGlyph from "@/assets/icons/BookmarkBorder.svg?react"
import ShareGlyph from "@/assets/icons/Share.svg?react"

export interface PreviewPaneFile {
  name: string
  owner: string
  createdAt: string
  size: string
  location: string
  format: string
}

export interface PreviewPaneTag {
  label: string
  /** `Type=Tag, Style=Alert` (Figma-confirmado) — pílula vermelha preenchida. */
  danger?: boolean
}

export interface PreviewPaneProps extends React.ComponentProps<"div"> {
  file: PreviewPaneFile
  tags?: (string | PreviewPaneTag)[]
  onClose?: () => void
  onSave?: () => void
  onShare?: () => void
}

const FORMAT_KIND: Record<string, FileTypeKind> = {
  jpg: "image",
  jpeg: "image",
  png: "image",
  gif: "image",
  svg: "image",
  webp: "image",
  pdf: "document",
  doc: "document",
  docx: "document",
  txt: "document",
  xls: "document",
  xlsx: "document",
  ppt: "document",
  pptx: "document",
  mp4: "video",
  mov: "video",
  avi: "video",
  mkv: "video",
  webm: "video",
}

function fileTypeKind(format: string): FileTypeKind {
  return FORMAT_KIND[format.toLowerCase()] ?? "other"
}

/**
 * organism/preview-pane (`1421:19405`) — Figma-confirmado: "Painel de
 * visualização dos detalhes dos arquivos, apenas disponível no formato de
 * visualização em coluna." Compõe `molecule/thumbnail-large` (`1421:19570`,
 * reconciliado em US-026 — o placeholder textual anterior citava "sem asset
 * exportado", mas os assets (`ThumbnailFaviconImage.svg`,
 * `ThumbnailFaviconDocument.svg`, `thumbnail-large-preview.png`) já foram
 * baixados e o molecule já está implementado; passou a ser consumido de
 * verdade em vez de duplicar um placeholder genérico) e grid de metadados.
 * Botões "Salvar"/"Compartilhar" usam `PushButton
 * variant="neutral"` — ambos secundários no Figma (mesmo tratamento
 * visual), nenhum `button/primary`\|`secondary`\|`destructive` separado
 * (Regra 1).
 *
 * Corrigido em auditoria Regra 11, 3ª passada (US-026, 2026-08-12):
 * releitura real de `get_design_context` no nó `1421:19405` mostra a linha
 * "Formato" da grid de metadados como texto simples (`text-[13px]`, mesmo
 * tratamento de "Proprietário"/"Criado"/"Tamanho") — **sem** badge/ponto
 * colorido. O comentário anterior desta função afirmava o oposto (`atom/
 * badge/TypeLabel` na linha "Formato"); estava invertido. `FileTypeLabel`
 * removido dessa linha (virou texto puro); a seção "Etiquetas" É onde o
 * Figma usa de fato `atom/badge/TypeLabel` — 2 instâncias reais no nó,
 * `Type=Tag_Global,Style=Neutral` (pílula neutra) e `Type=Tag,Style=Alert`
 * (pílula vermelha preenchida, rótulo "Urgente", mesmo token
 * `--brand-feedback-danger-default` #bc3426 do `DangerTypeLabel` já
 * existente no design system) — reusado aqui via prop `tags` aceitando
 * `{ label, danger? }` além de `string` simples (Regra 10 — reuso, não
 * reimplementação). ⚠️ Tensão com a Regra 8 do protocolo de auditoria
 * ("danger = texto-only, nunca fundo vermelho preenchido"): o Figma real
 * mostra fundo preenchido para este badge — mesma tensão já registrada
 * para `DangerTypeLabel`/`atom/PushButton isDestructive`, não resolvida
 * aqui (Regra 9), documentada para decisão humana.
 *
 * 🔧 Corrigido em 2026-08-13 (US-026, pass12): releitura fresca confirmou a
 * tag neutra literal "Recentes" e os ícones exportados `clear`,
 * `bookmark_border` e `atom/Icon/Share`; a story usava "Global" e ícones
 * `lucide-react`. Agora usa os assets Figma já presentes no repositório.
 */
function PreviewPane({ file, tags = [], onClose, onSave, onShare, className, ...props }: PreviewPaneProps) {
  return (
    <aside
      data-slot="preview-pane"
      className={cn("flex w-96 flex-col gap-4 rounded-[20px] border border-brand-teal/20 bg-effect-glass-white-70 p-4", className)}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-brand-teal/20 pb-4">
        <h3 className="text-xl font-bold text-zinc-700">Detalhes</h3>
        <ClearButton
          label="Fechar"
          onClick={onClose}
          className="h-6 w-8 rounded text-zinc-500"
          iconClassName="size-4"
        />
      </div>
      <div className="flex items-center justify-center">
        <ThumbnailLarge
          fileType={fileTypeKind(file.format) === "image" ? "image" : "document"}
          fileName={file.name}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl font-medium text-zinc-700">{file.name}</h4>
        <dl className="grid grid-cols-2 gap-y-3 border-t border-zinc-200 pt-3 text-sm">
          <dt className="text-zinc-600">Proprietário</dt>
          <dd className="text-xs text-zinc-800">{file.owner}</dd>
          <dt className="text-zinc-600">Criado</dt>
          <dd className="text-xs text-zinc-800">{file.createdAt}</dd>
          <dt className="text-zinc-600">Formato</dt>
          <dd className="text-xs text-zinc-800">{file.format}</dd>
          <dt className="text-zinc-600">Tamanho</dt>
          <dd className="text-xs text-zinc-800">{file.size}</dd>
          <dt className="text-zinc-600">Localização</dt>
          <dd className="text-xs text-brand-teal">{file.location}</dd>
        </dl>
      </div>
      {tags.length > 0 ? (
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-zinc-700">Etiquetas</span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              const t: PreviewPaneTag = typeof tag === "string" ? { label: tag } : tag
              return t.danger ? (
                <DangerTypeLabel key={t.label} label={t.label} />
              ) : (
                <span
                  key={t.label}
                  className="rounded-md border border-zinc-500/20 bg-zinc-100 px-2 py-0.5 text-xs text-zinc-900"
                >
                  {t.label}
                </span>
              )
            })}
          </div>
        </div>
      ) : null}
      <div className="flex items-center gap-3 pt-2">
        <button
          type="button"
          onClick={onSave}
          className="flex h-8 flex-1 items-center justify-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 text-xs text-zinc-600 transition-colors hover:bg-zinc-100"
        >
          <BookmarkBorderGlyph aria-hidden="true" className="h-5 w-6 text-zinc-600" />
          Salvar
        </button>
        <button
          type="button"
          onClick={onShare}
          className="flex h-8 flex-1 items-center justify-center gap-2 rounded-md border border-zinc-200 bg-zinc-100 text-xs text-zinc-900 transition-colors hover:bg-zinc-200"
        >
          <ShareGlyph aria-hidden="true" className="size-3 text-zinc-900" />
          Compartilhar
        </button>
      </div>
    </aside>
  )
}

export { PreviewPane }
