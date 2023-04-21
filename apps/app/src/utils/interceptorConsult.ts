import { Consultation, ConsultationRecord } from '@/interfaces/consult'

export const interceptorConsult = (
  data: Consultation[]
): ConsultationRecord[] => {
  const newData = data.map((element) => {
    return {
      _id: element._id,
      title: element.record.title,
      date: element.record.date,
      laboratoryOrder: element.record.laboratoryOrder
        ? 'Realizado'
        : 'No realizado',
      prescription: element.record.prescription ? 'Realizado' : 'No realizado',
      treatment: element.record.treatment ? 'Realizado' : 'No realizado',
    }
  })

  return newData
}
