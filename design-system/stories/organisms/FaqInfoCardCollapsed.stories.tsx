import type { Meta, StoryObj } from "@storybook/react-vite"

import { FaqInfoCardCollapsed } from "../../src/components/organisms/faq-info-card-collapsed"

const meta = {
  title: "Organisms/FaqInfoCardCollapsed",
  component: FaqInfoCardCollapsed,
  parameters: {
    layout: "padded",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1454-22003' },
  },
  argTypes: {
    topic: {
      control: "select",
      options: [
        "FirstSteps",
        "LongTermStorage",
        "Organization",
        "LabelsTags",
        "Duplicates",
        "Storage",
        "FrequentIssues",
      ],
    },
  },
  args: {
    topic: "FirstSteps",
  },
} satisfies Meta<typeof FaqInfoCardCollapsed>

export default meta
type Story = StoryObj<typeof meta>

export const FirstSteps: Story = {
  args: { topic: "FirstSteps" },
}

export const Storage: Story = {
  args: { topic: "Storage" },
}

export const LongTermStorage: Story = {
  args: { topic: "LongTermStorage" },
}

export const Organization: Story = {
  args: { topic: "Organization" },
}

export const LabelsTags: Story = {
  args: { topic: "LabelsTags" },
}

export const Duplicates: Story = {
  args: { topic: "Duplicates" },
}

export const FrequentIssues: Story = {
  args: { topic: "FrequentIssues" },
}
