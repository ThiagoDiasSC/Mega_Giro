import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Home from './pages/home'

function App() {
  const path = window.location.pathname

  if (path === '/esqueci-senha') {
    return <ForgotPassword />
  }

  if (path === '/redefinir-senha') {
  return <ResetPassword />
}

  if (path === '/home') {
    return <Home />
  }

  return <Login />
}

export default App
