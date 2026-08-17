import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAEPD - Sistema de Acompanhamento Escolar',
  description: 'Sistema de Acompanhamento Escolar para Pais e Docentes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}