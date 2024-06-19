<template>
  <div class="relative w-[387px] h-[250px] overflow-hidden cursor-pointer" >
    <img :src="thumbnail_url" alt="" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <span class="text-white text-lg font-bold">{{ name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryProps from '@/interfaces/category'

const props = withDefaults(defineProps<CategoryProps>(), {
  thumbnail_url: '',
  slug: ''
})
</script>
