<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'
import { isAuth } from './api/auth'

const authStore = useAuthStore()
const router = useRouter()

onMounted(async () => {
  if (authStore.token && !authStore.user) {
    const { auth, user } = await isAuth()

    if (auth && user) {
      authStore.setUser(user)
      return
    }

    authStore.logout()
    router.replace('/auth/login')
  }
})
</script>

<template>
  <RouterView />
</template>
