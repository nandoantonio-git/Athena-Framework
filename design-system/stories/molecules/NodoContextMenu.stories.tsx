import type { Meta, StoryObj } from "@storybook/react-vite"

import { NodoContextMenu } from "../../src/components/molecules/nodo-context-menu"

const meta = {
  title: "Molecules/NodoContextMenu",
  component: NodoContextMenu,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1440-23821' },
  },
  argTypes: {
    state: { control: "select", options: ["floating-info-panel", "state-3"] },
    logicalOperator: { control: "select", options: ["and", "or"] },
  },
  args: {
    state: "floating-info-panel",
    logicalOperator: "and",
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NodoContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WrongInput: Story = {
  args: { state: "state-3" },
}

export const LogicalOr: Story = {
  args: { logicalOperator: "or" },
}
