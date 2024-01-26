'use client'

import getStore from './store'
import { Provider } from 'react-redux'

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = getStore()
  return <Provider store={store}>{children}</Provider>
}
