<template>
  <div class="bg-cover bg-no-repeat bg-center py-36 relative" :style="{ backgroundImage: `url('${banner}')` }">
    <div class="container">
      <div class="h-[200px]">
        <div class="max-w-md xl:max-w-lg md:max-w-lg line-clamp-2 mb-4">
          <h1 class="xl:text-5xl md:text-5xl text-4xl text-gray-800 font-semibold">
            {{ title }}
          </h1>
        </div>
        <div class="max-w-lg xl:max-w-xl md:max-w-xl text-base text-gray-600 leading-6 line-clamp-2">
          <p>
            {{ text }}
          </p>
        </div>
      </div>

      <div class="mt-6">
        <!-- banner button -->
        <RButton
          variant="contained"
          content="Shop now"
          @click="navigateToFilter"
          class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition"
        />
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
