<template>
  <swiper
    :slides-per-view="1"
    :space-between="30"
    :loop="true"
    :pagination="{ clickable: true }"
    :navigation="true"
    :autoplay="{ delay: 3000 }"
    :modules="modules"
    class="w-full h-[520px]"
  >
    <swiper-slide v-for="(slide, index) in limitedSlides" :key="index">
      <SliderCard :banner="slide.banner" :title="slide.title" :text="slide.text" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import SliderCard from './SliderCard.vue'
import { computed } from 'vue'

interface Slide {
  banner: string
  title: string
  text: string
}

interface SwiperContainerProps {
  slides: Slide[]
}

const props = defineProps<SwiperContainerProps>()

const modules = [Pagination, Navigation, Autoplay]
// limit 10 slide
const limitedSlides = computed(() => props.slides.slice(0, 10))
</script>
