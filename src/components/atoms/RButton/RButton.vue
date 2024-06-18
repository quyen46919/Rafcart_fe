<template>
  <button
    :class="[buttonClass, { 'rounded-full': circle }]"
    :disabled="isDisabled || isLoading"
    @click="onClick"
    class="flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <template v-if="isLoading">
      <Loader />
    </template>
    <template v-else>
      <i v-if="prefixIcon && variant !== 'icon'" :class="['icon', prefixIcon]"></i>
      <span v-if="variant !== 'icon'" class="mx-1">{{ content }}</span>
      <i v-if="suffixIcon && variant !== 'icon'" :class="['icon', suffixIcon]"></i>
      <i v-if="variant === 'icon'" :class="['icon', prefixIcon]"></i>
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Loader from '../Loader/Loader.vue'

interface ButtonProps {
  variant: 'text' | 'contained' | 'outlined' | 'icon'
  content: string
  prefixIcon?: string
  suffixIcon?: string
  circle?: boolean
  onClick?: () => void
  isDisabled?: boolean
  isLoading?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  content: '',
  prefixIcon: '',
  suffixIcon: '',
  circle: false,
  onClick: () => {},
  isDisabled: false,
  isLoading: false
})

const buttonClass = computed(() => {
  const baseClasses = ['px-4', 'py-2', 'text-base', 'border', 'rounded', 'cursor-pointer']

  switch (props.variant) {
    case 'contained':
      baseClasses.push('bg-blue-600', 'text-white')
      break
    case 'outlined':
      baseClasses.push('bg-transparent', 'border-blue-600', 'text-blue-600')
      break
    case 'text':
      baseClasses.push('bg-transparent', 'text-blue-600', 'border-none')
      break
    case 'icon':
      baseClasses.push(
        'flex',
        'items-center',
        'justify-center',
        'w-10',
        'h-10',
        'border-solid',
        'text-blue-600',
        'rounded-full'
      )
      break
  }

  return baseClasses
})
</script>
