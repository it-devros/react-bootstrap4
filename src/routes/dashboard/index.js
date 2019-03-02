import User from '../../scenes/user'

const dashboardRoutes = [
  {
    path: '/dashboard/user',
    name: 'overview',
    component: User
  },
  {
    redirect: true,
    path: '/dashboard',
    pathTo: '/dashboard/user',
    name: 'Dashboard'
  }
]

export default dashboardRoutes