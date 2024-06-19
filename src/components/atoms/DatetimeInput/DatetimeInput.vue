<template>
  <!-- datetimeinput -->
  <div class="flex justify-between w-[259px]">
    <label for="datetime-input" class="block text-gray-700 text-sm font-[500] mb-2">{{ labelName }}</label>
    <span v-if="isRequired" class="text-red-400">&#42;</span>
  </div>
  <input type="date" class="h-[42px] w-[259px] text-gray-600 uppercase text-sm rounded border-gray-300"
    placeholder="MM/YY" v-model="date" @input="formatDate" maxlength="10" />
  <!-- datetimeinput end -->
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import * as moment from 'moment';
import { DateFormat } from '@/shared/enum/format';

const props = defineProps<{ labelName: string; isRequired: boolean }>()

const date = ref('');
const formatDate = () => moment(date.value).format(DateFormat.YYYYMM)
</script>
