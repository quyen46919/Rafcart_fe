<template>
  <!--Radio start-->
  <!--Size radio-->
  <div class="flex items-start flex-col p-4">
    <h3 class="font-medium">
      Size
      <span v-if="asterisk" class="text-red-600">*</span>
    </h3>

    <div class="flex items-center gap-3 mt-2">
      <!--item radio-->
      <div
        v-for="(item, index) in props.sizeList"
        :key="index"
        :class="{ 'size-selected': value == item.value }"
      >
        <input
          type="radio"
          name="size"
          class="hidden"
          :value="targetSize"
          :id="'size-' + item.value"
          v-model="value"
        />
        <label
          :for="'size-' + item.value"
          class="size-label text-xs border border-gray-400 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 font-bold"
          @click="handleChangeSize(item.value)"
        >
          {{ item.label }}
        </label>
      </div>
    </div>
  </div>
  <!--Color radio-->
  <div class="flex items-start flex-col p-4">
    <h3 class="font-medium">
      Color
      <span v-if="asterisk" class="text-red-600">*</span>
    </h3>

    <div class="flex items-center gap-3 mt-2">
      <!--item radio-->
      <div
        v-for="(item, index) in props.colorList"
        :key="index"
        class="color-selected flex flex-col items-center justify-center gap-2"
      >
        <input
          type="radio"
          name="color"
          class="hidden"
          :value="targetColor"
          :id="'color-' + item.value"
          v-model="value"
        />
        <label
          :for="'color-' + item.value"
          :class="
            'color-label text-xs border border-gray-400 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 font-bold ' +
            'bg-' +
            item.value
          "
          @click="handleChangeColor(item.value)"
        >
        </label>
      </div>
    </div>
  </div>
  <!--Radio end-->
</template>

<script setup lang="ts">
import { ref, withDefaults, defineProps } from "vue";
import type { VNode } from "vue";

interface RadioProps {
  sizeList: {
    label: string;
    value: string;
    variant: "rounded" | "color" | "circle";
  }[];

  colorList: {
    label: string;
    value: string;
    variant: "rounded" | "color" | "circle";
  }[];

  asterisk: true;
  onClick: (event: MouseEvent) => void;
}
const props = withDefaults(defineProps<RadioProps>(), {
  sizeList: [],
  colorList: [],
  asterisk: true,
});

const targetSize = ref<string>("");
const targetColor = ref<string>("");

const handleChangeSize = (size: string) => {
  targetSize.value = size;
};

const handleChangeColor = (color: string) => {
  targetColor.value = color;
};
</script>

<style scoped>
.size-selected .size-label {
  background-color: rgb(254, 61, 87);
  color: rgb(255, 255, 255);
}
.color-selected .color-label {
  border: 2px solid rgb(254, 61, 87);
}
</style>
