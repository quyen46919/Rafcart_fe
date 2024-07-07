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
import { SliderCardProps } from '@/interfaces'

interface SwiperContainerProps {
  slides: SliderCardProps[]
}

const props = defineProps<SwiperContainerProps>()

const modules = [Pagination, Navigation, Autoplay]
// limit 10 slide
const limitedSlides = computed(() => props.slides.slice(0, 10))
</script>
<style scoped>
::v-deep .swiper-button-prev:after,
::v-deep .swiper-button-next:after {
  font-family: swiper-icons;
  font-size: large !important;
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  color: #312b2b !important;
  line-height: 1;
}
</style>
