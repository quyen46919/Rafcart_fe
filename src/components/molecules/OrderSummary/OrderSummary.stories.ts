import type { Meta, StoryObj } from '@storybook/vue3'

import OrderSummary from '@/components/molecules/OrderSummary/OrderSummary.vue'
enum Size {
  S = 'Small',
  MD = 'Medium',
  LG = 'Large',
  XL = 'Extra Large'
}
const meta: Meta<typeof OrderSummary> = {
  component: OrderSummary
}

export default meta
type Story = StoryObj<typeof OrderSummary>

export const Primary: Story = {
  render: (args: any) => ({
    components: { OrderSummary },

    setup() {
      return { args }
    },
    template: '<OrderSummary v-bind="args" />'
  }),
  args: {
    products: [
      {
        name: 'Beigh Knitted Shoes',
        price: 84,
        options: {
          size: Size.MD
        },
        target_quantity: 1
      },
      {
        name: 'Beigh Knitted Shoes',
        price: 84,
        options: {
          size: Size.LG,
          color: 'Red'
        },
        target_quantity: 1
      },
      {
        name: 'Beigh Knitted Shoes',
        price: 84,
        options: {
          color: 'Blue'
        },
        target_quantity: 2
      }
    ],
    shipping_fee: 0
  }
}
