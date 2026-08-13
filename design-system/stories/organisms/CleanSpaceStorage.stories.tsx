import type { Meta, StoryObj } from "@storybook/react-vite"

import { CleanSpaceStorage } from "../../src/components/organisms/clean-space-storage"

const meta = {
  title: "Organisms/CleanSpaceStorage",
  component: CleanSpaceStorage,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1439-16908' } },
  args: {
    largeFiles: [
      { name: "huge-backup.zip", meta: "ZIP · 476.84 MB · Aug 5, 2026", tier: "current" },
      { name: "medium-report.pdf", meta: "PDF · 9.54 MB · Aug 5, 2026", tier: "current" },
      { name: "small-note.txt", meta: "TXT · 1 KB · Aug 5, 2026", tier: "long term" },
    ],
    duplicateGroups: [
      { name: "Contrato-Fornecedor (3 versões)", copiesLabel: "3 cópias · 4.58 MB" },
      { name: "Backup-Financeiro (2 versões)", copiesLabel: "2 cópias · 2.98 GB" },
    ],
  },
} satisfies Meta<typeof CleanSpaceStorage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
