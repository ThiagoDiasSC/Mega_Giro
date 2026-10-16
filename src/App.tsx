import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  const path = window.location.pathname

  if (path === '/esqueci-senha') {
    return <ForgotPassword />
  }

  return <Login />
}

export default App
