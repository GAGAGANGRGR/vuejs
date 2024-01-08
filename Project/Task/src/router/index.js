import {  createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: 
  [
    {
      path: '/studentView',
      name: 'studentView',
      component: StudentView
    },
    
  ]
})

export default router
