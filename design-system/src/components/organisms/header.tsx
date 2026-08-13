import * as React from "react"

import { cn } from "@/lib/utils"
import { SearchInput, type SearchInputProps } from "@/components/molecules/search-input"
import { PushButton } from "@/components/atoms/push-button"
import { ICONS } from "@/components/atoms/icon"
import { ActionPill } from "@/components/molecules/action-pill"
import kandriveLogo from "@/assets/logo/kandrive-logo.svg"

export type HeaderPage = "navbar" | "settings" | "storage"

export interface HeaderProps extends React.ComponentProps<"header"> {
  page?: HeaderPage
  searchProps?: SearchInputProps
  onOrganize?: () => void
  onSave?: () => void
}

/**
 * organism/Header (`1421:19918`) — Figma-confirmado: "header". Variante
 * `page=Navbar` expõe 2 ações de fluxo ao vivo: "Organizar" e "Guardar"
 * (`PushButton variant="primary"`, Regra 1 — nenhum componente separado).
 * "Guardar" é termo aprovado (Regra 5); "Organizar" não está na lista
 * travada mas também não é termo proibido — gap de terminologia baixo,
 * ver docs/conflicts.md. Compõe `molecule/input-search` (placeholder local
 * "Pesquisar", Figma-confirmado nesta instância — distinto do placeholder
 * "Search" já registrado em `SearchInput.mdx`, mesma família de gap) +
 * `molecule/action-pill` (composição real Help/Settings/Conta — ver nota
 * abaixo).
 *
 * ⚠️ Corrigido em 2026-08-11 após achado do usuário — auditoria anterior
 * não seguia a Regra 11: o logo era texto estilizado ("Kandrive" em
 * `text-brand-teal`), mas `get_design_context` no nó real (`Kandrive_logo_principal 1`,
 * dentro de `1421:19918`) confirma um vetor de marca próprio (símbolo +
 * wordmark "Kan"+"drive" em cores distintas) — exportado via
 * `download_assets` para `src/assets/logo/kandrive-logo.svg` e usado como
 * asset, nunca como texto. A composição de `molecule/action-pill` também foi
 * corrigida na mesma auditoria (ver `ActionPill.mdx`) — os 3 ícones reais são
 * Help/Settings/Conta, não 2×Settings+SpatialAudioOff.
 *
 * ⚠️ Corrigido em 2026-08-11 (Regra 11, auditoria de fixed-point): a pílula
 * de ações (Help/Settings/Conta) é renderizada a `opacity: 50%` no Figma
 * real, uniformemente nas 3 variantes `page` (Navbar/settings/storage) —
 * confirmado via `get_design_context` no nó `1421:19918`. A implementação
 * renderizava a pílula 100% opaca (achado novo, não presente na auditoria
 * anterior). Corrigido com `className="opacity-50"` (só o efeito visual —
 * não usa a prop `disabled` do átomo, que também zera `pointer-events`; o
 * Figma é um frame estático e não confirma comportamento de clique).
 *
 * 🔧 Corrigido em 2026-08-12 (US-026, 3ª passada de ponto-fixo): os botões
 * "Organizar"/"Guardar" sobrescreviam `atom/PushButton` com
 * `className="h-9 px-3 text-sm"` — releitura fresca de `get_design_context`
 * (nó `1421:19918`) confirma a linha de botões a `h-[40px]` com
 * `padding-inline: 16px` (`px-[var(--button/padding---horizontal,16px)]`),
 * batendo exatamente com os defaults do átomo (`h-10 px-4`), não com o
 * override. O `text-sm` (14px) também derrubava silenciosamente o piso de
 * acessibilidade de 16px já travado para rótulo de botão em `atom/PushButton`
 * (US-011, `text-base` deliberado em vez do `Type/Button/MD` de 14px do
 * Figma) — como este achado é novo (não está na lista de 8 organisms com
 * gap conhecido/deferido em `PushButton.mdx`), removido o `className`
 * inteiro para herdar os defaults corretos do átomo.
 */
function Header({ page = "navbar", searchProps, onOrganize, onSave, className, ...props }: HeaderProps) {
  return (
    <header
      data-slot="header"
      className={cn(
        "flex h-24 w-full items-center gap-8 border-b border-[var(--neutral-border-default,#707070)] bg-[var(--neutral-surface-background,#f3f3f3)] px-6 py-6",
        className
      )}
      {...props}
    >
      <img src={kandriveLogo} alt="Kandrive" className="h-11 w-[173px] shrink-0" />
      <SearchInput
        {...searchProps}
        placeholder={searchProps?.placeholder ?? "Pesquisar"}
        className="w-[560px] max-w-none flex-none"
      />
      {page === "navbar" ? (
        <div className="flex shrink-0 items-center gap-5">
          <PushButton variant="primary" icon={ICONS.Organize} onClick={onOrganize}>
            Organizar
          </PushButton>
          <PushButton variant="primary" icon={ICONS.Bookmark} onClick={onSave}>
            Guardar
          </PushButton>
        </div>
      ) : null}
      <ActionPill
        className="ml-auto shrink-0 opacity-50"
        actions={[
          { name: "Help", label: "Ajuda" },
          { name: "Settings", label: "Configurações" },
          { name: "SpatialAudioOff", label: "Conta" },
        ]}
      />
    </header>
  )
}

export { Header }
