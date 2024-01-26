'use client'
import React, { ReactElement } from 'react'
// import Layout from '@/components/layouts/Dashboard'
// import getStore from '@/store/store'
// import { getReminder } from '@/store/slices/reminder.slice'
import { Container } from '@/components/layouts/Container'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import styles from './styles.module.css'
import Reminder from '@/components/customs/Reminder'

const ActivitiesPage = () => {
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

// ActivitiesPage.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>
// }

// export async function getServerSideProps() {
//   const store = getStore()
//   await store.dispatch(
//     getReminder({
//       clinic: 'salud',
//     }),
//   )
//   return {
//     props: {
//       initialState: store.getState(),
//     },
//   }
// }

export default ActivitiesPage
