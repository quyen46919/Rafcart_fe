<template>
  <div class="bg-cover bg-no-repeat bg-center py-36 relative" :style="{ backgroundImage: `url('${banner}')` }">
    <div class="container">
      <div class="max-w-md xl:max-w-lg md:max-w-lg">
        <h1 class="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4 truncate-2-lines">
          {{ title }}
        </h1>
      </div>
      <div class="max-w-lg xl:max-w-xl md:max-w-xl text-base text-gray-600 leading-6 truncate-2-lines h-20">
        <p>
          {{ text }}
        </p>
      </div>

      <div class="mt-10">
        <!-- banner button -->
        <RButton
          variant="contained"
          content="Shop now"
          @click="navigateToFilter"
          class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition"
        />
        <!-- <RouterLink
          to="/filter"
          class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition"
        >
          Shop now
        </RouterLink> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import RButton from '@/components/atoms/RButton/RButton.vue'
import { useRouter } from 'vue-router'
interface SliderCradProps {
  banner: string
  title: string
  text: string
}

const props = defineProps<SliderCradProps>()
const router = useRouter()

const navigateToFilter = () => {
  router.push('/filter')
}
</script>

<style scoped>
.truncate-2-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
