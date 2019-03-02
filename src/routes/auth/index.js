import SignIn from '../../scenes/signin'

const authRoutes = [
  {
    path: '/signin',
    name: 'Signin',
    component: SignIn
  },
  {
    redirect: true,
    path: '/',
    pathTo: '/signin',
    name: 'Auth'
  }
]

export default authRoutes