import { PatientInformation } from '@/interfaces/patient'

export interface RecordList {
  label: string
  value: string
}

export interface ListProps {
  id: string
  title: string
  subtitle: string
  recordList: RecordList[]
}

export function transformPatientInformationToRecordList(
  patientInformation: PatientInformation
): ListProps[] {
  if (!patientInformation) return []

  const { basicInformation, ocupationAndLifeStyle, sanitaryServices } =
    patientInformation

  const basicInformationList: RecordList[] = [
    { label: 'Name', value: basicInformation.name },
    { label: 'Last Name', value: basicInformation.lastName },
    { label: 'Birth Date', value: basicInformation.birthDate },
    { label: 'Sex', value: basicInformation.sex },
    { label: 'Marital Status', value: basicInformation.maritalStatus },
    { label: 'Ethnicity', value: basicInformation.ethnicity },
  ]

  const ocupationAndLifeStyleList: RecordList[] = [
    {
      label: 'Working Hours',
      value: ocupationAndLifeStyle.workingHours.toString(),
    },
    {
      label: 'Recreation Time',
      value: ocupationAndLifeStyle.recreationTime.toString(),
    },
    {
      label: 'Do Exercises',
      value: ocupationAndLifeStyle.doExercises ? 'Yes' : 'No',
    },
    {
      label: 'Exercises Frequency',
      value: ocupationAndLifeStyle.exercicesFrequency,
    },
    {
      label: 'Type of Exercises',
      value: ocupationAndLifeStyle.typeofExcercices,
    },
  ]

  const sanitaryServicesList: RecordList[] = [
    { label: 'Description', value: sanitaryServices.description },
  ]

  return [
    {
      id: 'profile',
      title: 'Perfil del Paciente',
      subtitle:
        'La información que se presenta a continuación es el perfil privado del paciente.',
      recordList: basicInformationList,
    },
    {
      id: 'occupation',
      title: 'Ocupacion y estilo de vida',
      subtitle:
        'En esta sección se presenta la ocupación del paciente y su estilo de vida.',
      recordList: ocupationAndLifeStyleList,
    },
    {
      id: 'conditions',
      title: 'Condiciones higuienico sanitarias',
      subtitle:
        'En esta sección se presenta la ocupación del paciente y su estilo de vida.',
      recordList: sanitaryServicesList,
    },
  ]
}
