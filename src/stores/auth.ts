import type { User } from '@/interfaces/User'
import { defineStore } from 'pinia'

interface AuthState {
  token: string
  user: User | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: localStorage.getItem('token') || '',
    user: null,
  }),

  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },
    setUser(user: User | null) {
      this.user = user
    },
    clearToken() {
      this.token = ''
      localStorage.removeItem('token')
    },
    logout() {
      this.clearToken()
      this.user = null
    },
  },
})
