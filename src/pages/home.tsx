import Sidebar from '../components/Sidebar'
import './home.css'

function Home() {
  return (
    <div className="home-page">
      <header className="home-header">
        <svg
          className="home-header-logo"
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

        <span className="home-header-user">Usuario</span>
      </header>

      <div className="home-body">
        <Sidebar />
        <main className="home-content" />
      </div>
    </div>
  )
}

export default Home
