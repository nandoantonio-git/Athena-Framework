import type { Meta, StoryObj } from "@storybook/react-vite"

import { StorageStatusCurrent } from "../../src/components/molecules/storage-status-current"

const meta = {
  title: "Molecules/StorageStatus/Current",
  component: StorageStatusCurrent,
  parameters: {
    layout: "padded",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1439-17044' },
  },
  argTypes: {
    percent: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  args: {
    usedAmount: "40GB",
    totalAmount: "100GB",
    percent: 40,
    scopeAbbr: "AC",
  },
} satisfies Meta<typeof StorageStatusCurrent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NearLimit: Story = {
  args: { usedAmount: "92GB", percent: 92 },
}
