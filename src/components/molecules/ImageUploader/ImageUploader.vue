<template>
  <div class="flex flex-col">
    <div class="flex">
      <van-uploader v-model="fileList" :preview-full-image="false" :preview-size="[100, 80]">
        <template #default>
          <div
            class="flex flex-col items-center justify-center w-[100px] h-[80px] border-2 border-dashed border-red-500 rounded-lg cursor-pointer"
          >
            <van-icon name="photo" class="text-gray-500 text-2xl" size="30" />
            <div class="mt-1.5 text-gray-500 text-sm">Upload Photo</div>
          </div>
        </template>
      </van-uploader>
      <van-icon
        :class="{ 'text-red-500': showWarning, 'text-gray-500': !showWarning }"
        name="warning-o"
        class="text-xl mt-[5px] ml-[19px] cursor-pointer"
        v-if="!fileList.length"
      />
    </div>
    <RButton
      @click="onSubmit"
      variant="contained"
      content="SUBMIT"
      class="bg-primary mt-4 h-[43px] w-[100px] font-semibold"
    />
  </div>
</template>

<script setup lang="ts">
import RButton from '@/components/atoms/RButton/RButton.vue'
import { ref } from 'vue'
import 'vant/lib/index.css'
interface SubmitProps {
  onSubmit: () => void
}

const props = defineProps<SubmitProps>()
const fileList = ref([])
const showWarning = ref(false)

const onSubmit = () => {
  if (fileList.value.length === 0) {
    showWarning.value = true
  } else {
    showWarning.value = false
    props.onSubmit()
  }
}
</script>
