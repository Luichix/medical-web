import React, { useRef, useState } from 'react'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { Form, InputForm, useForm } from 'ui'
import {
  traumaHeaders as head,
  traumaRecords as rows,
} from 'public/data/patient-dummies'
import { useRouter } from 'next/router'
import { Modal } from 'ui'
import NoSSR from '@/components/customs/NoSSR'
import { FormValues } from 'ui'
import { useOnRecord } from './hooks/useOnRecord'
import {
  AnnotationPage,
  PathologicalPage,
  DrugReactionPage,
  BloodDiseasesPage,
  TraumaPage,
  SurgicalPage,
  HereditaryPage,
  HabitsPage,
} from './pages'
import {
  drugReactionForm,
  bloodTransfusionForm,
  surgicalInterventionForm,
  habitsForm,
} from '@Constants/annamnesis'
import { TypeClinicalRecord } from '@/interfaces/patient'

const History = () => {
  // Declaracion del estado y valores iniciales
  const router = useRouter()
  const id = (router?.query.id as string) ?? ''

  const [typeClinicalRecord, setTypeClinicalRecord] =
    useState<TypeClinicalRecord | null>(null)
  const [isAddRecord, setIsAddRecord] = useState<boolean>(true)

  // Obtener los registros de la tienda
  const clinicalRecord = useSelector(
    (state: RootState) => state.patient.patient.clinicalRecord
  )

  // initial ref and states
  const modalRef = useRef<HTMLElement | null>(null)

  // Implementación del hook para consumir la API de pacientes
  const { onSendRecord, onRemoveRecord, onModifyRecord } = useOnRecord({
    id: id,
  })

  // functions to add - modify - delete records

  const onDelete = (idRecord: string, type: TypeClinicalRecord) => {
    console.log('Delete Element', idRecord, type)
    onRemoveRecord(idRecord, type)
  }

  // function handler submit para manejar los registros y actualizaciones
  const onSubmit = (record: FormValues) => {
    console.log('onSubmit drugReaction line 83', record, typeClinicalRecord)
    if (isAddRecord && typeClinicalRecord) {
      console.log('Add Element', typeClinicalRecord, record)
      onSendRecord(typeClinicalRecord, record)
    } else if (typeClinicalRecord) {
      console.log('Update Element', record.id, record, typeClinicalRecord)
      onModifyRecord(record.id, record, typeClinicalRecord)
    }
  }

  // hook manage state form inputs
  const { inputs, handleSubmit, handleChange, updateInputs, updateForm } =
    useForm(onSubmit)

  // handler modal
  const openModal = () => {
    if (modalRef?.current) modalRef.current.style.display = 'flex'
  }
  const closeModal = (event: any) => {
    event.preventDefault()
    if (modalRef?.current) modalRef.current.style.display = 'none'
  }

  // handlers actions forms

  const handleUpdateForm = (
    values: FormValues,
    form: InputForm[],
    type: TypeClinicalRecord
  ) => {
    updateForm(form)
    setTypeClinicalRecord(type)
    updateInputs(values)
    setIsAddRecord(false)
    openModal()
  }

  const handlerOpenForm = (form: InputForm[], type: TypeClinicalRecord) => {
    updateForm(form)
    setTypeClinicalRecord(type)
    setIsAddRecord(true)
    openModal()
  }

  return (
    <>
      <NoSSR>
        <Modal onClose={(event) => closeModal(event)} ref={modalRef}>
          <div style={{ maxWidth: '600px', fontFamily: 'roboto' }}>
            <Form
              id={'id'}
              title={'title'}
              subtitle={'subtitle'}
              inputs={inputs}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </Modal>
      </NoSSR>
      <div className={styles.container}>
        <h3 className={styles.title}>History Remota</h3>

        <AnnotationPage />
        <PathologicalPage timeline={clinicalRecord?.pathologicalHistory} />
        <DrugReactionPage
          records={clinicalRecord?.drugReaction}
          openForm={() => handlerOpenForm(drugReactionForm, 'drugReaction')}
          ondelete={(idRecord: string) => onDelete(idRecord, 'drugReaction')}
          onUpdate={(values: FormValues) =>
            handleUpdateForm(values, drugReactionForm, 'drugReaction')
          }
        />
        <BloodDiseasesPage
          records={clinicalRecord?.bloodTransfusion}
          openForm={() =>
            handlerOpenForm(bloodTransfusionForm, 'bloodTransfusion')
          }
          ondelete={(idRecord: string) =>
            onDelete(idRecord, 'bloodTransfusion')
          }
          onUpdate={(values: FormValues) =>
            handleUpdateForm(values, bloodTransfusionForm, 'bloodTransfusion')
          }
        />
        <TraumaPage headers={head} records={rows} />
        <SurgicalPage
          records={clinicalRecord?.surgicalIntervention}
          openForm={() =>
            handlerOpenForm(surgicalInterventionForm, 'surgicalIntervention')
          }
          ondelete={(idRecord: string) =>
            onDelete(idRecord, 'surgicalIntervention')
          }
          onUpdate={(values: FormValues) =>
            handleUpdateForm(
              values,
              surgicalInterventionForm,
              'surgicalIntervention'
            )
          }
        />
        <HereditaryPage />
        <HabitsPage
          records={clinicalRecord?.habits}
          openForm={() => handlerOpenForm(habitsForm, 'habits')}
          ondelete={(idRecord: string) => onDelete(idRecord, 'habits')}
          onUpdate={(values: FormValues) =>
            handleUpdateForm(values, habitsForm, 'habits')
          }
        />
      </div>
    </>
  )
}

export default History
