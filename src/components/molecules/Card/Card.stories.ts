import type { Meta, StoryObj } from '@storybook/vue3'
import product from '@/faker/productDetail/product'
import Card from './Card.vue'

const meta: Meta<typeof Card> = {
  component: Card
}

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {
  render: (args: any) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: '<Card v-bind="args" />'
  }),
  args: {
    ...product
  }
}
