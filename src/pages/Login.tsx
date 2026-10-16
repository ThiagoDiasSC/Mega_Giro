import { useState } from 'react'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErro('')

    if (!email.trim() || !senha.trim()) {
      setErro('Preencha o e-mail e a senha.')
      return
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formatoEmail.test(email)) {
      setErro('Digite um e-mail válido.')
      return
    }

    setCarregando(true)

    window.setTimeout(() => {
      setCarregando(false)
      setErro(
        'Login demonstrativo: a autenticação ainda não foi implementada.',
      )
    }, 1000)
  }

  function handleRecuperarSenha() {
    setErro('A recuperação de senha será implementada futuramente.')
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <header className="login-header">
          <Logo />
          <h1 id="login-title">Sistema corporativo</h1>
        </header>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">Usuário</label>

            <div className="input-wrapper">
              <span className="input-icon" aria-hidden="true">
                ✉
              </span>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                autoComplete="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={carregando}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>

            <div className="input-wrapper">
              <span className="input-icon" aria-hidden="true">
                ♙
              </span>

              <input
                id="senha"
                name="senha"
                type={mostrarSenha ? 'text' : 'password'}
                placeholder="Digite sua senha"
                autoComplete="current-password"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                disabled={carregando}
              />

              <button
                className="toggle-password"
                type="button"
                aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                onClick={() => setMostrarSenha(!mostrarSenha)}
                disabled={carregando}
              >
                {mostrarSenha ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>

            <button
              className="forgot-password"
              type="button"
              onClick={handleRecuperarSenha}
              disabled={carregando}
            >
              Esqueceu a senha?
            </button>
          </div>

          {erro && (
            <p className="login-error" role="alert">
              {erro}
            </p>
          )}

          <button
            className="login-button"
            type="submit"
            disabled={carregando}
          >
            {carregando ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </section>

      <Footer />
    </main>
  )
}

export default Login
