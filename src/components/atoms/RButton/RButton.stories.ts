import type { Meta, StoryObj } from '@storybook/vue3';
import RButton from './RButton.vue';

const meta: Meta<typeof RButton> = {
  component: RButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'contained', 'outlined', 'icon'],
    },
    content: { control: 'text' },
    prefixIcon: { control: 'text' },
    suffixIcon: { control: 'text' },
    circle: { control: 'boolean' },
    onClick: { action: 'clicked' },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    color: { control: 'color' }, // Thêm thuộc tính color
  },
};

export default meta;
type Story = StoryObj<typeof RButton>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    content: 'Add to Cart',
    prefixIcon: 'fas fa-shopping-cart',
    onClick: () => { console.log('Add to Cart clicked') },
    color: '#007bff', // Màu tùy chỉnh
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    content: 'Wishlist',
    prefixIcon: 'fas fa-heart',
    onClick: () => { console.log('Wishlist clicked') },
    color: '#6c757d', // Màu tùy chỉnh
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    content: 'Facebook',
    onClick: () => { console.log('Facebook clicked') },
    color: '#4267B2', // Màu tùy chỉnh
  },
};

export const Icon: Story = {
  args: {
    variant: 'icon',
    prefixIcon: 'fa-brands fa-facebook-f',
    onClick: () => { console.log('Icon clicked') },
    color: '#4267B2', // Màu tùy chỉnh
  },
};

export const Circle: Story = {
  args: {
    variant: 'icon',
    prefixIcon: 'fas fa-th',
    circle: true,
    onClick: () => { console.log('Circle icon clicked') },
    color: '#ffc107', // Màu tùy chỉnh
  },
};

export const Loading: Story = {
  args: {
    variant: 'contained',
    content: 'Loading',
    isLoading: true,
    color: '#28a745', // Màu tùy chỉnh
  },
};
