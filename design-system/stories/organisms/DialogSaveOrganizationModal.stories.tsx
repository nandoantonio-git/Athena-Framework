import type { Meta, StoryObj } from "@storybook/react-vite"

import { DialogSaveOrganizationModal } from "../../src/components/organisms/dialog-save-organization-modal"

const meta = {
  title: "Organisms/DialogSaveOrganizationModal",
  component: DialogSaveOrganizationModal,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-18576' } },
  args: {
    selected: "projeto",
  },
} satisfies Meta<typeof DialogSaveOrganizationModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoneSelected: Story = {
  args: { selected: undefined },
}
