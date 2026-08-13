import type { Meta, StoryObj } from "@storybook/react-vite"

import { Icon, ICONS, type IconName } from "../../src/components/atoms/icon"

const iconNames = Object.keys(ICONS) as IconName[]

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-17656' },
  },
  argTypes: {
    name: { control: "select", options: iconNames },
  },
  args: {
    name: "Arquivar",
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

/** As 44 instâncias confirmadas na seção "Icon/" do Figma (figma-inventory.md, Seção 2.1), lado a lado. */
export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-8 gap-4 text-zinc-700">
      {iconNames.map((name) => (
        <div key={name} className="flex flex-col items-center gap-1 text-center">
          <Icon name={name} />
          <span className="text-[10px] text-zinc-400">{name}</span>
        </div>
      ))}
    </div>
  ),
}
