<template>
  <!-- datetimeinput -->
  <div class="">
    <input type="text" id="datetime-input"
      class="h-[42px] w-[259px] text-gray-600 uppercase text-sm rounded border-gray-300" placeholder="MM/YY"
      v-model="date" @input="formatDate" maxlength="5" />
  </div>
  <!-- datetimeinput end -->
</template>

<script setup lang="ts">
import { ref } from 'vue';

const date = ref('');
const formatDate = () => {
  let formattedDate = date.value.replace(/[^\d]/g, '').slice(0, 4);
  if (formattedDate.length === 4) {
    formattedDate = formattedDate.slice(0, 2) + '/' + formattedDate.slice(2);
  }
  date.value = formattedDate;
};
</script>
