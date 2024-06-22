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
        <RButton
          class="border-none text-gray-500 hover:text-primary"
          :onClick="onDeleteToWishlist"
          variant="icon"
          prefix-icon="fa-solid fa-trash"
        />
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
