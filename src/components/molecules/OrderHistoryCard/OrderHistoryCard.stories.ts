import type { Meta, StoryObj } from '@storybook/vue3'

import OrderHistoryCard from './OrderHistoryCard.vue'
import { OrderStatus } from '@/interfaces/order'

const meta: Meta<typeof OrderHistoryCard> = {
  component: OrderHistoryCard
}

export default meta
type Story = StoryObj<typeof OrderHistoryCard>

export const Primary: Story = {
  render: (args: any) => ({
    components: { OrderHistoryCard },
    setup() {
      return { args }
    },
    template: '<OrderHistoryCard v-bind="args" />'
  }),
  args: {
    orderId: '23E34RT3',
    url: '/details/tv',
    purchased: '01 March 2021',
    status: OrderStatus.CANCELLED,
    variants: [
      {
        color: 'gray',
        size: 'N/A',
        price: 60.55,
        quantity: 1,
        imageUrl: 'https://www.easypages.url.tw/w3layouts020/assets/images/tv.png'
      },
      {
        color: 'black',
        price: 55.55,
        size: 'N/A',
        quantity: 3,
        imageUrl: 'https://www.easypages.url.tw/w3layouts020/assets/images/tv.png'
      }
    ]
  }
}
