import * as React from "react"

import ChevronIcon from "@/assets/icons/FaqCollapsedChevron.svg?react"
import DuplicatesIcon from "@/assets/icons/FaqCollapsedDuplicates.svg?react"
import FirstStepsIcon from "@/assets/icons/FaqCollapsedFirstSteps.svg?react"
import FrequentIssuesIcon from "@/assets/icons/FaqCollapsedFrequentIssues.svg?react"
import LabelsTagsIcon from "@/assets/icons/FaqCollapsedLabelsTags.svg?react"
import LongTermStorageIcon from "@/assets/icons/FaqCollapsedLongTermStorage.svg?react"
import OrganizationIcon from "@/assets/icons/FaqCollapsedOrganization.svg?react"
import StorageIcon from "@/assets/icons/FaqCollapsedStorage.svg?react"
import { cn } from "@/lib/utils"
import { FaqCallout } from "@/components/organisms/faq-callout"

export type FaqTopic =
  | "FirstSteps"
  | "LongTermStorage"
  | "Organization"
  | "LabelsTags"
  | "Duplicates"
  | "Storage"
  | "FrequentIssues"

interface FaqQuestion {
  question: string
  answer: React.ReactNode
}

interface FaqTopicData {
  title: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  description?: string
  questions: FaqQuestion[]
}

/**
 * Conteúdo Figma-confirmado por tópico, lido de `get_design_context` no nó
 * `1454:22003` (`organism/FAQ/info/cards/colapsed`) — perguntas/respostas
 * verbatim, incluindo os 2 usos reais de "Liberar espaço" (Storage,
 * FrequentIssues) já dentro do contexto aprovado pela Regra 5
 * (Armazenamento). Ícones por tópico agora usam os SVGs exportados do nó
 * `1454:22003` na auditoria de ponto-fixo US-026.
 */
