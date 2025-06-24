<script setup lang="ts">
import { computed } from 'vue'
import type { Appointment } from '@/interfaces/Appointment'
import { useVueTable, getCoreRowModel } from '@tanstack/vue-table'

const props = defineProps<{
  appointments: Appointment[]
}>()

const table = useVueTable({
  data: computed(() => props.appointments),
  columns: [
    {
      accessorKey: 'title',
      header: 'Title',
    },
    {
      accessorKey: 'description',
      header: 'Description',
    },
    {
      accessorKey: 'startTime',
      header: 'Start Time',
    },
    {
      accessorKey: 'endTime',
      header: 'End Time',
    },
  ],
  getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
  <table class="table-auto border-collapse border border-gray-400 w-full">
    <thead>
      <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
        <th
          v-for="header in headerGroup.headers"
          :key="header.id"
          class="border border-gray-300 px-4 py-2 bg-gray-100 text-left"
        >
          <span v-if="!header.isPlaceholder">
            {{ header.column.columnDef.header }}
          </span>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="row in table.getRowModel().rows" :key="row.id">
        <td
          v-for="cell in row.getVisibleCells()"
          :key="cell.id"
          class="border border-gray-300 px-4 py-2"
        >
          {{ cell.getValue() }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
