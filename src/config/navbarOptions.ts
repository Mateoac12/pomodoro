export interface NavbarOptions {
  id: number
  name: string
  url: string
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
    url: '/dashboard',
  },
  {
    id: 2,
    name: 'Configuración',
    url: '/config',
  },
]
