<template>
  <div class="container">
    <Breadcrumb mode="dark" class="!justify-start !p-0 mt-5 mb-8" :breadcrumbs="breadcrumbs" />
    <div class="font-bold text-4xl mb-6">F.A.Q</div>
    <p class="mb-11">
      Can’t find the answer you’re looking for? We’ve shared some
      <br class="d-none d-md-block" />
      of your most frequently asked questions to help you out!
    </p>

    <div v-for="(data, index) in dataAccordions">
      <h4 class="text-2xl font-semibold mb-5">{{ data.name }}</h4>
      <Accordion isAccordion class="mb-8" :data="data.data" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import Breadcrumb from '@/components/atoms/Breadcrumb/Breadcrumb.vue'
import Accordion from '@/components/molecules/Accordion/Accordion.vue'
import dataAccordions from '@/faker/faq/faq.ts'
const Icon = (props: { class: string }) => h('i', { class: props.class }, [])
const breadcrumbs = [
  { url: '/', label: 'HomePage', prefixIcon: h(Icon, { class: 'fas fa-home mr-2' }) },
  { url: '/faq', label: 'FQA' }
]
</script>
