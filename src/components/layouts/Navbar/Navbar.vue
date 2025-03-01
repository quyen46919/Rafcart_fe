<template>
  <nav class="bg-gray-800 lg:block">
    <div class="container !max-w-full sm:w-auto">
      <div class="flex flex-col sm:flex-row">
        <div class="px-8 py-4 bg-primary hidden lg:flex items-center cursor-pointer group relative">
          <span class="text-white">
            <i class="fas fa-bars"></i>
          </span>
          <span class="capitalize ml-2 text-white">All categories</span>

          <div
            class="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed"
          >
            <RouterLink
              class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
              v-for="link in linkList"
              :key="link.id"
              :to="link.url"
            >
              <img :src="link.image" class="w-5 h-5 object-contain" />
              <span class="ml-6 text-gray-600 text-sm">{{ link.name }}</span>
            </RouterLink>
          </div>
        </div>
        <div class="py-4 lg:py-0 pl-0 lg:pl-12 flex items-center justify-between flex-grow">
          <div class="flex items-center space-x-3 sm:space-x-6 text-base capitalize">
            <RouterLink to="/" class="text-gray-200 hover:text-white transition">Home</RouterLink>
            <RouterLink to="/about-us" class="text-gray-200 hover:text-white transition">About us</RouterLink>
            <RouterLink to="/contact-us" class="text-gray-200 hover:text-white transition">Contact us</RouterLink>
          </div>
          <div
            v-if="isNotAuthPageAndNotAuthenticated"
            class="ml-auto justify-self-end text-gray-200 hover:text-white transition cursor-pointer"
            @click="handleLogin"
          >
            Login/Register
          </div>
          <div
            v-if="isAuthenticated"
            class="ml-auto justify-self-end text-gray-200 hover:text-white transition cursor-pointer"
            @click="handleLogout"
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import bed from '@/assets/images/icons/bed.svg'
import sofa from '@/assets/images/icons/sofa.svg'
import office from '@/assets/images/icons/office.svg'
import terrace from '@/assets/images/icons/terrace.svg'
import bed2 from '@/assets/images/icons/bed-2.svg'
import restaurant from '@/assets/images/icons/restaurant.svg'
import { computed, ref } from 'vue'
import router from '@/router'

import { useAuth } from '@/store/authStore'
import { isEmpty } from 'lodash'
const authStore = useAuth()

const user = (localStorage.getItem('auth') && (JSON.parse(localStorage.getItem('auth') || '') as any)) || {}
const isAuthenticated = !isEmpty(user)
const url = computed(() => window.location.href)
const isNotAuthPage = computed(() => !(url.value.includes('login') || url.value.includes('signup')))
const isNotAuthPageAndNotAuthenticated = computed(() => !isAuthenticated && isNotAuthPage.value)

const handleLogin = () => {
  router.push('/login')
}

const handleLogout = () => {
  authStore.logout()
  localStorage.removeItem('auth')
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  router.push('/login')
}

const linkList = ref([
  {
    id: '1',
    url: '/filter?category=bed',
    image: bed,
    name: 'Bedroom'
  },
  {
    id: '2',
    url: '/filter?category=sofa',
    image: sofa,
    name: 'Sofa'
  },
  {
    id: '3',
    url: '/filter?category=office',
    image: office,
    name: 'Office'
  },
  {
    id: '4',
    url: '/filter?category=terrace',
    image: terrace,
    name: 'Terrace'
  },
  {
    id: '5',
    url: '/filter?category=bed',
    image: bed2,
    name: 'Bedroom'
  },
  {
    id: '6',
    url: '/filter?category=restaurant',
    image: restaurant,
    name: 'Restaurant'
  }
])
</script>
