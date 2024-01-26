import { ReactElement } from 'react'
import Layout from '@/components/layouts/Clinical'
import React, { useRef, useState } from 'react'
import styles from './styles.module.css'
import { Button, Card, Container, Modal, Paragraph, TextArea, Title } from 'ui'
import { AddButtonDash } from '@Components/customs/AddButtonDash'
import { CardDash } from '@Components/customs/CardDash'
import NoSSR from '@/components/customs/NoSSR'
import { useRouter } from 'next/router'
import Prescription from '@Components/customs/Consult/Prescription'

const ConsultPage = () => {
  const [consult, setConsult] = useState('')
  const [impression, setImpression] = useState('')
  const [diagnostic, setDiagnostic] = useState('')

  const modalRef = useRef<HTMLElement | null>(null)

  const router = useRouter()

  const id = router.query.id ? `${router.query.id}` : ''

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const record = {
      uid: id,
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
