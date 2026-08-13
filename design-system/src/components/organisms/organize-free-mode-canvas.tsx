import * as React from "react"
import { Filter, Plus, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { PushButton } from "@/components/atoms/push-button"
import { FreeModeItemNode } from "@/components/celules/free-mode-item-node"
import { FreeModeListItem, type FreeModeListItemOperation } from "@/components/celules/free-mode-list-item"
import { FreeModeOutputNode } from "@/components/celules/free-mode-output-node"
import { FreeModeButtons } from "@/components/celules/free-mode-buttons"

const ADD_NODE_OPERATIONS: readonly FreeModeListItemOperation[] = [
  "juncao",
  "subtracao",
  "intersseccao",
  "exclusao",
  "filtro-tamanho",
  "filtro-formato",
  "filtro-data",
]

/**
 * Conectores tracejados do canvas — elemento Figma-confirmado no nó
 * `1439:16906`. Implementados como overlay absoluto porque as curvas
 * pertencem ao canvas composto, não às celules individuais.
 */
function FreeModeConnectors() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1117 806"
      className="pointer-events-none absolute inset-x-0 top-0 h-[806px] w-[1117px] text-brand-teal"
    >
      <path d="M244 354 H333" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
      <path d="M244 354 C285 354 285 430 333 430" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
      <path d="M525 333 C585 333 585 430 647 430" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
      <path d="M525 430 C585 430 585 430 647 430" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
      <path d="M753 429 H776" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
      <path d="M690 463 V540" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
    </svg>
  )
}

/**
 * molecule/contextMenu/FreeMode (Figma-confirmado dentro do nó
 * `1439:16906`, sub-nó `1422:24801`) — painel flutuante de edição de regra
 * de filtro, Liquid Glass (Regra 10), que faltava por completo até esta
 * auditoria (ver `docs/conflicts.md`). Elementos Figma-confirmados
 * reproduzidos: título "Filtro" + ícone; linha de condição preenchida
 * ("Tamanho" / "Maior que" / "1.0 GB" + botão remover); toggle lógico
 * "E"/"OU" (E ativo); 2ª linha de condição em rascunho/desabilitada
 * ("Atributo" / "Operação" / "Valor..."); botão "+ Adicionar regra";
 * rodapé "Descartar Mudanças" / "Salvar Mudanças". Estático (Regra 9: não
 * implementa edição real, só a composição visual confirmada).
 */
function FreeModeFilterPanel({ className }: { className?: string }) {
  return (
    <div
      data-slot="free-mode-filter-panel"
      className={cn(
        "flex w-[360px] flex-col gap-3 rounded-[36px] bg-zinc-100/80 p-6 shadow-lg backdrop-blur-md",
        className
      )}
    >
      <div className="flex items-center gap-2 px-1 pt-1">
        <Filter aria-hidden="true" className="size-3.5 text-zinc-700" />
        <span className="text-sm font-bold text-zinc-700">Filtro</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="rounded-md border border-zinc-600 bg-zinc-800 px-2 py-1 text-[0.6875rem] text-white">
          Tamanho
        </span>
        <span className="rounded-md border border-zinc-600 bg-zinc-800 px-2 py-1 text-[0.6875rem] text-white">
          Maior que
        </span>
        <span className="rounded-md border border-zinc-600 bg-zinc-700 px-2 py-1 text-[0.6875rem] text-white">
          1.0 GB
        </span>
        <button type="button" aria-label="Remover regra" className="text-zinc-500 hover:text-zinc-700">
          <X aria-hidden="true" className="size-3" />
        </button>
      </div>
      <div className="flex w-fit items-center gap-0.5 rounded-lg border border-zinc-800 bg-zinc-900 p-0.5">
        <span className="rounded-md bg-[#92ccff] px-3 py-0.5 text-[9px] font-bold text-[#001d31]">E</span>
        <span className="rounded-md px-3 py-0.5 text-[9px] font-bold text-zinc-400">OU</span>
      </div>
      <div className="flex items-center gap-1.5 opacity-60">
        <span className="rounded-md border border-zinc-400 bg-zinc-500/20 px-2 py-1 text-[0.6875rem] text-zinc-300">
          Atributo
        </span>
        <span className="rounded-md border border-zinc-400 bg-zinc-500/20 px-2 py-1 text-[0.6875rem] text-zinc-300">
          Operação
        </span>
        <span className="rounded-md border border-zinc-400 bg-zinc-500/20 px-2 py-1 text-[0.6875rem] text-zinc-300">
          Valor...
        </span>
      </div>
      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-md border border-zinc-400/60 bg-white/5 py-2 text-[10px] text-brand-teal-mid"
      >
        <Plus aria-hidden="true" className="size-3" />
        Adicionar regra
      </button>
      <div className="flex items-center justify-end gap-3 border-t border-zinc-300 pt-3">
        <PushButton variant="neutral" className="h-8 px-3 text-[10px]">
          Descartar Mudanças
        </PushButton>
        <PushButton variant="primary" className="h-8 px-3 text-[10px]">
          Salvar Mudanças
        </PushButton>
      </div>
    </div>
  )
}

