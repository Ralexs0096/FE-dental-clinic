export const URLS = {
  auth: {
    login: '/auth/signin',
    register: '/auth/signup',
    isAuthenticated: '/auth/isAuth',
    forgotPassword: '/auth/forgotPassword',
  },
  appointments: {
    getAll: '/appointment',
    create: '/appointment',
    update: '/appointment/:id',
    delete: '/appointment/:id',
  },
  users: {
    getAll: '/user',
    create: '/user/create',
  },
}
