import type { Meta, StoryObj } from '@storybook/vue3'

import MobileMenu from './MobileMenu.vue'

const meta: Meta<typeof MobileMenu> = {
  component: MobileMenu
}

export default meta
type Story = StoryObj<typeof MobileMenu>

export const Primary: Story = {
  render: (args: any) => ({
    components: { MobileMenu },
    setup() {
      return { args }
    },
    template: '<MobileMenu v-bind="args" />'
  }),
  args: {}
}
