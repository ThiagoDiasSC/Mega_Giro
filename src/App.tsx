import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

function App() {
  const path = window.location.pathname

  if (path === '/esqueci-senha') {
    return <ForgotPassword />
  }

  if (path === '/redefinir-senha') {
  return <ResetPassword />
}

  return <Login />
}

export default App
