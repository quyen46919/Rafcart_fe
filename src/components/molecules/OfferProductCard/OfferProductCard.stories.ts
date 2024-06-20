import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'

import OfferProductCard from './OfferProductCard.vue'

const meta: Meta<typeof OfferProductCard> = {
  component: OfferProductCard
}

export default meta
type Story = StoryObj<typeof OfferProductCard>

const ShopButton = (props: { class: string, type: string, value: string }) => h('input', { class: props.class, type: props.type, value: props.value }, [])

export const Primary: Story = {
  render: (args: any) => ({
    components: { OfferProductCard, ShopButton },
    setup() {
      return { args }
    },
    template: '<OfferProductCard v-bind="args" />'
  }),
  args: {
    offer: "30% offer",
    label: "Free Shipping",
    subLabel: "Attractive Natural Furniture",
    image_url: "https://www.pngfind.com/pngs/m/8-83819_svg-royalty-free-download-beige-living-room-sofa.png",
    url_link: "/"
  }
}
