import type { Meta, StoryObj } from "@storybook/react-vite"

import { ClearButton } from "../../src/components/atoms/clear-button"

const meta = {
  title: "Atoms/ClearButton",
  component: ClearButton,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-17768' },
  },
  argTypes: {
    style: { control: "select", options: ["default", "red", "white"] },
    disabled: { control: "boolean" },
  },
  args: {
    style: "default",
    disabled: false,
  },
} satisfies Meta<typeof ClearButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Red: Story = {
  args: { style: "red" },
}

export const White: Story = {
  args: { style: "white" },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-6">
        <Story />
      </div>
    ),
  ],
}

export const Disabled: Story = {
  args: { disabled: true },
}
