import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import CanalDashboard, { type ClienteCanal } from '../components/CanalDashboard'

const clientesVer: ClienteCanal[] = [
  { codigo: '10231', nome: 'Mercado São Jorge', revenda: 'MEGAGIRO CF', meta: 420, realizado: 380, aderido: true, ressarcimento: 250, ressarcido: 250 },
  { codigo: '10245', nome: 'Empório Bom Preço', revenda: 'MEGAGIRO CF', meta: 300, realizado: 120, aderido: false, ressarcimento: 0, ressarcido: 0 },
  { codigo: '10302', nome: 'Bar do Zé', revenda: 'MEGAGIRO CF', meta: 260, realizado: 210, aderido: true, ressarcimento: 180, ressarcido: 0 },
  { codigo: '20118', nome: 'Conveniência Central', revenda: 'MEGAGIRO MH', meta: 350, realizado: 290, aderido: true, ressarcimento: 200, ressarcido: 200 },
  { codigo: '20140', nome: 'Lanchonete Avenida', revenda: 'MEGAGIRO MH', meta: 180, realizado: 40, aderido: false, ressarcimento: 0, ressarcido: 0 },
  { codigo: '30077', nome: 'Supermercado Ideal', revenda: 'MEGAGIRO GV', meta: 600, realizado: 510, aderido: true, ressarcimento: 420, ressarcido: 300 },
  { codigo: '30081', nome: 'Distribuidora Vale', revenda: 'MEGAGIRO GV', meta: 450, realizado: 180, aderido: false, ressarcimento: 0, ressarcido: 0 },
  { codigo: '40012', nome: 'Restaurante Sabor & Cia', revenda: 'MEGAGIRO TO', meta: 280, realizado: 260, aderido: true, ressarcimento: 150, ressarcido: 150 },
  { codigo: '40019', nome: 'Padaria Pão Quente', revenda: 'MEGAGIRO TO', meta: 160, realizado: 95, aderido: false, ressarcimento: 0, ressarcido: 0 },
  { codigo: '50033', nome: 'Atacadão Itabira', revenda: 'MEGAGIRO ITB', meta: 900, realizado: 720, aderido: true, ressarcimento: 600, ressarcido: 450 },
  { codigo: '50047', nome: 'Mercearia Dona Maria', revenda: 'MEGAGIRO ITB', meta: 220, realizado: 205, aderido: true, ressarcimento: 120, ressarcido: 120 },
  { codigo: '60005', nome: 'Choperia JM', revenda: 'MEGAGIRO JM', meta: 300, realizado: 110, aderido: false, ressarcimento: 0, ressarcido: 0 },
]

function Ver() {
  return (
    <div className="blank-page">
      <Header />

      <div className="blank-body">
        <Sidebar />
        <main className="blank-content">
          <CanalDashboard
            titulo="VER"
            descricao="Acompanhamento de metas, adesão e ressarcimento do canal VER."
            clientes={clientesVer}
          />
        </main>
      </div>
    </div>
  )
}

export default Ver
