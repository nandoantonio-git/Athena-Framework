import type { Meta, StoryObj } from "@storybook/react-vite"

import { TagOrgMode } from "../../src/components/atoms/tag-org-mode"

const meta = {
  title: "Atoms/TagOrgMode",
  component: TagOrgMode,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-18769' },
  },
  argTypes: {
    mode: {
      control: "select",
      options: ["free", "date", "project", "type"],
    },
  },
  args: {
    mode: "free",
  },
} satisfies Meta<typeof TagOrgMode>

export default meta
type Story = StoryObj<typeof meta>

export const Free: Story = {
  args: { mode: "free" },
}

export const Date: Story = {
  args: { mode: "date" },
}

export const Project: Story = {
  args: { mode: "project" },
}

export const Type: Story = {
  args: { mode: "type" },
}

export const AllModes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-2">
      <TagOrgMode mode="free" />
      <TagOrgMode mode="date" />
      <TagOrgMode mode="project" />
      <TagOrgMode mode="type" />
    </div>
  ),
}
