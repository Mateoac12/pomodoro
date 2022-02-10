/**
 * @description - This function is used to transform the minute number to the time of timer. Example: you send number 5, so the timer will be 5 minutes.
 * @param {number} minutes - The number of minutes.
 */
export const getCounterTime = (minutes: number): Date => {
  const initialTime = new Date()
  initialTime.setSeconds(initialTime.getSeconds() + minutes * 60)

  return initialTime
}
