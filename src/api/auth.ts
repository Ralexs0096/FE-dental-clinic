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

interface IsAuthResponse {
  auth: boolean
  message: string
  user: User | null
}

export const isAuth = async () => {
  try {
    /**
     * the token is taken from the store if this one already exist.
     * the axios interceptor is adding it in the header for us. :)
     */
    const resp = await API.get<IsAuthResponse>(URLS.auth.isAuthenticated)

    return resp.data
  } catch (error) {
    console.error(error)
    return {
      auth: false,
      message: 'Something went wrong',
      user: null,
    }
  }
}
