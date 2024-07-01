<template>
  <div
    class="max-w-[320px] md:max-w-full w-full mx-auto p-[21px] block md:flex flex-col md:flex-row md:items-center items-start md:justify-between justify-start gap-[30px] border-[1px] rounded-md border-gray-300 transition duration-500"
  >
    <div class="grid md:grid-cols-[80px_auto] gap-[30px]">
      <img
        :src="props.productThumbnail"
        :alt="props.productThumbnail"
        class="max-w-[80px] max-h-[80px] w-full h-full object-cover"
      />
      <div class="w-full truncate block md:flex flex-col justify-start">
        <RouterLink
          :to="props.urlDetail"
          class="text-wrap xl:text-nowrap uppercase lg:truncate lg:line-clamp-none md:line-clamp-1 line-clamp-3 cursor-pointer hover:text-primary transition duration-300"
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
        {{ formatPrice(props?.productPrice) }}
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
import Select from '@/components/atoms/Select/Select.vue'
import { formatPrice } from '@/shared/utils/format'
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
