import { SidebarProfessor } from './_components/SidebarProfessor'
import styles from './professor.module.css'

export default function ProfessorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.layoutContainer}>
      <SidebarProfessor />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  )
}