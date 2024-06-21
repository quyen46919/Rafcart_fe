<template>
  <div
    v-for="(item, index) in returnProductCards"
    :key="index"
    class="w-full flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0 justify-between py-4 px-6 mt-1 border border-gray-200 rounded-md"
  >
    <div class="w-full md:w-1/4 flex flex-row gap-3">
      <div class="flex flex-col items-end gap-3">
        <img :src="item.image" alt="img.png" class="!w-12 !h-12 object-cover" />
      </div>
      <div class="flex flex-col items-start truncate">
        <label class="font-bold text-gray-600 text-[14px] truncate">
          {{ item.orderName }}
        </label>
        <span class="font-bold text-gray-600 text-[14px] truncate"> ${{ item.price }} </span>
      </div>
    </div>

    <div class="w-full md:w-1/3 flex flex-row gap-10 justify-start md:justify-between">
      <div class="flex flex-col items-start">
        <label class="font-bold text-gray-600 text-[14px]">Order number</label>
        <span class="font-medium text-gray-600 text-[13px]">
          {{ item.orderNumber }}
        </span>
      </div>
      <div class="flex flex-col items-start">
        <label class="font-bold text-gray-600 text-[14px]">Return status</label>
        <span
          :class="[
            {
              'text-green-600': item.status === OrderStatus.SUCCESSFUL,
              'text-red-600': item.status === OrderStatus.CANCELLED
            },
            {
              'text-red-600': item.status === OrderStatus.CANCELLED,
              'text-green-600': item.status === OrderStatus.DELIVERED
            },
            'font-medium text-[13px]'
          ]"
        >
          {{ item.status }}
        </span>
      </div>
    </div>

    <div
      class="w-full md:w-1/5 flex flex-row lg:flex-row md:flex-row items-start justify-start md:justify-center gap-2"
    >
      <RButton content="View Order" variant="outlined" :onClick="props?.onView"> </RButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import RButton from '/src/components/atoms/RButton/RButton.vue'
import { OrderStatus } from '@/shared/enum/order'

interface ReturnProductCardProps {
  returnProductCards: {
    image: string
    orderName: string
    orderNumber: string
    price: number
    status: OrderStatus
  }[]
  onView?: () => void
}

const props = withDefaults(defineProps<ReturnProductCardProps>(), {
  returnProductCards: []
})
</script>
