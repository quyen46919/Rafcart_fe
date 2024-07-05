<template>
  <div
    class="container flex flex-row items-center justify-start w-1/3 msm:container msm:w-full sm:w-[100%] md:w-full lg:w-full py-4 p-6 gap-3"
  >
    <Breadcrumb :breadcrumbs="breadcrumbList" class="flex items-start !justify-start" />
  </div>
  <div
    class="container flex flex-col items-center justify-start md:justify-start lg:items-start lg:flex-row msm:items-center sm:items-start lg:justify-around py-3 gap-3"
  >
    <ProfileMenu :username="user.userName" :avatar="user.avatar" />
    <div class="msm:w-full">
      <OrderCancelCard v-for="(item, index) in orderCancels" :key="index" v-bind="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import completed from '@/assets/images/complete.png'
import Avatar from '@/assets/images/avatar.png'
import Breadcrumb from '@/components/atoms/Breadcrumb/Breadcrumb.vue'
import ProfileMenu from '@/components/molecules/ProfileMenu/ProfileMenu.vue'
import OrderCancelCard from '@/components/molecules/OrderHistoryCard/OrderHistoryCard.vue'
import user from '@/faker/auth/user.ts'
import { OrderStatus, OrderStatusColors } from '@/interfaces/order.ts'
import orderCancels from '@/faker/order/cancelledOrders.ts'
import ROUTES from '@/router/domain-routes'

const PrefixIcon = (props: { class: string }) => h('i', { class: props.class }, [])

const breadcrumbList = ref([
  {
    url: '/',
    prefixIcon: h(PrefixIcon, { class: 'fas fa-home mr-2' })
  },
  {
    url: '/profile',
    label: 'My Account'
  },
  {
    url: '/order-cancelled',
    label: 'Order Cancel'
  }
])
</script>
