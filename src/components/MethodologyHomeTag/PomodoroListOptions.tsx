import FlowTimeDescription from './PomodoroCustom'
import PomodoroDescription from './PomodoroDescription'
import PomodoroPlusDescription from './PomodoroPlusDescription'

interface Props {
  methodId: number
}

const PomodoroListOptions = ({ methodId }: Props) => {
  if (methodId === 0) return <PomodoroDescription />
  if (methodId === 1) return <PomodoroPlusDescription />
  if (methodId === 2) return <FlowTimeDescription />

  return null
}

export default PomodoroListOptions
