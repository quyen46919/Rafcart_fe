<template>
  <div class="flex flex-col">
    <label for="input" v-if="props?.label" class="pb-3 text-sm">
      {{ props?.label }}
      <span v-if="props?.asterisk" class="text-primary">*</span>
    </label>
    <div class="flex relative">
      <component
        id="input"
        v-model="inputValue"
        :is="inputType"
        :ref="props?.ref"
        :type="props?.type"
        :placeholder="props?.placeholder"
        :rows="props?.rows"
        :disabled="props?.isDisabled"
        class="border border-gray-300 rounded p-4 pr-12 w-full shadow-none focus:border-primary focus:ring-primary resize-none"
        :class="{
          'text-primary border-primary': props?.error,
          'text-gray-100 border-gray-100 bg-gray-100': props?.isDisabled
        }"
        :style="inputStyle"
        @input="handleInput"
      ></component>
      <span
        v-if="props?.suffixIcon"
        @click="props?.suffixIconCallback"
        class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <font-awesome-icon :icon="props?.suffixIcon" v-if="typeof props?.suffixIcon === 'string'"></font-awesome-icon>
        <component :is="props?.suffixIcon" v-else />
      </span>
    </div>
    <small v-if="props?.helperText" class="text-gray-700 pt-1" :class="{ 'text-primary': props?.error }">
      {{ props?.helperText }}
    </small>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, VNode, Ref } from 'vue'

interface InputProps {
  label?: string
  asterisk?: boolean
  placeholder?: string
  value: string | number
  type: string
  error?: boolean
  helperText?: string
  suffixIcon?: string | VNode
  suffixIconCallback?: Function
  ref?: Ref
  isDisabled?: boolean
  isMultiline?: boolean
  rows?: number
  maxRow?: number
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  rows: 2,
  isDisabled: false,
  error: false
})

const inputValue = ref(props?.value)

const inputType = computed(() => (props?.isMultiline ? 'textarea' : 'input'))

const inputStyle = computed(() => ({
  height: props?.isMultiline ? `${calcHeight(inputValue.value.toString())}px` : '44px',
  resize: props?.isMultiline ? 'vertical' : 'none',
  scrollbarWidth: props.maxRow ? 'auto' : 'none'
}))

const calcHeight = (value: string): number => {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length
  let baseHeight = 20 * (props?.rows ?? 2)
  let newHeight = baseHeight + numberOfLineBreaks * 20 + 12 + 2
  if (props?.maxRow) {
    let maxHeight = 20 * props?.maxRow + 12 + 2
    newHeight = Math.min(newHeight, maxHeight)
  }
  return newHeight
}

const handleInput = (event: Event) => {
  if (props?.isMultiline) {
    const target = event.target as HTMLTextAreaElement
    target.style.height = `${calcHeight(target.value)}px`
    inputValue.value = target.value
  }
}
</script>
