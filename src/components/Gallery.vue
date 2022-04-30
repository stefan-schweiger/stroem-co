<script setup lang="ts">
const props = defineProps({
  items: Array,
  route: String,
});
</script>

<template>
  <div
    class="pt-16 md:pt-24 px-4 pb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
  >
    <div
      v-for="(item, index) in props.items"
      :key="index"
      class="relative overflow-hidden"
    >
      <router-link :to="{ name: route, hash: '#' + (index + 1) }">
        <div
          :style="{
            'background-image': 'url(' + item.image + ')',
          }"
          class="aspect-square bg-contain hover:scale-110 hover:saturate-[.25] transition-all duration-700"
        ></div>
      </router-link>
    </div>
  </div>
</template>
