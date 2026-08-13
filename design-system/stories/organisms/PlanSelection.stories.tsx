import type { Meta, StoryObj } from "@storybook/react-vite"

import { PlanSelection } from "../../src/components/organisms/plan-selection"

const meta = {
  title: "Organisms/PlanSelection",
  component: PlanSelection,
  parameters: {
    layout: "padded",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1454-25057' },
  },
  argTypes: {
    interval: {
      control: "select",
      options: ["monthly", "annual"],
    },
  },
  args: {
    interval: "annual",
  },
} satisfies Meta<typeof PlanSelection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Monthly: Story = {
  args: { interval: "monthly" },
}
