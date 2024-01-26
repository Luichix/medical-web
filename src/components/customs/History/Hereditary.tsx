import React from 'react'
import { Titles } from '../components'
import styles from '../styles.module.css'
import { newFamilyTree, NewTree } from '../components/FamilyTree/FamilyTree'

export const HereditaryPage = () => {
  return (
    <Titles
      id="hereditary-history"
      title="Antecedentes hereditarios"
      subtitle="Se obtienen a través de la indagación, acerca del estado de salud de los familiares del enfermo."
    >
      <div className={styles.collection}>
        <NewTree {...newFamilyTree} />
      </div>
    </Titles>
  )
}
