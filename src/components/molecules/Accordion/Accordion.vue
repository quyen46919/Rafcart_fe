<template>
  <van-collapse v-model="computedActive" :accordion="props?.isAccordion">
    <van-collapse-item
      v-for="(item, index) in props?.data"
      :key="index"
      :title="item?.title"
      :name="item?.name"
      :disabled="props?.disabledNames.includes(item?.name)"
    >
      <template #right-icon>
        <van-icon name="minus" />
        <van-icon name="plus" />
      </template>
      {{ item?.description }}
    </van-collapse-item>
  </van-collapse>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface AccordionItem {
  title: string
  name: string
  description: string
}

interface AccordionProps {
  data: AccordionItem[]
  activeName?: string
  activeNames?: string[]
  disabledNames?: string[]
  isAccordion: boolean
}

const props = withDefaults(defineProps<AccordionProps>(), {
  data: (): AccordionItem[] => [],
  activeNames: (): string[] => [],
  disabledNames: (): string[] => [],
  isAccordion: true
})

const activeName = ref<string>(props?.activeName)
const activeNames = ref<string[]>(props?.activeNames)

const computedActive = computed({
  get: () => (props.isAccordion ? activeName.value : activeNames.value),
  set: (value) => {
    if (props.isAccordion) {
      activeName.value = value as string
    } else {
      activeNames.value = value as string[]
    }
  }
})
</script>

<style>
.van-collapse {
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.van-collapse .van-cell:not(.van-collapse-item__title--expanded) {
  background-color: #fafafa;
}

.van-collapse .van-collapse-item__title--disabled {
  background-color: var(--van-gray-3);
  opacity: 0.4;
}

.van-collapse .van-collapse-item__content,
.van-collapse .van-cell {
  font-size: 16px;
  color: var(--van-black);
  padding: 16px 20px;
}

.van-collapse .van-icon-plus,
.van-collapse .van-collapse-item__title--expanded .van-icon-minus {
  display: none;
}

.van-collapse-item__title--expanded .van-cell__title,
.van-collapse .van-collapse-item__title--expanded .van-icon-plus {
  display: block;
  color: var(--van-primary-color);
}

.van-collapse.van-hairline--top-bottom:after,
.van-collapse.van-hairline-unset--top-bottom:after {
  border: none;
}

.van-collapse .van-collapse-item--border:after,
.van-collapse .van-collapse-item__title--expanded:after {
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
