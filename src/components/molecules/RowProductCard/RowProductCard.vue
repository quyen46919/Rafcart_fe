<template>
  <div class="flex flex-col md:flex-row border rounded-sm w-full max-w-[875px] overflow-hidden">
    <img :src="thumbnail" alt="Product Image" class="w-full md:w-[276px] h-[260px] object-cover" />
    <div class="flex flex-col justify-between w-full p-4 md:p-6">
      <div>
        <div class="text-xl font-semibold truncate w-full md:w-[520px] overflow-hidden" :title="name">
          {{ name }}
        </div>
        <div class="flex items-center space-x-2 my-1">
          <span class="text-red-500 font-semibold">${{ calculatePrice(price, discount) }}</span>
          <span v-if="discount > 0" class="line-through text-gray-400">${{ price.toFixed(2) }}</span>
        </div>
        <div class="flex items-center space-x-1 my-4">
          <Rating :max-rating="5" :rating="averageRating" :read-only="true" />
          <span class="text-gray-600">({{ props?.comments?.length }})</span>
        </div>
        <div class="text-gray-600 line-clamp-2 mb-2 w-full md:w-[520px]">
          {{ description }}
        </div>
      </div>
      <div class="flex gap-4 mt-4 md:mt-0">
        <RButton
          @click="onAddToCart"
          class="h-[39px] w-full md:w-[135px] bg-primary transition duration-300 text-nowrap hover:bg-transparent hover:text-primary hover:border-primary"
          variant="contained"
          content="Add To Cart"
          prefix-icon="fa-solid fa-cart-shopping"
        />
        <RButton
          v-if="!isAlreadyInWishlist"
          @click="handleAddToWishlist"
          variant="outlined"
          content="Wishlist"
          prefix-icon="fa-regular fa-heart"
          class="h-[39px] w-full md:w-[135px] bg-transparent border-primary text-nowrap text-primary hover:bg-primary hover:text-white transition duration-300"
        />
        <RButton
          v-if="isAlreadyInWishlist"
          @click="handleRemoveFromWishlist"
          variant="contained"
          content="Wishlist"
          prefix-icon="fa-regular fa-heart"
          class="h-[39px] w-full md:w-[135px] bg-primary text-white"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RButton from '@/components/atoms/RButton/RButton.vue'
import Rating from '@/components/atoms/Rating/Rating.vue'
import { useWishList } from '@/store/wishlistStore'
import { computed } from 'vue'
import CardProps from '@/interfaces/card'

const wishlistStore = useWishList()

interface ProductProps extends CardProps {
  onAddToCart: () => void
}

const props = defineProps<ProductProps>()

const isAlreadyInWishlist = computed(() => wishlistStore.isAlreadyInWishlist(props?.id))
const handleAddToWishlist = () => wishlistStore.addToWishlist(props)
const handleRemoveFromWishlist = () => wishlistStore.removeFromWishlist(props?.id)

const calculatePrice = (price: number, discount: number) => {
  if (discount > 0) {
    return (price - (price * discount) / 100).toFixed(2)
  }
  return price.toFixed(2)
}

const averageRating = computed(() => {
  if (!props?.comments) return 0
  return Number(props.comments?.map((item) => item.rating)?.reduce((a, b) => a + b, 0) / props.comments?.length)
})
</script>
