import { ItemTypes } from '@Constants/reminder'
import { RootState } from '@Store/store'
import dayjs from 'dayjs'
import { useDrop } from 'react-dnd'
import { useSelector } from 'react-redux'
import { Overlay } from '../../Overlay'
import ReminderLabel from '../ReminderLabel'
import styles from './styles.module.css'

const MonthEvents = ({ ISO, events }: { ISO: string; events: any }) => {
  const moveReminder = () => {
    console.log('Update Reminder')
  }

  // hook useDrop to collocate reminder label into list
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.REMINDER_LABEL,
      drop: () => moveReminder(),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  )

  return (
    <ul ref={drop} className={styles.list}>
      {events.map((item: any, index: number) => (
        <ReminderLabel
          key={index}
          id={index}
          category={item.title}
          startDate={item.appointmentDat}
        />
      ))}
      {isOver && <Overlay color="#def" />}
    </ul>
  )
}

export default MonthEvents
