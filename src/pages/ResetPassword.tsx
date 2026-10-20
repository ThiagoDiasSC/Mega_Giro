
import { useState, type FormEvent } from 'react'
import Footer from '../components/Footer'
import './ResetPassword.css'

function ResetPassword() {
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false)
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState(false)
  const [carregando, setCarregando] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErro('')
    setSucesso(false)

    if (!senha || !confirmarSenha) {
      setErro('Preencha os dois campos de senha.')
      return
    }

    if (senha.length < 8) {
      setErro('A senha deve ter pelo menos 8 caracteres.')
      return
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.')
      return
    }

    setCarregando(true)

    window.setTimeout(() => {
      setCarregando(false)
      setSucesso(true)
      setSenha('')
      setConfirmarSenha('')
    }, 800)
  }

  function handleVoltarLogin() {
    window.location.href = '/'
  }

  return (
    <main className="reset-page">
      <section className="reset-card" aria-labelledby="reset-title">
        <header className="reset-banner">
          <svg
            className="reset-banner-logo"
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

        <div className="reset-content">
          <h1 id="reset-title" className="reset-title">
            Redefinir senha
          </h1>

          <p className="reset-description">
            Cadastre uma nova senha para sua conta corporativa.
            Utilize pelo menos 8 caracteres.
          </p>

          {sucesso ? (
            <div className="reset-success" role="status">
              <div className="reset-success-mark" aria-hidden="true">
                ✓
              </div>

              <h2>Validação concluída!</h2>

              <p>
                Esta é uma confirmação demonstrativa. Nenhuma senha
                foi alterada ou salva no servidor.
              </p>

              <button
                className="reset-button"
                type="button"
                onClick={handleVoltarLogin}
              >
                Voltar para o login
              </button>
            </div>
          ) : (
            <form
              className="reset-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="reset-field">
                <label htmlFor="nova-senha">Nova senha</label>

                <div className="reset-input-wrapper">
                  <svg
                    className="reset-input-icon"
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
                    id="nova-senha"
                    name="novaSenha"
                    type={mostrarSenha ? 'text' : 'password'}
                    placeholder="Digite a nova senha"
                    autoComplete="new-password"
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                    disabled={carregando}
                  />

                  <button
                    className="reset-toggle-password"
                    type="button"
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                    aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                    disabled={carregando}
                  >
                    {mostrarSenha ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
              </div>

              <div className="reset-field">
                <label htmlFor="confirmar-senha">
                  Confirmar nova senha
                </label>

                <div className="reset-input-wrapper">
                  <svg
                    className="reset-input-icon"
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
                    id="confirmar-senha"
                    name="confirmarSenha"
                    type={mostrarConfirmacao ? 'text' : 'password'}
                    placeholder="Digite novamente a senha"
                    autoComplete="new-password"
                    value={confirmarSenha}
                    onChange={(event) => setConfirmarSenha(event.target.value)}
                    disabled={carregando}
                  />

                  <button
                    className="reset-toggle-password"
                    type="button"
                    onClick={() =>
                      setMostrarConfirmacao(!mostrarConfirmacao)
                    }
                    aria-label={
                      mostrarConfirmacao ? 'Ocultar senha' : 'Mostrar senha'
                    }
                    disabled={carregando}
                  >
                    {mostrarConfirmacao ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
              </div>

              {erro && (
                <p className="reset-error" role="alert">
                  {erro}
                </p>
              )}

              <button
                className="reset-button"
                type="submit"
                disabled={carregando}
              >
                {carregando ? 'Validando...' : 'Redefinir senha'}
              </button>

              <button
                className="reset-back"
                type="button"
                onClick={handleVoltarLogin}
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

export default ResetPassword
