<script setup lang="ts">
import { fetchAllUsers, type FetchAllUsers } from '@/api/users'
import { onMounted, ref } from 'vue'

const users = ref<FetchAllUsers>()

onMounted(async () => {
  users.value = await fetchAllUsers()
})
</script>

<template>
  <div v-for="user in users?.allUsers" :key="user._id">
    {{ user.firstName }} {{ user.lastName }}
  </div>
</template>
