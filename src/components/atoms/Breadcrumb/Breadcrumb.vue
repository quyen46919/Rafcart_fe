<template>
  <!-- breadcrum -->
  <div class="container flex flex-wrap justify-center mt-2">
    <div v-for="(link, index) in props.breadcrumbs" :key="link.url" class="flex items-center">
      <span
        v-if="link.url === currentUrl"
        class="text-base cursor-default font-medium mr-2"
        :class="props?.mode === 'dark' ? 'text-gray-600' : 'text-white'"
      >
        <span v-if="link.prefixIcon">
          <component :is="link.prefixIcon"></component>
        </span>
        {{ link.label }}
      </span>
      <RouterLink v-else :to="link.url" class="text-primary text-base cursor-pointer">
        <span v-if="link.prefixIcon">
          <component :is="link.prefixIcon"></component>
        </span>
        <span class="font-medium mx-2">
          {{ link.label }}
        </span>
      </RouterLink>
      <span
        v-if="index !== props.breadcrumbs.length - 1"
        class="text-s"
        :class="props?.mode === 'dark' ? 'text-gray-400' : 'text-white'"
      >
        <i class="fa-solid fa-chevron-right mr-2"></i>
      </span>
    </div>
  </div>
  <!-- breadcrum end -->
</template>

<script setup lang="ts">
import { VNode, onMounted, ref } from 'vue'

interface BreadcrumbProps {
  breadcrumbs:
    | {
        url: string
        label: string
        prefixIcon?: VNode
      }[]
    | any
  mode: 'light' | 'dark'
}
const props = withDefaults(defineProps<BreadcrumbProps>(), {
  breadcrumbs: [],
  mode: 'dark'
})

const currentUrl = ref('')

onMounted(() => {
  console.log(props?.breadcrumbs)
  currentUrl.value = props?.breadcrumbs[props?.breadcrumbs.length - 1].url
})
</script>
