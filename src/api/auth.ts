import type { User } from '@/interfaces/User'
import API from './index'
import { URLS } from './urls'

interface LoginResponse {
  auth: boolean
  token: string
  user?: User
}

interface LoginRequest {
  email: string
  password: string
}

export const login = async ({ email, password }: LoginRequest) => {
  try {
    const resp = await API.post<LoginResponse>(URLS.auth.login, {
      email,
      password,
    })

    return resp.data
  } catch (error) {
    console.error(error)
    return {
      auth: false,
      token: '',
      user: undefined,
    }
  }
}
