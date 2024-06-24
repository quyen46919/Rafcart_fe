import { Meta, StoryObj } from '@storybook/vue3'
import SwiperContainer from './SwiperContainer.vue'
import banner1 from '@/assets/images/banner-bg.jpg' // Adjust the path as necessary
import banner2 from '@/assets/images/banner-bg.jpg' // Adjust the path as necessary

const meta: Meta<typeof SwiperContainer> = {
  component: SwiperContainer
} as Meta<typeof SwiperContainer>

export default meta

type Story = StoryObj<typeof SwiperContainer>

export const Default: Story = {
  render: (args: any) => ({
    components: { SwiperContainer },
    setup() {
      return { args }
    },
    template: '<SwiperContainer v-bind="args" />'
  }),
  // truyền thử 12 slide nhưng giới hạn là 10
  args: {
    slides: [
      {
        banner: '/src/assets/images/banner-bg.jpg',
        title: '1 Best Collection For Home Decoration ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa assumenda aliquid inventore nihil laboriosam odio '
      },
      {
        banner: '/src/assets/images/banner-bg.jpg',
        title: '2 Another Collection For Home',
        text: 'Another example text for the first part. More text for the second part.'
      },
      {
        banner: '/src/assets/images/banner-bg.jpg',
        title: '3 Another Collection For Home',
        text: 'Another example text for the first part. More text for the second part.'
      },
      {
        banner: '/src/assets/images/banner-bg.jpg',
        title: '4 Another Collection For Home',
        text: 'Another example text for the first part. More text for the second part.'
      },
      {
        banner: '/src/assets/images/banner-bg.jpg',
        title: '5 Another Collection For Home',
        text: 'Another example text for the first part. More text for the second part.'
      },
      {
        banner: '/src/assets/images/banner-bg.jpg',
        title: '6 Another Collection For Home',
        text: 'Another example text for the first part. More text for the second part.'
      },
      {
        banner: '/src/assets/images/banner-bg.jpg',
        title: '7 Another Collection For Home',
        text: 'Another example text for the first part. More text for the second part.'
      },
      {
        banner: '/src/assets/images/banner-bg.jpg',
        title: '8 Another Collection For Home',
        text: 'Another example text for the first part. More text for the second part.'
      },
      {
        banner: '/src/assets/images/banner-bg.jpg',
        title: '9 Another Collection For Home',
        text: 'Another example text for the first part. More text for the second part.'
      },
      {
        banner: '/src/assets/images/banner-bg.jpg',
        title: '10 Another Collection For Home',
        text: 'Another example text for the first part. More text for the second part.'
      },
      {
        banner: '/src/assets/images/banner-bg.jpg',
        title: '11 Another Collection For Home',
        text: 'Another example text for the first part. More text for the second part.'
      },
      {
        banner: '/src/assets/images/banner-bg.jpg',
        title: '12 Another Collection For Home',
        text: 'Another example text for the first part. More text for the second part.'
      }
    ]
  }
}
