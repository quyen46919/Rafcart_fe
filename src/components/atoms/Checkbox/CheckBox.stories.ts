import { Meta, StoryObj } from '@storybook/vue3'
import CheckBox from './CheckBox.vue'
import { h } from 'vue'

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  title: 'Components/CheckBox',
  argTypes: {
    label: {
      control: 'text'
    },
    checked: {
      control: 'boolean'
    },
    isDisabled: {
      control: 'boolean'
    },
    readonly: {
      control: 'boolean'
    }
  }
}
export default meta

type Story = StoryObj<typeof CheckBox>

export const Primary: Story = {
  render: (args: any) => ({
    components: { CheckBox },
    setup() {
      const handleOnClick = (event: MouseEvent) => {
        const target = event.target as HTMLInputElement
        console.log(target.value)
      }
      return { args, handleOnClick }
    },
    template: '<CheckBox v-bind="args" :onClick="handleOnClick"/> '
  }),
  tags: ['autodocs'],
  args: {
    checked: false,

    isDisabled: false,
    readonly: false,
    label: h('span', {}, [
      'I have read and agree to the ',
      h(
        'a',
        { href: 'https://storybook.js.org/docs/writing-docs', target: 'blank', class: 'custom-link text-red-500' },
        'terms & conditions'
      )
    ])
  }
}
