<template>
  <div class="flex gap-1 text-sm text-yellow-400">
    <span v-for="(_, index) in props.maxRating" :key="index">
      <i
        class="fas fa-star"
        :class="{ 'text-yellow-400': index < props.rating, 'text-gray-300': index >= props.rating }"
      ></i>
    </span>
  </div>
</template>

<script setup lang="ts">
interface RatingProps {
  rating: number
  maxRating: number
}
const props = withDefaults(
  defineProps<RatingProps>(),
  {
    rating: 0,
    maxRating: 5
  }
)
</script>
