// Outlet enables routing to "child" elements
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus.js'
import Spinner from './Spinner'

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
  }

  // if the FB user is logged in, go to the "child" of PrivateRoute (in App.js)
  // which is Profile.  Otherwise, route to SignIn
  // OUTLET appears to be a reserved word, meaning the nested Route in App.js
  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute