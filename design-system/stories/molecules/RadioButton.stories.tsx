import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { RadioButton, type RadioOption } from "../../src/components/molecules/radio-button"

const meta = {
  title: "Molecules/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1454-24721' },
  },
  argTypes: {
    option: {
      control: "radio",
      options: ["personal", "saved"],
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    option: "personal",
    checked: false,
  },
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const Personal: Story = {
  args: { option: "personal", checked: true },
}

export const Saved: Story = {
  args: { option: "saved", checked: false },
}

export const Disabled: Story = {
  args: { option: "personal", disabled: true },
}

/** Grupo controlado — só uma opção fica marcada por vez (feedback real no clique, Regra 8). */
export const Group: StoryObj = {
  render: function RadioGroup() {
    const [selected, setSelected] = React.useState<RadioOption>("personal")
    return (
      <div className="flex flex-col gap-2">
        <RadioButton option="personal" checked={selected === "personal"} onCheckedChange={setSelected} />
        <RadioButton option="saved" checked={selected === "saved"} onCheckedChange={setSelected} />
      </div>
    )
  },
}
