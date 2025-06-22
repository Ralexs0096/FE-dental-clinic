import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: null,
  }),

  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.setItem('token', token)
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
