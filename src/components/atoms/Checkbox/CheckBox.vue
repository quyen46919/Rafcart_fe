<template>
  <div class="flex items-center">
    <input
      id="checkbox"
      :class="{
        'border-gray-300 text-gray-300 mr-3 ring-none rounded-sm': props?.isDisabled == true,
        'border-red-500 text-red-500 mr-3 ring-none rounded-sm': props?.isDisabled == false
      }"
      type="checkbox"
      :disabled="props?.isDisabled || props?.readonly"
      @click="props.onClick"
      :checked="props.checked"
      style="box-shadow: none"
      :style="{ cursor: props?.isDisabled || props?.readonly ? 'default' : 'pointer' }"
    />
    <label
      for="checkbox"
      class="flex items-center w-fit"
      :style="{ cursor: props?.isDisabled || props?.readonly ? 'default' : 'pointer' }"
    >
      <span v-if="typeof props.label == 'string'">{{ props.label }}</span>
      <component :is="props.label" v-else />
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, VNode } from 'vue'

interface InputProps {
  checked: boolean
  label?: string | VNode
  isDisabled?: boolean
  readonly?: boolean
  onClick: (event: MouseEvent) => void
}

const props = withDefaults(defineProps<InputProps>(), {
  checked: false,
  isDisabled: false,
  readonly: false
})
</script>
