import { Patient } from '@/interfaces/patient'

export const transformDataPatient = (data: Patient[]) => {
  const newData = data.map((element) => {
    return {
      patient: element.uid,
      patientID: element.uid,
      fecha: element.registrationDate,
      processID: element._id,
    }
  })

  return newData
}
