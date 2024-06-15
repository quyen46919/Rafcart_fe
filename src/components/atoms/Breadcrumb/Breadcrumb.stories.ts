import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'

import Breadcrumb from './Breadcrumb.vue'

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

const PrefixIcon = (props: { class: string }) => h('i', { class: props.class }, [])

export const Primary: Story = {
  render: (args: any) => ({
    components: { Breadcrumb, PrefixIcon },
    setup() {
      return { args }
    },
    template: `
      <Breadcrumb v-bind="args">
      </Breadcrumb>
    `
  }),
  args: {
    breadcrumbs: [
      {
        url: '/',
        label: 'Homepage',
        prefixIcon: h(PrefixIcon, { class: 'fas fa-home mr-2' })
      },
      {
        url: '/products',
        label: 'Products'
      },
      {
        url: '/products/123',
        label: 'ABC XYZ name'
      }
    ]
  }
}
