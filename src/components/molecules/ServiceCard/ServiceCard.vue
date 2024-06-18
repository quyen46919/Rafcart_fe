<template>
  <div
    class="flex justify-center w-full bg-white lg:max-w-[310px] py-9 px-20 lg:py-7 lg:px-16 border border-primary rounded-sm"
  >
    <img class="w-[50px] h-[38px]" :src="props.image" alt="image" />
    <div class="flex flex-col gap-y-1 ml-4 justify-between">
      <span class="text-sm font-semibold line-clamp-1">{{ title }} </span>
      <span class="text-xs text-[#737679] line-clamp-1">{{ description }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface ServiceCardProps {
  image?: string
  title?: string
  description?: string
}

const props = withDefaults(defineProps<ServiceCardProps>(), {
  image: '',
  title: '',
  description: ''
})
</script>
