<script setup lang="ts">
import { ref } from 'vue';

import defaultItems from '../data/default';
import Gallery from '../components/Gallery.vue';

const items = ref(defaultItems);
</script>

<template>
  <Gallery :items="items" :route="'Home'"></Gallery>
</template>
