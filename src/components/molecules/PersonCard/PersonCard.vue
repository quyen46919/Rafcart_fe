<template>
  <div class="max-w-[275px] bg-white rounded-lg">
    <RouterLink :to="props.url">
      <img class="rounded-t-lg w-full h-[285px] object-cover" :src="props.img" @error="errImageAlt" />
    </RouterLink>
    <h3 class="pt-3 mx-4 text-ellipsis overflow-hidden whitespace-nowrap text-sm text-center font-medium text-gray-900">
      {{ props.name }}
    </h3>
    <p class="pt-0 mx-4 text-sm text-center text-gray-600 text-ellipsis overflow-hidden whitespace-nowrap">
      {{ props.title }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface PersonCardProps {
  img: string
  name: string
  title: string
  url: string
  placeholderAltImg: string
}

const props = withDefaults(defineProps<PersonCardProps>(), {})

function errImageAlt(event: Event) {
  const imgElement = event.target as HTMLImageElement
  imgElement.src = props.placeholderAltImg
}
</script>
