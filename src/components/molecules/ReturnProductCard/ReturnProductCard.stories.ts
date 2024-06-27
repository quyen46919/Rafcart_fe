import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'

import ReturnProductCard from './ReturnProductCard.vue'

const meta: Meta<typeof ReturnProductCard> = {
  component: ReturnProductCard
}

export default meta
type Story = StoryObj<typeof ReturnProductCard>

export const Primary: Story = {
  render: (args: any) => ({
    components: { ReturnProductCard },
    setup() {
      return { args }
    },
    template: `
      <ReturnProductCard v-bind="args">
      </ReturnProductCard>
    `
  }),
  args: {
    returnProductCards: [
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8z_X4qYHV2g9zFSrOqOH-JBJEkv_HnlRC_A&s',
        orderName: 'Herschel Leather Duffle Bag',
        orderNumber: '798W4E574',
        price: 55,
        status: 'successful'
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8z_X4qYHV2g9zFSrOqOH-JBJEkv_HnlRC_A&s',
        orderName: 'Herschel Leather Duffle Bag',
        orderNumber: '798W4E574',
        price: 662,
        status: 'successful'
      }
    ],
    onView: () => {
      console.log('click')
    }
  }
}
