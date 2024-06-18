import type { Meta, StoryObj } from '@storybook/vue3'

import PersonCard from './PersonCard.vue'

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
  args: {}
}
