<template>
  <div class="flex gap-1 w-[259px]">
    <label for="datetime-input" class="block text-gray-700 text-sm font-[500] mb-2">{{ props.labelName }}</label>
    <span v-if="props.isRequired" class="text-red-400">&#42;</span>
  </div>
  <div class="h-[42px] w-[259px] text-sm rounded border-gray-300">
    <VueDatePicker :format="DateFormat.DDMMYYYY" v-model="date" :placeholder="DateFormat.DDMMYYYY" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue';
import { DateFormat } from '@/shared/enum/format';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

interface Props {
  labelName: string;
  isRequired: boolean;
  onDateChange?: (date: string) => void;
}
const props = defineProps<Props>()
const date = ref<string>('');
watch(date, (newDate) => {
  if (newDate && props.onDateChange) {
    props.onDateChange(newDate);
  }
});
</script>
