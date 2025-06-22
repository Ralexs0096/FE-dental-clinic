import AuthLayout from '@/layouts/AuthLayout.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/auth/LoginPage.vue'
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage.vue'
import HomePage from '@/pages/HomePage.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public routes under AuthLayout
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginPage,
          meta: { public: true },
        },
        {
          path: 'forgot-password',
          name: 'forgot-password',
          component: ForgotPasswordPage,
          meta: { public: true },
        },
      ],
    },

    // Protected routes under AppLayout
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage,
        },
      ],
    },

    // Catch-all: redirect unknown routes to login or dashboard
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = !!authStore.token
  const isPublic = to.meta.public

  if (!isPublic && !isAuthenticated) {
    next({ name: 'login' })
    return
  }

  if (isAuthenticated && to.name === 'login') {
    next({ name: 'home' })
    return
  }

  next()
})

export default router
