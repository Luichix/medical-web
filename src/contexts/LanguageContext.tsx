'use client'
import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { Language, ILanguageContext } from '@/interfaces/context'
import { saveToStorage, loadFromStorage } from '@/utils/localStorage'

export const LanguageContext = createContext<ILanguageContext>({
  language: 'es',
  changeLanguage: () => {},
})

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    loadFromStorage('@languageMedical').then((value) => {
      if (value === 'en' || value === 'es') {
        setLanguage(value)
      } else {
        saveToStorage('@languageMedical', 'es')
      }
    })
  }, [])

  const changeLanguage = (language: Language) => {
    if (language === 'en') {
      saveToStorage('@languageMedical', 'en')
      setLanguage('en')
    } else if (language === 'es') {
      saveToStorage('@languageMedical', 'es')
      setLanguage('es')
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        changeLanguage,
        language,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
