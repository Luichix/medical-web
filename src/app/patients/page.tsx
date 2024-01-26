'use client'
import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@/contexts/index'
import { CLINIC_HEADERS_DUMMIES } from '@/../public/data/patient-dummies'
import { Table, Search, Paginate } from '@/components/molecules'
import classNames from 'classnames'
import styles from './clinical.module.css'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/store/store'
import { Summary } from '@/interfaces/state'
import { BsPerson } from 'react-icons/bs'
import { setSearch } from '@/store/slices/clinical.slice'

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

const head = getHead(CLINIC_HEADERS_DUMMIES.es)

const ClinicalPage = () => {
  const { theme } = useContext(ThemeContext)

  const dispatch = useAppDispatch()

  const clinicalRecords = useSelector((state: RootState) => state.clinical)
  const searchPatient = clinicalRecords.search
  const patientFiltered = transformClinicalPatient(
    clinicalRecords.filteredPatient,
  )

  const [patient, setPatient] = useState(patientFiltered)

  useEffect(() => {
    setPatient(patientFiltered)
  }, [patientFiltered])

  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.searchContainer}>
        <Search
          placeholder="Buscar paciente"
          value={searchPatient}
          onChange={(value) => {
            dispatch(setSearch(value))
          }}
        />
        <div className={styles.buttonsContainer}>
          <button className={styles.primaryButton}>
            <BsPerson /> &nbsp; Añadir Paciente
          </button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <Table
          headers={head}
          records={patient}
          theme={theme}
          href="/clinical/patient/"
          style={styles.table}
        />
      </div>
      <Paginate data={patientFiltered} setData={setPatient} itemsPerPage={5} />
    </div>
  )
}

export default ClinicalPage
