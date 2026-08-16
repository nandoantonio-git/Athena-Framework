import * as React from "react"

import { cn } from "@/lib/utils"
import { PushButton } from "@/components/atoms/push-button"
import { ArchiveItem } from "@/components/atoms/archive-item"
import { ImageItem } from "@/components/atoms/image-item"
import { TagOrgTemplateName } from "@/components/atoms/tag-org-template-name"
import FolderOrganizeGlyph from "@/assets/icons/FolderOrganize.svg?react"
import FolderOrganizeActiveGlyph from "@/assets/icons/FolderOrganizeActive.svg?react"

export type OrganizePanelMode = "Data" | "Projeto" | "Tipo"
export type OrganizePanelState = "idle" | "dragover" | "filled"

export interface OrganizePanelDropZoneProps extends React.ComponentProps<"div"> {
  mode: OrganizePanelMode
  templateName?: string
  onTemplateNameChange?: (name: string) => void
  state?: OrganizePanelState
  /**
   * Só relevante em `state="filled"` (eixo `Quantity` 1–4 Figma-confirmado
   * via `get_metadata`/`get_design_context` no nó `1421:18781`). 4 só é uma
   * combinação real quando `mode="Data"` (4º item rotulado por data, ex.
   * "Maio - 1997"); nos demais `mode`s o Figma só confirma até 3.
   */
  quantity?: 1 | 2 | 3 | 4
  onCancel?: () => void
  onContinue?: () => void
}

/**
 * organism/OrganizePanel/DropZone (`1421:18781`) — Figma-confirmado:
 * "Painel de sandbox, onde o usuário pode arrastar o/os item/itens
 * selecionados para serem usados no template. tem um bagde para identificar
 * o formato de template selecionado e uma aba para nomear o template. e 2
 * botoes para confirmar ou cancelar a ação." Eixos Figma-confirmados via
 * `get_metadata`: `Mode` (Data\|Projeto\|Tipo) × `State`
 * (Idle\|Dragover\|Filled) × `Quantity` (1–4). O drag-and-drop real (D&D de
 * itens no canvas) não é implementado — fora do escopo de uma story
 * estática; `state` só controla o estilo visual da borda/fundo.
 *
 * ⚠️ Corrigido em 2026-08-11 após achado do usuário — auditoria anterior
 * não seguia a Regra 11: fundo/material estavam errados. `get_design_context`
 * no node real confirma 2 camadas de vidro (Regra 10, ver
 * `Tokens/Materials`): "Fill + Shadow" fixa (`effect-glass-white-70`, já
 * correta) + "Glass Effect" que MUDA por estado — `effect-glass-white-36`
 * quando `state="filled"`, ou um tint mais escuro (`effect-glass-dark-20`
 * sob `effect-glass-white-36`) em `idle`/`dragover`. A implementação
 * anterior usava só a primeira camada, sem variar por estado. O anel de
 * foco do `dragover` também estava com a cor errada (`brand-teal` em vez do
 * azul de sistema Figma-confirmado, `rgba(0,122,255,*)`) — corrigido junto
 * por ser a mesma auditoria de material/cor deste componente.
 *
 * 🔧 Corrigido em 2026-08-11 (releitura fixed-point, Regra 11) — 2 achados
 * novos no mesmo componente: (1) o ícone central usava o glifo aproximado
 * `lucide-react` `FolderTree`; `get_design_context` retorna o asset real
 * `atom/Icon/FolderOrganize` (folder + seta), exportado para
 * `src/assets/icons/FolderOrganize{,Active}.svg` (cor muda de
 * `#6b6b68`/cinza no idle para `#92ccff`/azul no dragover — 2 arquivos
 * reais, não um único ícone com `currentColor`); (2) o ícone era renderizado
 * em todos os estados, mas o Figma só o mostra em `Idle`/`Dragover` — no
 * estado `Filled` ele desaparece, dando lugar aos itens soltos — **essa 2ª
 * parte só tinha sido corrigida pela metade**: o ícone foi omitido, mas os
 * itens que deveriam substituí-lo nunca foram adicionados (gap descoberto
 * nesta releitura de 2026-08-12, US-026).
 *
 * 🔧 Corrigido em 2026-08-12 (US-026, releitura de ponto-fixo): `state="filled"`
 * agora renderiza os itens soltos Figma-confirmados (eixo `Quantity` 1–4),
 * reaproveitando os átomos já auditados `atom/ArchiveItem`/`atom/ImageItem`
 * em vez de markup novo (Regra 10) — item 1 e 3 são `ArchiveItem` ("Arquivo
 * 1"/"Arquivo 3"), item 2 é `ImageItem` ("Arquivo 2"), item 4 (só
 * `mode="Data"`) é `ArchiveItem` rotulado por data ("Maio - 1997"). Não
 * havia nenhuma story para `state="filled"` — adicionada (`Filled`).
 *
 * 🔧 Corrigido em 2026-08-12 (US-026, 3ª passada de ponto-fixo): o texto do
 * badge `atom/TagOrgMode` ("Data"/"Projeto"/"Tipo") usava
 * `text-brand-teal-foreground/80` (branco a 80%) — `get_design_context`
 * fresco confirma `var(--brand-primary-light,#c8dce3)` (mesmo token de
 * `brand-teal-light`) a 13px, não branco. Corrigido para
 * `text-brand-teal-light` + `text-[0.8125rem]`.
 *
 * 🔧 Corrigido em 2026-08-13 (US-026, pass12): `get_design_context` fresco
 * reconfirmou que cada variante do component set mede 560×772 e o ícone
 * central `FolderOrganize` mede 184×184 em `top:260px`; a story estava
 * renderizando uma miniatura 320×420 com ícone reduzido para 64×64, sem
 * exceção humana registrada. O root e o ícone voltaram ao tamanho
 * Figma-confirmado.
 */
