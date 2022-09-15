import { toTitleCase } from './toTitleCase'

export const streetNameModifier = (name: string) => {
  // change street name "6032 rua santa luzia" to "rua santa luzia, 6032"
  let newName = name.replace(/(\d+)\s(\D+)/i, '$2, $1')

  // To uppercarse all roman algarism
  newName = newName.replace(/\b[LXIVCDM]+\b/gi, a => a.toUpperCase())

  return toTitleCase(newName)
}
