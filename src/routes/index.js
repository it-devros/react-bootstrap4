
import AuthLayout from '../layouts/auth'
import DashboardLayout from '../layouts/dashboard'
import AdminLayout from '../layouts/admin'

var indexRoutes = [
  { path: '/dashboard', name: 'Dashboard', component: DashboardLayout },
  { path: '/admin', name: 'Admin', component: AdminLayout },
  { path: '/', name: 'auth', component: AuthLayout }
]

export default indexRoutes
