import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from '@/store';
import Home from '@/pages/home/index.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/home',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "hone" */ '../components/layout.vue'),
    children: [
      {
        path: 'animals',
        name: 'Home',
        component: Home,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/login/index.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "login" */ '../pages/404/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { isAuthenticated } = store.state.auth;
  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'Home' });
  }
  next();
});

export default router;
