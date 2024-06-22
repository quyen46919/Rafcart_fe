import { Meta, StoryObj } from '@storybook/vue3'
import PriceViewer from './PriceViewer.vue'

const meta: Meta<typeof PriceViewer> = {
  component: PriceViewer,
  title: 'Components/PriceViewer'
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
    price: 5000,
    discount: 0,
    isTooltip: false
  }
}
