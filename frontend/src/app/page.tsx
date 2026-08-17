import Link from 'next/link'
import styles from './page.module.css'
import { 
  Lock, 
  FileText, 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react'

export default function Home() {
  const cardsData = [
    {
      id: 1,
      icon: FileText,
      text: "Acesse informações profissionais, documentos e histórico funcional de forma rápida e organizada.",
      href: "/login"
    },
    {
      id: 2,
      icon: Calendar,
      text: "Visualize eventos escolares, datas importantes e acompanhe o planejamento letivo.",
      href: "/login"
    },
    {
      id: 3,
      icon: Clock,
      text: "Consulte seus horários de aula de maneira simples, organizada e automatizada.",
      href: "/login"
    },
    {
      id: 4,
      icon: Users,
      text: "Tenha acesso às informações das turmas e acompanhe seus alunos com facilidade.",
      href: "/login"
    }
  ]

  return (
    <div className={styles.container}>
      
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>
            <GraduationCap size={32} />
          </div>
          <div>
            <h1 className={styles.title}>SAEPD</h1>
            <p className={styles.subtitle}>
              Sistema de Acompanhamento Escolar para Pais e Docentes
            </p>
          </div>
        </div>

        <Link href="/login" className={styles.btnAcessar}>
          <Lock size={16} />
          <span>ACESSAR</span>
        </Link>
      </header>

      {/* HERO BANNER */}
      <section className={styles.heroBanner}>
        <div className={styles.heroBg} />
        
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <div className={styles.starIcon}>★</div>
            <div>
              <h2 className={styles.heroTitle}>
                Mais proximidade entre família e escola
              </h2>
              <p className={styles.heroSubtitle}>
                Facilitando o acompanhamento escolar com praticidade, transparência e comunicação eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <main className={styles.mainContent}>
        <div className={styles.cardsGrid}>
          {cardsData.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.id} className={styles.card}>
                <div className={styles.cardIcon}>
                  <Icon size={40} />
                </div>

                <p className={styles.cardText}>{card.text}</p>

                <Link href={card.href} className={styles.cardBtn} aria-label="Acessar">
                  <ArrowRight size={20} />
                </Link>
              </div>
            )
          })}
        </div>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInfo}>
          <ShieldCheck size={16} />
          <strong>Seguro • Confiável • Transparente</strong>
          <span className={styles.textMuted}>
            - SAEPD - Sistema de Acompanhamento Escolar para Pais e Docentes
          </span>
        </div>
        <p className={styles.textMuted}>
          © 2026 SAEPD. Todos os direitos reservados.
        </p>
      </footer>

    </div>
  )
}