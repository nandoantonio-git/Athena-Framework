import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { DropdownSelectLabel } from "../../src/components/molecules/dropdown-select-label"

const meta = {
  title: "Molecules/DropdownSelectLabel",
  component: DropdownSelectLabel,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1439-19650' },
  },
  argTypes: {
    disabled: { control: "boolean" },
    expanded: { control: "boolean" },
  },
  args: {
    disabled: false,
    expanded: false,
    labels: ["Trabalho", "Pessoal"],
  },
  render: (args) => {
    function Controlled() {
      const [expanded, setExpanded] = useState(args.expanded)
      const [value, setValue] = useState<string | undefined>(args.value)
      return (
        <DropdownSelectLabel
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
} satisfies Meta<typeof DropdownSelectLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Expanded: Story = {
  args: { expanded: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}
