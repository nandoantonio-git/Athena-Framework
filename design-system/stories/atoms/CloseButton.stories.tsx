import type { Meta, StoryObj } from "@storybook/react-vite"

import { CloseButton } from "../../src/components/atoms/close-button"

const meta = {
  title: "Atoms/CloseButton",
  component: CloseButton,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-19008' },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md"] },
    state: { control: "inline-radio", options: ["idle", "hover", "pressed"] },
  },
  args: {
    label: "Fechar",
    size: "sm",
    state: "idle",
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CloseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllStates: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {(["sm", "md"] as const).map((size) => (
        <div key={size} className="flex items-center gap-3">
          {(["idle", "hover", "pressed"] as const).map((state) => (
            <CloseButton key={`${size}-${state}`} size={size} state={state} />
          ))}
        </div>
      ))}
    </div>
  ),
}

export const Medium: Story = {
  args: { size: "md" },
}
