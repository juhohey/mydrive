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

export const put = (url: string, body: any, headers = defaultHeaders) => {
  return fetch(url, {
    method: 'PUT',
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

export const authenticatedRequest = (token: string) => {
  const headers = new Headers({
    'x-api-token': token,
  })

  return {
    get: (url) => get(url, headers),
    delete: (url) => deleteHttp(url, headers),
    post: (url, body) => post(url, body, headers),
    put: (url, body) => put(url, body, headers),
  }
}
