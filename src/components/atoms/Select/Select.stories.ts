import type { Meta, StoryObj } from '@storybook/vue3'

import Select from './Select.vue'

const meta: Meta<typeof Select> = {
  component: Select
}

export default meta
type Story = StoryObj<typeof Select>

export const Primary: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args }
    },
    template: '<Select v-bind="args" />'
  }),
  args: {
    label: 'Select A Reason',
    asterisk: true,
    placeholder: 'Select One Option...',
    valueList: [
      { label: 'Deactive', value: 'Deactive' },
      { label: 'Not As Adverstised', value: 'Not As Adverstised' },
      { label: 'Wrong/Fake Item', value: 'wrong/fakeitem' },
      { label: 'Missing accessories', value: 'missing' },
      { label: 'Wrong Size', value: 'wrongsize' },
      { label: 'Damaged', value: 'damaged' }
    ],
    value: { label: '', value: '' },
    error: true,
    selectStyle: 'hover:text-primary',
    iconStyle: 'group-hover:text-primary',
    optionItemStyle: 'hover:text-primary',
    helperText: 'Please select an option',
    isDisabled: false
  }
}
