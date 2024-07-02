import type { Meta, StoryObj } from '@storybook/vue3'

import PaymentMethodCard from './PaymentMethodCard.vue'

const meta: Meta<typeof PaymentMethodCard> = {
  component: PaymentMethodCard
}

export default meta
type Story = StoryObj<typeof PaymentMethodCard>


export const Primary: Story = {
  render: (args: any) => ({
    components: { PaymentMethodCard },
    setup() {
      return { args }
    },
    template: `
      <PaymentMethodCard v-bind="args">
      </PaymentMethodCard>
    `
  }),
  args: {
    paymentCards: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png",
        methodName: "American Express",
        cardNumber: "1234560022",
        expiresDate: "26/01/2022",
        default: true,
      },
    ],
    onEdit: () => {
      console.log("handleEditMethod");
    },
    onDelete: () => {
      console.log("handleDeleteMethod");
    }
  }
}
