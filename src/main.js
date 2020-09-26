// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vue from "vue";

import '~/assets/sass/custom.scss'
import DefaultLayout from '~/layouts/Default.vue'
import VueMasonry from 'vue-masonry-css'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);

  Vue.use(VueMasonry);

  if (process.isClient) {
    const ScrollReveal = require('vue-scroll-reveal').default;
    Vue.use(ScrollReveal);
  }
}
