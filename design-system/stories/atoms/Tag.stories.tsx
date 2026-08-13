import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tag } from "../../src/components/atoms/tag"

const meta = {
  title: "Atoms/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-17929' },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "primary-dark", "secondary", "file-name"],
    },
    state: { control: "select", options: ["default", "hover"] },
  },
  args: {
    variant: "primary",
    state: "default",
    label: "Rótulo",
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: "primary" },
}

export const PrimaryHover: Story = {
  args: { variant: "primary", state: "hover" },
}

export const PrimaryDark: Story = {
  args: { variant: "primary-dark" },
}

export const Secondary: Story = {
  args: { variant: "secondary" },
}

export const FileName: Story = {
  args: { variant: "file-name" },
}

export const ColorOnly: Story = {
  args: { label: undefined },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-2 rounded bg-[var(--neutral-surface-background,#f3f3f3)] p-4">
      <Tag variant="primary" />
      <Tag variant="primary" state="hover" />
      <Tag variant="file-name" />
      <Tag variant="file-name" state="hover" />
      <Tag variant="primary-dark" />
      <Tag variant="primary-dark" state="hover" />
      <Tag variant="secondary" />
      <Tag variant="secondary" state="hover" />
    </div>
  ),
}
