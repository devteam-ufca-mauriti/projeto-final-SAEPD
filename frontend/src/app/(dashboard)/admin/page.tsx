'use client'

import styles from './admin.module.css'
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  TrendingUp 
} from 'lucide-react'

export default function AdminDashboardPage() {
  const stats = [
    { title: 'Total de Alunos', value: '400', sub: '+12% vs mês anterior', icon: Users },
    { title: 'Total de Professores', value: '30', sub: '+3 novos este mês', icon: BookOpen },
    { title: 'Turmas Ativas', value: '12', sub: '2 Turnos', icon: GraduationCap },
    { title: 'Média Geral', value: '8,3', sub: '+0.3 vs trimestre anterior', icon: TrendingUp }
  ]

  return (
    <>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>Dashboard</h2>
      </div>

      {/* METRICS CARDS */}
      <div className={styles.metricsGrid}>
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className={styles.metricCard}>
              <div className={styles.metricHeader}>
                <span className={styles.metricTitle}>{stat.title}</span>
                <Icon size={22} className={styles.metricIcon} />
              </div>
              <h3 className={styles.metricValue}>{stat.value}</h3>
              <p className={styles.metricSub}>{stat.sub}</p>
            </div>
          )
        })}
      </div>

      {/* GRÁFICO DE DESEMPENHO */}
      <div className={styles.sectionCard}>
        <h3 className={styles.sectionTitle}>Desempenho Escolar - 2026</h3>
        <p className={styles.sectionSub}>Evolução da média geral e frequência</p>
        
        <div className={styles.chartPlaceholder}></div>

        <div className={styles.chartLegend}>
          <span className={styles.legendItem}>
            <span className={styles.dotBlue}></span> Média Geral
          </span>
          <span className={styles.legendItem}>
            <span className={styles.dotGreen}></span> Frequência %
          </span>
        </div>
      </div>

      {/* ATIVIDADES E TURNO */}
      <div className={styles.bottomGrid}>
        <div className={styles.sectionCard}>
          <h3 className={styles.sectionTitle}>Atividades Recentes</h3>
        </div>

        <div className={styles.sectionCard}>
          <h3 className={styles.sectionTitle}>Distribuição por turno</h3>
          <div style={{ marginTop: '16px' }}>
            <div className={styles.shiftItem}>
              <span>Manhã</span>
            </div>
            <div className={styles.shiftItem}>
              <span>Tarde</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}