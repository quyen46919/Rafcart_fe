<template>
  <IntroSwiper :slides="sliders" />
  <!-- <div class="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative"> -->
  <!-- products -->
  <!-- <div class="col-span-4"> -->
  <!-- sorting -->
  <!-- <div class="mb-4 flex items-center">
        <button
          class="bg-primary border border-primary text-white px-10 py-3 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition lg:hidden text-sm mr-3 focus:outline-none"
        >
          Filter
        </button>
        <select
          class="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
        >
          <option>Default sorting</option>
          <option>Price low-high</option>
          <option>Price high-low</option>
          <option>Latest product</option>
        </select>
        <div class="flex gap-2 ml-auto">
          <div
            :class="
              'border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer ' +
              [targetDisplayType === 'col' ? 'border border-primary text-white bg-primary' : '']
            "
            @click="handleChangeDisplayType('col')"
          >
            <i class="fas fa-th"></i>
          </div>
          <div
            :class="
              'border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer ' +
              [targetDisplayType === 'row' ? 'border border-primary text-white bg-primary' : '']
            "
            @click="handleChangeDisplayType('row')"
          >
            <i class="fas fa-list"></i>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="container py-16">
    <div class="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">
      <ServiceCard
        v-for="service in serviceCards"
        :image="service.image"
        :title="service.title"
        :description="service.description"
      />
    </div>
  </div>
  <div class="container flex flex-col lg:flex-row gap-6 max-h-[228px] max-w-[100% px-16]">
    <OfferProductCard
      class="max-h-[288px]"
      v-for="offer in offerProducts"
      :key="offer.label"
      :offer="offer.offer"
      :label="offer.label"
      :subLabel="offer.subLabel"
      :href="offer.href"
      :urlImage="offer.urlImage"
      :altImage="offer.altImage"
    />
  </div>
  <div class="container pb-16 flex flex-col mt-[412px] lg:mt-0">
    <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6 pt-6">shop by category</h2>
    <div v-if="categories.length" class="grid xl:grid-cols-3 md:grid-cols-2 gap-3">
      <IntroCategoryBox
        v-for="category in categories"
        :id="category.id"
        :name="category.name"
        :thumbnail_url="category.thumbnail_url"
        :slug="category.slug"
      />
    </div>
    <div v-else>Loading categories...</div>
  </div>
  <div class="container xl:!max-w-[1300px] !px-0 sm:px-4 m-auto pb-16">
    <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6 ml-4 xl:ml-[44px]">top new arrival</h2>
    <div v-if="verticalProducts" class="flex items-center gap-3">
      <div class="min-w-[30px] min-h-[30px] flex justify-center items-center shadow-md rounded-full" @click="slidePrev">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
      <swiper
        ref="swiperRef"
        :slides-per-view="1"
        :space-between="10"
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="false"
        :autoplay="{ delay: 3000 }"
        :modules="modules"
        @swiper="setSwiperInstance"
        :breakpoints="{
          576: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }"
        class="w-full h-[370px] arrival"
      >
        <swiper-slide v-for="(product, index) in verticalProducts" :key="index">
          <VerticalProductCard
            :key="index"
            :tag="product.tag"
            :thumbnail="product.thumbnail"
            :name="product.name"
            :description="product.description"
            :price="product.price"
            :isWishlist="product.isWishlist"
            :href="product.href"
            :comments="product.comments"
            :onAddToCart="product.onAddToCart"
            :onViewDetail="product.onViewDetail"
            :onWishlist="product.onWishlist"
          />
        </swiper-slide>
      </swiper>
      <div class="min-w-[30px] min-h-[30px] flex justify-center items-center shadow-md rounded-full" @click="slideNext">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
    </div>
    <div v-else>Loading categories...</div>
  </div>
  <div class="container pb-16">
    <SaleOffProductCard
      :offer="saleOffProduct.offer"
      :label="saleOffProduct.label"
      :subLabel="saleOffProduct.subLabel"
      :imageUrl="saleOffProduct.imageUrl"
      :alt="saleOffProduct.alt"
      :imageInText="saleOffProduct.imageInText"
    />
  </div>
  <div class="container pb-16">
    <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
    <div class="">
      <div v-if="recommends.length" class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        <VerticalProductCard
          v-for="product in recommends"
          :key="product.tag"
          :tag="product.tag"
          :thumbnail="product.thumbnail"
          :name="product.name"
          :description="product.description"
          :price="product.price"
          :isWishlist="product.isWishlist"
          :href="product.href"
          :comments="product.comments"
          :onAddToCart="product.onAddToCart"
          :onViewDetail="product.onViewDetail"
          :onWishlist="product.onWishlist"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IntroSwiper from '@/components/molecules/IntroSwiper/SwiperContainer.vue'
import VerticalProductCard from '@/components/molecules/VerticalProductCard/VerticalProductCard.vue'
import { offerProducts, recommends, saleOffProduct, serviceCards, sliders, verticalProducts } from '@/faker/home'
import categories from '@/faker/home/categories'
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
const modules = [Navigation]
const swiperRef = ref(null)
const swiperInstance = ref(null)
const setSwiperInstance = (swiper) => {
  swiperInstance.value = swiper
}
const slidePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}
const slideNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}
</script>
