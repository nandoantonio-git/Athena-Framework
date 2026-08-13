import type { Meta, StoryObj } from "@storybook/react-vite"

import { ButtonAdd } from "../../src/components/atoms/button-add"

const meta = {
  title: "Atoms/ButtonAdd",
  component: ButtonAdd,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-20509' },
  },
  argTypes: {
    disabled: { control: "boolean" },
  },
  args: {
    label: "Adicionar",
    disabled: false,
  },
} satisfies Meta<typeof ButtonAdd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllStates: Story = {
  args: { label: "Label" },
  render: (args) => (
    <div className="flex flex-col gap-2 rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-5">
      {(["idle", "hover", "clicked", "disabled"] as const).map((state) => (
        <ButtonAdd key={state} {...args} state={state} />
      ))}
    </div>
  ),
}

export const AdicionarArquivos: Story = {
  args: { label: "Adicionar arquivos" },
}

export const AdicionarRegra: Story = {
  args: { label: "Adicionar Regra", className: "w-full" },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
}

export const Disabled: Story = {
  args: { disabled: true },
}
