<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/api/auth'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')

const handleLogin = async () => {
  const response = await login({ email: username.value, password: password.value })

  if (response.auth && response.user) {
    authStore.setToken(response.token)
    authStore.setUser(response.user)

    router.replace('/')
  }
}
</script>

<template>
  <form
    @submit.prevent="handleLogin"
    class="flex flex-col items-center justify-center gap-6 p-6 max-w-md mx-auto"
  >
    <div class="flex flex-col items-center gap-2 text-center">
      <h1 class="text-2xl font-bold">Login to your account</h1>
      <p class="text-balance text-sm text-muted-foreground">
        Enter your email below to login to your account
      </p>
    </div>
    <div class="grid gap-6">
      <div class="grid gap-2">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          id="email"
          v-model="username"
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white text-gray-900 placeholder-gray-400 shadow-sm"
        />
      </div>
      <div class="grid gap-2">
        <div class="flex items-center">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1"
            >Password</label
          >
          <RouterLink
            to="/auth/forgot-password"
            class="ml-auto text-sm underline-offset-4 hover:underline text-primary-600"
          >
            Forgot your password?
          </RouterLink>
        </div>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          placeholder="********"
          minlength="8"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white text-gray-900 placeholder-gray-400 shadow-sm"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition-colors"
      >
        Login
      </button>
    </div>
  </form>
</template>
