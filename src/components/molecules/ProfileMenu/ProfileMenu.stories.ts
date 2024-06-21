import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from '@/assets/images/avatar.png'
import ProfileMenu from './ProfileMenu.vue'

const meta: Meta<typeof ProfileMenu> = {
  component: ProfileMenu,
}

export default meta
type Story = StoryObj<typeof ProfileMenu>

export const Primary: Story = {
  render: (args: any) => ({
    components: { ProfileMenu },
    setup() {
      return { args }
    },
    template: '<ProfileMenu v-bind="args" />'
  }),
  args: {
    username: 'Tu',
    avatar: Avatar
  }
}
