import * as React from "react"

import { cn } from "@/lib/utils"
import { Icon } from "@/components/atoms/icon"
import FolderArchiveGlyph from "@/assets/icons/FolderArchiveGlyph.svg?react"

export interface FileListProps extends React.ComponentProps<"div"> {
  /** Nome do arquivo ou pasta exibido na linha. */
  fileName: string
  /**
   * Eixo `Format` Figma-confirmado: `list` (`FileList`, 1025px, ícone+nome+
   * proprietário+tamanho), `storage` (`StorageList`, 1025px, sem coluna
   * Proprietário) e `list-sm` (`FileList-SM`, 560px, termina com
   * `atom/Icon/ArrowRight` em vez de tamanho).
   */
  format?: "list" | "storage" | "list-sm"
  /** Eixo `Style` Figma-confirmado. */
  state?: "idle" | "hover" | "pressed"
  /** Proprietário — coluna Figma-confirmada, só em `format="list"`. */
  owner?: string
  /** Tamanho — coluna `Tamanho_File` Figma-confirmada (ex.: "100MB"), formats `list`/`storage`. */
  size?: string
  /** Eixo `isIconOn` Figma-confirmado — mostra o ícone de arquivo (`molecule/ArchiveItem`). */
  showIcon?: boolean
}

/**
 * molecule/FileList (`1421:19200`, Figma-confirmado, descrição verbatim:
 * "estrutura de lista de aqurivo de todos os tipos") — linha de lista de
 * arquivo/pasta.
 *
 * Corrigido em 2026-08-11 (achado do usuário, protocolo Regra 11): a versão
 * anterior desta linha (`organism/file-list-item`, US-006) tinha um
 * `atom/PushButton` de ação e um `molecule/chip-folder-tag` **inventados**,
 * sem correspondência no Figma. Reescrita então para ícone+nome+
 * proprietário+tamanho (sem botão/chip).
 *
 * Nesta US (US-022) o componente é **relocado de `organisms/` para
 * `molecules/`** — o node Figma real se chama literalmente
 * `molecule/FileList`, não `organism/*`; a pasta antiga refletia uma
 * categorização 100% inferida (pré-acesso ao Figma, US-006), agora
 * corrigida pra bater com a taxonomia real do arquivo fonte (Regra 9).
 * Ganha também os 2 formats adicionais confirmados nesta US
 * (`storage`/`list-sm`, antes não implementados) e a prop `showIcon`
 * (`isIconOn`).
 *
 * Corrigido nesta auditoria (Regra 11, US-026): o ícone da linha
 * (`data-name="molecule/ArchiveItem"` no export) usava `lucide-react`'s
 * `FileIcon` genérico como placeholder — `get_screenshot` no nó
 * `1421:19203` confirma que o glifo real é a mesma pasta com gradiente
 * teal já exportada como `FolderArchiveGlyph.svg` (reusada de
 * `molecule/FileArchive`), não um ícone de documento outline. Trocado para
 * o asset real; `atom/ArchiveItem` (`1421:18214`) como átomo formal
 * próprio segue não implementado (catalogado em `AGENTS.md`). Seta de
 * `format="list-sm"` usa `atom/Icon/ArrowRight` real (Figma-confirmado),
 * diferente do placeholder `lucide-react` usado anteriormente em
 * `organism/file-list-container`.
 *
 * Corrigido em 2026-08-15 (achado do usuário: nome do arquivo duplicado —
 * uma vez em micro-texto sob o ícone, outra vez na coluna de nome da
 * linha): o micro-nome do glifo só era desligado em `format="list-sm"`
 * (`showName={!isSm}`); em `list`/`storage` ele ficava ligado, redundante
 * com o `<span>{fileName}</span>` da própria linha. Desligado sempre — o
 * micro-nome só faz sentido no ícone usado sozinho (grid), nunca composto
 * dentro de uma linha que já mostra o nome.
 *
 * Corrigido em 2026-08-18 (varredura de interatividade real, achado da
 * sessão de 2026-08-15 estendido ao catálogo): hover/pressed só mudavam de
 * aparência via a prop `state` controlada externamente, sem nenhuma classe
 * `hover:`/`active:` real — uma linha consumida sem controle explícito de
 * `state` nunca reagia ao mouse de verdade, mesmo padrão de bug já corrigido
 * em `atom/CloseButton`. Adicionadas classes `hover:`/`active:` reais
 * (interação de mouse funciona sem prop nenhuma); a prop `state` continua
 * funcionando por cima pra fixar um estado estático nas stories.
 */
function FileList({
  fileName,
  format = "list",
  state = "idle",
  owner = "Proprietário",
  size,
  showIcon = true,
  className,
  ...props
}: FileListProps) {
  const isSm = format === "list-sm"

  return (
    <div
      data-slot="file-list"
      data-format={format}
      data-state={state}
      className={cn(
        "flex w-full cursor-pointer items-center gap-4 rounded-lg px-3 py-2 transition-colors",
        "hover:bg-zinc-100 active:bg-brand-teal-light",
        isSm ? "max-w-[560px]" : "max-w-[1025px]",
        state === "hover" && "bg-zinc-100",
        state === "pressed" && "bg-brand-teal-light",
        className
      )}
      {...props}
    >
      {showIcon ? <FileListArchiveItem name={fileName} showName={false} /> : null}
      <span className="min-w-0 flex-1 truncate text-base text-brand-secondary-light">
        {fileName}
      </span>
      {format === "list" ? (
        <span className="shrink-0 text-base text-brand-secondary-light">{owner}</span>
      ) : null}
      {(format === "list" || format === "storage") && size ? (
        <span className="shrink-0 text-base text-brand-secondary-light">{size}</span>
      ) : null}
      {isSm ? <Icon name="ArrowRight" className="size-5 shrink-0 text-zinc-400" /> : null}
    </div>
  )
}

function FileListArchiveItem({ name, showName }: { name: string; showName: boolean }) {
  return (
    <div
      data-slot="file-list-archive-item"
      className="flex h-12 w-16 shrink-0 flex-col items-center justify-start gap-1"
    >
      <FolderArchiveGlyph aria-hidden="true" className="h-[31.846px] w-9 shrink-0" />
      {showName ? (
        <span className="flex h-3 w-full items-start justify-center overflow-hidden text-[0.625rem] whitespace-nowrap text-zinc-700 tracking-[0.012px]">
          {name}
        </span>
      ) : null}
    </div>
  )
}

export { FileList }
