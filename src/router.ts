import { createWebHistory, createRouter } from 'vue-router';

import Index from './views/Index.vue';
import ArchiveIndex from './views/ArchiveIndex.vue';
import AnimationIndex from './views/AnimationIndex.vue';
import ArchiveAnimation from './views/ArchiveAnimation.vue';
import AnalogIndex from './views/AnalogIndex.vue';
import ArchiveAnalog from './views/ArchiveAnalog.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
  },
  {
    path: '/archive',
    name: 'Archive',
    component: ArchiveIndex,
  },
  {
    path: '/animation',
    name: 'Animation',
    component: AnimationIndex,
  },
  {
    path: '/archive-animation',
    name: 'Animation Archive',
    component: ArchiveAnimation,
  },
  {
    path: '/analog',
    name: 'Analog',
    component: AnalogIndex,
  },
  {
    path: '/analog-animation',
    name: 'Analog Archive',
    component: ArchiveAnalog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
