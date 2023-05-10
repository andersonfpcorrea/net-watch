import { RouterProvider as ReactRouterProvider, createHashRouter } from 'react-router-dom'
import { routes } from './routes'

const router = createHashRouter(routes)

export function RouterProvider(): JSX.Element {
  return <ReactRouterProvider router={router} />
}
