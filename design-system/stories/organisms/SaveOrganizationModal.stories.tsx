import type { Meta, StoryObj } from "@storybook/react-vite"

import { SaveOrganizationModal } from "../../src/components/organisms/save-organization-modal"

const meta = {
  title: "Organisms/SaveOrganizationModal",
  component: SaveOrganizationModal,
  parameters: { layout: "centered", design: { type: 'figma', url: 'https://www.figma.com/design/oFp2TLeCG4GJeCOFVhBvjg/KanDrive?node-id=1421-18576' } },
  args: {
    selected: "projeto",
  },
} satisfies Meta<typeof SaveOrganizationModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoneSelected: Story = {
  args: { selected: undefined },
}
