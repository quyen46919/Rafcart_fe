import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'

import FlashSale from './FlashSale.vue'

const meta: Meta<typeof FlashSale> = {
  component: FlashSale
}

export default meta
type Story = StoryObj<typeof FlashSale>

export const Primary: Story = {
  render: (args: any) => ({
    components: { FlashSale },
    setup() {
      return { args }
    },
    template: `
      <FlashSale v-bind="args">
      </FlashSale>
    `
  }),
  args: {
    timer: 10,
    url: '#',
    onFinish: () => {
      alert('finish flashsale')
    }
  }
}