export interface OrganizeFreeModeCanvasProps extends React.ComponentProps<"div"> {
  rulesCount: number
  affectedFilesCount: number
  sizeLabel: string
  onDiscard?: () => void
  onSaveTemplate?: () => void
}

/**
 * organism/MainCanvas/Organization/FreeMode (`1439:16906`) —
 * Figma-confirmado via `get_design_context` completo (auditoria
 * fixed-point de 2026-08-11 corrige a nota anterior desta US, que dizia o
 * nó ser "grande demais" para a ferramenta — na verdade retorna normalmente).
 * Textos confirmados: badge "Modo Livre", nós "Pasta 1", "Filtro: Grande"
 * (`Size > 1.0 GB`), **"Filtro: Formato"** (`Type = .mp4, .mov`, 2º nó de
 * filtro confirmado nesta releitura — estava faltando, adicionado agora
 * reaproveitando a variante `filtro-type` já existente de
 * `FreeModeItemNode`), "Junção", "Auto-Archive" (badge "ACTIVE"),
 * "Resultado" com métricas e "Prévia de arquivos", rodapé com resumo +
 * "Descartar"/"Salvar Template".
 *
 * 🔧 **Implementado em 2026-08-13 (US-026, pass16)**: o organism voltou a
 * usar uma composição absoluta 1117×933, alinhada ao node composto atual:
 * agrupamento "Arquivos", filtros empilhados, `Junção`, `Auto-Archive`
 * abaixo, `Resultado` expandido, painel flutuante, minimap e footer.
 *
 * 🔧 **Implementado em 2026-08-12 (US-026, releitura de ponto-fixo)**: os 2
 * elementos que ficaram de fora da auditoria anterior por orçamento (ver
 * `docs/conflicts.md`, achado de 2026-08-11) agora têm implementação real:
 * (1) linhas conectoras tracejadas entre os nós (`FreeModeConnectors`);
 * (2) o painel flutuante `molecule/contextMenu/FreeMode`
 * (`FreeModeFilterPanel`, Liquid Glass, Regra 10) com a regra de filtro
 * "Tamanho maior que 1.0 GB", toggle "E/OU", 2ª linha de condição em
 * rascunho, "+ Adicionar regra" e rodapé "Descartar/Salvar Mudanças" — só
 * a composição visual confirmada, sem drag-and-drop ou edição real (Regra
 * 9: nunca apresentar uma aproximação como funcionalidade real).
 *
 * Reconciliado em 2026-08-11 (US-020): os nós do canvas ("Filtro: Grande",
 * "Junção", "Auto-Archive", "Resultado") e o toolbar inferior agora
 * compõem as 4 sub-peças reais `celule/MainCanvas/Organization/FreeMode/*`
 * (`ItemNode`/`OutputNode`/`ListItem`/`Buttons`, todas Figma-confirmadas
 * via `get_design_context` + ícones reais via `download_assets`) em vez
 * do markup aproximado com glifos `lucide-react` genéricos (Filter/
 * GitMerge/Archive/Package) usado até a US-016. O `atom/boxIconButton` de
 * "Adicionar nodo" agora abre um menu real com `celule/FreeModeListItem`
 * (as 7 operações confirmadas no node), demonstrando a composição real —
 * antes o menu não existia. `FreeModeOutputNode` é usado para o card
 * expandido `Resultado` do node composto.
 * "Pasta 1" permanece markup inline (fora do escopo desta US — nenhuma
 * sub-peça Figma confirmada pra esse nó de pasta-fonte).
 *
 * Fundo de pontos e Mini-Map (adicionados em 2026-08-10) preservados sem
 * alteração — confirmado via screenshot Playwright que sobrevivem à
 * reconciliação.
 *
 * 🔧 Corrigido em 2026-08-12 (US-026, 3ª passada de ponto-fixo): o badge
 * "Arquivos" (dentro do markup inline de "Pasta 1", ver nota acima) usava
 * `bg-zinc-200 text-zinc-600` — `get_design_context` fresco no nó completo
 * (`1439:16906`) confirma o "Node Grouping Frame" real com badge
 * `bg-[var(--neutral-surface-medium,#52525b)]` (≈ `zinc-600`) e texto
 * `var(--brand-primary-light,#c8dce3)` (`brand-teal-light`), não um badge
 * claro. Corrigido só a cor (`bg-zinc-600`/`text-brand-teal-light`); a
 * posição real (pill flutuando acima da moldura do grupo, não embutida no
 * topo do card) permanece como aproximação já documentada — reconciliar
 * exigiria extrair o "Node Grouping Frame" como peça própria, fora do
 * escopo desta correção pontual.
 *
 * 🔧 Corrigido em 2026-08-13 (US-026, 4ª passada): as instâncias de filtro
 * agora repassam os overrides Figma-confirmados ("Filtro: Grande"/
 * "Size > 1.0 GB" e "Filtro: Formato"/"Type = .mp4, .mov") para
 * `FreeModeItemNode`. O celule mantém os defaults curtos do node base
 * (`1421:20108`) e o organism reproduz os textos específicos do node
 * composto (`1439:16906`).
 */
