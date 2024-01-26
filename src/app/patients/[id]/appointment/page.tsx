'use client'
import { ReactElement } from 'react'
import Layout from '@/components/pages/Consult'
import React, { useRef, useState } from 'react'
import styles from './styles.module.css'
import {
  Button,
  Card,
  Modal,
  Paragraph,
  TextArea,
  Title,
} from '@/components/atoms'
import Container from '@/components/templates/Container'
import { AddButtonDash } from '@/components/molecules'
import { CardDash } from '@/components/organisms/CardDash'
import NoSSR from '@/components/templates/NoSSR'
import Prescription from '@/components/pages/Appointment/Prescription'

const ConsultPage = ({ params }: { params: { id: string } }) => {
  const [consult, setConsult] = useState('')
  const [impression, setImpression] = useState('')
  const [diagnostic, setDiagnostic] = useState('')

  const modalRef = useRef<HTMLElement | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const record = {
      uid: params.id,
      title: '',
      description: '',
      medicalImpression: impression,
      diagnostic: diagnostic,
    }
    console.log('🚀 ~ file: index.tsx:25 ~ handleSubmit ~ record:', record)
  }

  // handler modal
  const openModal = () => {
    if (modalRef?.current) modalRef.current.style.display = 'flex'
  }
  const closeModal = (event: any) => {
    event.preventDefault()
    if (modalRef?.current) modalRef.current.style.display = 'none'
  }

  return (
    <div id="patient-consultation" className={styles.container}>
      <NoSSR>
        <Modal
          position="right"
          onClose={(event) => closeModal(event)}
          ref={modalRef}
        >
          <Prescription />
        </Modal>
      </NoSSR>
      <div>
        <div className={styles.titles}>
          <Title size="md">Evaluación del paciente</Title>
          <Paragraph size="xs">
            Si se pudiese, es necesario llenar esta sección en cada cita, para
            que el funcionamiento de la aplicación funcione.
          </Paragraph>
        </div>
        <Card size="sm" dimension="extra">
          <form className={styles.form} onSubmit={handleSubmit}>
            <fieldset>
              <label className={styles.group}>
                <span>Consulta</span>
                <TextArea
                  value={consult}
                  onChange={(event) => setConsult(event.target.value)}
                  desing="tertiary"
                />
              </label>
              <label className={styles.group}>
                <span>Impresion Clinica</span>
                <TextArea
                  value={impression}
                  onChange={(event) => setImpression(event.target.value)}
                  desing="tertiary"
                />
              </label>
              <CardDash value={diagnostic} setValue={setDiagnostic} />
            </fieldset>
            <fieldset>
              <div className={styles.orders}>
                <AddButtonDash name="Receta" onClick={openModal} />
                <AddButtonDash
                  name="Orden de laboratorio"
                  onClick={openModal}
                />
                <AddButtonDash name="Tratamiento" onClick={openModal} />
              </div>
              <div className={styles.buttonContainer}>
                <Button
                  size="xs"
                  dimension="small"
                  color="inverted"
                  type="submit"
                >
                  Guardar
                </Button>
              </div>
            </fieldset>
          </form>
        </Card>
      </div>
    </div>
  )
}

ConsultPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default ConsultPage