const TOPIC_DATA: Record<FaqTopic, FaqTopicData> = {
  FirstSteps: {
    title: "Primeiros passos no Kandrive",
    icon: FirstStepsIcon,
    description: "Aprenda rapidamente a adicionar, organizar e guardar seus arquivos no Kandrive.",
    questions: [
      {
        question: "Como adiciono meus primeiros arquivos?",
        answer: (
          <>
            Toque em <strong className="font-bold">"+ Adicionar"</strong> no menu lateral e
            selecione os arquivos ou pastas que deseja subir para o Kandrive.
          </>
        ),
      },
      {
        question: "Depois de adicionar, o que fazer?",
        answer: (
          <div className="space-y-0.5">
            <p>Dois caminhos comuns:</p>
            <p>
              <strong className="font-bold">1. Organizar</strong> — aplique um template
              (Cronológico, Por projeto, Por tipo de arquivo ou Modo livre) para deixar seus
              arquivos estruturados.
            </p>
            <p>
              <strong className="font-bold">2. Guardar</strong> — se já sabe quais arquivos não
              precisa acessar com frequência, mova-os direto para o longo prazo.
            </p>
          </div>
        ),
      },
    ],
  },
  Storage: {
    title: "Armazenamento",
    icon: StorageIcon,
    questions: [
      {
        question: '"Liberar espaço" apaga meus arquivos?',
        answer:
          "Não necessariamente — a opção reúne arquivos que podem ser guardados no longo prazo ou removidos, mas nenhuma ação é feita sem sua confirmação.",
      },
      {
        question: 'O que significa "Admin" ao lado de um arquivo na lista de armazenamento?',
        answer: "Indica o proprietário do arquivo.",
      },
      {
        question: "Selecionei vários arquivos, como sei quantos estão selecionados?",
        answer: 'A barra de seleção mostra a contagem no topo (ex.: "3 itens selecionados").',
      },
    ],
  },
  LongTermStorage: {
    title: "Guardar no longo prazo",
    icon: LongTermStorageIcon,
    questions: [
      {
        question: 'O que significa "guardar" um arquivo?',
        answer:
          "Guardar é a ação de mover um arquivo do acesso rápido para o longo prazo. Os arquivos continuam seguros no Kandrive, mas podem levar mais tempo para serem acessados novamente.",
      },
      {
        question: '"Arquivar" e "guardar" são a mesma coisa?',
        answer:
          "Não. Arquivar é o processo geral de organizar seus arquivos. Guardar é a ação específica, dentro desse processo, que move arquivos para o longo prazo.",
      },
      {
        question: "Vou perder acesso aos meus arquivos guardados?",
        answer: "Não. Eles continuam no Kandrive, só muda o tempo de acesso.",
      },
      {
        question: "Como recupero (resgato) um arquivo guardado no longo prazo?",
        answer: (
          <>
            <p>Acesse o arquivo e solicite o resgate na própria tela dele.</p>
            <FaqCallout tone="info" className="mt-3">
              Depois de um tempo de espera (até 8h), você recebe um link por e-mail para acessar o
              arquivo novamente no acesso rápido.
            </FaqCallout>
          </>
        ),
      },
      {
        question:
          'Se eu guardar um arquivo com o mesmo nome de outro que já está em "Guardados", o que acontece?',
        answer: (
          <>
            <p>Antes de guardar, você passa por uma página com a lista dos arquivos selecionados.</p>
            <FaqCallout tone="warning" className="mt-3">
              {'Se algum nome já existir no destino, o Kandrive adiciona automaticamente um sufixo (ex.: "arquivo (1)") para evitar substituir o arquivo existente — nada é sobrescrito sem você perceber.'}
            </FaqCallout>
          </>
        ),
      },
    ],
  },
  Organization: {
    title: "Templates de organização",
    icon: OrganizationIcon,
    questions: [
      {
        question: "Aplicar um template move ou apaga meus arquivos automaticamente?",
        answer:
          "Não. Antes de qualquer mudança, você escolhe o método (Cronológico, Por projeto, Por tipo de arquivo ou Modo livre), revisa o preview e só então confirma. Nada é alterado antes dessa confirmação.",
      },
      {
        question: 'Por que não consigo escolher o "Modo Livre"?',
        answer:
          "O Modo livre fica disponível depois que você já tem uma primeira organização configurada — recomendado para quem já tem um método próprio.",
      },
      {
        question: "Depois de confirmar, ainda dá para desfazer?",
        answer: (
          <>
            <p>Sim.</p>
            <FaqCallout tone="info" className="mt-3">
              {'Assim que o template é criado, aparece um aviso — "[Nome do template] criado com sucesso" — com os botões "Desfazer" e "Confirmar". Esse aviso fica visível até você tocar em um dos dois.'}
            </FaqCallout>
          </>
        ),
      },
      {
        question: "O que mais posso fazer no menu (⋮) da pasta organizada?",
        answer: (
          <ul className="list-disc space-y-1 ps-4">
            <li>Desfazer organização — devolve os arquivos aos locais anteriores.</li>
            <li>Renomear pasta.</li>
            <li>Editar organização.</li>
            <li>Ver dados da pasta.</li>
            <li>Excluir pasta e arquivos, remove a pasta e tudo dentro dela (ação diferente de desfazer).</li>
          </ul>
        ),
      },
      {
        question: "Consigo trocar de método de organização depois de já ter aplicado um?",
        answer:
          "Não é possível trocar um método já aplicado por outro. Mas dá para combinar métodos — ou seja, aplicar mais de um critério de organização ao mesmo tempo, funcionando como uma visualização combinada dos seus arquivos, não uma movimentação fixa.",
      },
    ],
  },
  LabelsTags: {
    title: "Etiquetas de intenção",
    icon: LabelsTagsIcon,
    questions: [
      {
        question: "O que são as etiquetas Memória, Comercial e Legal?",
        answer: "São marcações que ajudam a identificar o propósito de um arquivo, facilitando busca e filtros depois.",
      },
    ],
  },
  Duplicates: {
    title: "Duplicados",
    icon: DuplicatesIcon,
    questions: [
      {
        question: "Como sei quais arquivos estão duplicados?",
        answer: 'Use a opção "Ver duplicados" — o Kandrive identifica arquivos repetidos e sugere uma decisão para cada um.',
      },
    ],
  },
  FrequentIssues: {
    title: "Problemas comuns",
    icon: FrequentIssuesIcon,
    questions: [
      {
        question: "Excluí um arquivo sem querer — dá para recuperar?",
        answer: (
          <>
            <p>Sim.</p>
            <FaqCallout tone="info" className="mt-3">
              Arquivos excluídos ficam na Lixeira por até 30 dias antes de serem removidos
              definitivamente. Dentro desse prazo, você pode restaurá-los.
            </FaqCallout>
          </>
        ),
      },
      {
        question: "Movi um arquivo e não sei mais onde ele está.",
        answer:
          "Antes de confirmar, o Kandrive sempre mostra o destino escolhido — para localizar um arquivo movido, use a busca ou confira a pasta de destino que foi exibida na confirmação.",
      },
      {
        question: '"Liberar espaço" está desabilitado, isso é um erro?',
        // 🧩 "elegíveis" aqui é prosa de resposta de FAQ (Figma-confirmado
        // verbatim), não um rótulo de UI — Regra 5 proíbe "elegível" como
        // rótulo/tag visível, não como palavra em texto corrido. Mantido
        // literal (Regra 9); ver docs/conflicts.md.
        answer:
          "Não. O botão só fica ativo quando há arquivos duplicados ou elegíveis para guardar no longo prazo. Se não houver nenhum, não há nada para liberar no momento.",
      },
      {
        question: "Apliquei um template errado, como corrijo?",
        answer: 'Toque no ícone de opções (⋮) ao lado da pasta organizada e escolha "Desfazer organização" — os arquivos voltam aos locais anteriores.',
      },
    ],
  },
}

