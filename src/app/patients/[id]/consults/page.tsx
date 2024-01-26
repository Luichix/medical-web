'use client'
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import Layout from '@/components/pages/Consult'
import { ThemeContext } from '@/contexts/index'
import { CONSULT_HEADERS_DUMMIES } from '@/../public/data/patient-dummies'
import { Card, Button, Title, Paragraph } from '@/components/atoms'
import { Table, Search, Paginate } from '@/components/molecules'
import { BiSearch } from 'react-icons/bi'
import classNames from 'classnames'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'
import getStore, { RootState, useAppDispatch } from '@/store/store'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/router'
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

const PatientPage = ({ params }: { params: { id: string } }) => {
  const { theme } = useContext(ThemeContext)
  // const router = useRouter()
  // const id = router.query.id ? `${router.query.id}` : ''

  const dispatch = useAppDispatch()

  const patient = useSelector((state: RootState) =>
    state.clinical.patient.find((element) => element._id === params.id),
  )

  const consultRecords = useSelector((state: RootState) => state.consult)
  const searchConsult = consultRecords.search
  const consultFiltered = consultRecords.filteredConsult

  const [consult, setConsult] = useState(consultFiltered)

  useEffect(() => {
    setConsult(consultFiltered)
  }, [consultFiltered])

  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.searchContainer}>
        <div className={styles.patient}>
          <div className={styles.profile}>
            <figure className={styles.avatar}>
              {/* <Image
                className={styles.avatar}
                src="https://placeimg.com/192/191/people"
                alt="user"
                height={42}
                width={42}
              /> */}
            </figure>
            <div>
              <Title size="xs" color="base">
                {patient?.patient}
              </Title>
              <Paragraph size="xxs"> PID: {params.id}</Paragraph>
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
            <Link href={`/patients/${params.id}/history`}>
              <Button
                color="inverted"
                size="xxs"
                dimension="small"
                type="button"
              >
                Historial Clinico
              </Button>
            </Link>
            <Link href={`/patients/${params.id}/consult`}>
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
      <Paginate data={consultFiltered} setData={setConsult} itemsPerPage={5} />
    </div>
  )
}

// PatientPage.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>
// }

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const patientId = query.id ?? ''
//   const store = getStore()

//   const params = {
//     uid: patientId.toString(),
//     idRecord: '',
//   }

//   await store.dispatch(getConsult(params))
//   return {
//     props: {
//       initialState: store.getState(),
//     },
//   }
// }

export default PatientPage
