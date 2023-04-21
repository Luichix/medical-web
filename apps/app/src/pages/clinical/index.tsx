import React, { ReactElement, useContext, useRef, useState } from 'react'
import Layout from '@Components/layouts/Dashboard'
import { ThemeContext } from '@Contexts/index'
import { headers } from 'public/data/patient-dummies'
import { Table, Search } from 'ui'
import classNames from 'classnames'
import styles from './clinical.module.css'
import { useSelector } from 'react-redux'
import getStore, { RootState } from '@/store/store'
import { getClinical } from '@/store/slices/clinical.slice'
import { Summary } from '@/interfaces/state'

const transformClinicalPatient = (data: Summary[]) => {
  return data
}

const getHead = (data: any) => {
  const head = []

  for (const key in data) {
    head.push(data[key])
  }
  return head
}

const head = getHead(headers.es)

const ClinicalPage = () => {
  const { theme } = useContext(ThemeContext)
  const [look, setLook] = useState('')

  const clinicalRecords = useSelector((state: RootState) => state.clinical)
  const records = transformClinicalPatient(clinicalRecords.filteredPatient)

  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.searchContainer}>
        <Search placeholder="Buscar paciente" value={look} onChange={setLook} />
        <div className={styles.buttonsContainer}>
          <button className={styles.secundaryButton}>ID Paciente</button>
          <button className={styles.primaryButton}>Nuevo</button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <Table
          headers={head}
          records={records}
          theme={theme}
          href="/clinical/patient/"
          style={styles.table}
        />
      </div>
    </div>
  )
}

ClinicalPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export async function getServerSideProps() {
  const store = getStore()
  await store.dispatch(getClinical())
  return {
    props: {
      initialState: store.getState(),
    },
  }
}

export default ClinicalPage
