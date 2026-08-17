'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './sidebar.module.css'
import { 
  GraduationCap, 
  LayoutDashboard, 
  UserCheck, 
  Users, 
  BookOpen, 
  LogOut, 
  School
} from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { label: 'Alunos', href: '/admin/alunos', icon: Users },
    { label: 'Professores', href: '/admin/professores', icon: BookOpen },
    { label: 'Responsáveis', href: '/admin/responsaveis', icon: UserCheck },
    { label: 'Turmas', href: '/admin/turma', icon: School },
  ]

  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.brandHeader}>
          <GraduationCap size={40} className={styles.brandLogo} />
          <div>
            <h1 className={styles.brandTitle}>SAEPD</h1>
            <p className={styles.brandSub}>SISTEMA DE ACOMPANHAMENTO ESCOLAR</p>
            <p className={styles.portalTag}>Portal do Admin</p>
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
          <div className={styles.avatar}>A</div>
          <div>
            <p className={styles.userName}>Admin</p>
            <p className={styles.userRole}>Administrador</p>
          </div>
        </div>
        <Link href="/login" className={styles.logoutBtn} title="Sair do sistema">
          <LogOut size={20} />
        </Link>
      </div>
    </aside>
  )
}