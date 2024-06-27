<template>
  <div class="flex flex-row items-center justify-around bg-pink-100 px-8 py-4 gap-3">
    <div class="md:w-1/2 space-y-7">
      <div class="flex flex-col items-start justify-start gap-1">
        <h4 class="font-medium text-2xl text-red-500">{{ props.offer }}</h4>
        <h2 class="font-bold text-3xl text-black">{{ props.label }}</h2>
        <span class="font-normal text-base text-gray-800">{{ props.subLabel }}</span>
      </div>
      <RouterLink :to="props.href">
        <div v-if="props.shopButton" class="mt-4">
          <component :is="props.shopButton"></component>
        </div>
      </RouterLink>
      <button type="submit" class="cursor-pointer btn shadow-md bg-red-500 font-medium text-white rounded-md py-2 px-4">
        SHOP NOW
      </button>
    </div>
    <div class="md:w-1/2 h-[300px] flex flex-row items-center justify-end">
      <img :src="props.urlImage" :alt="props.altImage" class="w-45 h-45" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import type { VNode } from 'vue'

interface OfferProductCardProps {
  offer: string
  label: string
  subLabel: string
  href: string
  urlImage: string
  altImage: string
}

const props = withDefaults(defineProps<OfferProductCardProps>(), {})
</script>
