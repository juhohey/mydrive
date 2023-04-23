import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'

import '../styles/globals.css'
import '../styles/layout.css'
import '../styles/dialog.css'
import '../styles/upload.css'
import '../styles/margin.css'
import '../styles/file.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
