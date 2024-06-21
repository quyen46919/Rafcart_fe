import type { Meta, StoryObj } from '@storybook/vue3'

import CounterButtonGroup from './CounterButtonGroup.vue'

const meta: Meta<typeof CounterButtonGroup> = {
  component: CounterButtonGroup,
  argTypes: {
    value: { control: { type: 'number' } },
    minValue: { control: { type: 'number' } },
    maxValue: { control: { type: 'number' } },
    isDisabled: { control: { type: 'boolean' } }
  }
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
  args: {
    value: 0,
    minValue: 0,
    maxValue: 50,
    isDisabled: false
  }
}
