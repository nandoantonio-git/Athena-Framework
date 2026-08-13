import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Switch } from "../../src/components/atoms/switch"

const meta = {
  title: "Atoms/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1454-20959' },
  },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    checked: false,
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Off: Story = {
  args: { checked: false },
}

export const On: Story = {
  args: { checked: true },
}

export const Disabled: Story = {
  args: { checked: false, disabled: true },
}

/** Controlado — clique alterna `checked` de verdade (feedback real no press/release, Regra 8). */
export const Interactive: Story = {
  render: function InteractiveSwitch(args) {
    const [checked, setChecked] = React.useState(args.checked ?? false)
    return <Switch {...args} checked={checked} onCheckedChange={setChecked} />
  },
}
