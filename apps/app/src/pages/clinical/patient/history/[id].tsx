import React, { ReactElement } from 'react'
import styles from './styles.module.css'
import getStore from '@/store/store'
import { getPatient } from '@/store/slices/patient.slice'
import { GetServerSideProps } from 'next'
import History from '@/views/history'
import Layout from '@/components/layouts/Clinical'

const HistoryPage = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Datos de identidad personal</h3>
      <History />
    </div>
  )
}

HistoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const patientId = query.id ?? ''

  const store = getStore()
  await store.dispatch(getPatient(patientId.toString()))

  return {
    props: {
      initialState: store.getState(),
    },
  }
}

export default HistoryPage
