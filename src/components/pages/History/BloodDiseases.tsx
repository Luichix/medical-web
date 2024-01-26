import React from 'react'
import { Titles } from '@/components/atoms'
import { AddButton } from '@/components/molecules'
import { ListCard } from '@/components/organisms'

export const BloodDiseasesPage = ({
  records,
  openForm,
  onDelete,
  onUpdate,
}: any) => {
  return (
    <Titles
      id="blood-diseases"
      title="Transfusión sanguiniea previa"
      subtitle="Enfermedades realacionadas con las transfusiones, se debe de especificar si el paciente ha recibido sangre o sus derivados y en que fecha."
    >
      <ListCard records={records} onDelete={onDelete} onUpdate={onUpdate}>
        <AddButton onClick={openForm} />
      </ListCard>
    </Titles>
  )
}
