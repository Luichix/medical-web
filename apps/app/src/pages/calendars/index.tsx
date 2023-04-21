import React, { ReactElement } from 'react'
import Layout from '@Components/layouts/Dashboard'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Calendar from '@/views/calendar'
import getStore from '@/store/store'
import { getCalendar } from '@/store/slices/calendar.slice'
import { Container } from 'ui'

const CalendarPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Calendar />
      </Container>
    </DndProvider>
  )
}

CalendarPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export async function getServerSideProps() {
  const store = getStore()
  await store.dispatch(
    getCalendar({
      clinic: 'salud',
    })
  )
  return {
    props: {
      initialState: store.getState(),
    },
  }
}

export default CalendarPage
