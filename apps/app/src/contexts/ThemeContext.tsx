import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { IThemeContext, Theme } from '@Interfaces/context'
import { saveToStorage, loadFromStorage } from '@/utils/localStorage'

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  changeTheme() {},
})

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    initialTheme()
  }, [])

  const initialTheme = async () => {
    const value = loadFromStorage('@themeMedical') as Promise<Theme>
    if ((await value) === 'dark') {
      setTheme('dark')
    } else {
      saveToStorage('@themeMedical', 'light')
      setTheme('light')
    }
  }

  const changeTheme = () => {
    if (theme === 'dark') {
      saveToStorage('@themeMedical', 'light')
      setTheme('light')
    } else {
      saveToStorage('@themeMedical', 'dark')
      setTheme('dark')
    }
  }

  const value = {
    changeTheme,
    theme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
