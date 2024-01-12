import {  createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: 
  [
    {
      path: '/home',
      name: 'student',
      component: HomeView
    },
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
    
    {
      path: '/alldata',
      name: 'allData',
      component: () => import('../views/AllData.vue'),
    },
    {
      path: '/alldata/user/:id',
      name: 'allDataUser',
      component: () => import('../views/allDataUser.vue'),
    },
    {
      path: '/PiniaView',
      name: 'PiniaView',
      component: () => import('../views/PiniaView.vue'),
    },
  ]
})

export default router
