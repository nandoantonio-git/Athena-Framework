import type { Meta, StoryObj } from "@storybook/react-vite"

import { FreeModeListItem } from "../../src/components/celules/free-mode-list-item"

const meta = {
  title: "Celules/FreeModeListItem",
  component: FreeModeListItem,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-20757' },
  },
  argTypes: {
    operation: {
      control: "select",
      options: ["juncao", "subtracao", "intersseccao", "exclusao", "filtro-tamanho", "filtro-formato", "filtro-data"],
    },
    selected: { control: "boolean" },
    state: { control: "select", options: ["idle", "hover", "clicked"] },
  },
  args: { operation: "juncao" },
  decorators: [
    (Story) => (
      <div className="w-[342px] rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-2">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FreeModeListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Idle: Story = {}

export const Selected: Story = { args: { selected: true } }

export const Hover: Story = { args: { state: "hover" } }

export const AllOperations: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      {(["idle", "hover", "clicked"] as const).flatMap((state) =>
        ([
          "juncao",
          "subtracao",
          "intersseccao",
          "exclusao",
          "filtro-tamanho",
          "filtro-formato",
          "filtro-data",
        ] as const).map((operation) => <FreeModeListItem key={`${state}-${operation}`} operation={operation} state={state} />)
      )}
    </div>
  ),
}
