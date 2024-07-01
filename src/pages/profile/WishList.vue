<template>
  <breadcrumb class="!justify-start" :breadcrumbs="breadcrumbs" />
  <div class="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    <ProfileMenu :username="userCurrent?.userName || ''" :avatar="userCurrent?.avatar || ''" />
    <div class="col-span-9 mt-6 lg:mt-0 space-y-4">
      <template v-for="item in products">
        <WishlistProductCard
          :productThumbnail="item?.thumbnail || ''"
          :productName="item?.name || ''"
          :productPrice="item?.price || 0"
          :urlDetail="`/product/${item?.slug}`"
          :isStock="(item?.amount || 0) > 0"
          :onDeleteToWishlist="() => {}"
          :onAddToCart="() => {}"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, onMounted, ref } from 'vue'
import UserInfo from '@/interfaces/user'
import user from '@/faker/auth/user'
import cards from '@/faker/wishlist/wishlist'
import CardProps from '@/interfaces/card'

const userCurrent = ref<Partial<UserInfo>>()
const products = ref<Partial<CardProps>[]>()

const breadcrumbs = [
  {
    url: '/',
    label: 'Homepage',
    prefixIcon: h('i', { class: 'fas fa-home mr-2' })
  },
  {
    url: '/wishlist',
    label: 'Wishlist'
  }
]

onMounted(() => {
  userCurrent.value = user
  products.value = cards
})
</script>
