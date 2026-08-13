import type { Meta, StoryObj } from "@storybook/react-vite"

import { ActionPill } from "../../src/components/molecules/action-pill"

const meta = {
  title: "Molecules/ActionPill",
  component: ActionPill,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-19027' },
  },
  argTypes: {
    disabled: { control: "boolean" },
  },
  args: {
    disabled: false,
    actions: [
      { name: "Help", label: "Ajuda", onClick: () => {} },
      { name: "Settings", label: "Configurações", onClick: () => {} },
      { name: "SpatialAudioOff", label: "Conta", onClick: () => {} },
    ],
  },
} satisfies Meta<typeof ActionPill>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true },
}
