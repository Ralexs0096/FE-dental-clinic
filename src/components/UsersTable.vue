<script setup lang="ts">
import { computed } from 'vue'
import type { User } from '@/interfaces/User'
import { useVueTable } from '@tanstack/vue-table'
import { getCoreRowModel } from '@tanstack/table-core'

const props = defineProps<{
  users: User[]
}>()

const columns = [
  {
    accessorKey: 'fullName',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
]

const table = useVueTable({
  data: computed(() =>
    props.users.map((user) => ({
      ...user,
      fullName: `${user.firstName} ${user.lastName}`,
    })),
  ),
  columns,
  getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
  <table class="table-auto w-full border-collapse border border-gray-300">
    <thead>
      <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
        <th
          v-for="header in headerGroup.headers"
          :key="header.id"
          class="border px-4 py-2 bg-gray-100 text-left"
        >
          <span v-if="!header.isPlaceholder">
            {{ header.column.columnDef.header }}
          </span>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="row in table.getRowModel().rows" :key="row.id">
        <td v-for="cell in row.getVisibleCells()" :key="cell.id" class="border px-4 py-2">
          {{ cell.getValue() }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
