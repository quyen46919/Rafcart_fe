<template>
  <div
    class="flex flex-row items-center justify-around bg-pink-100 px-8 py-4 gap-3"
  >
    <div class="md:w-1/2 space-y-7">
      <div class="flex flex-col items-start justify-start gap-1">
        <h4 class="font-medium text-2xl text-red-500">{{ props.sale }}</h4>
        <h2 class="font-bold text-3xl text-black">{{ props.label }}</h2>
        <span class="font-normal text-base text-gray-800">{{
          props.subLabel
        }}</span>
      </div>
      <RouterLink :to="props.url_link">
        <div v-if="props.shopButton" class="mt-4">
          <component :is="props.shopButton"></component>
        </div>
      </RouterLink>

      <!-- <button
        type="submit"
        class="cursor-pointer btn shadow-md bg-red-500 font-medium text-white rounded-md py-2 px-4"
      >
        SHOP NOW
      </button> -->
    </div>
    <div class="md:w-1/2">
      <!-- Cái ảnh e chưa sử lý mất backgroound -->
      <img :src="props.image_url" alt="" class="w-45 h-45" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, withDefaults, defineProps } from "vue";
import type { VNode } from "vue";

interface OfferProductCardProps {
  sale: string;
  label: string;
  subLabel: string;
  shopButton?: VNode;
  url_link: string;
  image_url: string;
}

const props = withDefaults(defineProps<OfferProductCardProps>(), {});
</script>
