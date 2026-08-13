import * as React from "react"
import {
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Folder,
  File,
  Trash2,
  Info,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { CloseButton } from "@/components/atoms/close-button"
import { PushButton } from "@/components/atoms/push-button"

export type ReviewSeverity = "duplicado" | "incongruente" | "ok"

export interface ReviewChildFile {
  name: string
  meta: string
  onDelete?: () => void
}

export interface ReviewItem {
  name: string
  itemsLabel: string
  severity: ReviewSeverity
  suggestedPath: string
  /** Arquivos filhos revelados ao expandir a pasta (Figma-confirmado: `Children → Child 1`). */
  children?: ReviewChildFile[]
  /**
   * Rótulo da linha de caminho sugerido. Figma-confirmado: varia por item —
   * o 1º item do nó (`Duplicado`) usa "Taxonomia Sugerida:", os demais
   * ("Incongruente"/"OK") usam "Template Sugerido:". Não confirmado como
   * regra sistêmica ligada à severidade (apenas 3 exemplos no nó) — exposto
   * como prop por item em vez de inferido, default "Template Sugerido:".
   */
  suggestedPathLabel?: string
  onRename?: () => void
  onEdit?: () => void
  onDelete?: () => void
}

export interface DialogTemplateReviewModalProps extends React.ComponentProps<"div"> {
  items: ReviewItem[]
  onCancel?: () => void
  onContinue?: () => void
}

const SEVERITY_META: Record<ReviewSeverity, { label: string; icon: typeof AlertTriangle; className: string }> = {
  duplicado: { label: "Duplicado", icon: AlertTriangle, className: "bg-[var(--color-feedback-warning-subtle,#f59e0b33)] text-[var(--color-feedback-warning,#c38418)]" },
  incongruente: { label: "Incongruente", icon: AlertCircle, className: "bg-zinc-200 text-zinc-600" },
  ok: { label: "OK", icon: CheckCircle2, className: "bg-zinc-200 text-zinc-600" },
}

/**
 * organism/Dialog/TemplateReviewModal (`1431:20397`) — Figma-confirmado:
 * "Utilize para revisar o nome, e a estrutura/hierarquia de organização
 * cria pelo Kandrive para o usuário." Cada item da árvore expõe badge de
 * severidade (Duplicado/Incongruente/OK, Figma-confirmado) + ações
 * "Renomear"/"Editar" (texto simples) / "Excluir" (`PushButton
 * variant="neutral"`, texto em `--brand-feedback-danger-default`). Fundo
 * usa Liquid Glass — ver Tokens/Materials (Regra 10).
 *
 * **🔧 Corrigido em 2026-08-11 (Regra 11, auditoria US-026)**: releitura
 * de `get_design_context` no nó real encontrou 4 elementos Figma-
 * confirmados que a implementação anterior omitia por completo — (1) o
 * ícone de pasta (`Folder`) antes do nome de cada item; (2) o botão
 * chevron de expandir/colapsar (`ChevronDown`/`ChevronRight`) à esquerda
 * do ícone de pasta; (3) a linha de arquivo filho ("Children → Child 1"
 * no Figma, ex.: `Q1_Report_v2.pdf`) revelada quando o primeiro item está
 * expandido, com seu próprio botão "Excluir" (`PushButton variant="neutral"
 * isDestructive`); (4) o ícone `Info` antes do aviso no rodapé. Nenhum
 * desses existia no código antes — corrigidos sem inventar comportamento
 * além do confirmado (o 1º item começa expandido, os demais colapsados,
 * espelhando a composição "Default" do Figma).
 */
function DialogTemplateReviewModal({ items, onCancel, onContinue, className, ...props }: DialogTemplateReviewModalProps) {
  const [expanded, setExpanded] = React.useState<Set<string>>(
    () => new Set(items.filter((item) => item.children?.length).slice(0, 1).map((item) => item.name))
  )
  const toggleExpanded = (name: string) => {
    setExpanded((previous) => {
      const next = new Set(previous)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }
  return (
    <div
      data-slot="dialog-template-review-modal"
      role="dialog"
      aria-label="Revisar Organização"
      className={cn(
        "flex h-[613px] w-[768px] max-w-none flex-col overflow-hidden rounded-xl bg-effect-glass-white-70 shadow-[0px_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-md",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between p-6 pb-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-medium text-zinc-900">Revisar Organização</h2>
          <p className="text-base text-zinc-700">Revise o template sugerido antes de aplicar as mudanças.</p>
        </div>
        <CloseButton size="md" onClick={onCancel} />
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-auto px-6 pb-6">
        {items.map((item) => {
          const meta = SEVERITY_META[item.severity]
          const SeverityIcon = meta.icon
          const hasChildren = !!item.children?.length
          const isExpanded = expanded.has(item.name)
          const pathSegments = item.suggestedPath.split(" / ")
          return (
            <div key={item.name} className="flex flex-col gap-3 rounded-lg border border-zinc-100 bg-effect-glass-white-70/50 p-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label={isExpanded ? "Colapsar" : "Expandir"}
                    aria-expanded={isExpanded}
                    disabled={!hasChildren}
                    onClick={() => toggleExpanded(item.name)}
                    className="flex size-6 shrink-0 items-center justify-center text-zinc-500 disabled:opacity-30"
                  >
                    {isExpanded ? (
                      <ChevronDown aria-hidden="true" className="size-4" />
                    ) : (
                      <ChevronRight aria-hidden="true" className="size-4" />
                    )}
                  </button>
                  <Folder aria-hidden="true" className="size-4 shrink-0 text-zinc-500" />
                  <div className="flex flex-col gap-1">
                    <span className="text-base text-zinc-900">{item.name}</span>
                    <span className="text-xs text-zinc-600">{item.itemsLabel}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={cn("flex items-center gap-1 rounded-full px-3 py-1 text-base font-medium", meta.className)}>
                    <SeverityIcon aria-hidden="true" className="size-3" />
                    {meta.label}
                  </span>
                  <button
                    type="button"
                    onClick={item.onRename}
                    className="rounded-sm text-base font-medium text-zinc-500 transition-all hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50 motion-safe:active:scale-[0.98]"
                  >
                    Renomear
                  </button>
                  <button
                    type="button"
                    onClick={item.onEdit}
                    className="rounded-sm text-base font-medium text-brand-teal transition-all hover:text-brand-teal/80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50 motion-safe:active:scale-[0.98]"
                  >
                    Editar
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded border border-zinc-200 bg-zinc-50 p-2 text-xs text-zinc-600">
                <span>{item.suggestedPathLabel ?? "Template Sugerido:"}</span>
                {pathSegments.map((segment, index) => (
                  <React.Fragment key={segment}>
                    {index > 0 ? <ChevronRight aria-hidden="true" className="size-3 text-zinc-400" /> : null}
                    <span className="text-zinc-900">{segment}</span>
                  </React.Fragment>
                ))}
              </div>
              {hasChildren && isExpanded ? (
                <ul className="flex flex-col gap-1 pl-8">
                  {item.children!.map((child) => (
                    <li key={child.name} className="flex items-center justify-between py-1">
                      <div className="flex items-center gap-2">
                        <File aria-hidden="true" className="size-4 shrink-0 text-zinc-400" />
                        <div className="flex flex-col">
                          <span className="text-base text-zinc-900">{child.name}</span>
                          <span className="text-xs text-zinc-600">{child.meta}</span>
                        </div>
                      </div>
                      <PushButton
                        variant="neutral"
                        isDestructive
                        icon={Trash2}
                        onClick={child.onDelete}
                        className="h-8 gap-2 rounded-md bg-effect-glass-white-70 px-3 text-xs"
                      >
                        Excluir
                      </PushButton>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-zinc-200 px-6 py-4">
        <p className="flex items-center gap-2 text-xs text-zinc-600">
          <Info aria-hidden="true" className="size-3.5 shrink-0" />
          Garanta que sua estrutura de arquivos seja clara e sem duplicidades.
        </p>
        <div className="flex shrink-0 gap-4">
          <PushButton variant="neutral" className="h-8 w-22 px-4 text-xs" onClick={onCancel}>
            Cancelar
          </PushButton>
          <PushButton variant="primary" className="h-8 w-22 px-4 text-xs" onClick={onContinue}>
            Continuar
          </PushButton>
        </div>
      </div>
    </div>
  )
}

export { DialogTemplateReviewModal }
