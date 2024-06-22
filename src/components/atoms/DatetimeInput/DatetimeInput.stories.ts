import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'

import DatetimeInput from './DatetimeInput.vue'

const meta: Meta<typeof DatetimeInput> = {
  component: DatetimeInput
}

export default meta
type Story = StoryObj<typeof DatetimeInput>

const PrefixIcon = (props: { class: string }) => h('i', { class: props.class }, [])

export const Primary: Story = {
  render: (args: any) => ({
    components: { DatetimeInput, PrefixIcon },
    setup() {
      return { args }
    },
    template: `
      <DatetimeInput v-bind="args">
      </DatetimeInput>
    `
  }),
  args: { }
}
