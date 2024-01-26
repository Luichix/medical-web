import { FormEvent, ChangeEvent, useState } from 'react'

export const DateTime = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [startTime, setStartTime] = useState(
    new Date().toISOString().slice(11, 5)
  )
  const [endTime, setEndTime] = useState(
    new Date(Date.now() + 60 * 60 * 1000).toISOString().slice(11, 5)
  )

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(date, startTime, endTime)
  }

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  const handleStartTimeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStartTime(event.target.value)
  }

  const handleEndTimeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setEndTime(event.target.value)
  }

  const timeOptions = []
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 2; j++) {
      const hour = i.toString().padStart(2, '0')
      const minute = (j * 30).toString().padStart(2, '0')
      timeOptions.push(`${hour}:${minute}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        placeholder="Fecha"
        style={{ flex: 1 }}
      />
      <select
        value={startTime}
        onChange={handleStartTimeChange}
        style={{ flex: 0 }}
      >
        {timeOptions.map((time) => (
          <option value={time} key={time}>
            {time}
          </option>
        ))}
      </select>
      <select
        value={endTime}
        onChange={handleEndTimeChange}
        style={{ flex: 0 }}
      >
        {timeOptions.map((time) => (
          <option value={time} key={time}>
            {time}
          </option>
        ))}
      </select>
    </form>
  )
}
