import type { Meta, StoryObj } from '@storybook/vue3'
import PersonCard from './PersonCard.vue'
import Img from '@/assets/images/category/category-4.jpg'
import PlaceholderImg from '@/assets/images/placeholder/Portrait_Placeholder.png'
const meta: Meta<typeof PersonCard> = {
  component: PersonCard
}

export default meta
type Story = StoryObj<typeof PersonCard>

export const Primary: Story = {
  render: (args: any) => ({
    components: { PersonCard },
    setup() {
      return { args }
    },
    template: '<PersonCard v-bind="args" />'
  }),
  args: {
    img:Img,
    name: 'Nam',
    title: 'Manage Person',
    url: '/',
    placeholderAltImg: PlaceholderImg
  }
}
