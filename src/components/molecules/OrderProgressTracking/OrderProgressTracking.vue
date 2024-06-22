<template>
  <div class="flex md:flex-col lg:flex-col items-center bg-white w-full h-full">
    <span
      class="w-full h-8 bg-[#28a745] flex items-center justify-center z-0 text-white font-medium"
      >DELIVERED</span
    >
    <!---->
    <div class="flex w-full flex-col items-center justify-center py-4 z-1">
      <div
        class="flex flex-col relative items-center justify-center w-1/2 border-red-60 z-0"
        v-for="(item, index) in orderProgressTrackings"
        :key="index"
      >
        <span
          v-for="i in 4"
          :key="i"
          class="leading-3 font-mono text-xs text-[#cccccf] z-1"
          >▪️</span
        >
        <span
          :class="{
            'flex items-center justify-center rounded-full w-6 h-6 text-white font-medium bg-[#28a745] z-2':
              item.status === TrackingStatus.COMPLETED,
            'flex items-center justify-center rounded-full w-6 h-6 text-white font-medium bg-[#ffc106] z-2':
              item.status !== TrackingStatus.COMPLETED,
          }"
        >
          <i
            :class="{
              'fa-solid fa-check':
                orderProgressTrackings[index].status !== TrackingStatus.PENDING,
              'fa-solid fa-ellipsis-vertical':
                orderProgressTrackings[index].status === TrackingStatus.PENDING,
            }"
          ></i>
        </span>
        <span
          v-for="i in 4"
          :key="i"
          class="leading-3 font-mono text-xs text-[#cccccf] z-1"
          >▪️</span
        >
        <label
          :class="{
            'flex flex-col items-start justify-center absolute rounded-sm border border-gray-200 right-0 gap-2 px-3 py-2':
              index % 2 == 0,
            'flex flex-col items-start justify-center absolute rounded-sm border border-gray-200 left-0 gap-2 px-3 py-2':
              index % 2 !== 0,
          }"
        >
          <span class="text-black font-medium text-[13px]">{{
            item.label
          }}</span>
          <span class="text-gray-400 font-medium text-[12px]">{{
            item.timestamp
          }}</span>
        </label>
      </div>
      <!---->
      <div
        class="flex flex-col items-start justify-start w-3/4 h-[120px] px-4 py-4 relative"
      >
        <div
          v-for="(item, index) in orderProgressTrackings"
          :key="index"
          :class="getProgressBarClass(index, item.status)"
          class="absolute mt-4"
        >
          <span
            v-if="(index < props.orderProgressTrackings.length) & (index > 0)"
            :class="{
              'absolute right-0 top-[-8px] rounded-full w-5 h-5 text-white font-medium bg-[#28a745] z-2':
                item.status !== TrackingStatus.PENDING,
            }"
          >
          </span>
          <span
            v-if="index > 0"
            class="absolute font-normal text-[#6d708d] right-[-20px] bottom-[-30px]"
            >{{
              item.status !== TrackingStatus.PENDING ? item.label : ""
            }}</span
          >
        </div>
        <label
          v-if="
            props.orderProgressTrackings[orderProgressTrackings.length - 1]
              .status !== TrackingStatus.PENDING
          "
          class="absolute shadow-md border border-gray-300 gap-3 b-[-10px] px-2 py-2 w-full flex items-center justify-between bottom-0"
        >
          <span class="text-[#171718] font-medium text-[13px]">
            {{
              props.orderProgressTrackings[orderProgressTrackings.length - 1]
                .timestamp
            }}
          </span>
          <span class="text-[#171718] font-medium text-[13px]"
            >Your package has been
            {{
              props.orderProgressTrackings[orderProgressTrackings.length - 1]
                .label
            }}. Thank you for shopping at RAFCARRT!</span
          >
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { VNode } from "vue";

import TrackingStatus from "./shared/enum/order.ts";

interface OrderProgressTrackingProps {
  orderProgressTrackings: {
    label: string;
    timestamp: string;
    status: TrackingStatus;
  }[];
}

const getProgressBarClass = (index, isDelivery) => {
  const totalSteps = props.orderProgressTrackings.length;
  const widthPercentage = ((index + 1) / (totalSteps - 1)) * 100;
  console.log(props.orderProgressTrackings.length);
  return [
    // "absolute",
    "top-2",
    "h-[2px]",
    {
      "bg-[#28a745] z-10": isDelivery === TrackingStatus.COMPLETED,
      "bg-gray-300 z-2": isDelivery === TrackingStatus.PENDING,
    },
    "rounded-md",
    { "w-full": index === totalSteps - 1 },
    { [`w-[${widthPercentage}%]`]: index < totalSteps - 1 },
  ];
};

const props = withDefaults(defineProps<OrderProgressTrackingProps>(), {
  orderProgressTrackings: [],
});
console.log("props in ", props?.orderProgressTrackings);
</script>
