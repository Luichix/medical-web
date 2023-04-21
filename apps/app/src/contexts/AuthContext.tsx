import { useState, createContext, PropsWithChildren } from 'react'
import { IAuthContext, TAuth } from '@Interfaces/context'

export const AuthContext = createContext<IAuthContext | null>(null)

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState({})

  const loginAuth = (auth: TAuth) => {
    if (auth) setAuth(auth)
  }

  const logoutAuth = () => {
    setAuth({})
  }

  return (
    <AuthContext.Provider value={{ auth, loginAuth, logoutAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