function OrganizePanelDropZone({
  mode,
  templateName = "",
  onTemplateNameChange,
  state = "idle",
  quantity = 1,
  onCancel,
  onContinue,
  className,
  ...props
}: OrganizePanelDropZoneProps) {
  const isFilled = state === "filled"

  return (
    <div
      data-slot="organize-panel-drop-zone"
      data-state={state}
      className={cn(
        "relative flex h-[772px] w-[560px] flex-col justify-between overflow-hidden rounded-[34px] bg-effect-glass-white-70 p-6 shadow-lg",
        "data-[state=dragover]:ring-2 data-[state=dragover]:ring-[#007aff]/25",
        className
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 rounded-3xl",
          state === "filled" ? "bg-effect-glass-white-36" : "bg-effect-glass-dark-20"
        )}
      />
      {state !== "filled" ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-3xl bg-effect-glass-white-36" />
      ) : null}
      <div className="relative flex items-center justify-between gap-2">
        <span className="rounded-md bg-zinc-600 px-3 py-1.5 text-[0.8125rem] text-brand-teal-light">{mode}</span>
        <TagOrgTemplateName
          value={templateName}
          onChange={(event) => onTemplateNameChange?.(event.target.value)}
          className="ml-auto text-right"
        />
      </div>
      {isFilled ? (
        <div className="relative flex flex-1 flex-wrap items-start gap-4 py-2">
          <ArchiveItem name="Arquivo 1" />
          {quantity >= 2 ? <ImageItem name="Arquivo 2" /> : null}
          {quantity >= 3 ? <ArchiveItem name="Arquivo 3" /> : null}
          {quantity >= 4 && mode === "Data" ? <ArchiveItem name="Maio - 1997" /> : null}
        </div>
      ) : state === "dragover" ? (
        <FolderOrganizeActiveGlyph
          aria-hidden="true"
          className="absolute top-[260px] right-[33.57%] left-[33.57%] aspect-square"
        />
      ) : (
        <FolderOrganizeGlyph
          aria-hidden="true"
          className="absolute top-[260px] right-[33.57%] left-[33.57%] aspect-square"
        />
      )}
      <div className="relative flex items-center justify-end gap-4">
        <PushButton variant="neutral" className="h-8 px-4 text-xs" onClick={onCancel}>
          Cancelar
        </PushButton>
        <PushButton variant="primary" className="h-8 px-4 text-xs" onClick={onContinue}>
          Continuar
        </PushButton>
      </div>
    </div>
  )
}

export { OrganizePanelDropZone }
