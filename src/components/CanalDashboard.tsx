import { useState, type ReactNode } from 'react'
import './CanalDashboard.css'

export type ClienteCanal = {
  codigo: string
  nome: string
  revenda: string
  meta: number
  realizado: number
  aderido: boolean
  ressarcimento: number
  ressarcido: number
}

type Props = {
  titulo: string
  descricao: string
  clientes: ClienteCanal[]
}

type ResumoRevenda = {
  revenda: string
  qtdCliente: number
  aderido: number
  meta: number
  realizado: number
  ressarcimento: number
  ressarcido: number
}

const MESES = [
  'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO',
  'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO',
]

const numero = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 })
const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

function formatarNumero(valor: number) {
  return numero.format(valor)
}

function formatarPercentual(parte: number, total: number) {
  const valor = total > 0 ? (parte / total) * 100 : 0
  return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '%'
}

function formatarMoeda(valor: number) {
  return valor === 0 ? 'R$ -' : moeda.format(valor)
}

function resumirPorRevenda(clientes: ClienteCanal[]): ResumoRevenda[] {
  const mapa = new Map<string, ResumoRevenda>()

  for (const cliente of clientes) {
    let linha = mapa.get(cliente.revenda)
    if (!linha) {
      linha = {
        revenda: cliente.revenda,
        qtdCliente: 0,
        aderido: 0,
        meta: 0,
        realizado: 0,
        ressarcimento: 0,
        ressarcido: 0,
      }
      mapa.set(cliente.revenda, linha)
    }

    linha.qtdCliente += 1
    linha.aderido += cliente.aderido ? 1 : 0
    linha.meta += cliente.meta
    linha.realizado += cliente.realizado
    linha.ressarcimento += cliente.ressarcimento
    linha.ressarcido += cliente.ressarcido
  }

  return [...mapa.values()]
}

function somarResumo(linhas: ResumoRevenda[]): ResumoRevenda {
  return linhas.reduce(
    (total, linha) => ({
      revenda: 'TOTAL',
      qtdCliente: total.qtdCliente + linha.qtdCliente,
      aderido: total.aderido + linha.aderido,
      meta: total.meta + linha.meta,
      realizado: total.realizado + linha.realizado,
      ressarcimento: total.ressarcimento + linha.ressarcimento,
      ressarcido: total.ressarcido + linha.ressarcido,
    }),
    { revenda: 'TOTAL', qtdCliente: 0, aderido: 0, meta: 0, realizado: 0, ressarcimento: 0, ressarcido: 0 },
  )
}

function IconeCard({ children }: { children: ReactNode }) {
  return (
    <span className="canal-kpi-icon">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </span>
  )
}

function BadgePercentual({ parte, total }: { parte: number; total: number }) {
  return <span className="canal-badge">{formatarPercentual(parte, total)}</span>
}

