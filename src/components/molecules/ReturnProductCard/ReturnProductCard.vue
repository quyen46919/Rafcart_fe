<template>
  <div
    v-for="(item, index) in returnProductCards"
    :key="index"
    class="w-full flex flex-row lg:flex-row md:flex-row items-center justify-between py-4 px-6 mt-1 border border-gray-200 rounded-md"
  >
    <div class="w-1/12 flex flex-col items-end gap-3">
      <img :src="item.image" alt="img.png" class="w-fit h-[40px]" />
    </div>
    <div class="w-1/4 flex flex-col items-start truncate">
      <label class="font-bold text-gray-600 text-[14px] truncate">
        {{ item.orderName }}
      </label>
      <span class="font-bold text-gray-600 text-[14px] truncate">
        ${{ item.price }}
      </span>
    </div>
    <div class="w-1/6 flex flex-col items-start">
      <label class="font-bold text-gray-600 text-[14px]">Order number</label>
      <span class="font-medium text-gray-600 text-[13px]">
        {{ item.orderNumber }}
      </span>
    </div>
    <div class="w-1/6 flex flex-col items-start">
      <label class="font-bold text-gray-600 text-[14px]">Return status</label>
      <span
        :class="[
          {
            'text-green-600': item.status === OrderStatus.SUCCESSFUL,
            'text-red-600': item.status === OrderStatus.CANCELLED,
          },
          {
            'text-red-600': item.status === OrderStatus.CANCELLED,
            'text-green-600': item.status === OrderStatus.DELIVERED,
          },
          'font-medium text-[13px]',
        ]"
      >
        {{ item.status }}
      </span>
    </div>
    <div
      class="btn-lg w-1/5 flex flex-row lg:flex-row md:flex-row items-start justify-center gap-2"
    >
      <RButton content="View Order" variant="outlined" :onClick="props?.onView">
      </RButton>
    </div>
    <div
      class="btn-sm w-1/5 flex flex-row lg:flex-row md:flex-row items-start justify-center gap-2"
    >
      <i class="fa-solid fa-book-open-reader"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import RButton from "/src/components/atoms/RButton/RButton.vue";
import OrderStatus from "./enum/orderStaus.ts";

const click = defineEmits(["click"]);

interface ReturnProductCardProps {
  returnProductCards: {
    image: string;
    orderName: string;
    orderNumber: string;
    price: number;
    status: OrderStatus;
  }[];
  onView?: () => void;
}

const props = withDefaults(defineProps<ReturnProductCardProps>(), {
  returnProductCards: [],
});
</script>

<style>
@media only screen and (max-width: 576px) {
  .btn-lg {
    display: none;
  }
  .btn-sm {
    display: block;
  }
}
@media only screen and (max-width: 768px) {
  body {
  }
  .btn-lg {
    display: block;
  }
  .btn-sm {
    display: none;
  }
}

@media only screen and (max-width: 992px) {
  body {
  }
  .btn-lg {
    display: block;
  }
  .btn-sm {
    display: none;
  }
}
@media only screen and (max-width: 1200px) {
  body {
  }
  .btn-lg {
    display: block;
  }
  .btn-sm {
    display: none;
  }
}
</style>
