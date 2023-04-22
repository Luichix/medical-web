import React, { useState } from 'react'
import { TextArea } from 'ui'
import { Titles } from '../components'

export const AnnotationPage = ({ records }: any) => {
  const [value, setValue] = useState(records[0].text)

  return (
    <Titles
      id="annotations"
      title="Anotaciones extras"
      subtitle="Esta sección es una linea del tiempo con las enfermedades que el paciente ha padecido con anterioridad."
    >
      <TextArea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Titles>
  )
}
