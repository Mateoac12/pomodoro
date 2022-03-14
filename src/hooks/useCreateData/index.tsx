import { createData } from 'api/firebase/getSchedules'
import { useLogin } from 'hooks/useLogin/useLogin'

export const useCreateData = () => {
  const { user } = useLogin()
  const { loginHint, tokenId } = user

  const createScheduleInDB = ({ timer }: any) => {
    if (tokenId) {
      const dataToDDBB = {
        userId: tokenId,
        uniqueId: loginHint,
        schedules: [
          {
            ...timer,
          },
        ],
      }

      createData(dataToDDBB as any).then((res) => res)
    }
  }

  return { createScheduleInDB }
}
