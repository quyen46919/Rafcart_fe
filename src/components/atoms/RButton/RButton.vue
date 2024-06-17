<template>
  <button
    :class="[buttonClass, { 'btn-circle': circle }]"
    :style="buttonStyle"
    :disabled="isDisabled || isLoading"
    @click="onClick"
  >
    <template v-if="isLoading">
      <i class="fas fa-spinner fa-spin"></i>
    </template>
    <template v-else>
      <i v-if="prefixIcon && variant !== 'icon'" :class="['icon', prefixIcon]"></i>
      <span v-if="variant !== 'icon'" class="button-content">{{ content }}</span>
      <i v-if="suffixIcon && variant !== 'icon'" :class="['icon', suffixIcon]"></i>
      <i v-if="variant === 'icon'" :class="['icon', prefixIcon]"></i>
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ButtonProps {
  variant: 'text' | 'contained' | 'outlined' | 'icon'
  content: string
  prefixIcon?: string
  suffixIcon?: string
  circle?: boolean
  onClick?: () => void
  isDisabled?: boolean
  isLoading?: boolean
  color?: string // Nhận giá trị màu dưới dạng chuỗi
}

const props = withDefaults(defineProps<ButtonProps>(), {
  content: '',
  prefixIcon: '',
  suffixIcon: '',
  circle: false,
  onClick: () => {},
  isDisabled: false,
  isLoading: false,
  color: '#f44336' // Màu mặc định
})

const buttonClass = computed(() => {
  const baseClasses = ['button']
  if (props.variant === 'contained') {
    baseClasses.push('btn-contained')
  } else if (props.variant === 'outlined') {
    baseClasses.push('btn-outlined')
  } else if (props.variant === 'text') {
    baseClasses.push('btn-text')
  } else if (props.variant === 'icon') {
    baseClasses.push('btn-icon')
  }
  return baseClasses
})

const buttonStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.variant === 'contained' || props.variant === 'icon') {
    style.backgroundColor = props.color || '#f44336'
    style.color = '#fff'
  } else if (props.variant === 'outlined' || props.variant === 'text') {
    style.color = props.color || '#f44336'
    style.borderColor = props.color || '#f44336'
  }
  return style
})
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.btn-contained {
  color: #fff;
}
.btn-outlined {
  border-width: 1px;
  background: none;
  border: 1px solid;
}
.btn-text {
  background: none;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
}

.btn-circle {
  border-radius: 50%;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.button-content {
  margin: 0 0.4rem;
}
</style>
