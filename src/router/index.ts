import AuthLayout from '@/layouts/AuthLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'
import ForgotPasswordPage from '@/pages/ForgotPasswordPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          components: {
            default: LoginPage,
          },
        },
        {
          path: 'forgot-password',
          components: {
            default: ForgotPasswordPage,
          },
        },
      ],
    },
  ],
})

export default router
