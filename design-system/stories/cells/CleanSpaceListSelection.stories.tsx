import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { CleanSpaceListSelection } from "../../src/components/cells/clean-space-list-selection"

const meta = {
  title: "Cells/CleanSpaceListSelection",
  component: CleanSpaceListSelection,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1436-20496' },
  },
  argTypes: {
    selected: { control: "boolean" },
    tier: { control: "radio", options: ["current", "long term"] },
  },
  args: {
    name: "medium-report.pdf",
    meta: "PDF · 9.54 MB · Aug 5, 2026",
    tier: "current",
    selected: false,
  },
  decorators: [
    (Story) => (
      <div className="w-[578px] rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-2">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CleanSpaceListSelection>

export default meta
type Story = StoryObj<typeof meta>

export const Unselected: Story = {}

export const Selected: Story = {
  args: { selected: true },
}

export const Interactive: Story = {
  render: (args) => {
    function Controlled() {
      const [selected, setSelected] = useState(false)
      return <CleanSpaceListSelection {...args} selected={selected} onSelectedChange={setSelected} />
    }
    return <Controlled />
  },
}
