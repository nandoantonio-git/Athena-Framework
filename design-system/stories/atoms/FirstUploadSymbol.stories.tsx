import type { Meta, StoryObj } from "@storybook/react-vite"

import { FirstUploadSymbol } from "../../src/components/atoms/first-upload-symbol"

const meta = {
  title: "Atoms/FirstUploadSymbol",
  component: FirstUploadSymbol,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1454-20974' },
  },
} satisfies Meta<typeof FirstUploadSymbol>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
