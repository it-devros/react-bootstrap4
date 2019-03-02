import SignIn from '../../scenes/signin'
import SignUp from '../../scenes/signup'

const authRoutes = [
  {
    path: '/signin',
    name: 'Signin',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp
  },
  {
    redirect: true,
    path: '/',
    pathTo: '/signin',
    name: 'Auth'
  }
]

export default authRoutes