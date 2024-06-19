import type { Meta, StoryObj } from '@storybook/vue3'

import Rating from './Rating.vue'

const meta: Meta<typeof Rating> = {
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['text', 'number'] }
  }
}

export default meta
type Story = StoryObj<typeof Rating>

export const HiddenRating: Story = {
  render: (args: any) => ({
    components: { Rating },
    setup() {
      return { args }
    },
    template: '<Rating v-bind="args" />'
  }),
  args: {
    rating: 8,
    maxRating: 10,
    showRating: false,
    readOnly: true
  }
}

export const ReviewsRating: Story = {
  render: (args: any) => ({
    components: { Rating },
    setup() {
      return { args }
    },
    template: '<Rating v-bind="args" />'
  }),
  args: {
    rating: 7,
    maxRating: 10,
    showRating: true,
    note: '50 Reviews'
  }
}

export const StatusRating: Story = {
  render: (args: any) => ({
    components: { Rating },
    setup() {
      return { args }
    },
    template: '<Rating v-bind="args" />'
  }),
  args: {
    rating: 6,
    maxRating: 10,
    showRating: true,
    status: 'text'
  }
}
