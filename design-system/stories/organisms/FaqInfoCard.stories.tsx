import type { Meta, StoryObj } from "@storybook/react-vite"

import { FaqInfoCard } from "../../src/components/organisms/faq-info-card"

const meta = {
  title: "Organisms/Faq/InfoCard",
  component: FaqInfoCard,
  parameters: {
    layout: "padded",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1454-24788' },
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["faq", "card-with-callout"],
    },
  },
  args: {
    variant: "faq",
  },
} satisfies Meta<typeof FaqInfoCard>

export default meta
type Story = StoryObj<typeof meta>

export const Faq: Story = {
  args: { variant: "faq" },
}

export const CardWithCallout: Story = {
  args: { variant: "card-with-callout" },
}
