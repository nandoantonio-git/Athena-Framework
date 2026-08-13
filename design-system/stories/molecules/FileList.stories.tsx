import type { Meta, StoryObj } from "@storybook/react-vite"

import { FileList } from "../../src/components/molecules/file-list"

const meta = {
  title: "Molecules/FileList",
  component: FileList,
  parameters: {
    layout: "fullscreen",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-19200' },
  },
  decorators: [(Story) => <div className="p-6"><Story /></div>],
  argTypes: {
    format: { control: "radio", options: ["list", "storage", "list-sm"] },
    state: { control: "radio", options: ["idle", "hover", "pressed"] },
  },
  args: {
    fileName: "Arquivo 1",
    format: "list",
    state: "idle",
    owner: "Proprietário",
    size: "100MB",
    showIcon: true,
  },
} satisfies Meta<typeof FileList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Hover: Story = {
  args: { state: "hover" },
}

export const Pressed: Story = {
  args: { state: "pressed" },
}

export const Storage: Story = {
  args: { format: "storage" },
}

export const SmallWithArrow: Story = {
  args: { format: "list-sm" },
}
