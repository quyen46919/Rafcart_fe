<template>
  <div class="relative w-full m-h-[250px] m-auto overflow-hidden cursor-pointer">
    <img :src="thumbnail_url" alt="" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <span class="text-white text-lg font-bold">{{ name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CategoryProps } from '@/interfaces'
const props = withDefaults(defineProps<CategoryProps>(), {
  thumbnail_url: '',
  slug: ''
})
</script>
