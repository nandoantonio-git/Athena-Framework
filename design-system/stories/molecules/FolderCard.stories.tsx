import type { Meta, StoryObj } from "@storybook/react-vite"

import { FolderCard } from "../../src/components/molecules/folder-card"

const meta = {
  title: "Molecules/FolderCard",
  component: FolderCard,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-18595' },
  },
  argTypes: {
    state: { control: "radio", options: ["idle", "hover", "selected"] },
    expanded: { control: "boolean" },
  },
  args: {
    label: "Pasta",
    state: "idle",
    expanded: true,
  },
} satisfies Meta<typeof FolderCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Hover: Story = {
  args: { state: "hover" },
}

export const Selected: Story = {
  args: { state: "selected" },
}

export const Collapsed: Story = {
  args: { expanded: false },
}
