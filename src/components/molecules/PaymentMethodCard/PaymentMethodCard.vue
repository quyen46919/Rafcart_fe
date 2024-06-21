<template>
  <div
    v-for="(item, index) in paymentCards"
    :key="index"
    class="w-full flex flex-row lg:flex-row md:flex-row items-center justify-around py-2 px-6 mt-1 border border-gray-200 rounded-md"
  >
    <!--image-->
    <div class="w-1/12 flex flex-col items-end gap-3">
      <img :src="item.image" alt="img.png" class="w-fit h-[40px]" />
    </div>
    <!--method name-->
    <div class="w-1/5 flex flex-col items-start">
      <label class="font-bold text-gray-700 text-[14px]">Method</label>
      <span class="font-medium text-gray-500 text-[13px]">{{
        item.methodName
      }}</span>
    </div>
    <!--last card number-->
    <div class="w-1/12 flex flex-col items-start">
      <label class="font-bold text-gray-700 text-[14px]">Last Four</label>
      <span class="font-medium text-gray-500 text-[13px]">{{
        item.cardNumber.slice(
          item.cardNumber.length - 4,
          item.cardNumber.length
        )
      }}</span>
    </div>
    <!--Expiration date-->
    <div class="w-1/12 flex flex-col items-start">
      <label class="font-bold text-gray-700 text-[14px]">Expires</label>
      <span id="format_date" class="font-medium text-gray-500 text-[13px]">{{
        formattedDate(item.expiresDate)
      }}</span>
    </div>
    <!---->
    <div class="w-1/12 flex flex-col items-start">
      <label class="font-bold text-gray-700 text-[14px]">Default</label>
      <span class="font-medium text-gray-500 text-[13px]">{{
        item.default ? 'Yes' : 'No'
      }}</span>
    </div>
    <!--button-->
    <div class="w-1/4 flex flex-row lg:flex-row md:flex-row items-start gap-2">
      <RButton content="Edit" variant="outlined" :onClick="props?.onEdit">
      </RButton>
      <RButton content="Delete" variant="outlined" :onClick="props?.onDelete">
      </RButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineEmits, computed } from 'vue'
import moment from 'moment'

import RButton from '/src/components/atoms/RButton/RButton.vue'

const click = defineEmits(['click'])

interface PaymentMethodCardProps {
  paymentCards: {
    image: string
    methodName: string
    cardNumber: string
    expiresDate: string
    default: boolean
  }[]
  onEdit?: () => void
  onDelete?: () => void
}

const props = withDefaults(defineProps<PaymentMethodCardProps>(), {
  paymentCards: [],
})

const formattedDate = (expiresDate: string) => {
  const parsedDate = moment(expiresDate, 'DD/MM/YYYY')
  const formattedDate = parsedDate.format('MM/YY')
  return formattedDate
}
</script>
