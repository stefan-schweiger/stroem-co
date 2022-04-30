<script setup lang="ts">
import { ref } from "vue";
import animationItems from "@/data/animation";

import Carousel from "@/components/Carousel.vue";

const items = ref(animationItems);
</script>

<template>
  <Carousel :items="items"></Carousel>
</template>
