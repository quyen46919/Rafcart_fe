import { Meta, StoryObj } from '@storybook/vue3'
import RowProductCard from './RowProductCard.vue'
import productImage from '@/assets/images/products/product1.jpg'

const meta: Meta<typeof RowProductCard> = {
  component: RowProductCard,
  argTypes: {
    productImage: { control: 'text' },
    productName: { control: 'text' },
    price: { control: 'number' },
    discount: { control: 'number' },
    description: { control: 'text' },
    rating: { control: 'number' },
    reviewCount: { control: 'number' },
    onAddToCart: { action: 'click' }
  }
}

export default meta
type Story = StoryObj<typeof RowProductCard>

export const Default: Story = {
  render: (args) => ({
    components: { RowProductCard },
    setup() {
      return { args }
    },
    template: '<RowProductCard v-bind="args" />'
  }),
  args: {
    id: 1,
    productImage: productImage,
    productName: 'COWIN E7 Active',
    price: 45.0,
    discount: 10, // Example discount in percentage
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.',
    rating: 5,
    reviewCount: 150,
    onAddToCart: () => alert(`Add product to Cart `)
  }
}

export const WithLongDescription: Story = {
  render: (args) => ({
    components: { RowProductCard },
    setup() {
      return { args }
    },
    template: '<RowProductCard v-bind="args" />'
  }),
  args: {
    id: 2,
    productImage: productImage,
    productName: 'COWIN E7 Active COWIN E7 Active COWIN E7 Active COWIN E7 Active COWIN E7 Active COWIN E7 Active COWIN E7 Active',
    price: 45.0,
    discount: 10, // Example discount in percentage
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus blandit massa enim. Donec id elit non mi porta gravida at eget metus.',
    rating: 4,
    reviewCount: 200,
    onAddToCart: () => alert(`Add product to Cart `)
  }
}
