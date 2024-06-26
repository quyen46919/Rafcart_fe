<template>
  <div>
    <div class="flex justify-between items-center pb-2 mb-8 border-b border-gray-300">
      <p class="uppercase text-lg font-semibold">{{ props.title }}</p>
      <router-link :to="props?.title" class="text-primary flex font-semibold text-base items-center cursor-pointer">
        See More
        <img loading="lazy" :src="arrowRight" alt="arrow right" width="24px" class="mr-1" />
      </router-link>
    </div>
    <ul class="flex flex-col gap-6">
      <li v-for="(item, index) in props?.data.slice(0, 3)" :key="index">
        <mini-product-card
          :name="item?.name"
          :url="item?.url"
          :thumbnail="item?.thumbnail"
          :price="item?.price"
          :discount="item?.discount"
          :rating="item?.rating"
          :reviews="item?.reviews"
        />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { MiniProductCardProps } from '@/interfaces/miniProductCard'
import arrowRight from '@/assets/images/icons/arrow-right.svg'

export interface TrendingProductItemProps {
  title: string
  url: string
  data: MiniProductCardProps[]
}
const props = withDefaults(defineProps<TrendingProductItemProps>(), {})
</script>
