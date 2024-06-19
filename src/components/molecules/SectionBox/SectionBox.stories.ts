import type { Meta, StoryObj } from '@storybook/vue3'

import SectionBox from '@/components/molecules/SectionBox/SectionBox.vue'

const meta: Meta<typeof SectionBox> = {
  component: SectionBox
}
export default meta
type Story = StoryObj<typeof SectionBox>

export const Primary: Story = {
  render: (args: any) => ({
    components: { SectionBox },
    setup() {
      return { args }
    },
    template: '<SectionBox v-bind="args" />'
  }),
  args: {
    section: 'your order'
  }
}
