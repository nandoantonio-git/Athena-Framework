import type { Meta, StoryObj } from "@storybook/react-vite"

import { PageLead } from "../../src/components/cells/page-lead"

const meta = {
  title: "Cells/PageLead",
  component: PageLead,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1439-17048' },
  },
  args: {
    title: "Armazenamento",
    caption: "Gerencie seu armazenamento",
  },
} satisfies Meta<typeof PageLead>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const OtherPage: Story = {
  args: { title: "Configurações de Plano", caption: "Gerencie sua assinatura e forma de pagamento" },
}
