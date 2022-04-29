<script setup lang="ts">
import Inprint from './Inprint.vue';
</script>

<template>
  <div
    class="
      fixed
      z-40
      inset-0
      bg-white/60
      pt-16
      px-4
      backdrop-blur-xl
      animate-fade-in
    "
  >
    <ul class="text-right text-3xl">
      <li class="hover:text-primary">
        <router-link active-class="text-primary" to="/archive"
          >ARCHIVE</router-link
        >
      </li>
      <li class="hover:text-primary">
        <router-link active-class="text-primary" to="/archive-animation"
          >ANIMATION</router-link
        >
      </li>
      <li class="hover:text-primary">
        <router-link active-class="text-primary" to="/archive-analog"
          >ANALOG</router-link
        >
      </li>
    </ul>
    <div class="w-1/2 absolute bottom-4">
      <Inprint></Inprint>
    </div>
  </div>
</template>
