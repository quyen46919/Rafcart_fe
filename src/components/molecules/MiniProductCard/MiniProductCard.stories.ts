import type { Meta, StoryObj } from '@storybook/vue3'

import MiniProductCard from './MiniProductCard.vue'

const meta: Meta<typeof MiniProductCard> = {
  component: MiniProductCard,
  tags: ['autodocs'],
  argTypes: {
    discount: { control: 'number', min: 1, max: 100 }
  }
}

export default meta
type Story = StoryObj<typeof MiniProductCard>

export const Primary: Story = {
  render: (args: any) => ({
    components: { MiniProductCard },
    setup() {
      return { args }
    },
    template: `<MiniProductCard v-bind="args" />`
  }),
  args: {
    thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/prod-1.png',
    name: 'Adidas Trefoil Hoodie',
    price: 55.45,
    discount: 10,
    rating: 4,
    reviews: '(150)',
    url: '/adidas-trefoil-hoodie'
  }
}
