import type { Meta, StoryObj } from "@storybook/react-vite"

import { ConfirmButton } from "../../src/components/atoms/confirm-button"

const meta = {
  title: "Atoms/ConfirmButton",
  component: ConfirmButton,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-17747' },
  },
  argTypes: {
    style: { control: "select", options: ["default", "primary", "white"] },
    disabled: { control: "boolean" },
  },
  args: {
    style: "default",
    disabled: false,
  },
} satisfies Meta<typeof ConfirmButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Primary: Story = {
  args: { style: "primary" },
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
