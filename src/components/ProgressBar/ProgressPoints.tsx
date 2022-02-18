import { TrackerOptions } from 'config/navbarOptions'
import { getProgressPointColor } from 'utils/getProgressPointColor'

interface Props {
  rules: TrackerOptions[]
  step: number
}

const ProgressPoints = ({ rules, step }: Props) => {
  return (
    <>
      {rules.map((_: any, index: number) => (
        <div
          className={`w-4 h-4 rounded-full ${getProgressPointColor(
            index,
            step
          )}`}
          key={`progress-step-${index}`}
        ></div>
      ))}
    </>
  )
}

export default ProgressPoints
