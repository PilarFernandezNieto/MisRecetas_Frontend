import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminLayout from "../views/admin/AdminLayout.vue";
import AuthLayout from "@/views/auth/AuthLayout.vue";
import authApi from "@/api/authApi";

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
          component: () => import("../views/admin/IngredientesView.vue")
        },
        {
          path: "ingredientes/nuevo",
          name: "nuevo-ingrediente",
          component: () => import("../views/admin/NuevoIngredienteView.vue")
        },
        {
          path: "ingredientes/actualizar/:id",
          name: "edita-ingrediente",
          component: () => import("../views/admin/EditaIngredienteView.vue")
        },
        {
          path: "/recetas",
          name: "recetas",
          component: () => import("../views/admin/RecetasView.vue")
        },
        {
          path: "/recetas/nueva",
          name: "nueva-receta",
          component: () => import("../views/admin/NuevaRecetaView.vue")
        },
        {
          path: "/recetas/actualizar/:id",
          name: "edita-receta",
          component: () => import("../views/admin/EditaRecetaView.vue")
        }

      ]
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthLayout,
      children: [
        {
          path: "registro",
          name: "registro",
          component: () => import("../views/auth/RegistroView.vue")
        },
        {
          path: "confirmar-cuenta/:token",
          name: "confirmar-cuenta",
          component: () => import("../views/auth/ConfirmarCuentaView.vue")
        },

        {
          path: "login",
          name: "login",
          component: () => import("../views/auth/LoginView.vue")
        }
      ]
    },
    
    {
      path: "/error",
      name: "error",
      component: () => import("../views/ErrorView.vue")
    }
  ]
});
// Guard de navegación
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth);

  if (requiresAuth) {
    try {
      const { data } = await authApi.auth();
      console.log("desde router")
      if (data.admin) {
        next({ name: "admin" });
      } else {
        next();
      }
    } catch (error) {
      next({ name: "login" });
    }
  } else {
    next()
  }
});

export default router;
