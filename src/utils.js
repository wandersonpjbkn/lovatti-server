export const codeDate = () => {
  let d = new Date()
  return `#${String(d.getFullYear()).substr(2,2)}${d.getHours() + d.getMinutes() + d.getMilliseconds()}`
}
