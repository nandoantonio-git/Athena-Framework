import type { Meta, StoryObj } from "@storybook/react-vite"

import { FreeModeButtons } from "../../src/components/cells/free-mode-buttons"

const meta = {
  title: "Cells/OrganizeFreeModeCanvas/Buttons",
  component: FreeModeButtons,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1431-20043' },
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FreeModeButtons>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
