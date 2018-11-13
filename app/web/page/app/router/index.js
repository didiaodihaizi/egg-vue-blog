import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
      {
        path: '/',
        component: () => import('./../home/')
      },
      {
        path: '/blog',
        component: () => import('./../blog/')
      }
    ]
  });
}

