import type { Meta, StoryObj } from "@storybook/react-vite"

import { LabelStorageAlert } from "../../src/components/atoms/label-storage-alert"

const meta = {
  title: "Atoms/LabelStorageAlert",
  component: LabelStorageAlert,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1439-16885' },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "variant2", "variant3", "variant4"],
    },
  },
  args: {
    variant: "default",
  },
} satisfies Meta<typeof LabelStorageAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: "default" },
}

export const Variant2: Story = {
  args: { variant: "variant2" },
}

export const Variant3: Story = {
  args: { variant: "variant3" },
}

export const Variant4Ok: Story = {
  args: { variant: "variant4" },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-2">
      <LabelStorageAlert variant="default" />
      <LabelStorageAlert variant="variant2" />
      <LabelStorageAlert variant="variant3" />
      <LabelStorageAlert variant="variant4" />
    </div>
  ),
}
