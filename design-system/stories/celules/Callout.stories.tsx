import type { Meta, StoryObj } from "@storybook/react-vite"

import { Callout } from "../../src/components/celules/callout"

const meta = {
  title: "Celules/Callout",
  component: Callout,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-20028' },
  },
  argTypes: {
    variant: { control: "radio", options: ["warning", "info"] },
  },
  args: {
    variant: "warning",
    children:
      "Excluir sua conta é permanente e não pode ser desfeito. Isso também remove os arquivos guardados no longo prazo — eles não poderão ser recuperados depois.",
  },
  decorators: [
    (Story) => (
      <div className="w-[824px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Callout>

export default meta
type Story = StoryObj<typeof meta>

export const Warning: Story = {}

export const Info: Story = {
  args: { variant: "info" },
}
