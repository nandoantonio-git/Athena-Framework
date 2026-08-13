import type { Meta, StoryObj } from "@storybook/react-vite"

import { ArchiveItem } from "../../src/components/atoms/archive-item"

const meta = {
  title: "Atoms/ArchiveItem",
  component: ArchiveItem,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-18214' },
  },
  argTypes: {
    state: {
      control: "select",
      options: ["idle", "hover", "pressed", "disabled", "selected", "selected-hover", "selected-pressed"],
    },
  },
  args: {
    state: "idle",
    name: "Arquivo 1",
    showName: true,
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ArchiveItem>

export default meta
type Story = StoryObj<typeof meta>

export const Idle: Story = {}

export const Hover: Story = {
  args: { state: "hover" },
}

export const Pressed: Story = {
  args: { state: "pressed" },
}

export const Disabled: Story = {
  args: { state: "disabled" },
}

export const Selected: Story = {
  args: { state: "selected" },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      <ArchiveItem state="idle" />
      <ArchiveItem state="hover" />
      <ArchiveItem state="pressed" />
      <ArchiveItem state="disabled" />
      <ArchiveItem state="selected" />
      <ArchiveItem state="selected-hover" />
      <ArchiveItem state="selected-pressed" />
    </div>
  ),
}
