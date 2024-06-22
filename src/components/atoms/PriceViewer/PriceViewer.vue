<template>
  <div class="lg:max-w-[250px] py-4 px-8 flex w-full justify-between items-center">
    <div
      class="text-lg text-[#667089] line-through mr-3 font-medium"
      :class="{ hidden: props.price === discounted || discount <= 0 }"
    >
      {{ formatValidatePrice(validatePrice) }}
    </div>
    <div class="text-primary text-xl font-semibold truncate max-w-full" :title="formatPrice(discounted)">
      {{ formatPrice(discounted) }}
    </div>
    <div
      v-if="(props.isTooltip && props.discount) || props.discount > 0"
      class="relative text-white bg-primary p-1 text-base font-medium z-10 after:contents-[''] before:w-4 before:h-4 before:rotate-45 before:bg-primary before:absolute before:top-1/2 before:-left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10"
    >
      {{ validateDiscount() > 0 ? '-' : '' }} {{ validateDiscount() }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface PriceViewerProps {
  price: number
  discount?: number
  isTooltip?: boolean
}

const props = withDefaults(defineProps<PriceViewerProps>(), {
  price: 0,
  discount: 0,
  isTooltip: false
})

const validateDiscount = () => {
  if (props.discount < 0) return 0
  if (props.discount > 100) return 100
  return props.discount
}
const discounted = computed(() => {
  return validatePrice.value * (1 - validateDiscount() / 100)
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
