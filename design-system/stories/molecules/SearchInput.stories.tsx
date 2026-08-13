import type { Meta, StoryObj } from "@storybook/react-vite"

import { SearchInput } from "../../src/components/molecules/search-input"

const meta = {
  title: "Molecules/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-17845' },
  },
  argTypes: {
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
    placeholder: { control: "text" },
  },
  args: {
    loading: false,
    disabled: false,
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

/** Estado default com o placeholder aprovado (Regra 5). */
export const Default: Story = {}

/**
 * Hover e Focus (equivalente a Active para um input) são estados puramente
 * CSS (`:hover`/`:focus-visible`), testáveis interagindo diretamente com o
 * campo no Canvas do Storybook.
 */

export const Disabled: Story = {
  args: { disabled: true },
}

export const Loading: Story = {
  args: { loading: true },
}

/** Não confirmado no Figma (bloqueio de acesso) — implementado via `aria-invalid` por convenção. */
export const Error: Story = {
  args: { "aria-invalid": true },
}
