import type { Meta, StoryObj } from "@storybook/react-vite"

import { InfoPopover } from "../../src/components/organisms/info-popover"

const meta = {
  title: "Organisms/InfoPopover",
  component: InfoPopover,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-18504' } },
} satisfies Meta<typeof InfoPopover>

export default meta
type Story = StoryObj<typeof meta>

export const Metadata: Story = {
  args: {
    variant: "metadata",
    createdAt: "Hoje,15:00",
    modifiedAt: "Hoje,15:00",
    dimensions: "1920 x 1080",
    tagsLabel: "Etiquetar...",
  },
}

export const StorageInfo: Story = {
  args: {
    variant: "storage-info",
  },
}
