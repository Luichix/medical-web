import React from 'react'
import { Titles } from '@/components/atoms'
import { AddButton } from '@/components/molecules'
import { ListCard } from '@/components/organisms'

export const SurgicalPage = ({
  records,
  openForm,
  onDelete,
  onUpdate,
}: any) => {
  return (
    <Titles
      id="surgical-interventions"
      title="Intervenciones quirúrgicas"
      subtitle="Si el paciente ha sido intervenido quirúrgicamente, con anterioridad, se
    refleja el tipo y la fecha de la operación."
    >
      <ListCard records={records} onDelete={onDelete} onUpdate={onUpdate}>
        <AddButton onClick={openForm} />
      </ListCard>
    </Titles>
  )
}
