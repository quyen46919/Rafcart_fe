import type { Meta, StoryObj } from '@storybook/vue3'
import deliveryVan from '@/assets/images/icons/delivery-van.svg'
import ServiceCard from './ServiceCard.vue'

const meta: Meta<typeof ServiceCard> = {
  component: ServiceCard
}

export default meta
type Story = StoryObj<typeof ServiceCard>

export const Primary: Story = {
  render: (args: any) => ({
    components: { ServiceCard },
    setup() {
      return { args }
    },
    template: '<ServiceCard v-bind="args" />'
  }),
  args: {
    image: deliveryVan,
    title: 'Free Shipping',
    description: 'Order over $200'
  }
}
