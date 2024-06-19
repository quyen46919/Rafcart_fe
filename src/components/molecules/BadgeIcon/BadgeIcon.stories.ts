import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import BadgeIcon from './BadgeIcon.vue'

const meta: Meta<typeof BadgeIcon> = {
  component: BadgeIcon
}

export default meta
type Story = StoryObj<typeof BadgeIcon>
const Icon = (props: { class: string }) => h('i', { class: props.class }, [])
export const Primary: Story = {
  render: (args: any) => ({
    components: { BadgeIcon },
    setup() {
      return { args }
    },
    template: '<BadgeIcon v-bind="args" />'
  }),
  args: {
    icon: h(Icon, { class: 'far fa-heart w-[24px] h-[24px] ' }),
    label: 'Wish List',
    badge: 100,
    maxBadge: 99,
    isAnounce: true,
    url: '/',
    color: '#7ecf53'
  }
}
