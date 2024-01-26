import { useEffect, useState } from 'react'

type UNITS = [string, number][]

const DATE_UNITS: UNITS = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
]

const getDateDiffs = (timestamp: number) => {
  const now = Date.now()
  const elapsed: number = (timestamp - now) / 1000

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.floor(elapsed / secondsInUnit)
      return {
        value,
        unit,
      }
    }
  }
  return {
    value: 0,
    unit: 'day',
  }
}

export default function useTimeRest(timestamp: number) {
  const [time, setTime] = useState(() => getDateDiffs(timestamp))

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getDateDiffs(timestamp)
      setTime(newTime)
    }, 60000)

    return () => {
      clearInterval(interval)
    }
  }, [timestamp])

  const rtf = new Intl.RelativeTimeFormat('es', {
    style: 'short',
  })

  const { value, unit } = time

  return rtf.format(value, unit as any)
}
