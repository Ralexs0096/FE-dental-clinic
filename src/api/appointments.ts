import type { Appointment } from './../interfaces/Appointment'
import type { User } from '@/interfaces/User'
import API from './index'
import { URLS } from './urls'

interface GetAllAppointmentsResponse extends Appointment {
  user: User
}

export const getAllAppointments = async () => {
  try {
    const { data } = await API.get<GetAllAppointmentsResponse>(URLS.appointments.getAll, {})
    return data
  } catch (error) {
    console.log(error)
  }
}
