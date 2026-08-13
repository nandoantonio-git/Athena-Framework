import * as React from "react"

import ArchiveIcon from "@/assets/icons/FaqInfoCardArchive.svg?react"
import ChevronIcon from "@/assets/icons/FaqInfoCardChevron.svg?react"
import FirstStepsIcon from "@/assets/icons/FaqInfoCardFirstSteps.svg?react"
import { cn } from "@/lib/utils"
import { TOPIC_DATA } from "@/components/organisms/faq-info-card-collapsed"

export type FaqInfoCardVariant = "faq" | "card-with-callout"

/**
 * Pergunta extra exclusiva da variante `faq` (Figma-confirmado,
 * `Property 1=FAQ, isCalloutOn=off`, não presente no tópico `FirstSteps` de
 * `organism/FAQ/info/cards/colapsed`).
 */
const EXTRA_FAQ_QUESTION = {
  question: "Onde vejo quanto espaço já usei?",
  answer:
    'No menu lateral, em "Armazenamento", você acompanha o uso separado por Acesso rápido e Longo prazo.',
}

export interface FaqInfoCardProps extends React.ComponentProps<"div"> {
  /**
   * O Figma só confirma 2 combinações reais do eixo `property1`×
   * `isCalloutOn` (não a matriz completa 2×2): `faq` = `Property 1=FAQ,
   * isCalloutOn=off` (conteúdo "Primeiros passos"); `card-with-callout` =
   * `Property 1=Card, isCalloutOn=isCalloutOn` (conteúdo "Guardar no longo
   * prazo", com callouts).
   */
  variant?: FaqInfoCardVariant
}

/**
 * organism/FAQ/info/Card (`1454:24788`) — Figma-confirmado: "estrutura base
 * para criar um card para tirar duvidas do usuário, tem variação com uso de
 * callouts caso necessario um destaque."
 *
 * Reaproveita `TOPIC_DATA` de `organism/FAQ/info/cards/colapsed` — o
 * conteúdo confirmado é **literalmente o mesmo** (`FirstSteps` para a
 * variante `faq`, `LongTermStorage` completo para `card-with-callout`),
 * evitando duplicar as mesmas perguntas/respostas/callouts em dois
 * arquivos. Diferença real de composição: este organism sempre nasce
 * expandido (botão "Recolher" fixo, sem alternância "Expandir"/"Recolher"
 * como no card colapsado) — representa o item já aberto dentro de uma
 * lista de FAQ, não um teaser recolhível.
 */
function FaqInfoCard({ variant = "faq", className, ...props }: FaqInfoCardProps) {
  const isFaq = variant === "faq"
  const topic = isFaq ? TOPIC_DATA.FirstSteps : TOPIC_DATA.LongTermStorage
  const questions = isFaq ? [...topic.questions, EXTRA_FAQ_QUESTION] : topic.questions
  const Icon = isFaq ? FirstStepsIcon : ArchiveIcon

  return (
    <div
      data-slot="faq-info-card"
      data-variant={variant}
      className={cn(
        "flex w-full max-w-[927px] flex-col gap-6 rounded-3xl bg-effect-glass-white-50 py-6",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-24 px-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Icon className="size-4 shrink-0" aria-hidden="true" />
            <p className="text-base font-semibold text-brand-secondary-dark">{topic.title}</p>
          </div>
          {isFaq && topic.description ? (
            <p className="text-sm text-brand-secondary">{topic.description}</p>
          ) : null}
        </div>
        <span className="shrink-0 rounded-md border border-zinc-200 bg-white/80 px-2 py-1 text-[0.625rem] text-brand-secondary">
          Recolher
        </span>
      </div>
      <div className="flex flex-col px-6">
        {questions.map((item, index) => (
          <details
            key={item.question}
            className="group border-b border-zinc-500/20 py-4 last:border-b-0"
            open
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-2 text-sm font-medium text-brand-secondary-dark [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronIcon
                className="mt-0.5 size-4 shrink-0"
                aria-hidden="true"
              />
            </summary>
            <div className="pt-2 text-[0.8125rem] leading-normal text-brand-secondary-light">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

export { FaqInfoCard }
