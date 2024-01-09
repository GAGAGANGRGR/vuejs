import {  createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'


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
    
  ]
})

export default router
