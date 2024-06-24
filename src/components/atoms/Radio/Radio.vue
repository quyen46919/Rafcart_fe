<template>
  <!--Radio start-->
  <div class="">
    <label class="font-medium text-gray-600 text-xl">
      {{ props.variant !== VariantStatus.CIRCLE ? props.label : "" }}
      <span
        v-if="props.asterisk"
        :class="{
          'text-red-600 font-medium': props.variant !== VariantStatus.CIRCLE,
          'text-white font-medium': props.variant === VariantStatus.CIRCLE,
        }"
        >*</span
      >
    </label>
    <div
      :class="{
        'flex items-center gap-2 py-2': props.variant !== VariantStatus.CIRCLE,
        'flex flex-col items-start justify-start gap-2 py-2':
          props.variant === VariantStatus.CIRCLE,
      }"
    >
      <label
        v-for="(item, index) in valueList"
        :key="index"
        :@click="props.onClick"
        @click="handleSetValue(item.label, item.value)"
        :class="[
          {
            'text-white bg-red-400':
              (item.value === selectedValue.value) &
              (props.isDisabled === false) &
              (props.variant === VariantStatus.ROUNDED),
          },
          {
            'border-red-400 border-[3px]':
              (item.value === selectedValue.value) &
              (props.isDisabled === false) &
              (props.variant === VariantStatus.COLOR),
          },
          {
            'bg-red-300 border-[4px]':
              (item.value === selectedValue.value) &
              (props.isDisabled === false) &
              (props.variant === VariantStatus.CIRCLE),
          },
          classes,
          'flex items-center justify-center w-7 h-7 text-gray-700 font-medium',
        ]"
        :style="{
          backgroundColor:
            props.variant === VariantStatus.COLOR ? item.value : '',
        }"
      >
        <input
          type="radio"
          name="radio"
          class="hidden"
          @click="props.onClick"
          :disabled="props.isDisabled"
          :value="value"
        />
        <span
          :class="{
            'absolute left-16': props.variant === VariantStatus.CIRCLE,
          }"
        >
          {{ props.variant !== VariantStatus.COLOR ? item.label : "" }}
        </span>
      </label>
    </div>
  </div>
  <!--Radio end-->
</template>

<script setup lang="ts">
import { ref, Ref, computed } from "vue";
import type { VNode } from "vue";
import VariantStatus from "./enum/variant.ts";

interface RadioProps {
  label: string | VNode;
  asterisk: boolean;
  isDisabled: boolean;
  variant: VariantStatus;
  valueList: {
    label: string;
    value: string;
  }[];
  value: {
    label: string;
    value: string;
  };
  ref?: Ref<any>;
  onClick?: (event: MouseEvent) => void;
}

const props = withDefaults(defineProps<RadioProps>(), {
  valueList: [],
  value: {
    label: "",
    value: "",
  },
});

const selectedValue = ref(props.value);
console.log(selectedValue);

const handleSetValue = (newLabel: string, newValue: string) => {
  selectedValue.value.label = newLabel;
  selectedValue.value.value = newValue;
};

const labelStyle = ref({});
const label = ref<HTMLElement | null>(null);

const classes = computed(() => {
  switch (props.variant) {
    case "rounded":
      return "text-gray-700 rounded-sm border border-gray-400";
    case "color":
      return `relative border border-gray-400 text-gray-700 bg-[#f9f9f9]`;
    case "circle":
      return "border-red-400 rounded-full border-[2px]";
    default:
      return "";
  }
});
</script>