function OrganizeFreeModeCanvas({
  rulesCount,
  affectedFilesCount,
  sizeLabel,
  onDiscard,
  onSaveTemplate,
  className,
  ...props
}: OrganizeFreeModeCanvasProps) {
  const [addMenuOpen, setAddMenuOpen] = React.useState(false)

  return (
    <div
      data-slot="organize-free-mode-canvas"
      className={cn(
        "relative h-[933px] w-[1117px] overflow-hidden rounded-[32px] border border-zinc-300 bg-zinc-100",
        className
      )}
      style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1.5px, transparent 1.5px)",
        backgroundSize: "20px 20px",
      }}
      {...props}
    >
      <FreeModeConnectors />
      <span className="absolute top-[22px] left-8 w-fit rounded-md bg-zinc-600 px-3 py-2 text-sm text-white">
        Modo Livre
      </span>
      {/* Mini-Map (Figma-confirmado, elemento visual estático — não funcional, ver nota acima) */}
      <div
        aria-hidden="true"
        data-slot="organize-free-mode-canvas-minimap"
        className="absolute right-[42px] bottom-[158px] flex h-32 w-48 flex-col rounded-xl border border-zinc-300 bg-white/50 p-2 opacity-60 backdrop-blur-sm"
      >
        <div className="relative flex-1">
          <div className="absolute inset-x-2 top-1 grid grid-cols-3 gap-1">
            <span className="h-4 rounded-sm bg-zinc-300" />
            <span className="h-4 rounded-sm bg-zinc-300" />
            <span className="h-4 rounded-sm bg-zinc-300" />
          </div>
          <div className="absolute inset-x-4 top-8 h-10 rounded border-2 border-brand-teal/60" />
        </div>
        <div className="flex items-center justify-between border-t border-zinc-200 pt-1">
          <span className="h-1 w-8 rounded-full bg-zinc-300" />
          <span className="h-1 w-6 rounded-full bg-zinc-300" />
        </div>
      </div>

      {/* Painel flutuante de edição de filtro (Figma-confirmado, ver nota acima) */}
      <FreeModeFilterPanel className="absolute top-[42px] right-[64px] z-20" />

      <div className="absolute top-[278px] left-8 h-[152px] w-[283px] rounded-3xl border border-zinc-500 bg-zinc-500/10">
        <span className="absolute -top-3 left-[98px] rounded-full bg-zinc-600 px-3 py-1 text-[0.625rem] font-bold text-brand-teal-light">
          Arquivos
        </span>
        <div className="absolute top-[32px] left-[38px] flex h-[86px] w-[174px] flex-col rounded-xl border-2 border-zinc-600 bg-white p-[17px] shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex size-[34px] items-center justify-center rounded-md bg-brand-teal">
              <span className="size-5 rounded-sm bg-brand-teal-light" />
            </div>
            <div>
              <p className="text-sm leading-5 font-semibold text-zinc-700">Pasta 1</p>
              <p className="text-[0.625rem] leading-[15px] text-brand-teal-light">4.2 GB · 128 Files</p>
            </div>
          </div>
          <span className="mt-3 h-1.5 w-[105px] rounded-full bg-brand-teal" />
        </div>
      </div>

      <FreeModeItemNode
        variant="filtro-size"
        label="Filtro: Grande"
        subtitle="Size > 1.0 GB"
        className="absolute top-[299px] left-[333px] w-[192px] border-brand-teal bg-[#d7f2fb]"
      />
      <FreeModeItemNode
        variant="filtro-type"
        label="Filtro: Formato"
        subtitle="Type = .mp4, .mov"
        className="absolute top-[377px] left-[333px] w-[192px] border-zinc-600"
      />
      <FreeModeItemNode variant="juncao" className="absolute top-[395px] left-[647px]" />
      <FreeModeItemNode variant="auto-archive" className="absolute top-[540px] left-[647px] border-brand-teal" />
      <FreeModeOutputNode
        folderLabel={`Pasta "Vídeos grandes"`}
        affectedFilesCount={affectedFilesCount}
        sizeLabel={sizeLabel}
        rulesCount={rulesCount}
        className="absolute top-[395px] left-[846px]"
      />

      <div className="absolute top-[748px] left-[34px] flex items-center gap-1.5">
        {addMenuOpen ? (
          <div
            data-slot="organize-free-mode-canvas-add-menu"
            className="absolute bottom-full left-0 z-10 mb-2 flex w-64 flex-col gap-1 rounded-lg border border-zinc-700 bg-zinc-900 p-1.5 shadow-lg"
          >
            {ADD_NODE_OPERATIONS.map((operation) => (
              <FreeModeListItem key={operation} operation={operation} onSelect={() => setAddMenuOpen(false)} />
            ))}
          </div>
        ) : null}
        <FreeModeButtons onAddNode={() => setAddMenuOpen((open) => !open)} />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex h-[127px] items-center justify-between border-t border-white/60 bg-zinc-100/90 px-8 pt-[17px] pb-4">
        <div>
          <p className="text-[0.8125rem] text-zinc-600">
            {rulesCount} regras · {affectedFilesCount} arquivos afetados · {sizeLabel}
          </p>
          <p className="pt-1 text-[0.6875rem] leading-4 text-zinc-500">
            Você poderá excluir este template depois e reverter a organização.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <PushButton variant="neutral" className="h-8 px-4 text-xs" onClick={onDiscard}>
            Descartar
          </PushButton>
          <PushButton variant="primary" className="h-8 px-4 text-xs" onClick={onSaveTemplate}>
            Salvar Template
          </PushButton>
        </div>
      </div>
    </div>
  )
}

export { OrganizeFreeModeCanvas }
