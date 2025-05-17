import App from '@renderer/App'
import FloatClock from '@renderer/pages/float'
import HomePage from '@renderer/pages/home'
import { createHashRouter } from 'react-router'

export const router = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '/',
        Component: HomePage
      }
    ]
  },
  {
    path: '/float',
    Component: FloatClock
  }
])
