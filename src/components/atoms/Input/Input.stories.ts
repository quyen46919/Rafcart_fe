import type { Meta, StoryObj } from '@storybook/vue3'
import { computed, h, reactive, ref } from 'vue'
import Input from './Input.vue'
import { fn } from '@storybook/test'

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    type: { control: 'select', options: ['text', 'number', 'password'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    asterisk: { control: 'boolean' },
    value: { control: 'text' },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
    suffixIcon: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isMultiline: { control: 'boolean' },
    rows: { control: 'number' },
    maxRow: { control: 'number' }
  }
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  render: (args: any) => ({
    components: { Input },
    setup() {
      return { args }
    },

    template: `<Input v-bind="args" />`
  }),
  tags: ['autodocs'],
  args: {
    label: 'Full Name',
    placeholder: 'Jone Doe',
    asterisk: true,
    type: 'text',
    value: '',
    error: false,
    helperText: '',
    ref: ref(null),
    isDisabled: false
  }
}

export const SuffixIcon: Story = {
  render: (args: any) => ({
    components: { Input },
    setup() {
      const inputValue = ref('')
      const showPassword = ref(false)

      const suffixIconCallback = () => (showPassword.value = !showPassword.value)

      const type = computed(() => (showPassword.value ? 'text' : 'password'))
      const suffixIcon = computed(() =>
        showPassword.value
          ? h('i', { class: 'fa-regular fa-eye', key: 'eye' })
          : h('i', { class: 'fa-regular fa-eye-slash', key: 'eye-slash' })
      )

      return { args, type, suffixIcon, suffixIconCallback, inputValue }
    },

    template: `<Input v-bind="args" :type="type" :suffixIcon="suffixIcon" :suffixIconCallback="suffixIconCallback" :ref="inputValue"/>`
  }),

  tags: ['autodocs'],
  args: {
    label: 'Current Password',
    placeholder: 'enter current password',
    asterisk: true,
    type: 'password',
    ref: ref(null)
  }
}

export const TextAria: Story = {
  render: (args: any) => ({
    components: { Input },
    setup() {
      return { args }
    },

    template: `<Input v-bind="args" />`
  }),
  tags: ['autodocs'],
  args: {
    label: 'Your message',
    asterisk: true,
    type: 'text',
    value: '',
    error: false,
    helperText: '',
    ref: ref(null),
    isMultiline: true,
    rows: 2
  }
}
