<template>
  <div class="w-fit py-4 px-8 flex items-center gap-4">
    <div
      class="text-lg text-[#667089] line-through font-medium"
      :class="{ hidden: props.price === discountedPrice || discount <= 0 }"
    >
      {{ formatValidatePrice(validatePrice) }}
    </div>
    <div class="text-primary text-xl font-semibold max-w-full" :title="formatPrice(discountedPrice)">
      {{ formatPrice(discountedPrice) }}
    </div>
    <div
      v-if="(props.showPercent && props.discount) || props.discount > 0"
      class="relative ml-1 text-white bg-primary p-1 text-base font-medium z-10 before:contents-[''] before:w-4 before:h-4 before:rotate-45 before:bg-primary before:absolute before:top-1/2 before:-left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10"
    >
      -{{ discount }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface PriceViewerProps {
  price: number
  discount?: number
  showPercent?: boolean
}

const props = withDefaults(defineProps<PriceViewerProps>(), {
  price: 0,
  discount: 0,
  showPercent: false
})

const discount = computed(() => {
  if (props.discount < 0) return 0
  if (props.discount > 100) return 100
  return props.discount
})

const discountedPrice = computed(() => {
  return validatePrice.value * (1 - Number(discount.value) / 100)
})

const validatePrice = computed(() => {
  return props.price < 0 ? 0 : props.price
})

const formatPrice = (price: number) => {
  const priceString = price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  if (priceString.length > 15) {
    return priceString.slice(0, 15) + '...'
  }
  return priceString
}
const formatValidatePrice = (validatePrice: number) => {
  return formatPrice(validatePrice)
}
</script>
