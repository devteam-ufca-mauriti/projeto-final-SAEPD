import { SidebarPais } from './_components/SidebarPais'
import styles from './pais.module.css'

export default function PaisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.layoutContainer}>
      <SidebarPais />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  )
}