import React, { ReactElement, useContext, useEffect, useState } from 'react'
import Layout from '@Components/layouts/Clinical'
import { ThemeContext } from '@Contexts/index'
import { CONSULT_HEADERS_DUMMIES } from 'public/data/patient-dummies'
import { Table, Search, Card, Button, Title, Paragraph, Paginate } from 'ui'
import { BiSearch } from 'react-icons/bi'
import classNames from 'classnames'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'
import getStore, { RootState, useAppDispatch } from '@/store/store'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getConsult, setSearch } from '@/store/slices/consult.slice'
import { interceptorConsult } from '@/utils/interceptorConsult'

const getHead = (data: any) => {
  const head = []

  for (const key in data) {
    head.push(data[key])
  }
  return head
}

const head = getHead(CONSULT_HEADERS_DUMMIES.es)

const PatientPage = () => {
  const { theme } = useContext(ThemeContext)
  const router = useRouter()
  const id = router.query.id ? `${router.query.id}` : ''

  const dispatch = useAppDispatch()

  const consultRecords = useSelector((state: RootState) => state.consult)
  const searchConsult = consultRecords.search
  const consultFiltered = interceptorConsult(consultRecords.filteredConsult)

  const [consult, setConsult] = useState(consultFiltered)

  useEffect(() => {
    setConsult(consultFiltered)
  }, [searchConsult, consultFiltered])

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
            <Search
              placeholder="buscar"
              value={searchConsult}
              onChange={(value) => {
                dispatch(setSearch(value))
              }}
            />
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
          headers={head}
          records={consult}
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
