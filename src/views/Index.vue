<script setup lang="ts">
import { ref } from 'vue';
import defaultItems from '../data/default';

import Carousel from '../components/Carousel.vue';

const items = ref(defaultItems);
</script>

<template>
  <Carousel :items="items"></Carousel>
</template>
