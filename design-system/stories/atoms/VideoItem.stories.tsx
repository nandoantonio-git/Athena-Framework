import type { Meta, StoryObj } from "@storybook/react-vite"

import { VideoItem } from "../../src/components/atoms/video-item"

const meta = {
  title: "Atoms/VideoItem",
  component: VideoItem,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1442-7858' },
  },
  argTypes: {
    state: {
      control: "select",
      options: [
        "idle",
        "hover",
        "pressed",
        "disabled",
        "selected",
        "selected-hover",
        "selected-pressed",
        "favicon-header-thumbnail",
      ],
    },
  },
  args: {
    state: "idle",
    name: "Arquivo 2",
    showName: true,
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof VideoItem>

export default meta
type Story = StoryObj<typeof meta>

export const Idle: Story = {}

export const Hover: Story = {
  args: { state: "hover" },
}

export const Pressed: Story = {
  args: { state: "pressed" },
}

export const Disabled: Story = {
  args: { state: "disabled" },
}

export const Selected: Story = {
  args: { state: "selected" },
}

export const FaviconHeaderThumbnail: Story = {
  args: { state: "favicon-header-thumbnail" },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      <VideoItem state="idle" />
      <VideoItem state="hover" />
      <VideoItem state="pressed" />
      <VideoItem state="disabled" />
      <VideoItem state="selected" />
      <VideoItem state="selected-hover" />
      <VideoItem state="selected-pressed" />
      <VideoItem state="favicon-header-thumbnail" />
    </div>
  ),
}
