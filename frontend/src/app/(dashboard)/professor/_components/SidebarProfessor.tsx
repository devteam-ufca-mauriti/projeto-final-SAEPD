'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './sidebar.module.css'
import { 
  GraduationCap, 
  ClipboardList, 
  Activity, 
  BookOpen, 
  MessageSquare, 
  Users, 
  LogOut 
} from 'lucide-react'

export function SidebarProfessor() {
  const pathname = usePathname()

  const navItems = [
    { label: 'Lançar notas', href: '/professor/notas', icon: ClipboardList },
    { label: 'Frequência', href: '/professor/frequencia', icon: Activity },
    { label: 'Ocorrências', href: '/professor/ocorrencia', icon: BookOpen },
    { label: 'Chat', href: '/professor/chat', icon: MessageSquare },
    { label: 'Informações do aluno', href: '/professor/informacao-aluno', icon: Users },
  ]

  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.brandHeader}>
          <GraduationCap size={40} className={styles.brandLogo} />
          <div>
            <h1 className={styles.brandTitle}>SAEPD</h1>
            <p className={styles.brandSub}>SISTEMA DE ACOMPANHAMENTO ESCOLAR PARA PAIS E DOCENTES</p>
            <p className={styles.portalTag}>Portal do Professor(a)</p>
          </div>
        </div>

        <nav className={styles.navList}>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.navActive : ''}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className={styles.sidebarFooter}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>P</div>
          <div>
            <p className={styles.userName}>Prof. Junior</p>
            <p className={styles.userRole}>Professor</p>
          </div>
        </div>
        <Link href="/login" className={styles.logoutBtn} title="Sair do sistema">
          <LogOut size={20} />
        </Link>
      </div>
    </aside>
  )
}