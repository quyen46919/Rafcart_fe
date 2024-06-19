<template>
  <div class="flex text-xl capitalize items-center font-medium h-10 w-full pl-4 bg-[#e9e4e4]">{{ section }}</div>
</template>
<script setup lang="ts">
interface sectionBoxProp {
  section: string
}
const props = withDefaults(defineProps<sectionBoxProp>(), {})
</script>
