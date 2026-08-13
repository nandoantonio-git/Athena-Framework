import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "../../src/components/molecules/label"

const meta = {
  title: "Molecules/Label",
  component: Label,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-18687' },
  },
  argTypes: {
    state: { control: "radio", options: ["default", "expanded", "disabled"] },
  },
  args: {
    state: "default",
    value: "Etiquetar",
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Expanded: Story = {
  args: { state: "expanded" },
}

export const Disabled: Story = {
  args: { state: "disabled" },
}
