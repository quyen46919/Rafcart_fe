<template>
  <div
    class="bg-cover bg-center h-[22rem] flex items-center justify-center text-center"
    :style="{
      backgroundImage: `url(${props.thumbnail})`
    }"
  >
    <div class="max-w-[40rem] px-4">
      <h3 class="text-3xl uppercase text-white font-medium pb-1 line-clamp-3">{{ props?.title }}</h3>
      <breadcrumb :breadcrumbs="props?.breadcrumbs" mode="light" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VNode } from 'vue'
import Breadcrumb from '@/components/atoms/Breadcrumb/Breadcrumb.vue'

interface BackgroundBreadcrumbProps {
  title: string
  thumbnail: string
  breadcrumbs: {
    url: string
    label: string
    prefixIcon?: VNode
  }[]
}
const props = withDefaults(defineProps<BackgroundBreadcrumbProps>(), {
  breadcrumbs: []
})
</script>
