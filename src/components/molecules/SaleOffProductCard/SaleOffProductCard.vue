<template>
  <div
    class="max-w-screen flex flex-row items-center justify-start bg-pink-100 gap-3 z-0 bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: 'url(' + props.urlImage + ')',
    }"
  >
    <div
      class="md:w-1/3 lg:w-1/3 space-y-7 bg-white z-1 py-6 px-6 rounded-r-full"
    >
      <div
        class="flex flex-col items-start justify-start px-4 gap-1 text-wrap truncate"
      >
        <h4 class="font-normal text-[13px] text-gray-700">
          {{ props.subLabel }}
        </h4>
        <h2
          class="flex flex-row items-center justify-start font-black text-4xl py-2 text-[#fe3d57]"
        >
          {{ props.offer }}
          <div
            class="text-style font-black text-4xl py-2 text-[#fe3d57]"
            :style="{
              backgroundImage: 'url(' + props.imageInText + ')',
            }"
          >
            OFF
          </div>
        </h2>
        <span
          class="font-medium text-[14px] text-gray-900 mb-5 text-wrap truncate"
          >{{ props.label }}</span
        >
        <button
          type="submit"
          class="cursor-pointer btn shadow-md bg-[#fe3d57] font-medium text-white rounded-md py-2 px-4"
        >
          SHOP NOW
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";
import type { VNode } from "vue";

interface SaleOffProductCardProps {
  offer: string;
  label: string;
  subLabel: string;
  urlImage: string;
  altImage: string;
  imageInText: string;
}

const props = withDefaults(defineProps<SaleOffProductCardProps>(), {});
</script>

<style>
.text-style {
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  display: inline-block;
}
</style>
