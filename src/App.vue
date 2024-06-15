<script setup lang="ts">
import CommmonHeader from '@/components/layouts/Header.vue'
import Navbar from '@/components/layouts/Navbar.vue'
import CommonFooter from '@/components/layouts/Footer.vue'
import MobileMenu from '@/components/layouts/MobileMenu.vue'
import MobileSidebarMenu from '@/components/layouts/MobileSidebarMenu.vue'

</script>

<template>
  <CommmonHeader />
  <Navbar />
  <MobileMenu />
  <MobileSidebarMenu />
  <RouterView />
  <CommonFooter />
</template>
