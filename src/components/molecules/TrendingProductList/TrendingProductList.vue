<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <li
      v-for="(item, index) in props?.data"
      :key="index"
      :class="{ 'md:hidden lg:block': index === props.data.length - 1 }"
    >
      <trending-product-item :title="item?.title" :url="item?.title" :data="item?.data" />
    </li>
  </ul>
</template>
<script setup lang="ts">
import { TrendingProductItemProps } from './TrendingProductItem.vue'

interface TrendingProductListProps {
  data: TrendingProductItemProps[]
}

const props = withDefaults(defineProps<TrendingProductListProps>(), {
  data: (): TrendingProductItemProps[] => []
})
</script>
