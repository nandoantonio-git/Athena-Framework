import type { Meta, StoryObj } from "@storybook/react-vite"

import { SidebarToggle } from "../../src/components/organisms/sidebar-toggle"

const meta = {
  title: "Organisms/Sidebar/Toggle",
  component: SidebarToggle,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-19118' } },
  argTypes: {
    expanded: { control: "boolean" },
    state: { control: "select", options: ["idle", "hover", "pressed"] },
    label: { control: "text" },
  },
  args: {
    label: "Armazenamento",
    expanded: true,
    state: "idle",
  },
  decorators: [(Story) => <div className="w-60"><Story /></div>],
} satisfies Meta<typeof SidebarToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Expanded: Story = {}

export const Collapsed: Story = {
  args: { expanded: false },
}

export const ExpandedHover: Story = {
  args: { expanded: true, state: "hover" },
}

export const ExpandedPressed: Story = {
  args: { expanded: true, state: "pressed" },
}

export const CollapsedHover: Story = {
  args: { expanded: false, state: "hover" },
}

export const CollapsedPressed: Story = {
  args: { expanded: false, state: "pressed" },
}
