import type { Meta, StoryObj } from "@storybook/react-vite"

import { DialogTemplateReviewModal } from "../../src/components/organisms/dialog-template-review-modal"

const meta = {
  title: "Organisms/DialogTemplateReviewModal",
  component: DialogTemplateReviewModal,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1431-20397' } },
  args: {
    items: [
      {
        name: "Relatórios 2023_Final",
        itemsLabel: "Pasta · 12 itens",
        severity: "duplicado",
        suggestedPath: "Financeiro / 2023 / Relatórios",
        suggestedPathLabel: "Taxonomia Sugerida:",
        children: [{ name: "Q1_Report_v2.pdf", meta: "PDF · 2.4 MB" }],
      },
      {
        name: "Projetos_Antigos_Misc",
        itemsLabel: "Pasta · 45 itens",
        severity: "incongruente",
        suggestedPath: "Fotos / RAW",
      },
      {
        name: "Arquivos_2023",
        itemsLabel: "Pasta · 8 itens",
        severity: "ok",
        suggestedPath: "2023 / Jan / Fev / Mar",
      },
    ],
  },
} satisfies Meta<typeof DialogTemplateReviewModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
