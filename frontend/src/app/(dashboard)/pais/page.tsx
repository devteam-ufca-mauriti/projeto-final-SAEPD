'use client'

import styles from './pais.module.css'
import { TrendingUp, Calendar, Bell } from 'lucide-react'

export default function DashboardPaisPage() {
  const notasRecentes = [
    { disciplina: 'Matemática', nota: '8.5', data: '15/03/2026' },
    { disciplina: 'Português', nota: '9.0', data: '14/03/2026' },
    { disciplina: 'História', nota: '7.5', data: '13/03/2026' },
    { disciplina: 'Ciências', nota: '8.0', data: '12/03/2026' },
  ]

  const avisos = [
    {
      titulo: 'Reunião de Pais',
      descricao: 'Reunião de pais marcada para 25/03/2026 às 19h',
      data: '18/03/2026',
    },
    {
      titulo: 'Feriado Nacional',
      descricao: 'Não haverá aula no dia 21/03/2026',
      data: '17/03/2026',
    },
    {
      titulo: 'Entrega de Uniformes',
      descricao: 'Uniformes novos disponíveis na secretaria',
      data: '16/03/2026',
    },
  ]

  return (
    <>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>Dashboard</h2>
      </div>

      {/* METRIC CARDS */}
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>Média Geral</span>
            <TrendingUp size={20} className={styles.metricIcon} />
          </div>
          <h3 className={styles.metricValue}>8,50</h3>
          <p className={styles.metricSub}>Bom desempenho</p>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>Faltas no mês</span>
            <Calendar size={20} className={styles.metricIcon} />
          </div>
          <h3 className={styles.metricValue}>2</h3>
          <p className={styles.metricSub}>Frequência: 90%</p>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>Próxima avaliação</span>
            <Bell size={20} className={styles.metricIcon} />
          </div>
          <h3 className={styles.metricValue}>Matemática</h3>
          <p className={styles.metricSub}>06/06/2026</p>
        </div>
      </div>

      {/* NOTAS RECENTES */}
      <div className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Notas Recentes</h3>
        <table className={styles.tableContainer}>
          <thead>
            <tr className={styles.tableHeader}>
              <th>Disciplina</th>
              <th>Nota</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {notasRecentes.map((item, idx) => (
              <tr key={idx} className={styles.tableRow}>
                <td style={{ fontWeight: 600 }}>{item.disciplina}</td>
                <td>
                  <span className={styles.gradeBadge}>{item.nota}</span>
                </td>
                <td className={styles.dateCol}>{item.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* AVISOS ESCOLARES */}
      <div className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Avisos Escolares</h3>
        <div className={styles.noticeList}>
          {avisos.map((aviso, idx) => (
            <div key={idx} className={styles.noticeCard}>
              <div className={styles.noticeIcon}>
                <Bell size={18} />
              </div>
              <div>
                <h4 className={styles.noticeTitle}>{aviso.titulo}</h4>
                <p className={styles.noticeText}>{aviso.descricao}</p>
                <p className={styles.noticeDate}>{aviso.data}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}