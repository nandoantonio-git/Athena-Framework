import type { Meta, StoryObj } from "@storybook/react-vite"
import { ArchiveIcon } from "lucide-react"

import { PushButton } from "../../src/components/atoms/push-button"

const meta = {
  title: "Atoms/PushButton",
  component: PushButton,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-17302' },
  },
  argTypes: {
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
    children: { control: "text" },
    icon: { control: false },
    variant: { control: "radio", options: ["primary", "neutral"] },
    isDestructive: { control: "boolean" },
  },
  args: {
    children: "Guardar",
    loading: false,
    disabled: false,
  },
} satisfies Meta<typeof PushButton>

export default meta
type Story = StoryObj<typeof meta>

/** Estado default — único tratamento visual do MVP (Regra 1). */
export const Default: Story = {}

/**
 * Hover e Active/Pressed são estados puramente CSS (`:hover`/`:active`),
 * não dependem de prop — testáveis interagindo diretamente com o botão
 * no Canvas do Storybook. Sem story dedicada por não haver prop a variar.
 */

export const Disabled: Story = {
  args: { disabled: true },
}

export const Loading: Story = {
  args: { loading: true },
}

/**
 * Não existe no enum `State` do Figma (Idle/Hover/Clicked/Disabled apenas —
 * achado do inventário US-002) — extensão de engenharia, implementado via
 * `aria-invalid` por convenção, nunca apresentado como Figma-confirmado.
 */
export const Error: Story = {
  args: { "aria-invalid": true },
}

/**
 * Eixo `isIconOn` (Figma-confirmado, `atom/PushButton`, nó `1421:17302`) —
 * ícone opcional à esquerda do label.
 */
export const WithIcon: Story = {
  args: { icon: ArchiveIcon, children: "Arquivar" },
}

/**
 * `Style=Bordered Neutral` (Figma-confirmado) — ação secundária, ex.:
 * "Cancelar" nos modais de organisms (DialogSave, TemplateReviewModal,
 * Save/LongTermFileStorage, ArchiveBrowserModal, cleanSpaceStorage).
 */
export const Neutral: Story = {
  args: { variant: "neutral", children: "Cancelar" },
}

/**
 * Eixo `isDestructive` (Figma-confirmado, `atom/PushButton`, nó
 * `1421:17302`) — descrição verbatim: "Botao de funcao destrutiva".
 * Tratamento visual exato (cor/tom) não extraído pixel-a-pixel do Figma —
 * 🧩 inferido a partir do token `destructive` já usado no projeto (mesmo
 * usado em `aria-invalid`).
 */
export const Destructive: Story = {
  args: { isDestructive: true, children: "Excluir" },
}
