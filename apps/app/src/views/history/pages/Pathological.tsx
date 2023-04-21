import React from 'react'
import { Timeline } from 'ui'
import styles from '../styles.module.css'
import { Titles } from '../components'
import { MdAccessibility } from 'react-icons/md'
import { Container } from '../components/Container'
import { CardItem } from '../components/CardItem'

export const PathologicalPage = ({ timeline }: any) => {
  return (
    <Titles
      id="pathological-history"
      title="Antecedentes patológicos"
      subtitle="Esta sección es una linea del tiempo con las enfermedades que el paciente ha padecido con anterioridad."
    >
      <div className={styles.collection}>
        <Timeline events={timeline} />
      </div>
      <Container
        title="Antecedentes patológicos"
        subtitle="Esta sección es una linea del tiempo con las enfermedades que el paciente ha padecido con anterioridad."
      >
        <CardItem Icon={MdAccessibility} />
      </Container>
    </Titles>
  )
}
