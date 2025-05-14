import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron'
export interface WindowApi {
  getWindow: () => BrowserWindow
  show: () => void
  hide: () => void
  close: () => void
  isVisible: () => boolean
  isDestroyed: () => boolean
}

export type Res = [BrowserWindow, WindowApi]

export function createBrowserWindow(options?: BrowserWindowConstructorOptions): Res {
  const windowInstance = new BrowserWindow(options)
  return [
    windowInstance,
    {
      getWindow: () => windowInstance,
      show: () => windowInstance.show(),
      hide: () => windowInstance.hide(),
      close: () => windowInstance.close(),
      isVisible: () => windowInstance.isVisible(),
      isDestroyed: () => windowInstance.isDestroyed()
    }
  ]
}
