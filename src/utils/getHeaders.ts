export const getHeaders = (data: any) => {
  const head = []

  for (const key in data) {
    head.push(data[key])
  }
  return head
}
