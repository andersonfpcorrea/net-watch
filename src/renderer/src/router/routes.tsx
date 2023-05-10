import { Home, Config, Dashboard } from '@renderer/pages'
import { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/config',
    element: <Config />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]
