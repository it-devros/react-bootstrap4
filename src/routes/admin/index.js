import Admin from '../../scenes/admin'
import IDreg from '../../scenes/idreg'
import IDlist from '../../scenes/idlist'
import Targetreg from '../../scenes/targetreg'
import Targetlist from '../../scenes/targetlist'
import Targetdata from '../../scenes/targetdata'

const adminRoutes = [
  {
    path: '/admin/user',
    name: 'user',
    component: Admin
  },
  {
    path: '/admin/idreg',
    name: 'idreg',
    component: IDreg
  },
  {
    path: '/admin/idlist',
    name: 'idlist',
    component: IDlist
  },
  {
    path: '/admin/targetreg',
    name: 'targetreg',
    component: Targetreg
  },
  {
    path: '/admin/targetlist',
    name: 'targetlist',
    component: Targetlist
  },
  {
    path: '/admin/targetdata',
    name: 'targetdata',
    component: Targetdata
  },
  {
    redirect: true,
    path: '/admin',
    pathTo: '/admin/user',
    name: 'Admin'
  }
]

export default adminRoutes