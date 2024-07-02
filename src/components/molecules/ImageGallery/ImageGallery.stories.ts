import type { Meta, StoryObj } from '@storybook/vue3'

import ImageGallery from './ImageGallery.vue'

const meta: Meta<typeof ImageGallery> = {
  component: ImageGallery
}

export default meta
type Story = StoryObj<typeof ImageGallery>

export const Primary: Story = {
  render: (args: any) => ({
    components: { ImageGallery },
    setup() {
      return { args }
    },
    template: '<ImageGallery v-bind="args" />'
  }),
  args: {
    imageList: [
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'
    ]
  }
}
