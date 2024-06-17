import type { Meta, StoryObj } from '@storybook/vue3'

import CounterButtonGroup from './CounterButtonGroup.vue'

const meta: Meta<typeof CounterButtonGroup> = {
  component: CounterButtonGroup
}

export default meta
type Story = StoryObj<typeof CounterButtonGroup>

export const Primary: Story = {
  render: (args: any) => ({
    components: { CounterButtonGroup },
    setup() {
      return { args }
    },
    template: '<CounterButtonGroup v-bind="args" />'
  }),
  args: {}
}
