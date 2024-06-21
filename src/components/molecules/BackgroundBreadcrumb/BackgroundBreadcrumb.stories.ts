import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'

import BackgroundBreadcrumb from './BackgroundBreadcrumb.vue'
import BreadcrumbBg from '@/assets/images/breadcrumb-bg.jpg'

const meta: Meta<typeof BackgroundBreadcrumb> = {
  component: BackgroundBreadcrumb
}

export default meta
type Story = StoryObj<typeof BackgroundBreadcrumb>

const PrefixIcon = (props: { class: string }) => h('i', { class: props.class }, [])

export const Primary: Story = {
  render: (args: any) => ({
    components: { BackgroundBreadcrumb, PrefixIcon },
    setup() {
      return { args }
    },
    template: `<background-breadcrumb v-bind="args" />`
  }),
  args: {
    title: 'About us',
    thumbnail: BreadcrumbBg,
    breadcrumbs: [
      {
        url: '/',
        label: 'Home',
        prefixIcon: h(PrefixIcon, { class: 'fas fa-home' })
      },
      {
        url: '/about-us',
        label: 'About us'
      }
    ]
  }
}
