export type InputType =
  | 'text'
  | 'textarea'
  | 'select'
  | 'date'
  | 'time'
  | 'hidden'

export interface InputForm {
  id: string
  label: string
  value: string
  name: string
  placeholder: string
  type: InputType
  options?: Record<string, string>[]
}

export type NewInput = Pick<
  InputForm,
  'name' | 'placeholder' | 'label' | 'type'
>

export interface FormValues {
  [key: string]: any
}
