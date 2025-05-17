import NavBar from './components/navbar'
import cls from 'classnames'

import './assets/base.css'
import Avatar from './components/avatar'
import Setting from './components/setting'
import { Outlet } from 'react-router'
function App(): React.ReactNode {
  return (
    <div className={cls('main')}>
      <div className="left-bar">
        <div className="left-content-container">
          <Avatar />
          <NavBar />
          <Setting />
        </div>
      </div>
      <div className="right-main-content">
        <Outlet />
      </div>
    </div>
  )
}

export default App
