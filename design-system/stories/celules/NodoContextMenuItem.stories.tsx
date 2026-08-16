import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { NodoContextMenuItem } from "../../src/components/celules/nodo-context-menu-item"

const meta = {
  title: "Celules/NodoContextMenuItem",
  component: NodoContextMenuItem,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-20528' },
  },
  argTypes: {
    kind: { control: "select", options: ["attribute", "condition", "value", "date", "interval"] },
    hasChevron: { control: "boolean" },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Atributo",
    hasChevron: true,
    error: false,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--neutral-surface-background,#f3f3f3)] p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NodoContextMenuItem>

export default meta
type Story = StoryObj<typeof meta>

export const Placeholder: Story = {
  render: (args) => {
    function Controlled() {
      const [expanded, setExpanded] = useState(false)
      const [value, setValue] = useState<string | undefined>(undefined)
      return (
        <NodoContextMenuItem
          {...args}
          options={["Tamanho", "Data", "Tipo"]}
          expanded={expanded}
          onExpandedChange={setExpanded}
          value={value}
          onValueChange={(v) => {
            setValue(v)
            setExpanded(false)
          }}
        />
      )
    }
    return <Controlled />
  },
}

export const Filled: Story = {
  args: { value: "Tamanho" },
}

export const StaticValue: Story = {
  args: { label: "Valor...", hasChevron: false, value: "1.0 GB" },
}

export const Error: Story = {
  args: { error: true },
}

export const Expanded: Story = {
  render: (args) => {
    function Controlled() {
      const [expanded, setExpanded] = useState(true)
      const [value, setValue] = useState<string | undefined>(undefined)
      return (
        <NodoContextMenuItem
          {...args}
          options={["Tamanho", "Data", "Tipo"]}
          expanded={expanded}
          onExpandedChange={setExpanded}
          value={value}
          onValueChange={(v) => {
            setValue(v)
            setExpanded(false)
          }}
        />
      )
    }
    return <Controlled />
  },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-[116px_136px_92px_116px_136px_92px] gap-x-6 gap-y-3">
      <NodoContextMenuItem label="Atributo" kind="attribute" />
      <NodoContextMenuItem label="Atributo" kind="attribute" value="Atributo" />
      <NodoContextMenuItem label="Atributo" kind="attribute" error />
      <NodoContextMenuItem label="Operação" kind="condition" />
      <NodoContextMenuItem label="Operação" kind="condition" error />
      <NodoContextMenuItem label="Valor..." kind="value" hasChevron={false} error />

      <NodoContextMenuItem
        label="Atributo"
        kind="attribute"
        expanded
        options={["Tamanho", "Data", "Tipo"]}
      />
      <NodoContextMenuItem
        label="Operação"
        kind="condition"
        expanded
        options={["> Maior", "< Menor", ">= Maior igual", "<= Menor igual", "=Igual", "!=Diferente"]}
      />
      <NodoContextMenuItem label="Data" kind="date" hasChevron={false} value="Data" />
      <NodoContextMenuItem label="Valor..." kind="value" hasChevron={false} value="Valor..." />

      <NodoContextMenuItem
        label="Atributo"
        kind="attribute"
        expanded
        selectedOption="Tamanho"
        options={["Tamanho", "Data", "Tipo"]}
      />
      <NodoContextMenuItem
        label="Intervalo"
        kind="interval"
        expanded
        options={["Durante", "Antes", "Depois"]}
      />

      <NodoContextMenuItem
        label="Atributo"
        kind="attribute"
        expanded
        selectedOption="Data"
        options={["Tamanho", "Data", "Tipo"]}
      />

      <NodoContextMenuItem
        label="Atributo"
        kind="attribute"
        expanded
        selectedOption="Tipo"
        options={["Tamanho", "Data", "Tipo"]}
      />

      <div className="col-span-6 mt-5 flex gap-11">
        <NodoContextMenuItem label="Atributo" kind="attribute" value="Atributo" />
        <NodoContextMenuItem label="Operação" kind="condition" value="Operação" />
        <NodoContextMenuItem label="Valor" kind="value" hasChevron={false} value="Valor" />
      </div>
    </div>
  ),
}
