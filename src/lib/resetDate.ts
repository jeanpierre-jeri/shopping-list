export const resetDate = (date: string) => {
  return new Date(date).toLocaleDateString('en', { weekday: 'short', day: 'numeric', month: 'numeric', year: 'numeric' }).replace(/\//g, '.')
}
