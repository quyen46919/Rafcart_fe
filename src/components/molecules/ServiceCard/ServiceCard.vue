<template>
  <div
    class="flex justify-center w-full bg-white lg:max-w-[310px] py-9 px-20 lg:py-7 lg:px-16 border border-primary rounded-sm"
  >
    <img class="w-[50px] h-[38px]" :src="props.image" alt="image" />
    <div class="ml-4 overflow-hidden text-ellipsis">
      <p class="text-sm font-semibold truncate">{{ title }}</p>
      <p class="text-xs text-[#737679] truncate">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ServiceCardProps } from '@/interfaces'
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(defineProps<ServiceCardProps>(), {
  image: '',
  title: '',
  description: ''
})
</script>
