<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'
import { isAuth } from './api/auth'

const authStore = useAuthStore()

onMounted(async () => {
  if (authStore.token && !authStore.user) {
    const { auth, user } = await isAuth()

    if (auth && user) {
      authStore.setUser(user)
      return
    }

    authStore.logout()
  }
})
</script>

<template>
  <RouterView />
</template>
