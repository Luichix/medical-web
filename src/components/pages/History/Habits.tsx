import React from 'react'
import { Titles } from '@/components/atoms'
import { AddButton } from '@/components/molecules'
import { ListCard } from '@/components/organisms'

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
