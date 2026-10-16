import { useState, type FormEvent } from 'react'
import './ForgotPassword.css'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

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
      <section
        className="forgot-card"
        aria-labelledby="forgot-title"
      >
        <header className="forgot-header">
          <Logo />

          <div className="forgot-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </div>

          <h1 id="forgot-title">Esqueceu sua senha?</h1>

          <p className="forgot-description">
            Não se preocupe. Informe seu e-mail corporativo
            para continuar com a recuperação de acesso.
          </p>
        </header>

        {enviado ? (
          <div className="forgot-success" role="status">
            <div className="success-mark" aria-hidden="true">
              ✓
            </div>

            <h2>Solicitação registrada!</h2>

            <p>
              Esta é uma confirmação demonstrativa.
              Nenhum e-mail foi enviado, pois a recuperação
              de senha ainda não está integrada ao servidor.
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
          <form className="forgot-form" onSubmit={handleSubmit} noValidate>
            <div className="forgot-field">
              <label htmlFor="recovery-email">
                E-mail corporativo
              </label>

              <div className="forgot-input-wrapper">
                <input
                  id="recovery-email"
                  name="email"
                  type="email"
                  placeholder="seu.email@empresa.com"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={carregando}
                />
              </div>
            </div>

            {erro && (
              <p className="forgot-error" role="alert">
                {erro}
              </p>
            )}

            <button
              className="forgot-button"
              type="submit"
              disabled={carregando}
            >
              {carregando ? 'Processando...' : 'Continuar'}
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
      </section>

      <Footer />
    </main>
  )
}

export default ForgotPassword
