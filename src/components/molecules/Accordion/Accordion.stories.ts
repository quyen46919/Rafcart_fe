import type { Meta, StoryObj } from '@storybook/vue3'

import Accordion from './Accordion.vue'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Accordion>

export const PrimaryCollapse: Story = {
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
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: 'How will my parcel be deliverd?',
        name: '2',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: 'How will my parcel be deliverd?',
        name: '3',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    ],
    activeNames: ['1'],
    isAccordion: false
  }
}

export const AccordionCollapse: Story = {
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
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: 'Do I pay for delivery?',
        name: '2',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: 'Tracking my order',
        name: '3',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: "I haven't recived my order",
        name: '4',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    ],
    activeName: '2',
    isAccordion: true
  }
}

export const DisabledCollapse: Story = {
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
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: 'Do I pay for delivery?',
        name: '2',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: 'Tracking my order',
        name: '3',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: "I haven't recived my order",
        name: '4',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    ],
    activeName: '2',
    disabledNames: ['1', '2'],
    isAccordion: false
  }
}
