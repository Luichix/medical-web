'use client'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useRef, useState } from 'react'
import styles from './styles.module.css'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import {
  getNextMonth,
  getNextWeek,
  getPreviousMonth,
  getPreviousWeek,
} from '@/store/slices/calendar.slice'
import { RootState, useAppDispatch } from '@/store/store'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import NoSSR from '@/components/templates/NoSSR'
import { Button, Modal, Select, Title } from '@/components/atoms'
import { Dropdown } from '@/components/molecules'
import { Month, Weekly } from '@/components/organisms'
import Appointment from '@/components/organisms/Calendar/Appointment'
import MonthEvents from '@/components/organisms/Calendar/Month/MonthEvents'
import WeekEvents from '@/components/organisms/Calendar/Weekly/WeekEvents'
import Container from '@/components/templates/Container'

const Calendars = () => {
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

export default Calendars
