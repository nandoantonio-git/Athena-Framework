import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { StorageStatus, type StorageScope } from "../../src/components/molecules/storage-status"

const meta = {
  title: "Molecules/StorageStatus",
  component: StorageStatus,
  parameters: {
    layout: "padded",
    design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-18354' },
  },
  argTypes: {
    variant: { control: "radio", options: ["sidebar", "expanded"] },
    scope: { control: "select", options: ["global", "quick-access", "long-term"] },
    percent: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  args: {
    variant: "expanded",
    scope: "global",
    usedAmount: "60GB",
    totalAmount: "100GB",
    percent: 60,
    freeLabel: "40GB Livre",
    fileTypeSegments: [
      { kind: "image", value: 20 },
      { kind: "document", value: 15 },
      { kind: "video", value: 15 },
      { kind: "other", value: 10 },
    ],
  },
} satisfies Meta<typeof StorageStatus>

export default meta
type Story = StoryObj<typeof meta>

export const Global: Story = {
  args: { scope: "global" },
}

export const QuickAccess: Story = {
  args: { scope: "quick-access", usedLabel: "20GB em uso", freeLabel: "40GB Livre" },
}

export const LongTerm: Story = {
  args: { scope: "long-term", usedLabel: "20GB em uso", freeLabel: "40GB Livre" },
}

export const Sidebar: Story = {
  args: { variant: "sidebar", usedAmount: "10 GB usados", percent: 25 },
}

/** Troca de escopo de verdade ao clicar nos chips (feedback real, Regra 8). */
export const Interactive: StoryObj = {
  render: function InteractiveStorageStatus() {
    const [scope, setScope] = React.useState<StorageScope>("global")
    return (
      <StorageStatus
        variant="expanded"
        scope={scope}
        onScopeChange={setScope}
        usedAmount="60GB"
        totalAmount="100GB"
        percent={60}
        usedLabel="20GB em uso"
        freeLabel="40GB Livre"
        fileTypeSegments={[
          { kind: "image", value: 20 },
          { kind: "document", value: 15 },
          { kind: "video", value: 15 },
          { kind: "other", value: 10 },
        ]}
      />
    )
  },
}
