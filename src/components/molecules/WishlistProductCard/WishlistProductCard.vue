<template>
  <div
    class="xl:w-full w-fit md:w-fit p-[21px] flex flex-col md:flex-row md:items-center items-start md:justify-between justify-start gap-[30px] border-[1px] rounded-md border-gray-300 transition duration-500"
  >
    <div class="flex flex-col flex-grow md:flex-row md:items-center items-start gap-[30px]">
      <img :src="props.productThumbnail" :alt="props.productThumbnail" class="max-w-[80px] max-h-[80px]" />
      <div class="w-full truncate flex flex-col justify-start">
        <RouterLink
          :to="props.urlDetail"
          class="md:max-w-[560px] max-w-[320px] !block text-wrap xl:text-nowrap md:line-clamp-1 uppercase truncate line-clamp-3 cursor-pointer hover:text-primary transition duration-300"
          >{{ props.productName }}</RouterLink
        >
        <p>
          Availability:
          <span :class="[{ 'text-green-500': props.isStock }, { 'text-red-500': !props.isStock }]">{{
            props.isStock ? StockStatus.InStock : StockStatus.OutOfStock
          }}</span>
        </p>
      </div>
    </div>

    <div class="w-full md:w-fit flex flex-col md:items-center items-start md:flex-row justify-end gap-[21px]">
      <p class="font-bold text-[18px] text-primary">
        {{ props.productPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}
      </p>
      <div class="w-full flex items-center md:justify-end justify-between md:gap-[21px] sm:gap-0">
        <RButton
          :onClick="props.onAddToCart"
          :class="[
            'bg-primary  transition duration-500 max-h-[39px] min-w-[135px] text-nowrap',
            { 'hover:bg-transparent hover:text-primary': props.isStock }
          ]"
          :is-disabled="!props.isStock"
          variant="contained"
          content="Add To Cart"
          prefix-icon="fa-solid fa-cart-shopping "
        />
        <button class="text-gray-500 hover:text-primary transition" @click="props.onDeleteToWishlist">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
            <g fill="currentColor">
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
              ></path>
              <path
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import RButton from '@/components/atoms/RButton/RButton.vue'
enum StockStatus {
  InStock = 'in stock',
  OutOfStock = 'out of stock'
}
interface WishlistProductCartProp {
  productThumbnail: string
  productName: string
  productPrice: number
  urlDetail: string
  isStock: boolean
  onDeleteToWishlist: () => void
  onAddToCart: () => void
}
const props = withDefaults(defineProps<WishlistProductCartProp>(), {})
</script>
