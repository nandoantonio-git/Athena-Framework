import type { Meta, StoryObj } from "@storybook/react-vite"

import { ArchiveBrowserModalListItem } from "../../src/components/molecules/archive-browser-modal-list-item"

const meta = {
  title: "Molecules/ArchiveBrowserModal/ListItem",
  component: ArchiveBrowserModalListItem,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-20896' },
  },
  args: {
    fileName: "Ceremonia-001.jpg",
    meta: "JPG · 7.82 MB · 19 Jun",
    selected: false,
  },
} satisfies Meta<typeof ArchiveBrowserModalListItem>

export default meta
type Story = StoryObj<typeof meta>

/** `Property 1=ArchiveFileRow` (Figma-confirmado). */
export const Default: Story = {
  decorators: [(Story) => <div className="w-[650px]"><Story /></div>],
}

/** `Property 1=ArchiveSelectableRow` (Figma-confirmado). */
export const Selected: Story = {
  args: { selected: true },
  decorators: [(Story) => <div className="w-[600px]"><Story /></div>],
}
