import type { Meta, StoryObj } from '@storybook/vue3'
import product from '@/faker/productDetail/product'
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
    tag: 'HOT',
    productThumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/product1.jpg',
    productName: 'MADELINE sofa',
    productDes: 'Fabric Sofa Bed',
    productPrice: 120,
    productRate: 5,
    productReview: 150,
    isWishlist: false,
    urlDetail: '#',
    onAddToCart: () => alert('add to cart'),
    onViewDetail: () => alert('view detail'),
    onWishlist: () => alert('handle wishlist')
  }
}
