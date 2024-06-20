import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'

import OrderProgressTracking from './OrderProgressTracking.vue'

const meta: Meta<typeof OrderProgressTracking> = {
  component: OrderProgressTracking
}

export default meta

type Story = StoryObj<typeof OrderProgressTracking>

const StatusIcon = (props: { class: string }) => h('i', { class: props.class }, [])

export const Primary: Story = {
  render: (args: any) => ({
    components: { OrderProgressTracking, StatusIcon },
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
        statusIcon: h(StatusIcon, { class: 'fa-solid fa-check' }),
      },
      {
        label: "Processing",
        timestamp: "30 january, 2021, 8:37 AM",
        status: "completed",
        statusIcon: h(StatusIcon, { class: 'fa-solid fa-check' }),
      },
      {
        label: "Shipping",
        timestamp: "30 january, 2021, 8:37 AM",
        status: "completed",
        statusIcon: h(StatusIcon, { class: 'fa-solid fa-check' }),
      },
      {
        label: "Delyvery",
        timestamp: "30 january, 2021, 8:37 AM",
        status: "pending",
        statusIcon: h(StatusIcon, { class: "fa-solid fa-ellipsis-vertical" }),
      }
    ],
  }
}
