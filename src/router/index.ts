import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/home',
          component: () => import('@/views/home/index.vue'),
        },
        {
          path: '/note',
          component: () => import('@/views/note/index.vue'),
        },
        {
          path: '/components',
          component: () => import('@/views/components/index.vue'),
        },
        {
          path: '/system/user',
          component: () => import('@/views/system/user/index.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
    },
  ],
})

export default router
