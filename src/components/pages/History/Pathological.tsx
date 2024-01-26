import React from 'react'
// import styles from '../styles.module.css'
import { MdAccessibility } from 'react-icons/md'
import { Titles } from '@/components/atoms'
import { CardItem } from '@/components/molecules'
import { Timeline } from '@/components/organisms'
import { Container } from '@/components/templates/Container'

export const PathologicalPage = ({ timeline }: any) => {
  return (
    <Titles
      id="pathological-history"
      title="Antecedentes patológicos"
      subtitle="Esta sección es una linea del tiempo con las enfermedades que el paciente ha padecido con anterioridad."
    >
      {/* <div className={styles.collection}> */}
      <div>
        <Timeline events={timeline} />
      </div>
      {/* <Container
        title="Antecedentes patológicos"
        subtitle="Esta sección es una linea del tiempo con las enfermedades que el paciente ha padecido con anterioridad."
      >
        <CardItem Icon={MdAccessibility} />
      </Container> */}
    </Titles>
  )
}
