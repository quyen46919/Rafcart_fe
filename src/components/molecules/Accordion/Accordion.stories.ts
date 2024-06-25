import type { Meta, StoryObj } from '@storybook/vue3'

import Accordion from './Accordion.vue'

const meta: Meta<typeof Accordion> = {
  component: Accordion
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Primary: Story = {
  render: (args: any) => ({
    components: { Accordion },
    setup() {
      return { args }
    },
  
    template: `<Accordion v-bind="args"/>`
  }),
  args: {
    data: [
      {
        title: 'How will my parcel be deliverd?',
        name: '1',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        title: 'How will my parcel be deliverd?',
        name: '2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        title: 'How will my parcel be deliverd?',
        name: '3',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
    ],
    activeNames: ['1']
  },

}
