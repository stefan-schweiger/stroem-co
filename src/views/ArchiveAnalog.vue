<script setup lang="ts">
import { ref } from "vue";

import analogItems from "@/data/analog";
import Gallery from "@/components/Gallery.vue";

const items = ref(analogItems);
</script>

<template>
  <Gallery :items="items" :route="'Analog'"></Gallery>
</template>
