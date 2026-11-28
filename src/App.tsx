import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Home from './pages/home'
import Ver from './pages/Ver'
import Ow from './pages/Ow'
import Bonificacao from './pages/Bonificacao'

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

  if (path === '/ver') {
    return <Ver />
  }

  if (path === '/ow') {
    return <Ow />
  }

  if (path === '/bonificacao') {
    return <Bonificacao />
  }

  return <Login />
}

export default App
