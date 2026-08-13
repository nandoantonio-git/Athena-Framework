import type { Meta, StoryObj } from "@storybook/react-vite"

import { OrganizePanelDropZone } from "../../src/components/organisms/organize-panel-drop-zone"

const meta = {
  title: "Organisms/OrganizePanelDropZone",
  component: OrganizePanelDropZone,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-18781' } },
  argTypes: {
    mode: { control: "radio", options: ["Data", "Projeto", "Tipo"] },
    state: { control: "radio", options: ["idle", "dragover", "filled"] },
    quantity: { control: "radio", options: [1, 2, 3, 4] },
  },
  args: {
    mode: "Data",
    state: "idle",
  },
} satisfies Meta<typeof OrganizePanelDropZone>

export default meta
type Story = StoryObj<typeof meta>

export const Idle: Story = {}

export const Dragover: Story = {
  args: { state: "dragover" },
}

export const NamedTemplate: Story = {
  args: { templateName: "Fotos do casamento", mode: "Projeto" },
}

export const Filled: Story = {
  args: { state: "filled", templateName: "Fotos do casamento", quantity: 4 },
}
