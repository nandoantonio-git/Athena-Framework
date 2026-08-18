import type { Meta, StoryObj } from "@storybook/react-vite"

import { FreeModeOutputNode } from "../../src/components/cells/free-mode-output-node"

const meta = {
  title: "Cells/OrganizeFreeModeCanvas/OutputNode",
  component: FreeModeOutputNode,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-20262' },
  },
  argTypes: {
    variant: { control: "select", options: ["default", "compact"] },
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FreeModeOutputNode>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { variant: "default" } }
export const Compact: Story = { args: { variant: "compact" } }
