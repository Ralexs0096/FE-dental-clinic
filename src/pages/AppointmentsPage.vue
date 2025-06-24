<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Appointment } from '@/interfaces/Appointment'
import { fetchAllAppointments } from '@/api/appointments'
import AppointmentTable from '@/components/AppointmentsTable.vue'

const appointments = ref<Appointment[]>([])

onMounted(async () => {
  const response = await fetchAllAppointments()

  if (response?.ok) {
    appointments.value = response.appointments.map((appointment) => ({
      ...appointment,
      startTime: new Date(appointment.startTime).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      endTime: new Date(appointment.endTime).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      title: appointment.title.trim(),
    }))
  }
})
</script>

<template>
  <main class="p-5">
    <h1 class="text-xl font-bold mb-4">Appointments</h1>

    <div class="p-5">
      <AppointmentTable :appointments="appointments" />
    </div>
  </main>
</template>
