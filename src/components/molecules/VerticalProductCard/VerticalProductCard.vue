<template>
  <div class="w-full min-w-[272px] group flex flex-col justify-start items-start shadow-md rounded-md overflow-hidden">
    <div class="relative w-full h-auto min-w-[272px] min-h-[202px] overflow-hidden cursor-pointer">
      <img class="absolute z-0 w-full h-full top-0 left-0 rounded-t-md" :src="props.thumbnail" :alt="props.name" />
      <div
        :class="[
          'absolute z-10 p-[15px] top-0 left-0 w-full h-fit flex items-center',
          { 'justify-between': props.tag },
          { 'justify-end': !props.tag }
        ]"
      >
        <div
          v-if="props.tag && typeof props.tag === 'string'"
          class="flex justify-center items-center w-[45px] h-8 bg-primary text-white uppercase rounded-sm"
        >
          {{ props.tag }}
        </div>
        <div
          v-else-if="props.tag && typeof props.tag === 'number' && props.tag > 0"
          :class="[
            'flex justify-center items-center w-[45px] h-8  text-white rounded-sm',
            { 'bg-green-600': typeof props.tag === 'number' && props.tag > 0 && props.tag < 45 },
            { 'bg-orange-300': typeof props.tag === 'number' && props.tag > 45 }
          ]"
        >
          {{ tagPercent }}%
        </div>
        <RButton
          :onClick="props.onWishlist"
          class="bg-white"
          :circle="true"
          variant="icon"
          :prefix-icon="wishlistStatus ? 'fa-regular fa-heart text-primary' : 'fa-solid fa-heart-crack text-primary'"
        />
      </div>
      <div
        class="absolute top-0 left-0 z-999 w-full h-full flex items-end rounded-t-md opacity-0 bg-transparent group-hover:bg-[#2B2D42] group-hover:opacity-70 transition duration-300"
      ></div>
      <RButton
        class="absolute bottom-0 rounded-none left-0 w-full bg-transparent group-hover:bg-[#2B2D42] border-0 opacity-0 group-hover:opacity-100 text-white transition duration-300"
        variant="contained"
        content="Quick View"
        :onClick="onViewDetail"
        prefix-icon="fa-regular fa-eye "
      />
    </div>
    <div class="w-full p-4">
      <RouterLink
        :to="props.href"
        class="w-full truncate block uppercase hover:text-primary cursor-pointer transition duration-300"
        >{{ props.name }}
      </RouterLink>
      <p class="w-full break-words line-clamp-2">{{ props.description }}</p>
      <p class="text-primary text-[20px] font-bold">
        {{ props.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}
      </p>
      <div class="flex justify-start items-center leading-3 gap-3">
        <Rating :maxRating="5" :readOnly="true" :size="16" :rating="averageRating" />
        <p class="text-[15px]">({{ props.comments?.length }})</p>
      </div>
    </div>
    <RButton
      class="w-full rounded-none bg-primary hover:bg-transparent text-white hover:text-primary transition duration-300"
      variant="contained"
      content="Add To Cart"
      :onClick="onAddToCart"
      prefix-icon="fa-solid fa-cart-shopping"
    />
  </div>
</template>
<script setup lang="ts">
import RButton from '@/components/atoms/RButton/RButton.vue'
import Rating from '@/components/atoms/Rating/Rating.vue'
import { VerticalProductCardProp } from '@/interfaces'
import { computed } from 'vue'
const props = withDefaults(defineProps<VerticalProductCardProp>(), {})
const tagPercent = computed(() => (props.tag && typeof props.tag === 'number' && props.tag > 100 ? 100 : props.tag))
const wishlistStatus = computed(() => props.isWishlist)

const averageRating = computed(() => {
  if (!props?.comments) return 0
  return Number(props.comments?.map((item) => item.rating)?.reduce((a, b) => a + b, 0) / props.comments?.length)
})
</script>
