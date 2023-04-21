import { ReactElement } from 'react'
import Consult from '@/views/consult'
import Layout from '@/components/layouts/Clinical'

const ConsultPage = () => {
  return <Consult />
}

ConsultPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default ConsultPage
