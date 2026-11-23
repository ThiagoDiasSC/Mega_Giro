import { useState, type ReactNode } from 'react'
import './Sidebar.css'

type IconProps = { children: ReactNode }

function Icon({ children }: IconProps) {
  return (
    <svg
      className="sidebar-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const icons = {
  visaoGeral: (
    <Icon>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 16v-4M12 16V8M16 16v-6" />
    </Icon>
  ),
  acoes: (
    <svg className="sidebar-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  ),
  estrela: (
    <svg className="sidebar-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
    </svg>
  ),
  carteira: (
    <Icon>
      <rect x="3" y="6" width="18" height="13" rx="3" />
      <path d="M3 9h13a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H3" />
      <circle cx="15" cy="12" r="0.8" fill="currentColor" />
    </Icon>
  ),
  rgb: (
    <Icon>
      <path d="M20 11a8 8 0 0 0-14.3-4.9L4 8" />
      <path d="M4 3v5h5" />
      <path d="M4 13a8 8 0 0 0 14.3 4.9L20 16" />
      <path d="M20 21v-5h-5" />
    </Icon>
  ),
  garrafa: (
    <Icon>
      <path d="M10 2h4M10.5 2v4.5L8 10v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V10l-2.5-3.5V2" />
      <path d="M8 13h8M8 18h8" />
    </Icon>
  ),
  carrinho: (
    <Icon>
      <path d="M3 4h2l2.4 11h10.8L21 7H6.2" />
      <circle cx="9" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </Icon>
  ),
  documento: (
    <Icon>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M7 3h10M8 10h8M8 14h8" />
    </Icon>
  ),
  lista: (
    <Icon>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </Icon>
  ),
  usuarios: (
    <Icon>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M16 13.6c2.8.2 5 2.1 5 5.4" />
    </Icon>
  ),
  lua: (
    <Icon>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </Icon>
  ),
  cadeado: (
    <Icon>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </Icon>
  ),
  sair: (
    <Icon>
      <path d="M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5" />
      <path d="M14 8l4 4-4 4M18 12H9" />
    </Icon>
  ),
  engrenagem: (
    <Icon>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </Icon>
  ),
  seta: (
    <svg className="sidebar-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
}

const acoes = [
  { id: 'bl-adega', label: 'BL Adega', icon: icons.estrela },
  { id: 'ver', label: 'VER', icon: icons.carteira },
  { id: 'rgb', label: 'RGB', icon: icons.rgb },
  { id: 'ow', label: 'OW', icon: icons.garrafa },
  { id: 'combos', label: 'Combos', icon: icons.carrinho },
]

const itensPrincipais = [
  { id: 'bonificacao', label: 'Controle de Bonificação', icon: icons.documento },
  { id: 'importacoes', label: 'Importações', icon: icons.documento },
  { id: 'cadastros', label: 'Cadastros', icon: icons.lista },
  { id: 'clientes', label: 'Clientes', icon: icons.usuarios },
]

function Sidebar() {
  const [ativo, setAtivo] = useState('visao-geral')
  const [acoesAberto, setAcoesAberto] = useState(false)
  const [configAberto, setConfigAberto] = useState(true)
  const [modoEscuro, setModoEscuro] = useState(false)

  function classeItem(id: string) {
    return ativo === id ? 'sidebar-item sidebar-item-active' : 'sidebar-item'
  }

  // Abas fora de "Ações" fecham o grupo
  function selecionarForaDeAcoes(id: string) {
    setAtivo(id)
    setAcoesAberto(false)
  }

  function handleSair() {
    window.location.href = '/'
  }

  return (
    <aside className="sidebar" aria-label="Menu principal">
      <nav className="sidebar-nav">
        <p className="sidebar-title">MENU PRINCIPAL</p>

        <button
          type="button"
          className={classeItem('visao-geral')}
          onClick={() => selecionarForaDeAcoes('visao-geral')}
        >
          {icons.visaoGeral}
          <span>Visão geral</span>
        </button>

        <button
          type="button"
          className="sidebar-item sidebar-group"
          aria-expanded={acoesAberto}
          onClick={() => setAcoesAberto(!acoesAberto)}
        >
          {icons.acoes}
          <span>Ações</span>
          <span className="sidebar-chevron-wrap">
            {icons.seta}
          </span>
        </button>

        {acoesAberto && (
          <div className="sidebar-subitems">
            {acoes.map((item) => (
              <button
                key={item.id}
                type="button"
                className={classeItem(item.id) + ' sidebar-subitem'}
                onClick={() => setAtivo(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}

        <div className="sidebar-section">
          {itensPrincipais.map((item) => (
            <button
              key={item.id}
              type="button"
              className={classeItem(item.id)}
              onClick={() => selecionarForaDeAcoes(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="sidebar-footer">
        {configAberto && (
          <div className="sidebar-config">
            <div className="sidebar-item sidebar-static">
              {icons.lua}
              <span>Modo escuro</span>
              <button
                type="button"
                role="switch"
                aria-checked={modoEscuro}
                aria-label="Modo escuro"
                className={modoEscuro ? 'sidebar-switch sidebar-switch-on' : 'sidebar-switch'}
                onClick={() => setModoEscuro(!modoEscuro)}
              >
                <span className="sidebar-switch-thumb" />
              </button>
            </div>

            <button type="button" className="sidebar-item">
              {icons.cadeado}
              <span>Mudar senha</span>
            </button>

            <button type="button" className="sidebar-item sidebar-item-danger" onClick={handleSair}>
              {icons.sair}
              <span>Sair</span>
            </button>
          </div>
        )}

        <button
          type="button"
          className="sidebar-item sidebar-config-toggle"
          aria-expanded={configAberto}
          onClick={() => setConfigAberto(!configAberto)}
        >
          {icons.engrenagem}
          <span>Configurações</span>
          <span className={configAberto ? 'sidebar-chevron-wrap sidebar-chevron-open' : 'sidebar-chevron-wrap'}>
            {icons.seta}
          </span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
