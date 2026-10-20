
import { useState, type FormEvent } from 'react'
import Footer from '../components/Footer'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErro('')
    setSucesso(false)

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
      setSucesso(true)
    }, 700)
  }

  function handleRecuperarSenha() {
    window.location.href = '/esqueci-senha'
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <header className="login-banner">
          <svg
            className="login-banner-logo"
            viewBox="0 0 400 180"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Mega Giro — Distribuidor Autorizado"
          >
            <g fill="#ffffff">
              <text
                x="10"
                y="85"
                fontFamily="'Arial Black', Impact, sans-serif"
                fontWeight="900"
                fontSize="70"
                letterSpacing="-2"
              >
                MEGA
              </text>
              <text
                x="180"
                y="135"
                fontFamily="'Arial Black', Impact, sans-serif"
                fontWeight="900"
                fontSize="70"
                letterSpacing="-2"
              >
                GIRO
              </text>
              <text
                x="185"
                y="162"
                fontFamily="'Segoe UI', Arial, sans-serif"
                fontWeight="700"
                fontSize="19"
                letterSpacing="0.5"
              >
                Distribuidor Autorizado
              </text>
              <path
                d="M 330 60 C 310 30, 200 40, 100 100 C 60 124, 50 145, 65 152 C 75 157, 120 145, 170 120"
                fill="none"
                stroke="#ffffff"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </header>

        <div className="login-content">
          <h1 id="login-title" className="login-title">
            Acesso ao Sistema
          </h1>

          <p className="login-instructions">
            Informe o seu e-mail e senha corporativos para acessar.
          </p>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="login-form-group">
              <label htmlFor="email">Usuário</label>

              <div className="login-input-wrapper">
                <svg
                  className="login-input-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  autoComplete="username"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={carregando}
                />
              </div>
            </div>

            <div className="login-form-group">
              <label htmlFor="senha">Senha</label>

              <div className="login-input-wrapper">
                <svg
                  className="login-input-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="5" y="10" width="14" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>

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
                  className="login-toggle-password"
                  type="button"
                  aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                  title={mostrarSenha ? 'Ocultar senha' : 'Exibir senha'}
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  disabled={carregando}
                >
                  {mostrarSenha ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                      <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 4.5 9.5 7-.4 1-1.2 2-2.2 2.9M6.2 6.2C3.9 7.7 2.8 9.7 2.5 12c.8 2.2 4.3 7 9.5 7 1.2 0 2.3-.2 3.3-.7" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              <button
                className="login-forgot-password"
                type="button"
                onClick={handleRecuperarSenha}
                disabled={carregando}
              >
                Esqueceu a senha?
              </button>
            </div>

            {erro && (
              <p className="login-message login-message-error" role="alert">
                {erro}
              </p>
            )}

            {sucesso && (
              <p className="login-message login-message-success" role="status">
                Validação demonstrativa concluída. A autenticação ainda não foi implementada.
              </p>
            )}

            <button
              className="login-submit"
              type="submit"
              disabled={carregando}
            >
              {carregando ? 'Aguarde...' : 'Entrar'}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Login
