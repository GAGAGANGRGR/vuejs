import {  createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: 
  [
    {
      path: '/studentView',
      name: 'studentView',
      component: () => import('../views/StudentView.vue'),
    },
    {
      path: '/employeView',
      name: 'employeView',
      component: () => import('../views/EmployeView.vue'),
    },
    {
      path: '/emit',
      name: 'emit',
      component: () => import('../views/EmitView.vue'),
    },
  ]
})

export default router
