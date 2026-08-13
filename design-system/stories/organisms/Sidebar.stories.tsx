import type { Meta, StoryObj } from "@storybook/react-vite"

import { Sidebar } from "../../src/components/organisms/sidebar"

const meta = {
  title: "Organisms/Sidebar",
  component: Sidebar,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-17946' } },
  args: {
    activePage: "Pessoal",
    tags: ["Image", "Contratos"],
    storageProps: {
      quickAccessValue: 66,
      quickAccessLabel: "20 GB de 30 GB usados",
      longTermValue: 50,
      longTermLabel: "1 TB de 2 TB usados",
    },
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutTags: Story = {
  args: { tags: [] },
}
