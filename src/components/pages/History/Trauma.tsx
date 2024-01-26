import React from 'react'
// import styles from '../styles.module.css'
import { Titles } from '@/components/atoms'
import { Table } from '@/components/molecules'

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
      {/* <div className={styles.collection}> */}
      <div>
        <Table headers={headers} records={records} />
      </div>
    </Titles>
  )
}
