export interface NavbarOptions {
  id: number
  name: string
  url?: string
  handlerName?: 'config' | 'panel'
}

export interface TrackerOptions {
  id: number
  name: string
  rules: TrackerRules[]
}

export interface TrackerRules {
  flip: number
  time: number
  isWorkTime: true | false
}

// is important to have a numeric id because it is used as a delay for the animation
export const navbarOptions: NavbarOptions[] = [
  {
    id: 0,
    name: 'Inicio',
    url: '/',
  },
  {
    id: 1,
    name: 'Panel de tiempo',
    handlerName: 'panel',
  },
  {
    id: 2,
    name: 'Configuración',
    handlerName: 'config',
  },
]

export const trackerOptions: TrackerOptions[] = [
  {
    id: 0,
    name: 'Pomodoro',
    rules: [
      {
        flip: 0,
        time: 5,
        isWorkTime: true,
      },
      {
        flip: 1,
        time: 5,
        isWorkTime: false,
      },
      {
        flip: 2,
        time: 25,
        isWorkTime: true,
      },
      {
        flip: 3,
        time: 5,
        isWorkTime: false,
      },
      {
        flip: 4,
        time: 25,
        isWorkTime: true,
      },
      {
        flip: 5,
        time: 5,
        isWorkTime: false,
      },
      {
        flip: 6,
        time: 25,
        isWorkTime: true,
      },
      {
        flip: 7,
        time: 15,
        isWorkTime: false,
      },
    ],
  },
  {
    id: 1,
    name: 'Pomodoro+',
    rules: [
      {
        flip: 0,
        time: 45,
        isWorkTime: true,
      },
      {
        flip: 1,
        time: 15,
        isWorkTime: false,
      },
    ],
  },
  {
    id: 2,
    name: 'FlowTime',
    rules: [
      {
        flip: 0,
        time: 90,
        isWorkTime: true,
      },
      {
        flip: 1,
        time: 10,
        isWorkTime: false,
      },
    ],
  },
]
