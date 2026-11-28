import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import CanalDashboard, { type ClienteCanal } from '../components/CanalDashboard'
import './BlankPage.css'

const clientesOw: ClienteCanal[] = [
  { codigo: '11020', nome: 'Adega Real', revenda: 'MEGAGIRO CF', meta: 380, realizado: 300, aderido: true, ressarcimento: 220, ressarcido: 220 },
  { codigo: '11034', nome: 'Bar Esquina', revenda: 'MEGAGIRO CF', meta: 240, realizado: 60, aderido: false, ressarcimento: 0, ressarcido: 0 },
  { codigo: '21007', nome: 'Mercado Popular', revenda: 'MEGAGIRO MH', meta: 410, realizado: 395, aderido: true, ressarcimento: 260, ressarcido: 130 },
  { codigo: '31055', nome: 'Petiscaria do Porto', revenda: 'MEGAGIRO GV', meta: 320, realizado: 140, aderido: false, ressarcimento: 0, ressarcido: 0 },
  { codigo: '31062', nome: 'Hipermercado GV', revenda: 'MEGAGIRO GV', meta: 750, realizado: 690, aderido: true, ressarcimento: 500, ressarcido: 500 },
  { codigo: '41003', nome: 'Quiosque da Praça', revenda: 'MEGAGIRO TO', meta: 150, realizado: 150, aderido: true, ressarcimento: 90, ressarcido: 90 },
  { codigo: '51010', nome: 'Distribuidora ITB', revenda: 'MEGAGIRO ITB', meta: 820, realizado: 410, aderido: true, ressarcimento: 380, ressarcido: 0 },
  { codigo: '51028', nome: 'Conveniência 24h', revenda: 'MEGAGIRO ITB', meta: 200, realizado: 175, aderido: false, ressarcimento: 0, ressarcido: 0 },
  { codigo: '61002', nome: 'Restaurante Mineiro', revenda: 'MEGAGIRO JM', meta: 260, realizado: 230, aderido: true, ressarcimento: 160, ressarcido: 160 },
  { codigo: '61014', nome: 'Boteco JM', revenda: 'MEGAGIRO JM', meta: 180, realizado: 70, aderido: false, ressarcimento: 0, ressarcido: 0 },
]

function Ow() {
  return (
    <div className="blank-page">
      <Header />

      <div className="blank-body">
        <Sidebar />
        <main className="blank-content">
          <CanalDashboard
            titulo="OW"
            descricao="Acompanhamento de metas, adesão e ressarcimento do canal OW."
            clientes={clientesOw}
          />
        </main>
      </div>
    </div>
  )
}

export default Ow
