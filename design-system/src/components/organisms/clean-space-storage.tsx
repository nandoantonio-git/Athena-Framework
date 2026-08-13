import * as React from "react"
import { Trash2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { PushButton } from "@/components/atoms/push-button"
import { CloseButton } from "@/components/atoms/close-button"
import { type StorageTier } from "@/components/atoms/storage-tier-badge"
import { CleanSpaceListSelection } from "@/components/celules/clean-space-list-selection"

export interface CleanSpaceLargeFile {
  name: string
  meta: string
  tier: StorageTier
}

export interface CleanSpaceDuplicateGroup {
  name: string
  copiesLabel: string
}

export interface CleanSpaceStorageProps extends React.ComponentProps<"div"> {
  largeFiles: CleanSpaceLargeFile[]
  duplicateGroups: CleanSpaceDuplicateGroup[]
  onClose?: () => void
  onDeleteFile?: (file: CleanSpaceLargeFile) => void
  onDeleteDuplicates?: (group: CleanSpaceDuplicateGroup) => void
  onSelectAll?: () => void
  onDeselectAll?: () => void
}

/**
 * organism/cleanSpaceStorage (`1439:16908`) — Figma-confirmado: "modal que
 * abre em overlay ao selecionar a opção de liberar espaço. nele você pode
 * otimizar seu espaço com arquivos grande e duplicados, economizando
 * espaço." Título visível Figma-confirmado em 2026-08-10: **"Liberar
 * Espaço"** (o título anterior, com o verbo "Limpar" em vez de "Liberar",
 * foi atualizado pelo usuário diretamente no Figma e fica proibido como
 * texto visível — Regra 5, docs/conflicts.md, entrada resolvida).
 *
 * Tags de tier reutilizam `atom/StorageTierBadge` (`1457:21014`,
 * Figma-confirmado, rótulos aprovados "Acesso rápido"/"Longo prazo" —
 * Regra 5) em vez de markup duplicado. Botões "Excluir"/"Excluir cópias"
 * usam `PushButton` com `isDestructive` (chrome neutro, texto
 * `--destructive`); "Selecionar todos" usa `variant="primary"`;
 * "Desfazer seleção" fica `disabled` (estado lido/neutro).
 */
function CleanSpaceStorage({
  largeFiles,
  duplicateGroups,
  onClose,
  onDeleteFile,
  onDeleteDuplicates,
  onSelectAll,
  onDeselectAll,
  className,
  ...props
}: CleanSpaceStorageProps) {
  return (
    <div
      data-slot="clean-space-storage"
      role="dialog"
      aria-label="Liberar Espaço"
      className={cn(
        "flex w-full max-w-2xl flex-col gap-4 rounded-3xl border border-zinc-200 bg-effect-glass-white-70 p-6 shadow-lg",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-medium text-zinc-900">Liberar Espaço</h2>
          <p className="text-base text-zinc-700">Gerencie arquivos que ocupam seu espaço</p>
        </div>
        <CloseButton size="md" onClick={onClose} />
      </div>

      <section className="flex flex-col gap-3 rounded-lg border border-zinc-200 bg-effect-glass-white-70 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-zinc-900">Arquivos grandes</h3>
          <div className="flex gap-2">
            <PushButton
              variant="neutral"
              disabled
              onClick={onDeselectAll}
              className="h-auto border-none bg-transparent p-0 text-xs font-normal text-zinc-300 hover:bg-transparent disabled:opacity-100"
            >
              Desfazer seleção
            </PushButton>
            <PushButton
              variant="primary"
              onClick={onSelectAll}
              className="h-auto border-none bg-transparent p-0 text-xs font-normal text-brand-teal hover:bg-transparent active:bg-transparent"
            >
              Selecionar todos
            </PushButton>
          </div>
        </div>
        <ul className="flex max-h-64 flex-col gap-1 overflow-auto rounded-lg border border-zinc-100 p-1">
          {largeFiles.map((file) => (
            <li key={file.name}>
              <CleanSpaceListSelection name={file.name} meta={file.meta} tier={file.tier} />
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          <PushButton
            variant="neutral"
            isDestructive
            icon={Trash2}
            onClick={() => largeFiles[0] && onDeleteFile?.(largeFiles[0])}
            className="h-8 gap-2 rounded-md bg-effect-glass-white-70 px-3 text-xs"
          >
            Excluir
          </PushButton>
        </div>
      </section>

      <section className="flex flex-col gap-3 rounded-lg border border-zinc-200 bg-effect-glass-white-70 p-4">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-medium text-zinc-900">Arquivos duplicados</h3>
          <span className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-0.5 text-xs text-zinc-900">Prévia</span>
        </div>
        <p className="text-sm text-zinc-500">
          Detecção de duplicados ainda não existe de verdade, os grupos abaixo são exemplos ilustrativos.
        </p>
        <ul className="flex flex-col gap-2">
          {duplicateGroups.map((group) => (
            <li key={group.name} className="flex items-center justify-between rounded-lg border border-zinc-200 p-3">
              <div>
                <p className="text-base text-zinc-900">{group.name}</p>
                <p className="text-sm text-zinc-500">{group.copiesLabel}</p>
              </div>
              <PushButton
                variant="neutral"
                isDestructive
                icon={Trash2}
                onClick={() => onDeleteDuplicates?.(group)}
                className="h-8.5 gap-2 rounded-md bg-effect-glass-white-70 px-4 text-xs"
              >
                Excluir cópias
              </PushButton>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export { CleanSpaceStorage }
