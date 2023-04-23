const headers = new Headers({
  'x-user': 'alice',
  'content-Type': 'application/json',
  accept: 'application/json',
})

export const post = (url: string, body: any) => {
  const headers = new Headers({
    'x-user': 'alice',
  })

  return fetch(url, {
    method: 'POST',
    headers,
    body,
  })
}

export const get = (url: string) => {
  return fetch(url, {
    headers,
  }).then((res) => res.json())
}

export const deleteHttp = (url: string) => {
  return fetch(url, {
    method: 'DELETE',
    headers,
  }).then((res) => res.json())
}
