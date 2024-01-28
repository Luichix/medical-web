import { ItemTypes } from '@/constants/reminder'
import { IDays, Reminder } from '@/interfaces/tasks'
import classNames from 'classnames'
import { useDrop } from 'react-dnd'
import { Overlay } from '../../Overlay'
import ReminderList from '../ReminderList'
import styles from './styles.module.css'
import { Days } from '@/components/organisms/Weekly/Weekly'

const BodyCell = ({
  dayReminders,
  handleModal,
  day,
}: {
  dayReminders: Reminder[]
  handleModal: (day: Days) => void
  day: Days
}) => {
  // hook useDrop to collocate reminder label into list
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.REMINDER_LABEL,
      drop: () => moveReminder(),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [],
  )
  const moveReminder = () => {
    console.log('Update Reminder')
  }

  return (
    <td
      // key={index}
      ref={drop}
      className={classNames(styles.cell, {
        // [styles.weekend]: [0, 6].includes(day.index),
      })}
      onClick={() => handleModal(day)}
    >
      <ReminderList reminders={dayReminders} />
      {isOver && <Overlay color="#dceefb" />}
    </td>
  )
}

export default BodyCell
