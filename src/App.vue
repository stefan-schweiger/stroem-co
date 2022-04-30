<script setup lang="ts">
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Header from "@/components/Header.vue";

import "@/index.css";
</script>

<template>
  <Header></Header>
  <main class="flex-1 h-screen">
    <router-view />
  </main>
</template>

<style scoped></style>
