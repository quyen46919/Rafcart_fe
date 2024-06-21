<template>
  <div class="lg:max-w-[250px] py-4 px-8 flex w-full items-center">
    <div class="text-lg text-[#667089] line-through mr-3 font-medium">
      {{ props.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace(/,/g, '') }}
    </div>
    <div class="text-primary text-xl font-semibold">
      {{ discounted.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace(/,/g, '') }}
    </div>
    <div class="relative ml-6">
      <span class="flex justify-center bg-primary items-center text-white">
        <span class="flex justify-center items-center p-1 text-base font-medium relative z-10"
          >-{{ props.discount }}%</span
        >
      </span>
      <span class="absolute inline-block w-4 h-4 bg-primary transform rotate-45 right-9 top-[9px]"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface PriceViewerProps {
  price: number
  discount: number
}
const props = withDefaults(defineProps<PriceViewerProps>(), {
  price: 0,
  discount: 0
})
const discounted = computed(() => {
  return props.price * (1 - props.discount / 100)
})
</script>
