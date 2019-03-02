import Dashboard from '../../scenes/dashboard'

const dashboardRoutes = [
  {
    path: '/dashboard/overview',
    name: 'overview',
    component: Dashboard
  },
  {
    redirect: true,
    path: '/dashboard',
    pathTo: '/dashboard/overview',
    name: 'Dashboard'
  }
]

export default dashboardRoutes