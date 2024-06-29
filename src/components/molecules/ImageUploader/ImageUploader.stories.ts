import type { Meta, StoryObj } from '@storybook/vue3'

import ImageUploader from './ImageUploader.vue'

const meta: Meta<typeof ImageUploader> = {
  component: ImageUploader,
  argTypes: {
    onSubmit: { action: 'click' }
  }
}

export default meta
type Story = StoryObj<typeof ImageUploader>

export const Primary: Story = {
  render: (args: any) => ({
    components: { ImageUploader },
    setup() {
      return { args }
    },
    template: `
      <ImageUploader v-bind="args">
      </ImageUploader>
    `
  }),
  args: {
    onSubmit: () => alert(`submit success `)
  }
}
