<template>
  <div class="w-full flex justify-between items-end">
    <div class="flex flex-col justify-start gap-6">
      <p class="text-6 font-[500] leading-[28.8px] uppercase truncate">flash sale</p>
      <div class="flex justify-start items-center gap-4">
        <div class="py-1 px-4 capitalize font-[500] text-white rounded-[3px] bg-[#2b2d42] leading-6">ending in</div>
        <van-count-down
          :time="time"
          :auto-start="props.autoStart"
          @finish="props.onFinish"
          millisecond
          format="HH:mm:ss"
          class="flex items-center gap-1"
        >
          <template #default="timeData">
            <div class="flex justify-center items-center w-9 h-8 font-[500] py-[5px] rounded-sm bg-primary text-white">
              {{ timeData.hours < 10 ? `0${timeData.hours}` : timeData.hours }}
            </div>
            <span>:</span>
            <div class="flex justify-center items-center w-9 h-8 font-[500] py-[5px] rounded-sm bg-primary text-white">
              {{ timeData.minutes < 10 ? `0${timeData.minutes}` : timeData.minutes }}
            </div>
            <span>:</span>
            <div class="flex justify-center items-center w-9 h-8 font-[500] py-[5px] rounded-sm bg-primary text-white">
              {{ timeData.seconds < 10 ? `0${timeData.seconds}` : timeData.seconds }}
            </div>
          </template>
        </van-count-down>
      </div>
    </div>
    <RouterLink :to="props.url" class="flex items-center justify-start gap-2 text-primary cursor-pointer">
      <p class="text-[15px] font-[500]">See more</p>
      <i class="fa-solid fa-chevron-right text-[15px]"></i>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface PropsFlashSale {
  timer: number
  url: string
  autoStart: boolean
  onFinish: () => void
}
const props = withDefaults(defineProps<PropsFlashSale>(), {
  autoStart: true,
  timer: 0
})
const time = ref(props.timer * 60 * 1000)
</script>
