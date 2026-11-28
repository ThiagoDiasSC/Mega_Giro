import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import './Bonificacao.css'

// Página Controle de Bonificação: por enquanto, apenas a tela em branco.
// O layout (blank-page, blank-body, blank-content) vem do src/index.css.
function Bonificacao() {
  return (
    <div className="blank-page">
      <Header />

      <div className="blank-body">
        <Sidebar />
        <main className="blank-content">
          <div className="bonificacao-container">
            <section className="bonificacao-title">
              <h1>Controle de Bonificação</h1>
              <p>Gerencie as bonificações do Sistema.</p>
            </section>

            {/* Área em branco que vai receber o conteúdo da tela */}
            <section className="bonificacao-content" />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Bonificacao
