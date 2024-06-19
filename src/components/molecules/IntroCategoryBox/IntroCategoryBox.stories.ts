import { Meta, StoryObj } from '@storybook/vue3';
import IntroCategoryBox from './IntroCategoryBox.vue';
import CategoryProps from '@/interfaces/category'
import Bedroom from '@/assets/images/category/category-1.jpg'
const meta: Meta<typeof IntroCategoryBox> = {
  component: IntroCategoryBox,
  argTypes: {
    id: { control: 'number' },
    name: { control: 'text' },
    thumbnail_url: { control: 'text' },
    slug: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof IntroCategoryBox>;

export const Primary: Story = {
  render: (args: CategoryProps) => ({
    components: { IntroCategoryBox },
    setup() {
      return { args };
    },
    template: '<IntroCategoryBox v-bind="args" />'
  }),
  args: {
    name: 'Bedroom',
    thumbnail_url: Bedroom,
    slug: 'bedroom'
  }
};
