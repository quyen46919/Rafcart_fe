<template>
  <form class="max-w-xs mx-auto">
    <div class="relative flex items-center">
      <button
        type="button"
        :disabled="props.isDisabled"
        @click="downButtonClick"
        :class="{
          'bg-gray-200 text-gray-400 cursor-not-allowed': props.isDisabled,
          'bg-white text-black': !props.isDisabled
        }"
        class="border p-3 h-11"
      >
        <i
          class="w-4 h-4 pb-[2px]"
          :class="{
            'fa-solid fa-minus': !props.isDisabled,
            'fa-solid fa-minus text-gray-400': props.isDisabled
          }"
        ></i>
      </button>
      <input
        type="number"
        v-model="localValue"
        :min="minValue"
        :max="maxValue"
        :disabled="props.isDisabled"
        class="w-fit border-x-0 border-gray-300 h-11 text-center text-gray-900 text-base block py-2.5 focus:border-gray-300 focus:ring-0"
        placeholder="0"
        required
        @input="handleChange"
      />
      <button
        type="button"
        :disabled="props.isDisabled"
        @click="upButtonClick"
        :class="{
          'bg-gray-200 text-gray-400 cursor-not-allowed': props.isDisabled,
          'bg-white text-black': !props.isDisabled
        }"
        class="border p-3 h-11"
      >
        <i
          class="w-4 h-4 pb-[2px]"
          :class="{
            'fa-solid fa-plus': !props.isDisabled,
            'fa-solid fa-plus text-gray-400': props.isDisabled
          }"
        ></i>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineProps, onMounted } from 'vue'
import { Field, CellGroup } from 'vant'

interface CounterButtonGroupProps {
  value: number
  minValue: number
  maxValue: number
  isDisabled: boolean
  onChange: (value: number) => void
}

const props = withDefaults(defineProps<CounterButtonGroupProps>(), {
  value: 0,
  minValue: 0,
  maxValue: 100,
  isDisabled: false
})

const localValue = ref(props.value)

const upButtonClick = () => {
  handleChangeQuantity('increment')
}

const downButtonClick = () => {
  handleChangeQuantity('decrement')
}

watch(
  () => props.value,
  (newValue) => {
    localValue.value = newValue > props.maxValue ? props.maxValue : newValue
  }
)

const handleChangeQuantity = (type: 'increment' | 'decrement') => {
  if (type === 'increment' && localValue.value < props.maxValue) {
    localValue.value++
  } else if (type === 'decrement' && localValue.value > props.minValue) {
    localValue.value--
  }
}

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const value = Number(target.value)

  if (value > props.maxValue) {
    localValue.value = props.maxValue
  } else {
    localValue.value = value
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
