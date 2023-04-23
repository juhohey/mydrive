export const getTokenFromStorage = () => {
  return window.localStorage.getItem('x-api-token') || ''
}

export const setTokenToStorage = (token) => {
  return window.localStorage.setItem('x-api-token', token)
}
