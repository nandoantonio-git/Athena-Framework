import * as React from "react"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"

export interface CardLoginProps extends React.ComponentProps<"div"> {
  onSubmit?: (values: { email: string; password: string }) => void
  onForgotPassword?: () => void
  onGoogleLogin?: () => void
  onAppleLogin?: () => void
}

/**
 * organism/Card/Login (`1454:22055`) — Figma-confirmado: "card de login do
 * usuário, no qual ele preenche suas informações para acessar ou usa dados
 * de terceiros para entrar(conta google)."
 *
 * **Conflito reduzido em 2026-08-10** (era alta, ver histórico em
 * `docs/conflicts.md`): releitura do Figma mostra que o usuário corrigiu a
 * maior parte do nó pra `Figtree` (headings, labels, link "Esqueceu sua
 * senha?", divisor "OU", botões sociais) e o botão "Entrar"/link já usam
 * `#007e96` (`brand-teal`, token de marca correto, Regra 3). Residual baixo:
 * 2 nós ainda especificam `Manrope` no Figma (placeholder dos inputs, label
 * do botão "Entrar") — implementado com `font-sans` (Figtree) mesmo assim,
 * por decisão travada (Regra 4), não resolvido silenciosamente como
 * Figma-confirmado. Paleta neutra (`#1a1c1c`/`#3e484c`/`#bec8cc`/`#f9f9f9`)
 * segue aproximada pela rampa Zinc — mesmo gap já registrado para a paleta
 * neutra geral do arquivo (`docs/conflicts.md`, "Paleta neutra"), não uma
 * divergência nova deste componente.
 */
function CardLogin({
  onSubmit,
  onForgotPassword,
  onGoogleLogin,
  onAppleLogin,
  className,
  ...props
}: CardLoginProps) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div
      data-slot="card-login"
      className={cn(
        "flex h-[591px] w-[400px] max-w-none flex-col items-center gap-8 rounded-3xl bg-effect-glass-white-36 px-9 py-4",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-semibold text-zinc-900">Bem-vindo de volta</h1>
        <p className="text-base text-zinc-600">
          Acesse sua conta segura no
          <br />
          Kandrive
        </p>
      </div>

      <form
        className="flex w-full flex-col gap-6"
        onSubmit={(event) => {
          event.preventDefault()
          onSubmit?.({ email, password })
        }}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="card-login-email" className="text-base font-medium text-zinc-600">
            E-mail
          </label>
          <div className="relative">
            <Mail aria-hidden="true" className="pointer-events-none absolute left-[13px] top-1/2 size-5 -translate-y-1/2 text-zinc-400" />
            <input
              id="card-login-email"
              type="email"
              autoComplete="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-zinc-50/80 py-3.5 pr-3 pl-10 text-base text-zinc-900 placeholder:text-zinc-400 focus-visible:border-brand-teal focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label htmlFor="card-login-password" className="text-base font-medium text-zinc-600">
              Senha
            </label>
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-xs font-medium text-brand-teal hover:underline"
            >
              Esqueceu sua senha?
            </button>
          </div>
          <div className="relative">
            <Lock aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
            <input
              id="card-login-password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-zinc-50/80 py-3.5 pr-10 pl-10 text-base text-zinc-900 placeholder:text-zinc-400 focus-visible:border-brand-teal focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-teal/50"
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
            >
              {showPassword ? <EyeOff aria-hidden="true" className="size-4" /> : <Eye aria-hidden="true" className="size-4" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mt-1 w-full rounded-xl bg-brand-teal py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-teal/90 motion-safe:active:scale-[0.98]"
        >
          Entrar
        </button>
      </form>

      <div className="flex w-full items-center gap-3 opacity-60">
        <div className="h-px flex-1 bg-zinc-300" />
        <span className="text-base font-normal text-zinc-600">OU</span>
        <div className="h-px flex-1 bg-zinc-300" />
      </div>

      <div className="flex w-full flex-col gap-3">
        <button
          type="button"
          onClick={onGoogleLogin}
          className="w-full rounded-xl border border-zinc-300 bg-zinc-50/90 py-3.5 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100"
        >
          Entrar com Google
        </button>
        <button
          type="button"
          onClick={onAppleLogin}
          className="w-full rounded-xl border border-zinc-300 bg-zinc-50/90 py-3.5 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100"
        >
          Entrar com Apple
        </button>
      </div>
    </div>
  )
}

export { CardLogin }
