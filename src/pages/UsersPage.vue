<script setup lang="ts">
import { fetchAllUsers, type FetchAllUsers } from '@/api/users'
import UsersTable from '@/components/UsersTable.vue'
import { useAuthStore } from '@/stores/auth'
import { onMounted, ref } from 'vue'
import NoPermissions from '@/components/NoPermissions.vue'

const users = ref<FetchAllUsers>()
const authStore = useAuthStore()

onMounted(async () => {
  users.value = await fetchAllUsers()
})
</script>

<template>
  <div class="p-5" v-if="authStore.user?.role === 'admin'">
    <h1 class="text-xl font-bold mb-4">Users</h1>

    <div class="p-5">
      <UsersTable :users="users?.allUsers ?? []" />
    </div>
  </div>
  <div v-else>
    <NoPermissions />
  </div>
</template>
