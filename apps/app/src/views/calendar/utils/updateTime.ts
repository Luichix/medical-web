// Actualizar el estado de los periodos

export const updatePreviousMonth = ({
  year,
  month,
}: {
  year: number
  month: number
}): { updateMonth: number; updateYear: number } => {
  if (month === 0) {
    return {
      updateMonth: 11,
      updateYear: year - 1,
    }
  }
  return {
    updateMonth: month - 1,
    updateYear: year,
  }
}

export const updateNextMonth = ({
  year,
  month,
}: {
  year: number
  month: number
}): { updateMonth: number; updateYear: number } => {
  if (month === 11) {
    return {
      updateMonth: 0,
      updateYear: year + 1,
    }
  }
  return {
    updateMonth: month + 1,
    updateYear: year,
  }
}
