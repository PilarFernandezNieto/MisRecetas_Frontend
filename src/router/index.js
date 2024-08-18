import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminLayout,
      children: [
        {
          path: "ingredientes",
          name: "ingredientes",
          component: () => import ("../views/admin/IngredientesView.vue")
        },
        {
          path: "ingredientes/nuevo",
          name: "nuevo-ingrediente",
          component: () => import ("../views/admin/NuevoIngredienteView.vue")
        },
        {
          path: "ingredientes/editar/:id",
          name: "edita-ingrediente",
          component: () => import ("../views/admin/EditaIngredienteView.vue")
        }
      ]
    },
    {
      path: "/recetas",
      name: "recetas",
      component: () => import("../views/recetas/RecetasLayoutView.vue"),
      children: [
        {
          path: "",
          name: "mis-recetas",
          component: () => import("../views/recetas/MisRecetasView.vue")
        },
        {
          path: "/ver-recetas/:id",
          name: "ver-receta",
          component: () => import("../views/recetas/RecetaView.vue")
        }
      ]
    }
  ]
});

export default router;
