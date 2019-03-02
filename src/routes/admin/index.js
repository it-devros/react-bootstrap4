import Admin from '../../scenes/admin'

const adminRoutes = [
  {
    path: '/admin/overview',
    name: 'overview',
    component: Admin
  },
  {
    redirect: true,
    path: '/admin',
    pathTo: '/admin/overview',
    name: 'Admin'
  }
]

export default adminRoutes