function CanalDashboard({ titulo, descricao, clientes }: Props) {
  const [periodo, setPeriodo] = useState('2026-11')
  const [filtroRevenda, setFiltroRevenda] = useState('todas')
  const [aba, setAba] = useState<'resumo' | 'clientes'>('resumo')

  const [ano, mes] = periodo.split('-')
  const nomeMes = MESES[Number(mes) - 1] ?? ''

  const todasRevendas = resumirPorRevenda(clientes).map((linha) => linha.revenda)

  const clientesFiltrados =
    filtroRevenda === 'todas'
      ? clientes
      : clientes.filter((cliente) => cliente.revenda === filtroRevenda)

  const resumo = resumirPorRevenda(clientesFiltrados)
  const total = somarResumo(resumo)

  return (
    <div className="canal-container">
      <section className="canal-topo">
        <div>
          <h1>
            {titulo} - {nomeMes}/{ano}
          </h1>
          <p>{descricao}</p>
        </div>

        <div className="canal-filtros">
          <label className="canal-filtro">
            <span>Período (Mês/Ano)</span>
            <input
              type="month"
              value={periodo}
              onChange={(e) => e.target.value && setPeriodo(e.target.value)}
            />
          </label>

          <label className="canal-filtro">
            <span>Filtrar Revenda</span>
            <select value={filtroRevenda} onChange={(e) => setFiltroRevenda(e.target.value)}>
              <option value="todas">Todas as Revendas</option>
              {todasRevendas.map((revenda) => (
                <option key={revenda} value={revenda}>
                  {revenda}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="canal-kpis">
        <article className="canal-kpi">
          <IconeCard>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
          </IconeCard>
          <div>
            <span className="canal-kpi-label">Total Clientes Ativos</span>
            <strong>{formatarNumero(total.qtdCliente)}</strong>
          </div>
        </article>

        <article className="canal-kpi">
          <IconeCard>
            <circle cx="12" cy="12" r="9" />
            <path d="m8 12 3 3 5-6" />
          </IconeCard>
          <div>
            <span className="canal-kpi-label">Meta Global (Volume)</span>
            <strong>{formatarNumero(total.meta)}</strong>
          </div>
        </article>

        <article className="canal-kpi">
          <IconeCard>
            <path d="M12 2v20" />
            <path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </IconeCard>
          <div>
            <span className="canal-kpi-label">Realizado Geral</span>
            <strong className="canal-kpi-destaque">{formatarNumero(total.realizado)}</strong>
          </div>
        </article>

        <article className="canal-kpi">
          <IconeCard>
            <path d="m3 17 6-6 4 4 8-8" />
            <path d="M15 7h6v6" />
          </IconeCard>
          <div>
            <span className="canal-kpi-label">% Atingimento</span>
            <strong>{formatarPercentual(total.realizado, total.meta)}</strong>
          </div>
        </article>
      </section>

      <section className="canal-painel">
        <div className="canal-abas" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={aba === 'resumo'}
            className={aba === 'resumo' ? 'canal-aba canal-aba-ativa' : 'canal-aba'}
            onClick={() => setAba('resumo')}
          >
            Resumo por Revenda
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={aba === 'clientes'}
            className={aba === 'clientes' ? 'canal-aba canal-aba-ativa' : 'canal-aba'}
            onClick={() => setAba('clientes')}
          >
            Detalhamento de Clientes
          </button>
        </div>

        <div className="canal-tabela-wrap">
          {aba === 'resumo' ? (
            <table className="canal-tabela">
              <thead>
                <tr>
                  <th className="col-texto">Revenda</th>
                  <th>Qtd Cliente</th>
                  <th>Aderido</th>
                  <th>% Aderido</th>
                  <th className="col-num">Meta</th>
                  <th className="col-num">Realizado</th>
                  <th>% Realizado</th>
                  <th className="col-num">Ressarcimento</th>
                  <th className="col-num">Ressarcido</th>
                  <th className="col-dif">Dif</th>
                </tr>
              </thead>
              <tbody>
                {resumo.map((linha) => (
                  <tr key={linha.revenda}>
                    <td className="col-texto">{linha.revenda}</td>
                    <td>{linha.qtdCliente}</td>
                    <td>{linha.aderido}</td>
                    <td>{formatarPercentual(linha.aderido, linha.qtdCliente)}</td>
                    <td className="col-num col-mono">{formatarNumero(linha.meta)}</td>
                    <td className="col-num col-mono">{formatarNumero(linha.realizado)}</td>
                    <td>
                      <BadgePercentual parte={linha.realizado} total={linha.meta} />
                    </td>
                    <td className="col-num">{formatarMoeda(linha.ressarcimento)}</td>
                    <td className="col-num">{formatarMoeda(linha.ressarcido)}</td>
                    <td className="col-dif">{formatarMoeda(linha.ressarcimento - linha.ressarcido)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="col-texto">TOTAL</td>
                  <td>{total.qtdCliente}</td>
                  <td>{total.aderido}</td>
                  <td>{formatarPercentual(total.aderido, total.qtdCliente)}</td>
                  <td className="col-num col-mono">{formatarNumero(total.meta)}</td>
                  <td className="col-num col-mono">{formatarNumero(total.realizado)}</td>
                  <td>{formatarPercentual(total.realizado, total.meta)}</td>
                  <td className="col-num">{formatarMoeda(total.ressarcimento)}</td>
                  <td className="col-num">{formatarMoeda(total.ressarcido)}</td>
                  <td className="col-dif">{formatarMoeda(total.ressarcimento - total.ressarcido)}</td>
                </tr>
              </tfoot>
            </table>
          ) : (
            <table className="canal-tabela">
              <thead>
                <tr>
                  <th className="col-texto">Código</th>
                  <th className="col-texto">Cliente</th>
                  <th className="col-texto">Revenda</th>
                  <th>Aderido</th>
                  <th className="col-num">Meta</th>
                  <th className="col-num">Realizado</th>
                  <th>% Realizado</th>
                  <th className="col-num">Ressarcimento</th>
                  <th className="col-num">Ressarcido</th>
                  <th className="col-dif">Dif</th>
                </tr>
              </thead>
              <tbody>
                {clientesFiltrados.map((cliente) => (
                  <tr key={cliente.codigo}>
                    <td className="col-texto col-mono">{cliente.codigo}</td>
                    <td className="col-texto">{cliente.nome}</td>
                    <td className="col-texto">{cliente.revenda}</td>
                    <td>
                      <span className={cliente.aderido ? 'canal-status canal-status-sim' : 'canal-status'}>
                        {cliente.aderido ? 'Sim' : 'Não'}
                      </span>
                    </td>
                    <td className="col-num col-mono">{formatarNumero(cliente.meta)}</td>
                    <td className="col-num col-mono">{formatarNumero(cliente.realizado)}</td>
                    <td>
                      <BadgePercentual parte={cliente.realizado} total={cliente.meta} />
                    </td>
                    <td className="col-num">{formatarMoeda(cliente.ressarcimento)}</td>
                    <td className="col-num">{formatarMoeda(cliente.ressarcido)}</td>
                    <td className="col-dif">{formatarMoeda(cliente.ressarcimento - cliente.ressarcido)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  )
}

export default CanalDashboard
