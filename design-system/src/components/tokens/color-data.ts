import type { ColorEntry } from "./color-swatch"

/**
 * Espelha as tabelas de `stories/tokens/Colors.mdx` — nenhum valor aqui é
 * novo, é a mesma reconciliação Figma já documentada (US-009, US-011,
 * achados de US-002). Editar aqui E a tabela do `.mdx` se um valor mudar.
 */
export const BRAND_COLORS: ColorEntry[] = [
  { token: "cor/marca/primária/teal-base", variable: "var(--brand-primary-default)", value: "#007e96", role: "Cor primária de marca e de ação", confirmation: "figma", note: "Ativo desde 2026-08-10 (decisão humana) — substitui #2A7A8C descontinuado" },
  { token: "cor/marca/primária/teal-dark", variable: "var(--brand-primary-dark)", value: "#1a5e6e", role: "Hover/pressed do primário, modo escuro", confirmation: "figma" },
  { token: "cor/marca/primária/teal-mid", variable: "var(--brand-primary-mid)", value: "#337084", role: "Tom intermediário", confirmation: "figma" },
  { token: "cor/marca/primária/teal-light", variable: "var(--brand-primary-light)", value: "#c8dce3", role: "Borda/realce sutil sobre superfícies primárias", confirmation: "figma" },
  { token: "cor/marca/primária/teal-hover", variable: "var(--color-brand-primary-hover)", value: "#006b80", role: "Estado hover explícito (variável própria, distinta de -dark)", confirmation: "figma" },
  { token: "cor/marca/primária/teal-focus", variable: "var(--brand-primary-focus)", value: "#92ccff", role: "Anel de foco (azul, não teal — nome diverge da cor real)", confirmation: "figma" },
  { token: "cor/marca/primária/teal-disabled", variable: "var(--brand-primary-disabled)", value: "#ecfbfde5", role: "Fundo do primário desabilitado", confirmation: "figma" },
  { token: "cor/marca/secundária/wordmark", variable: "var(--brand-secondary-default)", value: "#31302d", role: "Cinza do wordmark — uso tipográfico/identidade", confirmation: "figma", note: "Ativo desde 2026-08-10 — substitui #3A3C38 descontinuado" },
  { token: "cor/marca/secundária/wordmark-dark", variable: "var(--brand-secondary-dark)", value: "#1a1714", role: "Variante escura do wordmark", confirmation: "figma" },
  { token: "cor/marca/secundária/wordmark-light", variable: "var(--brand-secondary-light)", value: "#6b6b68", role: "Variante clara do wordmark", confirmation: "figma" },
  { token: "cor/categoria/acesso-rápido/rosa-dark", variable: "Brand/Theme/Pink/Dark (--brand-pink-dark)", value: "#b5254a", role: 'Cor semântica de dado/estado da categoria "Acesso rápido"', confirmation: "figma" },
  { token: "cor/categoria/acesso-rápido/rosa-light", variable: "Brand/Theme/Pink/Light (--brand-pink-light)", value: "#e8476a", role: 'Cor semântica de dado/estado da categoria "Acesso rápido"', confirmation: "figma" },
]

export const FEEDBACK_COLORS: ColorEntry[] = [
  { token: "cor/feedback/perigo/padrão", variable: "var(--brand-feedback-danger-default)", value: "#bc3426", role: "Erro, ação destrutiva", confirmation: "figma" },
  { token: "cor/feedback/perigo/sutil", variable: "var(--brand-feedback-danger-subtle)", value: "#c0392b59", role: "Fundo sutil de erro (com alpha)", confirmation: "figma" },
  { token: "cor/feedback/sucesso/base", variable: "var(--brand-feedback-success-default)", value: "#009966", role: "Confirmação, sucesso", confirmation: "figma" },
  { token: "cor/feedback/sucesso/sutil", variable: "Brand/Feedback/Success/Subtle", value: "#00996659", role: "Fundo sutil de sucesso", confirmation: "figma" },
  { token: "cor/feedback/aviso/base", variable: "var(--color-feedback-warning)", value: "#c38418", role: "Aviso", confirmation: "figma" },
  { token: "cor/feedback/aviso/sutil", variable: "var(--color-feedback-warning-subtle)", value: "#f59e0b33", role: "Fundo sutil de aviso", confirmation: "figma" },
]

export const NEUTRAL_COLORS_CONFIRMED: ColorEntry[] = [
  { token: "cor/neutro/texto/zinc-950", variable: "var(--neutral-text-primary)", value: "#09090b", role: "Texto principal", confirmation: "figma" },
  { token: "cor/neutro/texto/zinc-700", variable: "var(--neutral-text-secondary)", value: "#3f3f46", role: "Texto de corpo alternativo", confirmation: "figma" },
  { token: "cor/neutro/texto-secundário/zinc-500", variable: "var(--neutral-text-tertiary)", value: "#71717a", role: "Texto secundário/terciário", confirmation: "figma" },
  { token: "cor/neutro/superficie/zinc-600", variable: "var(--neutral-surface-medium)", value: "#52525b", role: "Superfície média", confirmation: "figma" },
]
