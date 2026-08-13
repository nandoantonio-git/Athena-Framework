import type { Meta, StoryObj } from "@storybook/react-vite"

import { UploadFolder } from "../../src/components/atoms/upload-folder"

const meta = {
  title: "Atoms/UploadFolder",
  component: UploadFolder,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1439-17053' },
  },
} satisfies Meta<typeof UploadFolder>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <UploadFolder className="text-zinc-700" />,
}
