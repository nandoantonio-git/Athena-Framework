import * as React from "react"

import { cn } from "@/lib/utils"
import { Icon } from "@/components/atoms/icon"

export interface FileListHeaderProps extends React.ComponentProps<"div"> {
  /**
   * Eixo `Format` Figma-confirmado: `home` (1 linha — "Nome" + "Armazenamento"
   * com ícone de ordenação) e `storage-status` (2 linhas — "Nome" +
   * "Proprietário"/"Tamanho do Arquivo", mais uma linha de data abaixo).
   */
  format?: "home" | "storage-status"
  /** Texto da linha de data em `format="storage-status"` (default Figma-confirmado: "Hoje"). */
  dateLabel?: string
}

/**
 * molecule/FileList/Header (`1421:19184`, Figma-confirmado, descrição
 * verbatim: "estrutura do header de lista") — cabeçalho de coluna acima de
 * `molecule/FileList` (mesma largura máxima, 1025px, pra alinhar colunas).
 *
 * `format="home"`: coluna "Nome" (20px bold) + botão de ordenação
 * "Armazenamento" com `atom/Icon/ArrowDown` (`arrow_downward`,
 * Figma-confirmado). `format="storage-status"`: "Nome" + "Proprietário" +
 * "Tamanho do Arquivo" (sem ícone), mais uma 2ª linha com `dateLabel`.
 *
 * Cor de borda `neutral-border-strong` (`#3a3a3a`) sem token Zinc exato —
 * aproximada por `border-zinc-800` (Regra 3, paleta neutra suspensa).
 *
 * Corrigido nesta auditoria (Regra 11, US-026): a borda inferior no export
 * Figma fecha a linha "Nome"/"Proprietário"/"Tamanho do Arquivo"
 * especificamente (dentro do container de 56px), com a linha "Hoje"
 * (`dateLabel`) aparecendo *abaixo* dessa borda, separada por
 * `gap-[16px]`. A versão anterior aplicava a borda no wrapper externo
 * (envolvendo as 2 linhas juntas), deixando "Hoje" acima da borda em vez
 * de abaixo — corrigido movendo `border-b` para a linha 1 e adicionando o
 * `gap-4` real do Figma entre as linhas.
 */
function FileListHeader({
  format = "home",
  dateLabel = "Hoje",
  className,
  ...props
}: FileListHeaderProps) {
  const isStorageStatus = format === "storage-status"

  return (
    <div
      data-slot="file-list-header"
      data-format={format}
      className={cn(
        "flex w-full max-w-[1025px] flex-col items-start rounded-t-lg",
        isStorageStatus && "gap-4",
        className
      )}
      {...props}
    >
      <div className="flex h-14 w-full items-center justify-between border-b border-zinc-800 px-3">
        <span className="text-xl font-bold text-brand-secondary">Nome</span>
        {isStorageStatus ? (
          <div className="flex items-center gap-16 pr-2">
            <span className="text-xl font-bold text-brand-secondary-light">Proprietário</span>
            <span className="text-xl font-bold text-brand-secondary-light">Tamanho do Arquivo</span>
          </div>
        ) : (
          <button
            type="button"
            data-slot="file-list-header-sort"
            className="flex items-center gap-2 pr-2 text-xl font-bold text-brand-secondary-light"
          >
            <Icon name="ArrowDown" className="size-4 shrink-0" />
            Armazenamento
          </button>
        )}
      </div>
      {isStorageStatus ? (
        <div className="px-3 pb-4">
          <span className="text-base text-zinc-700">{dateLabel}</span>
        </div>
      ) : null}
    </div>
  )
}

export { FileListHeader }
