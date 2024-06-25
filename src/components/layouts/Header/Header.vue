<template>
  <!-- header -->
  <header class="py-4">
    <div class="container hidden lg:flex items-center justify-between">
      <!-- logo -->
      <router-link to="/" class="block w-32">
        <img :src="logo" alt="logo" class="w-full" />
      </router-link>
      <!-- logo end -->

      <ul class="flex flex-1 pl-16">
        <li v-for="(item, index) in menuList" :key="index" class="relative group/1">
          <router-link
            :to="item?.url"
            class="flex items-center gap-2 text-base truncate font-medium p-3 hover:text-primary cursor-pointer"
          >
            {{ item?.name }}
            <span v-if="item?.subChildren">
              <i class="fa-solid fa-chevron-down w-3"></i>
            </span>
          </router-link>
          <ul
            v-if="item?.subChildren"
            class="absolute top-full py-3 rounded shadow hidden group-hover/1:grid"
            :class="{
              'grid-cols-3 w-max': item?.subChildren[0].subChildren
            }"
          >
            <li v-for="(subItem, index) in item?.subChildren" :key="index" class="min-w-36">
              <router-link
                :to="subItem?.url"
                class="w-full text-base truncate block py-1 px-4 cursor-default"
                :class="{
                  'hover:text-primary cursor-pointer': subItem?.url
                }"
              >
                {{ subItem?.name }}
              </router-link>
              <ul>
                <li v-for="(subSubItem, index) in subItem?.subChildren" :key="index">
                  <router-link
                    :to="subSubItem?.url"
                    class="w-full text-base truncate block py-1 px-4 hover:text-primary cursor-pointer"
                    >{{ subSubItem?.name }}</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <div class="flex items-center gap-4">
        <div class="text-base font-medium truncate block">
          <router-link to="/login" class="hover:text-primary cursor-pointer">Login</router-link>
          <span>/</span>
          <router-link to="/register" class="hover:text-primary cursor-pointer">Register</router-link>
        </div>
        <div class="flex gap-4">
          <template v-for="select in selectList">
            <Select
              class="w-auto"
              optionStyle=""
              selectStyle="!border-0 font-medium hover:text-primary group gap-2 transition"
              iconStyle="group-hover:text-primary transition text-xs w-4"
              :value="select?.defaultValue"
              :valueList="select?.valueList"
            ></Select>
          </template>
        </div>
      </div>
    </div>

    <!-- Header mobile -->
    <div class="block lg:hidden">
      <van-action-bar>
        <van-action-bar-icon icon="wap-nav" text="Menu" />
        <van-action-bar-icon icon="bars" text="Categories" @click.stop="handleToggleMenu" />
        <router-link to="/search">
          <van-action-bar-icon icon="search" text="Search" />
        </router-link>
        <router-link to="/cart">
          <van-action-bar-icon icon="cart-o" text="Cart" badge="0" />
        </router-link>
      </van-action-bar>
    </div>
    <!-- Header mobile end -->

    <!-- category menu -->
    <category-menu
      :categories="categories"
      :hidden-desktop="true"
      :show-menu-mobile="toggleMenu"
      :on-close-menu="handleCloseMenu"
    ></category-menu>
    <!-- category menu end -->
  </header>
  <!-- header end -->
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo.svg'
import arrowDown from '@/assets/images/icons/arrow-down.svg'
import categories from '@/faker/home/categories'
import { ref } from 'vue'

interface Item {
  name: string
  url: string
}

interface MenuList extends Item {
  subChildren?: MenuList[]
}

const toggleMenu = ref<boolean>(false)

const handleToggleMenu = () => (toggleMenu.value = !toggleMenu.value)
const handleCloseMenu = () => (toggleMenu.value = false)

const menuList: MenuList[] = [
  {
    name: 'Home',
    url: '/',
    subChildren: [
      { name: 'Home page 1', url: '/' },
      { name: 'Home page 2', url: '/' },
      { name: 'Home page 3', url: '/' }
    ]
  },
  {
    name: 'Shop',
    url: '/shop',
    subChildren: [
      { name: 'List view', url: '/list-view' },
      { name: 'Grid view', url: '/grid-view' },
      { name: 'Grid view 2', url: '/grid-view-2' },
      { name: 'Shopping cart', url: '/shopping-cart' },
      { name: 'Product view', url: '/product-view' }
    ]
  },
  {
    name: 'Page',
    url: '/page',
    subChildren: [
      {
        name: 'Others pages',
        url: '',
        subChildren: [
          { name: 'About us', url: '/about-us' },
          { name: 'Contact us', url: '/contact-us' },
          { name: 'Track order', url: '/track-order' },
          { name: 'FAQ', url: '/faq' },
          { name: '404', url: '/404' }
        ]
      },
      {
        name: 'Account pages',
        url: '',
        subChildren: [
          { name: 'My Account', url: '/my-account' },
          { name: 'Login', url: '/login' },
          { name: 'Register', url: '/register' },
          { name: 'Forgot password', url: '/forgot-password' }
        ]
      },
      {
        name: 'Checkout page',
        url: '',
        subChildren: [
          { name: 'Checkout', url: '/checkout' },
          { name: 'Payment', url: '/payment' },
          { name: 'Wishlist', url: '/wishlist' },
          { name: 'Order complete', url: '/order-complete' }
        ]
      }
    ]
  },
  { name: 'Contact', url: '/contact' }
]

const selectList = [
  {
    defaultValue: {
      value: 'language',
      label: 'Language'
    },
    valueList: [
      {
        value: 'language',
        label: 'Language'
      },
      {
        value: 'english',
        label: 'English'
      },
      {
        value: 'franch',
        label: 'Franch'
      }
    ]
  },
  {
    defaultValue: {
      value: 'language',
      label: 'Language'
    },
    valueList: [
      {
        value: 'currency',
        label: 'Currency'
      },
      {
        value: 'dollar',
        label: 'Dollar'
      },
      {
        value: 'euro',
        label: 'Euro'
      }
    ]
  }
]
</script>

<style>
.van-action-bar {
  justify-content: space-evenly;
}

.van-action-bar-icon {
  font-size: var(--van-padding-sm);
}

.van-action-bar-icon__icon {
  font-size: var(--van-padding-lg);
}
</style>
