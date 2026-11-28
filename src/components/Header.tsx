import './Header.css'

function Header() {
  return (
    <header className="app-header">
      <svg
        className="app-header-logo"
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

      <span className="app-header-user">Mateus Henrique</span>
    </header>
  )
}

export default Header
