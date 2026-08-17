import Link from 'next/link'
import styles from './login.module.css'
import { 
  GraduationCap, 
  Shield, 
  Users, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react'

export default function SelectionProfilePage() {
  const profiles = [
    {
      id: 'admin',
      title: 'Admin',
      description: 'Acesse a área administrativa',
      href: '/login/form',
      icon: Shield,
      cardClass: styles.cardAdmin,
      badgeClass: styles.badgeAdmin,
      titleClass: styles.roleTitleAdmin,
      arrowClass: styles.arrowAdmin,
      // Ilustração 3D adaptada do perfil Admin
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' 
    },
    {
      id: 'professor',
      title: 'Professor',
      description: 'Acesse a área do professor',
      href: '/login/form',
      icon: GraduationCap,
      cardClass: styles.cardProfessor,
      badgeClass: styles.badgeProfessor,
      titleClass: styles.roleTitleProfessor,
      arrowClass: styles.arrowProfessor,
      // Ilustração 3D adaptada do perfil Professor
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/3429/3429433.png'
    },
    {
      id: 'pais',
      title: 'Pais',
      description: 'Acesse a área dos pais',
      href: '/login/form',
      icon: Users,
      cardClass: styles.cardPais,
      badgeClass: styles.badgePais,
      titleClass: styles.roleTitlePais,
      arrowClass: styles.arrowPais,
      // Ilustração 3D adaptada do perfil Pais
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png'
    }
  ]

  return (
    <div className={styles.container}>
      
      <main className={styles.mainContent}>
        {/* LOGO SAEPD */}
        <div className={styles.brandHeader}>
          <div className={styles.logoWrapper}>
            <GraduationCap size={54} />
          </div>
          <h1 className={styles.title}>SAEPD</h1>
          <p className={styles.subtitle}>
            Sistema de Acompanhamento Escolar para Pais e Docentes
          </p>

          <h2 className={styles.heading}>Selecione seu perfil</h2>
          <p className={styles.subheading}>
            Escolha a área desejada para acessar o sistema.
          </p>
        </div>

        {/* CARDS DOS PERFIS */}
        <div className={styles.grid}>
          {profiles.map((profile) => {
            const Icon = profile.icon
            return (
              <Link 
                key={profile.id} 
                href={profile.href} 
                className={`${styles.card} ${profile.cardClass}`}
              >
                <div className={styles.avatarWrapper}>
                  <img 
                    src={profile.imageUrl} 
                    alt={`Ilustração ${profile.title}`} 
                    className={styles.avatarImg} 
                  />
                </div>

                <div className={`${styles.iconBadge} ${profile.badgeClass}`}>
                  <Icon size={24} />
                </div>

                <h3 className={`${styles.roleTitle} ${profile.titleClass}`}>
                  {profile.title}
                </h3>
                <p className={styles.roleDescription}>
                  {profile.description}
                </p>

                <div className={`${styles.arrowBtn} ${profile.arrowClass}`}>
                  <ArrowRight size={18} />
                </div>
              </Link>
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