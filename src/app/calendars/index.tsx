import React, { ReactElement } from 'react'
import Layout from '@Components/layouts/Dashboard'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import getStore from '@/store/store'

import { useRef, useState } from 'react'
import styles from './styles.module.css'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import {
  getNextMonth,
  getNextWeek,
  getPreviousMonth,
  getPreviousWeek,
} from '@Store/slices/calendar.slice'
import { RootState, useAppDispatch } from '@Store/store'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import NoSSR from '@Components/customs/NoSSR'
import { Button, Dropdown, Modal, Month, Select, Title, Weekly } from 'ui'
import Appointment from '@Components/customs/Calendar/Appointment'
import MonthEvents from '@Components/customs/Calendar/Month/MonthEvents'
import WeekEvents from '@Components/customs/Calendar/Weekly/WeekEvents'

import { Container } from 'ui'

const CalendarPage = () => {
  /* ---------------------------------- state --------------------------------- */

  const [view, setView] = useState<'week' | 'month' | string>('week')

  const dispatch = useAppDispatch()

  const calendar = useSelector((state: RootState) => state.calendar)

  const currentDate = dayjs()
    .clone()
    .set('year', calendar.currentYear)
    .set('month', calendar.currentMonth)
    .locale('es')
    .format('MMMM YYYY')

  const indexWeek = calendar.week.weekIndex

  const startWeek = dayjs()
    .year(calendar.currentYear)
    .week(indexWeek)
    .startOf('week')
    .format('DD/MM/YYYY')
  const endWeek = dayjs()
    .year(calendar.currentYear)
    .week(indexWeek)
    .endOf('week')
    .format('DD/MM/YYYY')

  const date =
    view === 'week' ? `Semana ${indexWeek} - ${currentDate}` : currentDate
  /* --------------------------------- handler -------------------------------- */

  const handlePreviousTimer = () => {
    if (view === 'week') dispatch(getPreviousWeek())
    if (view === 'month') dispatch(getPreviousMonth())
  }
  const handleNextTimer = () => {
    if (view === 'week') dispatch(getNextWeek())
    if (view === 'month') dispatch(getNextMonth())
  }

  /* -------------------------- handler Modal Records ------------------------- */
  const modalRef = useRef<HTMLElement | null>(null)

  const openModal = () => {
    if (modalRef?.current) modalRef.current.style.display = 'flex'
  }
  const closeModal = (event: any) => {
    event.preventDefault()
    if (modalRef?.current) modalRef.current.style.display = 'none'
  }

  /* ----------------------------------- jsx ---------------------------------- */

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <div className={styles.container}>
          <NoSSR>
            <Modal
              position="right"
              onClose={(event) => closeModal(event)}
              ref={modalRef}
            >
              <Appointment />
            </Modal>
          </NoSSR>
          <div className={styles.navigation}>
            <Title>{date}</Title>
            <div className={styles.actions}>
              <div className={styles.buttonToday}>
                <button onClick={handlePreviousTimer}>
                  <FiChevronLeft />
                </button>
                <span>Hoy</span>
                <button onClick={handleNextTimer}>
                  <FiChevronRight />
                </button>
              </div>
              <Select
                id="select"
                placeholder="seleccione"
                name="select"
                value={view}
                size="sm"
                length="short"
                onChange={(event) => setView(event.target.value)}
                options={[
                  { value: 'week', label: 'Semanal' },
                  { value: 'month', label: 'Mensual' },
                ]}
              />
              <Button
                onClick={openModal}
                dimension="small"
                size="xxs"
                color="inverted"
              >
                Nuevo Evento
              </Button>
            </div>
            <div className={styles.actionsMobile}>
              <Dropdown
                options={[
                  {
                    label: 'nuevo evento',
                    value: 'event',
                    onClick: () => openModal(),
                  },
                  {
                    label: 'semana',
                    value: 'week',
                    onClick: () => setView('week'),
                  },
                  {
                    label: 'mes',
                    value: 'month',
                    onClick: () => setView('month'),
                  },
                ]}
              />
            </div>
          </div>
          <div>
            {view === 'week' && (
              <Weekly
                week={calendar.week}
                onClick={openModal}
                ListEvent={WeekEvents}
              />
            )}
            {view === 'month' && (
              <Month
                month={calendar.month}
                onClick={openModal}
                ListEvent={MonthEvents}
              />
            )}
          </div>
        </div>
      </Container>
    </DndProvider>
  )
}

CalendarPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default CalendarPage
