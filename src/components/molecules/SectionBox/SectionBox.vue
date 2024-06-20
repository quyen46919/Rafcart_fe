<template>
  <div
    class="h-10 w-full px-4 bg-[#e9e4e4] text-xl font-medium overflow-hidden whitespace-nowrap text-ellipsis leading-10"
  >
    {{ section }}
  </div>
</template>

<script setup lang="ts">
interface sectionBoxProp {
  section: string
}
const props = withDefaults(defineProps<sectionBoxProp>(), {})
</script>
