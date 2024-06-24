import type { Meta, StoryObj } from '@storybook/vue3'

import Footer from './Footer.vue'

const meta: Meta<typeof Footer> = {
  component: Footer
}

export default meta
type Story = StoryObj<typeof Footer>

export const Primary: Story = {
  render: (args: any) => ({
    components: { Footer },
    setup() {
      return { args }
    },
    template: '<Footer v-bind="args" />'
  }),
  args: {}
}
