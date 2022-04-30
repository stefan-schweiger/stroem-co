<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

import Menu from "@/components/Menu.vue";

const route = useRoute();

const showMenu = ref(false);

watch(
  () => route.path,
  () => {
    showMenu.value = false;
  }
);
</script>

<template>
  <header
    class="fixed top-0 h-16 md:h-24 w-full flex flex-row items-center z-50"
  >
    <div class="flex-1 flex flex-row items-baseline justify-between px-4">
      <router-link to="/">
        <h1 class="text-5xl md:text-7xl font-semibold">STROEM</h1>
      </router-link>
      <div @click="showMenu = !showMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="group h-10 w-10 md:h-16 md:w-16 rotate-90 cursor-pointer"
          viewBox="0 0 512 512"
        >
          <svg:style type="text/css">
            <![CDATA[
              .cls-1 {
                fill: #000;
              }
              .cls-2 {
                fill: none;
                stroke-width: 20px;
              }
              .cls-2,
              .cls-3 {
                stroke: #fff;
                stroke-miterlimit: 10;
              }
              .cls-3 {
                fill: #fff;
              }
            ]]>
          </svg:style>
          <circle class="cls-1" cx="256" cy="256" r="256"></circle>
          <line class="cls-2" x1="256" y1="478" x2="256" y2="42"></line>
          <circle
            class="
              cls-3
              transition-transform
              duration-700
              ease-in-out
              group-hover:-translate-y-1/2
            "
            cx="256"
            cy="386"
            r="45"
          ></circle>
        </svg>
      </div>
    </div>
  </header>
  <Menu v-if="showMenu"></Menu>
</template>
