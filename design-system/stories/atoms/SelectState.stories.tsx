import type { Meta, StoryObj } from "@storybook/react-vite"

import { SelectState } from "../../src/components/atoms/select-state"

const meta = {
  title: "Atoms/SelectState",
  component: SelectState,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-18292' },
  },
  argTypes: {
    theme: { control: "select", options: ["light", "dark"] },
    state: { control: "select", options: ["default", "hover", "pressed"] },
  },
  args: {
    theme: "light",
    state: "default",
  },
} satisfies Meta<typeof SelectState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="rounded bg-[var(--neutral-surface-background,#f3f3f3)] p-4">
        <Story />
      </div>
    ),
  ],
}

export const AllStates: Story = {
  render: () => (
    <div className="flex items-center gap-4 rounded bg-[var(--neutral-surface-background,#f3f3f3)] p-4">
      <SelectState theme="light" state="default" />
      <SelectState theme="light" state="hover" />
      <SelectState theme="light" state="pressed" />
      <SelectState theme="dark" state="default" />
      <SelectState theme="dark" state="hover" />
      <SelectState theme="dark" state="pressed" />
    </div>
  ),
}
