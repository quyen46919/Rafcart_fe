import { Meta, StoryObj } from '@storybook/vue3'
import PriceViewer from './PriceViewer.vue'

const meta: Meta<typeof PriceViewer> = {
  component: PriceViewer
}

export default meta
type Story = StoryObj<typeof PriceViewer>

export const Primary: Story = {
  render: (args: any) => ({
    components: { PriceViewer },
    setup() {
      return { args }
    },
    template: '<PriceViewer v-bind="args" />'
  }),
  tags: ['autodocs'],
  args: {
    price: 1200,
    discount: 15,
    showPercent: true
  }
}
