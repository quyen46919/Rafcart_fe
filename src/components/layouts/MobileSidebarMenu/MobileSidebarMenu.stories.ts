import type { Meta, StoryObj } from '@storybook/vue3'

import MobileSidebarMenu from './MobileSidebarMenu.vue'

const meta: Meta<typeof MobileSidebarMenu> = {
  component: MobileSidebarMenu
}

export default meta
type Story = StoryObj<typeof MobileSidebarMenu>

export const Primary: Story = {
  render: (args: any) => ({
    components: { MobileSidebarMenu },
    setup() {
      return { args }
    },
    template: '<MobileSidebarMenu v-bind="args" />'
  }),
  args: {}
}
