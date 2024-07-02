<template>
  <div
    class="flex flex-row items-center justify-between w-1/3 msm:w-full sm:w-[100%] md:w-1/2 lg:w-full py-4 p-6 gap-3"
  >
    <Breadcrumb
      :breadcrumbs="breadcrumbList"
      class="flex items-start !justify-start"
    />
    <div
      class="flex-shrink-0 md:hidden cursor-pointer font-medium text-[20px]"
      @click="toggleMenu"
    >
      <i class="fa-solid fa-list"></i>
    </div>
  </div>
  <transition name="slide-fade">
    <div
      v-if="isVisible"
      class="mt-2 ml-2 mb-2 py-2 w-1/2 h-full rounded-lg md:hidden"
    >
      <ProfileMenu
        class="msm:block bg-white"
        :username="user.userName"
        :avatar="user.avatar"
      />
    </div>
  </transition>
  <div
    class="container flex flex-col items-center justify-start md:justify-start md:items-start md:flex-row msm:items-center sm:items-center lg:justify-around py-3 gap-3"
  >
    <ProfileMenu :username="user.userName" :avatar="user.avatar" />
    <div class="col-span-9 sm:col-span-12">
      <OrderCancelCard
        v-for="(item, index) in orderCancels"
        :key="index"
        v-bind="item"
      />
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

const PrefixIcon = (props: { class: string }) =>
  h('i', { class: props.class }, [])

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

const isVisible = ref<boolean>(false)

const toggleMenu = () => {
  isVisible.value = !isVisible.value
}
</script>
