<template>
  <div class="md:max-w-[376px] flex gap-4 text-base w-full">
    <div class="max-w-[112px] w-full rounded-lg bg-gray-100 p-4 flex justify-center items-center">
      <img
        loading="lazy"
        :src="props?.thumbnail"
        :alt="props?.name"
        class="max-w-[65px] max-h-[60px] object-cover object-center h-full w-full"
      />
    </div>
    <div class="flex-1 w-full line-clamp-1">
      <router-link
        :to="props?.url"
        class="font-medium mb-2 line-clamp-1 hover:text-primary transition cursor-pointer"
        >{{ props?.name }}</router-link
      >
      <div class="flex items-end gap-2 flex-wrap">
        <span class="text-primary leading-5 truncate">{{ priceDiscount }}</span>
        <span v-if="props?.discount" class="text-sm text-gray-500 line-through font-medium truncate">{{
          props?.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })
        }}</span>
      </div>
      <div class="flex mt-1 gap-2 items-end">
        <rating :rating="props?.rating" :readOnly="true" :size="16" />
        <span class="text-sm text-gray-500 truncate">{{ props?.reviews }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Rating from '@/components/atoms/Rating/Rating.vue'
import { MiniProductCardProps } from '@/interfaces/miniProductCard'

const props = withDefaults(defineProps<MiniProductCardProps>(), {
  discount: 0
})

const priceDiscount = computed(() => {
  if (props?.discount < 0 || props?.discount > 100) return NaN
  return (props?.price * ((100 - props?.discount) / 100)).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
})
</script>
