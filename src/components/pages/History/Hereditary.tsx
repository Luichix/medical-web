import React from 'react'
import { Titles } from '@/components/atoms'
import { newFamilyTree, NewTree } from '@/components/organisms/FamilyTree'
// import styles from './styles.module.css'

export const HereditaryPage = () => {
  return (
    <Titles
      id="hereditary-history"
      title="Antecedentes hereditarios"
      subtitle="Se obtienen a través de la indagación, acerca del estado de salud de los familiares del enfermo."
    >
      {/* <div className={styles.collection}> */}
      <div>
        <NewTree {...newFamilyTree} />
      </div>
    </Titles>
  )
}
