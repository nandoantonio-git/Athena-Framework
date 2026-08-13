import type { Meta, StoryObj } from "@storybook/react-vite"

import { FileArchiveCard } from "../../src/components/molecules/file-archive-card"

const meta = {
  title: "Molecules/FileArchive",
  component: FileArchiveCard,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1439-19655' },
  },
  args: {
    label: "Arquivo 1",
    interactive: false,
  },
} satisfies Meta<typeof FileArchiveCard>

export default meta
type Story = StoryObj<typeof meta>

/** `molecule/FileArchive1` (`1439:19655`). */
export const FileArchive1: Story = {}

/** `molecule/FileArchive2` (`1439:19656`) — mesma anatomia, `cursor-pointer` no ícone. */
export const FileArchive2: Story = {
  args: { label: "Arquivo 3", interactive: true },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1439-19656' },
  },
}
