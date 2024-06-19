<template>
  <RouterLink :to="props.url" class="flex w-fit flex-col justify-start items-center cursor-pointer">
    <div v-if="props.icon" class="relative text-center w-[50px]">
      <component v-if="typeof props.icon !== 'string'" :is="props.icon" />
      <i :class="props.icon" v-else></i>

      <div v-if="props.isAnounce" class="min-w-3 min-h-3 absolute top-[-5px] right-1 rounded-full bg-primary"></div>
      <div
        v-if="props.badge && badgeCount > 0 && !props.isAnounce"
        class="flex justify-center items-center min-w-[18px] h-[18px ] absolute top-[-8px] right-0 rounded-full bg-[#2B2D42]"
      >
        <p class="text-[11px] px-1 text-white">{{ badgeCount }}<sup v-if="props.badge > props.maxBadge">+</sup></p>
      </div>
    </div>
    <p :class="['max-w-[46px] truncate text-[11px] ', props.color.includes('#') ? '' : props.color]" :style="styleText">
      {{ props.label }}
    </p>
  </RouterLink>
</template>
<script setup lang="ts">
import { VNode, computed } from 'vue'

interface BadgeIconProp {
  icon: VNode | string
  label?: string
  isAnounce: boolean
  maxBadge: number
  badge?: number
  color: string
  url: string
}
const props = withDefaults(defineProps<BadgeIconProp>(), {
  color: '#7ecf53',
  isAnounce: false,
  maxBadge: 99
})

const badgeCount = computed(() =>
  (props.badge && props.badge <= 0) || !props.badge || props.isAnounce
    ? 0
    : props.badge > props.maxBadge
      ? props.maxBadge
      : props.badge
)

const styleText = computed(() => {
  if (props.color.includes('#')) {
    return {
      color: props.color
    }
  }
})
</script>
