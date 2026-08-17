'use client'

import { useState } from 'react'
import styles from '../professor.module.css'
import { ClipboardList, Save } from 'lucide-react'

interface Aluno {
  id: number
  nome: string
  nota: string
}

export default function LancarNotasPage() {
  const [alunos, setAlunos] = useState<Aluno[]>([
    { id: 1, nome: 'Ana Carolina Santos', nota: '8,5' },
    { id: 2, nome: 'Bruno Henrique Lima', nota: '7,0' },
    { id: 3, nome: 'Carlos Eduardo Silva', nota: '9,0' },
    { id: 4, nome: 'Daniela Ferreira Costa', nota: '6,5' },
    { id: 5, nome: 'Eduardo Alves Pereira', nota: '8,0' },
    { id: 6, nome: 'Fernanda Oliveira Souza', nota: '9,5' },
    { id: 7, nome: 'Gabriel Rodrigues Mendes', nota: '7,5' },
    { id: 8, nome: 'Helena Martins Ribeiro', nota: '8,5' },
  ])

  const handleGradeChange = (id: number, value: string) => {
    setAlunos(prev =>
      prev.map(aluno => (aluno.id === id ? { ...aluno, nota: value } : aluno))
    )
  }

  const handleSave = () => {
    // Preparado para integração com a API futuramente
    alert('Notas salvas com sucesso!')
  }

  return (
    <>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>Lançar notas</h2>
      </div>

      <div className={styles.cardContainer}>
        {/* CABEÇALHO DO CARD */}
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderTitle}>
            <ClipboardList size={28} className={styles.cardIcon} />
            <div>
              <h3 className={styles.cardTitle}>Lançamento de Notas</h3>
              <p className={styles.cardSubtitle}>Matemática - 9º Ano A - 1º Trimestre</p>
            </div>
          </div>
          <button className={styles.saveBtn} onClick={handleSave}>
            <Save size={18} />
            <span>Salvar Notas</span>
          </button>
        </div>

        {/* TABELA DE ALUNOS */}
        <table className={styles.tableContainer}>
          <thead>
            <tr className={styles.tableHeader}>
              <th style={{ width: '60px' }}>Nº</th>
              <th>Nome do Aluno</th>
              <th style={{ textAlign: 'center', width: '140px' }}>Nota (0-10)</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id} className={styles.tableRow}>
                <td className={styles.numCol}>{aluno.id}</td>
                <td className={styles.nameCol}>{aluno.nome}</td>
                <td className={styles.gradeCol}>
                  <input
                    type="text"
                    value={aluno.nota}
                    onChange={(e) => handleGradeChange(aluno.id, e.target.value)}
                    className={styles.gradeInput}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* INSTRUÇÕES */}
        <div className={styles.instructionsBox}>
          <h4 className={styles.instructionsTitle}>Instruções</h4>
          <ul className={styles.instructionsList}>
            <li>As notas devem estar entre 0 e 10</li>
            <li>Use incrementos de 0.5 pontos</li>
            <li>Clique em "Salvar Notas" após fazer as alterações</li>
            <li>Média mínima para aprovação: 7.0</li>
          </ul>
        </div>
      </div>
    </>
  )
}