export interface FaqInfoCardCollapsedProps extends React.ComponentProps<"div"> {
  topic?: FaqTopic
}

/**
 * organism/FAQ/info/cards/colapsed (`1454:22003`) — Figma-confirmado:
 * "componente info card de FaQ colapsado". 7 variantes de `topic`. A
 * releitura de US-026 pass12 confirma todas as variantes recolhidas:
 * `FirstSteps` mostra header + descrição em 92px, as demais mostram só o
 * header em 72px. O botão de cabeçalho abre o corpo como extensão de
 * engenharia; a captura Figma-confirmada inicial permanece recolhida.
 *
 * Cada pergunta usa `<details>`/`<summary>` nativos (accordion real,
 * expansível individualmente) — reutiliza `FaqCallout` para os destaques
 * ℹ️/⚠ Figma-confirmados. Composição compartilhada com
 * `organism/FAQ/info/Card` (mesmo padrão de item de pergunta).
 */
function FaqInfoCardCollapsed({ topic = "FirstSteps", className, ...props }: FaqInfoCardCollapsedProps) {
  const data = TOPIC_DATA[topic]
  const [expanded, setExpanded] = React.useState(false)
  const Icon = data.icon
  const figmaButtonLabel = topic === "FirstSteps" ? "Recolher" : "Expandir"

  return (
    <div
      data-slot="faq-info-card-collapsed"
      data-topic={topic}
      className={cn(
        "flex w-full max-w-[927px] flex-col gap-6 overflow-hidden rounded-3xl bg-effect-glass-white-50 py-6",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-24 px-6">
        <div className="flex items-center gap-2">
          <Icon className="size-4 shrink-0" aria-hidden="true" />
          <p className="text-base font-semibold text-brand-secondary-dark">{data.title}</p>
        </div>
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="shrink-0 rounded-md border border-zinc-200 bg-white/80 px-2 py-1 text-[0.625rem] text-brand-secondary transition-colors hover:bg-zinc-100 motion-safe:active:scale-95"
        >
          {expanded ? "Recolher" : figmaButtonLabel}
        </button>
      </div>
      {data.description ? (
        <p className="-mt-4 px-6 text-sm text-brand-secondary">{data.description}</p>
      ) : null}
      {expanded ? (
        <div className="flex flex-col px-6">
          {data.questions.map((item, index) => (
            <details
              key={item.question}
              className="group border-b border-zinc-500/20 py-4 last:border-b-0"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-2 text-sm font-medium text-brand-secondary-dark [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronIcon
                  className="mt-0.5 size-4 shrink-0 transition-transform motion-safe:duration-150 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="pt-2 text-[0.8125rem] leading-normal text-brand-secondary-light">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export { FaqInfoCardCollapsed, TOPIC_DATA }
