<script setup lang="ts">
import { fetchAllAppointments } from '@/api/appointments'
import type { Appointment } from '@/interfaces/Appointment'
import { ref } from 'vue'
import { onMounted } from 'vue'

const appointments = ref<Appointment[]>([])

onMounted(async () => {
  const appointmentsResponse = await fetchAllAppointments()

  if (appointmentsResponse?.ok) {
    appointments.value = appointmentsResponse.appointments
  }
})
</script>

<template>
  <h1>Appointments</h1>
  <div v-for="appointment in appointments" :key="appointment.id">
    <h2>{{ appointment.title }}</h2>
  </div>
</template>
