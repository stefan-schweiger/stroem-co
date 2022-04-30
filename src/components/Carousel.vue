<script setup lang="ts">
import { Ref, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel } from "swiper";

const disableScroll = ref(false);
const currentItem = ref(0);

const modules = [Mousewheel];

const props = defineProps({
  items: Array,
});

const route = useRoute();
const initialItem = ref(0);
const carouselSwiper: Ref<any> = ref(null);

const getIndex = (hash: string): number | undefined => {
  const num = Number(hash.substring(1));

  if (Number.isInteger(num)) {
    return num;
  }
};

const onSwiper = (swiper: any) => {
  carouselSwiper.value = swiper;

  if (route.hash && getIndex(route.hash) != null) {
    carouselSwiper.value?.slideTo(getIndex(route.hash));
  }
};

watch(
  () => route.hash,
  (hash) => {
    carouselSwiper.value.slideTo(getIndex(hash));
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
        class="h-screen pt-16 md:pt-24 px-4 pb-4 flex flex-col items-center"
        :style="{
          background: item.background,
          color: item.color,
        }"
      >
        <div class="flex-1 flex items-center">
          <img :src="item.image" class="carousel-image flex-1" />
        </div>
        <span>{{ item.name }}</span>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.carousel-image {
  max-height: calc(100vh - 7rem);
}

@screen md {
  .carousel-image {
    max-height: calc(100vh - 9rem);
  }
}
</style>
