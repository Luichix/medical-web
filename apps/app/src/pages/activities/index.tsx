import React, { ReactElement } from 'react'
import Layout from '@Components/layouts/Dashboard'
import Activities from '@/views/activities'
import getStore from '@/store/store'
import { getReminder } from '@/store/slices/reminder.slice'
import { Container } from 'ui'

const ActivitiesPage = () => {
  return (
    <Container>
      <Activities />
    </Container>
  )
}

ActivitiesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export async function getServerSideProps() {
  const store = getStore()
  await store.dispatch(
    getReminder({
      clinic: 'salud',
    })
  )
  return {
    props: {
      initialState: store.getState(),
    },
  }
}

export default ActivitiesPage
