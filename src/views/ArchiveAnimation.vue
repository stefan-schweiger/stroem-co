<script setup lang="ts">
import { ref } from "vue";

import animationItems from "@/data/animation";
import Gallery from "@/components/Gallery.vue";

const items = ref(animationItems);
</script>

<template>
  <Gallery :items="items" :route="'Animation'"></Gallery>
</template>
