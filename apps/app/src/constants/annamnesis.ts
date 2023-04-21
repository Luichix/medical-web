import { InputForm } from 'ui'

export enum InputType {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  DATE = 'date',
  TIME = 'time',
  HIDDEN = 'hidden',
}

// Campos de entrada para Annotations Form
export const annotationsForm: InputForm[] = [
  {
    id: 'text',
    label: 'Text',
    value: '',
    name: 'text',
    placeholder: 'Enter text',
    type: InputType.TEXT,
  },
  {
    id: 'id',
    label: 'ID',
    value: '',
    name: 'id',
    placeholder: 'Enter ID',
    type: InputType.HIDDEN,
  },
]

// Campos de entrada para BloodTransfusion Form
export const bloodTransfusionForm: InputForm[] = [
  {
    id: 'title',
    label: 'Title',
    value: '',
    name: 'title',
    placeholder: 'Enter title',
    type: InputType.TEXT,
  },
  {
    id: 'description',
    label: 'Description',
    value: '',
    name: 'description',
    placeholder: 'Enter description',
    type: InputType.TEXT,
  },
  {
    id: 'type',
    label: 'Type',
    value: '',
    name: 'type',
    placeholder: 'Enter type',
    type: InputType.TEXT,
  },
  {
    id: 'level',
    label: 'Level',
    value: '',
    name: 'level',
    placeholder: 'Enter level',
    type: InputType.TEXT,
  },
  {
    id: 'date',
    label: 'Date',
    value: '',
    name: 'date',
    placeholder: 'Enter date',
    type: InputType.DATE,
  },
  {
    id: 'id',
    label: 'ID',
    value: '',
    name: 'id',
    placeholder: 'Enter ID',
    type: InputType.HIDDEN,
  },
]

// Campos de entrada para DrugReaction Form
export const drugReactionForm: InputForm[] = [
  {
    id: 'title',
    label: 'Title',
    value: '',
    name: 'title',
    placeholder: 'Enter title',
    type: InputType.TEXT,
  },
  {
    id: 'description',
    label: 'Description',
    value: '',
    name: 'description',
    placeholder: 'Enter description',
    type: InputType.TEXT,
  },
  {
    id: 'id',
    label: 'ID',
    value: '',
    name: 'id',
    placeholder: 'Enter ID',
    type: InputType.HIDDEN,
  },
]

// Campos de entrada para Habits Form
export const habitsForm: InputForm[] = [
  {
    id: 'title',
    label: 'Title',
    value: '',
    name: 'title',
    placeholder: 'Enter title',
    type: InputType.TEXT,
  },
  {
    id: 'description',
    label: 'Description',
    value: '',
    name: 'description',
    placeholder: 'Enter description',
    type: InputType.TEXT,
  },
  {
    id: 'id',
    label: 'ID',
    value: '',
    name: 'id',
    placeholder: 'Enter ID',
    type: InputType.HIDDEN,
  },
]

// Campos de entrada para HeritageHistory Form
export const heritageHistoryForm: InputForm[] = [
  {
    id: 'hierarchy',
    label: 'Hierarchy',
    value: '',
    name: 'hierarchy',
    placeholder: 'Enter hierarchy',
    type: InputType.TEXT,
  },
  {
    id: 'name',
    label: 'Name',
    value: '',
    name: 'name',
    placeholder: 'Enter name',
    type: InputType.TEXT,
  },
  {
    id: 'disease',
    label: 'Disease',
    value: '',
    name: 'disease',
    placeholder: 'Enter disease',
    type: InputType.TEXT,
  },
  {
    id: 'patient',
    label: 'Patient',
    value: '',
    name: 'patient',
    placeholder: 'Enter patient',
    type: InputType.TEXT,
  },
  {
    id: 'description',
    label: 'Description',
    value: '',
    name: 'description',
    placeholder: 'Enter description',
    type: InputType.TEXT,
  },
  {
    id: 'id',
    label: 'ID',
    value: '',
    name: 'id',
    placeholder: 'Enter ID',
    type: InputType.HIDDEN,
  },
]

// Campos de entrada para PathologicalHistory Form
export const pathologicalHistoryForm: InputForm[] = [
  {
    id: 'date',
    label: 'Date',
    value: '',
    name: 'date',
    placeholder: 'Enter date',
    type: InputType.DATE,
  },
  {
    id: 'title',
    label: 'Title',
    value: '',
    name: 'title',
    placeholder: 'Enter title',
    type: InputType.TEXT,
  },
  {
    id: 'id',
    label: 'ID',
    value: '',
    name: 'id',
    placeholder: 'Enter ID',
    type: InputType.HIDDEN,
  },
]

// Campos de entrada para SurgicalIntervention Form
export const surgicalInterventionForm: InputForm[] = [
  {
    id: 'title',
    label: 'Title',
    value: '',
    name: 'title',
    placeholder: 'Enter title',
    type: InputType.TEXT,
  },
  {
    id: 'description',
    label: 'Description',
    value: '',
    name: 'description',
    placeholder: 'Enter description',
    type: InputType.TEXT,
  },
  {
    id: 'date',
    label: 'Date',
    value: '',
    name: 'date',
    placeholder: 'Enter date',
    type: InputType.DATE,
  },
  {
    id: 'id',
    label: 'ID',
    value: '',
    name: 'id',
    placeholder: 'Enter ID',
    type: InputType.HIDDEN,
  },
]

export const traumaForm: InputForm[] = [
  {
    id: 'traumaTitle',
    label: 'Title',
    value: '',
    name: 'title',
    placeholder: 'Enter title',
    type: InputType.TEXT,
  },
  {
    id: 'traumaDescription',
    label: 'Description',
    value: '',
    name: 'description',
    placeholder: 'Enter description',
    type: InputType.TEXTAREA,
  },
  {
    id: 'traumaType',
    label: 'Type',
    value: '',
    name: 'type',
    placeholder: 'Select type',
    type: InputType.SELECT,
    options: [
      { value: 'physical', label: 'Physical' },
      { value: 'emotional', label: 'Emotional' },
      { value: 'sexual', label: 'Sexual' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 'traumaLevel',
    label: 'Level',
    value: '',
    name: 'level',
    placeholder: 'Select level',
    type: InputType.SELECT,
    options: [
      { value: 'mild', label: 'Mild' },
      { value: 'moderate', label: 'Moderate' },
      { value: 'severe', label: 'Severe' },
    ],
  },
  {
    id: 'traumaDate',
    label: 'Date',
    value: '',
    name: 'date',
    placeholder: 'Enter date',
    type: InputType.DATE,
  },
  {
    id: 'traumaFileURL',
    label: 'File URL',
    value: '',
    name: 'fileURL',
    placeholder: 'Enter file URL',
    type: InputType.TEXT,
  },
]
