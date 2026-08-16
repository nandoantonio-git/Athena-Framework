import * as React from "react"

import { cn } from "@/lib/utils"
import { PushButton } from "@/components/atoms/push-button"
import { ButtonAdd } from "@/components/atoms/button-add"
import { Icon } from "@/components/atoms/icon"
import { CloseButton } from "@/components/atoms/close-button"
import { SearchInput } from "@/components/molecules/search-input"
import { ArchiveBrowserModalListItem } from "@/components/molecules/archive-browser-modal-list-item"

export interface SaveLongTermFile {
  name: string
  meta: string
}

export interface SaveLongTermFileStorageProps extends React.ComponentProps<"div"> {
  files: SaveLongTermFile[]
  onAddFiles?: () => void
  selectedCount: number
  savingsLabel: string
  onCancel?: () => void
  onContinue?: () => void
}

/**
 * organism/Save/LongTermFileStorage (`1439:16907`) — sem descrição própria
 * consultada nó-a-nó, mas 100% Figma-confirmado por código-fonte
 * (`get_design_context`): título verbatim **"Guardar no longo prazo"**
 * (termo aprovado, Regra 5), destino "Guardados" (`atom/Icon/Arquivar`),
 * copy "Por que guardar?" e nota de sufixo automático. Nenhum termo
 * proibido encontrado — fluxo ao vivo real de "Guardar" verificado limpo.
 * Fundo usa Liquid Glass — ver Tokens/Materials (Regra 10).
 *
 * Reconciliado em 2026-08-11 (US-016): "Adicionar arquivos" agora usa
 * `atom/buttonAdd` (`1421:20509`, Figma-confirmado) — a description do
 * Figma cita textualmente este fluxo ("adicionar novos arquivos no fluxo de
 * guardar arquivos em longo prazo") como um dos 2 usos reais do átomo.
 *
 * Corrigido em auditoria Regra 11 (US-026): `get_design_context` real no nó
 * confirma 2 elementos que a implementação anterior omitia por completo —
 * `molecule/SearchBar/Placeholder/XXL` (barra de busca full-width logo
 * abaixo do header) e o glifo de arquivo por linha
 * (`molecule/ArchiveBrowserModal/ListItem`, mesmo node-name já usado em
 * `organism/ArchiveBrowserModal`). Reusa `SearchInput`/
 * `ArchiveBrowserModalListItem` já existentes (Regra 10 — spec única, não
 * reimplementada) em vez do `<span>` de texto solto anterior.
 *
 * 🔧 Corrigido em 2026-08-13 (US-026, pass12): releitura fresca confirmou
 * root `w-[700px]`, coluna esquerda `w-[270px]` e close como
 * `atom/CloseButton` exportado; a implementação usava `max-w-2xl`, coluna
 * `w-64` e glifo Lucide `X`.
 *
 * Corrigido em 2026-08-15 (achado do usuário: material glass ausente pra
 * segregar a coluna esquerda) — a coluna de seleção de arquivos usava
 * `bg-effect-glass-white-70`, o mesmo token do card raiz, ficando
 * indistinguível do fundo. Trocado para `bg-effect-glass-white-36` +
 * borda sutil (`border-zinc-200`), mesmo par usado nos painéis internos
 * de `organism/OrganizePanel/DropZone` e `organism/cleanSpaceStorage`
 * (Regra 10 — camada -70 pro card externo, -36 pro painel aninhado, ver
 * `Tokens/Materials`).
 */
function SaveLongTermFileStorage({
  files,
  onAddFiles,
  selectedCount,
  savingsLabel,
  onCancel,
  onContinue,
  className,
  ...props
}: SaveLongTermFileStorageProps) {
  return (
    <div
      data-slot="save-long-term-file-storage"
      role="dialog"
      aria-label="Guardar no longo prazo"
      className={cn(
        "flex w-[700px] flex-col gap-5 overflow-hidden rounded-3xl bg-effect-glass-white-70 p-6 shadow-lg",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-medium text-zinc-900">Guardar no longo prazo</h2>
          <p className="text-base text-zinc-700">Revise a taxonomia sugerida antes de aplicar as mudanças.</p>
        </div>
        <CloseButton size="md" onClick={onCancel} />
      </div>
      <SearchInput className="w-full max-w-none" />
      <div className="flex gap-8">
        <div className="flex w-[270px] flex-col gap-3 rounded-md border border-zinc-200 bg-effect-glass-white-36 p-3">
          {files.map((file) => (
            <ArchiveBrowserModalListItem key={file.name} fileName={file.name} meta={file.meta} />
          ))}
          <ButtonAdd label="Adicionar arquivos" onClick={onAddFiles} className="w-full border-zinc-200" />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {files.map((file) => (
              <span key={file.name} className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-700">
                {file.name}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-xl font-bold text-zinc-900">Por que guardar?</p>
            <p className="text-sm text-zinc-500">
              Arquivos em longo prazo ficam seguros por anos e liberam espaço ativo. Para resgatar, é só solicitar,
              você recebe um link por e-mail e o arquivo volta para o seu armazenamento em até 8h.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-zinc-500">Destino:</span>
            <span className="flex w-fit items-center gap-1.5 rounded-md bg-zinc-100 px-3 py-1.5 text-xs text-zinc-900">
              <Icon name="Arquivar" className="size-4" />
              Guardados
            </span>
          </div>
        </div>
      </div>
      <p className="rounded-lg bg-effect-glass-white-70 px-3 py-2.5 text-xs text-zinc-500">
        {`Se algum nome já existir no destino, o Kandrive adiciona automaticamente um sufixo (ex.: "arquivo (1)") para evitar substituir o arquivo existente.`}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-xs text-zinc-800">
          {selectedCount} selecionado · economia de {savingsLabel}
        </p>
        <div className="flex gap-3">
          <PushButton variant="neutral" className="h-8 px-4 text-xs" onClick={onCancel}>
            Cancelar
          </PushButton>
          <PushButton variant="primary" className="h-8 px-4 text-xs" onClick={onContinue}>
            Continuar
          </PushButton>
        </div>
      </div>
    </div>
  )
}

export { SaveLongTermFileStorage }
