import type { Meta, StoryObj } from '@storybook/vue3'

import TrendingProductList from './TrendingProductList.vue'

const meta: Meta<typeof TrendingProductList> = {
  component: TrendingProductList
}

export default meta
type Story = StoryObj<typeof TrendingProductList>

export const Primary: Story = {
  render: (args: any) => ({
    components: { TrendingProductList },
    setup() {
      return { args }
    },
    template: `<TrendingProductList v-bind="args" />`
  }),
  args: {
    data: [
      {
        title: 'LATEST',
        url: '/product/latest',
        data: [
          {
            thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/prod-1.png',
            name: 'Adidas Trefoil Hoodie',
            price: 55.45,
            discount: 10,
            rating: 4,
            reviews: '(150)',
            url: '/adidas-trefoil-hoodie'
          },
          {
            thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/prod-6.png',
            name: 'REG BROADCLOTH',
            price: 55.45,
            discount: 10,
            rating: 4,
            reviews: '(150)',
            url: '/adidas-trefoil-hoodie'
          },
          {
            thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/prod-4.png',
            name: 'Blazer Tenia - Lana-Beige',
            price: 55.45,
            discount: 10,
            rating: 4,
            reviews: '(150)',
            url: '/adidas-trefoil-hoodie'
          },
          {
            thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/prod-1.png',
            name: 'Adidas Trefoil Hoodie',
            price: 55.45,
            discount: 10,
            rating: 4,
            reviews: '(150)',
            url: '/adidas-trefoil-hoodie'
          }
        ]
      },
      {
        title: 'BEST SELLING',
        url: '/product/best-selling',
        data: [
          {
            thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/prod-3.png',
            name: 'Jump-Rings Connectors',
            price: 55.45,
            discount: 10,
            rating: 4,
            reviews: '(150)',
            url: '/adidas-trefoil-hoodie'
          },
          {
            thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/prod-2.png',
            name: 'SWAROVSKI Fine Bracelet',
            price: 55.45,
            discount: 10,
            rating: 4,
            reviews: '(150)',
            url: '/adidas-trefoil-hoodie'
          },
          {
            thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/prod-5.png',
            name: 'Hilfiger Tommy Hilfiger',
            price: 55.45,
            discount: 10,
            rating: 4,
            reviews: '(150)',
            url: '/adidas-trefoil-hoodie'
          },
          {
            thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/prod-1.png',
            name: 'Adidas Trefoil Hoodie',
            price: 55.45,
            discount: 10,
            rating: 4,
            reviews: '(150)',
            url: '/adidas-trefoil-hoodie'
          }
        ]
      },
      {
        title: 'TOP RATED',
        url: '/product/top-rated',
        data: [
          {
            thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/shirt-2.png',
            name: 'Adidas Trefoil Hoodie',
            price: 55.45,
            discount: 10,
            rating: 4,
            reviews: '(150)',
            url: '/adidas-trefoil-hoodie'
          },
          {
            thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/prod-8.png',
            name: 'REG BROADCLOTH',
            price: 55.45,
            discount: 10,
            rating: 4,
            reviews: '(150)',
            url: '/adidas-trefoil-hoodie'
          },
          {
            thumbnail: 'https://www.easypages.url.tw/w3layouts020/assets/images/prod-7.png',
            name: 'Blazer Tenia - Lana-Beige',
            price: 55.45,
            discount: 10,
            rating: 4,
            reviews: '(150)',
            url: '/adidas-trefoil-hoodie'
          }
        ]
      }
    ]
  }
}
