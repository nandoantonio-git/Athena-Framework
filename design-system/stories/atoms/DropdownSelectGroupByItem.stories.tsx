import type { Meta, StoryObj } from "@storybook/react-vite"

import { DropdownSelectGroupByItem } from "../../src/components/atoms/dropdown-select-group-by-item"

const meta = {
  title: "Atoms/DropdownSelectGroupByItem",
  component: DropdownSelectGroupByItem,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1444-21587' },
  },
  argTypes: {
    selected: { control: "boolean" },
  },
  args: {
    label: "Tipo",
    selected: false,
  },
} satisfies Meta<typeof DropdownSelectGroupByItem>

export default meta
type Story = StoryObj<typeof meta>

export const Idle: Story = {}

export const Selected: Story = {
  args: { selected: true },
}

export const LongLabel: Story = {
  args: { label: "Data de modificação" },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-2 bg-[var(--neutral-surface-background,#f3f3f3)] p-4">
      <DropdownSelectGroupByItem label="Tipo" />
      <DropdownSelectGroupByItem label="Tamanho" selected />
    </div>
  ),
}
