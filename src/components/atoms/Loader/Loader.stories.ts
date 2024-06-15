import type { Meta, StoryObj } from '@storybook/vue3'

import Loader from './Loader.vue'

const meta: Meta<typeof Loader> = {
  component: Loader
}

export default meta
type Story = StoryObj<typeof Loader>

export const Primary: Story = {
  render: (args: any) => ({
    components: { Loader },
    setup() {
      return { args }
    },
    template: '<Loader v-bind="args" />'
  }),
  args: {}
}
