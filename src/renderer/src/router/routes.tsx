import { Home, Config } from '@renderer/pages'
import { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/config',
    element: <Config />
  }
]
