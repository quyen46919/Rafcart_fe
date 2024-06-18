import type { Meta, StoryObj } from '@storybook/vue3'
import RButton from './RButton.vue'

const meta: Meta<typeof RButton> = {
  component: RButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'contained', 'outlined', 'icon']
    },
    content: { control: 'text' },
    prefixIcon: { control: 'text' },
    suffixIcon: { control: 'text' },
    circle: { control: 'boolean' },
    onClick: { action: 'click' },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof RButton>

export const Contained: Story = {
  args: {
    variant: 'contained',
    content: 'Add to Cart',
    prefixIcon: 'fas fa-shopping-cart'
  }
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    content: 'Wishlist',
    prefixIcon: 'fas fa-heart'
  }
}

export const Text: Story = {
  args: {
    variant: 'text',
    content: 'Facebook'
  }
}

export const Icon: Story = {
  args: {
    variant: 'icon',
    prefixIcon: 'fa-brands fa-facebook-f'
  }
}

export const Circle: Story = {
  args: {
    variant: 'outlined',
    prefixIcon: 'fas fa-th',
    content: 'Setting',
    circle: true
  }
}

export const Loading: Story = {
  args: {
    variant: 'contained',
    content: 'Loading',
    isLoading: true
  }
}
