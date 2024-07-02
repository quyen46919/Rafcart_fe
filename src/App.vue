<script setup lang="ts">
import CommmonHeader from '@/components/layouts/Header/Header.vue'
import Navbar from '@/components/layouts/Navbar/Navbar.vue'
import CommonFooter from '@/components/layouts/Footer/Footer.vue'
import MobileMenu from '@/components/layouts/MobileMenu/MobileMenu.vue'
// import MobileSidebarMenu from '@/components/layouts/MobileSidebarMenu/MobileSidebarMenu.vue'
import { themeVars } from './theme'
</script>

<template>
  <van-config-provider :theme-vars="themeVars" theme-vars-scope="global">
    <CommmonHeader />
    <Navbar />
    <!-- <MobileMenu /> -->
    <!-- <MobileSidebarMenu /> -->
    <RouterView />
    <CommonFooter />
  </van-config-provider>
</template>
