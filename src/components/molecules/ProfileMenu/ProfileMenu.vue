<template>
  <div class="col-span-3">
    <div class="px-4 py-3 w-[280px] h-[66px] shadow flex items-center gap-4">
      <div class="flex-shrink-0">
        <img :src="props?.avatar" class="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover" />
      </div>
      <div>
        <p class="text-gray-600 text-base">Hello,</p>
        <h4 class="text-gray-800 w-40 text-ellipsis overflow-hidden whitespace-nowrap text-lg capitalize font-medium">
          {{ props?.username }}
        </h4>
      </div>
    </div>

    <div class="mt-6 bg-white shadow rounded w-[280px] p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
      <div
        v-for="menuItem in menuList"
        :key="menuItem.id"
        class="space-y-1 pl-8"
        :class="{ 'pt-4': menuItem.id !== 1 }"
      >
        <router-link
          :to="menuItem.url"
          class="relative text-gray-800 font-medium capitalize hover:text-primary transition block"
          style="cursor: pointer"
        >
          {{ menuItem.label }}
          <span class="absolute -left-8 top-0 text-base">
            <i :class="menuItem.icon"></i>
          </span>
        </router-link>
        <div v-for="subItem in menuItem.subItems" :key="subItem.url">
          <router-link
            :to="subItem.url"
            class="hover:text-primary transition capitalize block"
            style="cursor: pointer"
            >{{ subItem.label }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ROUTES from '@/router/domain-routes'

interface ProfileMenuProps {
  username: string
  avatar: string
}

const props = withDefaults(defineProps<ProfileMenuProps>(), {})

const menuList = [
  {
    id: 1,
    url: ROUTES.ACCOUNT,
    label: 'Manage account',
    icon: 'far fa-address-card',
    subItems: [
      { url: ROUTES.PROFILE, label: 'Profile information' },
      { url: ROUTES.MANAGE_ADDRESS, label: 'Manage address' },
      { url: ROUTES.CHANGE_PASSWORD, label: 'Change password' }
    ]
  },
  {
    id: 2,
    url: ROUTES.ORDER_COMPLETED,
    label: 'My order history',
    icon: 'fas fa-gift',
    subItems: [
      { url: ROUTES.ORDER_CANCELLED, label: 'My returns' },
      { url: ROUTES.ORDER_CANCELLED, label: 'My cancellations' },
      { url: ROUTES.ORDER_COMPLETED, label: 'My reviews' }
    ]
  },
  {
    id: 3,
    url: ROUTES.CHECKOUT,
    label: 'Payment methods',
    icon: 'far fa-credit-card',
    subItems: [{ url: ROUTES.CART, label: 'Voucher' }]
  },
  {
    id: 4,
    url: ROUTES.WISHLIST,
    label: 'My wishlist',
    icon: 'far fa-heart',
    subItems: []
  },
  {
    id: 5,
    url: ROUTES.LOGIN,
    label: 'Logout',
    icon: 'fas fa-sign-out-alt',
    subItems: []
  }
]
</script>
