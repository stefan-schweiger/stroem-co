<script setup lang="ts">
import { ref } from 'vue';
import analogItems from '../data/analog';

import Carousel from '../components/Carousel.vue';

const items = ref(analogItems);
</script>

<template>
  <Carousel :items="items"></Carousel>
</template>
