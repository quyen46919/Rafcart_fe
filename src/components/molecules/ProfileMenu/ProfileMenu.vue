<template>
  <div class="col-span-3 relative">
    <div class="w-full px-4 py-3 shadow flex items-center">
      <div class="flex-1 flex items-center gap-4">
        <div class="flex-shrink-0">
          <img :src="props?.avatar" class="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover" />
        </div>
        <div class="grid">
          <p class="text-gray-600 text-base">Hello,</p>
          <h4 class="text-gray-800 w-40 truncate text-base capitalize font-medium">
            {{ props?.username }}
          </h4>
        </div>
      </div>
      <r-button
        variant="icon"
        prefix-icon="fa-solid fa-bars"
        class="!text-black !rounded border-primary block lg:hidden"
        :onClick="handleToggleMenu"
      />
    </div>

    <div
      class="fixed top-0 left-0 bottom-0 transition duration-300 -translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100 invisible lg:visible lg:relative lg:mt-6 bg-white shadow rounded max-w-[300px] w-full lg:w-full p-4 divide-y divide-gray-200 space-y-4 text-gray-600 z-10"
      :class="{
        '!translate-x-0 !opacity-100 !visible': toggleMenu
      }"
    >
      <div class="flex-1 flex items-center gap-4 lg:hidden relative">
        <div class="flex-shrink-0">
          <img :src="props?.avatar" class="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover" />
        </div>
        <div class="grid">
          <p class="text-gray-600 text-base">Hello,</p>
          <h4 class="text-gray-800 w-40 truncate text-base capitalize font-medium">
            {{ props?.username }}
          </h4>
        </div>
        <button class="absolute top-0 right-0" @click="handleToggleMenu">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div v-for="menuItem in menuList" :key="menuItem.id" class="space-y-1 pl-8 pt-4">
        <router-link
          activeClass="text-primary"
          exactActiveClass="text-primary"
          :to="menuItem.url"
          class="relative text-gray-800 font-medium capitalize hover:text-primary transition block cursor-pointer"
        >
          {{ menuItem.label }}
          <span class="absolute -left-8 top-0 text-base">
            <i :class="menuItem.icon"></i>
          </span>
        </router-link>
        <div v-for="subItem in menuItem.subItems" :key="subItem.url">
          <router-link
            activeClass="text-primary"
            exactActiveClass="text-primary"
            :to="subItem.url"
            class="hover:text-primary transition capitalize block cursor-pointer"
            >{{ subItem.label }}</router-link
          >
        </div>
      </div>
    </div>
    <div
      class="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.4)] opacity-0 invisible transition block lg:hidden"
      :class="{
        '!opacity-100 !visible': toggleMenu
      }"
      :onClick="handleToggleMenu"
    ></div>
  </div>
</template>

<script setup lang="ts">
import ROUTES from '@/router/domain-routes'
import { ref } from 'vue'

interface ProfileMenuProps {
  username: string
  avatar: string
}

const props = withDefaults(defineProps<ProfileMenuProps>(), {})
const toggleMenu = ref<boolean>(false)

const handleToggleMenu = () => (toggleMenu.value = !toggleMenu.value)

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
      { url: ROUTES.ORDER_COMPLETED, label: 'My returns' },
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
