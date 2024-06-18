<template>
  <button
    :class="[computedClasses, { 'rounded-full': circle }]"
    :style="buttonStyle"
    :disabled="isDisabled || isLoading"
    @click="handleClick"
    class="flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 text-base border rounded cursor-pointer"
    ref="button"
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
import { computed, ref, watchEffect } from 'vue'
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
  onClick: undefined,
  isDisabled: false,
  isLoading: false
})
const emit = defineEmits(['click'])

const handleClick = () => {
  if (!props.isDisabled && !props.isLoading) {
    emit('click')
  }
}
const computedClasses = computed(() => {
  switch (props.variant) {
    case 'contained':
      return 'bg-blue-600 text-white'
    case 'outlined':
      return 'bg-transparent border-blue-600 text-blue-600'
    case 'text':
      return 'bg-transparent text-blue-600 border-none'
    case 'icon':
      return 'flex items-center justify-center w-10 h-10 border-solid text-blue-600 rounded-full'
    default:
      return ''
  }
})

const buttonStyle = ref({})
const button = ref<HTMLElement | null>(null)

watchEffect(() => {
  if (props.isLoading && button.value) {
    const { width, height } = button.value.getBoundingClientRect()
    buttonStyle.value = {
      width: `${width}px`,
      height: `${height}px`
    }
  } else {
    buttonStyle.value = {}
  }
})
</script>
