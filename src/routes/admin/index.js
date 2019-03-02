import Admin from '../../scenes/admin'

const adminRoutes = [
  {
    path: '/admin/user',
    name: 'overview',
    component: Admin
  },
  {
    redirect: true,
    path: '/admin',
    pathTo: '/admin/user',
    name: 'Admin'
  }
]

export default adminRoutes