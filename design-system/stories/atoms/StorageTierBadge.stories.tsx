import type { Meta, StoryObj } from "@storybook/react-vite"

import { StorageTierBadge } from "../../src/components/atoms/storage-tier-badge"

const meta = {
  title: "Atoms/StorageTierBadge",
  component: StorageTierBadge,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1457-21014' },
  },
  argTypes: {
    tier: {
      control: "select",
      options: ["current", "long term"],
    },
  },
  args: {
    tier: "current",
  },
} satisfies Meta<typeof StorageTierBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Current: Story = {
  args: { tier: "current" },
}

export const LongTerm: Story = {
  args: { tier: "long term" },
}
