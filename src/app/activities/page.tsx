'use client'
import React from 'react'
import { Container } from '@/components/templates/Container'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import styles from './styles.module.css'
import Reminder from '@/components/organisms/Reminder'

const Activities = () => {
  const reminders = useSelector((state: RootState) => state.reminder.reminder)

  return (
    <Container>
      <div className={styles.container}>
        <h3 className={styles.title}>Actividades</h3>
        <div className={styles.categories}>
          <Reminder category="cita" reminders={reminders} />
          <Reminder category="consulta" reminders={reminders} />
          <Reminder category="examen" reminders={reminders} />
          <Reminder category="diagnostico" reminders={reminders} />
        </div>
      </div>
    </Container>
  )
}

export default Activities
