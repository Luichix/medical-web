import { useState, useEffect } from 'react'
import { AlertType } from '../../types'

export const useAlert = (): [
  boolean,
  string,
  AlertType,
  (message: string, alert: AlertType) => void
] => {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('')
  const [alert, setType] = useState<AlertType>('none')

  const showAlert = (message: string, alert: AlertType) => {
    setMessage(message)
    setType(alert)
    setShow(true)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [show])

  return [show, message, alert, showAlert]
}

export default useAlert
