import * as React from "react"

import { cn } from "@/lib/utils"
import { FileList } from "@/components/molecules/file-list"

export interface FileListContainerRow {
  name: string
}

export interface FileListContainerProps extends React.ComponentProps<"div"> {
  rows: FileListContainerRow[]
  onOpen?: (row: FileListContainerRow) => void
}

/**
 * organism/file-list-container (`1421:19687`) — Figma-confirmado:
 * "Visualização dos arquivos em formato de coluna/lista." Usada no modo de
 * visualização em colunas junto de `organism/preview-pane`.
 *
 * Reconciliado em US-022 para compor `molecule/FileList`
 * (`format="list-sm"`, ícone+nome+`atom/Icon/ArrowRight`, sem proprietário/
 * tamanho — mesma composição visual que este container já tinha) em vez da
 * marcação duplicada anterior (ícone/seta via `lucide-react` reimplementados
 * localmente) — Regra 10. `molecule/FileList` só foi corrigido pra bater
 * com o Figma real nesta mesma US (antes vivia, com composição já
 * divergente, em `organisms/file-list-item`); este container nunca tinha
 * sido atualizado pra reusá-lo. A prop `owner` foi removida — `format="list-sm"`
 * não renderiza coluna de proprietário no Figma real (era exibida só via
 * `sr-only`, aproximação sem node Figma correspondente).
 *
 * **Não compõe `molecule/FileList/Header`**: o pareamento Header+FileList
 * confirmado no Figma (`figma-inventory.md`, "Home-List Mode") é uma tabela
 * de largura cheia (1025px); este container é o painel estreito de
 * navegação em colunas (`max-w-lg`) — contextos de tela diferentes, não
 * assumidos como a mesma composição (Regra 9).
 */
function FileListContainer({ rows, onOpen, className, ...props }: FileListContainerProps) {
  return (
    <div
      data-slot="file-list-container"
      className={cn(
        "flex w-[544px] flex-col overflow-hidden rounded-l-lg border-r border-[var(--neutral-border-default,#707070)]",
        className
      )}
      {...props}
    >
      {rows.map((row) => (
        <button
          key={row.name}
          type="button"
          onClick={() => onOpen?.(row)}
          className="w-full text-left transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50"
        >
          <FileList fileName={row.name} format="list-sm" showIcon className="max-w-none" />
        </button>
      ))}
    </div>
  )
}

export { FileListContainer }
