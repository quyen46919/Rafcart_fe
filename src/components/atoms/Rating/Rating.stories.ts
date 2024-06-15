import type { Meta, StoryObj } from '@storybook/vue3'

import Rating from './Rating.vue'

const meta: Meta<typeof Rating> = {
  component: Rating
}

export default meta
type Story = StoryObj<typeof Rating>

export const Primary: Story = {
  render: (args: any) => ({
    components: { Rating },
    setup() {
      return { args }
    },
    template: '<Rating v-bind="args" />'
  }),
  args: {
    rating: 6,
    maxRating: 10
  }
}
