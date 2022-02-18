export const getProgressPointColor = (
  pointIndex: number,
  currentStep: number
) => {
  const mustPaint = pointIndex + 1 <= currentStep
  const isBreakStep = pointIndex % 2

  if (!mustPaint) return 'bg-slate-200'

  return isBreakStep
    ? 'bg-green-400 shadow-md shadow-green-200'
    : 'bg-orange-400 shadow-md shadow-orange-200'
}
