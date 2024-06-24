<template>
  <div class="flex items-center gap-3">
    <div @mouseleave="mouseOverRating = null">
      <star-rating
        :show-rating="false"
        :star-size="props?.size"
        :read-only="props?.readOnly"
        :max-rating="props?.maxRating"
        @hover:rating="handleMouseOverRating"
        v-model:rating="clickRatingText"
      ></star-rating>
    </div>

    <p class="text-gray-500 font-medium text-lg" v-if="props?.showRating">
      <span
        v-if="props?.status === 'number'"
        class="max-w-[150px] text-ellipsis overflow-hidden whitespace-nowrap block"
        >{{ note }}</span
      >
      <span v-else>{{ mouseOverRating ? ratingStatus : ratingClickStatus }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import StarRating from 'vue-star-rating'

interface RatingProps {
  size?: number
  rating: number
  maxRating: number
  readOnly?: boolean
  showRating?: boolean
  note?: string
  status?: 'text' | 'number'
}
const props = withDefaults(defineProps<RatingProps>(), {
  size: 24,
  rating: 0,
  maxRating: 5,
  showRating: false,
  status: 'number'
})

const mouseOverRating = ref()
const clickRatingText = ref(props?.rating)

const handleMouseOverRating = (e: number) => {
  mouseOverRating.value = e
}

const ratingStatus = computed(() => {
  return mouseOverRating.value !== null ? getRatingStatus(mouseOverRating.value) : ''
})

const ratingClickStatus = computed(() => {
  return getRatingStatus(clickRatingText.value)
})

const getRatingStatus = (rating: number) => {
  const ratio = rating / props.maxRating
  switch (true) {
    case ratio >= 0.8:
      return 'Excellent'
    case ratio >= 0.6:
      return 'Very good'
    case ratio >= 0.4:
      return 'Good'
    case ratio >= 0.2:
      return 'Average'
    default:
      return 'Poor'
  }
}
</script>
