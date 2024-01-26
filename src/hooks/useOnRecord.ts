import PatientData, { TypeRecordEnum } from '@/services/Patient'
import {
  addRecord,
  deleteRecord,
  updateRecord,
} from '@/store/slices/patient.slice'
import { useAppDispatch } from '@/store/store'
import { TypeClinicalRecord, TypeRecord } from '@/interfaces/patient'

export const useOnRecord = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch()

  const onSendRecord = async (
    type: TypeClinicalRecord,
    record: Record<string, string>,
  ) => {
    if (typeof id !== 'string') {
      throw Error('No sea indicado un paciente en la ruta')
    }

    const typeRecord: TypeRecord = TypeRecordEnum[type]

    await PatientData.addRecord(id, typeRecord, record)
      .then((res) => {
        console.log('🚀 ~ file: useOnRecord.ts:20 ~ .then ~ res:', res)
        const data = {
          id: id,
          typeRecord: type,
          record: record,
        }
        dispatch(addRecord(data))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onRemoveRecord = async (idRecord: string, type: TypeClinicalRecord) => {
    if (typeof id !== 'string') {
      throw Error('No se a añadido el id del paciente')
    }

    const typeRecord: TypeRecord = TypeRecordEnum[type]
    await PatientData.deleteRecord(id, idRecord, typeRecord)
      .then((res) => {
        console.log('🚀 ~ file: useOnRecord.ts:41 ~ .then ~ res:', res)
        const data = {
          id: id,
          typeRecord: type,
          record: { id: idRecord },
        }

        dispatch(deleteRecord(data))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onModifyRecord = async (
    idRecord: string,
    record: Record<string, string>,
    type: TypeClinicalRecord,
  ) => {
    if (typeof id !== 'string') {
      throw Error('No sea indicado un paciente en la ruta')
    }

    const typeRecord: TypeRecord = TypeRecordEnum[type]

    await PatientData.updateRecord(id, typeRecord, idRecord, record)
      .then((res) => {
        console.log('🚀 ~ file: useOnRecord.ts:70 ~ .then ~ res:', res)
        const data = {
          id: id,
          typeRecord: type,
          record: record,
        }
        dispatch(updateRecord(data))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return {
    onSendRecord,
    onRemoveRecord,
    onModifyRecord,
  }
}
