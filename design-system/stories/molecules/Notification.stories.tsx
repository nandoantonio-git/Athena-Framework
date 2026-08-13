import type { Meta, StoryObj } from "@storybook/react-vite"

import { Notification } from "../../src/components/molecules/notification"

const meta = {
  title: "Molecules/Notification",
  component: Notification,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1439-19748' },
  },
  argTypes: {
    showImage: { control: "boolean" },
  },
  args: {
    title: "Arquivo adicionado",
    timestamp: "now",
    showImage: false,
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Notification>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithImage: Story = {
  args: { showImage: true },
}
