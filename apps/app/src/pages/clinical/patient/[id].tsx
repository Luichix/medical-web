import React, { ReactElement, useContext, useState } from 'react'
import Layout from '@Components/layouts/Dashboard'
import { ThemeContext } from '@Contexts/index'
import { PATIENT_CONSULT_HEADERS } from 'public/data/patient-dummies'
import { Table, Search, Card, Button, Title, Paragraph } from 'ui'
import { BiSearch } from 'react-icons/bi'
import classNames from 'classnames'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'
import getStore, { RootState } from '@/store/store'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getConsult } from '@/store/slices/consult.slice'
import { interceptorConsult } from '@/utils/interceptorConsult'

const PatientPage = () => {
  const { theme } = useContext(ThemeContext)
  const [look, setLook] = useState('')
  const router = useRouter()

  const id = router.query.id ? `${router.query.id}` : ''
  const consultRecords = useSelector((state: RootState) => state.consult)
  const records = interceptorConsult(consultRecords.filteredConsult)

  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.searchContainer}>
        <div className={styles.patient}>
          <div className={styles.profile}>
            <figure className={styles.avatar}>
              <Image
                className={styles.avatar}
                src="https://placeimg.com/192/191/people"
                alt="user"
                height={42}
                width={42}
              />
            </figure>
            <div>
              <Title size="xs" color="base">
                Luis Reynaldo
              </Title>
              <Paragraph size="xs"> PID: {id}</Paragraph>
            </div>
          </div>
          <div className={styles.actions}>
            <Search placeholder="buscar" value={look} onChange={setLook} />
            <Link href={`/clinical/patient/history/${id}`}>
              <Button
                color="inverted"
                size="xxs"
                dimension="small"
                type="button"
              >
                Historial Clinico
              </Button>
            </Link>
            <Link href={`/clinical/patient/consult/${id}`}>
              <Button
                color="inverted"
                size="xxs"
                dimension="small"
                type="button"
              >
                Agregar
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <Table
          headers={PATIENT_CONSULT_HEADERS}
          records={records}
          href="/clinical/patient/history/"
        />
      </div>
    </div>
  )
}

PatientPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const patientId = query.id ?? ''
  const store = getStore()

  const params = {
    uid: patientId.toString(),
    idRecord: '',
  }

  await store.dispatch(getConsult(params))
  return {
    props: {
      initialState: store.getState(),
    },
  }
}

export default PatientPage
