<template>
  <div id="app">
    <button :disabled="isDisabled" @click="downButtonClick">-</button>
    <input type="number" :value="value" :min="minValue" :max="maxValue" :disabled="isDisabled" />
    <button :disabled="isDisabled" @click="upButtonClick">+</button>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(0);
const minValue = ref(0);
const maxValue = ref(50);
const isDisabled = ref(false);

const upButtonClick = () => {
  if (value.value < maxValue.value) {
    value.value++;
  }
};
const downButtonClick = () => {
  if (value.value > minValue.value) {
    value.value--;
  }
};
</script>

<style>
#app {
  display: flex;
  align-items: center;
}
button {
  width: 36px;
  height: 36px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #ccc;

}
button:disabled {
  cursor: not-allowed;
  background-color: #e0e0e0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  width: 40px;
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;

}
</style>
