import type { Meta, StoryObj } from "@storybook/react-vite"

import { StorageSidebar } from "../../src/components/organisms/storage-sidebar"

const meta = {
  title: "Organisms/StorageSidebar",
  component: StorageSidebar,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-19167' } },
  argTypes: {
    expanded: { control: "boolean" },
    quickAccessValue: { control: { type: "range", min: 0, max: 100 } },
    longTermValue: { control: { type: "range", min: 0, max: 100 } },
  },
  args: {
    expanded: true,
    quickAccessValue: 66,
    quickAccessLabel: "20 GB de 30 GB usados",
    longTermValue: 50,
    longTermLabel: "1 TB de 2 TB usados",
  },
  decorators: [(Story) => <div className="w-60"><Story /></div>],
} satisfies Meta<typeof StorageSidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Collapsed: Story = {
  args: { expanded: false },
}
