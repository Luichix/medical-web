import { InputForm } from 'ui'

export const INPUTS_PROFILE: InputForm[] = [
  {
    id: '1',
    name: 'name',
    label: 'Nombres',
    value: '',
    placeholder: '',
    type: 'text',
  },
  {
    id: '2',
    name: 'lastName',
    label: 'Apellidos',
    value: '',
    placeholder: '',
    type: 'text',
  },
  {
    id: '3',
    name: 'birthDate',
    label: 'Fecha de nacimiento',
    value: '',
    placeholder: '',
    type: 'date',
  },
  {
    id: '4',
    name: 'sex',
    label: 'Sexo',
    value: '',
    placeholder: '',
    type: 'select',
    options: [
      { value: 'M', label: 'masculino' },
      { value: 'F', label: 'femenino' },
    ],
  },
  {
    id: '5',
    name: 'maritalStatus',
    label: 'Estado civil',
    value: '',
    placeholder: '',
    type: 'select',
    options: [
      { value: 'single', label: 'soltero' },
      { value: 'married', label: 'casado' },
    ],
  },
  {
    id: '6',
    name: 'ethnicity',
    label: 'Etnia',
    value: '',
    placeholder: '',
    type: 'select',
  },
]
export const INPUTS_OCCUPATION: InputForm[] = [
  {
    id: '1',
    name: 'workingHours',
    label: 'Horario laboral',
    value: '',
    placeholder: '',
    type: 'text',
  },
  {
    id: '2',
    name: 'recreationTime',
    label: 'Tiempo de recreación',
    value: '',
    placeholder: '',
    type: 'text',
  },
  {
    id: '3',
    name: 'doExercises',
    label: 'Realiza ejercicio fisico?',
    value: '',
    placeholder: '',
    type: 'text',
  },
  {
    id: '4',
    name: 'exercicesFrecuency',
    label: 'Frecuencia',
    value: '',
    placeholder: '',
    type: 'text',
  },
  {
    id: '5',
    name: 'typeofExercise',
    label: 'Tipo de ejercicios',
    value: '',
    placeholder: '',
    type: 'text',
  },
]
export const INPUTS_CONDITION: InputForm[] = [
  {
    id: '1',
    name: 'description',
    label: 'Descripción',
    value: '',
    placeholder: '',
    type: 'text',
  },
]

const PATIENTS_INPUTS = { INPUTS_PROFILE, INPUTS_OCCUPATION, INPUTS_CONDITION }

export default PATIENTS_INPUTS
