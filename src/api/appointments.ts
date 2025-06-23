import type { Appointment } from './../interfaces/Appointment'
import type { User } from '@/interfaces/User'
import API from './index'
import { URLS } from './urls'

interface FetchAllAppointmentsResponse extends Appointment {
  user: User
}

export const fetchAllAppointments = async () => {
  try {
    const { data } = await API.get<FetchAllAppointmentsResponse>(URLS.appointments.getAll, {})
    return data
  } catch (error) {
    console.log(error)
  }
}
