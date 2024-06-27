<template>
  <div
    class="border border-gray-200 shadow-[0_0_16px_0_rgba(0,0,0,0.06)] py-6 md:py-8 px-4 md:px-6 mb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(4,_minmax(0,_1fr))_130px] gap-6"
  >
    <ul class="flex col-start-1 col-end-5">
      <li v-for="({ imageUrl }, index) in props?.variants.slice(0, 5)" :key="index">
        <img
          loading="lazy"
          :src="imageUrl"
          :alt="`image ${index + 1}`"
          class="max-w-[80px] max-h-[50px] object-cover object-center"
        />
      </li>
    </ul>
    <router-link
      :to="props?.url"
      class="row-start-4 col-start-2 sm:row-start-3 sm:col-start-3 md:row-start-1 md:col-start-5"
    >
      <r-button
        variant="outlined"
        content="View Order"
        class="border-primary text-primary hover:bg-primary hover:text-white transition"
      />
    </router-link>

    <div>
      <h4 class="truncate">Order Number</h4>
      <p class="truncate">{{ props?.orderId }}</p>
    </div>
    <div class="">
      <h4 class="truncate">Purchased</h4>
      <p class="truncate">{{ props?.purchased }}</p>
    </div>
    <div class="col-start-1 row-start-3 md:col-start-auto md:row-start-auto">
      <h4 class="truncate">Quantity</h4>
      <p class="truncate">x{{ totalQuantity }}</p>
    </div>
    <div class="col-start-2 row-start-3 sm:row-start-3 md:col-start-auto md:row-start-auto">
      <h4 class="truncate">Total</h4>
      <p class="truncate">{{ totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</p>
    </div>
    <div class="sm:col-start-auto sm:row-start-auto row-start-4">
      <h4 class="truncate">Status</h4>
      <p class="capitalize truncate" :class="`text-[${OrderStatusColors[props?.status]}]`">{{ props?.status }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { OrderStatus, OrderStatusColors } from '@/interfaces/order'
import { computed } from 'vue'

interface OrderProductVariant {
  color: string
  size: string
  quantity: number
  price: number
  imageUrl: string
}

interface OrderHistoryCardProps {
  orderId: string
  url: string
  purchased: string
  status: OrderStatus
  variants: OrderProductVariant[]
}

const props = withDefaults(defineProps<OrderHistoryCardProps>(), {})

const totalQuantity = computed(() => props?.variants.reduce((total, { quantity }) => total + quantity, 0))
const totalPrice = computed(() => props?.variants.reduce((total, { price }) => total + price, 0))
</script>
