import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
import { Provider } from 'react-redux'
import { getTokenFromStorage } from '../client/localStorage'
import store from '../store/store'
import '../styles/auth.css'
import '../styles/dialog.css'
import '../styles/file.css'
import '../styles/globals.css'
import '../styles/layout.css'
import '../styles/margin.css'
import '../styles/upload.css'
import '../styles/user.css'
import Auth from './login'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const isLoggedIn = Boolean(getTokenFromStorage())
  const shouldLogin = !isLoggedIn && router.pathname !== '/login'
  if (shouldLogin) {
    router.replace('/login')
    return <Auth />
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})
