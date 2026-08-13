import type { Meta, StoryObj } from "@storybook/react-vite"

import { FileListHeader } from "../../src/components/molecules/file-list-header"

const meta = {
  title: "Molecules/FileListHeader",
  component: FileListHeader,
  parameters: {
    layout: "fullscreen",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-19184' },
  },
  decorators: [(Story) => <div className="p-6"><Story /></div>],
  argTypes: {
    format: { control: "radio", options: ["home", "storage-status"] },
  },
  args: {
    format: "home",
    dateLabel: "Hoje",
  },
} satisfies Meta<typeof FileListHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Home: Story = {}

export const StorageStatus: Story = {
  args: { format: "storage-status" },
}
