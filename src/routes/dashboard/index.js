import User from '../../scenes/user'
import Target from '../../scenes/target'
import Sensor from '../../scenes/sensor'

const dashboardRoutes = [
  {
    path: '/dashboard/user',
    name: 'user',
    component: User
  },
  {
    path: '/dashboard/target/:id',
    name: 'target',
    component: Target
  },
  {
    path: '/dashboard/sensor/:id',
    name: 'sensor',
    component: Sensor
  },
  {
    redirect: true,
    path: '/dashboard',
    pathTo: '/dashboard/user',
    name: 'Dashboard'
  }
]

export default dashboardRoutes