import type { Meta, StoryObj } from '@storybook/vue3'
import WishlistProductCard from './WishlistProductCard.vue'

const meta: Meta<typeof WishlistProductCard> = {
  component: WishlistProductCard
}

export default meta
type Story = StoryObj<typeof WishlistProductCard>

export const Primary: Story = {
  render: (args: any) => ({
    components: { WishlistProductCard },
    setup() {
      return { args }
    },
    template: '<WishlistProductCard v-bind="args" />'
  }),
  args: {
    productThumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/bag.png',
    productName: 'CASUAL USB CHARGING LAPTOP BACKPACKS',
    productPrice: 45,
    isStock: true,
    urlDetail: '#',
    onDeleteToWishlist: () => alert(`Delete product `),
    onAddToCart: () => alert(`Add product to Cart `)
  }
}
