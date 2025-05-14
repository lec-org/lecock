import App from '@renderer/App'
import FloatClock from '@renderer/pages/float'
import { createHashRouter } from 'react-router'

export const router = createHashRouter([
  {
    path: '/',
    Component: App
  },
  {
    path: '/float',
    Component: FloatClock
  }
])
