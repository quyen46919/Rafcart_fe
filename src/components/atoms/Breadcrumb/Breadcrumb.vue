<template>
  <!-- breadcrum -->
  <div class="container flex justify-start mt-2">
    <div v-for="(link, index) in props.breadcrumbs" :key="link.url" class="flex items-center">
      <RouterLink :to="link.url" class="text-primary text-base cursor-pointer">
        <span v-if="link.prefixIcon">
          <component :is="link.prefixIcon"></component>
        </span>
        <span class="text-gray-600 font-medium mr-2">{{ link.label }}</span>
      </RouterLink>
      <span v-if="index !== props.breadcrumbs.length - 1" class="text-sm text-gray-400">
        <i class="fa-solid fa-chevron-right mr-2"></i>
      </span>
    </div>
  </div>
  <!-- breadcrum end -->
</template>

<script setup lang="ts">
import type { VNode } from 'vue'

interface BreadcrumbProps {
  breadcrumbs: {
    url: string
    label: string
    prefixIcon?: VNode
  }[]
}
const props = withDefaults(defineProps<BreadcrumbProps>(), {
  breadcrumbs: []
})
console.log('props in ', props?.breadcrumbs?.[0])
</script>
