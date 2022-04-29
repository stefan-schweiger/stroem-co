<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Pagination } from 'swiper';

const disableScroll = ref(false);
const currentItem = ref(0);

const modules = [Mousewheel];

const props = defineProps({
  items: Array,
});

const route = useRoute();
const initialItem = ref(0);
const carouselSwiper = ref(null);

const getIndex = (hash) => {
  const num = Number(hash.substring(1));

  if (Number.isInteger(num)) {
    return num;
  }
};

const onSwiper = (swiper) => {
  carouselSwiper.value = swiper;

  if (route.hash && getIndex(route.hash) != null) {
    carouselSwiper.value.slideTo(getIndex(route.hash));
  }
};

watch(
  () => route.hash,
  (e) => {
    carouselSwiper.value.slideTo(getIndex(route.hash));
  }
);
</script>

<template>
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :mousewheel="true"
    :loop="true"
    :speed="1000"
    :modules="modules"
    @swiper="onSwiper"
    class="h-screen"
  >
    <swiper-slide v-for="(item, index) in props.items">
      <div
        class="h-screen pt-16 px-4 pb-4 flex flex-col items-center"
        :style="{
          background: item.background,
          color: item.color,
        }"
      >
        <div class="flex-1 flex items-center">
          <img
            :src="item.image"
            class="flex-1"
            style="max-height: calc(100vh - 6rem)"
          />
        </div>
        <span>{{ item.name }}</span>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.s-carousel::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.s-carousel {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
