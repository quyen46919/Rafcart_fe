<template>
  <div id="gallery" class="max-w-[36rem] flex flex-col gap-4">
    <carousel :items-to-show="1" :wrap-around="true" v-model="currentSlide">
      <slide v-for="slide in props?.image_list" :key="slide">
        <div class="w-full max-h-[30rem]">
          <img :src="slide" alt="" class="w-full h-full object-cover object-center bg-gray-200" />
        </div>
      </slide>
    </carousel>

    <div class="relative group">
      <carousel
        id="thumbnails"
        :items-to-show="5"
        :wrap-around="true"
        :snapAlign="'start'"
        :breakpoints="{
          0: {
            itemsToShow: 3
          },
          992: {
            itemsToShow: 5
          }
        }"
        v-model="currentSlide"
        ref="carousel"
      >
        <slide v-for="(slide, index) in props?.image_list" :key="slide">
          <div class="carousel__item cursor-pointer" @click="handleClickSlideTo(index)">
            <img :src="slide" alt="" class="w-full h-full object-cover object-center bg-gray-200" />
          </div>
        </slide>
        <template #addons>
          <button
            @click="handleNextToSide"
            class="max-w-8 bg-gray-100 px-3 py-2 drop-shadow-lg absolute top-1/2 -translate-y-1/2 flex justify-between w-full transition ease-in-out delay-350 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
          >
            <i class="fa-solid fa-chevron-left w-[8px]"></i>
          </button>
          <button
            @click="handlePrevToSlide"
            class="max-w-8 bg-gray-100 px-3 py-2 drop-shadow-lg absolute top-1/2 right-0 -translate-y-1/2 flex justify-between w-full transition ease-in-out delay-350 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
          >
            <i class="fa-solid fa-chevron-right w-[8px]"></i>
          </button>
        </template>
      </carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

interface ImageGalleryProps {
  image_list: string[]
}
const props = withDefaults(defineProps<ImageGalleryProps>(), {
  image_list: []
})

const currentSlide = ref(0)

const handleClickSlideTo = (val: number) => {
  currentSlide.value = val
}

const handleNextToSide = () => {
  currentSlide.value -= 1
}

const handlePrevToSlide = () => {
  currentSlide.value += 1
}
</script>

<style scoped>
.carousel__slide {
  padding: 0 10px;
}
</style>
