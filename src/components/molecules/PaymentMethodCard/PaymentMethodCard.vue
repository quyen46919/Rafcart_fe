<template>
  <div
    v-for="(item, index) in paymentCards"
    :key="index"
    class="container w-full flex flex-row lg:flex-row md:flex-row items-center justify-around py-2 px-6 mt-1 border border-gray-200 rounded-md"
  >
    <div class="w-1/12 flex flex-col items-end gap-3">
      <img :src="item.image" alt="img.png" class="w-fit h-[40px]" />
    </div>
    <div class="w-1/5 flex flex-col items-start">
      <label class="font-bold text-gray-700 text-[14px]">Method</label>
      <span class="font-medium text-gray-500 text-[13px]">{{
        item.methodName
      }}</span>
    </div>
    <div class="w-1/12 flex flex-col items-start">
      <label class="font-bold text-gray-700 text-[14px]">Last Four</label>
      <span class="font-medium text-gray-500 text-[13px]">{{
        item.cardNumber.slice(
          item.cardNumber.length - 4,
          item.cardNumber.length
        )
      }}</span>
    </div>
    <div class="w-1/12 flex flex-col items-start">
      <label class="font-bold text-gray-700 text-[14px]">Expires</label>
      <span id="format_date" class="font-medium text-gray-500 text-[13px]">{{
        formattedDate(item.expiresDate)
      }}</span>
    </div>
    <div class="w-1/12 flex flex-col items-start">
      <label class="font-bold text-gray-700 text-[14px]">Default</label>
      <span class="font-medium text-gray-500 text-[13px]">{{
        item.default ? 'Yes' : 'No'
      }}</span>
    </div>
    <div class="w-1/4 flex flex-row lg:flex-row md:flex-row items-start gap-2">
      <RButton
        content="Edit"
        variant="outlined"
        class="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
        :onClick="props?.onEdit"
      >
      </RButton>
      <RButton
        content="Delete"
        variant="outlined"
        class="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
        :onClick="props?.onDelete"
      >
      </RButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, computed } from 'vue'
import moment from 'moment'

import RButton from '@/components/atoms/RButton/RButton.vue'
import { formattedDate } from '@/shared/utils/format.ts'

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
  paymentCards: []
})
</script>
