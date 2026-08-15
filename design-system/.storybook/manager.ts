import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming/create'

/**
 * Tema visual da casca do Storybook (sidebar/toolbar) — não afeta as
 * stories em si (isso é `preview.tsx`). Decisão humana em 2026-08-14: o
 * Storybook usava a marca padrão dele (logo/cores genéricos); aqui ele
 * passa a refletir o Kandrive — base clara, destaque teal (`#007e96`,
 * Figma-confirmado, ver AGENTS.md Regra 3), Figtree (Regra 4), logo real
 * (`Kandrive_logo_principal 1`, já usado em `organism/Header`).
 */
const kandriveTheme = create({
  base: 'light',

  brandTitle: 'Kandrive',
  brandUrl: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive',
  brandImage: '/kandrive-logo.svg',
  brandTarget: '_blank',

  fontBase: '"Figtree Variable", "Figtree", sans-serif',
  fontCode: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',

  colorPrimary: '#007e96',
  colorSecondary: '#007e96',

  appBg: '#f7f7f5',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e2ded4',
  appBorderRadius: 8,

  textColor: '#201f1a',
  textInverseColor: '#ffffff',

  barTextColor: '#5b5954',
  barSelectedColor: '#007e96',
  barHoverColor: '#007e96',
  barBg: '#ffffff',

  inputBg: '#ffffff',
  inputBorder: '#e2ded4',
  inputTextColor: '#201f1a',
  inputBorderRadius: 6,
})

addons.setConfig({
  theme: kandriveTheme,
})
