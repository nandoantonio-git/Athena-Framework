import type { Meta, StoryObj } from "@storybook/react-vite"

import { PopoverNotification } from "../../src/components/molecules/popover-notification"

const meta = {
  title: "Molecules/PopoverNotification",
  component: PopoverNotification,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-19626' },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["notification", "adition", "entering", "collapsed", "deep-archive", "variant-6"],
    },
    showImage: { control: "boolean" },
  },
  args: {
    variant: "notification",
    timestamp: "now",
    showImage: false,
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PopoverNotification>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Adition: Story = {
  args: { variant: "adition" },
}

export const DeepArchive: Story = {
  args: { variant: "deep-archive" },
}

export const Variant6: Story = {
  args: { variant: "variant-6" },
}

export const WithImage: Story = {
  args: { showImage: true },
}

export const Entering: Story = {
  args: { variant: "entering" },
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="h-16 w-[400px] rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-4">
        <Story />
      </div>
    ),
  ],
}

export const Collapsed: Story = {
  args: { variant: "collapsed" },
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="h-16 w-[400px] rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-4">
        <Story />
      </div>
    ),
  ],
}
