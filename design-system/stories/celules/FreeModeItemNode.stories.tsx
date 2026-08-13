import type { Meta, StoryObj } from "@storybook/react-vite"

import { FreeModeItemNode } from "../../src/components/celules/free-mode-item-node"

const meta = {
  title: "Celules/FreeModeItemNode",
  component: FreeModeItemNode,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-20108' },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "juncao",
        "intersseccao",
        "exclusao",
        "subtracao",
        "filtro-size",
        "filtro-type",
        "filtro-date",
        "auto-archive",
        "resultado",
      ],
    },
    expanded: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FreeModeItemNode>

export default meta
type Story = StoryObj<typeof meta>

export const Juncao: Story = { args: { variant: "juncao" } }
export const Intersseccao: Story = { args: { variant: "intersseccao" } }
export const Exclusao: Story = { args: { variant: "exclusao" } }
export const Subtracao: Story = { args: { variant: "subtracao" } }
export const FiltroSize: Story = { args: { variant: "filtro-size" } }
export const FiltroType: Story = { args: { variant: "filtro-type" } }
export const FiltroDate: Story = { args: { variant: "filtro-date" } }
export const AutoArchive: Story = { args: { variant: "auto-archive" } }
export const ResultadoCollapsed: Story = { args: { variant: "resultado", expanded: false } }
export const ResultadoExpanded: Story = { args: { variant: "resultado", expanded: true } }
