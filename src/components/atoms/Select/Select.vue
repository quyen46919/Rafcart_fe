<template>
  <div class="w-[269px] relative" tabindex="0" @blur="handleClose">
    <div class="flex justify-start items-center">
      <p class="text-left text-black w-fit truncate" v-if="props.label">
        {{ props.label }}
      </p>
      <span v-if="props.asterisk" class="text-red-500">*</span>
    </div>

    <div :class="['mt-3]', { 'pointer-events-none opacity-50': props.isDisabled }]">
      <div
        :class="[
          props.selectStyle && typeof props.selectStyle === 'string' ? props.selectStyle : '',
          { 'border-red-500 border-[1.5px]': props?.error },
          'group border-gray-300 cursor-pointer flex justify-between items-center w-full h-[42px] px-[10px] border-[1px] rounded-md'
        ]"
        :style="props.selectStyle && typeof props.selectStyle !== 'string' ? props.selectStyle : ''"
        @click="handleIsOpen"
      >
        <span v-if="selectedValue?.value" :class="['w-full truncate', { 'text-red-500': props?.error }]">{{
          selectedValue.label
        }}</span>
        <span
          v-if="props.placeholder && !selectedValue?.value"
          :class="['w-full truncate', { 'text-red-500': props?.error }]"
          >{{ props.placeholder }}</span
        >
        <div class="duration-200" :class="{ '-rotate-180': isOpen }">
          <i
            :class="[
              'fa-solid fa-chevron-down mr-2 text-gray-300',
              props.iconStyle && typeof props.iconStyle === 'string' ? props.iconStyle : ''
            ]"
            :style="props.iconStyle && typeof props.iconStyle !== 'string' ? props.iconStyle : ''"
          ></i>
        </div>
      </div>
      <p
        v-if="props?.helperText"
        :class="[
          'text-[10px] w-full break-words line-clamp-4 hover:line-clamp-none',
          { 'text-red-500': props.error },
          { 'text-gray-200': props.error }
        ]"
      >
        {{ props?.helperText }}
      </p>
      <div
        :class="[
          'absolute z-[9999] w-full',
          { 'animate-scaleShowSelect': isOpen },
          { 'animate-unScaleShowSelect': !isOpen && isAnimation }
        ]"
      >
        <div
          v-if="isAnimation"
          :class="[
            props.optionStyle && typeof props.optionStyle === 'string' ? props.optionStyle : '',
            'overflow-hidden w-full mt-1 border-[1px] border-gray-200 rounded-md'
          ]"
          :style="props.optionStyle && typeof props.optionStyle !== 'string' ? props.optionStyle : ''"
        >
          <div
            v-if="props?.placeholder"
            class="w-full h-[42px] px-3 flex justify-start items-center pointer-events-none opacity-50"
          >
            <p class="w-full truncate">{{ props?.placeholder }}</p>
          </div>
          <div
            v-for="option in props.valueList"
            :key="option.label"
            @click="handleSetValueSelected(option)"
            :class="[
              props.optionItemStyle && typeof props.optionItemStyle === 'string' ? props.optionItemStyle : '',
              { 'font-bold bg-gray-100': option.value === selectedValue.value },
              'w-full h-[42px] px-3 flex justify-start items-center bg-white hover:bg-gray-100 cursor-pointer truncate'
            ]"
            :style="props.optionItemStyle && typeof props.optionItemStyle !== 'string' ? props.optionItemStyle : ''"
          >
            <span class="w-full truncate">{{ option.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'
import SelectOption from '@/interfaces/common'

type StyleObject = Record<string, string>
interface SelectionProp {
  label?: string
  asterisk?: boolean
  placeholder?: string
  selectStyle: StyleObject | string | {}
  iconStyle: StyleObject | string | {}
  optionStyle: StyleObject | string | {}
  optionItemStyle: StyleObject | string | {}
  valueList: {
    label: string
    value: string
  }[]
  value: SelectOption
  error?: boolean
  helperText?: string
  ref?: Ref<any>
  isDisabled?: boolean
}
const props = withDefaults(defineProps<SelectionProp>(), {
  value: { label: '', value: '' },

  valueList: []
})

const selectedValue = ref(props.value)
const isOpen = ref(false)
const isAnimation = ref(false)

const handleIsOpen = () => {
  isAnimation.value = true
  isOpen.value = !isOpen.value
}
const handleClose = () => {
  setTimeout(() => {
    isOpen.value = false
  }, 100)
}

const handleSetValueSelected = (newValue: SelectOption) => {
  selectedValue.value = newValue
  isOpen.value = false
}
</script>
