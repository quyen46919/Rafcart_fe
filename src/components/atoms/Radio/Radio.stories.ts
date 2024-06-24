import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'

import Radio from './Radio.vue'

const meta: Meta<typeof Radio> = {
  component: Radio
}

export default meta
type Story = StoryObj<typeof Radio>


export const Primary: Story = {
  render: (args: any) => ({
    components: { Radio },
    setup() {
      return { args }
    },
    template: `
      <Radio v-bind="args">
      </Radio>
    `
  }),
  args: {
    label: "Color",
    asterisk: true,
    variant: "rounded",
    valueList: [
      {
        label: "XS",
        value: "xs"
      },
      {
        label: "S",
        value: "s"
      },
      {
        label: "M",
        value: "m"
      },
      {
        label: "L",
        value: "l"
      },
      {
        label: "XL",
        value: "xl"
      },
    ],
    onclick: () => {
      alert('Say Hi')
    }
  }
}
