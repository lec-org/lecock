import Avatar from './components/avatar'
import NavBar from './components/navbar'
import Setting from './components/setting'
import cls from 'classnames'

import './assets/base.css'
function App(): React.JSX.Element {
  return (
    <div
      className={cls('main', {
        'mica-light ': true
      })}
    >
      <div className="left-nav-bar">
        <Avatar />
        <NavBar />
        <Setting />
      </div>
      <div className="right-main-content"></div>
    </div>
  )
}

export default App
