
import Sidebar from '../components/Sidebar'
import './home.css'

// Página Home: cabeçalho no topo, menu lateral à esquerda e conteúdo à direita.
function Home() {
  return (
    <div className="home-page">
      {/* Cabeçalho */}
      <header className="home-header">
        {/* Logo em SVG (a cor vem do CSS do cabeçalho) */}
        <svg
          className="home-header-logo"
          viewBox="0 0 400 180"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Mega Giro — Distribuidor Autorizado"
        >
          <g fill="currentColor">
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
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </g>
        </svg>

        {/* TODO: trocar pelo nome do usuário logado */}
        <span className="home-header-user">Mateus Henrique</span>
      </header>

      {/* Corpo: menu lateral + conteúdo */}
      <div className="home-body">
        <Sidebar />

        {/* Conteúdo principal da Home */}
        <main className="home-content">
          <div className="dashboard-container">

{/* Título da página */}
<section className="dashboard-title">
  <h1>Dashboard</h1>
  <p>Acompanhe os indicadores e as atividades do Sistema.</p>
</section>

{/* Banner de boas-vindas */}
<section className="dashboard-welcome">
  <h2>Bem-vindo ao Sistema de Gestão de Metas</h2>
  <p>
    Selecione uma opção no menu lateral ou acompanhe os
    principais indicadores abaixo.
  </p>
</section>

            {/* Indicadores principais */}
            <section className="dashboard-cards">

              {/* Meta de Volume */}
              <article className="dashboard-card">
                <div className="card-top">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 19V10" />
                      <path d="M12 19V5" />
                      <path d="M19 19V8" />
                    </svg>
                  </div>
                  <span className="card-label">Meta de Volume</span>
                </div>

                <div className="card-value-row">
                  <h2>76,0%</h2>
                  <span className="card-positive">↑ 8,0% no período</span>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '76%' }} />
                </div>
              </article>

              {/* Meta de Cobertura */}
              <article className="dashboard-card">
                <div className="card-top">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="12" r="8" />
                      <circle cx="12" cy="12" r="3.5" />
                    </svg>
                  </div>
                  <span className="card-label">Meta de Cobertura</span>
                </div>

                <div className="card-value-row">
                  <h2>68,0%</h2>
                  <span className="card-positive">↑ 4,0% no período</span>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '68%' }} />
                </div>
              </article>

              {/* Importações */}
              <article className="dashboard-card">
                <div className="card-top">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 3h10v18H7z" />
                      <path d="M10 1h4" />
                      <path d="M12 7v8" />
                      <path d="m9 12 3 3 3-3" />
                    </svg>
                  </div>
                  <span className="card-label">Importações realizadas</span>
                </div>

                <div className="card-value-row">
                  <h2>07</h2>
                  <span className="card-description">arquivos atualizados</span>
                </div>

                <span className="card-footnote">
                  Última atualização: 10/11/2026
                </span>
              </article>

              {/* Usuários */}
              <article className="dashboard-card">
                <div className="card-top">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="9" cy="8" r="4" />
                      <path d="M2 20c0-4 3-6 7-6s7 2 7 6" />
                      <path d="M17 11a3 3 0 1 0 0-6" />
                      <path d="M18 14c2 .5 4 2 4 5" />
                    </svg>
                  </div>
                  <span className="card-label">Usuários cadastrados</span>
                </div>

                <div className="card-value-row">
                  <h2>52</h2>
                  <span className="card-description">12 supervisores</span>
                </div>

                <span className="card-footnote">48 usuários ativos</span>
              </article>

            </section>

            {/* Área inferior: importações + resumo e ações */}
            <section className="dashboard-lower">

              {/* Status das últimas importações */}
              <section className="dashboard-imports">
                <div className="imports-header">
                  <div>
                    <h2>◴ Status das Últimas Importações</h2>
                    <p>
                      Data e hora em que os arquivos de dados foram
                      atualizados pela última vez.
                    </p>
                  </div>
                </div>

                {/* Atualizações de Clientes */}
                <div className="import-group">
                  <h3>♟ Atualizações de Clientes</h3>

                  <div className="import-list">
                    <div className="import-item">
                      <strong>▣ Base de Clientes</strong>
                      <span>10/11/2026, 14:30</span>
                    </div>

                    <div className="import-item">
                      <strong>♟ Importação diária</strong>
                      <span>10/11/2026, 14:30</span>
                    </div>
                  </div>
                </div>

                {/* Meta de Volume */}
                <div className="import-group">
                  <h3>▥ Meta de Volume</h3>

                  <div className="import-list import-list-three">
                    <div className="import-item">
                      <strong>▣ Base de Produtos</strong>
                      <span>10/11/2026, 14:30</span>
                    </div>

                    <div className="import-item">
                      <strong>◴ Base Histórica</strong>
                      <span>10/11/2026, 14:30</span>
                    </div>

                    <div className="import-item">
                      <strong>◧ Meta Anual ABP</strong>
                      <span>10/11/2026, 14:30</span>
                    </div>
                  </div>
                </div>

                {/* Meta de Cobertura */}
                <div className="import-group">
                  <h3>◎ Meta de Cobertura</h3>

                  <div className="import-list">
                    <div className="import-item">
                      <strong>⚑ Meta Cobertura</strong>
                      <span className="import-empty">
                        Nenhuma importação registrada
                      </span>
                    </div>

                    <div className="import-item">
                      <strong>◧ Meta Cobertura</strong>
                      <span className="import-empty">
                        Nenhuma importação registrada
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Coluna direita */}
              <div className="dashboard-side">

                {/* Resumo das Metas */}
                <section className="goals-summary">
                  <h2>Resumo das Metas</h2>
                  <p className="section-description">Progresso geral.</p>

                  <div className="goal-item">
                    <div className="goal-heading">
                      <strong>Meta de Volume</strong>
                      <span>76,0%</span>
                    </div>
                    <div className="goal-progress">
                      <div style={{ width: '76%' }} />
                    </div>
                  </div>

                  <div className="goal-item">
                    <div className="goal-heading">
                      <strong>Meta de Cobertura</strong>
                      <span>68,0%</span>
                    </div>
                    <div className="goal-progress">
                      <div style={{ width: '68%' }} />
                    </div>
                  </div>

                  <p className="goal-footnote">
                    Acompanhe a evolução pelo módulo correspondente.
                  </p>
                </section>

                {/* Ações Rápidas */}
                <section className="quick-actions">
                  <h2>Ações rápidas</h2>
                  <p className="section-description">
                    Acesse rapidamente as principais ações.
                  </p>

                  <button className="quick-action quick-action-primary">
                    <span>⇥ Nova importação</span>
                    <span>›</span>
                  </button>

                  <button className="quick-action">
                    <span>＋ Novo cadastro</span>
                    <span>›</span>
                  </button>

                  <button className="quick-action">
                    <span>♙ Gerenciar usuários</span>
                    <span>›</span>
                  </button>
                </section>

              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
