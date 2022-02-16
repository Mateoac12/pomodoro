import { useCallback } from 'react'

export const useNotifications = () => {
  const askPermission = useCallback(() => Notification.requestPermission(), [])

  const playNotification = useCallback(
    (message: string) =>
      askPermission().then(() => {
        if (Notification.permission !== 'denied') {
          return new Notification('Tomatito', {
            lang: 'es-ES',
            body: message,
          })
        }
      }),
    []
  )

  return {
    askPermission,
    playNotification,
  }
}
