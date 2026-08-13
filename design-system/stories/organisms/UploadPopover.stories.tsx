import type { Meta, StoryObj } from "@storybook/react-vite"

import { UploadPopover } from "../../src/components/organisms/upload-popover"

const meta = {
  title: "Organisms/UploadPopover",
  component: UploadPopover,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-19292' } },
  args: {
    fileCount: 3,
    percent: 62,
    secondsLeft: 6,
    files: [],
  },
} satisfies Meta<typeof UploadPopover>

export default meta
type Story = StoryObj<typeof meta>

export const InProgress: Story = {}

export const WithFileList: Story = {
  args: {
    files: [
      { name: "hero_header_final.png", done: true },
      { name: "walkthrough_clip.mp4", done: false },
    ],
  },
}
