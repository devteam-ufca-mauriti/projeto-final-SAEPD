'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './sidebar.module.css'
import { 
  GraduationCap, 
  LayoutDashboard, 
  FileText, 
  Activity, 
  Megaphone, 
  MessageSquare, 
  LogOut 
} from 'lucide-react'

export function SidebarPais() {
  const pathname = usePathname()

  const navItems = [
    { label: 'Dashboard', href: '/pais', icon: LayoutDashboard },
    { label: 'Boletim', href: '/pais/boletim', icon: FileText },
    { label: 'Frequência', href: '/pais/frequencia', icon: Activity },
    { label: 'Avisos', href: '/pais/avisos', icon: Megaphone },
    { label: 'Chat', href: '/pais/chat', icon: MessageSquare },
  ]

  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.brandHeader}>
          <GraduationCap size={40} className={styles.brandLogo} />
          <div>
            <h1 className={styles.brandTitle}>SAEPD</h1>
            <p className={styles.brandSub}>SISTEMA DE ACOMPANHAMENTO ESCOLAR PARA PAIS E DOCENTES</p>
            <p className={styles.portalTag}>Portal do Responsável</p>
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
          <div className={styles.avatar}>R</div>
          <div>
            <p className={styles.userName}>Resp. Maria</p>
            <p className={styles.userRole}>Responsável</p>
          </div>
        </div>
        <Link href="/login" className={styles.logoutBtn} title="Sair do sistema">
          <LogOut size={20} />
        </Link>
      </div>
    </aside>
  )
}