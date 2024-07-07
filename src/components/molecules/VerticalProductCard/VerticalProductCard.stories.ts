import type { Meta, StoryObj } from '@storybook/vue3'
import VerticalProductCard from './VerticalProductCard.vue'

const meta: Meta<typeof VerticalProductCard> = {
  component: VerticalProductCard
}

export default meta
type Story = StoryObj<typeof VerticalProductCard>

export const Primary: Story = {
  render: (args: any) => ({
    components: { VerticalProductCard },
    setup() {
      return { args }
    },
    template: '<VerticalProductCard v-bind="args" />'
  }),
  args: {
    tag: 10,
    thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/product1.jpg',
    name: 'MADELINE sofa',
    description: 'Fabric Sofa Bed',
    price: 120,
    isWishlist: false,
    href: '#',
    comments: [
      {
        id: 1,
        parent_id: 1,
        comment: 'ADELINE sofaADELINE sofaADELINE sofaADELINE sofaADELINE sofaADELINE sofa',
        rating: 4,
        updated_at: 'tody'
      }
    ],
    onAddToCart: () => alert('add to cart'),
    onViewDetail: () => alert('view detail'),
    onWishlist: () => alert('handle wishlist')
  }
}
