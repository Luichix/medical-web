import React, { ReactElement } from 'react'
import Layout from '@/components/layouts/Dashboard'
import { Container } from '@/components/layouts/Container'

const DoctorsPage = () => {
  return <Container>Doctors</Container>
}

DoctorsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default DoctorsPage
