import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/recetas",
      name: "recetas",
      component: () => import("../views/recetas/RecetasLayoutView.vue")
    }
   
  ]
})

export default router
