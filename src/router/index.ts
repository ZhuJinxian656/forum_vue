import { createRouter, createWebHistory } from 'vue-router';

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue') // 使用绝对路径别名
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register/Register.vue')
    },
    {
      path: '/letter',
      name: 'letter',
      component: () => import('@/views/letter/Letter.vue')
    },
    {
      path: '/letterdetail/:id',
      name: 'letterdetail',
      component: () => import('@/views/letter/Letterdetail.vue')
    },
    
  ]
});

export default router;
