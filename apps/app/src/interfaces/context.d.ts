/* ---------------------------------- types ---------------------------------- */

export type Language = 'en' | 'es'
export type Theme = 'light' | 'dark'
export type TAuth = object

/* ------------------------------- interfaces ------------------------------- */

export interface ILanguageContext {
  language: Language
  changeLanguage: (language: Language) => void
}

export interface IThemeContext {
  theme: Theme
  changeTheme: () => void
}

export interface IAuthContext {
  auth: TAuth
  loginAuth: (auth: TAuth) => void
  logoutAuth: () => void
}
