import type { Meta, StoryObj } from "@storybook/react-vite"

import { SaveLongTermFileStorage } from "../../src/components/organisms/save-long-term-file-storage"

const meta = {
  title: "Organisms/SaveLongTermFileStorage",
  component: SaveLongTermFileStorage,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1439-16907' } },
  args: {
    files: [
      { name: "Relatorio-Q1.pdf", meta: "PDF · 12 MB · 19 Jul" },
      { name: "Backup-Financeiro.zip", meta: "ZIP · 2.1 GB · 19 Jul" },
      { name: "Fotos-Evento.zip", meta: "ZIP · 450 MB · 19 Jul" },
    ],
    selectedCount: 1,
    savingsLabel: "12 MB",
  },
} satisfies Meta<typeof SaveLongTermFileStorage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
