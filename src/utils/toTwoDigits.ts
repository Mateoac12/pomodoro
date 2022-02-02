export const toTwoDigits = (num: number): string => {
  return num.toLocaleString('es-ES', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
}
