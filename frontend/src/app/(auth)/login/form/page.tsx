'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './form.module.css'
import { 
  GraduationCap, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  UserPlus, 
  KeyRound 
} from 'lucide-react'

export default function LoginFormPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Integração futura com API/Backend de Autenticação
  }

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
        </div>

        {/* CARD DO FORMULÁRIO */}
        <div className={styles.cardForm}>
          <h2 className={styles.heading}>Acesse sua conta</h2>
          <p className={styles.subheading}>
            Entre com suas credenciais para continuar no sistema
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* INPUT LOGIN */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>Login:</label>
              <div className={styles.inputWrapper}>
                <User size={18} className={styles.inputIcon} />
                <input 
                  type="email" 
                  placeholder="Digite seu E-mail" 
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* INPUT SENHA */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>Senha:</label>
              <div className={styles.inputWrapper}>
                <Lock size={18} className={styles.inputIcon} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Digite sua Senha" 
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  className={styles.togglePasswordBtn}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Alternar visibilidade da senha"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* BOTÃO ENTRAR */}
            <button type="submit" className={styles.submitBtn}>
              Entrar
            </button>
          </form>

          {/* DIVISOR */}
          <div className={styles.divider}>
            <span className={styles.dividerSpan}>Ou</span>
          </div>

          {/* LINKS ADICIONAIS */}
          <div className={styles.linksWrapper}>
            <Link href="/esqueci-senha" className={styles.linkItem}>
              <KeyRound size={16} />
              <span>Esqueceu sua senha?</span>
            </Link>

            <Link href="/primeiro-acesso" className={styles.linkItem}>
              <UserPlus size={16} />
              <span>Primeiro acesso</span>
            </Link>
          </div>
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