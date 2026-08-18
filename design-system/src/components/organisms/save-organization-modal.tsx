import * as React from "react"

import { cn } from "@/lib/utils"
import { CloseButton } from "@/components/atoms/close-button"
import { PushButton } from "@/components/atoms/push-button"
import illustrationData from "@/assets/illustrations/template-card-data.svg"
import illustrationProjeto from "@/assets/illustrations/template-card-projeto.svg"
import illustrationTipo from "@/assets/illustrations/template-card-tipo.svg"
import illustrationModoLivre from "@/assets/illustrations/template-card-modo-livre.svg"

export type OrganizationMethod = "data" | "projeto" | "tipo" | "modo-livre"

const CARDS: { method: OrganizationMethod; eyebrow: string; title: string; description: string; illustration: string }[] = [
  {
    method: "data",
    eyebrow: "DATA",
    title: "Cronológico",
    description: "Organize por ano, mês e dia. Ideal para memórias antigas e acervo histórico.",
    illustration: illustrationData,
  },
  {
    method: "projeto",
    eyebrow: "PROJETO",
    title: "Por projeto",
    description: "Agrupe por cliente, evento ou processo. Perfeito para trabalhos e entregas.",
    illustration: illustrationProjeto,
  },
  {
    method: "tipo",
    eyebrow: "TIPO",
    title: "Por tipo de arquivo",
    description: "Separe por fotos, vídeos e documentos. Bom para entender o que ocupa espaço.",
    illustration: illustrationTipo,
  },
  {
    method: "modo-livre",
    eyebrow: "MODO LIVRE",
    title: "Modo livre",
    description: "Crie sua própria estrutura, do seu jeito. Recomendado para quem já tem um método.",
    illustration: illustrationModoLivre,
  },
]

export interface SaveOrganizationModalProps extends React.ComponentProps<"div"> {
  selected?: OrganizationMethod
  onMethodSelect?: (method: OrganizationMethod) => void
  onCancel?: () => void
  onContinue?: () => void
}

/**
 * organism/DialogSave/OrganizationModal (`1421:18576`) — Figma-confirmado:
 * "Utilize para selecionar o formato do template de organização ao clicar
 * o card desejado." 4 cards (`molecule/template-card`, `1421:19695`) — os 4
 * métodos (Data/Projeto/Tipo/Modo Livre) são Figma-confirmados literalmente
 * (achado do inventário). Fundo usa Liquid Glass — ver Tokens/Materials
 * (Regra 10). Rodapé "Cancelar" (`PushButton variant="neutral"`) /
 * "Continuar" (`PushButton variant="primary"`) — nenhum `button/primary`\|
 * `secondary`\|`destructive` separado (Regra 1).
 *
 * Corrigido em 2026-08-11 (achado do usuário: dimensões incongruentes):
 * `get_metadata` real confirma o modal com 1014px de largura (aqui
 * `max-w-5xl`, ~1024px, a aproximação mais próxima do Tailwind) e cada
 * card `molecule/template-card` com 384px de altura fixa — a versão
 * anterior não tinha altura definida porque faltava a ilustração própria
 * de cada card (asset de imagem exportado do Figma), agora incluída via
 * `src/assets/illustrations/`.
 */
function SaveOrganizationModal({
  selected,
  onMethodSelect,
  onCancel,
  onContinue,
  className,
  ...props
}: SaveOrganizationModalProps) {
  return (
    <div
      data-slot="save-organization-modal"
      role="dialog"
      aria-label="Escolher método de organização"
      className={cn(
        "flex h-[577px] w-[931px] max-w-none flex-col gap-4 overflow-hidden rounded-[32px] bg-effect-glass-white-70 p-6 shadow-[0px_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-md",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        <h2 className="text-2xl font-medium text-zinc-900">Escolher método de organização</h2>
        <CloseButton size="md" onClick={onCancel} />
      </div>
      <p className="text-base text-zinc-700">
        Selecione como os dados serão visualizados e correlacionados no seu workspace.
      </p>
      <div className="flex flex-1 items-start gap-1">
        {CARDS.map((card) => (
          <button
            key={card.method}
            type="button"
            aria-pressed={selected === card.method}
            onClick={() => onMethodSelect?.(card.method)}
            className={cn(
              "flex h-96 w-[217.75px] shrink-0 flex-col items-center justify-between rounded-xl border border-zinc-300 bg-zinc-50 p-4",
              "transition-colors hover:border-brand-teal focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50",
              selected === card.method && "border-zinc-400"
            )}
          >
            <span className="rounded-full border border-brand-teal/40 bg-brand-teal/5 px-3 py-1 text-[0.625rem] font-bold tracking-wide text-brand-teal uppercase">
              {card.eyebrow}
            </span>
            {card.method === "modo-livre" ? (
              <div className="flex size-24 items-center justify-center rounded-lg border-2 border-dashed border-brand-secondary-light p-2">
                <img src={card.illustration} alt="" aria-hidden="true" className="h-12 w-auto" />
              </div>
            ) : (
              <img src={card.illustration} alt="" aria-hidden="true" className="h-24 w-auto" />
            )}
            <span className="flex w-full flex-col items-start gap-1.5 px-1.5 text-left">
              <span className="whitespace-nowrap text-xl font-bold text-zinc-500">{card.title}</span>
              <span className="text-xs text-zinc-500">{card.description}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-end gap-4">
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

export { SaveOrganizationModal }
