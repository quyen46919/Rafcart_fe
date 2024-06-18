import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'

import Radio from './Radio.vue'

const meta: Meta<typeof Radio> = {
  component: Radio
}

export default meta
type Story = StoryObj<typeof Radio>

// const PrefixIcon = (props: { class: string }) => h('i', { class: props.class }, [])

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
    asterisk: true,
    sizeList: [
      {
        label: "XS",
        value: "xs",
        variant: "rounded",
      },
      {
        label: "S",
        value: "s",
        variant: "rounded",
      },
      {
        label: "M",
        value: "m",
        variant: "rounded",
      },
      {
        label: "L",
        value: "l",
        variant: "rounded",
      },
      {
        label: "XL",
        value: "xl",
        variant: "rounded",
      },
    ],
    colorList: [
      {
        label: "red",
        value: "black",
        variant: "color",
      },
      {
        label: "white",
        value: "#FF0000",
        variant: "color",
      },
      {
        label: "black",
        value: "white",
        variant: "color",
      },
    ],
  }
}
