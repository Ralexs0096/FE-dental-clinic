<script setup lang="ts">
import { fetchAllUsers, type FetchAllUsers } from '@/api/users'
import UsersTable from '@/components/UsersTable.vue'
import { onMounted, ref } from 'vue'

const users = ref<FetchAllUsers>()

onMounted(async () => {
  users.value = await fetchAllUsers()
})
</script>

<template>
  <div class="p-5">
    <h1 class="text-xl font-bold mb-4">Users</h1>

    <div class="p-5">
      <UsersTable :users="users?.allUsers ?? []" />
    </div>
  </div>
</template>
