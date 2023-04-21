import '@Styles/index.css'
import {
  AuthProvider,
  GraphqlProvider,
  LanguageProvider,
  ThemeProvider,
} from '@Contexts/index'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { Provider } from 'react-redux'
import getStore from '@/store/store'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const store = getStore(pageProps.initialState)
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <LanguageProvider>
      <ThemeProvider>
        <GraphqlProvider>
          <AuthProvider>
            <Provider store={store}>
              {getLayout(<Component {...pageProps} />)}
            </Provider>
          </AuthProvider>
        </GraphqlProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}
