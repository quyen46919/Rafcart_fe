import { Meta, StoryObj } from '@storybook/vue3'
import RowProductCard from './RowProductCard.vue'
import thumbnail from '@/assets/images/products/product1.jpg'

const meta: Meta<typeof RowProductCard> = {
  component: RowProductCard,
  argTypes: {
    thumbnail: { control: 'text' },
    name: { control: 'text' },
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
  render: (args: any) => ({
    components: { RowProductCard },
    setup() {
      return { args }
    },
    template: '<RowProductCard v-bind="args" />'
  }),
  args: {
    id: 1,
    thumbnail: thumbnail,
    name: 'COWIN E7 Active',
    price: 45.0,
    discount: 10,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.',
    comments: [
      {
        id: 1,
        parent_id: null,
        comment: 'ADELINE sofaADELINE sofaADELINE sofaADELINE sofaADELINE sofaADELINE sofa',
        rating: 4,
        updated_at: 'tody'
      }
    ],
    onAddToCart: () => alert(`Add product to Cart `)
  }
}

export const WithLongDescription: Story = {
  render: (args: any) => ({
    components: { RowProductCard },
    setup() {
      return { args }
    },
    template: '<RowProductCard v-bind="args" />'
  }),
  args: {
    id: 2,
    thumbnail: thumbnail,
    name: 'COWIN E7 Active COWIN E7 Active COWIN E7 Active COWIN E7 Active COWIN E7 Active COWIN E7 Active COWIN E7 Active',
    price: 45.0,
    discount: 10,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus blandit massa enim. Donec id elit non mi porta gravida at eget metus.',
    comments: [
      {
        id: 1,
        parent_id: null,
        comment: 'ADELINE sofaADELINE sofaADELINE sofaADELINE sofaADELINE sofaADELINE sofa',
        rating: 4,
        updated_at: 'tody'
      }
    ],
    onAddToCart: () => alert(`Add product to Cart `)
  }
}
