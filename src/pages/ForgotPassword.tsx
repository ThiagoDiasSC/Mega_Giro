
import { useState, type FormEvent } from 'react'
import Footer from '../components/Footer'
import './ForgotPassword.css'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [erro, setErro] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [carregando, setCarregando] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErro('')

    if (!email.trim()) {
      setErro('Informe seu e-mail corporativo.')
      return
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formatoEmail.test(email.trim())) {
      setErro('Digite um endereço de e-mail válido.')
      return
    }

    setCarregando(true)

    window.setTimeout(() => {
      setCarregando(false)
      setEnviado(true)
    }, 800)
  }

  function handleVoltar() {
    window.location.href = '/'
  }

  return (
    <main className="forgot-page">
      <section className="forgot-card" aria-labelledby="forgot-title">
        <header className="forgot-banner">
          <svg
            className="forgot-banner-logo"
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

        <div className="forgot-content">
          <h1 id="forgot-title" className="forgot-title">
            Recuperação de Senha
          </h1>

          <p className="forgot-description">
            Informe o e-mail cadastrado em sua conta para receber as
            instruções de redefinição.
          </p>

          {enviado ? (
            <div className="forgot-success" role="status">
              <div className="forgot-success-mark" aria-hidden="true">
                ✓
              </div>

              <h2>Solicitação registrada!</h2>

              <p>
                Esta é uma confirmação demonstrativa. Nenhum e-mail foi
                enviado, pois a recuperação de senha ainda não está
                integrada ao servidor.
              </p>

              <button
                className="forgot-button"
                type="button"
                onClick={handleVoltar}
              >
                Voltar para o login
              </button>
            </div>
          ) : (
            <form
              className="forgot-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="forgot-field">
                <label htmlFor="recovery-email">E-mail corporativo</label>

                <div className="forgot-input-wrapper">
                  <svg
                    className="forgot-input-icon"
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
                    id="recovery-email"
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={carregando}
                  />
                </div>
              </div>

              {erro && (
                <p className="forgot-message forgot-message-error" role="alert">
                  {erro}
                </p>
              )}

              <button
                className="forgot-button"
                type="submit"
                disabled={carregando}
              >
                {carregando ? 'Processando...' : 'Enviar'}
              </button>

              <button
                className="forgot-back"
                type="button"
                onClick={handleVoltar}
                disabled={carregando}
              >
                Voltar para o login
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ForgotPassword
