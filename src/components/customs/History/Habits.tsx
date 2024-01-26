import React from 'react'
import { AddButton, ListCard, Titles } from '../components'

export const HabitsPage = ({ records, openForm, onDelete, onUpdate }: any) => {
  return (
    <Titles
      id="toxic-habits"
      title="Hábitos"
      subtitle="Aquí se trata de cuantificar el hábito y el tiempo de consumo."
    >
      <ListCard records={records} onDelete={onDelete} onUpdate={onUpdate}>
        <AddButton onClick={openForm} />
      </ListCard>
    </Titles>
  )
}
