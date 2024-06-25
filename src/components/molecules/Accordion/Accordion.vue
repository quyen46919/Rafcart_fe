<template>
  <van-collapse v-model="activeNames">
    <van-collapse-item v-for="(item, index) in props?.data" :key="index" :title="item?.title" :name="item?.name">
      <template #right-icon>
        <van-icon name="minus" />
        <van-icon name="plus" />
      </template>
      {{ item?.description }}
    </van-collapse-item>
  </van-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface AccordionItem {
  title: string
  name: string
  description: string
}

interface AccordionProps {
  data: AccordionItem[]
  activeNames?: string[]
}

const props = withDefaults(defineProps<AccordionProps>(), {})

const activeNames = ref(props?.activeNames)
</script>

<style scoped>
.van-collapse {
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.van-icon-plus,
.van-collapse-item__title--expanded .van-icon-minus {
  display: none;
}

.van-collapse-item__title--expanded .van-icon-plus {
  display: block;
}

.van-collapse-item__title.van-collapse-item__title--expanded {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
