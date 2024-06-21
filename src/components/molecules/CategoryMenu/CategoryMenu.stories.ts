import type { Meta, StoryObj } from '@storybook/vue3'
import product from '@/faker/productDetail/product'
import CategoryMenu from './CategoryMenu.vue'
import categories from '@/faker/home/categories'

const meta: Meta<typeof CategoryMenu> = {
  component: CategoryMenu
}

export default meta
type Story = StoryObj<typeof CategoryMenu>

export const Primary: Story = {
  render: (args: any) => ({
    components: { CategoryMenu },
    setup() {
      return { args }
    },
    template: '<CategoryMenu v-bind="args" />'
  }),
  args: {
    categories: [...categories]
  }
}
