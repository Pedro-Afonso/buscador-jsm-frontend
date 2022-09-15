export const toTitleCase = (
  name: string,
  exceptions = /((\b\s(do|da|de|dos|das|e)\b))/gi
) => {
  // Change name "josé da silva dos santos" to "José da Silva dos Santos"
  return name
    .replace(/(^\w|\s\w)/g, a => a.toUpperCase())
    .replace(exceptions, a => a.toLowerCase())
}
