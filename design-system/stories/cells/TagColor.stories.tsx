import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { TagColor, type TagColorName } from "../../src/components/cells/tag-color"

const meta = {
  title: "Cells/TagColor",
  component: TagColor,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1444-21979' },
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TagColor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: "success" },
}

export const Interactive: Story = {
  render: () => {
    function Controlled() {
      const [value, setValue] = useState<TagColorName>("success")
      return <TagColor value={value} onValueChange={setValue} />
    }
    return <Controlled />
  },
}
