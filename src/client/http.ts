const headers = new Headers({
  'x-user': 'alice',
})

export const post = (url: string, body: any) => {
  return fetch(url, {
    headers,
    method: 'POST',
    body,
  })
}

export const get = (url: string) => {
  return fetch(url, {
    headers,
  }).then((res) => res.json())
}
