import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'

import OrderProgressTracking from './OrderProgressTracking.vue'


const meta: Meta<typeof OrderProgressTracking> = {
  component: OrderProgressTracking
}

export default meta

type Story = StoryObj<typeof OrderProgressTracking>



export const Primary: Story = {
  render: (args: any) => ({
    components: { OrderProgressTracking },
    setup() {
      return { args }
    },
    template: `
      <OrderProgressTracking v-bind="args">
      </OrderProgressTracking>
    `
  }),
  args: {
    orderProgressTrackings: [
      {
        label: "Order placement",
        timestamp: "30 january, 2021, 8:37 AM",
        status: "completed",
      },
      {
        label: "Processing",
        timestamp: "30 january, 2021, 8:37 AM",
        status: "completed",
      },
      {
        label: "Shipping",
        timestamp: "30 january, 2021, 8:37 AM",
        status: "completed",
      },
      {
        label: "Delivery",
        timestamp: "30 january, 2021, 8:37 AM",
        status: "pending",
      }
    ],
  }
}
