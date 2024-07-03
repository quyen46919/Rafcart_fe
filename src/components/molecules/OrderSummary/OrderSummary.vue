<template>
  <div class="w-full flex flex-col border pt-6 px-3">
    <div class="text-lg font-bold pb-4 border-b">ORDER SUMMARY</div>

    <div class="flex flex-col">
      <ul>
        <li v-for="item in props.products" :key="item.name" class="flex mt-3">
          <div class="w-[50%]">
            <p class="text-base font-medium">{{ item.name }}</p>

            <span class="text-sm" v-if="item.options?.size">Size: {{ item.options.size }}</span>

            <span class="text-sm" v-if="item.options?.color">
              <span>{{ item.options?.color && item.options?.size ? ',' : '' }}</span> Color:
              {{ item.options.color }}</span
            >
          </div>
          <div class="flex-1 flex justify-center">
            <span class="flex-1 text-start text-base font-medium">x {{ item.target_quantity }}</span>
            <span class="flex-1 text-end text-base font-bold">{{
              (item.price * item.target_quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
            }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex justify-between text-base pb-6 pt-4 font-bold border-b">
      <p>SUBTOTAL</p>
      <p class="font-bold">{{ subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</p>
    </div>

    <div class="flex justify-between text-base font-bold pb-6 pt-5 border-b">
      <p>SHIPPING</p>
      <p class="font-bold">{{ shippingFee.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</p>
    </div>

    <div class="flex justify-between text-lg font-bold pb-6 pt-5">
      <p>TOTAL</p>
      <p class="font-bold">{{ total.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { withDefaults, defineProps } from 'vue'
enum Size {
  S = 'Small',
  MD = 'Medium',
  LG = 'Large',
  XL = 'Extra Large'
}
interface Product {
  name: string
  price: number
  options?: {
    size?: Size
    color?: string
  }
  target_quantity: number
}
interface OrderSummaryProps {
  products: Product[]
  shipping_fee: number
}

const props = withDefaults(defineProps<OrderSummaryProps>(), {
  shipping_fee: 0
})

const subtotal = computed(() => {
  return props.products.reduce((total, item) => total + item.price * item.target_quantity, 0)
})

const shippingFee = computed(() => {
  return props.shipping_fee === 0 ? 'Free' : props.shipping_fee
})

const total = computed(() => {
  return subtotal.value + props.shipping_fee
})
</script>
