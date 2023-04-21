import React from 'react'
import styles from '../styles.module.css'
import { Table } from 'ui'
import { Titles } from '../components'

export const TraumaPage = ({
  headers,
  records,
}: {
  headers: any
  records: any
}) => {
  return (
    <Titles
      id="trauma"
      title="Traumatismos"
      subtitle="  Se refiere a traumas físicos intensos, en los que el paciente haya
    sufrido fracturas óseas, pérdida del conocimiento, o haya necesitado
    hospitalización."
    >
      <div className={styles.collection}>
        <Table headers={headers} records={records} />
      </div>
    </Titles>
  )
}
