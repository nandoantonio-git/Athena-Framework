import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { DropdownSelectGroupBy } from "../../src/components/molecules/dropdown-select-group-by"

const meta = {
  title: "Molecules/DropdownSelectGroupBy",
  component: DropdownSelectGroupBy,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-18719' },
  },
  argTypes: {
    disabled: { control: "boolean" },
    expanded: { control: "boolean" },
  },
  args: {
    disabled: false,
    expanded: false,
  },
  render: (args) => {
    function Controlled() {
      const [expanded, setExpanded] = useState(args.expanded)
      const [value, setValue] = useState<string | undefined>(args.value)
      return (
        <DropdownSelectGroupBy
          {...args}
          expanded={expanded}
          onExpandedChange={setExpanded}
          value={value}
          onValueChange={(v) => {
            setValue(v)
            setExpanded(false)
          }}
        />
      )
    }
    return <Controlled />
  },
} satisfies Meta<typeof DropdownSelectGroupBy>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Expanded: Story = {
  args: { expanded: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}
