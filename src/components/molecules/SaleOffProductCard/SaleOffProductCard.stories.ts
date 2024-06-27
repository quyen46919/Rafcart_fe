import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'

import SaleOffProductCard from './SaleOffProductCard.vue'

const meta: Meta<typeof SaleOffProductCard> = {
  component: SaleOffProductCard
}

export default meta
type Story = StoryObj<typeof SaleOffProductCard>

export const Primary: Story = {
  render: (args: any) => ({
    components: { SaleOffProductCard },
    setup() {
      return { args }
    },
    template: `
      <SaleOffProductCard v-bind="args">
      </SaleOffProductCard>
    `
  }),
  args: {
    offer: "15%",
    label: "ACCENT CHAIRS, BENCHES & OTTOMANS",
    subLabel: "ONLINE EXCLUSIVE",
    urlImage: "https://decorug.com.au/cdn/shop/collections/Banner_May_Decorug_Website_banner_1650x827_1e6385c1-ed32-4e43-9ac1-d96aaa63a2f5.jpg?v=1716120850",
    altImage: "",
    imageInText: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2M2G9kZXU0nqtyOpanXz5dGBwMmfzA5qYGA&s",
  }
}
