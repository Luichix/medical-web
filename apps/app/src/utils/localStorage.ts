export const loadFromStorage = async (key: string) => {
  try {
    const serialisedState = await localStorage.getItem(key)
    if (serialisedState === null) return null
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return null
  }
}
export const saveToStorage = async (key: string, value: string) => {
  try {
    const serialisedState = JSON.stringify(value)
    await localStorage.setItem(key, serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

export const removeToStorage = async (key: string) => {
  try {
    await localStorage.removeItem(key)
  } catch (e) {
    console.warn(e)
  }
}
