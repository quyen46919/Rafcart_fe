<template>
  <div
    @click.stop="props?.onCloseMenu"
    class="transition duration-500 fixed lg:static top-0 lg:top-auto left-0 lg:left-auto opacity-0 lg:opacity-100 invisible lg:visible bg-black lg:bg-white bg-opacity-40 lg:bg-opacity-100 w-full lg:w-auto h-full lg:h-auto z-50 shadow lg:shadow-none"
    :class="{
      '!opacity-100 !visible': isSmallScreen && props.showMenuMobile
    }"
  >
    <div
      @click.stop
      class="relative group/list max-w-[20rem] lg:max-w-[12.5rem] bg-white transition duration-300 translate-x-[-100%] lg:translate-x-0 h-screen lg:h-auto overflow-y-auto lg:overflow-visible"
      :class="{
        '!translate-x-[0%]': isSmallScreen && props.showMenuMobile
      }"
    >
      <div
        class="relative flex lg:group-hover/list:flex items-center justify-center gap-6 px-4 py-3 bg-primary lg:bg-secondary text-white text-xl lg:text-base font-medium lg:rounded-md truncate"
        :class="{ 'lg:hidden': props?.hiddenDesktop }"
      >
        <i class="fa-solid fa-bars hidden lg:block"></i>
        <span class="truncate">All categories</span>
        <span @click.stop="props?.onCloseMenu" class="flex justify-center items-center">
          <i class="fa-solid fa-xmark block lg:hidden absolute right-4 cursor-pointer"></i>
        </span>
      </div>
      <!-- Level 1 -->
      <ul
        :class="{
          'lg:hidden lg:group-hover/list:!block lg:animate-moveToUp': !props?.isExpanded,
          'lg:hidden': props?.hiddenDesktop
        }"
        class="shadow-[0_0_5px_rgba(0,0,0,0.13)] rounded-sm w-full lg:mt-[10px] py-4 relative"
      >
        <li
          v-for="category in categories"
          :key="category?.id"
          class="group/item [&:not(:last-child)]:border-b border-gray-300 border-dotted"
          @click.stop="handleToggleItem(category?.id, 'category')"
        >
          <RouterLink
            :to="category?.subcategories && category?.subcategories.length ? '#' : `/category/${category?.slug}`"
            class="flex items-center justify-between px-5 py-3 lg:pl-6 lg:pr-4 hover:bg-gray-200 cursor-pointer"
          >
            <div class="flex items-center gap-6 truncate">
              <span v-html="category?.icon_url" class="opacity-40 w-[22px] h-[22px]"></span>
              <span class="truncate flex-1">{{ category?.name }}</span>
            </div>
            <span
              v-if="category?.subcategories && category?.subcategories.length"
              class="lg:group-hover/item:translate-x-1 transition duration-300 text-gray-600 rotate-90 lg:rotate-0"
              :class="{
                '!-rotate-90': isSmallScreen ? expandedCategories.includes(category?.id) : false
              }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </RouterLink>
          <!-- Level 2 -->
          <div
            v-if="
              category?.subcategories &&
              category?.subcategories.length &&
              (isSmallScreen ? expandedCategories.includes(category?.id) : true)
            "
            class="lg:absolute left-full lg:w-[61rem] top-0 lg:hidden lg:group-hover/item:flex lg:animate-unMoveToLeft lg:group-hover/item:animate-moveToLeft bg-white lg:border lg:border-gray-200 lg:rounded-md pr-5 lg:p-5"
          >
            <ul class="flex-1 lg:grid lg:grid-cols-3 gap-y-0 lg:gap-x-3">
              <li
                v-for="subcategory in category?.subcategories"
                :key="subcategory?.id"
                class="relative group/item mb-3"
              >
                <div
                  class="flex justify-between lg:justify-start items-center lg:text-lg lg:font-medium pl-16 lg:pl-0 mb-2 cursor-pointer lg:cursor-default"
                  @click.stop="handleToggleItem(subcategory?.id, 'subcategory')"
                >
                  <span class="truncate flex-1">{{ subcategory?.name }}</span>
                  <span class="block lg:hidden text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 256 256"
                      v-if="
                        subcategory?.subcategories &&
                        subcategory?.subcategories.length &&
                        expandedSubcategories.includes(subcategory?.id)
                      "
                    >
                      <path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" v-else>
                      <path
                        fill="currentColor"
                        d="M12.75 11.25V5a.75.75 0 0 0-1.5 0v6.25H5a.75.75 0 0 0 0 1.5h6.25V19a.76.76 0 0 0 .75.75a.75.75 0 0 0 .75-.75v-6.25H19a.75.75 0 0 0 .75-.75a.76.76 0 0 0-.75-.75Z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <!-- Level 3 -->
                <ul
                  v-if="
                    subcategory?.subcategories &&
                    subcategory?.subcategories.length &&
                    (isSmallScreen ? expandedSubcategories.includes(subcategory?.id) : true)
                  "
                  class="left-full top-0 lg:group-hover/item:flex bg-white flex-col gap-2"
                >
                  <li
                    v-for="subSubcategory in subcategory?.subcategories"
                    :key="subSubcategory?.id"
                    class="hover:text-primary cursor-pointer pl-20 lg:pl-0"
                  >
                    <RouterLink
                      :to="`/category/${category?.slug}/${subSubcategory?.slug}`"
                      class="block w-full truncate lg:leading-5"
                    >
                      {{ subSubcategory?.name }}
                    </RouterLink>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="lg:grid lg:grid-cols-2 gap-3 w-1/4 hidden">
              <li v-for="(brand, index) in brands" :key="index" class="relative lg:group/item">
                <RouterLink
                  :to="`/brand/${brand?.slug}`"
                  class="flex items-center p-2 cursor-default shadow-[0_0_5px_rgba(0,0,0,0.13)] rounded text-center justify-center h-11 overflow-hidden"
                >
                  <img loading="lazy" :src="brand?.icon_url" alt="brand" class="object-cover" />
                </RouterLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import brands from '@/faker/home/brands'
import Category from '@/interfaces/category'
import { onMounted, onUnmounted, ref } from 'vue'

interface CategoryMenuProp {
  isExpanded: boolean
  hiddenDesktop: boolean
  showMenuMobile: boolean
  categories: Category[]
  onCloseMenu: Function
}

const props = withDefaults(defineProps<CategoryMenuProp>(), {
  isExpanded: true,
  hiddenDesktop: false,
  showMenuMobile: true
})

const expandedCategories = ref<string[]>([])
const expandedSubcategories = ref<string[]>([])
const isSmallScreen = ref<boolean>(window.innerWidth < 992)

const handleResize = () => {
  isSmallScreen.value = window.innerWidth < 992
}

const handleToggleItem = (id: string, type: 'category' | 'subcategory') => {
  if (!isSmallScreen.value) return

  const expandedList = type === 'category' ? expandedCategories : expandedSubcategories
  if (expandedList.value.includes(id)) {
    expandedList.value = expandedList.value.filter((itemId) => itemId !== id)
  } else {
    if (type === 'category') {
      expandedCategories.value = [id]
      expandedSubcategories.value = []
    } else {
      expandedSubcategories.value = [id]
    }
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
}
</style>
