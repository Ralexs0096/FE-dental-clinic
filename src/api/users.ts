import type { User } from '@/interfaces/User'
import API from './index'
import { URLS } from './urls'

export interface FetchAllUsers {
  ok: boolean
  message?: string
  allUsers?: User[]
}

export const fetchAllUsers = async () => {
  try {
    const { data } = await API.get<FetchAllUsers>(URLS.users.getAll)
    return data
  } catch (error) {
    console.error(error)
    return {
      ok: false,
      message: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
