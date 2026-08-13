import type { Meta, StoryObj } from "@storybook/react-vite"
import { Plus, Maximize, RotateCcw, Trash2 } from "lucide-react"

import { BoxIconButton } from "../../src/components/atoms/box-icon-button"

const meta = {
  title: "Atoms/BoxIconButton",
  component: BoxIconButton,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1431-20102' },
  },
  argTypes: {
    danger: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    icon: Plus,
    label: "Adicionar nodo",
    danger: false,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BoxIconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Toolbar: Story = {
  render: () => (
    <div className="flex items-center gap-1.5">
      <BoxIconButton icon={Plus} label="Adicionar nodo" />
      <BoxIconButton icon={Maximize} label="Expandir" />
      <BoxIconButton icon={RotateCcw} label="Redefinir" />
      <BoxIconButton icon={Trash2} label="Excluir" danger />
    </div>
  ),
}

export const Danger: Story = {
  args: { icon: Trash2, label: "Excluir", danger: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}
