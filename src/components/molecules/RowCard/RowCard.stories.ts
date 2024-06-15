import type { Meta, StoryObj } from '@storybook/vue3'
import product from '@/faker/productDetail/product'
import RowCard from './RowCard.vue'

const meta: Meta<typeof RowCard> = {
  component: RowCard
}

export default meta
type Story = StoryObj<typeof RowCard>

export const Primary: Story = {
  render: (args: any) => ({
    components: { RowCard },
    setup() {
      return { args }
    },
    template: '<RowCard v-bind="args" />'
  }),
  args: {
    ...product
  }
}
