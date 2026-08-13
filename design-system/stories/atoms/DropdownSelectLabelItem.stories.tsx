import type { Meta, StoryObj } from "@storybook/react-vite"

import { DropdownSelectLabelItem } from "../../src/components/atoms/dropdown-select-label-item"

const meta = {
  title: "Atoms/DropdownSelectLabelItem",
  component: DropdownSelectLabelItem,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1444-21704' },
  },
  argTypes: {
    active: { control: "boolean" },
  },
  args: {
    label: "+ Nova Etiqueta",
    active: false,
  },
} satisfies Meta<typeof DropdownSelectLabelItem>

export default meta
type Story = StoryObj<typeof meta>

export const Idle: Story = {}

export const Clicked: Story = {
  args: { active: true },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-2 bg-[var(--neutral-surface-background,#f3f3f3)] p-4">
      <DropdownSelectLabelItem />
      <DropdownSelectLabelItem active />
    </div>
  ),
}
