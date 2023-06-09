import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { post } from '../client/http'
import { setTokenToStorage } from '../client/localStorage'
import { apiRouteLogin } from '../client/routes'
import Dialog from '../components/Dialog/Dialog'
import Header from '../components/Header/Header'
import IconLoading from '../components/Icons/Loading'

export default function Auth() {
  const [status, setStatus] = useState('initial')
  const router = useRouter()

  const onLogin = async (id) => {
    try {
      setStatus('loading')

      const res = await post(apiRouteLogin, JSON.stringify({ userId: id }))

      setStatus('success')
      setTokenToStorage(res.token)

      setTimeout(() => {
        router.push('/')
      }, 1000)
    } catch (error) {
      console.log(error)
    }
  }

  const isInitial = status === 'initial'
  const isLoading = status === 'loading'
  const isAuthenticated = status === 'success'

  return (
    <div>
      <Header>Placehold</Header>
      <Dialog isOpen={true} onClose={() => {}} hasActions={false}>
        <div className="align-center">
          <h1 className="m-b-2">Welcome user</h1>
          {isAuthenticated ? (
            <h3>Logged in! Please wait...</h3>
          ) : (
            <h3>Please log in.</h3>
          )}

          <div className="auth__loading">{isLoading && <IconLoading />}</div>
          <div className="auth__actions">
            <button
              className="auth__login"
              disabled={!isInitial}
              onClick={() => {
                onLogin('alice')
              }}
            >
              Login as Alice
            </button>
            <button
              className="auth__login"
              disabled={!isInitial}
              onClick={() => {
                onLogin('bob')
              }}
            >
              Login as Bob
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
