import type { Meta, StoryObj } from "@storybook/react-vite"

import { PagesLead } from "../../src/components/celules/pages-lead"

const meta = {
  title: "Celules/PagesLead",
  component: PagesLead,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1439-17048' },
  },
  args: {
    title: "Armazenamento",
    caption: "Gerencie seu armazenamento",
  },
} satisfies Meta<typeof PagesLead>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const OtherPage: Story = {
  args: { title: "Configurações de Plano", caption: "Gerencie sua assinatura e forma de pagamento" },
}
