import type { Meta, StoryObj } from "@storybook/react-vite"

import { OrganizeFreeModeCanvas } from "../../src/components/organisms/organize-free-mode-canvas"

const meta = {
  title: "Organisms/OrganizeFreeModeCanvas",
  component: OrganizeFreeModeCanvas,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1439-16906' } },
  args: {
    rulesCount: 4,
    affectedFilesCount: 128,
    sizeLabel: "4.2 GB",
  },
} satisfies Meta<typeof OrganizeFreeModeCanvas>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
