export const getRelativeTime = (time: any) => {
  const numberOfDate = time.toDate().getDate()
  const currentDate = new Date().getDate()

  const differenceOfDates = numberOfDate - currentDate

  const ruleOfNormalizedDate = new Intl.RelativeTimeFormat('es', {
    numeric: 'auto',
  })
  const normalizedDate = ruleOfNormalizedDate.format(differenceOfDates, 'day')

  return {
    normalizedDate,
  }
}
