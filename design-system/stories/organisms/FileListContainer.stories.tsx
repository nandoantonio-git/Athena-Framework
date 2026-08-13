import type { Meta, StoryObj } from "@storybook/react-vite"

import { FileListContainer } from "../../src/components/organisms/file-list-container"

const meta = {
  title: "Organisms/FileListContainer",
  component: FileListContainer,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-19687' } },
  args: {
    rows: [
      { name: "Arquivo 1" },
      { name: "Arquivo 2" },
      { name: "Arquivo 3" },
    ],
  },
} satisfies Meta<typeof FileListContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
