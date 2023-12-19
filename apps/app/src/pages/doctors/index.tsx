import React, { ReactElement } from 'react'
import Layout from '@Components/layouts/Dashboard'
import { AmortizationChart, Container } from 'ui'

const DoctorsPage = () => {
  return (
    <Container>
      <AmortizationChart />
    </Container>
  )
}

DoctorsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default DoctorsPage
