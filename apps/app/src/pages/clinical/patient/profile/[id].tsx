import React, { ReactElement } from 'react'
import Layout from '@Components/layouts/Clinical'
import styles from './styles.module.css'
import {
  INPUTS_PROFILE,
  INPUTS_OCCUPATION,
  INPUTS_CONDITION,
} from '@Constants/patient'
import { useSelector } from 'react-redux'
import getStore, { RootState } from '@Store/store'
import { getPatient } from '@Store/slices/patient.slice'
import { Form, FormValues, useForm } from 'ui'
import { GetServerSideProps } from 'next'

const ProfilePage = () => {
  const patient = useSelector((state: RootState) => state.patient.patient)

  const onSubmit = (values: FormValues) => {
    console.log(values)
  }

  const insertInitialValues = (elements: any, initialValues: any) => {
    return elements.map((element: any) => {
      return {
        ...element,
        value: initialValues[element.name],
      }
    })
  }

  const elementsProfile = insertInitialValues(
    INPUTS_PROFILE,
    patient?.patientInformation.basicInformation
  )
  const elementsOccupation = insertInitialValues(
    INPUTS_OCCUPATION,
    patient?.patientInformation.ocupationAndLifeStyle
  )
  const elementsSanitary = insertInitialValues(
    INPUTS_CONDITION,
    patient?.patientInformation.sanitaryServices
  )

  const formProfile = useForm(onSubmit, elementsProfile)
  const formOccupation = useForm(onSubmit, elementsOccupation)
  const formSanitary = useForm(onSubmit, elementsSanitary)

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Datos de identidad personal</h3>
      <Form
        id="profile"
        title="Perfil del paciente"
        inputs={formProfile.inputs}
        handleChange={formProfile.handleChange}
        handleSubmit={formProfile.handleSubmit}
        subtitle="La información que se presenta a continuación es el perfil privado del paciente"
      />
      <Form
        id="occupation"
        title="Ocupación y estilo de vida"
        inputs={formOccupation.inputs}
        handleChange={formOccupation.handleChange}
        handleSubmit={formOccupation.handleSubmit}
        subtitle="En esta sección se presenta la ocupación del paciente y su estilo devida"
      />
      <Form
        id="conditions"
        title="Condiciones higuienico-sanitarias de la vivienda"
        subtitle="En esta sección se especifica el entorno en el recibe el paciente"
        inputs={formSanitary.inputs}
        handleChange={formSanitary.handleChange}
        handleSubmit={formSanitary.handleSubmit}
      />
    </div>
  )
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const patientId = query.id ?? ''

  const store = getStore()
  await store.dispatch(getPatient(patientId.toString()))

  return {
    props: {
      initialState: store.getState(),
    },
  }
}

export default ProfilePage
