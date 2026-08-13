import type { Meta, StoryObj } from "@storybook/react-vite"

import { DropdownMenu } from "../../src/components/organisms/dropdown-menu"

const meta = {
  title: "Organisms/DropdownMenu",
  component: DropdownMenu,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1440-23662' } },
  argTypes: {
    variant: { control: "radio", options: ["sidebar", "template-options"] },
  },
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Sidebar: Story = {
  args: { variant: "sidebar" },
}

export const TemplateOptions: Story = {
  args: { variant: "template-options" },
}
