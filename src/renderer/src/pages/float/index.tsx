import { useEffect, useRef } from 'react'
import './index.css'
const FloatClock = (): React.ReactNode => {
  const floatWindowRef = useRef<HTMLDivElement>(null)
  const bias = useRef({ biasX: 0, biasY: 0 })

  const initFloatWindow = (): void => {
    floatWindowRef.current?.addEventListener('mousedown', (e) => {
      switch (e.button) {
        case 0:
          bias.current.biasX = e.x
          bias.current.biasY = e.y

          document.addEventListener('mousemove', moveEvent)
      }
    })
    floatWindowRef.current?.addEventListener('mouseup', () => {
      bias.current.biasX = 0
      bias.current.biasY = 0
      document.removeEventListener('mousemove', moveEvent)
    })
  }

  const moveEvent = (e: MouseEvent): void => {
    window.api.floatWindowMove({
      x: e.screenX - bias.current.biasX,
      y: e.screenY - bias.current.biasY
    })
  }

  useEffect(() => {
    initFloatWindow()
  })

  return (
    <div className="float-clock" ref={floatWindowRef}>
      Float
    </div>
  )
}

export default FloatClock
