const defaultHeaders = new Headers({
  'content-Type': 'application/json',
})

export const post = (url: string, body: any, headers = defaultHeaders) => {
  return fetch(url, {
    method: 'POST',
    headers,
    body,
  }).then((res) => res.json())
}

export const get = (url: string, headers = defaultHeaders) => {
  return fetch(url, {
    headers,
  }).then((res) => res.json())
}

export const deleteHttp = (url: string, headers = defaultHeaders) => {
  return fetch(url, {
    method: 'DELETE',
    headers,
  }).then((res) => res.json())
}

export const authenticatedRequest = (token) => {
  const headers = new Headers({
    'x-api-token': token,
    'content-Type': 'application/json',
  })

  return {
    get: (url) => get(url, headers),
    delete: (url) => get(url, headers),
    post: (url, body) => post(url, body, headers),
  }
}
